const capitalize = (text) => text[0].toUpperCase() + text.substring(1).toLowerCase();

class SocialLink extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static get styles() {
    return /* css */`
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
    `;
  }

  connectedCallback() {
    this.name = this.getAttribute("name") || "twitch";
    this.href = this.getAttribute("href") || "https://manz.dev/";
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */`
    <style>${SocialLink.styles}</style>
    <a class="container" href="${this.href}">
      <div class="text">${capitalize(this.name)}</div>
      <img class="sticker" src="images/${this.name}.png" alt="${capitalize(this.name)}">
    </a>`;
  }
}

customElements.define("social-link", SocialLink);
