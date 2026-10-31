/* motion.js: scroll choreography for the home page.
   Rules: only transform + opacity, one requestAnimationFrame per scroll, nothing measured outside
   that frame, everything off when the visitor prefers reduced motion. Every hook is optional, so
   the file is safe on a page where an element is missing. */
(function () {
  'use strict';
  if (window.__rdMotion) return; window.__rdMotion = true;
  var mq = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : { matches: false };
  var hero = document.querySelector('.hero-in');
  var heroSec = document.querySelector('.hero');
  var pics = [];          // parallax pictures, each { box, img, on }
  var raf = 0, heroH = 0, vh = window.innerHeight || 800;

  function measure() { vh = window.innerHeight || vh; heroH = heroSec ? heroSec.offsetHeight : 0; }
  function clear() {
    if (hero) { hero.style.transform = ''; hero.style.opacity = ''; }
    pics.forEach(function (p) { p.img.style.transform = ''; });
  }
  function frame() {
    raf = 0;
    if (mq.matches) return;
    var y = window.scrollY || window.pageYOffset || 0;
    // hero: the text drifts down a little slower than the page and fades out, like a cover sliding under the content
    if (hero && heroH) {
      if (y < heroH) {
        hero.style.transform = 'translate3d(0,' + (y * .22).toFixed(1) + 'px,0)';
        hero.style.opacity = Math.max(0, 1 - y / (heroH * .85)).toFixed(3);
      } else if (hero.style.opacity !== '0') { hero.style.opacity = '0'; }
    }
    // pictures: slide inside their frame while the card crosses the screen (-1 at the bottom, +1 at the top)
    for (var i = 0; i < pics.length; i++) {
      var p = pics[i]; if (!p.on) continue;
      var r = p.box.getBoundingClientRect();
      var k = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
      if (k > 1) k = 1; else if (k < -1) k = -1;
      p.img.style.transform = 'translate3d(0,' + (k * 6).toFixed(2) + '%,0) scale(1.14)';
    }
  }
  function tick() { if (!raf) raf = requestAnimationFrame(frame); }

  // wrap every blog picture in a frame that clips the moving image
  document.querySelectorAll('img.lp-img').forEach(function (img) {
    var box = document.createElement('span');
    box.className = img.className + ' pp'; img.className = 'pp-img';
    img.parentNode.insertBefore(box, img); box.appendChild(img);
    pics.push({ box: box, img: img, on: false });
  });
  if (pics.length && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        for (var i = 0; i < pics.length; i++) if (pics[i].box === e.target) { pics[i].on = e.isIntersecting; }
      });
      tick();
    }, { rootMargin: '25% 0px 25% 0px' });
    pics.forEach(function (p) { io.observe(p.box); });
  } else pics.forEach(function (p) { p.on = true; });

  // safety net for the reveal classes: anything already on screen shows even if an observer never fired
  function revealVisible() {
    var h = window.innerHeight || 800;
    document.querySelectorAll('.rv:not(.in)').forEach(function (el) {
      var r = el.getBoundingClientRect(); if (r.top < h * .95 && r.bottom > 0) el.classList.add('in');
    });
  }

  window.addEventListener('scroll', tick, { passive: true });
  window.addEventListener('resize', function () { measure(); tick(); }, { passive: true });
  window.addEventListener('orientationchange', function () { setTimeout(function () { measure(); tick(); }, 250); });
  window.addEventListener('pageshow', function () { measure(); tick(); revealVisible(); });
  window.addEventListener('load', function () { measure(); tick(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { measure(); tick(); });
  if ('ResizeObserver' in window && heroSec) new ResizeObserver(function () { measure(); tick(); }).observe(heroSec);
  if (mq.addEventListener) mq.addEventListener('change', function () { if (mq.matches) clear(); else { measure(); tick(); } });
  setTimeout(revealVisible, 1200); setTimeout(revealVisible, 3000);
  measure(); tick();
})();
