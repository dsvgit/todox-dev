(()=>{"use strict";var t=Symbol.for("preact-signals");function e(){if(o>1)o--;else{for(var t,e=!1;void 0!==n;){var i=n;for(n=void 0,r++;void 0!==i;){var s=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&d(i))try{i.c()}catch(i){e||(t=i,e=!0)}i=s}}if(r=0,o--,e)throw t}}var i=void 0,n=void 0,o=0,r=0,s=0;function c(t){if(void 0!==i){var e=t.n;if(void 0===e||e.t!==i)return e={i:0,S:t,p:i.s,n:void 0,t:i,e:void 0,x:void 0,r:e},void 0!==i.s&&(i.s.n=e),i.s=e,t.n=e,32&i.f&&t.S(e),e;if(-1===e.i)return e.i=0,void 0!==e.n&&(e.n.p=e.p,void 0!==e.p&&(e.p.n=e.n),e.p=i.s,e.n=void 0,i.s.n=e,i.s=e),e}}function a(t){this.v=t,this.i=0,this.n=void 0,this.t=void 0}function l(t){return new a(t)}function d(t){for(var e=t.s;void 0!==e;e=e.n)if(e.S.i!==e.i||!e.S.h()||e.S.i!==e.i)return!0;return!1}function u(t){for(var e=t.s;void 0!==e;e=e.n){var i=e.S.n;if(void 0!==i&&(e.r=i),e.S.n=e,e.i=-1,void 0===e.n){t.s=e;break}}}function v(t){for(var e=t.s,i=void 0;void 0!==e;){var n=e.p;-1===e.i?(e.S.U(e),void 0!==n&&(n.n=e.n),void 0!==e.n&&(e.n.p=n)):i=e,e.S.n=e.r,void 0!==e.r&&(e.r=void 0),e=n}t.s=i}function h(t){a.call(this,void 0),this.x=t,this.s=void 0,this.g=s-1,this.f=4}function f(t){return new h(t)}function p(t){var n=t.u;if(t.u=void 0,"function"==typeof n){o++;var r=i;i=void 0;try{n()}catch(e){throw t.f&=-2,t.f|=8,y(t),e}finally{i=r,e()}}}function y(t){for(var e=t.s;void 0!==e;e=e.n)e.S.U(e);t.x=void 0,t.s=void 0,p(t)}function b(t){if(i!==this)throw new Error("Out-of-order effect");v(this),i=t,this.f&=-2,8&this.f&&y(this),e()}function m(t){this.x=t,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function g(t){var e=new m(t);try{e.c()}catch(t){throw e.d(),t}return e.d.bind(e)}a.prototype.brand=t,a.prototype.h=function(){return!0},a.prototype.S=function(t){this.t!==t&&void 0===t.e&&(t.x=this.t,void 0!==this.t&&(this.t.e=t),this.t=t)},a.prototype.U=function(t){if(void 0!==this.t){var e=t.e,i=t.x;void 0!==e&&(e.x=i,t.e=void 0),void 0!==i&&(i.e=e,t.x=void 0),t===this.t&&(this.t=i)}},a.prototype.subscribe=function(t){var e=this;return g((function(){var n=e.value,o=i;i=void 0;try{t(n)}finally{i=o}}))},a.prototype.valueOf=function(){return this.value},a.prototype.toString=function(){return this.value+""},a.prototype.toJSON=function(){return this.value},a.prototype.peek=function(){var t=i;i=void 0;try{return this.value}finally{i=t}},Object.defineProperty(a.prototype,"value",{get:function(){var t=c(this);return void 0!==t&&(t.i=this.i),this.v},set:function(t){if(t!==this.v){if(r>100)throw new Error("Cycle detected");this.v=t,this.i++,s++,o++;try{for(var i=this.t;void 0!==i;i=i.x)i.t.N()}finally{e()}}}}),(h.prototype=new a).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===s)return!0;if(this.g=s,this.f|=1,this.i>0&&!d(this))return this.f&=-2,!0;var t=i;try{u(this),i=this;var e=this.x();(16&this.f||this.v!==e||0===this.i)&&(this.v=e,this.f&=-17,this.i++)}catch(t){this.v=t,this.f|=16,this.i++}return i=t,v(this),this.f&=-2,!0},h.prototype.S=function(t){if(void 0===this.t){this.f|=36;for(var e=this.s;void 0!==e;e=e.n)e.S.S(e)}a.prototype.S.call(this,t)},h.prototype.U=function(t){if(void 0!==this.t&&(a.prototype.U.call(this,t),void 0===this.t)){this.f&=-33;for(var e=this.s;void 0!==e;e=e.n)e.S.U(e)}},h.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var t=this.t;void 0!==t;t=t.x)t.t.N()}},Object.defineProperty(h.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var t=c(this);if(this.h(),void 0!==t&&(t.i=this.i),16&this.f)throw this.v;return this.v}}),m.prototype.c=function(){var t=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var e=this.x();"function"==typeof e&&(this.u=e)}finally{t()}},m.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,p(this),u(this),o++;var t=i;return i=this,b.bind(this,t)},m.prototype.N=function(){2&this.f||(this.f|=2,this.o=n,n=this)},m.prototype.d=function(){this.f|=8,1&this.f||y(this)};const x=(t,...e)=>{const i=new Map,n=[],o=t=>{if(t instanceof window.HTMLCollection){let e="";for(const i of t)e+=o(i);return e}if("function"==typeof t)return n.push(t),"";if(t instanceof window.Node){const e="id"+Math.random().toString(16).slice(2);return i.set(t,e),`<div id="${e}"></div>`}return String(t)},r=String.raw({raw:t},...e.map(o)),s=document.createElement("template");s.innerHTML=r;for(const t of i.keys())s.content.querySelector(`#${i.get(t)}`).replaceWith(t);for(const t of n)t(s.content.children[0]);return s.content.children},$=(t,e,{onInit:i,onSet:n}={})=>{let o;try{o=JSON.parse(localStorage.getItem(t))||e}catch(t){o=e}const r=l(i?i(o):o);return g((()=>{const e=n?n(r.value):r.value;localStorage.setItem(t,JSON.stringify(e))})),r},k=({value:t,title:e,$filter:i,onFilter:n})=>{const o="id"+Math.random().toString(16).slice(2);return x`
    ${x`
      <input type="radio" class="btn-check" name="btn-filter" id=${o} autocomplete="off">
      ${e=>{e.addEventListener("click",(e=>{e.preventDefault(),n(t)})),g((()=>{i.value===t&&setTimeout((()=>{e.checked=!0}))}))}}
    `}
    <label class="btn btn-outline-secondary" for=${o}>${e}</label>
  `},S=[{text:"🎒 Get your lunch box",checked:!0},{text:"👝 Get 3 ziploc bags",checked:!0},{text:"🍪 Put 2 cookies in a ziploc bag, then put it in your lunch box",checked:!1},{text:"🥨 Put pretzels in a ziploc bag, then put it in your lunch box",checked:!1},{text:"⬜ Put a napkin in your lunch box",checked:!1},{text:"🧈 Make a peanut butter sandwich, put it in your lunch box",checked:!1},{text:"🍼 Pour milk into your drink box, put it in your lunch box",checked:!1}],w={system:{icon:"bi-brightness-alt-high",color:"#ffffff"},light:{icon:"bi-brightness-high",color:"#ffffff"},dark:{icon:"bi-moon",color:"#212529"}},E=Object.keys(w),L=$("theme","system",{onInit:t=>t in w?t:"system"}),A=window.matchMedia("(prefers-color-scheme: dark)");document.querySelector("#root").replaceChildren(...(()=>{const{$todos:t,$filter:e,onAdd:i,onRemove:n,onFilter:o}=(()=>{const t=$("filter","all"),e=$("todos",S,{onInit:t=>t.map((t=>l(t))),onSet:t=>t.map((t=>t.value))}),i=f((()=>{const i=e.value,n=t.value;return"active"===n?i.filter((t=>!t.value.checked)):"completed"===n?i.filter((t=>t.value.checked)):i}));return{$filter:t,$todos:i,onAdd:t=>{e.value=[l({text:t,checked:!1}),...e.value]},onRemove:t=>{e.value=e.value.filter((e=>e!==t))},onFilter:e=>{t.value=e}}})();return x`
    <div class="container p-4" style="max-width: 500px;">
      <div class="vstack gap-3">
        <header class="vstack">
          <div class="hstack justify-content-between">
            <h1 class="mb-0">📋 Todox 123</h1>
            ${(()=>{const t=t=>"system"!==t?t:A.matches?"dark":"light",e=e=>{document.documentElement.setAttribute("data-bs-theme",t(e)),document.querySelector('meta[name="theme-color"]').setAttribute("content",w[t(e)].color),setTimeout((()=>{document.body.classList.add("background-transition")}))};return g((()=>{e(L.value)})),A.addEventListener("change",(t=>e(L.value))),x`
    <button class="btn btn-outline-secondary btn-sm" style="min-width: 34px">
      ${x`
        <i></i>
        ${t=>{g((()=>{t.className=w[L.value].icon}))}}
      `}
    </button>
    ${t=>{t.addEventListener("click",(t=>{const e=E.indexOf(L.value);L.value=E[(e+1)%E.length]}))}}
  `})()}
          </div>
          <div>
            ${(()=>{const t=l("");return fetch("version").then((t=>t.text())).then((e=>{t.value=e})),x`
    <span class="blockquote-footer text-success" style="font-size: 12px;"></span>
    ${e=>{g((()=>{e.innerText="Released: "+t.value}))}}
  `})()}
          </div>
        </header>
        ${(({$filter:t,onFilter:e})=>x`
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
      ${k({title:"All",value:"all",$filter:t,onFilter:e})}
      
      ${k({title:"Active",value:"active",$filter:t,onFilter:e})}
      
      ${k({title:"Completed",value:"completed",$filter:t,onFilter:e})}
    </div>
  `)({$filter:e,onFilter:o})}
        ${(({onAdd:t})=>{const e=l(""),i=f((()=>""===e.value.trim())),n=n=>{n.preventDefault(),i.value||(t(e.value),e.value="")};return x`
    <div class="row g-3 align-items-center">
      <div class="col">
        ${x`
          <input type="text" class="form-control" placeholder="Start typing here..." />
          ${t=>{t.addEventListener("keydown",(t=>{"Enter"===t.key&&n(t)})),t.addEventListener("input",(t=>{e.value=t.target.value})),g((()=>{t.value=e.value}))}}
        `}
      </div>
      <div class="col-auto">
        ${x`
          <button class="btn btn-primary">Add</button>
          ${t=>{t.addEventListener("click",n),g((()=>{t.disabled=i.value}))}}
        `}
      </div>
    </div>
  `})({onAdd:i})}
        ${(({$todos:t,onRemove:e})=>(({$list:t,component:e,children:i})=>{e=e[0];const n=new WeakMap;return g((()=>{const o=t.value.map((t=>{const e=n.get(t);if(e)return e;{const e=i(t)[0];return n.set(t,e),e}}));e.replaceChildren(...o)})),e})({$list:t,component:x`<ul class="list-group"></ul>`,children:t=>(({$todo:t,onRemove:e})=>{const i="id"+Math.random().toString(16).slice(2),n=e=>{e.preventDefault(),t.value={...t.value,checked:e.target.checked}},o=e=>{e.preventDefault(),t.value={...t.value,text:e.target.innerText}};return x`
    <li class="list-group-item todox-list-group-item-action hstack gap-3 pe-1 align-items-start">
      ${x`
        <input id="${i}" type="checkbox" class="form-check-input" />
        ${e=>{e.addEventListener("change",n),g((()=>{const{checked:i}=t.value;e.checked=i}))}}
      `}
      
      ${x`
        <div class="d-inline flex-fill todox-item-editable" contenteditable="true"/>
        ${e=>{let i=!1;e.addEventListener("input",o),e.addEventListener("focus",(()=>{i=!0})),e.addEventListener("blur",(()=>{i=!1})),g((()=>{const{text:n,checked:o}=t.value;i||(e.innerText=n),e.style.opacity=o?.5:1}))}}
      `}
      
      ${x`
        <button
          class="btn btn-sm"
          style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .3rem; --bs-btn-font-size: .6rem;"
        >
         ❌
        </button>
         ${i=>{i.addEventListener("click",(()=>{e(t)}))}}
      `}
    </li>
  `})({$todo:t,onRemove:e})}))({$todos:t,onRemove:n})}
      </div>
    </div>
  `})())})();