(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function h(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=h(t);fetch(t.href,e)}})();const c=r=>r[0].toUpperCase()+r.substring(1).toLowerCase();class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host { --light-color: #181818; }
      :host([name="twitch"]) { --light-color: #9146ff; }
      :host([name="twitter"]) { --light-color: #1da1f2; }
      :host([name="youtube"]) { --light-color: #ff0000; }
      :host([name="instagram"]) { --light-color: #e1306c; }
      :host([name="discord"]) { --light-color: #5865f2; }
      :host([name="linkedin"]) { --light-color: #0077b5; }
      :host([name="github"]) { --light-color: #333333; }
      :host([name="codepen"]) { --light-color: #222222; }

      :host(:is(:nth-child(2), :nth-child(3), :nth-child(6))) {
        --rotate: -90deg;
        --transx: 62px;
      }

      :host(:is(:nth-child(4), :nth-child(7), :nth-child(8))) {
        --rotate: 0deg;
        --transx: -24px;
      }

      .container {
        display: block;
        width: var(--item-size);
        height: var(--item-height, var(--item-size));
        background-color: var(--light-color);
        background-image: linear-gradient(-45deg, #0001, #000c 45% 100%);
        background-position: 0 0;
        background-size: 100% 100%;
        overflow: hidden;
        transition: background 1s;
        border: 5px solid #fff;
        text-decoration: none;
      }

      .container:hover,
      :host(.hover) .container {
        background-position: -300px -300px;
        background-size: 300% 300%;
      }

      .text {
        font-family: "EnterCommand";
        font-size: 38px;
        padding-left: 10px;
        color: #fff;
        width: 150%;
        transform-origin: 75% 75%;
        transform: rotate(-45deg) translate(-50px, -60px);
        transition: transform 0.25s ease 0.5s;
        text-align: center;
        opacity: 0.5;
      }

      .container:hover .text,
      :host(.hover) .text  {
        transform: rotate(-45deg) translate(-50px, -60px);
        opacity: 1;
        text-shadow: 0 0 10px #fff;
      }

      .sticker {
        transform-origin: 64% 50%;
        transition: all 0.75s ease 2s;
        transform: rotate(var(--rotate, -45deg)) translate(var(--transx, 25px), 125px) scale(0.6);
        filter: drop-shadow(-6px -6px 30px #fff);
      }

      .container:hover .sticker,
      :host(.hover) .sticker {
        transform: rotate(var(--rotate, -45deg)) translate(var(--transx, 25px), -10px) scale(0.6);
        transition-delay: 0s;
      }
    `}connectedCallback(){this.name=this.getAttribute("name")||"twitch",this.href=this.getAttribute("href")||"https://manz.dev/",this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
    <a class="container" href="${this.href}">
      <div class="text">${c(this.name)}</div>
      <img class="sticker" src="images/${this.name}.png" alt="${c(this.name)}">
    </a>`}}customElements.define("social-link",i);let s=!1;const l=new Audio("sounds/toasty.mp3"),d=document.querySelector("img.toasty"),f=()=>{if(s)return;s=!0,d.classList.add("appears"),document.querySelectorAll("social-link").forEach(o=>o.classList.add("hover")),l.currentTime=0,l.play(),setTimeout(()=>m(),1e3)},m=()=>{if(!s)return;document.querySelectorAll("social-link").forEach(o=>o.classList.remove("hover")),setTimeout(()=>s=!1,4e3),d.classList.remove("appears")},u=document.querySelector(".manzdev");u.addEventListener("click",()=>f());
