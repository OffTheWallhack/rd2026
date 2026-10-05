// Renders tools/cv/cv-en.html and cv-sk.html to the PDFs in the repo root. Needs a local server on :8765 at the repo root
// and the Google fonts downloaded into tools/cv/f/ with f.css pointing at local files.
const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
for (const L of ['en','sk']) {
 const p=await b.newPage({viewport:{width:794,height:1123}});
 await p.goto('http://localhost:8765/tools/cv/cv-'+L+'.html'); await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(800);
 
 const out=L==='en'?'cv-robert-durica.pdf':'cv-robert-durica-sk.pdf';
 await p.pdf({path:out,format:'A4',printBackground:true,preferCSSPageSize:true,displayHeaderFooter:true,headerTemplate:'<span></span>',footerTemplate:'<div style="width:100%;font:7px monospace;color:#8A8A82;padding:0 14mm;display:flex;justify-content:space-between"><span>Robert Ďurica · CV</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>'});
}
await b.close();})();
