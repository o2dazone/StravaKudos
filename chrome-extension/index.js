!function(){let n,t=[],e="[data-testid='unfilled_kudos']";const o=()=>{setTimeout((()=>{const n=document.querySelector(e);n&&(n.parentNode.click(),o())}),1e3)},s=()=>{const o=document.getElementById("skCount");o&&setInterval((()=>{t=document.querySelectorAll(e),o.innerHTML=t.length,(()=>{const e=t.length;e?(n.classList.remove("hidden"),e<100?n.classList.add("lockout"):n.classList.remove("lockout")):n.classList.add("hidden")})()}),1e3)};(()=>{const t=document.createElement("style");t.innerHTML="\n      #stravaKudos {\n        display: flex;\n        flex-direction: column;\n        left: 5px;\n        font-size: 20px;\n        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);\n        z-index: 49;\n        position: fixed;\n        top: 61px\n      }\n\n      #stravaKudos div {\n        margin: 0 auto\n      }\n\n      #stravaKudos p {\n        margin: 0;\n        font-size: 14px\n      }\n\n      #stravaKudos.hidden,\n      #stravaKudos.lockout p {\n        display: none !important;\n        visibility: hidden !important\n      }\n\n      #stravaKudosCount {\n        margin: 0 3px;\n        font-weight: bold\n      }\n    ",document.head.prepend(t),n=document.createElement("button"),n.id="stravaKudos",n.innerHTML='\n      <div>Give <span id="skCount"></span> Kudos</div>\n      <p>Strava may throttle too<br/>many Kudos in one session</p>\n    ',n.className="btn btn-sm btn-primary hidden",n.addEventListener("click",o),document.body.prepend(n),s()})()}();