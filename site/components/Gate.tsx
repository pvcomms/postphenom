import Script from "next/script";
import { site } from "@/content/site";

// A proof-of-work runs before the page opens. No script → no gate. Solved once per tab session.
// Fails open on error or after 8s, so a broken widget never locks a reader out.
// The gate is hidden by CSS once html loses .gated, never removed: React owns the node, and
// deleting it before hydration made every reload in a solved tab fail to hydrate.
const arm = `try{if(!sessionStorage.getItem("pp-gate"))document.documentElement.classList.add("gated")}catch(e){}`;

const open = `(function(){
  var root=document.documentElement,gate=document.getElementById("gate");
  if(!gate)return;
  if(!root.classList.contains("gated"))return;
  var done=false;
  function go(){
    if(done)return;done=true;
    try{sessionStorage.setItem("pp-gate","1")}catch(e){}
    gate.classList.add("out");root.classList.remove("gated");
    setTimeout(function(){gate.classList.remove("out")},500);
  }
  var w=document.getElementById("gate-altcha");
  w.addEventListener("verified",go);
  w.addEventListener("statechange",function(ev){if(ev.detail&&ev.detail.state==="error")go()});
  setTimeout(go,8000);
})();`;

export function Gate() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: arm }} />
      <div className="gate" id="gate" aria-live="polite">
        <div className="gate-inner">
          <span className="gate-kicker">{site.proof.kicker}</span>
          <altcha-widget
            id="gate-altcha"
            auto="onload"
            challenge={site.proof.challenge}
            configuration='{"hideLogo":true,"hideFooter":true,"minDuration":700}'
          />
          <p className="gate-note">{site.proof.note}</p>
        </div>
      </div>
      <Script src="/vendor/altcha/altcha-obfuscation.min.js" strategy="afterInteractive" />
      <Script src="/vendor/altcha/altcha.min.js" strategy="afterInteractive" />
      <script dangerouslySetInnerHTML={{ __html: open }} />
    </>
  );
}
