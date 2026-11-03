/* si/mixoval — MixRec: nahráva zvuk z ľubovoľného Web Audio uzla rovno do MP3.
   Používa lame.min.js (lamejs). Nič sa nikam nenahráva, všetko ostáva v prehliadači.
   Dlhý set nezaberá veľa pamäte: do MP3 sa kóduje po blokoch (hodina pri 320 kbps ≈ 144 MB). */
(function (g) {
  'use strict';

  var WORKLET = [
    'class P extends AudioWorkletProcessor{',
    'constructor(){super();this.on=true;this.n=0;this.l=new Float32Array(4096);this.r=new Float32Array(4096);',
    'this.port.onmessage=(e)=>{if(e.data==="stop"){this.on=false;if(this.n)this.flush();this.port.postMessage({done:true});}};}',
    'flush(){this.port.postMessage({l:this.l.slice(0,this.n),r:this.r.slice(0,this.n)});this.n=0;}',
    'process(inputs){const i=inputs[0];if(!this.on)return false;if(!i||!i[0])return true;',
    'const a=i[0],b=i[1]||i[0];for(let k=0;k<a.length;k++){this.l[this.n]=a[k];this.r[this.n]=b[k];this.n++;if(this.n===4096)this.flush();}return true;}}',
    'registerProcessor("mx-rec",P);'
  ].join('');

  var RATES = [8000, 11025, 12000, 16000, 22050, 24000, 32000, 44100, 48000];

  function MixRec(ctx, src, kbps) {
    this.ctx = ctx; this.src = src; this.kbps = kbps || 320;
    this.parts = []; this.bytes = 0; this.frames = 0;
    this.remL = new Int16Array(0); this.remR = new Int16Array(0);
    this.node = null; this.mute = null; this.active = false;
  }

  MixRec.supported = function () {
    return typeof g.lamejs !== 'undefined' && !!(g.AudioContext || g.webkitAudioContext);
  };

  MixRec.prototype.start = async function () {
    var ctx = this.ctx, self = this;
    if (RATES.indexOf(ctx.sampleRate) < 0) throw new Error('Vzorkovanie ' + ctx.sampleRate + ' Hz sa do MP3 nedá zapísať.');
    this.enc = new g.lamejs.Mp3Encoder(2, ctx.sampleRate, this.kbps);
    this.mute = ctx.createGain(); this.mute.gain.value = 0; this.mute.connect(ctx.destination);

    if (ctx.audioWorklet && g.AudioWorkletNode) {
      var url = URL.createObjectURL(new Blob([WORKLET], { type: 'text/javascript' }));
      try { await ctx.audioWorklet.addModule(url); } finally { URL.revokeObjectURL(url); }
      this.node = new g.AudioWorkletNode(ctx, 'mx-rec', { numberOfInputs: 1, numberOfOutputs: 1, outputChannelCount: [2], channelCount: 2, channelCountMode: 'explicit' });
      this.node.port.onmessage = function (e) {
        if (e.data.done) { if (self._done) self._done(); return; }
        if (self.active || self._stopping) self.push(e.data.l, e.data.r);
      };
    } else {
      this.node = ctx.createScriptProcessor(4096, 2, 2);
      this.node.onaudioprocess = function (e) {
        if (!self.active) return;
        var a = e.inputBuffer.getChannelData(0);
        var b = e.inputBuffer.numberOfChannels > 1 ? e.inputBuffer.getChannelData(1) : a;
        self.push(new Float32Array(a), new Float32Array(b));
      };
    }
    this.src.connect(this.node);
    this.node.connect(this.mute);
    this.active = true;
  };

  function toI16(f) {
    var o = new Int16Array(f.length);
    for (var i = 0; i < f.length; i++) {
      var s = f[i]; s = s > 1 ? 1 : s < -1 ? -1 : s;
      o[i] = s < 0 ? s * 32768 : s * 32767;
    }
    return o;
  }
  function cat(a, b) { if (!a.length) return b; var o = new Int16Array(a.length + b.length); o.set(a); o.set(b, a.length); return o; }

  MixRec.prototype.push = function (l, r) {
    var L = cat(this.remL, toI16(l)), R = cat(this.remR, toI16(r));
    var n = L.length - (L.length % 1152), i;
    for (i = 0; i < n; i += 1152) {
      var d = this.enc.encodeBuffer(L.subarray(i, i + 1152), R.subarray(i, i + 1152));
      if (d.length) { this.parts.push(d); this.bytes += d.length; }
    }
    this.frames += n;
    this.remL = L.slice(n); this.remR = R.slice(n);
  };

  MixRec.prototype.seconds = function () { return this.frames / this.ctx.sampleRate; };

  MixRec.prototype.stop = async function () {
    var self = this;
    if (!this.active) return null;
    this.active = false; this._stopping = true;
    if (this.node.port) {
      await new Promise(function (res) { self._done = res; self.node.port.postMessage('stop'); setTimeout(res, 600); });
    }
    try { this.src.disconnect(this.node); } catch (e) {}
    try { this.node.disconnect(); this.mute.disconnect(); } catch (e) {}
    this._stopping = false;
    if (this.remL.length) {
      var d = this.enc.encodeBuffer(this.remL, this.remR);
      if (d.length) { this.parts.push(d); this.bytes += d.length; }
      this.frames += this.remL.length;
    }
    var f = this.enc.flush();
    if (f.length) { this.parts.push(f); this.bytes += f.length; }
    return new Blob(this.parts, { type: 'audio/mpeg' });
  };

  g.MixRec = MixRec;
})(window);
