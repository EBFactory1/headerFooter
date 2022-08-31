class e {
  constructor(e, t) {
    (this._lastMouseDownTimestamp = 0),
      (this.host = e),
      this.host.addController(this),
      (this._getLink = t),
      (this.isLinked = this.isLinked.bind(this));
  }
  hostConnected() {
    this.isLinked() &&
      (this._handleClicks(), this._handleHover(), this._handleFocus());
  }
  isLinked() {
    return void 0 !== this.host.url && this.host.url.length > 0;
  }
  _handleClicks() {
    this.host.addEventListener("mousedown", () => {
      this._lastMouseDownTimestamp = Date.now();
    }),
      this.host.addEventListener("mouseup", (e) => {
        var t, r, n;
        e.target !== this._getLink() &&
          this._isClickNotDrag() &&
          (e.stopPropagation(),
          null === (t = this._getLink()) || void 0 === t || t.click(),
          null === (r = this._getLink()) ||
            void 0 === r ||
            r.dispatchEvent(new Event("mousedown")),
          null === (n = this._getLink()) ||
            void 0 === n ||
            n.dispatchEvent(new Event("mouseup")));
      });
  }
  _isClickNotDrag() {
    return Date.now() - this._lastMouseDownTimestamp < 200;
  }
  _handleHover() {
    const e = this.host.querySelectorAll("idb-button");
    this.host.addEventListener("mouseover", () => {
      e.forEach((e) => {
        e.classList.add("state--hover");
      });
    }),
      this.host.addEventListener("mouseout", () => {
        e.forEach((e) => {
          e.classList.remove("state--hover");
        });
      });
  }
  _handleFocus() {
    const e = this.host.querySelectorAll("idb-button");
    this.host.addEventListener("focus", () => {
      e.forEach((e) => {
        e.classList.add("state--focus");
      });
    }),
      this.host.addEventListener("blur", () => {
        e.forEach((e) => {
          e.classList.remove("state--focus");
        });
      });
  }
}
var t = {
  components: { bundle: ["outline", "idb"] },
  assets: { dir: ["src/assets"], sync: ["dist", "src/.storybook/static/dist"] },
  screens: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1440px",
    xxxl: "1440px",
  },
  css: {
    global: [
      { src: "src/shared.css", dest: "dist/shared.css" },
      { src: "src/tailwind.css", dest: "dist/tailwind.css" },
      { src: "src/.storybook/storybook.css", dest: "dist/storybook.css" },
    ],
    fouc: { enabled: !0, dest: "dist/fouc.css" },
  },
  js: { output: { lazy: !0, full: !0, data: !0 } },
  color: { sets: ["primary", "secondary", "tertiary", "neutral", "demo"] },
  excludedStories: [
    "outline-feather-icon",
    "outline-fa-icon",
    "outline-list",
    "outline-breadcrumb",
    "outline-card",
    "outline-content-card",
  ],
  feather: {
    icon: "help-circle",
    size: "1em",
    color: "currentColor",
    strokeWidth: 2,
  },
  splide: { keyboard: !1, arrows: !0, pagination: !0 },
  icons: {
    libraries: {
      bootstrap: !0,
      boxicons: !0,
      fontawesome: !0,
      heroicons: !0,
      iconoir: !0,
      ionicons: !0,
      jam: !0,
      lucide: !0,
      material: !0,
      remix: !0,
      unicons: !0,
    },
    defaults: { library: "bootstrap", size: "16px", icon: "chevron-right" },
  },
  youtube: { defaultVideo: "cb8XXb2vcqY" },
  vimeo: { defaultVideo: "236323994" },
};
class r {
  constructor(e, r = "md") {
    (this.isMobile = !1),
      (this.handleResize = () => {
        const e = this.formatScreenSize(t.screens[this.mobileBreakpoint]);
        window.innerWidth <= e ? (this.isMobile = !0) : (this.isMobile = !1),
          this.host.requestUpdate();
      }),
      (this.formatScreenSize = (e) => parseInt(e.slice(0, -2))),
      (this.mobileBreakpoint = r),
      (this.host = e).addController(this),
      this.handleResize();
  }
  hostConnected() {
    window.addEventListener("resize", this.handleResize);
  }
  hostDisconnected() {
    window.removeEventListener("resize", this.handleResize);
  }
}
const n = [
  "outline-phase2-blue",
  "outline-karma-coral",
  "outline-soft-black",
  "outline-not-gray",
  "outline-transparent",
  "outline-white",
  "outline-black",
  "outline-dark-blue",
  "outline-medium-blue",
  "outline-light-blue",
  "outline-dark-gray",
  "outline-medium-gray",
  "outline-light-gray",
  "outline-misty-teal",
  "outline-electric-violet",
  "outline-dusty-blue",
  "blue-responsible-darken-1",
  "blue-responsible-darken-2",
  "blue-responsible-main",
  "blue-responsible-lighten-1",
  "blue-responsible-lighten-2",
  "blue-responsible-lighten-3",
  "blue-responsible-lighten-4",
  "blue-responsible-lighten-5",
  "gray-professional-darken-1",
  "gray-professional-darken-2",
  "gray-professional-main",
  "gray-professional-lighten-1",
  "gray-professional-lighten-2",
  "gray-professional-lighten-3",
  "gray-professional-lighten-4",
  "gray-professional-lighten-5",
  "cyan-near-darken-1",
  "cyan-near-darken-2",
  "cyan-near-main",
  "cyan-near-lighten-1",
  "cyan-near-lighten-2",
  "cyan-near-lighten-3",
  "cyan-near-lighten-4",
  "cyan-near-lighten-5",
  "green-guarantee-darken-1",
  "green-guarantee-darken-2",
  "green-guarantee-main",
  "green-guarantee-lighten-1",
  "green-guarantee-lighten-2",
  "green-guarantee-lighten-3",
  "green-guarantee-lighten-4",
  "green-guarantee-lighten-5",
  "gray-cosmopolitan-darken-1",
  "gray-cosmopolitan-darken-2",
  "gray-cosmopolitan-main",
  "gray-cosmopolitan-lighten-1",
  "gray-cosmopolitan-lighten-2",
  "gray-cosmopolitan-lighten-3",
  "gray-cosmopolitan-lighten-4",
  "gray-cosmopolitan-lighten-5",
  "green-quality-darken-1",
  "green-quality-darken-2",
  "green-quality-main",
  "green-quality-lighten-1",
  "green-quality-lighten-2",
  "green-quality-lighten-3",
  "green-quality-lighten-4",
  "green-quality-lighten-5",
  "yellow-knowledge-darken-1",
  "yellow-knowledge-darken-2",
  "yellow-knowledge-main",
  "yellow-knowledge-lighten-1",
  "yellow-knowledge-lighten-2",
  "yellow-knowledge-lighten-3",
  "yellow-knowledge-lighten-4",
  "yellow-knowledge-lighten-5",
  "orange-darken-1",
  "orange-darken-2",
  "orange-main",
  "orange-lighten-1",
  "orange-lighten-2",
  "orange-lighten-3",
  "orange-lighten-4",
  "orange-lighten-5",
  "purple-new-darken-1",
  "purple-new-darken-2",
  "purple-new-main",
  "purple-new-lighten-1",
  "purple-new-lighten-2",
  "purple-new-lighten-3",
  "purple-new-lighten-4",
  "purple-new-lighten-5",
  "neutral-transparent",
  "neutral-white",
  "neutral-grayLight",
  "neutral-grayMedium",
  "neutral-grayDark",
  "neutral-black",
  "ui-error",
  "ui-warning",
  "ui-info",
  "ui-success",
  "ui-errorText",
  "ui-warningText",
  "ui-infoText",
  "ui-successText",
  "demo-white",
  "demo-black",
  "demo-darkBlue",
  "demo-mediumBlue",
  "demo-lightBlue",
  "demo-darkGray",
  "demo-mediumGray",
  "demo-lightGray",
];
var i = {
  screens: {
    xs: "480px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1440px",
    xxxl: "1440px",
  },
  colors: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  fontSize: {
    xs: ["var(--fs-xs)", { lineHeight: "var(--lh-xs)" }],
    sm: ["var(--fs-sm)", { lineHeight: "var(--lh-sm)" }],
    base: ["var(--fs-base)", { lineHeight: "var(--lh-base)" }],
    lg: ["var(--fs-lg)", { lineHeight: "var(--lh-lg)" }],
    xl: ["var(--fs-xl)", { lineHeight: "var(--lh-xl)" }],
    "2xl": ["var(--fs-2xl)", { lineHeight: "var(--lh-2xl)" }],
    "3xl": ["var(--fs-3xl)", { lineHeight: "var(--lh-3xl)" }],
    "4xl": ["var(--fs-4xl)", { lineHeight: "var(--lh-4xl)" }],
    "5xl": ["var(--fs-5xl)", { lineHeight: "var(--lh-5xl)" }],
    "6xl": ["var(--fs-6xl)", { lineHeight: "var(--lh-6xl)" }],
    "7xl": ["var(--fs-7xl)", { lineHeight: "var(--lh-7xl)" }],
    "8xl": ["var(--fs-8xl)", { lineHeight: "var(--lh-8xl)" }],
    "9xl": ["var(--fs-9xl)", { lineHeight: "var(--lh-9lx)" }],
    h1: ["var(--fs-h1)", { lineHeight: "var(--lh-h1)" }],
    "h1-small": ["var(--fs-h1-small)", { lineHeight: "var(--lh-h1-small)" }],
    "h1-medium": ["var(--fs-h1-medium)", { lineHeight: "var(--lh-h1-medium)" }],
    h2: ["var(--fs-h2)", { lineHeight: "var(--lh-h2)" }],
    "h2-small": ["var(--fs-h2-small)", { lineHeight: "var(--lh-h2-small)" }],
    "h2-medium": ["var(--fs-h2-medium)", { lineHeight: "var(--lh-h2-medium)" }],
    h3: ["var(--fs-h3)", { lineHeight: "var(--lh-h3)" }],
    "h3-small": ["var(--fs-h3-small)", { lineHeight: "var(--lh-h3-small)" }],
    "h3-medium": ["var(--fs-h3-medium)", { lineHeight: "var(--lh-h3-medium)" }],
    h4: ["var(--fs-h4)", { lineHeight: "var(--lh-h4)" }],
    "h4-small": ["var(--fs-h4-small)", { lineHeight: "var(--lh-h4-small)" }],
    "h4-medium": ["var(--fs-h4-medium)", { lineHeight: "var(--lh-h4-medium)" }],
    h5: ["var(--fs-h5)", { lineHeight: "var(--lh-h5)" }],
    "h5-small": ["var(--fs-h5-small)", { lineHeight: "var(--lh-h5-small)" }],
    "h5-medium": ["var(--fs-h5-medium)", { lineHeight: "var(--lh-h5-medium)" }],
    h6: ["var(--fs-h6)", { lineHeight: "var(--lh-h6)" }],
    "h6-small": ["var(--fs-h6-small)", { lineHeight: "var(--lh-h6-small)" }],
    "h6-medium": ["var(--fs-h6-medium)", { lineHeight: "var(--lh-h6-medium)" }],
  },
  fontWeight: {
    thin: "var(--fw-extralight)",
    extralight: "var(--fw-thin)",
    light: "var(--fw-light)",
    normal: "var(--fw-normal)",
    medium: "var(--fw-medium)",
    semibold: "var(--fw-semibold)",
    bold: "var(--fw-bold)",
    extrabold: "var(--fw-extrabold)",
    black: "var(--fw-black)",
  },
  columns: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    auto: "auto",
    "3xs": "16rem",
    "2xs": "18rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
  },
  spacing: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
  },
  animation: {
    none: "none",
    spin: "spin 1s linear infinite",
    ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
    pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    bounce: "bounce 1s infinite",
  },
  aspectRatio: { auto: "auto", square: "1 / 1", video: "16 / 9" },
  backdropBlur: {
    0: "0",
    none: "0",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  backdropBrightness: {
    0: "0",
    50: ".5",
    75: ".75",
    90: ".9",
    95: ".95",
    100: "1",
    105: "1.05",
    110: "1.1",
    125: "1.25",
    150: "1.5",
    200: "2",
  },
  backdropContrast: {
    0: "0",
    50: ".5",
    75: ".75",
    100: "1",
    125: "1.25",
    150: "1.5",
    200: "2",
  },
  backdropGrayscale: { 0: "0", DEFAULT: "100%" },
  backdropHueRotate: {
    0: "0deg",
    15: "15deg",
    30: "30deg",
    60: "60deg",
    90: "90deg",
    180: "180deg",
  },
  backdropInvert: { 0: "0", DEFAULT: "100%" },
  backdropOpacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
  },
  backdropSaturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" },
  backdropSepia: { 0: "0", DEFAULT: "100%" },
  backgroundColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  backgroundImage: {
    none: "none",
    "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
    "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
    "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
    "gradient-to-br":
      "linear-gradient(to bottom right, var(--tw-gradient-stops))",
    "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
    "gradient-to-bl":
      "linear-gradient(to bottom left, var(--tw-gradient-stops))",
    "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
    "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))",
  },
  backgroundOpacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
  },
  backgroundPosition: {
    bottom: "bottom",
    center: "center",
    left: "left",
    "left-bottom": "left bottom",
    "left-top": "left top",
    right: "right",
    "right-bottom": "right bottom",
    "right-top": "right top",
    top: "top",
  },
  backgroundSize: { auto: "auto", cover: "cover", contain: "contain" },
  blur: {
    0: "0",
    none: "0",
    sm: "4px",
    DEFAULT: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
    "2xl": "40px",
    "3xl": "64px",
  },
  brightness: {
    0: "0",
    50: ".5",
    75: ".75",
    90: ".9",
    95: ".95",
    100: "1",
    105: "1.05",
    110: "1.1",
    125: "1.25",
    150: "1.5",
    200: "2",
  },
  borderColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
    DEFAULT: "currentColor",
  },
  borderOpacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
  },
  borderRadius: {
    none: "0px",
    sm: "0.125rem",
    DEFAULT: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  borderWidth: { 0: "0px", 2: "2px", 4: "4px", 8: "8px", DEFAULT: "1px" },
  boxShadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0px 8px 32px rgba(0, 0, 0, 0.06)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
    none: "none",
    focus: "0 0 0 1px rgb(33, 74, 222)",
    "focus-2": "0 0 0 2px rgb(33, 74, 222)",
    "focus-error": "0 0 0 1px rgb(225, 9, 9)",
  },
  boxShadowColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  caretColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  accentColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
    auto: "auto",
  },
  contrast: {
    0: "0",
    50: ".5",
    75: ".75",
    100: "1",
    125: "1.25",
    150: "1.5",
    200: "2",
  },
  container: {},
  content: { none: "none" },
  cursor: {
    auto: "auto",
    default: "default",
    pointer: "pointer",
    wait: "wait",
    text: "text",
    move: "move",
    help: "help",
    "not-allowed": "not-allowed",
    none: "none",
    "context-menu": "context-menu",
    progress: "progress",
    cell: "cell",
    crosshair: "crosshair",
    "vertical-text": "vertical-text",
    alias: "alias",
    copy: "copy",
    "no-drop": "no-drop",
    grab: "grab",
    grabbing: "grabbing",
    "all-scroll": "all-scroll",
    "col-resize": "col-resize",
    "row-resize": "row-resize",
    "n-resize": "n-resize",
    "e-resize": "e-resize",
    "s-resize": "s-resize",
    "w-resize": "w-resize",
    "ne-resize": "ne-resize",
    "nw-resize": "nw-resize",
    "se-resize": "se-resize",
    "sw-resize": "sw-resize",
    "ew-resize": "ew-resize",
    "ns-resize": "ns-resize",
    "nesw-resize": "nesw-resize",
    "nwse-resize": "nwse-resize",
    "zoom-in": "zoom-in",
    "zoom-out": "zoom-out",
  },
  divideColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
    DEFAULT: "currentColor",
  },
  divideOpacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
  },
  divideWidth: { 0: "0px", 2: "2px", 4: "4px", 8: "8px", DEFAULT: "1px" },
  dropShadow: {
    sm: "0 1px 1px rgb(0 0 0 / 0.05)",
    DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
    md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
    lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
    xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
    "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
    none: "0 0 #0000",
  },
  fill: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  grayscale: { 0: "0", DEFAULT: "100%" },
  hueRotate: {
    0: "0deg",
    15: "15deg",
    30: "30deg",
    60: "60deg",
    90: "90deg",
    180: "180deg",
  },
  invert: { 0: "0", DEFAULT: "100%" },
  flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" },
  flexBasis: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    auto: "auto",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
  },
  flexGrow: { 0: "0", DEFAULT: "1" },
  flexShrink: { 0: "0", DEFAULT: "1" },
  fontFamily: {
    sans: [
      "ui-sans-serif",
      "system-ui",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Noto Sans"',
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Noto Color Emoji"',
    ],
    serif: [
      "ui-serif",
      "Georgia",
      "Cambria",
      '"Times New Roman"',
      "Times",
      "serif",
    ],
    mono: [
      "ui-monospace",
      "SFMono-Regular",
      "Menlo",
      "Monaco",
      "Consolas",
      '"Liberation Mono"',
      '"Courier New"',
      "monospace",
    ],
    display: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
    body: ["Open Sans", "Helvetica", "Arial", "sans-serif"],
    demo: ["Inter var", "Helvetica", "Arial", "sans-serif"],
  },
  gap: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
  },
  gradientColorStops: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  gridAutoColumns: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)",
  },
  gridAutoRows: {
    auto: "auto",
    min: "min-content",
    max: "max-content",
    fr: "minmax(0, 1fr)",
  },
  gridColumn: {
    auto: "auto",
    "span-1": "span 1 / span 1",
    "span-2": "span 2 / span 2",
    "span-3": "span 3 / span 3",
    "span-4": "span 4 / span 4",
    "span-5": "span 5 / span 5",
    "span-6": "span 6 / span 6",
    "span-7": "span 7 / span 7",
    "span-8": "span 8 / span 8",
    "span-9": "span 9 / span 9",
    "span-10": "span 10 / span 10",
    "span-11": "span 11 / span 11",
    "span-12": "span 12 / span 12",
    "span-full": "1 / -1",
  },
  gridColumnEnd: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    auto: "auto",
  },
  gridColumnStart: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    13: "13",
    auto: "auto",
  },
  gridRow: {
    auto: "auto",
    "span-1": "span 1 / span 1",
    "span-2": "span 2 / span 2",
    "span-3": "span 3 / span 3",
    "span-4": "span 4 / span 4",
    "span-5": "span 5 / span 5",
    "span-6": "span 6 / span 6",
    "span-full": "1 / -1",
  },
  gridRowStart: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    auto: "auto",
  },
  gridRowEnd: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    auto: "auto",
  },
  gridTemplateColumns: {
    1: "repeat(1, minmax(0, 1fr))",
    2: "repeat(2, minmax(0, 1fr))",
    3: "repeat(3, minmax(0, 1fr))",
    4: "repeat(4, minmax(0, 1fr))",
    5: "repeat(5, minmax(0, 1fr))",
    6: "repeat(6, minmax(0, 1fr))",
    7: "repeat(7, minmax(0, 1fr))",
    8: "repeat(8, minmax(0, 1fr))",
    9: "repeat(9, minmax(0, 1fr))",
    10: "repeat(10, minmax(0, 1fr))",
    11: "repeat(11, minmax(0, 1fr))",
    12: "repeat(12, minmax(0, 1fr))",
    none: "none",
    "1-2": "4fr 8fr",
    "2-1": "8fr 4fr",
  },
  gridTemplateRows: {
    1: "repeat(1, minmax(0, 1fr))",
    2: "repeat(2, minmax(0, 1fr))",
    3: "repeat(3, minmax(0, 1fr))",
    4: "repeat(4, minmax(0, 1fr))",
    5: "repeat(5, minmax(0, 1fr))",
    6: "repeat(6, minmax(0, 1fr))",
    none: "none",
  },
  height: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    auto: "auto",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    "full-screen-w": "100vw",
    "half-screen-w": "50vw",
    "quarter-screen-w": "25vw",
    "full-screen-h": "100vh",
    "half-screen-h": "50vh",
    "quarter-screen-h": "25vh",
  },
  inset: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    auto: "auto",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    full: "100%",
  },
  keyframes: {
    spin: { to: { transform: "rotate(360deg)" } },
    ping: { "75%, 100%": { transform: "scale(2)", opacity: "0" } },
    pulse: { "50%": { opacity: ".5" } },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
      },
      "50%": {
        transform: "none",
        animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
      },
    },
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineHeight: {
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
  },
  listStyleType: { none: "none", disc: "disc", decimal: "decimal" },
  margin: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    auto: "auto",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
  },
  maxHeight: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    "full-screen-w": "100vw",
    "half-screen-w": "50vw",
    "quarter-screen-w": "25vw",
    "full-screen-h": "100vh",
    "half-screen-h": "50vh",
    "quarter-screen-h": "25vh",
  },
  maxWidth: {
    0: "0rem",
    none: "none",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    prose: "65ch",
    "screen-xs": "480px",
    "screen-sm": "640px",
    "screen-md": "768px",
    "screen-lg": "1024px",
    "screen-xl": "1280px",
    "screen-xxl": "1440px",
    "screen-xxxl": "1440px",
    "full-screen-w": "100vw",
    "half-screen-w": "50vw",
    "quarter-screen-w": "25vw",
    "full-screen-h": "100vh",
    "half-screen-h": "50vh",
    "quarter-screen-h": "25vh",
  },
  minHeight: {
    0: "0px",
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
  minWidth: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
  objectPosition: {
    bottom: "bottom",
    center: "center",
    left: "left",
    "left-bottom": "left bottom",
    "left-top": "left top",
    right: "right",
    "right-bottom": "right bottom",
    "right-top": "right top",
    top: "top",
  },
  opacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
  },
  order: {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "10",
    11: "11",
    12: "12",
    first: "-9999",
    last: "9999",
    none: "0",
  },
  padding: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
  },
  placeholderColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  placeholderOpacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
  },
  outlineColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  outlineOffset: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" },
  outlineWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" },
  ringColor: {
    DEFAULT: "#3b82f6",
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  ringOffsetColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  ringOffsetWidth: { 0: "0px", 1: "1px", 2: "2px", 4: "4px", 8: "8px" },
  ringOpacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
    DEFAULT: "0.5",
  },
  ringWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
    DEFAULT: "3px",
  },
  rotate: {
    0: "0deg",
    1: "1deg",
    2: "2deg",
    3: "3deg",
    6: "6deg",
    12: "12deg",
    45: "45deg",
    90: "90deg",
    180: "180deg",
  },
  saturate: { 0: "0", 50: ".5", 100: "1", 150: "1.5", 200: "2" },
  scale: {
    0: "0",
    50: ".5",
    75: ".75",
    90: ".9",
    95: ".95",
    100: "1",
    105: "1.05",
    110: "1.1",
    125: "1.25",
    150: "1.5",
  },
  scrollMargin: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
  },
  scrollPadding: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
  },
  sepia: { 0: "0", DEFAULT: "100%" },
  skew: { 0: "0deg", 1: "1deg", 2: "2deg", 3: "3deg", 6: "6deg", 12: "12deg" },
  space: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
  },
  stroke: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  strokeWidth: { 0: "0", 1: "1", 2: "2" },
  textColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  textDecorationColor: {
    outline: {
      "phase2-blue": "var(--outline-phase2-blue)",
      "karma-coral": "var(--outline-karma-coral)",
      "soft-black": "var(--outline-soft-black)",
      "not-gray": "var(--outline-not-gray)",
      transparent: "var(--outline-transparent)",
      white: "var(--outline-white)",
      black: "var(--outline-black)",
      "dark-blue": "var(--outline-dark-blue)",
      "medium-blue": "var(--outline-medium-blue)",
      "light-blue": "var(--outline-light-blue)",
      "dark-gray": "var(--outline-dark-gray)",
      "medium-gray": "var(--outline-medium-gray)",
      "light-gray": "var(--outline-light-gray)",
      "misty-teal": "var(--outline-misty-teal)",
      "electric-violet": "var(--outline-electric-violet)",
      "dusty-blue": "var(--outline-dusty-blue)",
    },
    "blue-responsible": {
      "darken-1": "var(--blue-responsible-darken-1)",
      "darken-2": "var(--blue-responsible-darken-2)",
      main: "var(--blue-responsible-main)",
      "lighten-1": "var(--blue-responsible-lighten-1)",
      "lighten-2": "var(--blue-responsible-lighten-2)",
      "lighten-3": "var(--blue-responsible-lighten-3)",
      "lighten-4": "var(--blue-responsible-lighten-4)",
      "lighten-5": "var(--blue-responsible-lighten-5)",
    },
    "gray-professional": {
      "darken-1": "var(--gray-professional-darken-1)",
      "darken-2": "var(--gray-professional-darken-2)",
      main: "var(--gray-professional-main)",
      "lighten-1": "var(--gray-professional-lighten-1)",
      "lighten-2": "var(--gray-professional-lighten-2)",
      "lighten-3": "var(--gray-professional-lighten-3)",
      "lighten-4": "var(--gray-professional-lighten-4)",
      "lighten-5": "var(--gray-professional-lighten-5)",
    },
    "cyan-near": {
      "darken-1": "var(--cyan-near-darken-1)",
      "darken-2": "var(--cyan-near-darken-2)",
      main: "var(--cyan-near-main)",
      "lighten-1": "var(--cyan-near-lighten-1)",
      "lighten-2": "var(--cyan-near-lighten-2)",
      "lighten-3": "var(--cyan-near-lighten-3)",
      "lighten-4": "var(--cyan-near-lighten-4)",
      "lighten-5": "var(--cyan-near-lighten-5)",
    },
    "green-guarantee": {
      "darken-1": "var(--green-guarantee-darken-1)",
      "darken-2": "var(--green-guarantee-darken-2)",
      main: "var(--green-guarantee-main)",
      "lighten-1": "var(--green-guarantee-lighten-1)",
      "lighten-2": "var(--green-guarantee-lighten-2)",
      "lighten-3": "var(--green-guarantee-lighten-3)",
      "lighten-4": "var(--green-guarantee-lighten-4)",
      "lighten-5": "var(--green-guarantee-lighten-5)",
    },
    "gray-cosmopolitan": {
      "darken-1": "var(--gray-cosmopolitan-darken-1)",
      "darken-2": "var(--gray-cosmopolitan-darken-2)",
      main: "var(--gray-cosmopolitan-main)",
      "lighten-1": "var(--gray-cosmopolitan-lighten-1)",
      "lighten-2": "var(--gray-cosmopolitan-lighten-2)",
      "lighten-3": "var(--gray-cosmopolitan-lighten-3)",
      "lighten-4": "var(--gray-cosmopolitan-lighten-4)",
      "lighten-5": "var(--gray-cosmopolitan-lighten-5)",
    },
    "green-quality": {
      "darken-1": "var(--green-quality-darken-1)",
      "darken-2": "var(--green-quality-darken-2)",
      main: "var(--green-quality-main)",
      "lighten-1": "var(--green-quality-lighten-1)",
      "lighten-2": "var(--green-quality-lighten-2)",
      "lighten-3": "var(--green-quality-lighten-3)",
      "lighten-4": "var(--green-quality-lighten-4)",
      "lighten-5": "var(--green-quality-lighten-5)",
    },
    "yellow-knowledge": {
      "darken-1": "var(--yellow-knowledge-darken-1)",
      "darken-2": "var(--yellow-knowledge-darken-2)",
      main: "var(--yellow-knowledge-main)",
      "lighten-1": "var(--yellow-knowledge-lighten-1)",
      "lighten-2": "var(--yellow-knowledge-lighten-2)",
      "lighten-3": "var(--yellow-knowledge-lighten-3)",
      "lighten-4": "var(--yellow-knowledge-lighten-4)",
      "lighten-5": "var(--yellow-knowledge-lighten-5)",
    },
    orange: {
      "darken-1": "var(--orange-darken-1)",
      "darken-2": "var(--orange-darken-2)",
      main: "var(--orange-main)",
      "lighten-1": "var(--orange-lighten-1)",
      "lighten-2": "var(--orange-lighten-2)",
      "lighten-3": "var(--orange-lighten-3)",
      "lighten-4": "var(--orange-lighten-4)",
      "lighten-5": "var(--orange-lighten-5)",
    },
    "purple-new": {
      "darken-1": "var(--purple-new-darken-1)",
      "darken-2": "var(--purple-new-darken-2)",
      main: "var(--purple-new-main)",
      "lighten-1": "var(--purple-new-lighten-1)",
      "lighten-2": "var(--purple-new-lighten-2)",
      "lighten-3": "var(--purple-new-lighten-3)",
      "lighten-4": "var(--purple-new-lighten-4)",
      "lighten-5": "var(--purple-new-lighten-5)",
    },
    neutral: {
      transparent: "var(--neutral-transparent)",
      white: "var(--neutral-white)",
      grayLight: "var(--neutral-grayLight)",
      grayMedium: "var(--neutral-grayMedium)",
      grayDark: "var(--neutral-grayDark)",
      black: "var(--neutral-black)",
    },
    ui: {
      error: "var(--ui-errorBackground)",
      warning: "var(--ui-warningBackground)",
      info: "var(--ui-infoBackground)",
      success: "var(--ui-successBackground)",
      errorText: "var(--ui-errorText)",
      warningText: "var(--ui-warningText)",
      infoText: "var(--ui-infoText)",
      successText: "var(--ui-successText)",
    },
    demo: {
      white: "var(--demo-white)",
      black: "var(--demo-black)",
      darkBlue: "var(--demo-darkBlue)",
      mediumBlue: "var(--demo-mediumBlue)",
      lightBlue: "var(--demo-lightBlue)",
      darkGray: "var(--demo-darkGray)",
      mediumGray: "var(--demo-mediumGray)",
      lightGray: "var(--demo-lightGray)",
    },
  },
  textDecorationThickness: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
    auto: "auto",
    "from-font": "from-font",
  },
  textUnderlineOffset: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
    auto: "auto",
  },
  textIndent: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
  },
  textOpacity: {
    0: "0",
    5: "0.05",
    10: "0.1",
    20: "0.2",
    25: "0.25",
    30: "0.3",
    40: "0.4",
    50: "0.5",
    60: "0.6",
    70: "0.7",
    75: "0.75",
    80: "0.8",
    90: "0.9",
    95: "0.95",
    100: "1",
  },
  transformOrigin: {
    center: "center",
    top: "top",
    "top-right": "top right",
    right: "right",
    "bottom-right": "bottom right",
    bottom: "bottom",
    "bottom-left": "bottom left",
    left: "left",
    "top-left": "top left",
  },
  transitionDelay: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1e3: "1000ms",
  },
  transitionDuration: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1e3: "1000ms",
    DEFAULT: "150ms",
  },
  transitionProperty: {
    none: "none",
    all: "all",
    DEFAULT:
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    colors:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  },
  transitionTimingFunction: {
    DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
    linear: "linear",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  translate: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    full: "100%",
  },
  width: {
    0: "0px",
    1: "0.25rem",
    2: "0.5rem",
    3: "0.75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
    11: "2.75rem",
    12: "3rem",
    14: "3.5rem",
    16: "4rem",
    20: "5rem",
    24: "6rem",
    28: "7rem",
    32: "8rem",
    36: "9rem",
    40: "10rem",
    44: "11rem",
    48: "12rem",
    52: "13rem",
    56: "14rem",
    60: "15rem",
    64: "16rem",
    72: "18rem",
    80: "20rem",
    96: "24rem",
    auto: "auto",
    px: "1px",
    0.5: "0.125rem",
    1.5: "0.375rem",
    2.5: "0.625rem",
    3.5: "0.875rem",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    screen: "100vw",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    "full-screen-w": "100vw",
    "half-screen-w": "50vw",
    "quarter-screen-w": "25vw",
    "full-screen-h": "100vh",
    "half-screen-h": "50vh",
    "quarter-screen-h": "25vh",
  },
  willChange: {
    auto: "auto",
    scroll: "scroll-position",
    contents: "contents",
    transform: "transform",
  },
  zIndex: {
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
    auto: "auto",
  },
};
const a = new Map(
  Object.entries(i.screens)
    .map(([e, t]) => [e, parseInt(t.slice(0, -2))])
    .sort(([, e], [, t]) => e - t)
);
class o {
  constructor(e) {
    (this.isMobile = !1),
      (this.screenSize = "xxs"),
      (this.handleResize = () => {
        const e = [
          ["isMobile", this.isMobile],
          ["screenSize", this.screenSize],
        ];
        (this.isMobile = window.innerWidth <= a.get("sm")),
          (this.screenSize = Array.from(a).reduce(
            (e, [t, r]) => (window.innerWidth >= r ? t : e),
            "xxs"
          )),
          e.map(([e, t]) => this[e] !== t).reduce((e, t) => e || t) &&
            this.host.requestUpdate();
      }),
      (this.host = e).addController(this),
      this.handleResize();
  }
  hostConnected() {
    (this.resizeObserver = new ResizeObserver(this.handleResize)),
      this.resizeObserver.observe(document.querySelector("body"));
  }
  hostDisconnected() {
    this.resizeObserver.disconnect();
  }
}
class l {
  constructor(e, t) {
    (this.slotNames = []),
      (this.host = e).addController(this),
      (this.hostEl = this.host),
      (this.shadowShift = !(!t || "boolean" != typeof t) && t),
      (this.handleSlotChange = this.handleSlotChange.bind(this));
  }
  hasDefaultSlot() {
    return [...this.host.childNodes].some((e) => {
      if (e.nodeType === e.TEXT_NODE && "" !== e.textContent.trim())
        return (this.defaultSlot = !0);
      if (e.nodeType === e.ELEMENT_NODE) {
        if (!e.hasAttribute("slot")) return (this.defaultSlot = !0);
      }
      return (this.defaultSlot = !1);
    });
  }
  hasNamedSlot(e) {
    return (this.namedSlots =
      null !== this.host.querySelector(`:scope > [slot="${e}"]`));
  }
  test(e) {
    const t = e || "";
    return "" === t ? this.hasDefaultSlot() : this.hasNamedSlot(t);
  }
  hostConnected() {
    this.host.shadowRoot.addEventListener("slotchange", this.handleSlotChange),
      (this.slotNames = this.getSlots()),
      setTimeout(() => this.moveSlots(), 0);
  }
  hostDisconnected() {
    this.host.shadowRoot.removeEventListener(
      "slotchange",
      this.handleSlotChange
    );
  }
  handleSlotChange(e) {
    const t = e.target;
    ((this.defaultSlot && !t.name) ||
      (t.name && this.slotNames.includes(t.name))) &&
      this.host.requestUpdate(),
      this.moveSlots();
  }
  getSlots() {
    const e = [],
      t = this.host.querySelectorAll("[slot]");
    return (
      t.length ? (this.namedSlots = !0) : (this.namedSlots = !1),
      t.forEach((t) => {
        const r = t.getAttribute("slot");
        this.test(r) && e.push(r);
      }),
      e
    );
  }
  moveNamedSlot(e) {
    const t = this.host,
      r = !!t.renderRoot && t.renderRoot.querySelector(`slot[name="${e}"]`);
    if (r) {
      const n = t.querySelector("[slot=" + e + "]");
      n && r.append(n);
    }
  }
  moveDefaultSlot() {
    const e = this.host,
      t = Array.from(e.children).filter((e) => !e.getAttributeNode("slot")),
      r = !!e.renderRoot && e.renderRoot.querySelector("slot");
    r &&
      t.forEach((e) => {
        r.before(e);
      });
  }
  moveSlots() {
    this.shadowShift &&
      (this.slotNames.map((e) => {
        this.moveNamedSlot(e);
      }),
      this.moveDefaultSlot());
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ function s(
  e,
  t,
  r,
  n
) {
  for (
    var i,
      a = arguments.length,
      o =
        a < 3
          ? t
          : null === n
          ? (n = Object.getOwnPropertyDescriptor(t, r))
          : n,
      l = e.length - 1;
    l >= 0;
    l--
  )
    (i = e[l]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, r, o) : i(t, r)) || o);
  return a > 3 && o && Object.defineProperty(t, r, o), o;
  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
}
const d =
    window.ShadowRoot &&
    (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) &&
    "adoptedStyleSheets" in Document.prototype &&
    "replace" in CSSStyleSheet.prototype,
  c = Symbol(),
  p = new Map();
class h {
  constructor(e, t) {
    if (((this._$cssResult$ = !0), t !== c))
      throw Error(
        "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
      );
    this.cssText = e;
  }
  get styleSheet() {
    let e = p.get(this.cssText);
    return (
      d &&
        void 0 === e &&
        (p.set(this.cssText, (e = new CSSStyleSheet())),
        e.replaceSync(this.cssText)),
      e
    );
  }
  toString() {
    return this.cssText;
  }
}
const g = (e, ...t) => {
    const r =
      1 === e.length
        ? e[0]
        : t.reduce(
            (t, r, n) =>
              t +
              ((e) => {
                if (!0 === e._$cssResult$) return e.cssText;
                if ("number" == typeof e) return e;
                throw Error(
                  "Value passed to 'css' function must be a 'css' function result: " +
                    e +
                    ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                );
              })(r) +
              e[n + 1],
            e[0]
          );
    return new h(r, c);
  },
  u = d
    ? (e) => e
    : (e) =>
        e instanceof CSSStyleSheet
          ? ((e) => {
              let t = "";
              for (const r of e.cssRules) t += r.cssText;
              return ((e) => new h("string" == typeof e ? e : e + "", c))(t);
            })(e)
          : e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var m;
const b = window.trustedTypes,
  v = b ? b.emptyScript : "",
  y = window.reactiveElementPolyfillSupport,
  x = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          e = e ? v : null;
          break;
        case Object:
        case Array:
          e = null == e ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      let r = e;
      switch (t) {
        case Boolean:
          r = null !== e;
          break;
        case Number:
          r = null === e ? null : Number(e);
          break;
        case Object:
        case Array:
          try {
            r = JSON.parse(e);
          } catch (e) {
            r = null;
          }
      }
      return r;
    },
  },
  f = (e, t) => t !== e && (t == t || e == e),
  w = { attribute: !0, type: String, converter: x, reflect: !1, hasChanged: f };
class k extends HTMLElement {
  constructor() {
    super(),
      (this._$Et = new Map()),
      (this.isUpdatePending = !1),
      (this.hasUpdated = !1),
      (this._$Ei = null),
      this.o();
  }
  static addInitializer(e) {
    var t;
    (null !== (t = this.l) && void 0 !== t) || (this.l = []), this.l.push(e);
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return (
      this.elementProperties.forEach((t, r) => {
        const n = this._$Eh(r, t);
        void 0 !== n && (this._$Eu.set(n, r), e.push(n));
      }),
      e
    );
  }
  static createProperty(e, t = w) {
    if (
      (t.state && (t.attribute = !1),
      this.finalize(),
      this.elementProperties.set(e, t),
      !t.noAccessor && !this.prototype.hasOwnProperty(e))
    ) {
      const r = "symbol" == typeof e ? Symbol() : "__" + e,
        n = this.getPropertyDescriptor(e, r, t);
      void 0 !== n && Object.defineProperty(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    return {
      get() {
        return this[t];
      },
      set(n) {
        const i = this[e];
        (this[t] = n), this.requestUpdate(e, i, r);
      },
      configurable: !0,
      enumerable: !0,
    };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) || w;
  }
  static finalize() {
    if (this.hasOwnProperty("finalized")) return !1;
    this.finalized = !0;
    const e = Object.getPrototypeOf(this);
    if (
      (e.finalize(),
      (this.elementProperties = new Map(e.elementProperties)),
      (this._$Eu = new Map()),
      this.hasOwnProperty("properties"))
    ) {
      const e = this.properties,
        t = [
          ...Object.getOwnPropertyNames(e),
          ...Object.getOwnPropertySymbols(e),
        ];
      for (const r of t) this.createProperty(r, e[r]);
    }
    return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const e of r) t.unshift(u(e));
    } else void 0 !== e && t.push(u(e));
    return t;
  }
  static _$Eh(e, t) {
    const r = t.attribute;
    return !1 === r
      ? void 0
      : "string" == typeof r
      ? r
      : "string" == typeof e
      ? e.toLowerCase()
      : void 0;
  }
  o() {
    var e;
    (this._$Ep = new Promise((e) => (this.enableUpdating = e))),
      (this._$AL = new Map()),
      this._$Em(),
      this.requestUpdate(),
      null === (e = this.constructor.l) ||
        void 0 === e ||
        e.forEach((e) => e(this));
  }
  addController(e) {
    var t, r;
    (null !== (t = this._$Eg) && void 0 !== t ? t : (this._$Eg = [])).push(e),
      void 0 !== this.renderRoot &&
        this.isConnected &&
        (null === (r = e.hostConnected) || void 0 === r || r.call(e));
  }
  removeController(e) {
    var t;
    null === (t = this._$Eg) ||
      void 0 === t ||
      t.splice(this._$Eg.indexOf(e) >>> 0, 1);
  }
  _$Em() {
    this.constructor.elementProperties.forEach((e, t) => {
      this.hasOwnProperty(t) && (this._$Et.set(t, this[t]), delete this[t]);
    });
  }
  createRenderRoot() {
    var e;
    const t =
      null !== (e = this.shadowRoot) && void 0 !== e
        ? e
        : this.attachShadow(this.constructor.shadowRootOptions);
    return (
      ((e, t) => {
        d
          ? (e.adoptedStyleSheets = t.map((e) =>
              e instanceof CSSStyleSheet ? e : e.styleSheet
            ))
          : t.forEach((t) => {
              const r = document.createElement("style"),
                n = window.litNonce;
              void 0 !== n && r.setAttribute("nonce", n),
                (r.textContent = t.cssText),
                e.appendChild(r);
            });
      })(t, this.constructor.elementStyles),
      t
    );
  }
  connectedCallback() {
    var e;
    void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()),
      this.enableUpdating(!0),
      null === (e = this._$Eg) ||
        void 0 === e ||
        e.forEach((e) => {
          var t;
          return null === (t = e.hostConnected) || void 0 === t
            ? void 0
            : t.call(e);
        });
  }
  enableUpdating(e) {}
  disconnectedCallback() {
    var e;
    null === (e = this._$Eg) ||
      void 0 === e ||
      e.forEach((e) => {
        var t;
        return null === (t = e.hostDisconnected) || void 0 === t
          ? void 0
          : t.call(e);
      });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$ES(e, t, r = w) {
    var n, i;
    const a = this.constructor._$Eh(e, r);
    if (void 0 !== a && !0 === r.reflect) {
      const o = (
        null !==
          (i =
            null === (n = r.converter) || void 0 === n
              ? void 0
              : n.toAttribute) && void 0 !== i
          ? i
          : x.toAttribute
      )(t, r.type);
      (this._$Ei = e),
        null == o ? this.removeAttribute(a) : this.setAttribute(a, o),
        (this._$Ei = null);
    }
  }
  _$AK(e, t) {
    var r, n, i;
    const a = this.constructor,
      o = a._$Eu.get(e);
    if (void 0 !== o && this._$Ei !== o) {
      const e = a.getPropertyOptions(o),
        l = e.converter,
        s =
          null !==
            (i =
              null !==
                (n =
                  null === (r = l) || void 0 === r
                    ? void 0
                    : r.fromAttribute) && void 0 !== n
                ? n
                : "function" == typeof l
                ? l
                : null) && void 0 !== i
            ? i
            : x.fromAttribute;
      (this._$Ei = o), (this[o] = s(t, e.type)), (this._$Ei = null);
    }
  }
  requestUpdate(e, t, r) {
    let n = !0;
    void 0 !== e &&
      (((r = r || this.constructor.getPropertyOptions(e)).hasChanged || f)(
        this[e],
        t
      )
        ? (this._$AL.has(e) || this._$AL.set(e, t),
          !0 === r.reflect &&
            this._$Ei !== e &&
            (void 0 === this._$EC && (this._$EC = new Map()),
            this._$EC.set(e, r)))
        : (n = !1)),
      !this.isUpdatePending && n && (this._$Ep = this._$E_());
  }
  async _$E_() {
    this.isUpdatePending = !0;
    try {
      await this._$Ep;
    } catch (e) {
      Promise.reject(e);
    }
    const e = this.scheduleUpdate();
    return null != e && (await e), !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var e;
    if (!this.isUpdatePending) return;
    this.hasUpdated,
      this._$Et &&
        (this._$Et.forEach((e, t) => (this[t] = e)), (this._$Et = void 0));
    let t = !1;
    const r = this._$AL;
    try {
      (t = this.shouldUpdate(r)),
        t
          ? (this.willUpdate(r),
            null === (e = this._$Eg) ||
              void 0 === e ||
              e.forEach((e) => {
                var t;
                return null === (t = e.hostUpdate) || void 0 === t
                  ? void 0
                  : t.call(e);
              }),
            this.update(r))
          : this._$EU();
    } catch (e) {
      throw ((t = !1), this._$EU(), e);
    }
    t && this._$AE(r);
  }
  willUpdate(e) {}
  _$AE(e) {
    var t;
    null === (t = this._$Eg) ||
      void 0 === t ||
      t.forEach((e) => {
        var t;
        return null === (t = e.hostUpdated) || void 0 === t
          ? void 0
          : t.call(e);
      }),
      this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(e)),
      this.updated(e);
  }
  _$EU() {
    (this._$AL = new Map()), (this.isUpdatePending = !1);
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$Ep;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    void 0 !== this._$EC &&
      (this._$EC.forEach((e, t) => this._$ES(t, this[t], e)),
      (this._$EC = void 0)),
      this._$EU();
  }
  updated(e) {}
  firstUpdated(e) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var z;
(k.finalized = !0),
  (k.elementProperties = new Map()),
  (k.elementStyles = []),
  (k.shadowRootOptions = { mode: "open" }),
  null == y || y({ ReactiveElement: k }),
  (null !== (m = globalThis.reactiveElementVersions) && void 0 !== m
    ? m
    : (globalThis.reactiveElementVersions = [])
  ).push("1.3.0");
const _ = globalThis.trustedTypes,
  $ = _ ? _.createPolicy("lit-html", { createHTML: (e) => e }) : void 0,
  S = `lit$${(Math.random() + "").slice(9)}$`,
  A = "?" + S,
  M = `<${A}>`,
  C = document,
  B = (e = "") => C.createComment(e),
  T = (e) => null === e || ("object" != typeof e && "function" != typeof e),
  Z = Array.isArray,
  q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
  E = /-->/g,
  F = />/g,
  L =
    />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
  H = /'/g,
  j = /"/g,
  D = /^(?:script|style|textarea|title)$/i,
  V = (
    (e) =>
    (t, ...r) => ({ _$litType$: e, strings: t, values: r })
  )(1),
  G = Symbol.for("lit-noChange"),
  O = Symbol.for("lit-nothing"),
  U = new WeakMap(),
  R = C.createTreeWalker(C, 129, null, !1),
  I = (e, t) => {
    const r = e.length - 1,
      n = [];
    let i,
      a = 2 === t ? "<svg>" : "",
      o = q;
    for (let t = 0; t < r; t++) {
      const r = e[t];
      let l,
        s,
        d = -1,
        c = 0;
      for (; c < r.length && ((o.lastIndex = c), (s = o.exec(r)), null !== s); )
        (c = o.lastIndex),
          o === q
            ? "!--" === s[1]
              ? (o = E)
              : void 0 !== s[1]
              ? (o = F)
              : void 0 !== s[2]
              ? (D.test(s[2]) && (i = RegExp("</" + s[2], "g")), (o = L))
              : void 0 !== s[3] && (o = L)
            : o === L
            ? ">" === s[0]
              ? ((o = null != i ? i : q), (d = -1))
              : void 0 === s[1]
              ? (d = -2)
              : ((d = o.lastIndex - s[2].length),
                (l = s[1]),
                (o = void 0 === s[3] ? L : '"' === s[3] ? j : H))
            : o === j || o === H
            ? (o = L)
            : o === E || o === F
            ? (o = q)
            : ((o = L), (i = void 0));
      const p = o === L && e[t + 1].startsWith("/>") ? " " : "";
      a +=
        o === q
          ? r + M
          : d >= 0
          ? (n.push(l), r.slice(0, d) + "$lit$" + r.slice(d) + S + p)
          : r + S + (-2 === d ? (n.push(void 0), t) : p);
    }
    const l = a + (e[r] || "<?>") + (2 === t ? "</svg>" : "");
    if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
      throw Error("invalid template strings array");
    return [void 0 !== $ ? $.createHTML(l) : l, n];
  };
class N {
  constructor({ strings: e, _$litType$: t }, r) {
    let n;
    this.parts = [];
    let i = 0,
      a = 0;
    const o = e.length - 1,
      l = this.parts,
      [s, d] = I(e, t);
    if (
      ((this.el = N.createElement(s, r)),
      (R.currentNode = this.el.content),
      2 === t)
    ) {
      const e = this.el.content,
        t = e.firstChild;
      t.remove(), e.append(...t.childNodes);
    }
    for (; null !== (n = R.nextNode()) && l.length < o; ) {
      if (1 === n.nodeType) {
        if (n.hasAttributes()) {
          const e = [];
          for (const t of n.getAttributeNames())
            if (t.endsWith("$lit$") || t.startsWith(S)) {
              const r = d[a++];
              if ((e.push(t), void 0 !== r)) {
                const e = n.getAttribute(r.toLowerCase() + "$lit$").split(S),
                  t = /([.?@])?(.*)/.exec(r);
                l.push({
                  type: 1,
                  index: i,
                  name: t[2],
                  strings: e,
                  ctor:
                    "." === t[1] ? K : "?" === t[1] ? Q : "@" === t[1] ? ee : Y,
                });
              } else l.push({ type: 6, index: i });
            }
          for (const t of e) n.removeAttribute(t);
        }
        if (D.test(n.tagName)) {
          const e = n.textContent.split(S),
            t = e.length - 1;
          if (t > 0) {
            n.textContent = _ ? _.emptyScript : "";
            for (let r = 0; r < t; r++)
              n.append(e[r], B()),
                R.nextNode(),
                l.push({ type: 2, index: ++i });
            n.append(e[t], B());
          }
        }
      } else if (8 === n.nodeType)
        if (n.data === A) l.push({ type: 2, index: i });
        else {
          let e = -1;
          for (; -1 !== (e = n.data.indexOf(S, e + 1)); )
            l.push({ type: 7, index: i }), (e += S.length - 1);
        }
      i++;
    }
  }
  static createElement(e, t) {
    const r = C.createElement("template");
    return (r.innerHTML = e), r;
  }
}
function P(e, t, r = e, n) {
  var i, a, o, l;
  if (t === G) return t;
  let s =
    void 0 !== n
      ? null === (i = r._$Cl) || void 0 === i
        ? void 0
        : i[n]
      : r._$Cu;
  const d = T(t) ? void 0 : t._$litDirective$;
  return (
    (null == s ? void 0 : s.constructor) !== d &&
      (null === (a = null == s ? void 0 : s._$AO) ||
        void 0 === a ||
        a.call(s, !1),
      void 0 === d ? (s = void 0) : ((s = new d(e)), s._$AT(e, r, n)),
      void 0 !== n
        ? ((null !== (o = (l = r)._$Cl) && void 0 !== o ? o : (l._$Cl = []))[
            n
          ] = s)
        : (r._$Cu = s)),
    void 0 !== s && (t = P(e, s._$AS(e, t.values), s, n)),
    t
  );
}
class W {
  constructor(e, t) {
    (this.v = []), (this._$AN = void 0), (this._$AD = e), (this._$AM = t);
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  p(e) {
    var t;
    const {
        el: { content: r },
        parts: n,
      } = this._$AD,
      i = (
        null !== (t = null == e ? void 0 : e.creationScope) && void 0 !== t
          ? t
          : C
      ).importNode(r, !0);
    R.currentNode = i;
    let a = R.nextNode(),
      o = 0,
      l = 0,
      s = n[0];
    for (; void 0 !== s; ) {
      if (o === s.index) {
        let t;
        2 === s.type
          ? (t = new X(a, a.nextSibling, this, e))
          : 1 === s.type
          ? (t = new s.ctor(a, s.name, s.strings, this, e))
          : 6 === s.type && (t = new te(a, this, e)),
          this.v.push(t),
          (s = n[++l]);
      }
      o !== (null == s ? void 0 : s.index) && ((a = R.nextNode()), o++);
    }
    return i;
  }
  m(e) {
    let t = 0;
    for (const r of this.v)
      void 0 !== r &&
        (void 0 !== r.strings
          ? (r._$AI(e, r, t), (t += r.strings.length - 2))
          : r._$AI(e[t])),
        t++;
  }
}
class X {
  constructor(e, t, r, n) {
    var i;
    (this.type = 2),
      (this._$AH = O),
      (this._$AN = void 0),
      (this._$AA = e),
      (this._$AB = t),
      (this._$AM = r),
      (this.options = n),
      (this._$Cg =
        null === (i = null == n ? void 0 : n.isConnected) || void 0 === i || i);
  }
  get _$AU() {
    var e, t;
    return null !==
      (t = null === (e = this._$AM) || void 0 === e ? void 0 : e._$AU) &&
      void 0 !== t
      ? t
      : this._$Cg;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return void 0 !== t && 11 === e.nodeType && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    (e = P(this, e, t)),
      T(e)
        ? e === O || null == e || "" === e
          ? (this._$AH !== O && this._$AR(), (this._$AH = O))
          : e !== this._$AH && e !== G && this.$(e)
        : void 0 !== e._$litType$
        ? this.T(e)
        : void 0 !== e.nodeType
        ? this.k(e)
        : ((e) => {
            var t;
            return (
              Z(e) ||
              "function" ==
                typeof (null === (t = e) || void 0 === t
                  ? void 0
                  : t[Symbol.iterator])
            );
          })(e)
        ? this.S(e)
        : this.$(e);
  }
  A(e, t = this._$AB) {
    return this._$AA.parentNode.insertBefore(e, t);
  }
  k(e) {
    this._$AH !== e && (this._$AR(), (this._$AH = this.A(e)));
  }
  $(e) {
    this._$AH !== O && T(this._$AH)
      ? (this._$AA.nextSibling.data = e)
      : this.k(C.createTextNode(e)),
      (this._$AH = e);
  }
  T(e) {
    var t;
    const { values: r, _$litType$: n } = e,
      i =
        "number" == typeof n
          ? this._$AC(e)
          : (void 0 === n.el && (n.el = N.createElement(n.h, this.options)), n);
    if ((null === (t = this._$AH) || void 0 === t ? void 0 : t._$AD) === i)
      this._$AH.m(r);
    else {
      const e = new W(i, this),
        t = e.p(this.options);
      e.m(r), this.k(t), (this._$AH = e);
    }
  }
  _$AC(e) {
    let t = U.get(e.strings);
    return void 0 === t && U.set(e.strings, (t = new N(e))), t;
  }
  S(e) {
    Z(this._$AH) || ((this._$AH = []), this._$AR());
    const t = this._$AH;
    let r,
      n = 0;
    for (const i of e)
      n === t.length
        ? t.push((r = new X(this.A(B()), this.A(B()), this, this.options)))
        : (r = t[n]),
        r._$AI(i),
        n++;
    n < t.length && (this._$AR(r && r._$AB.nextSibling, n), (t.length = n));
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for (
      null === (r = this._$AP) || void 0 === r || r.call(this, !1, !0, t);
      e && e !== this._$AB;

    ) {
      const t = e.nextSibling;
      e.remove(), (e = t);
    }
  }
  setConnected(e) {
    var t;
    void 0 === this._$AM &&
      ((this._$Cg = e),
      null === (t = this._$AP) || void 0 === t || t.call(this, e));
  }
}
class Y {
  constructor(e, t, r, n, i) {
    (this.type = 1),
      (this._$AH = O),
      (this._$AN = void 0),
      (this.element = e),
      (this.name = t),
      (this._$AM = n),
      (this.options = i),
      r.length > 2 || "" !== r[0] || "" !== r[1]
        ? ((this._$AH = Array(r.length - 1).fill(new String())),
          (this.strings = r))
        : (this._$AH = O);
  }
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e, t = this, r, n) {
    const i = this.strings;
    let a = !1;
    if (void 0 === i)
      (e = P(this, e, t, 0)),
        (a = !T(e) || (e !== this._$AH && e !== G)),
        a && (this._$AH = e);
    else {
      const n = e;
      let o, l;
      for (e = i[0], o = 0; o < i.length - 1; o++)
        (l = P(this, n[r + o], t, o)),
          l === G && (l = this._$AH[o]),
          a || (a = !T(l) || l !== this._$AH[o]),
          l === O ? (e = O) : e !== O && (e += (null != l ? l : "") + i[o + 1]),
          (this._$AH[o] = l);
    }
    a && !n && this.C(e);
  }
  C(e) {
    e === O
      ? this.element.removeAttribute(this.name)
      : this.element.setAttribute(this.name, null != e ? e : "");
  }
}
class K extends Y {
  constructor() {
    super(...arguments), (this.type = 3);
  }
  C(e) {
    this.element[this.name] = e === O ? void 0 : e;
  }
}
const J = _ ? _.emptyScript : "";
class Q extends Y {
  constructor() {
    super(...arguments), (this.type = 4);
  }
  C(e) {
    e && e !== O
      ? this.element.setAttribute(this.name, J)
      : this.element.removeAttribute(this.name);
  }
}
class ee extends Y {
  constructor(e, t, r, n, i) {
    super(e, t, r, n, i), (this.type = 5);
  }
  _$AI(e, t = this) {
    var r;
    if ((e = null !== (r = P(this, e, t, 0)) && void 0 !== r ? r : O) === G)
      return;
    const n = this._$AH,
      i =
        (e === O && n !== O) ||
        e.capture !== n.capture ||
        e.once !== n.once ||
        e.passive !== n.passive,
      a = e !== O && (n === O || i);
    i && this.element.removeEventListener(this.name, this, n),
      a && this.element.addEventListener(this.name, this, e),
      (this._$AH = e);
  }
  handleEvent(e) {
    var t, r;
    "function" == typeof this._$AH
      ? this._$AH.call(
          null !==
            (r =
              null === (t = this.options) || void 0 === t ? void 0 : t.host) &&
            void 0 !== r
            ? r
            : this.element,
          e
        )
      : this._$AH.handleEvent(e);
  }
}
class te {
  constructor(e, t, r) {
    (this.element = e),
      (this.type = 6),
      (this._$AN = void 0),
      (this._$AM = t),
      (this.options = r);
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    P(this, e);
  }
}
const re = window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ne, ie;
null == re || re(N, X),
  (null !== (z = globalThis.litHtmlVersions) && void 0 !== z
    ? z
    : (globalThis.litHtmlVersions = [])
  ).push("2.2.0");
class ae extends k {
  constructor() {
    super(...arguments),
      (this.renderOptions = { host: this }),
      (this._$Dt = void 0);
  }
  createRenderRoot() {
    var e, t;
    const r = super.createRenderRoot();
    return (
      (null !== (e = (t = this.renderOptions).renderBefore) && void 0 !== e) ||
        (t.renderBefore = r.firstChild),
      r
    );
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
      super.update(e),
      (this._$Dt = ((e, t, r) => {
        var n, i;
        const a =
          null !== (n = null == r ? void 0 : r.renderBefore) && void 0 !== n
            ? n
            : t;
        let o = a._$litPart$;
        if (void 0 === o) {
          const e =
            null !== (i = null == r ? void 0 : r.renderBefore) && void 0 !== i
              ? i
              : null;
          a._$litPart$ = o = new X(
            t.insertBefore(B(), e),
            e,
            void 0,
            null != r ? r : {}
          );
        }
        return o._$AI(e), o;
      })(t, this.renderRoot, this.renderOptions));
  }
  connectedCallback() {
    var e;
    super.connectedCallback(),
      null === (e = this._$Dt) || void 0 === e || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(),
      null === (e = this._$Dt) || void 0 === e || e.setConnected(!1);
  }
  render() {
    return G;
  }
}
(ae.finalized = !0),
  (ae._$litElement$ = !0),
  null === (ne = globalThis.litElementHydrateSupport) ||
    void 0 === ne ||
    ne.call(globalThis, { LitElement: ae });
const oe = globalThis.litElementPolyfillSupport;
null == oe || oe({ LitElement: ae }),
  (null !== (ie = globalThis.litElementVersions) && void 0 !== ie
    ? ie
    : (globalThis.litElementVersions = [])
  ).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le = (e) => (t) =>
    "function" == typeof t
      ? ((e, t) => (window.customElements.define(e, t), t))(e, t)
      : ((e, t) => {
          const { kind: r, elements: n } = t;
          return {
            kind: r,
            elements: n,
            finisher(t) {
              window.customElements.define(e, t);
            },
          };
        })(e, t),
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */ se = (e, t) =>
    "method" === t.kind && t.descriptor && !("value" in t.descriptor)
      ? {
          ...t,
          finisher(r) {
            r.createProperty(t.key, e);
          },
        }
      : {
          kind: "field",
          key: Symbol(),
          placement: "own",
          descriptor: {},
          originalKey: t.key,
          initializer() {
            "function" == typeof t.initializer &&
              (this[t.key] = t.initializer.call(this));
          },
          finisher(r) {
            r.createProperty(t.key, e);
          },
        };
function de(e) {
  return (t, r) =>
    void 0 !== r
      ? ((e, t, r) => {
          t.constructor.createProperty(r, e);
        })(e, t, r)
      : se(e, t);
  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
}
function ce(e) {
  return de({ ...e, state: !0 });
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const pe =
  ({ finisher: e, descriptor: t }) =>
  (r, n) => {
    var i;
    if (void 0 === n) {
      const n = null !== (i = r.originalKey) && void 0 !== i ? i : r.key,
        a =
          null != t
            ? {
                kind: "method",
                placement: "prototype",
                key: n,
                descriptor: t(r.key),
              }
            : { ...r, key: n };
      return (
        null != e &&
          (a.finisher = function (t) {
            e(t, n);
          }),
        a
      );
    }
    {
      const i = r.constructor;
      void 0 !== t && Object.defineProperty(r, n, t(n)), null == e || e(i, n);
    }
  };
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function he(e, t) {
  return pe({
    descriptor: (r) => {
      const n = {
        get() {
          var t, r;
          return null !==
            (r =
              null === (t = this.renderRoot) || void 0 === t
                ? void 0
                : t.querySelector(e)) && void 0 !== r
            ? r
            : null;
        },
        enumerable: !0,
        configurable: !0,
      };
      if (t) {
        const t = "symbol" == typeof r ? Symbol() : "__" + r;
        n.get = function () {
          var r, n;
          return (
            void 0 === this[t] &&
              (this[t] =
                null !==
                  (n =
                    null === (r = this.renderRoot) || void 0 === r
                      ? void 0
                      : r.querySelector(e)) && void 0 !== n
                  ? n
                  : null),
            this[t]
          );
        };
      }
      return n;
    },
  });
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ var ge;
const ue =
  null !=
  (null === (ge = window.HTMLSlotElement) || void 0 === ge
    ? void 0
    : ge.prototype.assignedElements)
    ? (e, t) => e.assignedElements(t)
    : (e, t) =>
        e.assignedNodes(t).filter((e) => e.nodeType === Node.ELEMENT_NODE);
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const me = (e) => ({ _$litStatic$: e }),
  be = new Map(),
  ve = (
    (e) =>
    (t, ...r) => {
      var n;
      const i = r.length;
      let a, o;
      const l = [],
        s = [];
      let d,
        c = 0,
        p = !1;
      for (; c < i; ) {
        for (
          d = t[c];
          c < i &&
          void 0 !==
            ((o = r[c]),
            (a = null === (n = o) || void 0 === n ? void 0 : n._$litStatic$));

        )
          (d += a + t[++c]), (p = !0);
        s.push(o), l.push(d), c++;
      }
      if ((c === i && l.push(t[i]), p)) {
        const e = l.join("$$lit$$");
        void 0 === (t = be.get(e)) && ((l.raw = l), be.set(e, (t = l))),
          (r = s);
      }
      return e(t, ...r);
    }
  )(V),
  ye = (e) => (null != e ? e : O);
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let xe = class extends ae {
  connectedCallback() {
    super.connectedCallback();
  }
  _conditionalSlotTemplate({
    slotName: e,
    wrapperElementType: t = "div",
    ariaLabel: r = null,
  }) {
    const n = `${e}`;
    return null !== this.querySelector(`[slot="${n}"]`)
      ? ve`<${me(t)} id="${e}" aria-label="${ye(r)}">
          <slot
            name="${n}"
            @slotchange="${() => this.requestUpdate()}"
          ></slot>
        </${me(t)}>`
      : null;
  }
};
xe = s([le("outline-element")], xe);
var fe = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.accordion-title {
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  font-size: var(--fs-4xl);
  line-height: var(--lh-4xl);
  color: var(--outline-soft-black);
}

.accordion-title.mobile {
  font-size: var(--fs-lg);
  line-height: var(--lh-lg);
  color: var(--outline-soft-black);
}

::slotted(outline-heading){
  margin-bottom:2.5rem;
}

[aria-hidden='true']{
  display:none !important;
}
`;
let we = class extends xe {
  constructor() {
    super(...arguments),
      (this.mobileController = new r(this)),
      (this.slots = new l(this, !1)),
      (this.clean = !1),
      (this.singlePanel = !1),
      (this.allOpen = !1),
      (this.isMobile = () =>
        this.mobileController.isMobile ? "mobile" : null);
  }
  render() {
    return V`
      ${
        this.hasLabel
          ? V`<div class="label"><slot name="label"></slot></div>`
          : null
      }
      <div class="accordion" @keydown=${this.handleKeyboardNav}>
        <slot name="panels"></slot>
      </div>
    `;
  }
  handleKeyboardNav(e) {
    var t, r;
    let n = 0;
    const i = this.panels,
      a = Array.prototype.indexOf.call(i, e.target);
    if ("ArrowDown" !== e.key && "ArrowUp" !== e.key) return;
    "ArrowDown" === e.key &&
      (n =
        (null == i ? void 0 : i.length) &&
        a + 1 > (null == i ? void 0 : i.length) - 1
          ? 0
          : a + 1),
      "ArrowUp" === e.key &&
        (n =
          (null == i ? void 0 : i.length) && a - 1 < 0
            ? (null == i ? void 0 : i.length) - 1
            : a - 1);
    null ===
      (r =
        null === (t = (null == i ? void 0 : i[n]).shadowRoot) || void 0 === t
          ? void 0
          : t.querySelector("button")) ||
      void 0 === r ||
      r.focus();
  }
  firstUpdated() {
    (this.hasLabel = this.slots.test("label")),
      this.allOpen &&
        this.panels.map((e) => {
          e.setAttribute("active", "active");
        });
  }
  updated() {
    this.clean
      ? this.panels.map((e) => e.setAttribute("clean", "clean"))
      : this.panels.map((e) => e.removeAttribute("clean"));
  }
};
(we.styles = [fe]),
  s([de({ type: Boolean })], we.prototype, "clean", void 0),
  s(
    [de({ type: Boolean, attribute: "single-panel" })],
    we.prototype,
    "singlePanel",
    void 0
  ),
  s([de({ type: Boolean })], we.prototype, "allOpen", void 0),
  s(
    [
      (function (e) {
        const { slot: t, selector: r } = null != e ? e : {};
        return pe({
          descriptor: (n) => ({
            get() {
              var n;
              const i = "slot" + (t ? `[name=${t}]` : ":not([name])"),
                a =
                  null === (n = this.renderRoot) || void 0 === n
                    ? void 0
                    : n.querySelector(i),
                o = null != a ? ue(a, e) : [];
              return r ? o.filter((e) => e.matches(r)) : o;
            },
            enumerable: !0,
            configurable: !0,
          }),
        });
      })({ slot: "panels" }),
    ],
    we.prototype,
    "panels",
    void 0
  ),
  s([ce()], we.prototype, "hasLabel", void 0),
  (we = s([le("outline-accordion")], we));
var ke = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.accordion-button {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-width: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 2rem;
  padding-right: 0px;
}

.accordion-button.mobile {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 1rem !important;
  padding-right: 0px !important;
  font-size: var(--fs-base) !important;
  line-height: var(--lh-base) !important;
  line-height: 1.25rem !important;
}

.accordion-button.active {
  background-color: var(--outline-soft-black);
  color: var(--neutral-white);
}

.accordion-button.inactive {
  background-color: var(--neutral-white);
  color: var(--outline-soft-black);
}

.accordion-button.clean {
  border-bottom-width: 1px;
  border-style: solid;
  border-color: var(--outline-medium-gray);
  padding-left: 0px;
}

.accordion-button.clean.active {
  background-color: var(--neutral-white) !important;
  color: var(--outline-soft-black) !important;
}

.accordion-button.clean.inactive {
  color: var(--outline-soft-black);
}

.accordion-content {
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.accordion-content.mobile {
  padding-left: 1rem;
  padding-right: 1rem;
}

.clean .accordion-content {
  padding-left: 0px;
  padding-right: 0px;
}

.accordion-label {
  text-align: left;
  max-width:75%;
}

::slotted(outline-heading){
  margin:1rem 0;
}

.accordion-heading {
  margin: 0px;
  display: flex;
}

.accordion-icon {
  display: flex;
  height: 100%;
  width: 5rem;
  align-items: center;
  justify-content: center;
}

.accordion-icon.clean {
  background-color: var(--neutral-white) !important;
  color: var(--outline-soft-black) !important;
}

.accordion-icon.active {
  background-color: var(--outline-soft-black);
  color: var(--neutral-white);
}

.accordion-icon.inactive {
  background-color: var(--outline-dark-gray);
  color: var(--outline-white);
}

.accordion-panel {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 0.375rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--outline-soft-black);
}

.accordion-panel.clean {
  border-width: 0px;
}

[aria-hidden='true']{
  display:none !important;
}
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const ze = 1,
  _e = 2,
  $e =
    (e) =>
    (...t) => ({ _$litDirective$: e, values: t });
class Se {
  constructor(e) {}
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, r) {
    (this._$Ct = e), (this._$AM = t), (this._$Ci = r);
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const Ae = $e(
  class extends Se {
    constructor(e) {
      var t;
      if (
        (super(e),
        e.type !== ze ||
          "class" !== e.name ||
          (null === (t = e.strings) || void 0 === t ? void 0 : t.length) > 2)
      )
        throw Error(
          "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
        );
    }
    render(e) {
      return (
        " " +
        Object.keys(e)
          .filter((t) => e[t])
          .join(" ") +
        " "
      );
    }
    update(e, [t]) {
      var r, n;
      if (void 0 === this.et) {
        (this.et = new Set()),
          void 0 !== e.strings &&
            (this.st = new Set(
              e.strings
                .join(" ")
                .split(/\s/)
                .filter((e) => "" !== e)
            ));
        for (const e in t)
          t[e] &&
            !(null === (r = this.st) || void 0 === r ? void 0 : r.has(e)) &&
            this.et.add(e);
        return this.render(t);
      }
      const i = e.element.classList;
      this.et.forEach((e) => {
        e in t || (i.remove(e), this.et.delete(e));
      });
      for (const e in t) {
        const r = !!t[e];
        r === this.et.has(e) ||
          (null === (n = this.st) || void 0 === n ? void 0 : n.has(e)) ||
          (r ? (i.add(e), this.et.add(e)) : (i.remove(e), this.et.delete(e)));
      }
      return G;
    }
  }
);
var Me = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
}

:host svg{
  height:inherit;
  width:inherit;
}
`;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class Ce extends Se {
  constructor(e) {
    if ((super(e), (this.it = O), e.type !== _e))
      throw Error(
        this.constructor.directiveName + "() can only be used in child bindings"
      );
  }
  render(e) {
    if (e === O || null == e) return (this.ft = void 0), (this.it = e);
    if (e === G) return e;
    if ("string" != typeof e)
      throw Error(
        this.constructor.directiveName + "() called with a non-string value"
      );
    if (e === this.it) return this.ft;
    this.it = e;
    const t = [e];
    return (
      (t.raw = t),
      (this.ft = {
        _$litType$: this.constructor.resultType,
        strings: t,
        values: [],
      })
    );
  }
}
(Ce.directiveName = "unsafeHTML"), (Ce.resultType = 1);
const Be = $e(Ce);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class Te extends Ce {}
(Te.directiveName = "unsafeSVG"), (Te.resultType = 2);
const Ze = $e(Te);
function qe(e, t, r) {
  const n = new CustomEvent(
    t,
    Object.assign({ bubbles: !0, cancelable: !1, composed: !0, detail: {} }, r)
  );
  return e.dispatchEvent(n), n;
}
function Ee(e, t) {
  return new Promise((r) => {
    e.addEventListener(t, function n(i) {
      i.target === e && (e.removeEventListener(t, n), r());
    });
  });
}
function Fe(e, t) {
  const r = Object.assign({ waitUntilFirstUpdate: !1 }, t);
  return (t, n) => {
    const { update: i } = t;
    if (e in t) {
      const a = e;
      t.update = function (e) {
        if (e.has(a)) {
          const t = e.get(a),
            i = this[a];
          t !== i &&
            ((r.waitUntilFirstUpdate && !this.hasUpdated) || this[n](t, i));
        }
        i.call(this, e);
      };
    }
  };
}
const Le = {
    "check-lg":
      '\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">\n      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>\n    </svg>\n  ',
    "chevron-down":
      '\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',
    "chevron-left":
      '\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',
    "chevron-right":
      '\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',
    "chevron-up":
      '\n  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">\n    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>\n  </svg>\n  ',
    x: '\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">\n      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',
    "x-circle-fill":
      '\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  ',
  },
  He = {
    name: "system",
    resolver: (e) =>
      e in Le ? `data:image/svg+xml,${encodeURIComponent(Le[e])}` : "",
  };
let je = "";
function De(e) {
  je = e;
}
const Ve = [...document.getElementsByTagName("script")],
  Ge = Ve.find((e) => e.hasAttribute("data-outline"));
if (Ge) De(Ge.getAttribute("data-outline"));
else {
  const e = Ve.find((e) => /outline(\.min)?\.js($|\?)/.test(e.src));
  let t = "";
  e && (t = e.getAttribute("src")), De(t.split("/").slice(0, -1).join("/"));
}
let Oe = [
    He,
    {
      name: "bootstrap",
      resolver: (e) =>
        `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.0.0/icons/${e}.svg`,
    },
    {
      name: "boxicons",
      resolver: (e) => {
        let t = "regular";
        return (
          "bxs-" === e.substring(0, 4) && (t = "solid"),
          "bxl-" === e.substring(0, 4) && (t = "logos"),
          `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${t}/${e}.svg`
        );
      },
      mutator: (e) => e.setAttribute("fill", "currentColor"),
    },
    {
      name: "lucide",
      resolver: (e) =>
        `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${e}.svg`,
    },
    {
      name: "heroicons",
      resolver: (e) =>
        `https://cdn.jsdelivr.net/npm/heroicons@0.4.2/outline/${e}.svg`,
      mutator: (e) => {
        e.setAttribute("width", "16px"), e.setAttribute("height", "16px");
      },
    },
    {
      name: "iconoir",
      resolver: (e) =>
        `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${e}.svg`,
    },
    {
      name: "ionicons",
      resolver: (e) =>
        `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${e}.svg`,
      mutator: (e) => {
        e.setAttribute("fill", "currentColor"),
          e.setAttribute("stroke", "currentColor"),
          [...e.querySelectorAll(".ionicon-fill-none")].map((e) =>
            e.setAttribute("fill", "none")
          ),
          [...e.querySelectorAll(".ionicon-stroke-width")].map((e) =>
            e.setAttribute("stroke-width", "32px")
          );
      },
    },
    {
      name: "jam",
      resolver: (e) =>
        `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${e}.svg`,
      mutator: (e) => e.setAttribute("fill", "currentColor"),
    },
    {
      name: "fa",
      resolver: (e) => {
        const t = e.replace(/^fa[rbs]-/, "");
        let r = "regular";
        return (
          "fas-" === e.substring(0, 4) && (r = "solid"),
          "fab-" === e.substring(0, 4) && (r = "brands"),
          `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.1/svgs/${r}/${t}.svg`
        );
      },
      mutator: (e) => e.setAttribute("fill", "currentColor"),
    },
    {
      name: "material",
      resolver: (e) => {
        const t = e.match(/^(.*?)(_(round|sharp))?$/);
        return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${
          t[1]
        }/${t[3] || "outline"}.svg`;
      },
      mutator: (e) => e.setAttribute("fill", "currentColor"),
    },
    {
      name: "remix",
      resolver: (e) => {
        const t = e.match(/^(.*?)\/(.*?)?$/);
        return (
          (t[1] = t[1].charAt(0).toUpperCase() + t[1].slice(1)),
          `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${t[1]}/${t[2]}.svg`
        );
      },
      mutator: (e) => e.setAttribute("fill", "currentColor"),
    },
    {
      name: "unicons",
      resolver: (e) => {
        const t = e.match(/^(.*?)(-s)?$/);
        return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${
          "-s" === t[2] ? "solid" : "line"
        }/${t[1]}.svg`;
      },
      mutator: (e) => e.setAttribute("fill", "currentColor"),
    },
    {
      name: "custom",
      resolver: (e) => `${je.replace(/\/$/, "")}/assets/svg/custom/${e}.svg`,
    },
  ],
  Ue = [];
function Re(e) {
  Ue.push(e);
}
function Ie(e) {
  Ue = Ue.filter((t) => t !== e);
}
function Ne(e) {
  return Oe.find((t) => t.name === e);
}
function Pe(e, t) {
  We(e),
    Oe.push({ name: e, resolver: t.resolver, mutator: t.mutator }),
    Ue.forEach((t) => {
      t.library === e && t.redraw();
    });
}
function We(e) {
  Oe = Oe.filter((t) => t.name !== e);
}
const Xe = new Map();
function Ye(e, t = "cors") {
  if (Xe.has(e)) return Xe.get(e);
  const r = fetch(e, { mode: t }).then(async (e) => ({
    ok: e.ok,
    status: e.status,
    html: await e.text(),
  }));
  return Xe.set(e, r), r;
}
const Ke = new Map();
async function Je(e) {
  if (Ke.has(e)) return Ke.get(e);
  const t = await Ye(e),
    r = { ok: t.ok, status: t.status, svg: null };
  if (t.ok) {
    const e = document.createElement("div");
    e.innerHTML = t.html;
    const n = e.firstElementChild;
    r.svg =
      "svg" === (null == n ? void 0 : n.tagName.toLowerCase())
        ? n.outerHTML
        : "";
  }
  return Ke.set(e, r), r;
}
const Qe = new DOMParser();
let et = class extends xe {
  constructor() {
    super(...arguments),
      (this.svg = ""),
      (this.label = !1),
      (this.library = t.icons.defaults.library),
      (this.size = t.icons.defaults.size);
  }
  connectedCallback() {
    super.connectedCallback(), Re(this);
  }
  firstUpdated() {
    this.setIcon(), this.sizeIcon();
  }
  disconnectedCallback() {
    Ie(this);
  }
  sizeIcon() {
    var e;
    if (
      this.size &&
      "string" == typeof this.size &&
      this.size !== t.icons.defaults.size
    ) {
      const t =
        null === (e = this.shadowRoot) || void 0 === e
          ? void 0
          : e.querySelector(".icon");
      null == t || t.style.setProperty("width", this.size),
        null == t || t.style.setProperty("height", this.size);
    }
  }
  getUrl() {
    const e = Ne(this.library);
    return this.name && e ? e.resolver(this.name) : this.src;
  }
  redraw() {
    this.setIcon();
  }
  async setIcon() {
    var e;
    const t = Ne(this.library),
      r = this.getUrl();
    if (r)
      try {
        const n = await Je(r);
        if (r !== this.getUrl()) return;
        if (n.ok) {
          const r = Qe.parseFromString(n.svg, "text/html").body.querySelector(
            "svg"
          );
          null !== r
            ? (null === (e = null == t ? void 0 : t.mutator) ||
                void 0 === e ||
                e.call(t, r),
              (this.svg = r.outerHTML),
              qe(this, "outline-load"))
            : ((this.svg = ""),
              qe(this, "outline-error", { detail: { status: n.status } }));
        } else
          (this.svg = ""),
            qe(this, "outline-error", { detail: { status: n.status } });
      } catch (e) {
        qe(this, "outline-error", { detail: { status: -1 } });
      }
    else this.svg.length > 0 && (this.svg = "");
  }
  handleChange() {
    this.setIcon();
  }
  render() {
    const e = "string" == typeof this.label && this.label.length > 0,
      t = { icon: !0, [`icon-library--${this.library}`]: this.library };
    return V` <div
      part="base"
      class="${Ae(t)}"
      role=${ye(e ? "img" : void 0)}
      aria-label=${ye(e ? this.label : void 0)}
      aria-hidden=${ye(e ? void 0 : "true")}
    >
      ${Ze(this.svg)}
    </div>`;
  }
};
(et.styles = [Me]),
  s([ce()], et.prototype, "svg", void 0),
  s(
    [de({ type: String, reflect: !0, attribute: "name" })],
    et.prototype,
    "name",
    void 0
  ),
  s([de({ type: String, attribute: "src" })], et.prototype, "src", void 0),
  s([de({ attribute: "label" })], et.prototype, "label", void 0),
  s(
    [de({ type: String, attribute: "library" })],
    et.prototype,
    "library",
    void 0
  ),
  s([de({ attribute: "size" })], et.prototype, "size", void 0),
  s([Fe("name"), Fe("src"), Fe("library")], et.prototype, "setIcon", null),
  (et = s([le("outline-icon")], et));
let tt = class extends xe {
  constructor() {
    super(...arguments),
      (this.mobileController = new r(this)),
      (this.clean = !1),
      (this.active = !1),
      (this.id = Math.floor(1e4 * Math.random()).toString());
  }
  render() {
    const e = this.mobileController.isMobile ? "mobile" : null,
      t = this.clean ? "clean" : null,
      r = this.active ? "active" : "inactive";
    return V` <div class="accordion-panel ${t}">
      <div class="accordion-heading">
        <button
          class="accordion-button ${e} ${r} ${t}"
          id="${this.id}-button"
          aria-expanded=${this.active}
          aria-controls="${this.id}-info"
          @click=${this.setActive}
        >
          <span class="accordion-label ${e}">
            <slot name="heading"> </slot>
          </span>
          <span class="accordion-icon ${e} ${r} ${t}">
            <outline-icon
              name="${this.active ? "chevron-up" : "chevron-down"}"
              size="24px"
            ></outline-icon>
          </span>
        </button>
      </div>
      <div
        class="accordion-content ${e}"
        role="region"
        aria-labelledby="${this.id}-button"
        id="${this.id}-info"
        aria-hidden="${!this.active}"
      >
        <slot></slot>
      </div>
    </div>`;
  }
  setActive() {
    const e = this.parentElement;
    if (e.singlePanel) {
      const t = [...e.panels].filter((e) => 1 == e.active);
      t.length < 1 && (this.active = !0),
        t.length > 0 &&
          t.map((e) => {
            e.id === this.id
              ? (this.active = !1)
              : ((e.active = !1), (this.active = !0));
          });
    } else this.active = !this.active;
  }
};
(tt.styles = [ke]),
  s([de({ type: Boolean })], tt.prototype, "clean", void 0),
  s(
    [de({ type: Boolean, reflect: !0, attribute: !0 })],
    tt.prototype,
    "active",
    void 0
  ),
  s([de({ type: String, reflect: !0 })], tt.prototype, "id", void 0),
  (tt = s([le("outline-accordion-panel")], tt));
var rt = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.links{
  padding-top:var(--outline-admin-links-y-spacing);
  padding-bottom:var(--outline-admin-links-y-spacing);
}

ul{
  display:flex;
  list-style-type:none;
  margin:0;
  padding:0;
}

li{
  margin:0;
  padding:0;
  display:block;
}

a{
  position:relative;
  text-decoration:none;
  padding-top:var(--outline-admin-links-link-y-spacing);
  padding-bottom:var(--outline-admin-links-link-y-spacing);
  padding-left:var(--outline-admin-links-link-x-spacing);
  padding-right:var(--outline-admin-links-link-x-spacing);
  background:var(--outline-admin-links-bg-default);
  color:var(--outline-admin-links-color-default);
}

a:hover{
    outline:none;
    background:var(--outline-admin-links-bg-hover);
    color:var(--outline-admin-links-color-hover);
  }

a:focus{
    outline:0;
    background:var(--outline-admin-links-bg-focus);
    color:var(--outline-admin-links-color-focus);
  }

a:not(.is-active):hover::before,
  a:not(.is-active):focus::before{
    position:absolute;
    top:50%;
    left:50%;
    width:calc(100%);
    height:100%;
    content:'';
    transform:translate(-50%, -50%);
    border:solid 2px var(--outline-admin-links-color-hover);
    border-radius:0.25rem;
  }

a.is-active{
    outline:solid 2px var(--outline-admin-links-color-hover);
    background:var(--outline-admin-links-bg-active);
    color:var(--outline-admin-links-color-active);
    z-index:1;
  }

a.is-active:hover,
    a.is-active:focus{
      outline-offset:2px;
    }

.visually-hidden{
  display:none;
}
`;
let nt = class extends xe {
  constructor() {
    super(...arguments), (this.slots = new l(this, !0));
  }
  render() {
    return V`
      <div class="links">
        <slot></slot>
      </div>
    `;
  }
};
(nt.styles = [rt]), (nt = s([le("outline-admin-links")], nt));
var it = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
#body {

  display: block;

  border-width: 0px;

  border-left-width: 8px;

  border-style: solid;

  background-color: var(--ui-infoBackground);

  padding: 1rem;

  color: var(--ui-infoText);

  border-color:var(--ui-infoText)
}
#header {

  font-size: var(--fs-lg);

  line-height: var(--lh-lg);

  font-weight: var(--fw-bold);

  text-transform: capitalize
}
:host([statusType='warning']) #body {

  background-color: var(--ui-warningBackground);

  color: var(--ui-warningText);

  border-color:var(--ui-warningText)
}
:host([statusType='error']) #body {

  background-color: var(--ui-errorBackground);

  color: var(--ui-errorText);

  border-color:var(--ui-errorText)
}
:host([statusType='success']) #body {

  background-color: var(--ui-successBackground);

  color: var(--ui-successText);

  border-color:var(--ui-successText)
}
`;
const at = ["small", "large"],
  ot = ["information", "warning", "error", "success"];
let lt = class extends xe {
  constructor() {
    super(...arguments),
      (this.statusType = "information"),
      (this.isInteractive = !1),
      (this.shouldShowIcon = !0),
      (this.size = "large");
  }
  render() {
    return V`
      <div id="body" aria-label="${this.statusType} alert" role="${
      this.isInteractive ? "alertdialog" : "alert"
    }">
        ${
          !0 === this.shouldShowIcon
            ? V`
              <div id="icon">
                <!--@todo include icon when we have that ready.-->
              </div>
            `
            : null
        }
        ${
          "large" === this.size
            ? V`
              <div id="header">
                <slot name="outline-alert--header">${this.statusType}</slot>
              </div>
            `
            : null
        }
        <div id="message">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
(lt.styles = [it]),
  s([de({ type: String })], lt.prototype, "statusType", void 0),
  s([de({ type: Boolean })], lt.prototype, "isInteractive", void 0),
  s([de({ type: Boolean })], lt.prototype, "shouldShowIcon", void 0),
  s([de({ type: String })], lt.prototype, "size", void 0),
  (lt = s([le("outline-alert")], lt));
var st = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.outline-breadcrumbs{
  color:var(--outline-breadcrumb-text-color-default);
  background:var(--outline-breadcrumb-bg-color);
  padding:var(--outline-breadcrumb-bg-padding);
}

a, ::slotted(a) {
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  -webkit-text-decoration:var(--outline-breadcrumb-link-decoration-default);
          text-decoration:var(--outline-breadcrumb-link-decoration-default);
  color:var(--outline-breadcrumb-link-color-default);
}

a:hover,
::slotted(a:hover){
  -webkit-text-decoration:var(--outline-breadcrumb-link-decoration-hover);
          text-decoration:var(--outline-breadcrumb-link-decoration-hover);
  color:var(--outline-breadcrumb-link-color-hover);
}

a:focus,
::slotted(a:focus){
  -webkit-text-decoration:var(--outline-breadcrumb-link-decoration-focus);
          text-decoration:var(--outline-breadcrumb-link-decoration-focus);
  outline:none;
  color:var(--outline-breadcrumb-link-color-focus);
}

.separator{
  margin-left:var(--outline-breadcrumb-separator-spacing);
  margin-right:var(--outline-breadcrumb-separator-spacing);
}
`,
  dt = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:block;
  max-width:100vw;
  font-family:Open Sans, Helvetica, Arial, sans-serif;
}@media (min-width: 640px){:host{
    max-width:640px;
  }
}@media (min-width: 768px){:host{
    max-width:768px;
  }
}@media (min-width: 1024px){:host{
    max-width:1024px;
  }
}@media (min-width: 1280px){:host{
    max-width:1280px;
  }
}@media (min-width: 1440px){:host{
    max-width:1440px;
  }:host{
    max-width:1440px;
  }
}:host{
  padding-top:var(--outline-container-padding-y);
  padding-right:var(--outline-container-padding-x);
  padding-bottom:var(--outline-container-padding-y);
  padding-left:var(--outline-container-padding-x);
}

:host(:not([x-padding])){
  padding-left:0px;
  padding-right:0px;
}

:host(:not([y-padding])){
  padding-top:0px;
  padding-bottom:0px;
}

:host([full-bleed]){
  max-width:100%;
}

:host([container-align]), :host([container-align='center']){
  margin-left:auto;
  margin-right:auto;
}

:host([container-align='left']){
  margin-left:auto;
  margin-right:auto;
  margin-left:0px;
}

:host([container-align='right']){
  margin-left:auto;
  margin-right:auto;
  margin-right:0px;
}
`;
let ct = class extends xe {
  constructor() {
    super(...arguments),
      (this.xPadding = !1),
      (this.yPadding = !1),
      (this.fullBleed = !1),
      (this.containerAlign = "center");
  }
  render() {
    return V`<slot></slot>`;
  }
};
(ct.styles = [dt]),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "x-padding" })],
    ct.prototype,
    "xPadding",
    void 0
  ),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "y-padding" })],
    ct.prototype,
    "yPadding",
    void 0
  ),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "full-bleed" })],
    ct.prototype,
    "fullBleed",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "container-align" })],
    ct.prototype,
    "containerAlign",
    void 0
  ),
  (ct = s([le("outline-container")], ct));
let pt = class extends xe {
  constructor() {
    super(...arguments),
      (this.slots = new l(this, !0)),
      (this.stringSeparator = "/");
  }
  firstUpdated() {
    this.querySelectorAll("span:not(.last)").forEach((e) => {
      const t = document.createElement("span");
      t.classList.add("separator"),
        (t.innerHTML = this.stringSeparator),
        e.append(t);
    });
  }
  render() {
    return V`
      <section class="outline-breadcrumbs">
        <outline-container>
          <slot></slot>
        </outline-container>
      </section>
    `;
  }
};
(pt.styles = [st]),
  s(
    [de({ type: String, attribute: "string-separator" })],
    pt.prototype,
    "stringSeparator",
    void 0
  ),
  (pt = s([le("outline-breadcrumbs")], pt));
var ht = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:inline-flex;
  border-radius:var(--spacing-2);
  vertical-align:middle;
}

.btn{
  display:flex;
  flex-wrap:nowrap;
  align-items:center;
  cursor:pointer;
  transition-property:color, background-color, border-color,
    fill, stroke, outline, outline-color, -webkit-text-decoration-color;
  transition-property:color, background-color, border-color,
    text-decoration-color, fill, stroke, outline, outline-color;
  transition-property:color, background-color, border-color,
    text-decoration-color, fill, stroke, outline, outline-color, -webkit-text-decoration-color;
  transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration:300ms;
  -webkit-text-decoration-line:none;
          text-decoration-line:none;
  outline:none;
  line-height:1.5;
  font-family:var(--ff-body);
  font-weight:var(--outline-btn-weight);
}

.btn[aria-disabled='true']{
  pointer-events:none;
  cursor:not-allowed;
  -webkit-user-select:none;
     -moz-user-select:none;
          user-select:none;
}

.btn.primary{
  padding:var(--outline-btn--primary-padding);
  border-radius:var(--outline-btn--primary-rounded);
  background-color:var(--outline-btn--primary-bg-color-default);
  color:var(--outline-btn--primary-text-color-default);
  border:var(--outline-btn--primary-border-default);
  outline:var(--outline-btn--primary-outline-default);
  font-weight:var(--outline-btn--primary-weight-default);
}

.btn.primary:hover{
    background-color:var(--outline-btn--primary-bg-color-hover);
    color:var(--outline-btn--primary-text-color-hover);
    border:var(--outline-btn--primary-border-hover);
    outline:var(--outline-btn--primary-outline-hover);
    font-weight:var(--outline-btn--primary-weight-hover);
  }

.btn.primary:focus{
    background-color:var(--outline-btn--primary-bg-color-focus);
    color:var(--outline-btn--primary-text-color-focus);
    border:var(--outline-btn--primary-border-focus);
    outline:var(--outline-btn--primary-outline-focus);
    font-weight:var(--outline-btn--primary-weight-focus);
  }

.primary[aria-disabled='true']{
  background-color:var(--outline-btn--primary--disabled-bg-color);
  color:var(--outline-btn--primary--disabled-text-color);
  border:var(--outline-btn--primary--disabled-border);
  outline:var(--outline-btn--primary--disabled-outline);
}

.primary[aria-disabled='true']:focus{
    background-color:var(--outline-btn--primary--disabled-bg-color-focus);
    color:var(--outline-btn--primary--disabled-text-color-focus);
    border:var(--outline-btn--primary--disabled-border-focus);
    outline:var(--outline-btn--primary--disabled-outline-focus);
  }

.btn.secondary{
  padding:var(--outline-btn--secondary-padding);
  border-radius:var(--outline-btn--secondary-rounded);
  background-color:var(--outline-btn--secondary-bg-color-default);
  color:var(--outline-btn--secondary-text-color-default);
  border:var(--outline-btn--secondary-border-default);
  outline:var(--outline-btn--secondary-outline-default);
  font-weight:var(--outline-btn--secondary-weight-default);
}

.btn.secondary:hover{
    background-color:var(--outline-btn--secondary-bg-color-hover);
    color:var(--outline-btn--secondary-text-color-hover);
    border:var(--outline-btn--secondary-border-hover);
    outline:var(--outline-btn--secondary-outline-hover);
    font-weight:var(--outline-btn--secondary-weight-hover);
  }

.btn.secondary:focus{
    background-color:var(--outline-btn--secondary-bg-color-focus);
    color:var(--outline-btn--secondary-text-color-focus);
    border:var(--outline-btn--secondary-border-focus);
    outline:var(--outline-btn--secondary-outline-focus);
    font-weight:var(--outline-btn--secondary-weight-focus);
  }

.secondary[aria-disabled='true']{
  background-color:var(--outline-btn--secondary--disabled-bg-color);
  color:var(--outline-btn--secondary--disabled-text-color);
  border:var(--outline-btn--secondary--disabled-border);
  outline:var(--outline-btn--secondary--disabled-outline);
}

.secondary[aria-disabled='true']:focus{
    background-color:var(--outline-btn--secondary--disabled-bg-color-focus);
    color:var(--outline-btn--secondary--disabled-text-color-focus);
    border:var(--outline-btn--secondary--disabled-border-focus);
    outline:var(--outline-btn--secondary--disabled-outline-focus);
  }

.btn.small{
  font-size:var(--fs-sm);
  line-height:var(--lh-sm);
}

.btn.medium{
  font-size:var(--fs-base);
  line-height:var(--lh-base);
}

.btn.large{
  font-size:var(--fs-lg);
  line-height:var(--lh-lg);
}

.btn.none{
  padding:var(--outline-btn--link-padding);
  border-radius:var(--outline-btn--link-rounded);
  background-color:var(--outline-btn--link-bg-color-default);
  color:var(--outline-btn--link-text-color-default);
  border:var(--outline-btn--link-border-default);
  outline:var(--outline-btn--link-outline-default);
  font-weight:var(--outline-btn--link-weight-default);
}

.btn.none:hover{
    background-color:var(--outline-btn--link-bg-color-hover);
    color:var(--outline-btn--link-text-color-hover);
    -webkit-text-decoration:var(--outline-btn--link-decoration-hover);
            text-decoration:var(--outline-btn--link-decoration-hover);
    border:var(--outline-btn--link-border-hover);
    outline:var(--outline-btn--link-outline-hover);
    font-weight:var(--outline-btn--link-weight-hover);
  }

.btn.none:focus{
    background-color:var(--outline-btn--link-bg-color-focus);
    color:var(--outline-btn--link-text-color-focus);
    -webkit-text-decoration:var(--outline-btn--link-decoration-focus);
            text-decoration:var(--outline-btn--link-decoration-focus);
    border:var(--outline-btn--link-border-focus);
    outline:var(--outline-btn--link-outline-focus);
    font-weight:var(--outline-btn--link-weight-focus);
  }

.btn.none[aria-disabled='true']{
    background-color:var(--outline-btn--link--disabled-bg-color);
    color:var(--outline-btn--link--disabled-text-color);
    -webkit-text-decoration:var(--outline-btn--link--disabled-decoration);
            text-decoration:var(--outline-btn--link--disabled-decoration);
    border:var(--outline-btn--link--disabled-border);
    outline:var(--outline-btn--link--disabled-outline);
  }

.btn.none[aria-disabled='true']:focus{
      background-color:var(--outline-btn--link--disabled-bg-color-focus);
      color:var(--outline-btn--link--disabled-text-color-focus);
      -webkit-text-decoration:var(--outline-btn--link--disabled-decoration-focus);
              text-decoration:var(--outline-btn--link--disabled-decoration-focus);
      border:var(--outline-btn--link--disabled-border-focus);
      outline:var(--outline-btn--link--disabled-outline-focus);
    }

:host(.icon__button) .btn.primary{
    border-top-left-radius:0px !important;
    border-bottom-left-radius:0px !important;
  }

:host(.icon__button) .btn.secondary{
    border-top-left-radius:0px !important;
    border-bottom-left-radius:0px !important;
    border:0 !important;
  }

:host(.icon__button) .btn.none{
    border:0 !important;
    margin-right:0 !important;
  }
`;
let gt = class extends xe {
  constructor() {
    super(...arguments),
      (this.slots = new l(this, !1)),
      (this.buttonVariant = "primary"),
      (this.buttonSize = "medium"),
      (this.isDisabled = !1);
  }
  firstUpdated() {
    (this.hasLeftIcon = this.slots.test("left")),
      (this.hasRightIcon = this.slots.test("right"));
  }
  render() {
    return this.buttonUrl
      ? V` <a
          class="btn ${this.buttonVariant} ${this.buttonSize}"
          href=${this.buttonUrl}
          target=${ye(this.buttonTarget)}
          aria-label="${ye(this.buttonLabel)}"
          aria-disabled="${ye(this.isDisabled)}"
        >
          ${this.iconTemplate(this.hasLeftIcon, "left")}
          <slot></slot>
          ${this.iconTemplate(this.hasRightIcon, "right")}
        </a>`
      : V`<button
          class="btn ${this.buttonVariant} ${this.buttonSize}"
          aria-label="${ye(this.buttonLabel)}"
          aria-disabled="${ye(this.isDisabled)}"
          .onclick="${this.onClick}"
          .onkeyup="${this.onKeyUp}"
        >
          ${this.iconTemplate(this.hasLeftIcon, "left")}
          <slot></slot>
          ${this.iconTemplate(this.hasRightIcon, "right")}
        </button> `;
  }
  iconTemplate(e, t) {
    return e ? V`<slot name="${t}"></slot>` : null;
  }
  updated() {
    this.hasAttribute("is-disabled")
      ? this.setAttribute("aria-disabled", "true")
      : this.setAttribute("aria-disabled", "false");
  }
};
(gt.styles = [ht]),
  s(
    [de({ type: String, attribute: "button-url" })],
    gt.prototype,
    "buttonUrl",
    void 0
  ),
  s(
    [de({ type: String, attribute: "button-label" })],
    gt.prototype,
    "buttonLabel",
    void 0
  ),
  s(
    [de({ type: String, attribute: "button-target" })],
    gt.prototype,
    "buttonTarget",
    void 0
  ),
  s(
    [de({ type: String, attribute: "button-variant" })],
    gt.prototype,
    "buttonVariant",
    void 0
  ),
  s(
    [de({ type: String, attribute: "button-size" })],
    gt.prototype,
    "buttonSize",
    void 0
  ),
  s(
    [de({ type: Boolean, attribute: "is-disabled" })],
    gt.prototype,
    "isDisabled",
    void 0
  ),
  s([de()], gt.prototype, "onClick", void 0),
  s([de()], gt.prototype, "onKeyUp", void 0),
  s([ce()], gt.prototype, "hasLeftIcon", void 0),
  s([ce()], gt.prototype, "hasRightIcon", void 0),
  (gt = s([le("outline-button")], gt));
var ut = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {

  display: block;

  overflow: hidden;
}

  :host section {

  display: flex
}

  :host section {

  flex-direction: column
}

  :host section {

  overflow: hidden
}

  :host section {

  text-align: left
}

  :host p {

  margin-bottom: 2.5rem
}

.outline-shadow {

  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);

  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);

  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.outline-rounded-2xl {

  border-radius: 1rem
}

.outline-bg-primary {

  background-color: var(--demo-darkBlue)
}

.outline-bg-secondary {

  background-color: var(--demo-mediumBlue)
}

.outline-bg-tertiary {

  background-color: var(--demo-lightBlue)
}

.outline-bg-black {

  background-color: var(--neutral-black)
}

.outline-bg-white {

  background-color: var(--neutral-white)
}

.outline-bg-gray {

  background-color: var(--neutral-grayMedium)
}

.outline-bg-lightgray {

  background-color: var(--neutral-grayLight)
}
`;
let mt = class extends xe {
  constructor() {
    super(...arguments), (this.isRounded = !1), (this.hasShadow = !1);
  }
  connectedCallback() {
    super.connectedCallback(),
      (this.hasHeaderSlot = null !== this.querySelector('[slot="header"]')),
      (this.hasContentSlot = null !== this.querySelector('[slot="content"]')),
      (this.hasFooterSlot = null !== this.querySelector('[slot="footer"]'));
  }
  headerTemplate(e) {
    return this.hasHeaderSlot
      ? V` <section class="${Ae(e)}">
      <slot name="header"></slot>
    </section>`
      : null;
  }
  contentTemplate(e) {
    return this.hasContentSlot
      ? V` <section class="${Ae(e)}">
      <slot name="content"></slot>
    </section>`
      : null;
  }
  footerTemplate(e) {
    return this.hasFooterSlot
      ? V` <section class="${Ae(e)}">
      <slot name="footer"></slot>
    </section>`
      : null;
  }
  render() {
    const e = {
        card: !0,
        "outline-shadow": this.hasShadow,
        "outline-rounded-2xl": this.isRounded,
      },
      t = {
        "card-header": !0,
        [`outline-bg-${this.bgColorHeader}`]: void 0 !== this.bgColorHeader,
      },
      r = {
        "card-content": !0,
        [`outline-bg-${this.bgColorContent}`]: void 0 !== this.bgColorContent,
      },
      n = {
        "card-footer": !0,
        [`outline-bg-${this.bgColorFooter}`]: void 0 !== this.bgColorFooter,
      };
    return V`
      <section class="${Ae(e)}">
        ${this.headerTemplate(t)}
        ${this.contentTemplate(r)}
        ${this.footerTemplate(n)}
      </section>
    `;
  }
};
(mt.styles = [ut]),
  s([de()], mt.prototype, "bgColorHeader", void 0),
  s([de()], mt.prototype, "bgColorContent", void 0),
  s([de()], mt.prototype, "bgColorFooter", void 0),
  s(
    [de({ type: Boolean, attribute: "is-rounded" })],
    mt.prototype,
    "isRounded",
    void 0
  ),
  s(
    [de({ type: Boolean, attribute: "has-shadow" })],
    mt.prototype,
    "hasShadow",
    void 0
  ),
  s([ce()], mt.prototype, "hasHeaderSlot", void 0),
  s([ce()], mt.prototype, "hasContentSlot", void 0),
  s([ce()], mt.prototype, "hasFooterSlot", void 0),
  (mt = s([le("outline-card")], mt));
var bt = (function (e) {
  var t = /\blang(?:uage)?-([\w-]+)\b/i,
    r = 0,
    n = {},
    i = {
      manual: e.Prism && e.Prism.manual,
      disableWorkerMessageHandler:
        e.Prism && e.Prism.disableWorkerMessageHandler,
      util: {
        encode: function e(t) {
          return t instanceof a
            ? new a(t.type, e(t.content), t.alias)
            : Array.isArray(t)
            ? t.map(e)
            : t
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/\u00a0/g, " ");
        },
        type: function (e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        },
        objId: function (e) {
          return e.t || Object.defineProperty(e, "t", { value: ++r }), e.t;
        },
        clone: function e(t, r) {
          var n, a;
          switch (((r = r || {}), i.util.type(t))) {
            case "Object":
              if (((a = i.util.objId(t)), r[a])) return r[a];
              for (var o in ((n = {}), (r[a] = n), t))
                t.hasOwnProperty(o) && (n[o] = e(t[o], r));
              return n;
            case "Array":
              return (
                (a = i.util.objId(t)),
                r[a]
                  ? r[a]
                  : ((n = []),
                    (r[a] = n),
                    t.forEach(function (t, i) {
                      n[i] = e(t, r);
                    }),
                    n)
              );
            default:
              return t;
          }
        },
        getLanguage: function (e) {
          for (; e && !t.test(e.className); ) e = e.parentElement;
          return e
            ? (e.className.match(t) || [, "none"])[1].toLowerCase()
            : "none";
        },
        currentScript: function () {
          if ("undefined" == typeof document) return null;
          if ("currentScript" in document) return document.currentScript;
          try {
            throw new Error();
          } catch (n) {
            var e = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(n.stack) || [])[1];
            if (e) {
              var t = document.getElementsByTagName("script");
              for (var r in t) if (t[r].src == e) return t[r];
            }
            return null;
          }
        },
        isActive: function (e, t, r) {
          for (var n = "no-" + t; e; ) {
            var i = e.classList;
            if (i.contains(t)) return !0;
            if (i.contains(n)) return !1;
            e = e.parentElement;
          }
          return !!r;
        },
      },
      languages: {
        plain: n,
        plaintext: n,
        text: n,
        txt: n,
        extend: function (e, t) {
          var r = i.util.clone(i.languages[e]);
          for (var n in t) r[n] = t[n];
          return r;
        },
        insertBefore: function (e, t, r, n) {
          var a = (n = n || i.languages)[e],
            o = {};
          for (var l in a)
            if (a.hasOwnProperty(l)) {
              if (l == t) for (var s in r) r.hasOwnProperty(s) && (o[s] = r[s]);
              r.hasOwnProperty(l) || (o[l] = a[l]);
            }
          var d = n[e];
          return (
            (n[e] = o),
            i.languages.DFS(i.languages, function (t, r) {
              r === d && t != e && (this[t] = o);
            }),
            o
          );
        },
        DFS: function e(t, r, n, a) {
          a = a || {};
          var o = i.util.objId;
          for (var l in t)
            if (t.hasOwnProperty(l)) {
              r.call(t, l, t[l], n || l);
              var s = t[l],
                d = i.util.type(s);
              "Object" !== d || a[o(s)]
                ? "Array" !== d || a[o(s)] || ((a[o(s)] = !0), e(s, r, l, a))
                : ((a[o(s)] = !0), e(s, r, null, a));
            }
        },
      },
      plugins: {},
      highlightAll: function (e, t) {
        i.highlightAllUnder(document, e, t);
      },
      highlightAllUnder: function (e, t, r) {
        var n = {
          callback: r,
          container: e,
          selector:
            'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
        };
        i.hooks.run("before-highlightall", n),
          (n.elements = Array.prototype.slice.apply(
            n.container.querySelectorAll(n.selector)
          )),
          i.hooks.run("before-all-elements-highlight", n);
        for (var a, o = 0; (a = n.elements[o++]); )
          i.highlightElement(a, !0 === t, n.callback);
      },
      highlightElement: function (r, n, a) {
        var o = i.util.getLanguage(r),
          l = i.languages[o];
        r.className =
          r.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o;
        var s = r.parentElement;
        s &&
          "pre" === s.nodeName.toLowerCase() &&
          (s.className =
            s.className.replace(t, "").replace(/\s+/g, " ") + " language-" + o);
        var d = { element: r, language: o, grammar: l, code: r.textContent };
        function c(e) {
          (d.highlightedCode = e),
            i.hooks.run("before-insert", d),
            (d.element.innerHTML = d.highlightedCode),
            i.hooks.run("after-highlight", d),
            i.hooks.run("complete", d),
            a && a.call(d.element);
        }
        if (
          (i.hooks.run("before-sanity-check", d),
          (s = d.element.parentElement) &&
            "pre" === s.nodeName.toLowerCase() &&
            !s.hasAttribute("tabindex") &&
            s.setAttribute("tabindex", "0"),
          !d.code)
        )
          return i.hooks.run("complete", d), void (a && a.call(d.element));
        if ((i.hooks.run("before-highlight", d), d.grammar))
          if (n && e.Worker) {
            var p = new Worker(i.filename);
            (p.onmessage = function (e) {
              c(e.data);
            }),
              p.postMessage(
                JSON.stringify({
                  language: d.language,
                  code: d.code,
                  immediateClose: !0,
                })
              );
          } else c(i.highlight(d.code, d.grammar, d.language));
        else c(i.util.encode(d.code));
      },
      highlight: function (e, t, r) {
        var n = { code: e, grammar: t, language: r };
        return (
          i.hooks.run("before-tokenize", n),
          (n.tokens = i.tokenize(n.code, n.grammar)),
          i.hooks.run("after-tokenize", n),
          a.stringify(i.util.encode(n.tokens), n.language)
        );
      },
      tokenize: function (e, t) {
        var r = t.rest;
        if (r) {
          for (var n in r) t[n] = r[n];
          delete t.rest;
        }
        var i = new s();
        return (
          d(i, i.head, e),
          l(e, i, t, i.head, 0),
          (function (e) {
            var t = [],
              r = e.head.next;
            for (; r !== e.tail; ) t.push(r.value), (r = r.next);
            return t;
          })(i)
        );
      },
      hooks: {
        all: {},
        add: function (e, t) {
          var r = i.hooks.all;
          (r[e] = r[e] || []), r[e].push(t);
        },
        run: function (e, t) {
          var r = i.hooks.all[e];
          if (r && r.length) for (var n, a = 0; (n = r[a++]); ) n(t);
        },
      },
      Token: a,
    };
  function a(e, t, r, n) {
    (this.type = e),
      (this.content = t),
      (this.alias = r),
      (this.length = 0 | (n || "").length);
  }
  function o(e, t, r, n) {
    e.lastIndex = t;
    var i = e.exec(r);
    if (i && n && i[1]) {
      var a = i[1].length;
      (i.index += a), (i[0] = i[0].slice(a));
    }
    return i;
  }
  function l(e, t, r, n, s, p) {
    for (var h in r)
      if (r.hasOwnProperty(h) && r[h]) {
        var g = r[h];
        g = Array.isArray(g) ? g : [g];
        for (var u = 0; u < g.length; ++u) {
          if (p && p.cause == h + "," + u) return;
          var m = g[u],
            b = m.inside,
            v = !!m.lookbehind,
            y = !!m.greedy,
            x = m.alias;
          if (y && !m.pattern.global) {
            var f = m.pattern.toString().match(/[imsuy]*$/)[0];
            m.pattern = RegExp(m.pattern.source, f + "g");
          }
          for (
            var w = m.pattern || m, k = n.next, z = s;
            k !== t.tail && !(p && z >= p.reach);
            z += k.value.length, k = k.next
          ) {
            var _ = k.value;
            if (t.length > e.length) return;
            if (!(_ instanceof a)) {
              var $,
                S = 1;
              if (y) {
                if (!($ = o(w, z, e, v))) break;
                var A = $.index,
                  M = $.index + $[0].length,
                  C = z;
                for (C += k.value.length; A >= C; )
                  C += (k = k.next).value.length;
                if (((z = C -= k.value.length), k.value instanceof a)) continue;
                for (
                  var B = k;
                  B !== t.tail && (C < M || "string" == typeof B.value);
                  B = B.next
                )
                  S++, (C += B.value.length);
                S--, (_ = e.slice(z, C)), ($.index -= z);
              } else if (!($ = o(w, 0, _, v))) continue;
              A = $.index;
              var T = $[0],
                Z = _.slice(0, A),
                q = _.slice(A + T.length),
                E = z + _.length;
              p && E > p.reach && (p.reach = E);
              var F = k.prev;
              if (
                (Z && ((F = d(t, F, Z)), (z += Z.length)),
                c(t, F, S),
                (k = d(t, F, new a(h, b ? i.tokenize(T, b) : T, x, T))),
                q && d(t, k, q),
                S > 1)
              ) {
                var L = { cause: h + "," + u, reach: E };
                l(e, t, r, k.prev, z, L),
                  p && L.reach > p.reach && (p.reach = L.reach);
              }
            }
          }
        }
      }
  }
  function s() {
    var e = { value: null, prev: null, next: null },
      t = { value: null, prev: e, next: null };
    (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
  }
  function d(e, t, r) {
    var n = t.next,
      i = { value: r, prev: t, next: n };
    return (t.next = i), (n.prev = i), e.length++, i;
  }
  function c(e, t, r) {
    for (var n = t.next, i = 0; i < r && n !== e.tail; i++) n = n.next;
    (t.next = n), (n.prev = t), (e.length -= i);
  }
  if (
    ((e.Prism = i),
    (a.stringify = function e(t, r) {
      if ("string" == typeof t) return t;
      if (Array.isArray(t)) {
        var n = "";
        return (
          t.forEach(function (t) {
            n += e(t, r);
          }),
          n
        );
      }
      var a = {
          type: t.type,
          content: e(t.content, r),
          tag: "span",
          classes: ["token", t.type],
          attributes: {},
          language: r,
        },
        o = t.alias;
      o &&
        (Array.isArray(o)
          ? Array.prototype.push.apply(a.classes, o)
          : a.classes.push(o)),
        i.hooks.run("wrap", a);
      var l = "";
      for (var s in a.attributes)
        l +=
          " " +
          s +
          '="' +
          (a.attributes[s] || "").replace(/"/g, "&quot;") +
          '"';
      return (
        "<" +
        a.tag +
        ' class="' +
        a.classes.join(" ") +
        '"' +
        l +
        ">" +
        a.content +
        "</" +
        a.tag +
        ">"
      );
    }),
    !e.document)
  )
    return e.addEventListener
      ? (i.disableWorkerMessageHandler ||
          e.addEventListener(
            "message",
            function (t) {
              var r = JSON.parse(t.data),
                n = r.language,
                a = r.code,
                o = r.immediateClose;
              e.postMessage(i.highlight(a, i.languages[n], n)), o && e.close();
            },
            !1
          ),
        i)
      : i;
  var p = i.util.currentScript();
  function h() {
    i.manual || i.highlightAll();
  }
  if (
    (p &&
      ((i.filename = p.src), p.hasAttribute("data-manual") && (i.manual = !0)),
    !i.manual)
  ) {
    var g = document.readyState;
    "loading" === g || ("interactive" === g && p && p.defer)
      ? document.addEventListener("DOMContentLoaded", h)
      : window.requestAnimationFrame
      ? window.requestAnimationFrame(h)
      : window.setTimeout(h, 16);
  }
  return i;
})(
  "undefined" != typeof window
    ? window
    : "undefined" != typeof WorkerGlobalScope &&
      self instanceof WorkerGlobalScope
    ? self
    : {}
);
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */ "undefined" != typeof module && module.exports && (module.exports = bt),
  "undefined" != typeof global && (global.Prism = bt),
  (bt.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        "internal-subset": {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null,
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        "doctype-tag": /^DOCTYPE/,
        name: /[^\s<>'"]+/,
      },
    },
    cdata: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
        },
        "special-attr": [],
        "attr-value": {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
          },
        },
        punctuation: /\/?>/,
        "attr-name": {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ },
        },
      },
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
      /&#x?[\da-f]{1,8};/i,
    ],
  }),
  (bt.languages.markup.tag.inside["attr-value"].inside.entity =
    bt.languages.markup.entity),
  (bt.languages.markup.doctype.inside["internal-subset"].inside =
    bt.languages.markup),
  bt.hooks.add("wrap", function (e) {
    "entity" === e.type &&
      (e.attributes.title = e.content.replace(/&amp;/, "&"));
  }),
  Object.defineProperty(bt.languages.markup.tag, "addInlined", {
    value: function (e, t) {
      var r = {};
      (r["language-" + t] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: !0,
        inside: bt.languages[t],
      }),
        (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
      var n = {
        "included-cdata": { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r },
      };
      n["language-" + t] = { pattern: /[\s\S]+/, inside: bt.languages[t] };
      var i = {};
      (i[e] = {
        pattern: RegExp(
          /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            function () {
              return e;
            }
          ),
          "i"
        ),
        lookbehind: !0,
        greedy: !0,
        inside: n,
      }),
        bt.languages.insertBefore("markup", "cdata", i);
    },
  }),
  Object.defineProperty(bt.languages.markup.tag, "addAttribute", {
    value: function (e, t) {
      bt.languages.markup.tag.inside["special-attr"].push({
        pattern: RegExp(
          /(^|["'\s])/.source +
            "(?:" +
            e +
            ")" +
            /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
          "i"
        ),
        lookbehind: !0,
        inside: {
          "attr-name": /^[^\s=]+/,
          "attr-value": {
            pattern: /=[\s\S]+/,
            inside: {
              value: {
                pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                lookbehind: !0,
                alias: [t, "language-" + t],
                inside: bt.languages[t],
              },
              punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
            },
          },
        },
      });
    },
  }),
  (bt.languages.html = bt.languages.markup),
  (bt.languages.mathml = bt.languages.markup),
  (bt.languages.svg = bt.languages.markup),
  (bt.languages.xml = bt.languages.extend("markup", {})),
  (bt.languages.ssml = bt.languages.xml),
  (bt.languages.atom = bt.languages.xml),
  (bt.languages.rss = bt.languages.xml),
  (function (e) {
    var t =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (e.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          "selector-function-argument": {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: "selector",
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0,
          },
        },
      },
      url: {
        pattern: RegExp(
          "\\burl\\((?:" +
            t.source +
            "|" +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ")\\)",
          "i"
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
        },
      },
      selector: {
        pattern: RegExp(
          "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
            t.source +
            ")*(?=\\s*\\{)"
        ),
        lookbehind: !0,
      },
      string: { pattern: t, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0,
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/,
    }),
      (e.languages.css.atrule.inside.rest = e.languages.css);
    var r = e.languages.markup;
    r && (r.tag.addInlined("style", "css"), r.tag.addAttribute("style", "css"));
  })(bt),
  (bt.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0,
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0,
    },
    "class-name": {
      pattern:
        /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ },
    },
    keyword:
      /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
  }),
  (bt.languages.javascript = bt.languages.extend("clike", {
    "class-name": [
      bt.languages.clike["class-name"],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
        lookbehind: !0,
      },
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0,
      },
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number:
      /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
  })),
  (bt.languages.javascript["class-name"][0].pattern =
    /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
  bt.languages.insertBefore("javascript", "keyword", {
    regex: {
      pattern:
        /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
      lookbehind: !0,
      greedy: !0,
      inside: {
        "regex-source": {
          pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
          lookbehind: !0,
          alias: "language-regex",
          inside: bt.languages.regex,
        },
        "regex-delimiter": /^\/|\/$/,
        "regex-flags": /^[a-z]+$/,
      },
    },
    "function-variable": {
      pattern:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
      alias: "function",
    },
    parameter: [
      {
        pattern:
          /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
        lookbehind: !0,
        inside: bt.languages.javascript,
      },
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
        lookbehind: !0,
        inside: bt.languages.javascript,
      },
      {
        pattern:
          /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
        lookbehind: !0,
        inside: bt.languages.javascript,
      },
      {
        pattern:
          /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
        lookbehind: !0,
        inside: bt.languages.javascript,
      },
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
  }),
  bt.languages.insertBefore("javascript", "string", {
    hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
    "template-string": {
      pattern:
        /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
      greedy: !0,
      inside: {
        "template-punctuation": { pattern: /^`|`$/, alias: "string" },
        interpolation: {
          pattern:
            /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
          lookbehind: !0,
          inside: {
            "interpolation-punctuation": {
              pattern: /^\$\{|\}$/,
              alias: "punctuation",
            },
            rest: bt.languages.javascript,
          },
        },
        string: /[\s\S]+/,
      },
    },
  }),
  bt.languages.markup &&
    (bt.languages.markup.tag.addInlined("script", "javascript"),
    bt.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
        .source,
      "javascript"
    )),
  (bt.languages.js = bt.languages.javascript),
  (bt.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern:
        /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: !0,
      alias: "string",
      inside: {
        "language-markdown": {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: bt.languages.markdown,
        },
      },
    },
    string: {
      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0,
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:true|false)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
    "attr-name": {
      pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: !0,
    },
    "atom-input": { pattern: /[A-Z]\w*Input(?=!?.*$)/m, alias: "class-name" },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    "class-name": {
      pattern:
        /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: !0,
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: "function",
    },
    "definition-mutation": {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: "function",
    },
    "definition-query": {
      pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: "function",
    },
    keyword:
      /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    "property-query": /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/,
  }),
  bt.hooks.add("after-tokenize", function (e) {
    if ("graphql" === e.language)
      for (
        var t = e.tokens.filter(function (e) {
            return (
              "string" != typeof e &&
              "comment" !== e.type &&
              "scalar" !== e.type
            );
          }),
          r = 0;
        r < t.length;

      ) {
        var n = t[r++];
        if ("keyword" === n.type && "mutation" === n.content) {
          var i = [];
          if (
            p(["definition-mutation", "punctuation"]) &&
            "(" === c(1).content
          ) {
            r += 2;
            var a = h(/^\($/, /^\)$/);
            if (-1 === a) continue;
            for (; r < a; r++) {
              var o = c(0);
              "variable" === o.type &&
                (g(o, "variable-input"), i.push(o.content));
            }
            r = a + 1;
          }
          if (
            p(["punctuation", "property-query"]) &&
            "{" === c(0).content &&
            (r++, g(c(0), "property-mutation"), i.length > 0)
          ) {
            var l = h(/^\{$/, /^\}$/);
            if (-1 === l) continue;
            for (var s = r; s < l; s++) {
              var d = t[s];
              "variable" === d.type &&
                i.indexOf(d.content) >= 0 &&
                g(d, "variable-input");
            }
          }
        }
      }
    function c(e) {
      return t[r + e];
    }
    function p(e, t) {
      t = t || 0;
      for (var r = 0; r < e.length; r++) {
        var n = c(r + t);
        if (!n || n.type !== e[r]) return !1;
      }
      return !0;
    }
    function h(e, n) {
      for (var i = 1, a = r; a < t.length; a++) {
        var o = t[a],
          l = o.content;
        if ("punctuation" === o.type && "string" == typeof l)
          if (e.test(l)) i++;
          else if (n.test(l) && 0 === --i) return a;
      }
      return -1;
    }
    function g(e, t) {
      var r = e.alias;
      r ? Array.isArray(r) || (e.alias = r = [r]) : (e.alias = r = []),
        r.push(t);
    }
  }),
  (bt.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: !0,
      greedy: !0,
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: !0,
      greedy: !0,
    },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:true|false)\b/,
    null: { pattern: /\bnull\b/, alias: "keyword" },
  }),
  (bt.languages.webmanifest = bt.languages.json),
  (function (e) {
    var t = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    e.languages.json5 = e.languages.extend("json", {
      property: [
        { pattern: RegExp(t.source + "(?=\\s*:)"), greedy: !0 },
        {
          pattern:
            /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/,
          alias: "unquoted",
        },
      ],
      string: { pattern: t, greedy: !0 },
      number:
        /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
    });
  })(bt),
  (function (e) {
    var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function r(e) {
      return (
        (e = e.replace(/<inner>/g, function () {
          return t;
        })),
        RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
      );
    }
    var n = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
      i = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function () {
          return n;
        }
      ),
      a = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
        .source;
    (e.languages.markdown = e.languages.extend("markup", {})),
      e.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            punctuation: /^---|---$/,
            "font-matter": {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ["yaml", "language-yaml"],
              inside: e.languages.yaml,
            },
          },
        },
        blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
        table: {
          pattern: RegExp("^" + i + a + "(?:" + i + ")*", "m"),
          inside: {
            "table-data-rows": {
              pattern: RegExp("^(" + i + a + ")(?:" + i + ")*$"),
              lookbehind: !0,
              inside: {
                "table-data": {
                  pattern: RegExp(n),
                  inside: e.languages.markdown,
                },
                punctuation: /\|/,
              },
            },
            "table-line": {
              pattern: RegExp("^(" + i + ")" + a + "$"),
              lookbehind: !0,
              inside: { punctuation: /\||:?-{3,}:?/ },
            },
            "table-header-row": {
              pattern: RegExp("^" + i + "$"),
              inside: {
                "table-header": {
                  pattern: RegExp(n),
                  alias: "important",
                  inside: e.languages.markdown,
                },
                punctuation: /\|/,
              },
            },
          },
        },
        code: [
          {
            pattern:
              /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: "keyword",
          },
          {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
              "code-block": {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: !0,
              },
              "code-language": { pattern: /^(```).+/, lookbehind: !0 },
              punctuation: /```/,
            },
          },
        ],
        title: [
          {
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: { punctuation: /==+$|--+$/ },
          },
          {
            pattern: /(^\s*)#.+/m,
            lookbehind: !0,
            alias: "important",
            inside: { punctuation: /^#+|#+$/ },
          },
        ],
        hr: {
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: !0,
          alias: "punctuation",
        },
        list: {
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: !0,
          alias: "punctuation",
        },
        "url-reference": {
          pattern:
            /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
            string:
              /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/,
          },
          alias: "url",
        },
        bold: {
          pattern: r(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /\*\*|__/,
          },
        },
        italic: {
          pattern: r(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /[*_]/,
          },
        },
        strike: {
          pattern: r(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: !0,
              inside: {},
            },
            punctuation: /~~?/,
          },
        },
        "code-snippet": {
          pattern:
            /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: !0,
          greedy: !0,
          alias: ["code", "keyword"],
        },
        url: {
          pattern: r(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            operator: /^!/,
            content: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: !0,
              inside: {},
            },
            variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
            url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: !0,
            },
          },
        },
      }),
      ["url", "bold", "italic", "strike"].forEach(function (t) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function (
          r
        ) {
          t !== r &&
            (e.languages.markdown[t].inside.content.inside[r] =
              e.languages.markdown[r]);
        });
      }),
      e.hooks.add("after-tokenize", function (e) {
        ("markdown" !== e.language && "md" !== e.language) ||
          (function e(t) {
            if (t && "string" != typeof t)
              for (var r = 0, n = t.length; r < n; r++) {
                var i = t[r];
                if ("code" === i.type) {
                  var a = i.content[1],
                    o = i.content[3];
                  if (
                    a &&
                    o &&
                    "code-language" === a.type &&
                    "code-block" === o.type &&
                    "string" == typeof a.content
                  ) {
                    var l = a.content
                        .replace(/\b#/g, "sharp")
                        .replace(/\b\+\+/g, "pp"),
                      s =
                        "language-" +
                        (l = (/[a-z][\w-]*/i.exec(l) || [""])[0].toLowerCase());
                    o.alias
                      ? "string" == typeof o.alias
                        ? (o.alias = [o.alias, s])
                        : o.alias.push(s)
                      : (o.alias = [s]);
                  }
                } else e(i.content);
              }
          })(e.tokens);
      }),
      e.hooks.add("wrap", function (t) {
        if ("code-block" === t.type) {
          for (var r = "", n = 0, i = t.classes.length; n < i; n++) {
            var a = t.classes[n],
              d = /language-(.+)/.exec(a);
            if (d) {
              r = d[1];
              break;
            }
          }
          var c,
            p,
            h = e.languages[r];
          if (h)
            t.content = e.highlight(
              ((c = t.content),
              (p = (p = c.replace(o, "")).replace(
                /&(\w{1,8}|#x?[\da-f]{1,8});/gi,
                function (e, t) {
                  var r;
                  if ("#" === (t = t.toLowerCase())[0])
                    return (
                      (r =
                        "x" === t[1]
                          ? parseInt(t.slice(2), 16)
                          : Number(t.slice(1))),
                      s(r)
                    );
                  var n = l[t];
                  return n || e;
                }
              )),
              p),
              h,
              r
            );
          else if (r && "none" !== r && e.plugins.autoloader) {
            var g =
              "md-" +
              new Date().valueOf() +
              "-" +
              Math.floor(1e16 * Math.random());
            (t.attributes.id = g),
              e.plugins.autoloader.loadLanguages(r, function () {
                var t = document.getElementById(g);
                t &&
                  (t.innerHTML = e.highlight(t.textContent, e.languages[r], r));
              });
          }
        }
      });
    var o = RegExp(e.languages.markup.tag.pattern.source, "gi"),
      l = { amp: "&", lt: "<", gt: ">", quot: '"' },
      s = String.fromCodePoint || String.fromCharCode;
    e.languages.md = e.languages.markdown;
  })(bt),
  (function (e) {
    var t = e.util.clone(e.languages.javascript),
      r = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
      n = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
      i = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function a(e, t) {
      return (
        (e = e
          .replace(/<S>/g, function () {
            return r;
          })
          .replace(/<BRACES>/g, function () {
            return n;
          })
          .replace(/<SPREAD>/g, function () {
            return i;
          })),
        RegExp(e, t)
      );
    }
    (i = a(i).source),
      (e.languages.jsx = e.languages.extend("markup", t)),
      (e.languages.jsx.tag.pattern = a(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
          .source
      )),
      (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
      (e.languages.jsx.tag.inside["attr-value"].pattern =
        /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i),
      (e.languages.jsx.tag.inside.tag.inside["class-name"] =
        /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
      (e.languages.jsx.tag.inside.comment = t.comment),
      e.languages.insertBefore(
        "inside",
        "attr-name",
        { spread: { pattern: a(/<SPREAD>/.source), inside: e.languages.jsx } },
        e.languages.jsx.tag
      ),
      e.languages.insertBefore(
        "inside",
        "special-attr",
        {
          script: {
            pattern: a(/=<BRACES>/.source),
            inside: {
              "script-punctuation": {
                pattern: /^=(?=\{)/,
                alias: "punctuation",
              },
              rest: e.languages.jsx,
            },
            alias: "language-javascript",
          },
        },
        e.languages.jsx.tag
      );
    var o = function (e) {
        return e
          ? "string" == typeof e
            ? e
            : "string" == typeof e.content
            ? e.content
            : e.content.map(o).join("")
          : "";
      },
      l = function (t) {
        for (var r = [], n = 0; n < t.length; n++) {
          var i = t[n],
            a = !1;
          if (
            ("string" != typeof i &&
              ("tag" === i.type && i.content[0] && "tag" === i.content[0].type
                ? "</" === i.content[0].content[0].content
                  ? r.length > 0 &&
                    r[r.length - 1].tagName === o(i.content[0].content[1]) &&
                    r.pop()
                  : "/>" === i.content[i.content.length - 1].content ||
                    r.push({
                      tagName: o(i.content[0].content[1]),
                      openedBraces: 0,
                    })
                : r.length > 0 && "punctuation" === i.type && "{" === i.content
                ? r[r.length - 1].openedBraces++
                : r.length > 0 &&
                  r[r.length - 1].openedBraces > 0 &&
                  "punctuation" === i.type &&
                  "}" === i.content
                ? r[r.length - 1].openedBraces--
                : (a = !0)),
            (a || "string" == typeof i) &&
              r.length > 0 &&
              0 === r[r.length - 1].openedBraces)
          ) {
            var s = o(i);
            n < t.length - 1 &&
              ("string" == typeof t[n + 1] || "plain-text" === t[n + 1].type) &&
              ((s += o(t[n + 1])), t.splice(n + 1, 1)),
              n > 0 &&
                ("string" == typeof t[n - 1] ||
                  "plain-text" === t[n - 1].type) &&
                ((s = o(t[n - 1]) + s), t.splice(n - 1, 1), n--),
              (t[n] = new e.Token("plain-text", s, null, s));
          }
          i.content && "string" != typeof i.content && l(i.content);
        }
      };
    e.hooks.add("after-tokenize", function (e) {
      ("jsx" !== e.language && "tsx" !== e.language) || l(e.tokens);
    });
  })(bt),
  (function (e) {
    (e.languages.typescript = e.languages.extend("javascript", {
      "class-name": {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      builtin:
        /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
    })),
      e.languages.typescript.keyword.push(
        /\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/
      ),
      delete e.languages.typescript.parameter;
    var t = e.languages.extend("typescript", {});
    delete t["class-name"],
      (e.languages.typescript["class-name"].inside = t),
      e.languages.insertBefore("typescript", "function", {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: { pattern: /^@/, alias: "operator" },
            function: /^[\s\S]+/,
          },
        },
        "generic-function": {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function:
              /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: "class-name", inside: t },
          },
        },
      }),
      (e.languages.ts = e.languages.typescript);
  })(bt),
  (function (e) {
    var t = e.util.clone(e.languages.typescript);
    e.languages.tsx = e.languages.extend("jsx", t);
    var r = e.languages.tsx.tag;
    (r.pattern = RegExp(
      /(^|[^\w$]|(?=<\/))/.source + "(?:" + r.pattern.source + ")",
      r.pattern.flags
    )),
      (r.lookbehind = !0);
  })(bt),
  (function (e) {
    function t(t, r) {
      e.languages[t] &&
        e.languages.insertBefore(t, "comment", { "doc-comment": r });
    }
    var r = e.languages.markup.tag,
      n = {
        pattern: /\/\/\/.*/,
        greedy: !0,
        alias: "comment",
        inside: { tag: r },
      },
      i = {
        pattern: /'''.*/,
        greedy: !0,
        alias: "comment",
        inside: { tag: r },
      };
    t("csharp", n), t("fsharp", n), t("vbnet", i);
  })(bt),
  (function () {
    if (
      void 0 !== bt &&
      "undefined" != typeof document &&
      document.querySelector
    ) {
      var e,
        t = "line-numbers",
        r = "linkable-line-numbers",
        n = function () {
          if (void 0 === e) {
            var t = document.createElement("div");
            (t.style.fontSize = "13px"),
              (t.style.lineHeight = "1.5"),
              (t.style.padding = "0"),
              (t.style.border = "0"),
              (t.innerHTML = "&nbsp;<br />&nbsp;"),
              document.body.appendChild(t),
              (e = 38 === t.offsetHeight),
              document.body.removeChild(t);
          }
          return e;
        },
        i = !0,
        a = 0;
      bt.hooks.add("before-sanity-check", function (e) {
        var t = e.element.parentElement;
        if (d(t)) {
          var r = 0;
          o(".line-highlight", t).forEach(function (e) {
            (r += e.textContent.length), e.parentNode.removeChild(e);
          }),
            r &&
              /^(?: \n)+$/.test(e.code.slice(-r)) &&
              (e.code = e.code.slice(0, -r));
        }
      }),
        bt.hooks.add("complete", function e(r) {
          var n = r.element.parentElement;
          if (d(n)) {
            clearTimeout(a);
            var i = bt.plugins.lineNumbers,
              o = r.plugins && r.plugins.lineNumbers;
            if (l(n, t) && i && !o) bt.hooks.add("line-numbers", e);
            else c(n)(), (a = setTimeout(p, 1));
          }
        }),
        window.addEventListener("hashchange", p),
        window.addEventListener("resize", function () {
          o("pre")
            .filter(d)
            .map(function (e) {
              return c(e);
            })
            .forEach(s);
        });
    }
    function o(e, t) {
      return Array.prototype.slice.call((t || document).querySelectorAll(e));
    }
    function l(e, t) {
      return e.classList.contains(t);
    }
    function s(e) {
      e();
    }
    function d(e) {
      return (
        !(!e || !/pre/i.test(e.nodeName)) &&
        (!!e.hasAttribute("data-line") || !(!e.id || !bt.util.isActive(e, r)))
      );
    }
    function c(e, a, d) {
      var c = (a = "string" == typeof a ? a : e.getAttribute("data-line") || "")
          .replace(/\s+/g, "")
          .split(",")
          .filter(Boolean),
        p = +e.getAttribute("data-line-offset") || 0,
        h = (n() ? parseInt : parseFloat)(getComputedStyle(e).lineHeight),
        g = bt.util.isActive(e, t),
        u = e.querySelector("code"),
        m = g ? e : u || e,
        b = [],
        v =
          u && m != u
            ? (function (e, t) {
                var r = getComputedStyle(e),
                  n = getComputedStyle(t);
                function i(e) {
                  return +e.substr(0, e.length - 2);
                }
                return (
                  t.offsetTop +
                  i(n.borderTopWidth) +
                  i(n.paddingTop) -
                  i(r.paddingTop)
                );
              })(e, u)
            : 0;
      c.forEach(function (t) {
        var r = t.split("-"),
          n = +r[0],
          i = +r[1] || n,
          a =
            e.querySelector('.line-highlight[data-range="' + t + '"]') ||
            document.createElement("div");
        if (
          (b.push(function () {
            a.setAttribute("aria-hidden", "true"),
              a.setAttribute("data-range", t),
              (a.className = (d || "") + " line-highlight");
          }),
          g && bt.plugins.lineNumbers)
        ) {
          var o = bt.plugins.lineNumbers.getLine(e, n),
            l = bt.plugins.lineNumbers.getLine(e, i);
          if (o) {
            var s = o.offsetTop + v + "px";
            b.push(function () {
              a.style.top = s;
            });
          }
          if (l) {
            var c = l.offsetTop - o.offsetTop + l.offsetHeight + "px";
            b.push(function () {
              a.style.height = c;
            });
          }
        } else
          b.push(function () {
            a.setAttribute("data-start", String(n)),
              i > n && a.setAttribute("data-end", String(i)),
              (a.style.top = (n - p - 1) * h + v + "px"),
              (a.textContent = new Array(i - n + 2).join(" \n"));
          });
        b.push(function () {
          m.appendChild(a);
        });
      });
      var y = e.id;
      if (g && bt.util.isActive(e, r) && y) {
        l(e, r) ||
          b.push(function () {
            e.classList.add(r);
          });
        var x = parseInt(e.getAttribute("data-start") || "1");
        o(".line-numbers-rows > span", e).forEach(function (e, t) {
          var r = t + x;
          e.onclick = function () {
            var e = y + "." + r;
            (i = !1),
              (location.hash = e),
              setTimeout(function () {
                i = !0;
              }, 1);
          };
        });
      }
      return function () {
        b.forEach(s);
      };
    }
    function p() {
      var e = location.hash.slice(1);
      o(".temporary.line-highlight").forEach(function (e) {
        e.parentNode.removeChild(e);
      });
      var t = (e.match(/\.([\d,-]+)$/) || [, ""])[1];
      if (t && !document.getElementById(e)) {
        var r = e.slice(0, e.lastIndexOf(".")),
          n = document.getElementById(r);
        if (n)
          n.hasAttribute("data-line") || n.setAttribute("data-line", ""),
            c(n, t, "temporary ")(),
            i &&
              document
                .querySelector(".temporary.line-highlight")
                .scrollIntoView();
      }
    }
  })();
var vt = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:block;
  border-radius:0.25rem;
}

code[class*='language-'],
pre[class*='language-']{
  color:#ccc;
  background:none;
  font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size:1em;
  text-align:left;
  white-space:pre;
  word-spacing:normal;
  word-break:normal;
  word-wrap:normal;
  line-height:1.5;

  -moz-tab-size:4;
  tab-size:4;

  -webkit-hyphens:none;
  hyphens:none;
}

pre[class*='language-']{
  padding:0 1rem;
  margin:0 0;
  overflow:auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-']{
  background:#2d2d2d;
  border-radius:5px;
}

:not(pre) > code[class*='language-']{
  padding:0.1em;
  border-radius:0.3em;
  white-space:normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata{
  color:#999;
}

.token.punctuation{
  color:#ccc;
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted{
  color:#e2777a;
}

.token.function-name{
  color:#6196cc;
}

.token.boolean,
.token.number,
.token.function{
  color:#f08d49;
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol{
  color:#f8c555;
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin{
  color:#cc99cd;
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable{
  color:#7ec699;
}

.token.operator,
.token.entity,
.token.url{
  color:#67cdcc;
}

.token.important,
.token.bold{
  font-weight:bold;
}

.token.italic{
  font-style:italic;
}

.token.entity{
  cursor:help;
}

.token.inserted{
  color:green;
}

pre[data-line]{
  position:relative;
  padding:1em 0 1em 3em;
}

.line-highlight{
  position:absolute;
  left:0;
  right:0;
  padding:inherit 0;
  margin-top:1em;

  background:hsla(24, 20%, 50%, 0.08);
  background:linear-gradient(
    to right,
    hsla(24, 20%, 50%, 0.1) 70%,
    hsla(24, 20%, 50%, 0)
  );

  pointer-events:none;

  line-height:inherit;
  white-space:pre;
}

@media print{
  .line-highlight{
    -webkit-print-color-adjust:exact;
    color-adjust:exact;
  }
}

.line-highlight:before,
.line-highlight[data-end]:after{
  content:attr(data-start);
  position:absolute;
  top:0.4em;
  left:0.6em;
  min-width:1em;
  padding:0 0.5em;
  background-color:hsla(24, 20%, 50%, 0.4);
  color:hsl(24, 20%, 95%);
  font:bold 65%/1.5 sans-serif;
  text-align:center;
  vertical-align:0.3em;
  border-radius:999px;
  text-shadow:none;
  box-shadow:0 1px white;
}

.line-highlight[data-end]:after{
  content:attr(data-end);
  top:auto;
  bottom:0.4em;
}

.line-numbers .line-highlight:before,
.line-numbers .line-highlight:after{
  content:none;
}

pre[id].linkable-line-numbers span.line-numbers-rows{
  pointer-events:all;
}

pre[id].linkable-line-numbers span.line-numbers-rows > span:before{
  cursor:pointer;
}

pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before{
  background-color:rgba(128, 128, 128, 0.2);
}

pre[class*='language-'].line-numbers{
  position:relative;
  padding-left:3.8em;
  counter-reset:linenumber;
}

pre[class*='language-'].line-numbers > code{
  position:relative;
  white-space:inherit;
}

.line-numbers .line-numbers-rows{
  position:absolute;
  pointer-events:none;
  top:-0.13em;
  left:-3.8em;
  width:3em;
  border-right:1px solid #999;

  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
}

.line-numbers-rows > span{
  pointer-events:none;
  display:block;
  counter-increment:linenumber;
}

.line-numbers-rows > span::before{
  content:counter(linenumber);
  color:#999;
  display:block;
  padding-right:0.8em;
  text-align:right;
}

#copy-button{
  padding:4px;
  position:absolute;
  top:5px;
  right:5px;
}

.wrapper{
  display:flex;
  flex-direction:column;
}
`;
let yt = class extends xe {
  constructor() {
    super(...arguments),
      (this.code = "<p>Hello World</p>"),
      (this.language = "typescript"),
      (this.formatCode = () =>
        "jsx" === this.language.toLowerCase() ||
        "html" === this.language.toLowerCase()
          ? this.innerHTML
          : this.textContent),
      (this.prismCodeLookup = () => {
        let e = "";
        switch (this.language) {
          case "css":
            e = bt.highlight(this.code, bt.languages.css, "css");
            break;
          case "graphql":
            e = bt.highlight(this.code, bt.languages.graphql, "graphql");
            break;
          case "html":
            e = bt.highlight(this.code, bt.languages.html, "html");
            break;
          case "javascript":
            e = bt.highlight(this.code, bt.languages.javascript, "javascript");
            break;
          case "json":
            e = bt.highlight(this.code, bt.languages.json, "json");
            break;
          case "markdown":
            e = bt.highlight(this.code, bt.languages.markdown, "markdown");
            break;
          case "jsx":
            e = bt.highlight(this.code, bt.languages.jsx, "jsx");
            break;
          case "tsx":
            e = bt.highlight(this.code, bt.languages.tsx, "tsx");
            break;
          case "svg":
            e = bt.highlight(this.code, bt.languages.svg, "svg");
            break;
          case "typescript":
            e = bt.highlight(this.code, bt.languages.typescript, "typescript");
            break;
          case "xml":
            e = bt.highlight(this.code, bt.languages.xml, "xml");
        }
        return e;
      });
  }
  connectedCallback() {
    super.connectedCallback();
  }
  render() {
    const e = this.lineNumbers ? "line-numbers" : "",
      t = `language-${this.language.toLowerCase()}`;
    return (
      (this.code = this.formatCode()),
      V`
      <pre class="${e} ${t}" id="pre">
        <code id="code" class="${t}">
          ${Be(this.prismCodeLookup())}
        </code>
      </pre>
    `
    );
  }
};
(yt.styles = [vt]),
  s([he("slot")], yt.prototype, "codeSlot", void 0),
  s([he("#code-block-template")], yt.prototype, "template", void 0),
  s([de({})], yt.prototype, "code", void 0),
  s(
    [de({ type: Boolean, attribute: "line-numbers" })],
    yt.prototype,
    "lineNumbers",
    void 0
  ),
  s([de()], yt.prototype, "language", void 0),
  (yt = s([le("outline-code-block")], yt));
var xt = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {

  display: block;

  overflow: hidden;
}

  :host section {

  display: flex
}

  :host section {

  flex-direction: column
}

  :host section {

  overflow: hidden
}

  :host section {

  text-align: left
}

  :host p {

  margin-bottom: 2.5rem
}

.card {

  display: flex;

  flex-direction: row
}

.card-content {

  padding-left: 1rem;

  padding-right: 1rem
}

.outline-shadow {

  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);

  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);

  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.outline-rounded-2xl {

  border-radius: 1rem
}

@media (min-width: 1024px) {

  .outline-bg-blue {

    background-color: var(--demo-lightBlue)
  }

  .outline-bg-gray {

    background-color: var(--demo-lightGray)
  }
}
`;
let ft = class extends xe {
  constructor() {
    super(...arguments),
      (this.slots = new l(this, !0)),
      (this.contentAlignment = "left"),
      (this.contentMode = "compact"),
      (this.titleMode = "normal"),
      (this.buttonVariant = "secondary"),
      (this.imagePosition = "top"),
      (this.isRounded = !1),
      (this.hasShadow = !1);
  }
  connectedCallback() {
    super.connectedCallback();
  }
  firstUpdated() {
    (this.hasImageSlot = this.slots.test("image")),
      (this.hasEyebrowSlot = this.slots.test("eyebrow")),
      (this.hasTitleSlot = this.slots.test("title")),
      (this.hasSummarySlot = this.slots.test("summary")),
      (this.hasContentSlot = this.slots.test("content")),
      (this.hasCtaSlot = this.slots.test("cta"));
  }
  render() {
    const e = {
        card: !0,
        [`image-position--${this.imagePosition}`]: this.imagePosition,
        "outline-shadow": this.hasShadow,
        "outline-rounded-2xl": this.isRounded,
        [`outline-bg-${this.cardBackground}`]: void 0 !== this.cardBackground,
        [`content-mode--${this.contentMode}`]: this.contentMode,
      },
      t = {
        "card-content-wrapper": !0,
        [`content-alignment--${this.contentAlignment}`]: this.contentAlignment,
      },
      r = {
        "card-eyebrow": !0,
        [`eyebrow-alignment--${this.eyebrowAlignment}`]: this.eyebrowAlignment,
      },
      n = {
        "card-title": !0,
        [`title-alignment--${this.titleAlignment}`]: this.titleAlignment,
        [`title-mode--${this.titleMode}`]: this.titleMode,
      },
      i = {
        "card-cta": !0,
        [`cta-alignment--${this.ctaAlignment}`]: this.ctaAlignment,
      };
    return V`
      <section class="${Ae(e)}">
        ${this.imageTemplate({ "card-image": !0 })}
        <section class="${Ae(t)}">
          ${this.eyebrowTemplate(r)}
          ${this.titleTemplate(n)}
          ${this.summaryTemplate({ "card-summary": !0 })}
          ${this.contentTemplate({ "card-content": !0 })}
          ${this.ctaTemplate(i)}
        </section>
      </section>
    `;
  }
  imageTemplate(e) {
    return this.hasImageSlot
      ? V` <section class="${Ae(e)}">
      <slot name="image"></slot>
    </section>`
      : null;
  }
  eyebrowTemplate(e) {
    return this.hasEyebrowSlot
      ? V` <section class="${Ae(e)}">
      <slot name="eyebrow"></slot>
    </section>`
      : null;
  }
  titleTemplate(e) {
    return this.hasTitleSlot
      ? V` <section class="${Ae(e)}">
      <slot name="title"></slot>
    </section>`
      : null;
  }
  summaryTemplate(e) {
    return this.hasSummarySlot
      ? V` <section class="${Ae(e)}">
      <slot name="summary"></slot>
    </section>`
      : null;
  }
  contentTemplate(e) {
    return this.hasContentSlot
      ? V` <section class="${Ae(e)}">
      <slot name="content"></slot>
    </section>`
      : null;
  }
  ctaTemplate(e) {
    return this.hasCtaSlot
      ? V` <section class="${Ae(e)}">
      <slot name="cta"></slot>
    </section>`
      : null;
  }
};
(ft.styles = [xt]),
  s(
    [de({ type: String, attribute: "card-background" })],
    ft.prototype,
    "cardBackground",
    void 0
  ),
  s(
    [de({ type: String, attribute: "content-alignment" })],
    ft.prototype,
    "contentAlignment",
    void 0
  ),
  s(
    [de({ type: String, attribute: "content-mode" })],
    ft.prototype,
    "contentMode",
    void 0
  ),
  s(
    [de({ type: String, attribute: "title-mode" })],
    ft.prototype,
    "titleMode",
    void 0
  ),
  s(
    [de({ type: String, attribute: "cta-alignment" })],
    ft.prototype,
    "ctaAlignment",
    void 0
  ),
  s(
    [de({ type: String, attribute: "title-alignment" })],
    ft.prototype,
    "titleAlignment",
    void 0
  ),
  s(
    [de({ type: String, attribute: "eyebrow-alignment" })],
    ft.prototype,
    "eyebrowAlignment",
    void 0
  ),
  s(
    [de({ type: String, attribute: "button-variant" })],
    ft.prototype,
    "buttonVariant",
    void 0
  ),
  s(
    [de({ type: String, attribute: "image-position" })],
    ft.prototype,
    "imagePosition",
    void 0
  ),
  s(
    [de({ type: Boolean, attribute: "is-rounded" })],
    ft.prototype,
    "isRounded",
    void 0
  ),
  s(
    [de({ type: Boolean, attribute: "has-shadow" })],
    ft.prototype,
    "hasShadow",
    void 0
  ),
  s([ce()], ft.prototype, "hasImageSlot", void 0),
  s([ce()], ft.prototype, "hasEyebrowSlot", void 0),
  s([ce()], ft.prototype, "hasTitleSlot", void 0),
  s([ce()], ft.prototype, "hasContentSlot", void 0),
  s([ce()], ft.prototype, "hasSummarySlot", void 0),
  s([ce()], ft.prototype, "hasCtaSlot", void 0),
  (ft = s([le("outline-content-card")], ft));
var wt = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.sr-only{
  position:absolute !important;
  overflow:hidden;
  clip:rect(1px, 1px, 1px, 1px);
  width:1px;
  height:1px;
  word-wrap:normal;
}

.visually-hidden,
::slotted(.visually-hidden),
[aria-hidden='true']{
  position:absolute !important;
  overflow:hidden;
  clip:rect(1px, 1px, 1px, 1px);
  width:1px;
  height:1px;
  word-wrap:normal;
}
`,
  kt = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:inline-flex;
}

.dropdown{
  display:flex;
}

.dropdown__trigger{
  position:relative;
}

.dropdown__panel{
}

outline-button .btn{
    padding:var(--outline-btn-padding) !important;
  }

outline-button .icon__trigger{
    display:flex;
    place-items:center;
    margin-left:var(--spacing-4);
  }
`,
  zt = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:inline-flex;
  vertical-align:middle;
}
.btn{
  padding:0 !important;
}
::slotted(.button__trigger){
  display:flex;
  padding:var(--outline-btn-padding);
}
::slotted(.button__has_menu){
  padding-right:calc(var(--outline-btn-outline-width) + 2px);
}
::slotted(.icon__trigger){
  display:flex;
  height:100%;
}
::slotted(.icon__bordered){
  border-left:1px solid currentColor;
}
`;
let _t = class extends gt {};
(_t.styles = [gt.styles, zt]), (_t = s([le("outline-split-button")], _t));
let $t = class extends xe {
  constructor() {
    super(...arguments),
      (this.mobileController = new r(this, "lg")),
      (this.slots = new l(this, !0)),
      (this.isOpen = !1),
      (this.isDisabled = !1),
      (this.isLink = !1),
      (this.triggerVariant = "none");
  }
  connectedCallback() {
    super.connectedCallback(),
      (this.hasDropdown = this.slots.test("dropdown")),
      (this.hasHeader = this.slots.test("header")),
      (this.hasFooter = this.slots.test("footer")),
      (this.handleButtonTrigger = this.handleButtonTrigger.bind(this)),
      (this.handleIconTrigger = this.handleIconTrigger.bind(this)),
      (this.handleEnterKeyDown = this.handleEnterKeyDown.bind(this)),
      (this.handleEscKeyDown = this.handleEscKeyDown.bind(this)),
      (this.handleFocusChange = this.handleFocusChange.bind(this)),
      (this.handleIconClick = this.handleIconClick.bind(this)),
      this.containingElement || (this.containingElement = this);
  }
  updated() {
    this.panel && (this.panel.hidden = !this.isOpen);
  }
  firstUpdated() {}
  disconnectedCallback() {
    this.hide();
  }
  async show() {
    if (!this.isOpen && !this.isDisabled)
      return (
        this.panel && (this.panel.hidden = !1),
        (this.isOpen = !0),
        Ee(this, "outline-after-show")
      );
  }
  async hide() {
    if (this.isOpen)
      return (
        this.panel && (this.panel.hidden = !0),
        (this.isOpen = !1),
        Ee(this, "outline-after-hide")
      );
  }
  async handleOpenChange() {
    this.isDisabled
      ? (this.isOpen = !1)
      : this.isOpen
      ? (qe(this, "outline-show"), qe(this, "outline-after-show"))
      : (qe(this, "outline-hide"), qe(this, "outline-after-hide"));
  }
  handleDocumentMouseDown(e) {
    const t = e.composedPath();
    this.containingElement &&
      !t.includes(this.containingElement) &&
      this.hide();
  }
  handleEscKeyDown(e) {
    if ("Escape" === e.key) return this.hide(), void this.focusOnTrigger();
  }
  handleFocusChange() {
    setTimeout(() => {
      var e, t, r;
      const n =
        (null === (e = this.containingElement) || void 0 === e
          ? void 0
          : e.getRootNode()) instanceof ShadowRoot
          ? null ===
              (r =
                null === (t = document.activeElement) || void 0 === t
                  ? void 0
                  : t.shadowRoot) || void 0 === r
            ? void 0
            : r.activeElement
          : document.activeElement;
      (this.containingElement &&
        (null == n
          ? void 0
          : n.closest(this.containingElement.tagName.toLowerCase())) ===
          this.containingElement) ||
        this.hide();
    });
  }
  handleIconClick(e) {
    e.preventDefault(), this.isOpen ? this.hide() : this.show();
  }
  handleEnterKeyDown(e, t = !1) {
    if ("Enter" === e.key) {
      if (this.isDisabled) return void e.preventDefault();
      if ((this.triggerUrl && t) || !this.triggerUrl)
        return this.isOpen ? this.hide() : this.show(), void e.preventDefault();
      if (this.triggerUrl) return;
    }
  }
  focusOnTrigger() {
    var e, t, r;
    const n = this.trigger.querySelector("outline-split-button"),
      i = this.trigger.querySelector("outline-button");
    n &&
      "function" == typeof (null == n ? void 0 : n.focus) &&
      (null === (e = null == n ? void 0 : n.querySelector("button")) ||
        void 0 === e ||
        e.focus()),
      i &&
        "function" == typeof (null == i ? void 0 : i.focus) &&
        (null ===
          (r =
            null === (t = null == i ? void 0 : i.shadowRoot) || void 0 === t
              ? void 0
              : t.querySelector("button")) ||
          void 0 === r ||
          r.focus());
  }
  handlePanelKeystrokes(e) {
    this.handleEscKeyDown(e), this.handleFocusChange();
  }
  handleIconTrigger(e) {
    this.handleEnterKeyDown(e, !0), this.handleEscKeyDown(e);
  }
  handleButtonTrigger(e) {
    this.handleEnterKeyDown(e),
      this.handleEscKeyDown(e),
      this.handleFocusChange();
  }
  render() {
    return V`
      <div
        id="dropdown"
        class=${Ae({ dropdown: !0, "dropdown--open": this.isOpen })}
      >
        <div
          class="dropdown__trigger"
          @mouseenter="${this.mobileController.isMobile ? null : this.show}"
          @mouseleave="${this.handleFocusChange}"
        >
          ${this.buttonTemplate()}
          ${this.dropdownTemplate()}
        </div>
      </div>
    `;
  }
  buttonTemplate() {
    return this.triggerUrl
      ? V`
          <outline-split-button
            button-variant="${ye(this.triggerVariant)}"
            button-target="${ye(this.triggerTarget)}"
            button-url="${ye(this.triggerUrl)}"
            button-label="${ye(this.triggerLabel)}"
            @keydown="${this.handleButtonTrigger}"
            ?is-disabled=${this.isDisabled}
          >
            <span 
              class=${Ae({
                button__trigger: !0,
                button__has_menu:
                  this.hasDropdown && "none" == this.triggerVariant,
              })}
            >${this.triggerText}</span>
            ${this.iconWrapperTemplate()}
          </outline-split-button>
        `
      : V`
          <outline-button
            button-variant="${ye(this.triggerVariant)}"
            button-target="${ye(this.triggerTarget)}"
            button-url="${ye(this.triggerUrl)}"
            button-label="${ye(this.triggerLabel)}"
            @keydown="${this.handleButtonTrigger}"
            @click="${this.handleIconClick}"
            ?is-disabled=${this.isDisabled}
          >
            <span class="button__trigger">${this.triggerText}</span>
            ${this.iconWrapperTemplate()}
          </outline-button>
        `;
  }
  dropdownTemplate() {
    return this.hasDropdown
      ? V`
      <div
        class="dropdown__panel"
        aria-hidden=${this.isOpen ? "false" : "true"}
        aria-labelledby="dropdown"
        @keydown="${this.handlePanelKeystrokes}"
      >
        ${this.headerTemplate()}
        <slot name="dropdown"></slot>
        ${this.footerTemplate()}
      </div>
    `
      : null;
  }
  iconWrapperTemplate() {
    return this.hasDropdown
      ? V`
      <span
        class=${Ae({
          icon__trigger: !0,
          icon__bordered: this.triggerUrl && "none" !== this.triggerVariant,
        })}
      >
        ${
          this.triggerUrl
            ? V` <outline-button
              class="icon__button"
              button-variant="${ye(this.triggerVariant)}"
              button-target="${ye(this.triggerTarget)}"
              button-label="${ye(this.triggerLabel)}"
              @keydown="${this.handleIconTrigger}"
              @click="${this.handleIconClick}"
              ?is-disabled=${this.isDisabled}
            >
              ${this.iconTemplate()}
              <span class="sr-only"
                >Sub-navigation for ${this.triggerText}</span
              >
            </outline-button>`
            : V` ${this.iconTemplate()} `
        }
      </span>
    `
      : null;
  }
  iconTemplate() {
    return V`
      <outline-icon
        slot="right"
        name="${this.isOpen ? "chevron-up" : "chevron-down"}"
        library="system"
        size="1em"
        ?label="${!!ye(this.triggerUrl) && this.triggerLabel}"
      ></outline-icon>
    `;
  }
  headerTemplate() {
    return this.hasHeader ? V`<slot name="header"></slot>` : null;
  }
  footerTemplate() {
    return this.hasFooter ? V`<slot name="footer"></slot>` : null;
  }
};
($t.styles = [wt, kt]),
  s([he(".dropdown__trigger")], $t.prototype, "trigger", void 0),
  s([he(".dropdown__panel")], $t.prototype, "panel", void 0),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "is-open" })],
    $t.prototype,
    "isOpen",
    void 0
  ),
  s(
    [de({ type: Boolean, attribute: "is-disabled" })],
    $t.prototype,
    "isDisabled",
    void 0
  ),
  s([de({ type: Boolean, attribute: !1 })], $t.prototype, "isLink", void 0),
  s([de({ attribute: !1 })], $t.prototype, "containingElement", void 0),
  s(
    [de({ type: String, attribute: "trigger-url" })],
    $t.prototype,
    "triggerUrl",
    void 0
  ),
  s(
    [de({ type: String, attribute: "trigger-text" })],
    $t.prototype,
    "triggerText",
    void 0
  ),
  s(
    [de({ type: String, attribute: "trigger-label" })],
    $t.prototype,
    "triggerLabel",
    void 0
  ),
  s(
    [de({ type: String, attribute: "trigger-target" })],
    $t.prototype,
    "triggerTarget",
    void 0
  ),
  s(
    [de({ type: String, attribute: "trigger-variant" })],
    $t.prototype,
    "triggerVariant",
    void 0
  ),
  s([ce()], $t.prototype, "hasHeader", void 0),
  s([ce()], $t.prototype, "hasDropdown", void 0),
  s([ce()], $t.prototype, "hasFooter", void 0),
  s(
    [Fe("open", { waitUntilFirstUpdate: !0 })],
    $t.prototype,
    "handleOpenChange",
    null
  ),
  ($t = s([le("outline-dropdown")], $t));
var St = $t;
const At = {
    activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
    airplay:
      '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
    "alert-circle":
      '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
    "alert-octagon":
      '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
    "alert-triangle":
      '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
    "align-center":
      '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
    "align-justify":
      '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
    "align-left":
      '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
    "align-right":
      '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
    anchor:
      '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
    aperture:
      '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
    archive:
      '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
    "arrow-down-circle":
      '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
    "arrow-down-left":
      '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
    "arrow-down-right":
      '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
    "arrow-down":
      '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
    "arrow-left-circle":
      '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
    "arrow-left":
      '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
    "arrow-right-circle":
      '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
    "arrow-right":
      '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
    "arrow-up-circle":
      '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
    "arrow-up-left":
      '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
    "arrow-up-right":
      '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
    "arrow-up":
      '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
    "at-sign":
      '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
    award:
      '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
    "bar-chart-2":
      '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
    "bar-chart":
      '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
    "battery-charging":
      '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
    battery:
      '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
    "bell-off":
      '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
    bluetooth:
      '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
    bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
    "book-open":
      '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
    bookmark:
      '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
    briefcase:
      '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
    calendar:
      '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
    "camera-off":
      '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
    camera:
      '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
    cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
    "check-circle":
      '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
    "check-square":
      '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
    check: '<polyline points="20 6 9 17 4 12"></polyline>',
    "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
    "chevron-left": '<polyline points="15 18 9 12 15 6"></polyline>',
    "chevron-right": '<polyline points="9 18 15 12 9 6"></polyline>',
    "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
    "chevrons-down":
      '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
    "chevrons-left":
      '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
    "chevrons-right":
      '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
    "chevrons-up":
      '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
    chrome:
      '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
    circle: '<circle cx="12" cy="12" r="10"></circle>',
    clipboard:
      '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
    clock:
      '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
    "cloud-drizzle":
      '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
    "cloud-lightning":
      '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
    "cloud-off":
      '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
    "cloud-rain":
      '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
    "cloud-snow":
      '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
    cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
    code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    codepen:
      '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
    codesandbox:
      '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
    coffee:
      '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
    columns:
      '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
    command:
      '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
    compass:
      '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
    copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
    "corner-down-left":
      '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
    "corner-down-right":
      '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
    "corner-left-down":
      '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
    "corner-left-up":
      '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
    "corner-right-down":
      '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
    "corner-right-up":
      '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
    "corner-up-left":
      '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
    "corner-up-right":
      '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
    cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
    "credit-card":
      '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
    crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
    crosshair:
      '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
    database:
      '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
    delete:
      '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
    disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
    "divide-circle":
      '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
    "divide-square":
      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
    divide:
      '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
    "dollar-sign":
      '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
    "download-cloud":
      '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
    download:
      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
    dribbble:
      '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
    droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
    "edit-2":
      '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
    "edit-3":
      '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
    "external-link":
      '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
    "eye-off":
      '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
    facebook:
      '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
    "fast-forward":
      '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
    feather:
      '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
    figma:
      '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
    "file-minus":
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
    "file-plus":
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
    "file-text":
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
    file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
    film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
    filter:
      '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
    "folder-minus":
      '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
    "folder-plus":
      '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
    folder:
      '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
    framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
    frown:
      '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
    gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
    "git-branch":
      '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
    "git-commit":
      '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
    "git-merge":
      '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
    "git-pull-request":
      '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
    github:
      '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
    gitlab:
      '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
    globe:
      '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
    grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
    "hard-drive":
      '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
    hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
    headphones:
      '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
    heart:
      '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
    "help-circle":
      '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
    hexagon:
      '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
    image:
      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
    inbox:
      '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
    info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
    instagram:
      '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
    italic:
      '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
    key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
    layers:
      '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
    layout:
      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
    "life-buoy":
      '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
    "link-2":
      '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
    list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
    loader:
      '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
    "log-in":
      '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
    "log-out":
      '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
    "map-pin":
      '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
    map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
    "maximize-2":
      '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
    maximize:
      '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
    meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
    menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
    "message-circle":
      '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
    "message-square":
      '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
    "mic-off":
      '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
    mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
    "minimize-2":
      '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
    minimize:
      '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
    "minus-circle":
      '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
    "minus-square":
      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
    minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
    monitor:
      '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
    "more-horizontal":
      '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
    "more-vertical":
      '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
    "mouse-pointer":
      '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
    move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
    music:
      '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
    "navigation-2": '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
    navigation: '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
    octagon:
      '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
    package:
      '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
    paperclip:
      '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
    "pause-circle":
      '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
    pause:
      '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
    "pen-tool":
      '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
    percent:
      '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
    "phone-call":
      '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    "phone-forwarded":
      '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    "phone-incoming":
      '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    "phone-missed":
      '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    "phone-off":
      '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
    "phone-outgoing":
      '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    phone:
      '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    "pie-chart":
      '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
    "play-circle":
      '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
    play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
    "plus-circle":
      '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
    "plus-square":
      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
    pocket:
      '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
    power:
      '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
    printer:
      '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
    radio:
      '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
    "refresh-ccw":
      '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
    "refresh-cw":
      '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
    repeat:
      '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
    rewind:
      '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
    "rotate-ccw":
      '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
    "rotate-cw":
      '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
    rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
    save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
    scissors:
      '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
    search:
      '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
    send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
    server:
      '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
    settings:
      '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
    "share-2":
      '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
    share:
      '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
    "shield-off":
      '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
    "shopping-bag":
      '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
    "shopping-cart":
      '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
    shuffle:
      '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
    sidebar:
      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
    "skip-back":
      '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
    "skip-forward":
      '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
    slack:
      '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
    slash:
      '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
    sliders:
      '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
    smartphone:
      '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
    smile:
      '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
    speaker:
      '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
    square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
    "stop-circle":
      '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
    sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
    sunrise:
      '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
    sunset:
      '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
    tablet:
      '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
    tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
    target:
      '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
    terminal:
      '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
    thermometer:
      '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
    "thumbs-down":
      '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
    "thumbs-up":
      '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
    "toggle-left":
      '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
    "toggle-right":
      '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
    "trash-2":
      '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
    trash:
      '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
    trello:
      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
    "trending-down":
      '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
    "trending-up":
      '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
    triangle:
      '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
    truck:
      '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
    tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
    twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',
    twitter:
      '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
    type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
    umbrella:
      '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
    underline:
      '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
    unlock:
      '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
    "upload-cloud":
      '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
    upload:
      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
    "user-check":
      '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
    "user-minus":
      '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
    "user-plus":
      '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
    "user-x":
      '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
    users:
      '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    "video-off":
      '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
    video:
      '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
    voicemail:
      '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
    "volume-1":
      '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
    "volume-2":
      '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
    "volume-x":
      '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
    volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
    watch:
      '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
    "wifi-off":
      '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
    wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
    "x-circle":
      '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
    "x-octagon":
      '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
    "x-square":
      '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
    x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
    youtube:
      '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
    "zap-off":
      '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
    "zoom-in":
      '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
    "zoom-out":
      '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
  },
  Mt = At ? Object.keys(At).map((e) => e) : [];
let Ct = class extends xe {
  constructor() {
    super(...arguments),
      (this.icon = t.feather.icon),
      (this.size = t.feather.size),
      (this.color = t.feather.color),
      (this.strokeWidth = t.feather.strokeWidth);
  }
  connectedCallback() {
    super.connectedCallback(), window.feather.replace();
  }
  render() {
    const e = window.feather.icons[`${this.icon}`].toSvg({
      color: this.color,
      width: this.size,
      height: this.size,
      "stroke-width": this.strokeWidth,
    });
    return V`${Be(e)}`;
  }
};
s([de({ type: String, attribute: "icon" })], Ct.prototype, "icon", void 0),
  s([de({ type: String, attribute: "size" })], Ct.prototype, "size", void 0),
  s([de({ type: String, attribute: "color" })], Ct.prototype, "color", void 0),
  s(
    [de({ type: Number, attribute: "stroke-width" })],
    Ct.prototype,
    "strokeWidth",
    void 0
  ),
  (Ct = s([le("outline-feather-icon")], Ct));
let Bt = class extends xe {
  constructor() {
    super(...arguments), (this.slots = new l(this, !0));
  }
  render() {
    return V`<slot></slot>`;
  }
};
Bt = s([le("outline-form")], Bt);
var Tt = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:block;
}

outline-container{
  display:grid;
  height:100%;
  grid-template-columns:repeat(12, minmax(0, 1fr));
}

:host([gap-size='large']) outline-container, :host([gap-size-sm='large']) outline-container, :host([gap-size-md='large']) outline-container, :host([gap-size-lg='large']) outline-container, :host([gap-size-xl='large']) outline-container, :host([gap-size-xxl='large']) outline-container, :host([gap-size-xxxl='large']) outline-container{
  row-gap:4rem;
  -moz-column-gap:0px;
       column-gap:0px;
}

:host([gap-size='medium']) outline-container, :host([gap-size-sm='medium']) outline-container, :host([gap-size-md='medium']) outline-container, :host([gap-size-lg='medium']) outline-container, :host([gap-size-xl='medium']) outline-container, :host([gap-size-xxl='medium']) outline-container, :host([gap-size-xxxl='medium']) outline-container{
  row-gap:2.5rem;
  -moz-column-gap:0px;
       column-gap:0px;
}

:host([gap-size='small']) outline-container, :host([gap-size-sm='small']) outline-container, :host([gap-size-md='small']) outline-container, :host([gap-size-lg='small']) outline-container, :host([gap-size-xl='small']) outline-container, :host([gap-size-xxl='small']) outline-container, :host([gap-size-xxxl='small']) outline-container{
  row-gap:1rem;
  -moz-column-gap:0px;
       column-gap:0px;
}

:host([gap-size='none']) outline-container{
  gap:0px;
}

@media (min-width: 640px){
  :host([gap-size='large']) outline-container{
    row-gap:4rem;
  }
  :host([gap-size='large']) outline-container{
    -moz-column-gap:4rem;
         column-gap:4rem;
  }

  :host([gap-size='medium']) outline-container{
    row-gap:2.5rem;
  }

  :host([gap-size='medium']) outline-container{
    -moz-column-gap:2.5rem;
         column-gap:2.5rem;
  }

  :host([gap-size='small']) outline-container{
    row-gap:1rem;
  }

  :host([gap-size='small']) outline-container{
    -moz-column-gap:1rem;
         column-gap:1rem;
  }
  :host([is-auto-fitted='true']) outline-container{
    grid-template-columns:repeat(auto-fit, minmax(0, 1fr));
  }
  :host([gap-size-sm='large']) outline-container{
    row-gap:4rem;
  }
  :host([gap-size-sm='large']) outline-container{
    -moz-column-gap:4rem;
         column-gap:4rem;
  }
  :host([gap-size-sm='medium']) outline-container{
    row-gap:2.5rem;
  }
  :host([gap-size-sm='medium']) outline-container{
    -moz-column-gap:2.5rem;
         column-gap:2.5rem;
  }
  :host([gap-size-sm='small']) outline-container{
    row-gap:1rem;
  }
  :host([gap-size-sm='small']) outline-container{
    -moz-column-gap:1rem;
         column-gap:1rem;
  }
  :host([gap-size-sm='none']) outline-container{
    gap:0px;
  }
}

@media (min-width: 768px){
  :host([gap-size-md='large']) outline-container{
    row-gap:4rem;
  }
  :host([gap-size-md='large']) outline-container{
    -moz-column-gap:4rem;
         column-gap:4rem;
  }
  :host([gap-size-md='medium']) outline-container{
    row-gap:2.5rem;
  }
  :host([gap-size-md='medium']) outline-container{
    -moz-column-gap:2.5rem;
         column-gap:2.5rem;
  }
  :host([gap-size-md='small']) outline-container{
    row-gap:1rem;
  }
  :host([gap-size-md='small']) outline-container{
    -moz-column-gap:1rem;
         column-gap:1rem;
  }
  :host([gap-size-md='none']) outline-container{
    gap:0px;
  }
}

@media (min-width: 1024px){
  :host([gap-size-lg='large']) outline-container{
    row-gap:4rem;
  }
  :host([gap-size-lg='large']) outline-container{
    -moz-column-gap:4rem;
         column-gap:4rem;
  }
  :host([gap-size-lg='medium']) outline-container{
    row-gap:2.5rem;
  }
  :host([gap-size-lg='medium']) outline-container{
    -moz-column-gap:2.5rem;
         column-gap:2.5rem;
  }
  :host([gap-size-lg='small']) outline-container{
    row-gap:1rem;
  }
  :host([gap-size-lg='small']) outline-container{
    -moz-column-gap:1rem;
         column-gap:1rem;
  }
  :host([gap-size-lg='none']) outline-container{
    gap:0px;
  }
}

@media (min-width: 1280px){
  :host([gap-size-xl='large']) outline-container{
    row-gap:4rem;
  }
  :host([gap-size-xl='large']) outline-container{
    -moz-column-gap:4rem;
         column-gap:4rem;
  }
  :host([gap-size-xl='medium']) outline-container{
    row-gap:2.5rem;
  }
  :host([gap-size-xl='medium']) outline-container{
    -moz-column-gap:2.5rem;
         column-gap:2.5rem;
  }
  :host([gap-size-xl='small']) outline-container{
    row-gap:1rem;
  }
  :host([gap-size-xl='small']) outline-container{
    -moz-column-gap:1rem;
         column-gap:1rem;
  }
  :host([gap-size-xl='none']) outline-container{
    gap:0px;
  }
}

@media (min-width: 1440px){
  :host([gap-size-xxl='large']) outline-container{
    row-gap:4rem;
  }
  :host([gap-size-xxl='large']) outline-container{
    -moz-column-gap:4rem;
         column-gap:4rem;
  }
  :host([gap-size-xxl='medium']) outline-container{
    row-gap:2.5rem;
  }
  :host([gap-size-xxl='medium']) outline-container{
    -moz-column-gap:2.5rem;
         column-gap:2.5rem;
  }
  :host([gap-size-xxl='small']) outline-container{
    row-gap:1rem;
  }
  :host([gap-size-xxl='small']) outline-container{
    -moz-column-gap:1rem;
         column-gap:1rem;
  }
  :host([gap-size-xxl='none']) outline-container{
    gap:0px;
  }
  :host([gap-size-xxl='large']) outline-container{
    row-gap:4rem;
  }
  :host([gap-size-xxl='large']) outline-container{
    -moz-column-gap:4rem;
         column-gap:4rem;
  }
  :host([gap-size-xxl='medium']) outline-container{
    row-gap:2.5rem;
  }
  :host([gap-size-xxl='medium']) outline-container{
    -moz-column-gap:2.5rem;
         column-gap:2.5rem;
  }
  :host([gap-size-xxl='small']) outline-container{
    row-gap:1rem;
  }
  :host([gap-size-xxl='small']) outline-container{
    -moz-column-gap:1rem;
         column-gap:1rem;
  }
  :host([gap-size-xxl='none']) outline-container{
    gap:0px;
  }
}
`;
let Zt = class extends xe {
  constructor() {
    super(...arguments),
      (this.xPadding = !1),
      (this.yPadding = !1),
      (this.fullBleed = !1),
      (this.containerAlign = "center"),
      (this.gapSize = "small");
  }
  render() {
    return V`
      <outline-container
        ?x-padding="${this.xPadding}"
        ?y-padding="${this.yPadding}"
        ?full-bleed="${this.fullBleed}"
        container-align="${ye(this.containerAlign)}"
      >
        <slot></slot>
      </outline-container>
    `;
  }
};
(Zt.styles = [Tt]),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "x-padding" })],
    Zt.prototype,
    "xPadding",
    void 0
  ),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "y-padding" })],
    Zt.prototype,
    "yPadding",
    void 0
  ),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "full-bleed" })],
    Zt.prototype,
    "fullBleed",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "container-align" })],
    Zt.prototype,
    "containerAlign",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "gap-size" })],
    Zt.prototype,
    "gapSize",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "gap-size-sm" })],
    Zt.prototype,
    "gapSizeSm",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "gap-size-md" })],
    Zt.prototype,
    "gapSizeMd",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "gap-size-lg" })],
    Zt.prototype,
    "gapSizeLg",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "gap-size-xl" })],
    Zt.prototype,
    "gapSizeXl",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "gap-size-xxl" })],
    Zt.prototype,
    "gapSizeXxl",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "gap-size-xxxl" })],
    Zt.prototype,
    "gapSizeXxxl",
    void 0
  ),
  (Zt = s([le("outline-grid")], Zt));
const qt = ["span", "p", "h1", "h2", "h3", "h4", "h5", "h6"],
  Et = Object.keys(i.fontSize),
  Ft = Object.keys(i.fontWeight);
var Lt = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {

    display: block
}

h1 {

    font-size: var(--fs-h1-small);

    line-height: var(--lh-h1-small)
}

@media (min-width: 768px) {

    h1 {

        font-size: var(--fs-h1-medium);

        line-height: var(--lh-h1-medium)
    }
}

@media (min-width: 1024px) {

    h1 {

        font-size: var(--fs-h1);

        line-height: var(--lh-h1)
    }
}

h2 {

    font-size: var(--fs-h2-small);

    line-height: var(--lh-h2-small)
}

@media (min-width: 768px) {

    h2 {

        font-size: var(--fs-h2-medium);

        line-height: var(--lh-h2-medium)
    }
}

@media (min-width: 1024px) {

    h2 {

        font-size: var(--fs-h2);

        line-height: var(--lh-h2)
    }
}

h3 {

    font-size: var(--fs-h3-small);

    line-height: var(--lh-h3-small)
}

@media (min-width: 768px) {

    h3 {

        font-size: var(--fs-h3-medium);

        line-height: var(--lh-h3-medium)
    }
}

@media (min-width: 1024px) {

    h3 {

        font-size: var(--fs-h3);

        line-height: var(--lh-h3)
    }
}

h4 {

    font-size: var(--fs-h4-small);

    line-height: var(--lh-h4-small)
}

@media (min-width: 768px) {

    h4 {

        font-size: var(--fs-h4-medium);

        line-height: var(--lh-h4-medium)
    }
}

@media (min-width: 1024px) {

    h4 {

        font-size: var(--fs-h4);

        line-height: var(--lh-h4)
    }
}

h5 {

    font-size: var(--fs-h5-small);

    line-height: var(--lh-h5-small)
}

@media (min-width: 768px) {

    h5 {

        font-size: var(--fs-h5-medium);

        line-height: var(--lh-h5-medium)
    }
}

@media (min-width: 1024px) {

    h5 {

        font-size: var(--fs-h5);

        line-height: var(--lh-h5)
    }
}

h6 {

    font-size: var(--fs-h6-small);

    line-height: var(--lh-h6-small)
}

@media (min-width: 768px) {

    h6 {

        font-size: var(--fs-h6-medium);

        line-height: var(--lh-h6-medium)
    }
}

@media (min-width: 1024px) {

    h6 {

        font-size: var(--fs-h6);

        line-height: var(--lh-h6)
    }
}

.outline-text--base {

    font-size: var(--fs-base) !important;

    line-height: var(--lh-base) !important
}

.outline-text--xs {

    font-size: var(--fs-xs) !important;

    line-height: var(--lh-xs) !important
}

.outline-text--sm {

    font-size: var(--fs-sm) !important;

    line-height: var(--lh-sm) !important
}

.outline-text--lg {

    font-size: var(--fs-lg) !important;

    line-height: var(--lh-lg) !important
}

.outline-text--lg.mobile {

    font-size: var(--fs-base) !important;

    line-height: var(--lh-base) !important
}

.outline-text--xl {

    font-size: var(--fs-xl) !important;

    line-height: var(--lh-xl) !important
}

.outline-text--xl.mobile {

    font-size: var(--fs-base) !important;

    line-height: var(--lh-base) !important
}

.outline-text--2xl {

    font-size: var(--fs-2xl) !important;

    line-height: var(--lh-2xl) !important
}

.outline-text--2xl.mobile {

    font-size: var(--fs-lg) !important;

    line-height: var(--lh-lg) !important
}

.outline-text--3xl {

    font-size: var(--fs-3xl) !important;

    line-height: var(--lh-3xl) !important
}

.outline-text--3xl.mobile {

    font-size: var(--fs-lg) !important;

    line-height: var(--lh-lg) !important
}

.outline-text--4xl {

    font-size: var(--fs-4xl) !important;

    line-height: var(--lh-4xl) !important
}

.outline-text--4xl.mobile {

    font-size: var(--fs-xl) !important;

    line-height: var(--lh-xl) !important
}

.outline-text--5xl {

    font-size: var(--fs-5xl) !important;

    line-height: var(--lh-5xl) !important
}

.outline-text--5xl.mobile {

    font-size: var(--fs-2xl) !important;

    line-height: var(--lh-2xl) !important
}

.outline-text--6xl {

    font-size: var(--fs-6xl) !important;

    line-height: var(--lh-6xl) !important
}

.outline-text--6xl.mobile {

    font-size: var(--fs-3xl) !important;

    line-height: var(--lh-3xl) !important
}

.outline-text--7xl {

    font-size: var(--fs-7xl) !important;

    line-height: var(--lh-7xl) !important
}

.outline-text--7xl.mobile {

    font-size: var(--fs-4xl) !important;

    line-height: var(--lh-4xl) !important
}

.outline-text--8xl {

    font-size: var(--fs-8xl) !important;

    line-height: var(--lh-8xl) !important
}

.outline-text--8xl.mobile {

    font-size: var(--fs-5xl) !important;

    line-height: var(--lh-5xl) !important
}

.outline-text--9xl {

    font-size: var(--fs-9xl) !important;

    line-height: var(--lh-9lx) !important
}

.outline-text--9xl.mobile {

    font-size: var(--fs-6xl) !important;

    line-height: var(--lh-6xl) !important
}

.outline-font--thin {

    font-weight: var(--fw-extralight)
}

.outline-font--extralight {

    font-weight: var(--fw-thin)
}

.outline-font--light {

    font-weight: var(--fw-light)
}

.outline-font--normal {

    font-weight: var(--fw-normal)
}

.outline-font--semibold {

    font-weight: var(--fw-semibold)
}

.outline-font--bold {

    font-weight: var(--fw-bold)
}

.outline-font--extrabold {

    font-weight: var(--fw-extrabold)
}

.outline-font--black {

    font-weight: var(--fw-black)
}
`;
let Ht = class extends xe {
  constructor() {
    super(...arguments),
      (this.mobileController = new r(this)),
      (this.level = "h2"),
      (this.levelSize = "2xl"),
      (this.levelStyle = "bold");
  }
  render() {
    const e = {
      "outline-text": !0,
      [`outline-text--${this.levelSize}`]: !0,
      [`outline-font--${this.levelStyle}`]: !0,
      mobile: this.mobileController.isMobile,
    };
    return ve`
      <${me(this.level)} class=${Ae(e)}>
        <slot></slot>
      </${me(this.level)}>`;
  }
};
(Ht.styles = [Lt]),
  s(
    [de({ type: String, reflect: !0, attribute: "level" })],
    Ht.prototype,
    "level",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "level-size" })],
    Ht.prototype,
    "levelSize",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "level-style" })],
    Ht.prototype,
    "levelStyle",
    void 0
  ),
  (Ht = s([le("outline-heading")], Ht));
var jt = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  display: block;
}

  :host([parallax]) figure {
  height: 50vh;
}

  :host([parallax]) figure{
    -webkit-clip-path:inset(0 0 0 0);
            clip-path:inset(0 0 0 0);
  }

  :host([parallax='false']) figure {
  height: auto;
}

  :host([parallax='false']) figure{
    -webkit-clip-path:inset(0 0 0 0);
            clip-path:inset(0 0 0 0);
  }

@media (min-width: 1024px){
    :host([parallax='false']) figure {
    height: auto;
  }
}

figure {
  margin: 0px;
  display: block;
}

::slotted([slot='caption']) {
  margin-top: 0.5rem;
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
}

::slotted(img) {
  width: 100%;
}
`;
let Dt = class extends xe {
  firstUpdated() {
    this.hasCaptionSlot = null !== this.querySelector('[slot="caption"]');
  }
  captionSlotTemplate() {
    return this.hasCaptionSlot
      ? V`<figcaption><slot name="caption"></slot></figcaption>`
      : null;
  }
  render() {
    return V`
      <figure><slot></slot></figure>
      ${this.captionSlotTemplate()}
    `;
  }
};
(Dt.styles = [jt]),
  s([ce()], Dt.prototype, "hasCaptionSlot", void 0),
  (Dt = s([le("outline-image")], Dt));
/*!
 * Splide.js
 * Version  : 3.6.12
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */
const Vt = { CREATED: 1, MOUNTED: 2, IDLE: 3, MOVING: 4, DESTROYED: 5 };
function Gt(e) {
  e.length = 0;
}
function Ot(e) {
  return !Nt(e) && "object" == typeof e;
}
function Ut(e) {
  return Array.isArray(e);
}
function Rt(e) {
  return "string" == typeof e;
}
function It(e) {
  return void 0 === e;
}
function Nt(e) {
  return null === e;
}
function Pt(e) {
  return e instanceof HTMLElement;
}
function Wt(e) {
  return Ut(e) ? e : [e];
}
function Xt(e, t) {
  Wt(e).forEach(t);
}
function Yt(e, t) {
  return e.indexOf(t) > -1;
}
function Kt(e, t) {
  return e.push(...Wt(t)), e;
}
const Jt = Array.prototype;
function Qt(e, t, r) {
  return Jt.slice.call(e, t, r);
}
function er(e, t, r) {
  e &&
    Xt(t, (t) => {
      t && e.classList[r ? "add" : "remove"](t);
    });
}
function tr(e, t) {
  er(e, Rt(t) ? t.split(" ") : t, !0);
}
function rr(e, t) {
  Xt(t, e.appendChild.bind(e));
}
function nr(e, t) {
  Xt(e, (e) => {
    const r = t.parentNode;
    r && r.insertBefore(e, t);
  });
}
function ir(e, t) {
  return Pt(e) && (e.msMatchesSelector || e.matches).call(e, t);
}
function ar(e, t) {
  return e ? Qt(e.children).filter((e) => ir(e, t)) : [];
}
function or(e, t) {
  return t ? ar(e, t)[0] : e.firstElementChild;
}
function lr(e, t, r) {
  if (e) {
    let n = Object.keys(e);
    n = r ? n.reverse() : n;
    for (let r = 0; r < n.length; r++) {
      const i = n[r];
      if ("__proto__" !== i && !1 === t(e[i], i)) break;
    }
  }
  return e;
}
function sr(e) {
  return (
    Qt(arguments, 1).forEach((t) => {
      lr(t, (r, n) => {
        e[n] = t[n];
      });
    }),
    e
  );
}
function dr(e, t) {
  return (
    lr(t, (t, r) => {
      Ut(t)
        ? (e[r] = t.slice())
        : Ot(t)
        ? (e[r] = dr(Ot(e[r]) ? e[r] : {}, t))
        : (e[r] = t);
    }),
    e
  );
}
function cr(e, t) {
  e &&
    Xt(t, (t) => {
      e.removeAttribute(t);
    });
}
function pr(e, t, r) {
  Ot(t)
    ? lr(t, (t, r) => {
        pr(e, r, t);
      })
    : Nt(r)
    ? cr(e, t)
    : e.setAttribute(t, String(r));
}
function hr(e, t, r) {
  const n = document.createElement(e);
  return t && (Rt(t) ? tr(n, t) : pr(n, t)), r && rr(r, n), n;
}
function gr(e, t, r) {
  if (It(r)) return getComputedStyle(e)[t];
  if (!Nt(r)) {
    const { style: n } = e;
    (r = `${r}`), n[t] !== r && (n[t] = r);
  }
}
function ur(e, t) {
  gr(e, "display", t);
}
function mr(e, t) {
  return e.getAttribute(t);
}
function br(e, t) {
  return e && e.classList.contains(t);
}
function vr(e) {
  return e.getBoundingClientRect();
}
function yr(e) {
  Xt(e, (e) => {
    e && e.parentNode && e.parentNode.removeChild(e);
  });
}
function xr(e) {
  return or(new DOMParser().parseFromString(e, "text/html").body);
}
function fr(e, t) {
  e.preventDefault(), t && (e.stopPropagation(), e.stopImmediatePropagation());
}
function wr(e, t) {
  return e && e.querySelector(t);
}
function kr(e, t) {
  return Qt(e.querySelectorAll(t));
}
function zr(e, t) {
  er(e, t, !1);
}
function _r(e) {
  return Rt(e) ? e : e ? `${e}px` : "";
}
function $r(e, t = "") {
  if (!e) throw new Error(`[splide] ${t}`);
}
function Sr(e) {
  setTimeout(e);
}
const Ar = () => {};
function Mr(e) {
  return requestAnimationFrame(e);
}
const { min: Cr, max: Br, floor: Tr, ceil: Zr, abs: qr } = Math;
function Er(e, t, r, n) {
  const i = Cr(t, r),
    a = Br(t, r);
  return n ? i < e && e < a : i <= e && e <= a;
}
function Fr(e, t, r) {
  const n = Cr(t, r),
    i = Br(t, r);
  return Cr(Br(n, e), i);
}
function Lr(e) {
  return +(e > 0) - +(e < 0);
}
function Hr(e, t) {
  return (
    Xt(t, (t) => {
      e = e.replace("%s", `${t}`);
    }),
    e
  );
}
function jr(e) {
  return e < 10 ? `0${e}` : `${e}`;
}
const Dr = {};
function Vr(e) {
  const { event: t } = e,
    r = {};
  let n = [];
  function i(e, t, r) {
    a(e, t, (e, t) => {
      n = n.filter(
        (n) =>
          !!(n[0] !== e || n[1] !== t || (r && n[2] !== r)) ||
          (e.removeEventListener(t, n[2], n[3]), !1)
      );
    });
  }
  function a(e, t, r) {
    Xt(e, (e) => {
      e && t.split(" ").forEach(r.bind(null, e));
    });
  }
  function o() {
    (n = n.filter((e) => i(e[0], e[1]))), t.offBy(r);
  }
  return (
    t.on("destroy", o, r),
    {
      on: function (e, n, i) {
        t.on(e, n, r, i);
      },
      off: function (e) {
        t.off(e, r);
      },
      emit: t.emit,
      bind: function (e, t, r, i) {
        a(e, t, (e, t) => {
          n.push([e, t, r, i]), e.addEventListener(t, r, i);
        });
      },
      unbind: i,
      destroy: o,
    }
  );
}
function Gr(e, t, r, n) {
  const { now: i } = Date;
  let a,
    o,
    l = 0,
    s = !0,
    d = 0;
  function c() {
    if (!s) {
      const o = i() - a;
      if (
        (o >= e ? ((l = 1), (a = i())) : (l = o / e),
        r && r(l),
        1 === l && (t(), n && ++d >= n))
      )
        return p();
      Mr(c);
    }
  }
  function p() {
    s = !0;
  }
  function h() {
    cancelAnimationFrame(o), (l = 0), (o = 0), (s = !0);
  }
  return {
    start: function (t) {
      !t && h(), (a = i() - (t ? l * e : 0)), (s = !1), Mr(c);
    },
    rewind: function () {
      (a = i()), (l = 0), r && r(l);
    },
    pause: p,
    cancel: h,
    set: function (t) {
      e = t;
    },
    isPaused: function () {
      return s;
    },
  };
}
function Or(e, t) {
  let r;
  return function () {
    r ||
      ((r = Gr(
        t || 0,
        () => {
          e.apply(this, arguments), (r = null);
        },
        null,
        1
      )),
      r.start());
  };
}
const Ur = {
  marginRight: ["marginBottom", "marginLeft"],
  autoWidth: ["autoHeight"],
  fixedWidth: ["fixedHeight"],
  paddingLeft: ["paddingTop", "paddingRight"],
  paddingRight: ["paddingBottom", "paddingLeft"],
  width: ["height"],
  left: ["top", "right"],
  right: ["bottom", "left"],
  x: ["y"],
  X: ["Y"],
  Y: ["X"],
  ArrowLeft: ["ArrowUp", "ArrowRight"],
  ArrowRight: ["ArrowDown", "ArrowLeft"],
};
const Rr = ["is-active", "is-visible", "is-prev", "is-next", "is-loading"],
  Ir = {
    slide: "splide__slide",
    clone: "splide__slide--clone",
    arrows: "splide__arrows",
    arrow: "splide__arrow",
    prev: "splide__arrow--prev",
    next: "splide__arrow--next",
    pagination: "splide__pagination",
    page: "splide__pagination__page",
    spinner: "splide__spinner",
  };
const Nr = [
    "role",
    "aria-controls",
    "aria-current",
    "aria-label",
    "aria-hidden",
    "aria-orientation",
    "tabindex",
    "disabled",
  ],
  Pr = "slide",
  Wr = "loop";
function Xr(e, t, r, n) {
  const { on: i, emit: a, bind: o, destroy: l } = Vr(e),
    { Components: s, root: d, options: c } = e,
    { isNavigation: p, updateOnMove: h } = c,
    { resolve: g } = s.Direction,
    u = mr(n, "style"),
    m = r > -1,
    b = or(n, ".splide__slide__container"),
    v = c.focusableNodes && kr(n, c.focusableNodes);
  let y;
  function x() {
    const i = m ? r : t,
      a = Hr(c.i18n.slideX, i + 1),
      o = e.splides.map((e) => e.splide.root.id).join(" ");
    pr(n, "aria-label", a),
      pr(n, "aria-controls", o),
      pr(n, "role", "menuitem"),
      k(z());
  }
  function f() {
    y || w();
  }
  function w() {
    if (!y) {
      const { index: r } = e;
      k(z()),
        (function (e) {
          const t = !e && (!z() || m);
          pr(n, "aria-hidden", t || null),
            pr(n, "tabindex", !t && c.slideFocus ? 0 : null),
            v &&
              v.forEach((e) => {
                pr(e, "tabindex", t ? -1 : null);
              });
          e !== br(n, "is-visible") &&
            (er(n, "is-visible", e), a(e ? "visible" : "hidden", _));
        })(
          (function () {
            if (e.is("fade")) return z();
            const t = vr(s.Elements.track),
              r = vr(n),
              i = g("left"),
              a = g("right");
            return Tr(t[i]) <= Zr(r[i]) && Tr(r[a]) <= Zr(t[a]);
          })()
        ),
        er(n, "is-prev", t === r - 1),
        er(n, "is-next", t === r + 1);
    }
  }
  function k(e) {
    e !== br(n, "is-active") &&
      (er(n, "is-active", e),
      p && pr(n, "aria-current", e || null),
      a(e ? "active" : "inactive", _));
  }
  function z() {
    const { index: n } = e;
    return n === t || (c.cloneStatus && n === r);
  }
  const _ = {
    index: t,
    slideIndex: r,
    slide: n,
    container: b,
    isClone: m,
    mount: function () {
      m || (n.id = `${d.id}-slide${jr(t + 1)}`),
        o(n, "click keydown", (e) => {
          a("click" === e.type ? "click" : "slide:keydown", _, e);
        }),
        i(["refresh", "repositioned", "shifted", "moved", "scrolled"], w),
        i("navigation:mounted", x),
        h && i("move", f);
    },
    destroy: function () {
      (y = !0), l(), zr(n, Rr), cr(n, Nr), pr(n, "style", u);
    },
    update: w,
    style: function (e, t, r) {
      gr((r && b) || n, e, t);
    },
    isWithin: function (r, n) {
      let i = qr(r - t);
      return (
        m || (!c.rewind && !e.is("loop")) || (i = Cr(i, e.length - i)), i <= n
      );
    },
  };
  return _;
}
const Yr = { passive: !1, capture: !0 };
const Kr = ["Left", "Right", "Up", "Down"];
const Jr = [" ", "Enter", "Spacebar"];
var Qr = Object.freeze({
  __proto__: null,
  Options: function (e, t, r) {
    const n = Or(s);
    let i, a, o;
    function l(e) {
      e && removeEventListener("resize", n);
    }
    function s() {
      const t = ((n = (e) => e[1].matches), Qt(a).filter(n)[0] || []);
      var n;
      t[0] !== o &&
        (function (t) {
          const n = r.breakpoints[t] || i;
          n.destroy
            ? ((e.options = i), e.destroy("completely" === n.destroy))
            : (e.state.is(5) && (l(!0), e.mount()), (e.options = n));
        })((o = t[0]));
    }
    return {
      setup: function () {
        try {
          dr(r, JSON.parse(mr(e.root, "data-splide")));
        } catch (e) {
          $r(!1, e.message);
        }
        i = dr({}, r);
        const { breakpoints: t } = r;
        if (t) {
          const e = "min" === r.mediaQuery;
          (a = Object.keys(t)
            .sort((t, r) => (e ? +r - +t : +t - +r))
            .map((t) => [
              t,
              matchMedia(`(${e ? "min" : "max"}-width:${t}px)`),
            ])),
            s();
        }
      },
      mount: function () {
        a && addEventListener("resize", n);
      },
      destroy: l,
    };
  },
  Direction: function (e, t, r) {
    return {
      resolve: function (e, t) {
        const { direction: n } = r;
        return Ur[e]["rtl" !== n || t ? ("ttb" === n ? 0 : -1) : 1] || e;
      },
      orient: function (e) {
        return e * ("rtl" === r.direction ? 1 : -1);
      },
    };
  },
  Elements: function (e, t, r) {
    const { on: n } = Vr(e),
      { root: i } = e,
      a = {},
      o = [];
    let l, s, d, c;
    function p() {
      !(function () {
        (s = or(i, ".splide__slider")),
          (d = wr(i, ".splide__track")),
          (c = or(d, ".splide__list")),
          $r(d && c, "A track/list element is missing."),
          Kt(o, ar(c, ".splide__slide:not(.splide__slide--clone)"));
        const e = m(".splide__autoplay"),
          t = m(".splide__arrows");
        sr(a, {
          root: i,
          slider: s,
          track: d,
          list: c,
          slides: o,
          arrows: t,
          autoplay: e,
          prev: wr(t, ".splide__arrow--prev"),
          next: wr(t, ".splide__arrow--next"),
          bar: wr(m(".splide__progress"), ".splide__progress__bar"),
          play: wr(e, ".splide__play"),
          pause: wr(e, ".splide__pause"),
        });
      })(),
        (function () {
          const e =
            i.id || ((t = "splide"), `${t}${jr((Dr[t] = (Dr[t] || 0) + 1))}`);
          var t;
          (i.id = e),
            (d.id = d.id || `${e}-track`),
            (c.id = c.id || `${e}-list`);
        })(),
        tr(i, (l = b()));
    }
    function h() {
      [i, d, c].forEach((e) => {
        cr(e, "style");
      }),
        Gt(o),
        zr(i, l);
    }
    function g() {
      h(), p();
    }
    function u() {
      zr(i, l), tr(i, (l = b()));
    }
    function m(e) {
      return or(i, e) || or(s, e);
    }
    function b() {
      return [
        `splide--${r.type}`,
        `splide--${r.direction}`,
        r.drag && "splide--draggable",
        r.isNavigation && "splide--nav",
        "is-active",
      ];
    }
    return sr(a, {
      setup: p,
      mount: function () {
        n("refresh", g, 8), n("updated", u);
      },
      destroy: h,
    });
  },
  Slides: function (e, t, r) {
    const { on: n, emit: i, bind: a } = Vr(e),
      { slides: o, list: l } = t.Elements,
      s = [];
    function d() {
      o.forEach((e, t) => {
        h(e, t, -1);
      });
    }
    function c() {
      u((e) => {
        e.destroy();
      }),
        Gt(s);
    }
    function p() {
      c(), d();
    }
    function h(t, r, n) {
      const i = Xr(e, r, n, t);
      i.mount(), s.push(i);
    }
    function g(e) {
      return e ? m((e) => !e.isClone) : s;
    }
    function u(e, t) {
      g(t).forEach(e);
    }
    function m(e) {
      return s.filter(
        "function" == typeof e
          ? e
          : (t) => (Rt(e) ? ir(t.slide, e) : Yt(Wt(e), t.index))
      );
    }
    return {
      mount: function () {
        d(),
          n("refresh", p),
          n(["mounted", "refresh"], () => {
            s.sort((e, t) => e.index - t.index);
          });
      },
      destroy: c,
      update: function () {
        u((e) => {
          e.update();
        });
      },
      register: h,
      get: g,
      getIn: function (e) {
        const { Controller: n } = t,
          i = n.toIndex(e),
          a = n.hasFocus() ? 1 : r.perPage;
        return m((e) => Er(e.index, i, i + a - 1));
      },
      getAt: function (e) {
        return m(e)[0];
      },
      add: function (e, t) {
        Xt(e, (e) => {
          if ((Rt(e) && (e = xr(e)), Pt(e))) {
            const n = o[t];
            n ? nr(e, n) : rr(l, e),
              tr(e, r.classes.slide),
              (function (e, t) {
                const r = kr(e, "img");
                let { length: n } = r;
                n
                  ? r.forEach((e) => {
                      a(e, "load error", () => {
                        --n || t();
                      });
                    })
                  : t();
              })(e, i.bind(null, "resize"));
          }
        }),
          i("refresh");
      },
      remove: function (e) {
        yr(m(e).map((e) => e.slide)), i("refresh");
      },
      forEach: u,
      filter: m,
      style: function (e, t, r) {
        u((n) => {
          n.style(e, t, r);
        });
      },
      getLength: function (e) {
        return e ? o.length : s.length;
      },
      isEnough: function () {
        return s.length > r.perPage;
      },
    };
  },
  Layout: function (e, t, r) {
    const { on: n, bind: i, emit: a } = Vr(e),
      { Slides: o } = t,
      { resolve: l } = t.Direction,
      { root: s, track: d, list: c } = t.Elements,
      { getAt: p } = o;
    let h, g;
    function u() {
      (g = null),
        (h = "ttb" === r.direction),
        gr(s, "maxWidth", _r(r.width)),
        gr(d, l("paddingLeft"), b(!1)),
        gr(d, l("paddingRight"), b(!0)),
        m();
    }
    function m() {
      const e = vr(s);
      (g && g.width === e.width && g.height === e.height) ||
        (gr(
          d,
          "height",
          (function () {
            let e = "";
            h &&
              ((e = v()),
              $r(e, "height or heightRatio is missing."),
              (e = `calc(${e} - ${b(!1)} - ${b(!0)})`));
            return e;
          })()
        ),
        o.style(l("marginRight"), _r(r.gap)),
        o.style(
          "width",
          (r.autoWidth ? "" : _r(r.fixedWidth) || (h ? "" : y())) || null
        ),
        o.style(
          "height",
          _r(r.fixedHeight) || (h ? (r.autoHeight ? "" : y()) : v()) || null,
          !0
        ),
        (g = e),
        a("resized"));
    }
    function b(e) {
      const { padding: t } = r,
        n = l(e ? "right" : "left");
      return (t && _r(t[n] || (Ot(t) ? 0 : t))) || "0px";
    }
    function v() {
      return _r(r.height || vr(c).width * r.heightRatio);
    }
    function y() {
      const e = _r(r.gap);
      return `calc((100%${e && ` + ${e}`})/${r.perPage || 1}${e && ` - ${e}`})`;
    }
    function x(e, t) {
      const r = p(e);
      if (r) {
        const e = vr(r.slide)[l("right")],
          n = vr(c)[l("left")];
        return qr(e - n) + (t ? 0 : f());
      }
      return 0;
    }
    function f() {
      const e = p(0);
      return (e && parseFloat(gr(e.slide, l("marginRight")))) || 0;
    }
    return {
      mount: function () {
        u(),
          i(window, "resize load", Or(a.bind(this, "resize"))),
          n(["updated", "refresh"], u),
          n("resize", m);
      },
      listSize: function () {
        return vr(c)[l("width")];
      },
      slideSize: function (e, t) {
        const r = p(e || 0);
        return r ? vr(r.slide)[l("width")] + (t ? 0 : f()) : 0;
      },
      sliderSize: function () {
        return x(e.length - 1, !0) - x(-1, !0);
      },
      totalSize: x,
      getPadding: function (e) {
        return parseFloat(gr(d, l("padding" + (e ? "Right" : "Left")))) || 0;
      },
    };
  },
  Clones: function (e, t, r) {
    const { on: n, emit: i } = Vr(e),
      { Elements: a, Slides: o } = t,
      { resolve: l } = t.Direction,
      s = [];
    let d;
    function c() {
      (d = u()) &&
        (!(function (t) {
          const n = o.get().slice(),
            { length: i } = n;
          if (i) {
            for (; n.length < t; ) Kt(n, n);
            Kt(n.slice(-t), n.slice(0, t)).forEach((l, d) => {
              const c = d < t,
                p = (function (t, n) {
                  const i = t.cloneNode(!0);
                  return (
                    tr(i, r.classes.clone),
                    (i.id = `${e.root.id}-clone${jr(n + 1)}`),
                    i
                  );
                })(l.slide, d);
              c ? nr(p, n[0].slide) : rr(a.list, p),
                Kt(s, p),
                o.register(p, d - t + (c ? 0 : i), l.index);
            });
          }
        })(d),
        i("resize"));
    }
    function p() {
      yr(s), Gt(s);
    }
    function h() {
      p(), c();
    }
    function g() {
      d < u() && i("refresh");
    }
    function u() {
      let { clones: t } = r;
      if (e.is("loop")) {
        if (!t) {
          const n = (function (e, t) {
            if (Rt(t)) {
              const r = hr(
                "div",
                { style: `width: ${t}; position: absolute;` },
                e
              );
              (t = vr(r).width), yr(r);
            }
            return t;
          })(a.list, r[l("fixedWidth")]);
          t =
            ((n && Zr(vr(a.track)[l("width")] / n)) ||
              (r[l("autoWidth")] && e.length) ||
              r.perPage) * (r.drag ? (r.flickMaxPages || 1) + 1 : 2);
        }
      } else t = 0;
      return t;
    }
    return {
      mount: function () {
        c(), n("refresh", h), n(["updated", "resize"], g);
      },
      destroy: p,
    };
  },
  Move: function (e, t, r) {
    const { on: n, emit: i } = Vr(e),
      {
        slideSize: a,
        getPadding: o,
        totalSize: l,
        listSize: s,
        sliderSize: d,
      } = t.Layout,
      { resolve: c, orient: p } = t.Direction,
      { list: h, track: g } = t.Elements;
    let u;
    function m() {
      k() || (t.Scroll.cancel(), b(e.index), i("repositioned"));
    }
    function b(e) {
      v(x(e, !0));
    }
    function v(t, r) {
      if (!e.is("fade")) {
        const n = r
          ? t
          : (function (t) {
              if (e.is(Wr)) {
                const e = p(t - f()),
                  r = z(!1, t) && e < 0,
                  n = z(!0, t) && e > 0;
                (r || n) && (t = y(t, n));
              }
              return t;
            })(t);
        (h.style.transform = `translate${c("X")}(${n}px)`),
          t !== n && i("shifted");
      }
    }
    function y(e, t) {
      const r = e - w(t),
        n = d();
      return (e -= p(n * (Zr(qr(r) / n) || 1)) * (t ? 1 : -1));
    }
    function x(t, n) {
      const i = p(
        l(t - 1) -
          (function (e) {
            const { focus: t } = r;
            return "center" === t ? (s() - a(e, !0)) / 2 : +t * a(e) || 0;
          })(t)
      );
      return n
        ? (function (t) {
            r.trimSpace && e.is("slide") && (t = Fr(t, 0, p(d() - s())));
            return t;
          })(i)
        : i;
    }
    function f() {
      const e = c("left");
      return vr(h)[e] - vr(g)[e] + p(o(!1));
    }
    function w(e) {
      return x(e ? t.Controller.getEnd() : 0, !!r.trimSpace);
    }
    function k() {
      return e.state.is(4) && r.waitForTransition;
    }
    function z(e, t) {
      t = It(t) ? f() : t;
      const r = !0 !== e && p(t) < p(w(!1)),
        n = !1 !== e && p(t) > p(w(!0));
      return r || n;
    }
    return {
      mount: function () {
        (u = t.Transition), n(["mounted", "resized", "updated", "refresh"], m);
      },
      destroy: function () {
        cr(h, "style");
      },
      move: function (n, a, o, l) {
        if (!k()) {
          const { set: s } = e.state,
            d = f();
          n !== a && (u.cancel(), v(y(d, n > a), !0)),
            s(4),
            i("move", a, o, n),
            u.start(a, () => {
              s(3),
                i("moved", a, o, n),
                "move" === r.trimSpace && n !== o && d === f()
                  ? t.Controller.go(n > o ? ">" : "<", !1, l)
                  : l && l();
            });
        }
      },
      jump: b,
      translate: v,
      shift: y,
      cancel: function () {
        v(f()), u.cancel();
      },
      toIndex: function (e) {
        const r = t.Slides.get();
        let n = 0,
          i = 1 / 0;
        for (let t = 0; t < r.length; t++) {
          const a = r[t].index,
            o = qr(x(a, !0) - e);
          if (!(o <= i)) break;
          (i = o), (n = a);
        }
        return n;
      },
      toPosition: x,
      getPosition: f,
      getLimit: w,
      isBusy: k,
      exceededLimit: z,
    };
  },
  Controller: function (e, t, r) {
    const { on: n } = Vr(e),
      { Move: i } = t,
      { getPosition: a, getLimit: o } = i,
      { isEnough: l, getLength: s } = t.Slides,
      d = e.is(Wr),
      c = e.is("slide");
    let p,
      h,
      g,
      u = r.start || 0,
      m = u;
    function b() {
      (p = s(!0)), (h = r.perMove), (g = r.perPage), (u = Fr(u, 0, p - 1));
    }
    function v(e, r, n, a, o) {
      const l = r ? e : S(e);
      t.Scroll.scroll(r || n ? i.toPosition(l, !0) : e, a, () => {
        A(i.toIndex(i.getPosition())), o && o();
      });
    }
    function y(e) {
      return f(!1, e);
    }
    function x(e) {
      return f(!0, e);
    }
    function f(e, t) {
      const r = h || (M() ? 1 : g),
        n = w(u + r * (e ? -1 : 1), u);
      return -1 === n &&
        c &&
        !(function (e, t, r) {
          return qr(e - t) < r;
        })(a(), o(!e), 1)
        ? e
          ? 0
          : k()
        : t
        ? n
        : z(n);
    }
    function w(e, t, n) {
      if (l()) {
        const i = k();
        e < 0 || e > i
          ? (e =
              Er(0, e, t, !0) || Er(i, t, e, !0)
                ? _($(e))
                : d
                ? h || M()
                  ? e
                  : e < 0
                  ? -(p % g || g)
                  : p
                : r.rewind
                ? e < 0
                  ? i
                  : 0
                : -1)
          : n || e === t || (e = h ? e : _($(t) + (e < t ? -1 : 1)));
      } else e = -1;
      return e;
    }
    function k() {
      let e = p - g;
      return (M() || (d && h)) && (e = p - 1), Br(e, 0);
    }
    function z(e) {
      return d ? (l() ? (e % p) + (e < 0 ? p : 0) : -1) : e;
    }
    function _(e) {
      return Fr(M() ? e : g * e, 0, k());
    }
    function $(e) {
      return M() || ((e = Er(e, p - g, p - 1) ? p - 1 : e), (e = Tr(e / g))), e;
    }
    function S(e) {
      const t = i.toIndex(e);
      return c ? Fr(t, 0, k()) : t;
    }
    function A(e) {
      e !== u && ((m = u), (u = e));
    }
    function M() {
      return !It(r.focus) || r.isNavigation;
    }
    return {
      mount: function () {
        b(), n(["updated", "refresh"], b, 9);
      },
      go: function (e, t, n) {
        const a = (function (e) {
          let t = u;
          if (Rt(e)) {
            const [, r, n] = e.match(/([+\-<>])(\d+)?/) || [];
            "+" === r || "-" === r
              ? (t = w(u + +`${r}${+n || 1}`, u, !0))
              : ">" === r
              ? (t = n ? _(+n) : y(!0))
              : "<" === r && (t = x(!0));
          } else t = d ? e : Fr(e, 0, k());
          return t;
        })(e);
        if (r.useScroll) v(a, !0, !0, r.speed, n);
        else {
          const e = z(a);
          e > -1 && !i.isBusy() && (t || e !== u) && (A(e), i.move(a, e, m, n));
        }
      },
      scroll: v,
      getNext: y,
      getPrev: x,
      getAdjacent: f,
      getEnd: k,
      setIndex: A,
      getIndex: function (e) {
        return e ? m : u;
      },
      toIndex: _,
      toPage: $,
      toDest: S,
      hasFocus: M,
    };
  },
  Arrows: function (e, t, r) {
    const { on: n, bind: i, emit: a } = Vr(e),
      { classes: o, i18n: l } = r,
      { Elements: s, Controller: d } = t;
    let c,
      p = s.arrows,
      h = s.prev,
      g = s.next;
    const u = {};
    function m() {
      if (
        (r.arrows &&
          ((h && g) ||
            ((p = hr("div", o.arrows)),
            (h = b(!0)),
            (g = b(!1)),
            (c = !0),
            rr(p, [h, g]),
            nr(p, or(("slider" === r.arrows && s.slider) || e.root)))),
        h && g)
      )
        if (u.prev) ur(p, !1 === r.arrows ? "none" : "");
        else {
          const { id: e } = s.track;
          pr(h, "aria-controls", e),
            pr(g, "aria-controls", e),
            (u.prev = h),
            (u.next = g),
            (function () {
              const { go: e } = d;
              n(["mounted", "moved", "updated", "refresh", "scrolled"], v),
                i(g, "click", () => {
                  e(">", !0);
                }),
                i(h, "click", () => {
                  e("<", !0);
                });
            })(),
            a("arrows:mounted", h, g);
        }
    }
    function b(e) {
      return xr(
        `<button class="${o.arrow} ${
          e ? o.prev : o.next
        }" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="${
          r.arrowPath ||
          "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"
        }" />`
      );
    }
    function v() {
      const t = e.index,
        r = d.getPrev(),
        n = d.getNext(),
        i = r > -1 && t < r ? l.last : l.prev,
        o = n > -1 && t > n ? l.first : l.next;
      (h.disabled = r < 0),
        (g.disabled = n < 0),
        pr(h, "aria-label", i),
        pr(g, "aria-label", o),
        a("arrows:updated", h, g, r, n);
    }
    return {
      arrows: u,
      mount: function () {
        m(), n("updated", m);
      },
      destroy: function () {
        c ? yr(p) : (cr(h, Nr), cr(g, Nr));
      },
    };
  },
  Autoplay: function (e, t, r) {
    const { on: n, bind: i, emit: a } = Vr(e),
      o = Gr(r.interval, e.go.bind(e, ">"), function (e) {
        const { bar: t } = s;
        t && gr(t, "width", 100 * e + "%"), a("autoplay:playing", e);
      }),
      { isPaused: l } = o,
      { Elements: s } = t;
    let d, c, p;
    function h(e) {
      const t = e ? "pause" : "play",
        n = s[t];
      n &&
        (pr(n, "aria-controls", s.track.id),
        pr(n, "aria-label", r.i18n[t]),
        i(n, "click", e ? u : g));
    }
    function g() {
      l() &&
        t.Slides.isEnough() &&
        (o.start(!r.resetProgress), (c = d = p = !1), a("autoplay:play"));
    }
    function u(e = !0) {
      l() || (o.pause(), a("autoplay:pause")), (p = e);
    }
    function m() {
      p || (d || c ? u(!1) : g());
    }
    function b() {
      const n = t.Slides.getAt(e.index);
      o.set((n && +mr(n.slide, "data-splide-interval")) || r.interval);
    }
    return {
      mount: function () {
        const { autoplay: e } = r;
        e &&
          (h(!0),
          h(!1),
          (function () {
            const { root: e } = s;
            r.pauseOnHover &&
              i(e, "mouseenter mouseleave", (e) => {
                (d = "mouseenter" === e.type), m();
              });
            r.pauseOnFocus &&
              i(e, "focusin focusout", (e) => {
                (c = "focusin" === e.type), m();
              });
            n(["move", "scroll", "refresh"], o.rewind), n("move", b);
          })(),
          "pause" !== e && g());
      },
      destroy: o.cancel,
      play: g,
      pause: u,
      isPaused: l,
    };
  },
  Cover: function (e, t, r) {
    const { on: n } = Vr(e);
    function i(e) {
      t.Slides.forEach((t) => {
        const r = or(t.container || t.slide, "img");
        r && r.src && a(e, r, t);
      });
    }
    function a(e, t, r) {
      r.style(
        "background",
        e ? `center/cover no-repeat url("${t.src}")` : "",
        !0
      ),
        ur(t, e ? "none" : "");
    }
    return {
      mount: function () {
        r.cover &&
          (n("lazyload:loaded", (e, t) => {
            a(!0, e, t);
          }),
          n(["mounted", "updated", "refresh"], i.bind(null, !0)));
      },
      destroy: function () {
        i(!1);
      },
    };
  },
  Scroll: function (e, t, r) {
    const { on: n, emit: i } = Vr(e),
      { Move: a } = t,
      { getPosition: o, getLimit: l, exceededLimit: s } = a;
    let d, c;
    function p(t, n, u, m) {
      const b = o();
      let v = 1;
      var y;
      (n = n || ((y = qr(t - b)), Br(y / 1.5, 800))),
        (c = u),
        g(),
        (d = Gr(
          n,
          h,
          (n) => {
            const i = o(),
              d =
                b +
                (t - b) *
                  (function (e) {
                    const { easingFunc: t } = r;
                    return t ? t(e) : 1 - Math.pow(1 - e, 4);
                  })(n),
              c = (d - o()) * v;
            var h;
            a.translate(i + c),
              e.is("slide") &&
                !m &&
                s() &&
                ((v *= 0.6),
                qr(c) < 10 && ((h = s(!1)), p(l(!h), 600, null, !0)));
          },
          1
        )),
        i("scroll"),
        d.start();
    }
    function h() {
      const t = o(),
        r = a.toIndex(t);
      Er(r, 0, e.length - 1) || a.translate(a.shift(t, r > 0), !0),
        c && c(),
        i("scrolled");
    }
    function g() {
      d && d.cancel();
    }
    function u() {
      d && !d.isPaused() && (g(), h());
    }
    return {
      mount: function () {
        n("move", g), n(["updated", "refresh"], u);
      },
      destroy: g,
      scroll: p,
      cancel: u,
    };
  },
  Drag: function (e, t, r) {
    const { on: n, emit: i, bind: a, unbind: o } = Vr(e),
      { Move: l, Scroll: s, Controller: d } = t,
      { track: c } = t.Elements,
      { resolve: p, orient: h } = t.Direction,
      { getPosition: g, exceededLimit: u } = l;
    let m,
      b,
      v,
      y,
      x,
      f,
      w,
      k,
      z,
      _ = !1;
    function $() {
      const { drag: e } = r;
      F(!e), (x = "free" === e);
    }
    function S(e) {
      if (!k) {
        const { noDrag: t } = r,
          n = E(e),
          i = !t || !ir(e.target, t);
        (w = !1),
          !i ||
            (!n && e.button) ||
            (l.isBusy()
              ? fr(e, !0)
              : ((z = n ? c : window),
                (v = null),
                (y = null),
                a(z, "touchmove mousemove", A, Yr),
                a(z, "touchend touchcancel mouseup", M, Yr),
                l.cancel(),
                s.cancel(),
                C(e)));
      }
    }
    function A(t) {
      if ((y || i("drag"), (y = t), t.cancelable)) {
        const n = Z(t) - Z(b);
        if (f) {
          l.translate(
            m +
              (function (t) {
                return t / (_ && e.is("slide") ? 5 : 1);
              })(n)
          );
          const r = q(t) - q(b) > 200,
            a = _ !== (_ = u());
          (r || a) && C(t), i("dragging"), (w = !0), fr(t);
        } else {
          let { dragMinThreshold: e } = r;
          (e = Ot(e) ? e : { mouse: 0, touch: +e || 10 }),
            (f = qr(n) > (E(t) ? e.touch : e.mouse)),
            T() && fr(t);
        }
      }
    }
    function M(n) {
      o(z, "touchmove mousemove", A), o(z, "touchend touchcancel mouseup", M);
      const { index: a } = e;
      if (y) {
        if (f || (n.cancelable && T())) {
          const i = (function (t) {
              if (e.is(Wr) || !_) {
                const e = (b === y && v) || b,
                  r = Z(y) - Z(e),
                  n = q(t) - q(e),
                  i = q(t) - q(y) < 200;
                if (n && i) return r / n;
              }
              return 0;
            })(n),
            o = (function (e) {
              return (
                g() +
                Lr(e) *
                  Cr(
                    qr(e) * (r.flickPower || 600),
                    x ? 1 / 0 : t.Layout.listSize() * (r.flickMaxPages || 1)
                  )
              );
            })(i);
          x
            ? d.scroll(o)
            : e.is("fade")
            ? d.go(a + h(Lr(i)))
            : d.go(d.toDest(o), !0),
            fr(n);
        }
        i("dragged");
      } else x || g() === l.toPosition(a) || d.go(a, !0);
      f = !1;
    }
    function C(e) {
      (v = b), (b = e), (m = g());
    }
    function B(e) {
      !k && w && fr(e, !0);
    }
    function T() {
      return qr(Z(y) - Z(b)) > qr(Z(y, !0) - Z(b, !0));
    }
    function Z(e, t) {
      return (E(e) ? e.touches[0] : e)[`page${p(t ? "Y" : "X")}`];
    }
    function q(e) {
      return e.timeStamp;
    }
    function E(e) {
      return "undefined" != typeof TouchEvent && e instanceof TouchEvent;
    }
    function F(e) {
      k = e;
    }
    return {
      mount: function () {
        a(c, "touchmove mousemove", Ar, Yr),
          a(c, "touchend touchcancel mouseup", Ar, Yr),
          a(c, "touchstart mousedown", S, Yr),
          a(c, "click", B, { capture: !0 }),
          a(c, "dragstart", fr),
          n(["mounted", "updated"], $);
      },
      disable: F,
      isDragging: function () {
        return f;
      },
    };
  },
  Keyboard: function (e, t, r) {
    const { on: n, bind: i, unbind: a } = Vr(e),
      { root: o } = e,
      { resolve: l } = t.Direction;
    let s, d;
    function c() {
      const { keyboard: e } = r;
      e &&
        ("focused" === e ? ((s = o), pr(o, "tabindex", 0)) : (s = window),
        i(s, "keydown", u));
    }
    function p() {
      a(s, "keydown"), Pt(s) && cr(s, "tabindex");
    }
    function h() {
      const e = d;
      (d = !0),
        Sr(() => {
          d = e;
        });
    }
    function g() {
      p(), c();
    }
    function u(t) {
      if (!d) {
        const { key: r } = t,
          n = Yt(Kr, r) ? `Arrow${r}` : r;
        n === l("ArrowLeft") ? e.go("<") : n === l("ArrowRight") && e.go(">");
      }
    }
    return {
      mount: function () {
        c(), n("updated", g), n("move", h);
      },
      destroy: p,
      disable: function (e) {
        d = e;
      },
    };
  },
  LazyLoad: function (e, t, r) {
    const { on: n, off: i, bind: a, emit: o } = Vr(e),
      l = "sequential" === r.lazyLoad;
    let s = [],
      d = 0;
    function c() {
      h(), p();
    }
    function p() {
      t.Slides.forEach((e) => {
        kr(e.slide, "[data-splide-lazy], [data-splide-lazy-srcset]").forEach(
          (t) => {
            const n = mr(t, "data-splide-lazy"),
              i = mr(t, "data-splide-lazy-srcset");
            if (n !== t.src || i !== t.srcset) {
              const a = r.classes.spinner,
                o = t.parentElement,
                l = or(o, `.${a}`) || hr("span", a, o);
              pr(l, "role", "presentation"),
                s.push({ _img: t, _Slide: e, src: n, srcset: i, _spinner: l }),
                !t.src && ur(t, "none");
            }
          }
        );
      }),
        l && m();
    }
    function h() {
      (d = 0), (s = []);
    }
    function g() {
      (s = s.filter((t) => {
        const n = r.perPage * ((r.preloadPages || 1) + 1) - 1;
        return !t._Slide.isWithin(e.index, n) || u(t);
      })),
        s.length || i("moved");
    }
    function u(e) {
      const { _img: t } = e;
      tr(e._Slide.slide, "is-loading"),
        a(t, "load error", (t) => {
          !(function (e, t) {
            const { _Slide: r } = e;
            zr(r.slide, "is-loading"),
              t ||
                (yr(e._spinner),
                ur(e._img, ""),
                o("lazyload:loaded", e._img, r),
                o("resize"));
            l && m();
          })(e, "error" === t.type);
        }),
        ["srcset", "src"].forEach((r) => {
          e[r] &&
            (pr(t, r, e[r]),
            cr(
              t,
              "src" === r ? "data-splide-lazy" : "data-splide-lazy-srcset"
            ));
        });
    }
    function m() {
      d < s.length && u(s[d++]);
    }
    return {
      mount: function () {
        r.lazyLoad &&
          (p(),
          n("refresh", c),
          l || n(["mounted", "refresh", "moved", "scrolled"], g));
      },
      destroy: h,
    };
  },
  Pagination: function (e, t, r) {
    const { on: n, emit: i, bind: a, unbind: o } = Vr(e),
      { Slides: l, Elements: s, Controller: d } = t,
      { hasFocus: c, getIndex: p } = d,
      h = [];
    let g;
    function u() {
      m(),
        r.pagination &&
          l.isEnough() &&
          (!(function () {
            const { length: t } = e,
              { classes: n, i18n: i, perPage: o } = r,
              d = ("slider" === r.pagination && s.slider) || s.root,
              p = c() ? t : Zr(t / o);
            g = hr("ul", n.pagination, d);
            for (let e = 0; e < p; e++) {
              const t = hr("li", null, g),
                r = hr("button", { class: n.page, type: "button" }, t),
                s = l.getIn(e).map((e) => e.slide.id),
                d = !c() && o > 1 ? i.pageX : i.slideX;
              a(r, "click", b.bind(null, e)),
                pr(r, "aria-controls", s.join(" ")),
                pr(r, "aria-label", Hr(d, e + 1)),
                h.push({ li: t, button: r, page: e });
            }
          })(),
          i("pagination:mounted", { list: g, items: h }, v(e.index)),
          y());
    }
    function m() {
      g &&
        (yr(g),
        h.forEach((e) => {
          o(e.button, "click");
        }),
        Gt(h),
        (g = null));
    }
    function b(e) {
      d.go(`>${e}`, !0, () => {
        const t = l.getAt(d.toIndex(e));
        var r;
        t &&
          (((r = t.slide).setActive && r.setActive()) ||
            r.focus({ preventScroll: !0 }));
      });
    }
    function v(e) {
      return h[d.toPage(e)];
    }
    function y() {
      const e = v(p(!0)),
        t = v(p());
      e && (zr(e.button, "is-active"), cr(e.button, "aria-current")),
        t && (tr(t.button, "is-active"), pr(t.button, "aria-current", !0)),
        i("pagination:updated", { list: g, items: h }, e, t);
    }
    return {
      items: h,
      mount: function () {
        u(), n(["updated", "refresh"], u), n(["move", "scrolled"], y);
      },
      destroy: m,
      getAt: v,
      update: y,
    };
  },
  Sync: function (e, t, r) {
    const { list: n } = t.Elements,
      i = [];
    function a() {
      e.splides.forEach((t) => {
        var r;
        !t.isParent &&
          ((r = t.splide),
          [e, r].forEach((t) => {
            const n = Vr(t),
              a = t === e ? r : e;
            n.on("move", (e, t, r) => {
              a.go(a.is(Wr) ? r : e);
            }),
              i.push(n);
          }));
      }),
        r.isNavigation &&
          (function () {
            const t = Vr(e),
              { on: r } = t;
            r("click", s),
              r("slide:keydown", d),
              r(["mounted", "updated"], l),
              pr(n, "role", "menu"),
              i.push(t),
              t.emit("navigation:mounted", e.splides);
          })();
    }
    function o() {
      cr(n, Nr),
        i.forEach((e) => {
          e.destroy();
        }),
        Gt(i);
    }
    function l() {
      pr(n, "aria-orientation", "ttb" !== r.direction ? "horizontal" : null);
    }
    function s(t) {
      e.go(t.index);
    }
    function d(e, t) {
      Yt(Jr, t.key) && (s(e), fr(t));
    }
    return {
      mount: a,
      destroy: o,
      remount: function () {
        o(), a();
      },
    };
  },
  Wheel: function (e, t, r) {
    const { bind: n } = Vr(e);
    function i(n) {
      if (n.cancelable) {
        const { deltaY: i } = n;
        if (i) {
          const a = i < 0;
          e.go(a ? "<" : ">"),
            (function (n) {
              return (
                !r.releaseWheel ||
                e.state.is(4) ||
                -1 !== t.Controller.getAdjacent(n)
              );
            })(a) && fr(n);
        }
      }
    }
    return {
      mount: function () {
        r.wheel && n(t.Elements.track, "wheel", i, Yr);
      },
    };
  },
});
const en = {
  type: "slide",
  speed: 400,
  waitForTransition: !0,
  perPage: 1,
  cloneStatus: !0,
  arrows: !0,
  pagination: !0,
  interval: 5e3,
  pauseOnHover: !0,
  pauseOnFocus: !0,
  resetProgress: !0,
  keyboard: !0,
  easing: "cubic-bezier(0.25, 1, 0.5, 1)",
  drag: !0,
  direction: "ltr",
  slideFocus: !0,
  trimSpace: !0,
  focusableNodes: "a, button, textarea, input, select, iframe",
  classes: Ir,
  i18n: {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay",
  },
};
function tn(e, t, r) {
  const { on: n } = Vr(e);
  return {
    mount: function () {
      n(["mounted", "refresh"], () => {
        Sr(() => {
          t.Slides.style("transition", `opacity ${r.speed}ms ${r.easing}`);
        });
      });
    },
    start: function (e, r) {
      const { track: n } = t.Elements;
      gr(n, "height", _r(vr(n).height)),
        Sr(() => {
          r(), gr(n, "height", "");
        });
    },
    cancel: Ar,
  };
}
function rn(e, t, r) {
  const { bind: n } = Vr(e),
    { Move: i, Controller: a } = t,
    { list: o } = t.Elements;
  let l;
  function s() {
    d("");
  }
  function d(e) {
    gr(o, "transition", e);
  }
  return {
    mount: function () {
      n(o, "transitionend", (e) => {
        e.target === o && l && (s(), l());
      });
    },
    start: function (t, n) {
      const o = i.toPosition(t, !0),
        s = i.getPosition(),
        c = (function (t) {
          const { rewindSpeed: n } = r;
          if (e.is(Pr) && n) {
            const e = a.getIndex(!0),
              r = a.getEnd();
            if ((0 === e && t >= r) || (e >= r && 0 === t)) return n;
          }
          return r.speed;
        })(t);
      qr(o - s) >= 1 && c >= 1
        ? (d(`transform ${c}ms ${r.easing}`), i.translate(o, !0), (l = n))
        : (i.jump(t), n());
    },
    cancel: s,
  };
}
const nn = class {
  constructor(e, t) {
    (this.event = (function () {
      let e = {};
      function t(t, n) {
        r(t, (t, r) => {
          const i = e[t];
          e[t] =
            i &&
            i.filter((e) => (e._key ? e._key !== n : n || e._namespace !== r));
        });
      }
      function r(e, t) {
        Wt(e)
          .join(" ")
          .split(" ")
          .forEach((e) => {
            const r = e.split(".");
            t(r[0], r[1]);
          });
      }
      return {
        on: function (t, n, i, a = 10) {
          r(t, (t, r) => {
            (e[t] = e[t] || []),
              Kt(e[t], {
                _event: t,
                _callback: n,
                _namespace: r,
                _priority: a,
                _key: i,
              }).sort((e, t) => e._priority - t._priority);
          });
        },
        off: t,
        offBy: function (r) {
          lr(e, (e, n) => {
            t(n, r);
          });
        },
        emit: function (t) {
          (e[t] || []).forEach((e) => {
            e._callback.apply(e, Qt(arguments, 1));
          });
        },
        destroy: function () {
          e = {};
        },
      };
    })()),
      (this.Components = {}),
      (this.state = (function (e) {
        let t = e;
        return {
          set: function (e) {
            t = e;
          },
          is: function (e) {
            return Yt(Wt(e), t);
          },
        };
      })(1)),
      (this.splides = []),
      (this._options = {}),
      (this._Extensions = {});
    const r = Rt(e) ? wr(document, e) : e;
    $r(r, `${r} is invalid.`),
      (this.root = r),
      dr(en, nn.defaults),
      dr(dr(this._options, en), t || {});
  }
  mount(e, t) {
    const { state: r, Components: n } = this;
    $r(r.is([1, 5]), "Already mounted!"),
      r.set(1),
      (this._Components = n),
      (this._Transition = t || this._Transition || (this.is("fade") ? tn : rn)),
      (this._Extensions = e || this._Extensions);
    return (
      lr(
        sr({}, Qr, this._Extensions, { Transition: this._Transition }),
        (e, t) => {
          const r = e(this, n, this._options);
          (n[t] = r), r.setup && r.setup();
        }
      ),
      lr(n, (e) => {
        e.mount && e.mount();
      }),
      this.emit("mounted"),
      tr(this.root, "is-initialized"),
      r.set(3),
      this.emit("ready"),
      this
    );
  }
  sync(e) {
    return (
      this.splides.push({ splide: e }),
      e.splides.push({ splide: this, isParent: !0 }),
      this.state.is(3) &&
        (this._Components.Sync.remount(), e.Components.Sync.remount()),
      this
    );
  }
  go(e) {
    return this._Components.Controller.go(e), this;
  }
  on(e, t) {
    return this.event.on(e, t, null, 20), this;
  }
  off(e) {
    return this.event.off(e), this;
  }
  emit(e) {
    return this.event.emit(e, ...Qt(arguments, 1)), this;
  }
  add(e, t) {
    return this._Components.Slides.add(e, t), this;
  }
  remove(e) {
    return this._Components.Slides.remove(e), this;
  }
  is(e) {
    return this._options.type === e;
  }
  refresh() {
    return this.emit("refresh"), this;
  }
  destroy(e = !0) {
    const { event: t, state: r } = this;
    return (
      r.is(1)
        ? t.on("ready", this.destroy.bind(this, e), this)
        : (lr(
            this._Components,
            (t) => {
              t.destroy && t.destroy(e);
            },
            !0
          ),
          t.emit("destroy"),
          t.destroy(),
          e && Gt(this.splides),
          r.set(5)),
      this
    );
  }
  get options() {
    return this._options;
  }
  set options(e) {
    const { _options: t } = this;
    dr(t, e), this.state.is(1) || this.emit("updated", t);
  }
  get length() {
    return this._Components.Slides.getLength(!0);
  }
  get index() {
    return this._Components.Controller.getIndex();
  }
};
let an = nn;
(an.defaults = {}), (an.STATES = Vt);
var on = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
@-webkit-keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide--draggable>.splide__slider>.splide__track,.splide--draggable>.splide__track{-webkit-user-select:none;-moz-user-select:none;user-select:none}.splide--fade>.splide__slider>.splide__track>.splide__list,.splide--fade>.splide__track>.splide__list{display:block}.splide--fade>.splide__slider>.splide__track>.splide__list>.splide__slide,.splide--fade>.splide__track>.splide__list>.splide__slide{left:0;opacity:0;position:absolute;top:0;z-index:0}.splide--fade>.splide__slider>.splide__track>.splide__list>.splide__slide.is-active,.splide--fade>.splide__track>.splide__list>.splide__slide.is-active{opacity:1;position:relative;z-index:1}.splide--rtl{direction:rtl}.splide--ttb.is-active>.splide__slider>.splide__track>.splide__list,.splide--ttb.is-active>.splide__track>.splide__list{display:block}.splide__container{box-sizing:border-box;position:relative}.splide__list{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;height:100%;margin:0!important;padding:0!important;transform-style:preserve-3d}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide__progress__bar{width:0}.splide{outline:none;position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;box-sizing:border-box;flex-shrink:0;list-style-type:none!important;margin:0;outline:none;position:relative}.splide__slide img{vertical-align:bottom}.splide__slider{position:relative}.splide__spinner{-webkit-animation:splide-loading 1s linear infinite;animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__track{overflow:hidden;position:relative;z-index:0}.splide{position:relative}.splide__pagination{
  display:none;
}.splide__arrows{position:absolute;bottom:0px;left:0px;z-index:40;display:flex;width:100%;justify-content:center;background-color:var(--blue-responsible-darken-2);
  border-radius:0}.splide__arrow{display:flex;flex-grow:1;align-items:center;
  background:none;
  border:none;}.splide__arrow:hover{cursor:pointer}.splide__arrow:disabled{cursor:not-allowed}.splide__arrow svg{
  fill:white;
  width:1.25rem;
}.splide__arrow--prev{justify-content:flex-end;}.splide__arrow--prev:after{position:absolute}.splide__arrow--prev:after{height:50%}.splide__arrow--prev:after{
    content:'';
    border-right:1px solid var(--gray-professional-main);
    right:50%;
    top:0.75rem;
  }.splide__arrow--prev svg{justify-self:end}.splide__arrow--prev svg{
    transform:rotate(180deg);
  }::slotted(img){background-color:var(--gray-professional-main) !important;object-fit:cover !important;
  border-radius:0;
  height:12rem !important;
  width:100% !important}.splide__slide.is-visible{
  visibility:visible;
}.sr-only{
  position:absolute;
  width:1px;
  height:1px;
  padding:0;
  margin:-1px;
  overflow:hidden;
  clip:rect(0, 0, 0, 0);
  border:0;
}.slide-count{display:none;border-radius:0.25rem;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:var(--fs-lg);line-height:var(--lh-lg);color:var(--neutral-white);
  background-color:#000000}@media (min-width: 640px){
  ::slotted(img){
    height:16.25rem !important;
  }
}@media (min-width: 768px){
  .splide__arrows{bottom:0px}
  .splide__arrows{
    height:4.75rem;
    width:9.25rem;
    border-radius:0 5px 0 5px;
  }

  .splide__arrow{justify-content:center}
    .splide__arrow--prev:after{
      top:1.25rem;
    }

  .slide-count{
    display:block;
  }

  .slide-count{position:absolute}

  .slide-count{bottom:1rem}

  .slide-count{right:1rem}

  .slide-count{z-index:50}

  ::slotted(img){
    height:31.25rem !important;
    border-radius:5px;
  }
}
`;
let ln = class extends xe {
  constructor() {
    super(...arguments),
      (this.imageListTemplate = () => {
        let e = 0;
        const t = [];
        for (; e < this.childElementCount; )
          t.push(V` <div
          class="splide__slide"
          role="group"
          aria-label="slide ${e + 1} of ${this.childElementCount}"
          data-splide-interval="3500"
        >
          <slot name="image-${e + 1}"></slot>
          <div aria-hidden="true" class="slide-count">
            <span>${e + 1} / ${this.childElementCount}</span>
          </div>
        </div>`),
            e++;
        return t;
      }),
      (this.setSlots = () => {
        let e = 0;
        for (; e <= this.childElementCount; )
          this.children[e] &&
            this.children[e].setAttribute("slot", `image-${e + 1}`),
            e++;
        this.requestUpdate();
      });
  }
  firstUpdated() {
    (this.splide = new an(this.splideEl, void 0).mount()),
      (this.prevBtn.innerHTML += '<span class="sr-only">Previous Slide</span>'),
      (this.nextBtn.innerHTML += '<span class="sr-only">Next Slide</span>'),
      this.setSlots();
  }
  connectedCallback() {
    super.connectedCallback(),
      (this.observer = new MutationObserver(this.setSlots)),
      this.observer.observe(this, { childList: !0 });
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    return V`
      <section class="splide" data-splide='{"rewind":"true","rewindByDrag":"true","autoplay":"true","pauseOnHover":"true","pauseOnFocus":"true", "drag":"true","snap":"true"}'>
        <div class="splide__track">
          <div class="splide__list">${this.imageListTemplate()}</div>
        </div>
      </section>
    `;
  }
};
(ln.styles = [on]),
  s([he(".splide")], ln.prototype, "splideEl", void 0),
  s([he(".splide__arrow--prev")], ln.prototype, "prevBtn", void 0),
  s([he(".splide__arrow--next")], ln.prototype, "nextBtn", void 0),
  (ln = s([le("outline-image-slider")], ln));
var sn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:block;
  box-sizing:border-box;
}

:host *,
:host *::before,
:host *::after{
  box-sizing:inherit;
}

[hidden]{
  display:none !important;
}
`;
let dn = class extends xe {
  constructor() {
    super(...arguments), (this.mode = "cors"), (this.allowScripts = !1);
  }
  executeScript(e) {
    const t = document.createElement("script");
    [...e.attributes].forEach((e) => t.setAttribute(e.name, e.value)),
      (t.textContent = e.textContent),
      e.parentNode.replaceChild(t, e);
  }
  async handleSrcChange() {
    try {
      const e = this.src,
        t = await Ye(e, this.mode);
      if (e !== this.src) return;
      if (!t.ok)
        return void qe(this, "outline-error", { detail: { status: t.status } });
      (this.innerHTML = t.html),
        this.allowScripts &&
          [...this.querySelectorAll("script")].forEach((e) =>
            this.executeScript(e)
          ),
        qe(this, "outline-load");
    } catch (e) {
      qe(this, "outline-error", { detail: { status: -1 } });
    }
  }
  render() {
    return V`<slot></slot>`;
  }
};
(dn.styles = [sn]),
  s([de()], dn.prototype, "src", void 0),
  s([de()], dn.prototype, "mode", void 0),
  s(
    [de({ attribute: "allow-scripts", type: Boolean })],
    dn.prototype,
    "allowScripts",
    void 0
  ),
  s([Fe("src")], dn.prototype, "handleSrcChange", null),
  (dn = s([le("outline-include")], dn));
const cn = {
    name: "Link Destination",
    description: "https://www.w3schools.com/tags/att_a_href.asp",
    control: { type: "text" },
    table: { defaultValue: { summary: "false" } },
  },
  pn = {
    name: "Link Target",
    description:
      "**LinkTargetType(_blank, _self, _parent, _top):** https://www.w3schools.com/tags/att_a_target.asp",
    options: ["_blank", "_self", "_parent", "_top"],
    control: { type: "select" },
    table: { defaultValue: { summary: "null" } },
  },
  hn = {
    name: "Link Relationship",
    description: "https://www.w3schools.com/tags/att_a_rel.asp",
    options: [
      "alternate",
      "author",
      "bookmark",
      "external",
      "help",
      "license",
      "next",
      "nofollow",
      "noopener",
      "noreferrer",
      "prev",
      "search",
      "tag",
    ],
    control: { type: "select" },
    table: { defaultValue: { summary: "null" } },
  };
var gn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host, a, ::slotted(a) {
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  color:var(--outline-link-color-default)
}

:host(:hover), a:hover, ::slotted(a:hover) {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
  color:var(--outline-link-color-hover) !important
}

:host(:focus), a:focus, ::slotted(a:focus) {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
  outline: 2px solid transparent;
  outline-offset: 2px;
  color:var(--outline-link-color-focus) !important
}
`;
let un = class extends xe {
  constructor() {
    super(...arguments), (this.linkHref = !1), (this.linkText = !1);
  }
  render() {
    return V`${
      this.linkHref
        ? V` <a
          href=${this.linkHref}
          rel="${ye(this.linkRel)}"
          target="${ye(this.linkTarget)}"
          aria-label="${ye(this.linkAriaLabel)}"
        >
          ${this.linkText ? V`${this.linkText}` : V`<slot></slot>`}
        </a>`
        : V`<slot></slot>`
    }`;
  }
};
(un.styles = [gn]),
  s(
    [de({ type: String, attribute: "link-href" })],
    un.prototype,
    "linkHref",
    void 0
  ),
  s(
    [de({ type: String, attribute: "link-text" })],
    un.prototype,
    "linkText",
    void 0
  ),
  s(
    [de({ type: String, attribute: "link-target" })],
    un.prototype,
    "linkTarget",
    void 0
  ),
  s(
    [de({ type: String, attribute: "link-rel" })],
    un.prototype,
    "linkRel",
    void 0
  ),
  s(
    [de({ type: String, attribute: "link-aria-label" })],
    un.prototype,
    "linkAriaLabel",
    void 0
  ),
  (un = s([le("outline-link")], un));
var mn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.list{
  border:unset;
  margin:0px;
  display:flex;
  flex-wrap:wrap;
  padding:0px;
}

ul.list, ul.grid{
  list-style-type:none;
}

ul.list > ::slotted(li), ol.list > ::slotted(li), ul.grid > ::slotted(li), ol.grid > ::slotted(li){
  display:flex;
  align-items:center;
  white-space:nowrap;
  padding:0.5rem;
}

.columns--2,
.columns--3,
.columns--4{
  display:flex;
  flex-direction:column;
}

.row{
  display:flex;
  flex-direction:row;
}

.column{
  display:flex;
  flex-direction:column;
}

.col-center{
  display:flex;
  flex-direction:column;
  align-items:center;
}

.mobile-col-center{
  display:flex;
  flex-direction:column;
  align-items:center;
}

.mobile-row{
  display:flex;
  flex-direction:row;
}

.mobile-col{
  display:flex;
  flex-direction:column;
}

ul.list.divided* > ::slotted(li:not(:last-of-type)){
  border-bottom:0 !important;
}

@media (min-width: 640px){
  .mobile-col-center{
    display:flex;
    flex-direction:row;
  }

  .mobile-col{
    display:flex;
    flex-direction:row;
  }

  .mobile-row{
    display:flex;
    flex-direction:column;
  }

  .columns--2{
    display:grid;
  }

  .columns--2{
    grid-template-columns:repeat(2, minmax(0, 1fr));
  }

ul.columns--2{
    list-style-type:none;
  }

ul.columns--2 > ::slotted(li), ol.columns--2 > ::slotted(li){
    display:flex;
  }

ul.columns--2 > ::slotted(li), ol.columns--2 > ::slotted(li){
    align-items:center;
  }

ul.columns--2 > ::slotted(li), ol.columns--2 > ::slotted(li){
    white-space:nowrap;
  }

ul.columns--2 > ::slotted(li), ol.columns--2 > ::slotted(li){
    padding:0.5rem;
  }

ul.columns--2 > ::slotted(li), ol.columns--2 > ::slotted(li){
    display:flex;
  }

ul.columns--2 > ::slotted(li), ol.columns--2 > ::slotted(li){
    align-items:center;
  }

ul.columns--2 > ::slotted(li), ol.columns--2 > ::slotted(li){
    white-space:nowrap;
  }

ul.columns--2 > ::slotted(li), ol.columns--2 > ::slotted(li){
    padding:0.5rem;
  }

  .columns--3{
    display:grid;
  }

  .columns--3{
    grid-template-columns:repeat(3, minmax(0, 1fr));
  }

  .columns--3{
    gap:0.25rem;
  }

ul.columns--3{
    list-style-type:none;
  }

ul.columns--3 > ::slotted(li), ol.columns--3 > ::slotted(li){
    display:flex;
  }

ul.columns--3 > ::slotted(li), ol.columns--3 > ::slotted(li){
    align-items:center;
  }

ul.columns--3 > ::slotted(li), ol.columns--3 > ::slotted(li){
    white-space:nowrap;
  }

ul.columns--3 > ::slotted(li), ol.columns--3 > ::slotted(li){
    padding:0.5rem;
  }

ul.columns--3 > ::slotted(li), ol.columns--3 > ::slotted(li){
    display:flex;
  }

ul.columns--3 > ::slotted(li), ol.columns--3 > ::slotted(li){
    align-items:center;
  }

ul.columns--3 > ::slotted(li), ol.columns--3 > ::slotted(li){
    white-space:nowrap;
  }

ul.columns--3 > ::slotted(li), ol.columns--3 > ::slotted(li){
    padding:0.5rem;
  }

  .columns--4{
    display:grid;
  }

  .columns--4{
    grid-template-columns:repeat(4, minmax(0, 1fr));
  }

ul.columns--4{
    list-style-type:none;
  }

ul.columns--4 > ::slotted(li), ol.columns--4 > ::slotted(li){
    display:flex;
  }

ul.columns--4 > ::slotted(li), ol.columns--4 > ::slotted(li){
    align-items:center;
  }

ul.columns--4 > ::slotted(li), ol.columns--4 > ::slotted(li){
    white-space:nowrap;
  }

ul.columns--4 > ::slotted(li), ol.columns--4 > ::slotted(li){
    padding:0.5rem;
  }

ul.columns--4 > ::slotted(li), ol.columns--4 > ::slotted(li){
    display:flex;
  }

ul.columns--4 > ::slotted(li), ol.columns--4 > ::slotted(li){
    align-items:center;
  }

ul.columns--4 > ::slotted(li), ol.columns--4 > ::slotted(li){
    white-space:nowrap;
  }

ul.columns--4 > ::slotted(li), ol.columns--4 > ::slotted(li){
    padding:0.5rem;
  }

  :is(ul, ol, div).list.divided > ::slotted(li:not(:last-of-type))::after{
    content:'|';
    margin-left:1rem;
  }

  :is(ul, ol, div).list.divided > ::slotted(li:not(:last-of-type))::after{
    color:white;
  }

  :is(ul, ol, div).list.divided.blue > ::slotted(li:not(:last-of-type))::after{
    color:#0080fe;
  }

  :is(ul, ol, div).list.divided.teal > ::slotted(li:not(:last-of-type))::after{
    color:#72f1e4;
  }

  :is(ul, ol, div).list.divided.red > ::slotted(li:not(:last-of-type))::after{
    color:#fa5c5c;
  }

  :is(ul, ol, div).list.divided.black
    > ::slotted(li:not(:last-of-type))::after{
    color:black;
  }
}
`;
const bn = ["ol", "ul", "div"],
  vn = [
    "column",
    "row",
    "mobile-row",
    "mobile-col",
    "col-center",
    "mobile-col-center",
  ],
  yn = ["blue", "teal", "red", "white", "black"],
  xn = ["2", "3", "4"];
let fn = class extends xe {
  constructor() {
    super(...arguments), (this.orientation = "column");
  }
  render() {
    const e = {
      list: !this.columns,
      grid: this.columns,
      [`${this.orientation}`]: this.orientation && !this.columns,
      divided: this.divider,
      [`${this.divider}`]: this.divider,
      [`columns--${this.columns}`]: this.columns,
    };
    return this.navLabel
      ? V`
          <slot name="heading"></slot>
          <nav role="navigation" aria-label="${this.navLabel}">
            ${this.listCase(e)}
          </nav>
          <slot name="footer"></slot>
        `
      : V`<slot name="heading"></slot>
          ${this.listCase(e)}
          <slot name="footer"></slot>`;
  }
  listCase(e) {
    switch (this.listType) {
      case "ol":
        return V`
          <ol class=${Ae(e)}>
            <slot></slot>
          </ol>
        `;
      case "ul":
        return V`
          <ul class=${Ae(e)}>
            <slot></slot>
          </ul>
        `;
      default:
        return V`
          <div class=${Ae(e)}>
            <slot></slot>
          </div>
        `;
    }
  }
};
(fn.styles = [mn]),
  s(
    [de({ type: String, attribute: "list-type" })],
    fn.prototype,
    "listType",
    void 0
  ),
  s([de({ type: String })], fn.prototype, "orientation", void 0),
  s(
    [de({ type: String, attribute: "nav-label" })],
    fn.prototype,
    "navLabel",
    void 0
  ),
  s([de({ type: String })], fn.prototype, "divider", void 0),
  s([de({ type: String })], fn.prototype, "columns", void 0),
  (fn = s([le("outline-list")], fn));
var wn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
#overlay {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--neutral-black);
  --tw-bg-opacity: 0.6;
  background-color:rgb(0, 0, 0, var(--tw-bg-opacity));
}

#container {
  height: 100vh;
  max-width: 100%;
  overflow-y: auto;
  border-radius: 0.125rem;
  background-color: var(--neutral-white);
}

@media (min-width: 768px) {

  #container {
    height: auto;
  }

  #container {
    max-width: 25vw;
  }
}

#container{
  min-width:320px;
}

@media (min-width: 768px) {

  #overlay.medium #container {
    max-width: 50vw;
  }
}

#overlay.full-screen #container {
  height: 100vh;
}

#overlay.full-screen #container {
  width: 100vw;
}

#overlay.full-screen #container {
  max-width: 100vw;
}

@media (min-width: 768px) {

  #overlay.full-screen #container {
    width: 100vw;
  }
}

@media (min-width: 768px) {

  #overlay.full-screen #container {
    max-width: 100vw;
  }
}

#header {
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1.5rem;
}

#close {
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  border-width: 0px;
  background-color: var(--neutral-transparent);
}

#close:before{
  content:'\\2715';
}

#main {
  padding: 1.5rem;
}

#accessibility-description {
  display: none;
}
`;
const kn = ["small", "medium", "full-screen"],
  zn =
    '\n  a[href]:not([tabindex="-1"]),\n  area[href]:not([tabindex="-1"]),\n  input:not([disabled]):not([tabindex="-1"]),\n  select:not([disabled]):not([tabindex="-1"]),\n  textarea:not([disabled]):not([tabindex="-1"]),\n  button:not([disabled]):not([tabindex="-1"]),\n  iframe:not([tabindex="-1"]),\n  [tabindex]:not([tabindex="-1"]),\n  [contentEditable=true]:not([tabindex="-1"])\n';
let _n = class extends xe {
  constructor() {
    super(...arguments),
      (this.isOpen = !1),
      (this.shouldForceAction = !1),
      (this.size = "medium");
  }
  render() {
    return V`
      <div
        id="trigger"
        tabindex="0"
        @click="${this.open}"
        @keydown="${this._handleTriggerKeydown}"
      >
        <slot name="outline-modal--trigger"></slot>
      </div>
      ${this._overlayTemplate()}
    `;
  }
  connectedCallback() {
    super.connectedCallback(), this._handleSlotChange();
  }
  _handleSlotChange() {
    (this._hasHeaderSlot =
      null !== this.querySelector('[slot="outline-modal--header"]')),
      (this._hasAccessibilityDescriptionSlot =
        null !==
        this.querySelector(
          '[slot="outline-modal--accessibility-description"]'
        ));
  }
  _overlayTemplate() {
    let e = V``;
    return (
      this.isOpen &&
        (e = V`
        <div
          id="overlay"
          tabindex="-1"
          class="${this.size}"
          @click="${this._handleOverlayClick}"
          @keydown="${this._handleOverlayKeydown}"
        >
          <div
            id="container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="${ye(this._hasHeaderSlot ? "header" : void 0)}"
            aria-describedby="${ye(
              this._hasAccessibilityDescriptionSlot
                ? "accessibility-description"
                : void 0
            )}"
          >
            <div id="header">
              <slot
                id="title"
                name="outline-modal--header"
                @slotchange="${this._handleSlotChange}"
              ></slot>
              ${
                this.shouldForceAction
                  ? null
                  : V`
                    <button
                      id="close"
                      aria-label="Close modal"
                      @click="${this.close}"
                      @keydown="${this._handleCloseKeydown}"
                    ></button>
                  `
              }
            </div>
            <div id="main">
              <slot></slot>
            </div>
          </div>
        </div>
        <slot
          id="accessibility-description"
          name="outline-modal--accessibility-description"
          @slotchange="${this._handleSlotChange}"
        ></slot>
      `),
      e
    );
  }
  async open() {
    this.isOpen ||
      ((this.isOpen = !0),
      await this.updateComplete,
      this._focusOnElement(),
      this._trapFocus(),
      this.dispatchEvent(new CustomEvent("opened")));
  }
  async close() {
    this.isOpen &&
      ((this.isOpen = !1),
      await this.updateComplete,
      this.dispatchEvent(new CustomEvent("closed")),
      this.triggerElement.focus());
  }
  _handleTriggerKeydown(e) {
    "Enter" === e.key && (e.preventDefault(), this.open());
  }
  _handleOverlayClick(e) {
    e.target === e.currentTarget &&
      !1 === this.shouldForceAction &&
      this.close();
  }
  _handleOverlayKeydown(e) {
    "Escape" === e.key && !1 === this.shouldForceAction && this.close();
  }
  _handleCloseKeydown(e) {
    "Enter" === e.key && this.close();
  }
  _focusOnElement() {
    var e;
    const t = this.shouldForceAction ? null : this.closeElement,
      r =
        void 0 !== this.elementToFocusSelector
          ? this.querySelector(this.elementToFocusSelector)
          : null,
      n = this.querySelector(zn),
      i = null !== (e = null != r ? r : n) && void 0 !== e ? e : t;
    null !== i && i.focus();
  }
  _trapFocus() {
    var e;
    const t = this.shouldForceAction
      ? this.firstFocusableSlottedElement
      : this.closeElement;
    if (null !== t) {
      const r =
        null !== (e = this.lastFocusableSlottedElement) && void 0 !== e ? e : t;
      r.addEventListener("keydown", (e) => {
        "Tab" === e.key && !1 === e.shiftKey && (e.preventDefault(), t.focus());
      }),
        t.addEventListener("keydown", (e) => {
          "Tab" === e.key && e.shiftKey && (e.preventDefault(), r.focus());
        });
    }
  }
  get firstFocusableSlottedElement() {
    var e;
    const t = this.querySelectorAll(zn);
    return null !== (e = Array.from(t).slice(0)[0]) && void 0 !== e ? e : null;
  }
  get lastFocusableSlottedElement() {
    var e;
    const t = this.querySelectorAll(zn);
    return null !== (e = Array.from(t).slice(-1)[0]) && void 0 !== e ? e : null;
  }
};
(_n.styles = [wn]),
  s([de({ attribute: !1 })], _n.prototype, "isOpen", void 0),
  s([de({ type: Boolean })], _n.prototype, "shouldForceAction", void 0),
  s([de({ type: String })], _n.prototype, "size", void 0),
  s([ce()], _n.prototype, "_hasHeaderSlot", void 0),
  s([ce()], _n.prototype, "_hasAccessibilityDescriptionSlot", void 0),
  s([he("#trigger")], _n.prototype, "triggerElement", void 0),
  s([he("#close")], _n.prototype, "closeElement", void 0),
  s([de({ type: String })], _n.prototype, "elementToFocusSelector", void 0),
  (_n = s([le("outline-modal")], _n));
var $n = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
@-webkit-keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes splide-loading{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.splide--draggable>.splide__slider>.splide__track,.splide--draggable>.splide__track{-webkit-user-select:none;-moz-user-select:none;user-select:none}.splide--fade>.splide__slider>.splide__track>.splide__list,.splide--fade>.splide__track>.splide__list{display:block}.splide--fade>.splide__slider>.splide__track>.splide__list>.splide__slide,.splide--fade>.splide__track>.splide__list>.splide__slide{left:0;opacity:0;position:absolute;top:0;z-index:0}.splide--fade>.splide__slider>.splide__track>.splide__list>.splide__slide.is-active,.splide--fade>.splide__track>.splide__list>.splide__slide.is-active{opacity:1;position:relative;z-index:1}.splide--rtl{direction:rtl}.splide--ttb.is-active>.splide__slider>.splide__track>.splide__list,.splide--ttb.is-active>.splide__track>.splide__list{display:block}.splide__container{box-sizing:border-box;position:relative}.splide__list{-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;height:100%;margin:0!important;padding:0!important;transform-style:preserve-3d}.splide.is-initialized:not(.is-active) .splide__list{display:block}.splide__pagination{align-items:center;display:flex;flex-wrap:wrap;justify-content:center;margin:0;pointer-events:none}.splide__pagination li{display:inline-block;line-height:1;list-style-type:none;margin:0;pointer-events:auto}.splide__progress__bar{width:0}.splide{outline:none;position:relative;visibility:hidden}.splide.is-initialized,.splide.is-rendered{visibility:visible}.splide__slide{-webkit-backface-visibility:hidden;backface-visibility:hidden;box-sizing:border-box;flex-shrink:0;list-style-type:none!important;margin:0;outline:none;position:relative}.splide__slide img{vertical-align:bottom}.splide__slider{position:relative}.splide__spinner{-webkit-animation:splide-loading 1s linear infinite;animation:splide-loading 1s linear infinite;border:2px solid #999;border-left-color:transparent;border-radius:50%;bottom:0;contain:strict;display:inline-block;height:20px;left:0;margin:auto;position:absolute;right:0;top:0;width:20px}.splide__track{overflow:hidden;position:relative;z-index:0}.splide__arrows{order:1;display:flex;width:100%;justify-content:center;background-color:var(--blue-responsible-main)}@media (min-width: 768px){.splide__arrows{position:absolute}.splide__arrows{bottom:0px}.splide__arrows{right:0px}.splide__arrows{z-index:40}}.splide__arrow{display:flex;flex-grow:1;align-items:center;
  background:none;
  border:none;}.splide__arrow:hover{cursor:pointer}.splide__arrow:hover{background-color:var(--blue-responsible-darken-2)}.splide__arrow:disabled{cursor:not-allowed}.splide__arrow:disabled{background-color:var(--neutral-black)}.splide__arrow:disabled{opacity:0.75}.splide__arrow svg{
  fill:white;
  width:1.25rem;
}.splide__arrow--prev{justify-content:flex-end;}.splide__arrow--prev:after{position:absolute}.splide__arrow--prev:after{height:50%}.splide__arrow--prev:after{
    content:'';
    border-right:1px solid var(--gray-professional-main);
    right:50%;
    top:0.75rem;
  }.splide__arrow--prev svg{justify-self:end}.splide__arrow--prev svg{
    transform:rotate(180deg);
  }.splide__slide.is-visible{
  visibility:visible;
}.sr-only{
  position:absolute;
  width:1px;
  height:1px;
  padding:0;
  margin:-1px;
  overflow:hidden;
  clip:rect(0, 0, 0, 0);
  border:0;
}.slide-count{display:none;border-radius:0.25rem;padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;font-family:Open Sans, Helvetica, Arial, sans-serif;font-size:var(--fs-lg);line-height:var(--lh-lg);color:var(--neutral-white);
  background-color:#000000}@media (min-width: 768px){
  .splide__arrows{
    height:4.75rem;
    width:9.25rem;
    border-radius:0 5px 0 5px;
  }

  .splide__arrow{justify-content:center}
    .splide__arrow--prev:after{
      top:1.25rem;
    }

  .slide-count{
    display:block;
  }

  .slide-count{position:absolute}

  .slide-count{bottom:1rem}

  .slide-count{right:1rem}

  .slide-count{z-index:50}
}.splide__slide{background-color:var(--gray-professional-darken-1)}.splide__slide:not(picture), .splide__slide:not(.content-width-sample){position:relative;display:flex;height:100%;width:100%;flex-direction:column;justify-content:center;padding-left:2rem;padding-right:2rem;padding-top:1rem;padding-bottom:4rem;color:var(--neutral-white)}@media (min-width: 768px){.splide__slide:not(picture), .splide__slide:not(.content-width-sample){padding-bottom:5rem}}@media (min-width: 1024px){.splide__slide:not(picture), .splide__slide:not(.content-width-sample){padding-left:5rem;padding-right:5rem}}.splide__slide:not(picture) > *,.splide__slide:not(.content-width-sample) > *{position:relative}.splide__slide:not(picture) > *,.splide__slide:not(.content-width-sample) > *{z-index:10}.splide__slide:not(picture) > *,.splide__slide:not(.content-width-sample) > *{margin-top:1.5rem}.splide__slide:not(picture) > *,.splide__slide:not(.content-width-sample) > *{margin-bottom:0px}.splide__slide:not(picture) > *:first-child,.splide__slide:not(.content-width-sample) > *:first-child{margin-top:0px}.splide__slide:not(picture) > h2,.splide__slide:not(.content-width-sample) > h2{font-size:var(--fs-2xl);line-height:var(--lh-2xl)}.splide__slide:not(picture) > h2,.splide__slide:not(.content-width-sample) > h2{font-weight:var(--fw-normal)}@media (min-width: 768px){.splide__slide:not(picture) > h2,.splide__slide:not(.content-width-sample) > h2{font-size:var(--fs-4xl);line-height:var(--lh-4xl)}}@media (min-width: 1024px){.splide__slide:not(picture) > h2,.splide__slide:not(.content-width-sample) > h2{font-size:var(--fs-5xl);line-height:var(--lh-5xl)}}@media (min-width: 1024px){.splide__slide:not(picture) > h2,.splide__slide:not(.content-width-sample) > h2{font-weight:var(--fw-bold)}}.splide__slide:not(picture) > h2,.splide__slide:not(.content-width-sample) > h2{line-height:1.25 !important}.splide__slide:not(picture) > p,.splide__slide:not(.content-width-sample) > p{display:none}@media (min-width: 768px){.splide__slide:not(picture) > p,.splide__slide:not(.content-width-sample) > p{display:block}}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{display:inline-flex}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{flex-wrap:nowrap}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{align-items:center}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{cursor:pointer}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{border-radius:0.5rem}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{transition-property:color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{transition-duration:300ms}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{font-weight:var(--fw-semibold)}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{-webkit-text-decoration-line:none;text-decoration-line:none}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{outline:2px solid transparent;outline-offset:2px}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{width:auto !important}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{align-self:flex-start !important}.splide__slide:not(picture) > .btn,.splide__slide:not(.content-width-sample) > .btn{line-height:1.5 !important}.splide__slide:not(picture) > .btn, .splide__slide:not(.content-width-sample) > .btn{
    padding:0.5em 1em;
  }.splide__slide:not(picture) > .btn[aria-disabled='true'],.splide__slide:not(.content-width-sample) > .btn[aria-disabled='true']{pointer-events:none !important}.splide__slide:not(picture) > .btn[aria-disabled='true'],.splide__slide:not(.content-width-sample) > .btn[aria-disabled='true']{cursor:not-allowed !important}.splide__slide:not(picture) > .btn[aria-disabled='true'],.splide__slide:not(.content-width-sample) > .btn[aria-disabled='true']{-webkit-user-select:none !important;-moz-user-select:none !important;user-select:none !important}.splide__slide:not(picture) > .btn.primary,.splide__slide:not(.content-width-sample) > .btn.primary{border-style:none}.splide__slide:not(picture) > .btn.primary,.splide__slide:not(.content-width-sample) > .btn.primary{background-color:var(--blue-responsible-main)}.splide__slide:not(picture) > .btn.primary,.splide__slide:not(.content-width-sample) > .btn.primary{color:var(--neutral-white)}.splide__slide:not(picture) > .btn.primary:hover, .splide__slide:not(picture) > .btn.primary:focus, .splide__slide:not(.content-width-sample) > .btn.primary:hover, .splide__slide:not(.content-width-sample) > .btn.primary:focus{background-color:var(--blue-responsible-darken-2)}.splide__slide:not(picture) > .btn.primary:hover, .splide__slide:not(picture) > .btn.primary:focus, .splide__slide:not(.content-width-sample) > .btn.primary:hover, .splide__slide:not(.content-width-sample) > .btn.primary:focus{color:var(--neutral-white)}.splide__slide:not(picture) > .primary[aria-disabled='true'],.splide__slide:not(.content-width-sample) > .primary[aria-disabled='true']{background-color:var(--gray-cosmopolitan-lighten-2) !important}.splide__slide:not(picture) > .primary[aria-disabled='true'],.splide__slide:not(.content-width-sample) > .primary[aria-disabled='true']{color:var(--neutral-white) !important}.splide__slide:not(picture) > picture,.splide__slide:not(.content-width-sample) > picture{position:absolute}.splide__slide:not(picture) > picture,.splide__slide:not(.content-width-sample) > picture{left:0px}.splide__slide:not(picture) > picture,.splide__slide:not(.content-width-sample) > picture{top:0px}.splide__slide:not(picture) > picture,.splide__slide:not(.content-width-sample) > picture{z-index:0}.splide__slide:not(picture) > picture,.splide__slide:not(.content-width-sample) > picture{margin-top:0px}.splide__slide:not(picture) > picture,.splide__slide:not(.content-width-sample) > picture{height:100%}.splide__slide:not(picture) > picture,.splide__slide:not(.content-width-sample) > picture{width:100%}.splide__slide:not(picture) > picture img,.splide__slide:not(.content-width-sample) > picture img{opacity:0.6}.content-width-example{position:relative;display:flex;height:100%;width:100%;flex-direction:column;justify-content:center;padding-left:2rem;padding-right:2rem;padding-top:1rem;padding-bottom:4rem;color:var(--neutral-white);}.content-width-example outline-container > *{position:relative}.content-width-example outline-container > *{z-index:10}.content-width-example outline-container > *{margin-top:1.5rem}.content-width-example outline-container > *{margin-bottom:0px}.content-width-example outline-container > *:first-child{margin-top:0px}.content-width-example outline-container > h2{font-size:var(--fs-2xl);line-height:var(--lh-2xl)}.content-width-example outline-container > h2{font-weight:var(--fw-normal)}@media (min-width: 768px){.content-width-example outline-container > h2{font-size:var(--fs-4xl);line-height:var(--lh-4xl)}}@media (min-width: 1024px){.content-width-example outline-container > h2{font-size:var(--fs-5xl);line-height:var(--lh-5xl)}}@media (min-width: 1024px){.content-width-example outline-container > h2{font-weight:var(--fw-bold)}}.content-width-example outline-container > h2{line-height:1.25 !important}.content-width-example outline-container > p{display:none}@media (min-width: 768px){.content-width-example outline-container > p{display:block}}.content-width-example > picture{position:absolute}.content-width-example > picture{left:0px}.content-width-example > picture{top:0px}.content-width-example > picture{z-index:0}.content-width-example > picture{margin-top:0px}.content-width-example > picture{height:100%}.content-width-example > picture{width:100%}.content-width-example > picture img{opacity:0.6}@media (min-width: 768px){
  .splide__slide:not(picture),
  .content-width-example outline-container{
    padding-right:25%;
  }
}@media (min-width: 1024px){
  .splide__slide:not(picture),
  .content-width-example outline-container{
    padding-right:40%;
  }
}.splide__slide > picture, picture.splide__slide{display:block;overflow:hidden;}.splide__slide > picture > img,picture.splide__slide > img{display:block}.splide__slide > picture > img,picture.splide__slide > img{height:100%}.splide__slide > picture > img,picture.splide__slide > img{width:100%}.splide__slide > picture > img,picture.splide__slide > img{object-fit:cover}.splide__pagination{position:relative;bottom:2.75rem;height:0px;justify-content:flex-start;padding-left:2rem;padding-right:2rem;padding-top:0px;padding-bottom:0px}@media (min-width: 1024px){.splide__pagination{bottom:6rem}@media (min-width: 1024px){.splide__pagination{padding-left:5rem;padding-right:5rem}}}.splide__pagination li button{margin-right:0.75rem}.splide__pagination li button{display:block}.splide__pagination li button{height:0.75rem}.splide__pagination li button{width:0.75rem}.splide__pagination li button{cursor:pointer}.splide__pagination li button{border-radius:9999px}.splide__pagination li button{border-width:1px}.splide__pagination li button{border-style:solid}.splide__pagination li button{border-color:var(--neutral-white)}.splide__pagination li button{background-color:var(--gray-cosmopolitan-main)}.splide__pagination li button{padding:0px}@media (min-width: 1024px){.splide__pagination li button{height:1rem}}@media (min-width: 1024px){.splide__pagination li button{width:1rem}}.splide__pagination li button[aria-current='true']{border-color:var(--gray-cosmopolitan-main)}.splide__pagination li button[aria-current='true']{background-color:var(--neutral-white)}
`;
let Sn = class extends xe {
  constructor() {
    super(...arguments),
      (this.heightSmall = "300px"),
      (this.heightMedium = "450px"),
      (this.heightLarge = "600px");
  }
  connectedCallback() {
    super.connectedCallback(),
      (this.observer = new MutationObserver(() => {
        this.requestUpdate();
      })),
      this.observer.observe(this, { childList: !0 });
  }
  firstUpdated() {
    var e;
    const t =
        null === (e = this.shadowRoot) || void 0 === e
          ? void 0
          : e.querySelector(".splide__track"),
      r = document.createElement("div");
    r.classList.add("splide__list"),
      Array.from(this.children).forEach((e, t, n) => {
        r.appendChild(e),
          e.classList.add("splide__slide", "splide__slide__container"),
          e.setAttribute("aria-label", `slide ${t + 1} of ${n.length}`);
      }),
      t.appendChild(r);
    const n = {
      keyboard: !0,
      arrows: !0,
      pagination: !0,
      height: "600px",
      breakpoints: { 640: { height: "283px" }, 1024: { height: "454px" } },
      focusableNodes:
        "a, button, textarea, input, select, iframe, idb-button, idb-button a",
    };
    this.heightLarge && (n.height = this.heightLarge),
      this.heightMedium && (n.breakpoints[1024].height = this.heightMedium),
      this.heightSmall && (n.breakpoints[640].height = this.heightSmall),
      (this.splide = new an(this.splideEl, n).mount()),
      this.previousLabel &&
        this.prevBtn.setAttribute("aria-label", this.previousLabel),
      this.nextLabel && this.nextBtn.setAttribute("aria-label", this.nextLabel);
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    return V`
      <div class="splide" data-splide='{"":"","rewind":"true","rewindByDrag":"true","autoplay":"true","pauseOnHover":"true","pauseOnFocus":"true", "drag":"true","snap":"true"}'>
        <div class="splide__track">
        </div>
      </div>
    `;
  }
};
(Sn.styles = [$n]),
  s(
    [de({ type: String, reflect: !0, attribute: "previous-label" })],
    Sn.prototype,
    "previousLabel",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "next-label" })],
    Sn.prototype,
    "nextLabel",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "height-sm" })],
    Sn.prototype,
    "heightSmall",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "height-md" })],
    Sn.prototype,
    "heightMedium",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "height-lg" })],
    Sn.prototype,
    "heightLarge",
    void 0
  ),
  s([he(".splide")], Sn.prototype, "splideEl", void 0),
  s([he(".splide__arrow--prev")], Sn.prototype, "prevBtn", void 0),
  s([he(".splide__arrow--next")], Sn.prototype, "nextBtn", void 0),
  (Sn = s([le("outline-splide-slider")], Sn));
var An = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
/* ! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com */

*,
::before,
::after{
  box-sizing:border-box;
  border-width:0;
  border-style:solid;
  border-color:currentColor;
}

::before,
::after{
  --tw-content:'';
}

html{
  line-height:1.5;
  -webkit-text-size-adjust:100%;
  -moz-tab-size:4;
  tab-size:4;
  font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

body{
  margin:0;
  line-height:inherit;
}

hr{
  height:0;
  color:inherit;
  border-top-width:1px;
}

abbr:where([title]){
  -webkit-text-decoration:underline dotted;
          text-decoration:underline dotted;
}

h1,
h2,
h3,
h4,
h5,
h6{
  font-size:inherit;
  font-weight:inherit;
}

a{
  color:inherit;
  text-decoration:inherit;
}

b,
strong{
  font-weight:bolder;
}

code,
kbd,
samp,
pre{
  font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  font-size:1em;
}

small{
  font-size:80%;
}

sub,
sup{
  font-size:75%;
  line-height:0;
  position:relative;
  vertical-align:baseline;
}

sub{
  bottom:-0.25em;
}

sup{
  top:-0.5em;
}

table{
  text-indent:0;
  border-color:inherit;
  border-collapse:collapse;
}

button,
input,
optgroup,
select,
textarea{
  font-family:inherit;
  font-size:100%;
  line-height:inherit;
  color:inherit;
  margin:0;
  padding:0;
}

button,
select{
  text-transform:none;
}

button,
[type='button'],
[type='reset'],
[type='submit']{
  -webkit-appearance:button;
  background-color:transparent;
  background-image:none;
}

:-moz-focusring{
  outline:auto;
}

:-moz-ui-invalid{
  box-shadow:none;
}

progress{
  vertical-align:baseline;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button{
  height:auto;
}

[type='search']{
  -webkit-appearance:textfield;
  outline-offset:-2px;
}

::-webkit-search-decoration{
  -webkit-appearance:none;
}

::-webkit-file-upload-button{
  -webkit-appearance:button;
  font:inherit;
}

summary{
  display:list-item;
}

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre{
  margin:0;
}

fieldset{
  margin:0;
  padding:0;
}

legend{
  padding:0;
}

ol,
ul,
menu{
  list-style:none;
  margin:0;
  padding:0;
}

textarea{
  resize:vertical;
}

input::-moz-placeholder, textarea::-moz-placeholder{
  opacity:1;
  color:#9ca3af;
}

input::placeholder,
textarea::placeholder{
  opacity:1;
  color:#9ca3af;
}

button,
[role="button"]{
  cursor:pointer;
}
:disabled{
  cursor:default;
}

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object{
  display:block;
  vertical-align:middle;
}

img,
video{
  max-width:100%;
  height:auto;
}

[hidden]{
  display:none;
}

*, ::before, ::after{
  --tw-translate-x:0;
  --tw-translate-y:0;
  --tw-rotate:0;
  --tw-skew-x:0;
  --tw-skew-y:0;
  --tw-scale-x:1;
  --tw-scale-y:1;
  --tw-pan-x: ;
  --tw-pan-y: ;
  --tw-pinch-zoom: ;
  --tw-scroll-snap-strictness:proximity;
  --tw-ordinal: ;
  --tw-slashed-zero: ;
  --tw-numeric-figure: ;
  --tw-numeric-spacing: ;
  --tw-numeric-fraction: ;
  --tw-ring-inset: ;
  --tw-ring-offset-width:0px;
  --tw-ring-offset-color:#fff;
  --tw-ring-color:rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow:0 0 #0000;
  --tw-ring-shadow:0 0 #0000;
  --tw-shadow:0 0 #0000;
  --tw-shadow-colored:0 0 #0000;
  --tw-blur: ;
  --tw-brightness: ;
  --tw-contrast: ;
  --tw-grayscale: ;
  --tw-hue-rotate: ;
  --tw-invert: ;
  --tw-saturate: ;
  --tw-sepia: ;
  --tw-drop-shadow: ;
  --tw-backdrop-blur: ;
  --tw-backdrop-brightness: ;
  --tw-backdrop-contrast: ;
  --tw-backdrop-grayscale: ;
  --tw-backdrop-hue-rotate: ;
  --tw-backdrop-invert: ;
  --tw-backdrop-opacity: ;
  --tw-backdrop-saturate: ;
  --tw-backdrop-sepia: ;
}
`;
let Mn = class extends xe {
  constructor() {
    super(...arguments), (this.slots = new l(this, !0));
  }
  render() {
    return V`<slot></slot>`;
  }
};
(Mn.styles = [An]), (Mn = s([le("outline-styled-text")], Mn));
var Cn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
#color {
  margin-bottom: 0.5rem;
  height: 4rem;
  width: 100%;
  border-radius: 0.5rem;
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color:var(--swatch-color)
}
.information {
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
.information--label {
  font-weight: var(--fw-semibold)
}
`;
let Bn = class extends xe {
  constructor() {
    super(...arguments), (this.set = "blue-responsible"), (this.color = "blue");
  }
  render() {
    const e = i.colors[this.set][this.color],
      t = getComputedStyle(document.body).getPropertyValue(
        `--${this.set}-${this.color}`
      );
    return V`
      <div id="color" style="--swatch-color: ${e}"></div>
      <div class="information">
        <span class="information--label">Color:</span>${this.color}
      </div>
      <div class="information">
        <span class="information--label">CSS Variable:</span
        ><code>${e}</code>
      </div>
      <div class="information">
        <span class="information--label">Hex Code:</span><code>${t}</code>
      </div>
    `;
  }
};
(Bn.styles = [Cn]),
  s([de({ type: String })], Bn.prototype, "set", void 0),
  s([de({ type: String })], Bn.prototype, "color", void 0),
  (Bn = s([le("outline-swatch")], Bn));
var Tn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
outline-grid {
    margin-bottom: 5rem
}
`,
  Zn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
    grid-column:span 12 / span 12;
    display:flex;
    flex-direction:column;
}
  :host([row-span='1']) {
    grid-row:span 1 / span 1;
}
  :host([row-span='2']) {
    grid-row:span 2 / span 2;
}
  :host([row-span='3']) {
    grid-row:span 3 / span 3;
}
  :host([row-span='4']) {
    grid-row:span 4 / span 4;
}
  :host([row-span='5']) {
    grid-row:span 5 / span 5;
}
  :host([row-span='6']) {
    grid-row:span 6 / span 6;
}
  :host([col-span-default='1']) {
    grid-column:span 1 / span 1;
}
  :host([col-span-default='2']) {
    grid-column:span 2 / span 2;
}
  :host([col-span-default='3']) {
    grid-column:span 3 / span 3;
}
  :host([col-span-default='4']) {
    grid-column:span 4 / span 4;
}
  :host([col-span-default='5']) {
    grid-column:span 5 / span 5;
}
  :host([col-span-default='6']) {
    grid-column:span 6 / span 6;
}
  :host([col-span-default='7']) {
    grid-column:span 7 / span 7;
}
  :host([col-span-default='8']) {
    grid-column:span 8 / span 8;
}
  :host([col-span-default='9']) {
    grid-column:span 9 / span 9;
}
  :host([col-span-default='10']) {
    grid-column:span 10 / span 10;
}
  :host([col-span-default='11']) {
    grid-column:span 11 / span 11;
}
  :host([col-span-default='12']) {
    grid-column:span 12 / span 12;
}
  @media (min-width: 640px){
    :host([col-span-sm='1']) {
        grid-column:span 1 / span 1;
    }

    :host([col-span-sm='2']) {
        grid-column:span 2 / span 2;
    }

    :host([col-span-sm='3']) {
        grid-column:span 3 / span 3;
    }

    :host([col-span-sm='4']) {
        grid-column:span 4 / span 4;
    }

    :host([col-span-sm='5']) {
        grid-column:span 5 / span 5;
    }

    :host([col-span-sm='6']) {
        grid-column:span 6 / span 6;
    }

    :host([col-span-sm='7']) {
        grid-column:span 7 / span 7;
    }

    :host([col-span-sm='8']) {
        grid-column:span 8 / span 8;
    }

    :host([col-span-sm='9']) {
        grid-column:span 9 / span 9;
    }

    :host([col-span-sm='10']) {
        grid-column:span 10 / span 10;
    }

    :host([col-span-sm='11']) {
        grid-column:span 11 / span 11;
    }

    :host([col-span-sm='12']) {
        grid-column:span 12 / span 12;
    }
  }
  @media (min-width: 768px){
    :host([col-span-md='1']) {
        grid-column:span 1 / span 1;
    }

    :host([col-span-md='2']) {
        grid-column:span 2 / span 2;
    }

    :host([col-span-md='3']) {
        grid-column:span 3 / span 3;
    }

    :host([col-span-md='4']) {
        grid-column:span 4 / span 4;
    }

    :host([col-span-md='5']) {
        grid-column:span 5 / span 5;
    }

    :host([col-span-md='6']) {
        grid-column:span 6 / span 6;
    }

    :host([col-span-md='7']) {
        grid-column:span 7 / span 7;
    }

    :host([col-span-md='8']) {
        grid-column:span 8 / span 8;
    }

    :host([col-span-md='9']) {
        grid-column:span 9 / span 9;
    }

    :host([col-span-md='10']) {
        grid-column:span 10 / span 10;
    }

    :host([col-span-md='11']) {
        grid-column:span 11 / span 11;
    }

    :host([col-span-md='12']) {
        grid-column:span 12 / span 12;
    }
  }
  :host([border-gap-size="small"]) {
    margin-bottom:1rem;
}
  :host([border-gap-size="medium"]) {
    margin-bottom:2.5rem;
}
  :host([border-gap-size="large"]) {
    margin-bottom:4rem;
}
  @media (min-width: 1024px){
    :host([col-span-lg='1']) {
        grid-column:span 1 / span 1;
    }

    :host([col-span-lg='2']) {
        grid-column:span 2 / span 2;
    }

    :host([col-span-lg='3']) {
        grid-column:span 3 / span 3;
    }

    :host([col-span-lg='4']) {
        grid-column:span 4 / span 4;
    }

    :host([col-span-lg='5']) {
        grid-column:span 5 / span 5;
    }

    :host([col-span-lg='6']) {
        grid-column:span 6 / span 6;
    }

    :host([col-span-lg='7']) {
        grid-column:span 7 / span 7;
    }

    :host([col-span-lg='8']) {
        grid-column:span 8 / span 8;
    }

    :host([col-span-lg='9']) {
        grid-column:span 9 / span 9;
    }

    :host([col-span-lg='10']) {
        grid-column:span 10 / span 10;
    }

    :host([col-span-lg='11']) {
        grid-column:span 11 / span 11;
    }

    :host([col-span-lg='12']) {
        grid-column:span 12 / span 12;
    }
  }
  @media (min-width: 1280px){
    :host([col-span-xl='1']) {
        grid-column:span 1 / span 1;
    }

    :host([col-span-xl='2']) {
        grid-column:span 2 / span 2;
    }

    :host([col-span-xl='3']) {
        grid-column:span 3 / span 3;
    }

    :host([col-span-xl='4']) {
        grid-column:span 4 / span 4;
    }

    :host([col-span-xl='5']) {
        grid-column:span 5 / span 5;
    }

    :host([col-span-xl='6']) {
        grid-column:span 6 / span 6;
    }

    :host([col-span-xl='7']) {
        grid-column:span 7 / span 7;
    }

    :host([col-span-xl='8']) {
        grid-column:span 8 / span 8;
    }

    :host([col-span-xl='9']) {
        grid-column:span 9 / span 9;
    }

    :host([col-span-xl='10']) {
        grid-column:span 10 / span 10;
    }

    :host([col-span-xl='11']) {
        grid-column:span 11 / span 11;
    }

    :host([col-span-xl='12']) {
        grid-column:span 12 / span 12;
    }
    :host([border-gap-size="small"]), :host([border-gap-size="medium"]), :host([border-gap-size="large"]) {
        margin-bottom:0px;
    }
    :host([has-left-divider]){
      border-left:1px solid var(--neutral-grayMedium) !important;
    }

    :host([has-left-divider][border-gap-size="small"]) {
        padding-left:1rem;
    }
    :host([has-left-divider][border-gap-size="medium"]) {
        padding-left:2.5rem;
    }
    :host([has-left-divider][border-gap-size="large"]) {
        padding-left:4rem;
    }

    :host([has-right-divider][border-gap-size="small"]) {
        padding-right:1rem;
    }
    :host([has-right-divider][border-gap-size="medium"]) {
        padding-right:2.5rem;
    }
    :host([has-right-divider][border-gap-size="large"]) {
        padding-right:4rem;
    }
  }
  @media (min-width: 1440px){
    :host([col-span-xxl='1']) {
        grid-column:span 1 / span 1;
    }

    :host([col-span-xxl='2']) {
        grid-column:span 2 / span 2;
    }

    :host([col-span-xxl='3']) {
        grid-column:span 3 / span 3;
    }

    :host([col-span-xxl='4']) {
        grid-column:span 4 / span 4;
    }

    :host([col-span-xxl='5']) {
        grid-column:span 5 / span 5;
    }

    :host([col-span-xxl='6']) {
        grid-column:span 6 / span 6;
    }

    :host([col-span-xxl='7']) {
        grid-column:span 7 / span 7;
    }

    :host([col-span-xxl='8']) {
        grid-column:span 8 / span 8;
    }

    :host([col-span-xxl='9']) {
        grid-column:span 9 / span 9;
    }

    :host([col-span-xxl='10']) {
        grid-column:span 10 / span 10;
    }

    :host([col-span-xxl='11']) {
        grid-column:span 11 / span 11;
    }

    :host([col-span-xxl='12']) {
        grid-column:span 12 / span 12;
    }
  }
  :host([content-align='middle']) {
    justify-content:center;
}
  :host([content-align='bottom']) {
    justify-content:flex-end;
}
`;
let qn = class extends xe {
  constructor() {
    super(...arguments),
      (this.colSpanDefault = 12),
      (this.rowSpan = 1),
      (this.contentAlign = "middle");
  }
  render() {
    return V`<slot></slot>`;
  }
};
(qn.styles = [Zn]),
  s(
    [de({ type: Number, reflect: !0, attribute: "col-span-default" })],
    qn.prototype,
    "colSpanDefault",
    void 0
  ),
  s(
    [de({ type: Number, reflect: !0, attribute: "col-span-sm" })],
    qn.prototype,
    "colSpanSm",
    void 0
  ),
  s(
    [de({ type: Number, reflect: !0, attribute: "col-span-md" })],
    qn.prototype,
    "colSpanMd",
    void 0
  ),
  s(
    [de({ type: Number, reflect: !0, attribute: "col-span-lg" })],
    qn.prototype,
    "colSpanLg",
    void 0
  ),
  s(
    [de({ type: Number, reflect: !0, attribute: "col-span-xl" })],
    qn.prototype,
    "colSpanXl",
    void 0
  ),
  s(
    [de({ type: Number, reflect: !0, attribute: "col-span-2xl" })],
    qn.prototype,
    "colSpan2xl",
    void 0
  ),
  s(
    [de({ type: Number, reflect: !0, attribute: "row-span" })],
    qn.prototype,
    "rowSpan",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "content-align" })],
    qn.prototype,
    "contentAlign",
    void 0
  ),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "has-left-divider" })],
    qn.prototype,
    "hasLeftDivider",
    void 0
  ),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "has-right-divider" })],
    qn.prototype,
    "hasRightDivider",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "border-gap-size" })],
    qn.prototype,
    "borderGapSize",
    void 0
  ),
  (qn = s([le("outline-column")], qn));
const En = ["blue-responsible", "neutral", "ui", "demo"];
let Fn = class extends xe {
  constructor() {
    super(...arguments), (this.set = "blue-responsible");
  }
  render() {
    const e = Object.entries(i.colors[this.set]).map(([e]) => e);
    return V`
      <outline-grid>
        ${e.map(
          (e) => V`
            <outline-column col-span-md="6" col-span-lg="4" col-span-xl="3">
              <outline-swatch
                set="${this.set}"
                color="${e}"
              ></outline-swatch>
            </outline-column>
          `
        )}
      </outline-grid>
    `;
  }
};
(Fn.styles = [Tn]),
  s([de({ type: String })], Fn.prototype, "set", void 0),
  (Fn = s([le("outline-swatch-set")], Fn));
var Ln = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  position:relative;
  display:block;
  height:0px;
  padding-bottom:calc(9 / 16 * 100%)
}

iframe {
  position:absolute;
  top:0px;
  bottom:0px;
  left:0px;
  right:0px;
  display:block;
  height:100%;
  width:100%
}
`;
let Hn = class extends xe {
  render() {
    return V`
      <iframe
        src="https://player.vimeo.com/video/${this.videoID}"
        title="Vimeo video ${this.videoID}" 
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    `;
  }
};
(Hn.styles = [Ln]),
  s(
    [de({ type: String, attribute: "video-id", reflect: !0 })],
    Hn.prototype,
    "videoID",
    void 0
  ),
  (Hn = s([le("outline-video-vimeo")], Hn));
var jn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  position:relative;
  display:block;
  height:0px;
  padding-bottom:calc(9 / 16 * 100%)
}

iframe {
  position:absolute;
  top:0px;
  bottom:0px;
  left:0px;
  right:0px;
  display:block;
  height:100%;
  width:100%
}
`;
let Dn = class extends xe {
  render() {
    return V`
      <iframe
        src="https://www.youtube.com/embed/${this.videoID}"
        title="YouTube video ${this.videoID}"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  }
};
(Dn.styles = [jn]),
  s(
    [de({ type: String, attribute: "video-id", reflect: !0 })],
    Dn.prototype,
    "videoID",
    void 0
  ),
  (Dn = s([le("outline-video-youtube")], Dn));
var Vn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {

  height: 100%;

  place-self: stretch;

  position: relative;

  display: block;

  overflow: hidden
}

.image-tag-wrapper {

  position: absolute;

  display: inline-flex;

  flex-wrap: wrap;

  gap: 0.5rem;

  padding: 1rem
}

:host([image-rounded='true']) img {

  border-radius: 0.5rem
}

.card {

  height: 100%;

  place-self: stretch;

  align-items: stretch;

  display: flex;

  flex-direction: column
}

@media (min-width: 768px) {

  .card {

    flex-direction: row
  }
}

@media (min-width: 768px) {

  .card.image-position--top {

    flex-direction: column
  }
}

outline-heading, idb-heading {

  margin: 0px;

  font-size: var(--fs-xl);

  line-height: var(--lh-xl);

  color: var(--blue-responsible-darken-1)
}

img {

  height: 223px;

  max-height: 223px;

  width: 100%;

  max-width: 100%;

  border-radius: 0.5rem;

  object-fit: cover
}

.card-image {

  position: relative
}

@media (min-width: 768px) {

  .card-image {

    width: 48%
  }
}

.card-content-wrapper {

  display: flex;

  height: 100%;

  flex-direction: column;

  padding-top: 0.25rem;

  padding-bottom: 0.25rem
}

@media (min-width: 768px) {

  .card-content-wrapper {

    padding-top: 1.25rem;

    padding-bottom: 1.25rem
  }

  .card-content-wrapper {

    width: 52%
  }
}

.card-summary {

  overflow-wrap: break-word;

  color: var(--gray-professional-lighten-1)
}

@media (min-width: 768px) {

  .image-position--top .card-image, .image-position--top .card-content-wrapper {

    width: 100%
  }
}

.content-mode--compact .card-eyebrow, .content-mode--compact .card-title, .content-mode--compact .card-content {

  padding-top: 0.25rem;

  padding-bottom: 0.25rem
}

@media (min-width: 768px) {

  .content-mode--compact .card-eyebrow, .content-mode--compact .card-title, .content-mode--compact .card-content {

    padding-top: 0.5rem;

    padding-bottom: 0.5rem
  }
}

.content-mode--spacious {

  margin-top: 2rem;

  margin-bottom: 2rem;
}

.content-mode--spacious .card-eyebrow, .content-mode--spacious .card-title, .content-mode--spacious .card-content {

  padding-bottom: 0.5rem
}

@media (min-width: 768px) {

  .content-mode--spacious .card-eyebrow, .content-mode--spacious .card-title, .content-mode--spacious .card-content {

    padding-bottom: 1rem
  }
}

@media (min-width: 640px) {

  .content-mode--spacious .card-title {

    padding-left: 4rem;

    padding-right: 4rem
  }
}

@media (min-width: 768px) {

  .content-mode--spacious .card-title {

    padding-left: 5rem;

    padding-right: 5rem
  }
}

@media (min-width: 1024px) {

  .content-mode--spacious .card-title {

    padding-left: 7rem;

    padding-right: 7rem
  }
}

@media (min-width: 640px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {

    padding-left: 8rem;

    padding-right: 8rem
  }
}

@media (min-width: 768px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {

    padding-left: 10rem;

    padding-right: 10rem
  }
}

@media (min-width: 1024px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {

    padding-left: 13rem;

    padding-right: 13rem
  }
}

.card-eyebrow, .card-title, .card-content {

  width: 100%
}

.card-eyebrow {

  display: block
}

.outline-shadow {

  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);

  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);

  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.outline-rounded-2xl {

  border-radius: 1rem
}

.outline-bg-light-blue {

  background-color: var(--blue-responsible-lighten-5)
}

.outline-bg-blue {

  background-color: var(--blue-responsible-lighten-4)
}

.outline-bg-gray {

  background-color: var(--gray-professional-lighten-4)
}

.outline-bg-green {

  background-color: var(--green-guarantee-lighten-4)
}

.outline-bg-white {

  background-color: var(--neutral-white)
}

.outline-bg-transparent {

  background-color: var(--neutral-transparent)
}
`;
let Gn = class extends ft {};
(Gn.styles = [Vn]), (Gn = s([le("idb-blog-improving-card")], Gn));
var On = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.outline-breadcrumbs {

    font-size: var(--fs-sm);

    line-height: var(--lh-sm)
}

.breadcrumb {

    display: flex;

    align-content: center
}

.separator {

    padding-top: 1px;

    font-size: var(--fs-base);

    line-height: var(--lh-base)
}
`;
let Un = class extends pt {
  firstUpdated() {
    this.querySelectorAll("span:not(:last-of-type)").forEach((e) => {
      const t = document.createElement("outline-icon");
      t.classList.add("separator"),
        t.setAttribute("name", "arrow-right"),
        t.setAttribute("library", "lucide"),
        t.setAttribute("size", "1em"),
        e.after(t);
    });
  }
};
(Un.styles = [pt.styles, On]), (Un = s([le("idb-breadcrumbs")], Un));
var Rn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display: inline-flex;
  border-radius: 0.5rem;
  vertical-align: middle;
}

.btn {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  font-weight: var(--fw-semibold);
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  line-height: 1.5 !important;
  padding:0.5em 1em;
}

.btn idb-icon{
    font-size:1.25em;
  }

.btn idb-icon.left{
      margin-right:0.5em;
    }

.btn idb-icon.right{
      margin-left:0.5em;
    }

.btn.btn-icon{
    padding:0.625em;
  }

.btn.btn-icon idb-icon.left, .btn.btn-icon idb-icon.right {
  margin: 0px;
}

.btn[aria-disabled='true'] {
  pointer-events: none !important;
  cursor: not-allowed !important;
  -webkit-user-select: none !important;
     -moz-user-select: none !important;
          user-select: none !important;
}

.btn.primary {
  border-style: none;
  background-color: var(--blue-responsible-main);
  color: var(--neutral-white);
}

.btn.primary:hover, .btn.primary:focus {
  background-color: var(--blue-responsible-darken-2);
}

.btn.primary:hover, .btn.primary:focus {
  color: var(--neutral-white);
}

.primary[aria-disabled='true'] {
  background-color: var(--gray-cosmopolitan-lighten-2) !important;
  color: var(--neutral-white) !important;
}

.btn.secondary {
  background-color: var(--neutral-white);
  color: var(--blue-responsible-main);
  border:1px solid var(--blue-responsible-main);
}

.btn.secondary:hover, .btn.secondary:focus {
  background-color: var(--blue-responsible-lighten-3);
}

.btn.secondary:hover, .btn.secondary:focus {
  color: var(--blue-responsible-darken-2);
}

.secondary[aria-disabled='true'] {
  background-color: var(--gray-cosmopolitan-lighten-5) !important;
  color: var(--gray-professional-lighten-2) !important;
  border:1px solid var(--gray-professional-lighten-2);
}

.btn.small {
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
}

.btn.medium {
  font-size: var(--fs-base);
  line-height: var(--lh-base);
}

.btn.large {
  font-size: var(--fs-lg);
  line-height: var(--lh-lg);
}

.btn.none {
  border-width: 0px !important;
  background-color: var(--neutral-transparent) !important;
  font-size: var(--fs-base) !important;
  line-height: var(--lh-base) !important;
  font-weight: var(--fw-medium) !important;
  color: var(--blue-responsible-darken-2) !important;
}

.btn.none:hover, .btn.none:focus {
  color: var(--blue-responsible-main) !important;
}

.btn.none:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

.btn.none:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color) !important;
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color) !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000 !important;
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000) !important;
}

.btn.none:focus {
  --tw-ring-color: var(--blue-responsible-main) !important;
}

.btn.none[aria-disabled='true'] {
  color: var(--gray-professional-lighten-2) !important;
}

.btn.none[aria-disabled='true'] {
  -webkit-text-decoration-line: none !important;
          text-decoration-line: none !important;
}

.btn.none[aria-disabled='true']:focus {
  color: var(--gray-professional-main) !important;
}
`,
  In = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  display:inline-block;
  font-size:1.35rem
}

svg {
  display:block;
  line-height:0
}
`;
const Nn = [
  "blue-responsible-darken-1",
  "blue-responsible-darken-2",
  "blue-responsible-main",
  "currentColor",
];
let Pn = class extends Ct {
  constructor() {
    super(...arguments), (this.color = "currentColor");
  }
};
(Pn.styles = [In]),
  s([de({ type: String, attribute: "color" })], Pn.prototype, "color", void 0),
  (Pn = s([le("idb-icon")], Pn));
let Wn = class extends gt {
  constructor() {
    super(...arguments),
      (this.buttonTarget = "_self"),
      (this.buttonVariant = "primary"),
      (this.buttonSize = "medium"),
      (this.iconLeft = !1),
      (this.iconRight = !1),
      (this.isDisabled = !1),
      (this.iconOnly = !1);
  }
  buttonTemplate() {
    return V`
      ${
        this.iconLeft
          ? V`<idb-icon class="left" icon="${this.iconLeft}" />`
          : null
      }
      <slot></slot>
      ${
        this.iconRight
          ? V`<idb-icon class="right" icon="${this.iconRight}" />`
          : null
      }
    `;
  }
  render() {
    return this.buttonUrl
      ? V` <a
          class="btn ${this.buttonVariant} ${this.buttonSize} ${
          this.iconOnly ? "btn-icon" : ""
        }"
          href=${this.buttonUrl}
          target=${this.buttonTarget}
          aria-label="${this.buttonLabel}"
          aria-disabled=${this.isDisabled}
        >
          ${this.buttonTemplate()}
        </a>`
      : V`<button
          class="btn ${this.buttonVariant} ${this.buttonSize}"
          aria-disabled="${this.isDisabled}"
          aria-label="${this.buttonLabel}"
          .onclick="${this.onClick}"
          .onkeyup="${this.onKeyUp}"
        >
          ${this.buttonTemplate()}
        </button> `;
  }
  updated() {
    this.hasAttribute("is-disabled")
      ? this.setAttribute("aria-disabled", "true")
      : this.setAttribute("aria-disabled", "false");
  }
};
(Wn.styles = [Rn]),
  s(
    [de({ type: String, attribute: "button-url" })],
    Wn.prototype,
    "buttonUrl",
    void 0
  ),
  s(
    [de({ type: String, attribute: "button-label" })],
    Wn.prototype,
    "buttonLabel",
    void 0
  ),
  s(
    [de({ type: String, attribute: "button-target" })],
    Wn.prototype,
    "buttonTarget",
    void 0
  ),
  s(
    [de({ type: String, attribute: "button-variant" })],
    Wn.prototype,
    "buttonVariant",
    void 0
  ),
  s(
    [de({ type: String, attribute: "button-size" })],
    Wn.prototype,
    "buttonSize",
    void 0
  ),
  s(
    [de({ type: String, attribute: "icon-left" })],
    Wn.prototype,
    "iconLeft",
    void 0
  ),
  s(
    [de({ type: String, attribute: "icon-right" })],
    Wn.prototype,
    "iconRight",
    void 0
  ),
  s(
    [de({ type: Boolean, attribute: "is-disabled" })],
    Wn.prototype,
    "isDisabled",
    void 0
  ),
  s(
    [de({ type: Boolean, attribute: "icon-only" })],
    Wn.prototype,
    "iconOnly",
    void 0
  ),
  s([de()], Wn.prototype, "onClick", void 0),
  s([de()], Wn.prototype, "onKeyUp", void 0),
  (Wn = s([le("idb-button")], Wn));
var Xn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:block;
}

:host([full-bleed]) {
  max-width: 100%;
}

:host([container-align]), :host([container-align='center']) {
  margin-left: auto;
  margin-right: auto;
}

:host([container-align='left']) {
  margin-left: auto;
  margin-right: auto;
  margin-left: 0px;
}

:host([container-align='right']) {
  margin-left: auto;
  margin-right: auto;
  margin-right: 0px;
}

:host([row-background-color='transparent']) {
  border-radius: 0.5rem;
  background-color: var(--neutral-transparent);
  padding: 2rem;
}

:host([row-background-color='white']) {
  border-radius: 0.5rem;
  background-color: var(--neutral-white);
  padding: 2rem;
}

:host([row-background-color='blue']) {
  border-radius: 0.5rem;
  background-color: var(--blue-responsible-lighten-4);
  padding: 2rem;
}

:host([row-background-color='light-blue']) {
  border-radius: 0.5rem;
  background-color: var(--blue-responsible-lighten-5);
  padding: 2rem;
}

:host([row-background-color='gray']) {
  border-radius: 0.5rem;
  background-color: var(--gray-professional-lighten-4);
  padding: 2rem;
}

:host([row-background-color='green']) {
  border-radius: 0.5rem;
  background-color: var(--green-guarantee-lighten-4);
  padding: 2rem;
}
`;
let Yn = class extends xe {
  constructor() {
    super(...arguments),
      (this.slots = new l(this, !1)),
      (this.columnsLg = 4),
      (this.columnsMd = 3),
      (this.columnsSm = 2),
      (this.columnsDefault = 2),
      (this.gapSize = "small"),
      (this.fullBleed = !1),
      (this.containerAlign = "center"),
      (this.observerMethod = () => {
        this.setSlots();
      }),
      (this.columnTemplate = () => {
        const e = this.calculateColumns(this.columnsLg),
          t = this.calculateColumns(this.columnsMd),
          r = this.calculateColumns(this.columnsSm),
          n = this.calculateColumns(this.columnsDefault);
        let i = 1;
        const a = [];
        for (; i <= this.childElementCount; )
          a.push(V`
          <outline-column
            col-span-default=${ye(n)}
            col-span-sm=${ye(r)}
            col-span-md=${ye(t)}
            col-span-lg=${ye(e)}
            content-align="top"
          >
            <slot name="grid-module-${i}"></slot>
          </outline-column>
        `),
            i++;
        return a;
      }),
      (this.setSlots = () => {
        let e = 0;
        for (; e <= this.childElementCount; )
          this.children[e] &&
            this.children[e].setAttribute("slot", `grid-module-${e + 1}`),
            e++;
        this.requestUpdate();
      }),
      (this.calculateColumns = (e) => {
        let t;
        switch (e) {
          case 1:
            t = 12;
            break;
          case 2:
            t = 6;
            break;
          case 3:
            t = 4;
            break;
          case 4:
            t = 3;
        }
        return t;
      });
  }
  connectedCallback() {
    super.connectedCallback(),
      (this.observer = new MutationObserver(this.observerMethod)),
      this.observer.observe(this, { childList: !0 }),
      this.setSlots();
  }
  firstUpdated() {}
  disconnectedCallback() {
    this.observer.disconnect();
  }
  render() {
    return V`
      <outline-grid gap-size="${this.gapSize}" ?full-bleed=${
      this.fullBleed
    } container-align="${this.containerAlign}">
        ${this.columnTemplate()}
      </outline-grid>
    `;
  }
};
(Yn.styles = [Xn]),
  s(
    [de({ type: Number, attribute: "columns-lg" })],
    Yn.prototype,
    "columnsLg",
    void 0
  ),
  s(
    [de({ type: Number, attribute: "columns-md" })],
    Yn.prototype,
    "columnsMd",
    void 0
  ),
  s(
    [de({ type: Number, attribute: "columns-sm" })],
    Yn.prototype,
    "columnsSm",
    void 0
  ),
  s(
    [de({ type: Number, attribute: "columns-default" })],
    Yn.prototype,
    "columnsDefault",
    void 0
  ),
  s(
    [de({ type: String, attribute: "gap-size" })],
    Yn.prototype,
    "gapSize",
    void 0
  ),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "full-bleed" })],
    Yn.prototype,
    "fullBleed",
    void 0
  ),
  s(
    [de({ attribute: "row-background-color" })],
    Yn.prototype,
    "rowBackgroundColor",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "container-align" })],
    Yn.prototype,
    "containerAlign",
    void 0
  ),
  (Yn = s([le("idb-card-grid")], Yn));
var Kn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {

  height: 100%;

  place-self: stretch;

  position: relative;

  display: block;

  overflow: hidden
}

:host([image-rounded='true']) img {

  border-radius: 0.5rem
}

.card {

  height: 100%;

  place-self: stretch;

  align-items: stretch;

  display: flex;

  flex-direction: column
}

@media (min-width: 768px) {

  .card {

    flex-direction: row
  }
}

@media (min-width: 768px) {

  .card.image-position--top {

    flex-direction: column
  }
}

outline-heading, idb-heading {

  color: var(--blue-responsible-darken-1)
}

.card-image {

  position: relative;
}

.card-image img {

  height: 100%
}

.card-image img {

  max-height: 100%
}

.card-image img {

  width: 100%
}

.card-image img {

  max-width: 100%
}

.card-image img {

  border-radius: 0.5rem
}

.card-image img {

  object-fit: cover
}

@media (min-width: 768px) {

  .card-image {

    width: 48%
  }
}

.card-content-wrapper {

  display: flex;

  height: 100%;

  flex-direction: column;

  padding: 1rem
}

@media (min-width: 768px) {

  .card-content-wrapper {

    padding: 3rem
  }

  .card-content-wrapper {

    width: 52%
  }
}

.card-content {

  color: var(--gray-professional-lighten-1)
}

.card-cta {

  display: flex;

  flex-grow: 1;

  place-items: center
}

@media (min-width: 768px) {

  .image-position--top .card-image, .image-position--top .card-content-wrapper {

    width: 100%
  }
}

@media (min-width: 768px) {

  .image-position--left .card-image {

    order: 1
  }
}

@media (min-width: 768px) {

  .image-position--left .card-content-wrapper {

    order: 2
  }
}

@media (min-width: 768px) {

  .image-position--right .card-image {

    order: 2
  }
}

@media (min-width: 768px) {

  .image-position--right .card-content-wrapper {

    order: 1
  }
}

:host([embedded-within-alt-container='true']) .image-position--right .card-content-wrapper {

  padding-left: 1rem
}

@media (min-width: 768px) {

  :host([embedded-within-alt-container='true']) .image-position--right .card-content-wrapper {

    padding-left: 0.5rem
  }
}

@media (min-width: 1440px) {

  :host([embedded-within-alt-container='true']) .image-position--right .card-content-wrapper {

    padding-left: 0px
  }
}

.content-alignment--left {

  align-items: flex-start;

  text-align: left
}

.content-alignment--center {

  align-items: center;

  text-align: center
}

.content-alignment--right {

  align-items: flex-end;

  text-align: right
}

.cta-alignment--left {

  place-self: start
}

.cta-alignment--center {

  place-self: center
}

.cta-alignment--right {

  place-self: end
}

.title-alignment--left, .eyebrow-alignment--left {

  text-align: left
}

.title-alignment--center, .eyebrow-alignment--center {

  text-align: center
}

.title-alignment--right, .eyebrow-alignment--right {

  text-align: right
}

.content-mode--compact .card-eyebrow, .content-mode--compact .card-title, .content-mode--compact .card-content {

  padding-top: 0.25rem;

  padding-bottom: 0.25rem
}

@media (min-width: 768px) {

  .content-mode--compact .card-eyebrow, .content-mode--compact .card-title, .content-mode--compact .card-content {

    padding-top: 0.5rem;

    padding-bottom: 0.5rem
  }
}

.content-mode--spacious {

  margin-top: 2rem;

  margin-bottom: 2rem;
}

.content-mode--spacious .card-eyebrow, .content-mode--spacious .card-title, .content-mode--spacious .card-content {

  padding-bottom: 0.5rem
}

@media (min-width: 768px) {

  .content-mode--spacious .card-eyebrow, .content-mode--spacious .card-title, .content-mode--spacious .card-content {

    padding-bottom: 1rem
  }
}

@media (min-width: 640px) {

  .content-mode--spacious .card-title {

    padding-left: 4rem;

    padding-right: 4rem
  }
}

@media (min-width: 768px) {

  .content-mode--spacious .card-title {

    padding-left: 5rem;

    padding-right: 5rem
  }
}

@media (min-width: 1024px) {

  .content-mode--spacious .card-title {

    padding-left: 7rem;

    padding-right: 7rem
  }
}

@media (min-width: 640px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {

    padding-left: 8rem;

    padding-right: 8rem
  }
}

@media (min-width: 768px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {

    padding-left: 10rem;

    padding-right: 10rem
  }
}

@media (min-width: 1024px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {

    padding-left: 13rem;

    padding-right: 13rem
  }
}

.card-eyebrow, .card-title, .card-content {

  width: 100%
}

.card-eyebrow {

  display: block
}

.outline-shadow {

  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);

  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);

  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);

  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.outline-rounded-2xl {

  border-radius: 1rem
}

.outline-bg-light-blue {

  background-color: var(--blue-responsible-lighten-5)
}

.outline-bg-blue {

  background-color: var(--blue-responsible-lighten-4)
}

.outline-bg-gray {

  background-color: var(--gray-professional-lighten-4)
}

.outline-bg-green {

  background-color: var(--green-guarantee-lighten-4)
}

.outline-bg-white {

  background-color: var(--neutral-white)
}

.outline-bg-transparent {

  background-color: var(--neutral-transparent)
}
`;
let Jn = class extends ft {
  constructor() {
    super(...arguments), (this.image = !1), (this.embedded = !1);
  }
};
(Jn.styles = [Kn]),
  s(
    [de({ type: Boolean, attribute: "image-rounded" })],
    Jn.prototype,
    "image",
    void 0
  ),
  s(
    [de({ type: Boolean, attribute: "embedded-within-alt-container" })],
    Jn.prototype,
    "embedded",
    void 0
  ),
  (Jn = s([le("idb-content-card")], Jn));
var Qn = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  height: 100%;
  place-self: stretch;
  position: relative;
  display: block;
  overflow: hidden
}

.image-tag-wrapper {
  position: absolute;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem
}

:host([image-rounded='true']) img {
  border-radius: 0.5rem
}

.card {
  height: 100%;
  place-self: stretch;
  border-radius: 0.5rem;
  padding: 0.5rem
}

@media (min-width: 768px) {

  .card {
    padding: 1rem
  }
}

.card {
  align-items: stretch;
  display: flex;
  flex-direction: column
}

@media (min-width: 768px) {

  .card {
    flex-direction: row
  }
}

.card{
  box-shadow:0px 4px 14px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {

  .card.image-position--top {
    flex-direction: column
  }
}

outline-heading, idb-heading {
  margin-bottom: 0px;
  font-size: var(--fs-xl);
  line-height: var(--lh-xl);
  color: var(--blue-responsible-darken-1)
}

h2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0px !important;
  padding-top: 2.5rem !important
}

img {
  height: 137px;
  max-height: 137px;
  width: 100%;
  max-width: 100%;
  border-radius: 0.5rem;
  object-fit: cover
}

.card-image {
  position: relative
}

@media (min-width: 768px) {

  .card-image {
    width: 48%
  }
}

.card-content-wrapper {
  display: flex;
  height: 100%;
  flex-direction: column
}

@media (min-width: 768px) {

  .card-content-wrapper {
    width: 52%
  }
}

.card-summary {
  color: var(--gray-professional-lighten-1)
}

@media (min-width: 768px) {

  .image-position--top .card-image, .image-position--top .card-content-wrapper {
    width: 100%
  }
}

:host([embedded-within-alt-container='true']) .image-position--right .card-content-wrapper {
  padding-left: 1rem
}

@media (min-width: 768px) {

  :host([embedded-within-alt-container='true']) .image-position--right .card-content-wrapper {
    padding-left: 0.5rem
  }
}

@media (min-width: 1440px) {

  :host([embedded-within-alt-container='true']) .image-position--right .card-content-wrapper {
    padding-left: 0px
  }
}

.content-mode--compact .card-eyebrow, .content-mode--compact .card-content {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem
}

@media (min-width: 768px) {

  .content-mode--compact .card-eyebrow, .content-mode--compact .card-content {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
  }
}

.content-mode--spacious {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.content-mode--spacious .card-eyebrow, .content-mode--spacious .card-title, .content-mode--spacious .card-content {
  padding-bottom: 0.5rem
}

@media (min-width: 768px) {

  .content-mode--spacious .card-eyebrow, .content-mode--spacious .card-title, .content-mode--spacious .card-content {
    padding-bottom: 1rem
  }
}

@media (min-width: 640px) {

  .content-mode--spacious .card-title {
    padding-left: 4rem;
    padding-right: 4rem
  }
}

@media (min-width: 768px) {

  .content-mode--spacious .card-title {
    padding-left: 5rem;
    padding-right: 5rem
  }
}

@media (min-width: 1024px) {

  .content-mode--spacious .card-title {
    padding-left: 7rem;
    padding-right: 7rem
  }
}

@media (min-width: 640px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {
    padding-left: 8rem;
    padding-right: 8rem
  }
}

@media (min-width: 768px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {
    padding-left: 10rem;
    padding-right: 10rem
  }
}

@media (min-width: 1024px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {
    padding-left: 13rem;
    padding-right: 13rem
  }
}

.card-eyebrow, .card-title, .card-content {
  width: 100%
}

.card-eyebrow {
  display: block
}

.outline-shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.outline-rounded-2xl {
  border-radius: 1rem
}

.outline-bg-light-blue {
  background-color: var(--blue-responsible-lighten-5)
}

.outline-bg-blue {
  background-color: var(--blue-responsible-lighten-4)
}

.outline-bg-gray {
  background-color: var(--gray-professional-lighten-4)
}

.outline-bg-green {
  background-color: var(--green-guarantee-lighten-4)
}

.outline-bg-white {
  background-color: var(--neutral-white)
}

.outline-bg-transparent {
  background-color: var(--neutral-transparent)
}
`;
let ei = class extends Gn {};
(ei.styles = [Qn]), (ei = s([le("idb-course-card")], ei));
var ti = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  display: block;
}

.wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0.5rem;
  background-color: var(--green-guarantee-lighten-3);
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  color: var(--green-guarantee-darken-2);
}

@media (min-width: 768px) {

  .wrapper {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {

  .wrapper {
    padding: 5rem;
  }
}

[slot='background'] {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  opacity: 0.1;
}

[slot='background'] img {
  display: block;
}

[slot='background'] img {
  height: 100%;
}

[slot='background'] img {
  width: 100%;
}

[slot='background'] img {
  object-fit: cover;
}

.content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

@media (min-width: 768px) {

  .content {
    margin-right: 1.5rem;
  }

  .content {
    flex-wrap: nowrap;
  }

  .content {
    align-items: center;
  }

  .content {
    justify-content: flex-start;
  }

  .content {
    text-align: left;
  }
}

[slot='content'] {
  margin-right: 1.5rem;
}

[slot='cta'] {
  white-space: nowrap;
}

idb-icon{
  margin-top:3px;
  margin-left:10px;
}
`;
let ri = class extends xe {
  constructor() {
    super(...arguments), (this.slots = new l(this, !0));
  }
  render() {
    return V`
      <outline-container x-padding>
        <div class="wrapper">
          <slot name="background"></slot>
          <div class="content">
           <idb-heading level="h2" level-style="${this.fontWeight}" level-size="2xl">
            <slot name="content"></slot>
           </idb-heading>
           <idb-button button-url="#"><slot name="cta"></slot><idb-icon icon="arrow-right" color="currentColor"></idb-icon></idb-button>
          </div>
        </div>
      </outline-container>
    `;
  }
};
(ri.styles = [ti]),
  s([de({ attribute: "title-weight" })], ri.prototype, "fontWeight", void 0),
  (ri = s([le("idb-cta-banner")], ri));
var ni = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  height: 100%;
}

.idb-document-card {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5rem;
  padding: 1rem;
  word-break:break-word;
}

.idb-document-card:hover{
  cursor:pointer;
}

.idb-document-card-bg-gray {
  background-color: var(--gray-professional-lighten-4);
}

.idb-document-card-bg-white {
  background-color: var(--neutral-white);
}

.header {
  display: flex;
  gap:0.3rem;
}

.header a {
  margin-bottom: -1rem;
  overflow-wrap: break-word;
  color: var(--blue-responsible-darken-2);
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
}

@media (min-width: 480px) {

  .header a {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.header a:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

::slotted([slot='icon']) {
  color: var(--green-guarantee-lighten-2);
}

.titles {
  flex-wrap: wrap;
}

@media (min-width: 480px) {

  .titles {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

::slotted([slot='heading']) {
  flex-wrap: wrap;
}

@media (min-width: 480px) {

  ::slotted([slot='heading']) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

::slotted([slot='heading']){
  position:relative;
  z-index:2;
}

::slotted([slot='subtitle']) {
  margin-bottom: 1rem;
  font-weight: var(--fw-semibold);
  text-transform: uppercase;
  color: var(--gray-professional-lighten-1);
}

.footer a {
  display: flex;
  justify-content: flex-end;
  font-weight: var(--fw-bold);
  color: var(--blue-responsible-main);
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
  gap:0.3rem;
}

.footer .icon {
  font-weight: var(--fw-bold);
}

.footer a:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

.tooltip{
  position:relative;
  display:flex;
  cursor:pointer;
}

.tooltip-text {
  padding: 1rem;
}

.tooltip .tooltip-text {
  visibility: hidden;
  margin-left: 1rem;
  margin-right: 3rem;
  border-radius: 0.5rem;
  background-color: var(--neutral-white);
  padding: 0.5rem;
  color: var(--blue-responsible-darken-2);
  --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  text-align:center;
  position:absolute;
  z-index:4;
  top:200%;
  margin-top:30px;
  overflow:visible;
  opacity:0;
  transition:opacity 0.3s;
}

.tooltip .tooltip-text::before{
  content:'';
  position:absolute;
  bottom:100%;
  left:50%;
  margin-left:-5px;
  border-width:7px;
  border-style:solid;
  border-color:transparent transparent var(--neutral-white) transparent;
  transition:opacity 0.3s;
}

.idb-document-card:hover .tooltip-text {
  visibility: hidden;
}

@media (min-width: 480px) {

  .idb-document-card:hover .tooltip-text {
    visibility: visible;
  }
}

.idb-document-card:hover .tooltip-text{
  opacity:1;
}

.tooltip:before{
  opacity:0;
  transition:0.3s;
}

.tooltip:hover:before{
  opacity:1;
}
`,
  ii = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:block;
}

.uppercase{
  text-transform:uppercase;
}

:host([capital-style='uppercase']){
  letter-spacing:0.1em;
  text-transform:uppercase;
}

:host([capital-style='capitalize']){
  text-transform:capitalize;
}

:host([capital-style='lowercase']){
  text-transform:lowercase;
}

:host([capital-style='none']){
  text-transform:none;
}

:host([capital-style='full-width']){
  text-transform:full-width;
}

:host([capital-style='full-size-kana']){
  text-transform:full-size-kana;
}

:host([margin-size='0px']) span, :host([margin-size='0px']) p, :host([margin-size='0px']) h1, :host([margin-size='0px']) h2, :host([margin-size='0px']) h3, :host([margin-size='0px']) h4, :host([margin-size='0px']) h5, :host([margin-size='0px']) h6{
  margin:0px;
}

:host([margin-size='4px']) span, :host([margin-size='4px']) p, :host([margin-size='4px']) h1, :host([margin-size='4px']) h2, :host([margin-size='4px']) h3, :host([margin-size='4px']) h4, :host([margin-size='4px']) h5, :host([margin-size='4px']) h6{
  margin-top:0.25rem;
  margin-bottom:0.25rem;
}

:host([margin-size='8px']) span, :host([margin-size='8px']) p, :host([margin-size='8px']) h1, :host([margin-size='8px']) h2, :host([margin-size='8px']) h3, :host([margin-size='8px']) h4, :host([margin-size='8px']) h5, :host([margin-size='8px']) h6{
  margin-top:0.5rem;
  margin-bottom:0.5rem;
}

:host([margin-size='12px']) span, :host([margin-size='12px']) p, :host([margin-size='12px']) h1, :host([margin-size='12px']) h2, :host([margin-size='12px']) h3, :host([margin-size='12px']) h4, :host([margin-size='12px']) h5, :host([margin-size='12px']) h6{
  margin-top:0.75rem;
  margin-bottom:0.75rem;
}

:host([margin-size='20px']) span, :host([margin-size='20px']) p, :host([margin-size='20px']) h1, :host([margin-size='20px']) h2, :host([margin-size='20px']) h3, :host([margin-size='20px']) h4, :host([margin-size='20px']) h5, :host([margin-size='20px']) h6{
  margin-top:1.25rem;
  margin-bottom:1.25rem;
}

:host([margin-size='24px']) span, :host([margin-size='24px']) p, :host([margin-size='24px']) h1, :host([margin-size='24px']) h2, :host([margin-size='24px']) h3, :host([margin-size='24px']) h4, :host([margin-size='24px']) h5, :host([margin-size='24px']) h6{
  margin-top:1.5rem;
  margin-bottom:1.5rem;
}
`;
let ai = class extends Ht {};
(ai.styles = [Lt, ii]),
  s(
    [de({ type: String, reflect: !0, attribute: "capital-style" })],
    ai.prototype,
    "capitalStyle",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "margin-size" })],
    ai.prototype,
    "marginSize",
    void 0
  ),
  (ai = s([le("idb-heading")], ai));
let oi = class extends mt {
  constructor() {
    super(...arguments),
      (this._linkedBlockController = new e(this, () => {
        var e, t;
        return null !==
          (t =
            null === (e = this.shadowRoot) || void 0 === e
              ? void 0
              : e.querySelector(".link")) && void 0 !== t
          ? t
          : void 0;
      })),
      (this.level = "h3");
  }
  render() {
    const e = {
      [`idb-document-card-bg-${this.backgroundColor}`]:
        void 0 !== this.backgroundColor,
      "idb-document-card": !0,
    };
    return V`
      <section class="${Ae(e)}">
        <div class="tooltip">
          <span class="tooltip-text"><slot name="tooltip-text"></slot></span>
        </div>
        
        <div class="header">
          ${this._conditionalSlotTemplate({ slotName: "icon" })}
            <div class="titles">
            <idb-heading level="${
              this.level
            }" level-size="xl" level-style="bold"
              ><a class="link" href="${this.url}" target="_blank"
                >

                ${this._conditionalSlotTemplate({ slotName: "heading" })}</a
              ></idb-heading
            >
              ${this._conditionalSlotTemplate({ slotName: "subtitle" })}
            </div>
        </div>
        
        <div class="footer">
         <a class="link" href="${this.url}" target="_blank">
          ${this._conditionalSlotTemplate({
            slotName: "cta",
          })} <idb-icon class="icon" icon="external-link"></idb-icon
          ></a>
        </div>
      </section>
    `;
  }
};
(oi.styles = [ni]),
  s(
    [de({ type: String, reflect: !0, attribute: "url" })],
    oi.prototype,
    "url",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "level" })],
    oi.prototype,
    "level",
    void 0
  ),
  s(
    [de({ attribute: "background-color" })],
    oi.prototype,
    "backgroundColor",
    void 0
  ),
  (oi = s([le("idb-document-card")], oi));
var li = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  height: 100%;
  place-self: stretch;
  position: relative;
  display: block;
  overflow: hidden
}

.image-tag-wrapper {
  position: absolute;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem
}

:host([image-rounded='true']) img {
  border-radius: 0.5rem
}

.card {
  height: 100%;
  place-self: stretch;
  border-radius: 0.5rem;
  padding: 0.5rem
}

@media (min-width: 768px) {

  .card {
    padding: 1rem
  }
}

.card {
  align-items: stretch;
  display: flex;
  flex-direction: column
}

@media (min-width: 768px) {

  .card {
    flex-direction: row
  }
}

.card{
  box-shadow:0px 4px 14px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {

  .card.image-position--top {
    flex-direction: column
  }
}

outline-heading, idb-heading {
  margin-bottom: 0px;
  font-size: var(--fs-xl);
  line-height: var(--lh-xl);
  color: var(--blue-responsible-darken-1)
}

h2 {
  margin-top: 0.5rem !important;
  margin-bottom: 0px !important;
  padding-top: 2.5rem !important
}

img {
  height: 231px;
  max-height: 231px;
  width: 100%;
  max-width: 100%;
  border-radius: 0.5rem;
  object-fit: cover
}

.card-image {
  position: relative
}

@media (min-width: 768px) {

  .card-image {
    width: 48%
  }
}

.card-content-wrapper {
  display: flex;
  height: 100%;
  flex-direction: column
}

@media (min-width: 768px) {

  .card-content-wrapper {
    width: 52%
  }
}

.card-summary {
  color: var(--gray-professional-lighten-1)
}

@media (min-width: 768px) {

  .image-position--top .card-image, .image-position--top .card-content-wrapper {
    width: 100%
  }
}

:host([embedded-within-alt-container='true']) .image-position--right .card-content-wrapper {
  padding-left: 1rem
}

@media (min-width: 768px) {

  :host([embedded-within-alt-container='true']) .image-position--right .card-content-wrapper {
    padding-left: 0.5rem
  }
}

@media (min-width: 1440px) {

  :host([embedded-within-alt-container='true']) .image-position--right .card-content-wrapper {
    padding-left: 0px
  }
}

.content-mode--compact .card-eyebrow, .content-mode--compact .card-content {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem
}

@media (min-width: 768px) {

  .content-mode--compact .card-eyebrow, .content-mode--compact .card-content {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
  }
}

.content-mode--spacious {
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.content-mode--spacious .card-eyebrow, .content-mode--spacious .card-title, .content-mode--spacious .card-content {
  padding-bottom: 0.5rem
}

@media (min-width: 768px) {

  .content-mode--spacious .card-eyebrow, .content-mode--spacious .card-title, .content-mode--spacious .card-content {
    padding-bottom: 1rem
  }
}

@media (min-width: 640px) {

  .content-mode--spacious .card-title {
    padding-left: 4rem;
    padding-right: 4rem
  }
}

@media (min-width: 768px) {

  .content-mode--spacious .card-title {
    padding-left: 5rem;
    padding-right: 5rem
  }
}

@media (min-width: 1024px) {

  .content-mode--spacious .card-title {
    padding-left: 7rem;
    padding-right: 7rem
  }
}

@media (min-width: 640px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {
    padding-left: 8rem;
    padding-right: 8rem
  }
}

@media (min-width: 768px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {
    padding-left: 10rem;
    padding-right: 10rem
  }
}

@media (min-width: 1024px) {

  .content-mode--spacious .card-summary, .content-mode--spacious .card-content {
    padding-left: 13rem;
    padding-right: 13rem
  }
}

.card-eyebrow, .card-title, .card-content {
  width: 100%
}

.card-eyebrow {
  display: block
}

.outline-shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}

.outline-rounded-2xl {
  border-radius: 1rem
}

.outline-bg-light-blue {
  background-color: var(--blue-responsible-lighten-5)
}

.outline-bg-blue {
  background-color: var(--blue-responsible-lighten-4)
}

.outline-bg-gray {
  background-color: var(--gray-professional-lighten-4)
}

.outline-bg-green {
  background-color: var(--green-guarantee-lighten-4)
}

.outline-bg-white {
  background-color: var(--neutral-white)
}

.outline-bg-transparent {
  background-color: var(--neutral-transparent)
}
`;
let si = class extends ei {};
(si.styles = [li]), (si = s([le("idb-events-card")], si));
var di = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.footer-navigation {

    background-color: var(--blue-responsible-lighten-5);

    color: var(--blue-responsible-main)
}

.footer-navigation.mobile {

    display: block;

    grid-template-columns: repeat(9, minmax(0, 1fr));

    grid-template-rows: repeat(3, minmax(0, 1fr));

    background-color: var(--neutral-white);

    text-align: center
}

.footer-bottom--wrapper {

    background-color: var(--blue-responsible-main);

    padding-top: 1.25rem;

    padding-bottom: 1.25rem;

    padding-left: 1.25rem;

    padding-right: 1.25rem;

    color: var(--cyan-near-lighten-5)
}

.footer-bottom--content {

    display: flex;

    flex-direction: column;

    justify-content: center;

    padding-left: 1rem;

    padding-right: 1rem;

    text-align: center
}

@media (min-width: 1024px) {

    .footer-bottom--content {

        flex-direction: row
    }

    .footer-bottom--content {

        justify-content: space-between
    }

    .footer-bottom--content {

        padding-left: 5rem;

        padding-right: 5rem
    }
}

.footer-social {

    margin-left: auto;

    margin-right: auto;

    margin-bottom: 5rem;

    display: flex;

    flex-grow: 0;

    flex-direction: row
}

@media (min-width: 1024px) {

    .footer-social {

        margin-left: 0px;

        margin-right: 0px
    }

    .footer-social {

        margin-bottom: 0px
    }
}

.footer-logos {

    margin-left: auto;

    margin-right: auto;

    display: flex;

    flex-direction: row
}

@media (min-width: 1024px) {

    .footer-logos {

        margin-left: 0px;

        margin-right: 0px
    }

    .footer-logos {

        margin-bottom: 0px
    }
}
`,
  ci = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  font-size: var(--fs-base);
  line-height: var(--lh-base);
}

ul {
  margin: 0px;
  display: flex;
  list-style-type: none;
  padding: 0px;
}

.header-utility {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.header-utility ul li {
  margin: 0px;
}

.header-utility ul li {
  margin-right: 1.5rem;
}

.header-utility ul li {
  padding: 0px;
}

@media (min-width: 1024px) {

  .header-utility ul li {
    margin-right: 2.5rem;
  }
}

.header-utility a{
    --outline-link-color-default:var(--blue-responsible-darken-2);
    --outline-link-color-hover:var(--blue-responsible-darken-1);
    --outline-link-color-focus:var(--blue-responsible-darken-1);
  }

@media (min-width: 1024px) {

  .footer-utility {
    display: flex;
  }

  .footer-utility {
    flex-direction: row;
  }

  .footer-utility {
    place-content: center;
  }

  .footer-utility {
    justify-content: space-around;
  }
}

.footer-utility ul {
  flex-direction: column;
}

@media (min-width: 1024px) {

  .footer-utility ul {
    flex-direction: row;
  }
}

.footer-utility ul li {
  margin-top: 0px;
  margin-bottom: 0px;
}

.footer-utility ul li {
  margin-left: 0px;
  margin-right: 0px;
}

@media (min-width: 1024px) {

  .footer-utility ul li {
    margin-right: 2rem;
  }
}

.footer-utility ul li:last-of-type {
  margin-right: 0px;
}

.footer-utility ul li a {
  display: block;
}

.footer-utility ul li a {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.footer-utility ul li a {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

@media (min-width: 1024px) {

  .footer-utility ul li a {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}

@media (min-width: 1024px) {

  .footer-utility ul li a {
    padding-left: 0px;
    padding-right: 0px;
  }
}

a {
  color: var(--blue-responsible-darken-2);
}

a:hover {
  color: var(--blue-responsible-darken-1) !important;
}

@media screen and (max-width: 1024px){
    .footer-utility ul {
    display: grid;
  }
    .footer-utility ul {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
    .footer-utility ul {
    gap: 0px;
  }

      .footer-utility ul li {
    margin-top: 0px;
    margin-bottom: 0px;
  }

      .footer-utility ul li {
    margin-left: 0px;
    margin-right: 0px;
  }

      .footer-utility ul li {
    border-width: 2px;
  }

      .footer-utility ul li {
    border-style: solid;
  }

      .footer-utility ul li {
    border-color: var(--gray-professional-lighten-4);
  }

      .footer-utility ul li{
        --tw-divide-y-reverse:0;
        border-top-width:calc(2px * calc(1 - var(--tw-divide-y-reverse)));
        border-bottom-width:calc(2px * var(--tw-divide-y-reverse));
      }

      .footer-utility ul li:nth-child(n - 0) {
    grid-column-start: 1;
  }

      .footer-utility ul li:nth-child(n - 0) {
    grid-column-end: 13;
  }

      .footer-utility ul li:nth-child(1) {
    grid-column-start: 1;
  }

      .footer-utility ul li:nth-child(1) {
    grid-column-end: 5;
  }

      .footer-utility ul li:nth-child(2) {
    grid-column-start: 5;
  }

      .footer-utility ul li:nth-child(2) {
    grid-column-end: 9;
  }

      .footer-utility ul li:nth-child(3) {
    grid-column-start: 9;
  }

      .footer-utility ul li:nth-child(3) {
    grid-column-end: 13;
  }

      .footer-utility ul li:nth-child(4) {
    grid-column-start: 1;
  }

      .footer-utility ul li:nth-child(4) {
    grid-column-end: 13;
  }

      .footer-utility ul li:nth-child(5) {
    grid-column-start: 1;
  }

      .footer-utility ul li:nth-child(5) {
    grid-column-end: 7;
  }

      .footer-utility ul li:nth-child(6) {
    grid-column-start: 7;
  }

      .footer-utility ul li:nth-child(6) {
    grid-column-end: 13;
  }

      .footer-utility ul li:nth-child(7) {
    grid-column-start: 1;
  }

      .footer-utility ul li:nth-child(7) {
    grid-column-end: 13;
  }

      .footer-utility ul li:nth-child(8) {
    grid-column-start: 1;
  }

      .footer-utility ul li:nth-child(8) {
    grid-column-end: 7;
  }

      .footer-utility ul li:nth-child(9) {
    grid-column-start: 7;
  }

      .footer-utility ul li:nth-child(9) {
    grid-column-end: 13;
  }
}
`;
let pi = class extends xe {
  constructor() {
    super(...arguments),
      (this.slots = new l(this, !0)),
      (this.variant = "header");
  }
  render() {
    return V`<div class="${this.variant}-utility"><slot></slot></div>`;
  }
};
(pi.styles = [ci]),
  s(
    [de({ type: String, attribute: "variant" })],
    pi.prototype,
    "variant",
    void 0
  ),
  (pi = s([le("idb-utility-menu")], pi));
var hi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {

  display: flex;

  flex-direction: row
}

outline-link {

  margin-right: 1rem;
}

outline-link svg {

  color: var(--neutral-white)
}

outline-link:hover svg, outline-link:focus svg {

  color: var(--gray-professional-lighten-2)
}
`;
let gi = class extends xe {
  constructor() {
    super(...arguments),
      (this.slots = new l(this, !1)),
      (this.icons = {
        facebook:
          '\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M10.02 23.88C4.32 22.86 0 17.94 0 12 0 5.4 5.4 0 12 0s12 5.4 12 12c0 5.94-4.32 10.86-10.02 11.88l-.66-.54h-2.64l-.66.54Z" fill="#308144"/>\n      <path d="M10.02 23.88C4.32 22.86 0 17.94 0 12 0 5.4 5.4 0 12 0s12 5.4 12 12c0 5.94-4.32 10.86-10.02 11.88l-.66-.54h-2.64l-.66.54Z" fill="#fff" fill-opacity=".88"/>\n      <path d="m16.68 15.36.54-3.36h-3.18V9.66c0-.96.36-1.68 1.8-1.68h1.56V4.92c-.84-.12-1.8-.24-2.64-.24-2.76 0-4.68 1.68-4.68 4.68V12h-3v3.36h3v8.46a11.048 11.048 0 0 0 3.96 0v-8.46h2.64Z" fill="#4BA6DE"/>\n      <path d="m16.68 15.36.54-3.36h-3.18V9.66c0-.96.36-1.68 1.8-1.68h1.56V4.92c-.84-.12-1.8-.24-2.64-.24-2.76 0-4.68 1.68-4.68 4.68V12h-3v3.36h3v8.46a11.048 11.048 0 0 0 3.96 0v-8.46h2.64Z" fill="#000" fill-opacity=".52"/>\n    </svg>\n  ',
        twitter:
          '\n    <svg width="24" height="24" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M7.548 20.25c9.057 0 14.01-7.79 14.01-14.545 0-.221-.005-.442-.014-.66A10.235 10.235 0 0 0 24 2.396a9.537 9.537 0 0 1-2.828.805A5.102 5.102 0 0 0 23.338.374a9.658 9.658 0 0 1-3.127 1.241A4.836 4.836 0 0 0 16.617 0c-2.72 0-4.925 2.29-4.925 5.111 0 .402.044.792.128 1.166C7.728 6.063 4.1 4.029 1.67.936a5.249 5.249 0 0 0-.667 2.57c0 1.773.87 3.339 2.192 4.255a4.751 4.751 0 0 1-2.23-.64l-.001.065c0 2.476 1.697 4.543 3.95 5.012a4.765 4.765 0 0 1-2.224.087c.627 2.032 2.445 3.51 4.6 3.551A9.65 9.65 0 0 1 0 17.953a13.568 13.568 0 0 0 7.548 2.297" fill="#308144"/>\n      <path d="M7.548 20.25c9.057 0 14.01-7.79 14.01-14.545 0-.221-.005-.442-.014-.66A10.235 10.235 0 0 0 24 2.396a9.537 9.537 0 0 1-2.828.805A5.102 5.102 0 0 0 23.338.374a9.658 9.658 0 0 1-3.127 1.241A4.836 4.836 0 0 0 16.617 0c-2.72 0-4.925 2.29-4.925 5.111 0 .402.044.792.128 1.166C7.728 6.063 4.1 4.029 1.67.936a5.249 5.249 0 0 0-.667 2.57c0 1.773.87 3.339 2.192 4.255a4.751 4.751 0 0 1-2.23-.64l-.001.065c0 2.476 1.697 4.543 3.95 5.012a4.765 4.765 0 0 1-2.224.087c.627 2.032 2.445 3.51 4.6 3.551A9.65 9.65 0 0 1 0 17.953a13.568 13.568 0 0 0 7.548 2.297" fill="#fff" fill-opacity=".88"/>\n    </svg>\n\n    ',
        instagram:
          '\n    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M12.004 0c-5.01 0-6.475.005-6.76.029-1.028.085-1.668.247-2.365.594A4.79 4.79 0 0 0 1.5 1.633C.74 2.423.278 3.396.11 4.553c-.08.56-.104.675-.11 3.542v3.9c0 5.008.006 6.472.03 6.756.083 1 .24 1.63.573 2.319a5.056 5.056 0 0 0 3.276 2.677c.495.128 1.04.198 1.742.23.297.014 3.326.023 6.357.023s6.062-.004 6.352-.018c.812-.039 1.283-.102 1.805-.237a5.022 5.022 0 0 0 3.276-2.683c.326-.672.491-1.325.566-2.274.016-.206.023-3.503.023-6.796s-.007-6.584-.024-6.79c-.075-.964-.24-1.612-.577-2.297a4.76 4.76 0 0 0-1.027-1.408C21.578.739 20.607.277 19.45.11c-.56-.081-.672-.105-3.54-.11h-3.906Z" fill="#308144"/>\n      <path d="M12.004 0c-5.01 0-6.475.005-6.76.029-1.028.085-1.668.247-2.365.594A4.79 4.79 0 0 0 1.5 1.633C.74 2.423.278 3.396.11 4.553c-.08.56-.104.675-.11 3.542v3.9c0 5.008.006 6.472.03 6.756.083 1 .24 1.63.573 2.319a5.056 5.056 0 0 0 3.276 2.677c.495.128 1.04.198 1.742.23.297.014 3.326.023 6.357.023s6.062-.004 6.352-.018c.812-.039 1.283-.102 1.805-.237a5.022 5.022 0 0 0 3.276-2.683c.326-.672.491-1.325.566-2.274.016-.206.023-3.503.023-6.796s-.007-6.584-.024-6.79c-.075-.964-.24-1.612-.577-2.297a4.76 4.76 0 0 0-1.027-1.408C21.578.739 20.607.277 19.45.11c-.56-.081-.672-.105-3.54-.11h-3.906Z" fill="#fff" fill-opacity=".88"/>\n      <path d="M11.999 3.14c-2.406 0-2.708.011-3.653.054-.944.043-1.587.193-2.15.412a4.338 4.338 0 0 0-1.57 1.022 4.35 4.35 0 0 0-1.023 1.57c-.22.563-.369 1.207-.411 2.15-.042.946-.054 1.248-.054 3.655s.011 2.708.054 3.653c.043.944.193 1.588.412 2.151a4.337 4.337 0 0 0 1.021 1.57c.493.493.987.797 1.57 1.023.563.22 1.207.369 2.15.412.945.043 1.247.053 3.653.053 2.406 0 2.707-.01 3.652-.053.944-.044 1.588-.193 2.152-.412a4.335 4.335 0 0 0 1.568-1.023 4.35 4.35 0 0 0 1.023-1.57c.218-.563.367-1.207.412-2.15.042-.946.053-1.247.053-3.654s-.011-2.709-.053-3.654c-.045-.944-.194-1.588-.412-2.151a4.35 4.35 0 0 0-1.023-1.57 4.33 4.33 0 0 0-1.569-1.022c-.564-.22-1.209-.369-2.152-.412-.945-.043-1.246-.053-3.653-.053H12Zm-.795 1.598H12c2.365 0 2.646.008 3.58.05.864.04 1.333.185 1.645.306.413.16.708.352 1.018.663.31.31.502.605.663 1.019.121.312.266.78.305 1.645.043.934.052 1.215.052 3.58s-.01 2.646-.052 3.58c-.04.864-.184 1.333-.305 1.645a2.74 2.74 0 0 1-.663 1.018 2.74 2.74 0 0 1-1.018.663c-.312.122-.781.266-1.645.305-.934.043-1.215.052-3.58.052-2.366 0-2.646-.01-3.58-.052-.864-.04-1.333-.184-1.645-.305a2.744 2.744 0 0 1-1.02-.663 2.747 2.747 0 0 1-.662-1.019c-.122-.312-.266-.78-.305-1.645-.043-.934-.051-1.215-.051-3.581 0-2.367.008-2.646.05-3.58.04-.864.184-1.333.306-1.646.16-.413.353-.709.663-1.019a2.75 2.75 0 0 1 1.019-.663c.312-.122.78-.266 1.645-.306.817-.037 1.134-.048 2.785-.05v.003Zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126Zm-4.73 1.243a4.55 4.55 0 1 0 .003 9.101 4.55 4.55 0 0 0-.002-9.101Zm0 1.597a2.954 2.954 0 1 1 0 5.907 2.954 2.954 0 0 1 0-5.907Z" fill="#4BA6DE"/>\n      <path d="M11.999 3.14c-2.406 0-2.708.011-3.653.054-.944.043-1.587.193-2.15.412a4.338 4.338 0 0 0-1.57 1.022 4.35 4.35 0 0 0-1.023 1.57c-.22.563-.369 1.207-.411 2.15-.042.946-.054 1.248-.054 3.655s.011 2.708.054 3.653c.043.944.193 1.588.412 2.151a4.337 4.337 0 0 0 1.021 1.57c.493.493.987.797 1.57 1.023.563.22 1.207.369 2.15.412.945.043 1.247.053 3.653.053 2.406 0 2.707-.01 3.652-.053.944-.044 1.588-.193 2.152-.412a4.335 4.335 0 0 0 1.568-1.023 4.35 4.35 0 0 0 1.023-1.57c.218-.563.367-1.207.412-2.15.042-.946.053-1.247.053-3.654s-.011-2.709-.053-3.654c-.045-.944-.194-1.588-.412-2.151a4.35 4.35 0 0 0-1.023-1.57 4.33 4.33 0 0 0-1.569-1.022c-.564-.22-1.209-.369-2.152-.412-.945-.043-1.246-.053-3.653-.053H12Zm-.795 1.598H12c2.365 0 2.646.008 3.58.05.864.04 1.333.185 1.645.306.413.16.708.352 1.018.663.31.31.502.605.663 1.019.121.312.266.78.305 1.645.043.934.052 1.215.052 3.58s-.01 2.646-.052 3.58c-.04.864-.184 1.333-.305 1.645a2.74 2.74 0 0 1-.663 1.018 2.74 2.74 0 0 1-1.018.663c-.312.122-.781.266-1.645.305-.934.043-1.215.052-3.58.052-2.366 0-2.646-.01-3.58-.052-.864-.04-1.333-.184-1.645-.305a2.744 2.744 0 0 1-1.02-.663 2.747 2.747 0 0 1-.662-1.019c-.122-.312-.266-.78-.305-1.645-.043-.934-.051-1.215-.051-3.581 0-2.367.008-2.646.05-3.58.04-.864.184-1.333.306-1.646.16-.413.353-.709.663-1.019a2.75 2.75 0 0 1 1.019-.663c.312-.122.78-.266 1.645-.306.817-.037 1.134-.048 2.785-.05v.003Zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126Zm-4.73 1.243a4.55 4.55 0 1 0 .003 9.101 4.55 4.55 0 0 0-.002-9.101Zm0 1.597a2.954 2.954 0 1 1 0 5.907 2.954 2.954 0 0 1 0-5.907Z" fill="#000" fill-opacity=".52"/>\n    </svg>\n\n    ',
        youtube:
          '\n    <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M33.39 3.748A4.282 4.282 0 0 0 30.375.717C27.715 0 17.051 0 17.051 0S6.387 0 3.728.717a4.282 4.282 0 0 0-3.015 3.03C0 6.423 0 12 0 12s0 5.579.713 8.253a4.282 4.282 0 0 0 3.015 3.03C6.388 24 17.05 24 17.05 24s10.665 0 13.324-.716a4.283 4.283 0 0 0 3.015-3.031c.713-2.675.713-8.253.713-8.253s0-5.578-.713-8.252Z" fill="#308144"/>\n      <path d="M33.39 3.748A4.282 4.282 0 0 0 30.375.717C27.715 0 17.051 0 17.051 0S6.387 0 3.728.717a4.282 4.282 0 0 0-3.015 3.03C0 6.423 0 12 0 12s0 5.579.713 8.253a4.282 4.282 0 0 0 3.015 3.03C6.388 24 17.05 24 17.05 24s10.665 0 13.324-.716a4.283 4.283 0 0 0 3.015-3.031c.713-2.675.713-8.253.713-8.253s0-5.578-.713-8.252Z" fill="#fff" fill-opacity=".88"/>\n      <path d="M13.563 17.063 22.476 12l-8.913-5.065v10.13Z" fill="#4BA6DE"/>\n      <path d="M13.563 17.063 22.476 12l-8.913-5.065v10.13Z" fill="#000" fill-opacity=".52"/>\n    </svg>\n    ',
      });
  }
  render() {
    return V`
      <outline-link
        link-href="https://www.facebook.com/IADB.org"
        link-target="_blank"
        link-aria-label="Facebook"
      >
        ${Ze(this.icons.facebook)}
      </outline-link>
      
      <outline-link
        link-href="https://twitter.com/the_IDB"
        link-target="_blank"
        link-aria-label="Twitter"
      >
        ${Ze(this.icons.twitter)}
      </outline-link>
      <outline-link
        link-href="https://www.instagram.com/el_bid/"
        link-target="_blank"
        link-aria-label="Instagram"
      >
        ${Ze(this.icons.instagram)}
      </outline-link>
      <outline-link
        link-href="https://www.youtube.com/user/IDB"
        link-target="_blank"
        link-aria-label="YouTube"
      >
        ${Ze(this.icons.youtube)}
      </outline-link>
    `;
  }
};
(gi.styles = [hi]), (gi = s([le("idb-social-icons")], gi));
var ui = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {

    display: flex;

    flex-direction: row
}

.footer-logos {

    display: flex;

    flex-wrap: wrap;

    place-content: center;

    gap: 2rem
}

@media (min-width: 1024px) {

    .footer-logos {

        place-content: start
    }
}
`;
let mi = class extends xe {
  constructor() {
    super(...arguments),
      (this.logos = {
        idb: '\n    <svg width="65" height="25" viewBox="0 0 65 25" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <defs>\n        <path id="a" d="M0 23.802h64.074V0H0z"/>\n      </defs>\n      <g transform="matrix(1 0 0 -1 0 24.503)" fill="none" fill-rule="evenodd">\n        <mask id="b" fill="#fff">\n          <use xlink:href="#a"/>\n        </mask>\n        <g mask="url(#b)" fill="#FFF">\n          <path d="M54.342 13.836v2.749h3.077c.894 0 1.962-.23 1.962-1.33v-.044c0-.912-.734-1.375-2.182-1.375h-2.857Zm3.752-6.15h-3.752v2.879h3.643c1.49 0 2.246-.477 2.246-1.418v-.044c0-.94-.718-1.418-2.137-1.418Zm3.382 4.84c1.158.785 1.722 1.853 1.722 3.252v.043c0 1.11-.365 2.014-1.117 2.766-.931.93-2.37 1.423-4.161 1.423h-7.33V4.26h7.504c3.784 0 5.954 1.615 5.954 4.43v.042c0 1.81-.797 2.995-2.573 3.794Zm-16.002-.39v-.044c0-2.584-1.753-4.32-4.363-4.32h-2.357v8.725h2.357c2.609 0 4.363-1.752 4.363-4.362ZM41.11 20.01h-6.194l.004-15.75h6.19c2.358 0 4.496.809 6.024 2.273 1.503 1.443 2.33 3.433 2.33 5.603v.043c0 4.537-3.513 7.83-8.353 7.83h-.001Z" fill-rule="nonzero"/>\n          <path d="M31.474 20.035a1.92 1.92 0 0 0 1.92-1.92V4.258h-3.839v15.777h1.92Z"/>\n          <path d="M18.755 14.317c-.55.023-.647-.309.178-.483 1.165-.246.371.46-.178.483m-1.724 1.295c-1.652.535-.565-.788.22-.875.787-.087.95.495-.22.875m-4.865 1.196c-.481-.253.38-1.372 2.585-1.432 2.205-.06-.638 2.454-2.585 1.432M16.403.615c.693 1.29 2.202 3.17 5.43 6.962 4.825 5.671-9.475 3.767-11.927 8.058-2.018 3.536 5.494 6.078 10.032 8.044a12.8 12.8 0 0 0 5.643-8.861c.945-6.445-3.078-12.468-9.18-14.203m-2.869 9.14c-2.026-3.279 4.48-3.328 1.47-9.455-.088-.015-.175-.032-.265-.045C7.72-.772 1.2 4.083.173 11.1a12.798 12.798 0 0 0 2.112 9.113c-.327-7.404 13.138-7.395 11.247-10.457" fill-rule="nonzero"/>\n          <path d="M18.738 14.288c-.549.023-.647-.309.177-.483 1.164-.246.372.46-.177.483m-1.723 1.293c-1.65.534-.564-.786.222-.874.784-.086.948.495-.222.874m-4.86 1.195c-.48-.252.38-1.37 2.582-1.43 2.203-.06-.636 2.452-2.582 1.43M16.388.6c.692 1.288 2.2 3.166 5.425 6.955 4.821 5.665-9.467 3.763-11.916 8.051-2.016 3.532 5.489 6.072 10.024 8.037a12.787 12.787 0 0 0 5.637-8.854c.943-6.439-3.075-12.457-9.17-14.19M13.519 9.73c-2.023-3.276 4.477-3.325 1.47-9.447-.089-.014-.176-.032-.267-.045C7.713-.787 1.2 4.064.173 11.073a12.787 12.787 0 0 0 2.11 9.105C1.956 12.78 15.41 12.788 13.52 9.73" fill-rule="nonzero"/>\n        </g>\n      </g>\n    </svg>\n    ',
        invest:
          '\n    <svg width="140" height="24" viewBox="0 0 140 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g fill="#FFF" fill-rule="evenodd">\n        <path d="M137.578 16.954c-.604 0-1.323-.281-1.323-1.622V10.02h3.095V7.389h-3.095V4.531h-3.139v11.4c0 1.167.344 2.072 1.02 2.691.682.624 1.585.94 2.682.94a6.53 6.53 0 0 0 1.645-.212 5.696 5.696 0 0 0 1.354-.538l-.634-2.241c-.576.254-1.114.383-1.605.383m-7.228-6.239 1.18-2.363a8.258 8.258 0 0 0-2.237-1.003 9.042 9.042 0 0 0-2.475-.353c-1.372 0-2.522.336-3.416.998-.893.662-1.346 1.606-1.346 2.81 0 .781.196 1.425.582 1.913.388.49.86.859 1.403 1.099.546.242 1.239.486 2.06.727.778.227 1.351.442 1.704.639.357.198.537.478.537.83a.792.792 0 0 1-.425.73c-.278.16-.656.24-1.121.24-.676 0-1.4-.134-2.157-.398a7.107 7.107 0 0 1-2.051-1.117l-1.114 2.34c.67.538 1.468.959 2.374 1.252.91.294 1.872.443 2.857.443 1.433 0 2.624-.34 3.54-1.01.916-.668 1.38-1.617 1.38-2.82 0-.796-.204-1.448-.605-1.936a3.965 3.965 0 0 0-1.437-1.111c-.554-.25-1.266-.506-2.118-.762-.776-.226-1.346-.433-1.69-.615-.355-.185-.526-.443-.526-.785 0-.308.131-.541.39-.696.555-.33 1.561-.3 2.76.079.639.202 1.294.495 1.95.869"/>\n        <path d="m111.846 14.73-.045-.231h8.881a6.29 6.29 0 0 0 .13-1.25c0-3.421-2.755-6.205-6.142-6.205-3.386 0-6.141 2.784-6.141 6.205 0 3.421 2.755 6.204 6.141 6.204a6.147 6.147 0 0 0 5.187-2.89l-3.065-.666a2.783 2.783 0 0 1-2.21 1.1 2.8 2.8 0 0 1-2.736-2.267Zm.064-2.795a2.811 2.811 0 0 1 2.76-2.324 2.81 2.81 0 0 1 2.76 2.324l.041.228h-5.602l.041-.228Z" fill-rule="nonzero"/>\n        <path d="m105.536 7.25-2.643 7.745-2.613-7.744h-3.14l4.115 12.172h3.279l4.141-12.172zm-13.141-.076c-1.938.03-3.286.752-4.118 2.207l-.362.633V7.312h-3.161v12.012h3.161V13.41c0-.965.271-1.771.807-2.396.543-.632 1.289-.962 2.218-.978.807 0 1.455.248 1.93.739.472.488.71 1.158.71 1.99v6.559h3.163v-7.597c0-1.385-.398-2.503-1.18-3.323-.78-.816-1.846-1.23-3.168-1.23M79.33 19.324h3.13V3.578h-3.13zm-7.937.076h.292V3.601h-.292z"/>\n        <path d="M61.193 11.082c1.153-.778 1.715-1.839 1.718-3.23v-.044c.001-1.103-.361-2.003-1.108-2.751-.924-.927-2.354-1.417-4.135-1.42l-7.288-.01-.021 15.66 7.46.01c3.762.005 5.923-1.597 5.927-4.396v-.042c.003-1.8-.789-2.98-2.553-3.777Zm-3.37 4.81-3.73-.006.004-2.863 3.622.005c1.482.002 2.233.477 2.232 1.413v.043c-.001.936-.717 1.409-2.127 1.407ZM54.102 9.77l.005-2.733 3.058.004c.89.002 1.951.232 1.95 1.326v.043c0 .907-.732 1.366-2.172 1.364l-2.84-.004ZM41.163 3.614l-6.16-.009-.017 15.66 6.155.008c2.344.002 4.472-.797 5.992-2.252 1.497-1.432 2.323-3.41 2.326-5.567v-.043c.007-4.512-3.483-7.79-8.296-7.797m4.327 7.835v.043c-.003 2.57-1.75 4.293-4.343 4.29l-2.343-.004.011-8.675 2.344.003c2.594.003 4.335 1.748 4.331 4.343" fill-rule="nonzero"/>\n        <path d="M31.458 3.575a1.91 1.91 0 0 1 1.907 1.911l-.02 13.78-3.816-.006.02-15.688 1.909.003Z"/>\n        <path d="M13.573 13.825c-2.023 3.265 4.462 3.323 1.453 9.427-.088.014-.175.031-.265.045C7.766 24.31 1.273 19.462.258 12.467c-.48-3.318.36-6.522 2.118-9.082-.337 7.38 13.087 7.39 11.197 10.44m2.85 9.115c.692-1.285 2.2-3.158 5.422-6.933 4.818-5.646-9.44-3.767-11.878-8.049C7.96 4.431 15.452 1.908 19.98-.048a12.761 12.761 0 0 1 5.613 8.843c.932 6.426-3.086 12.424-9.17 14.145m-4.2-16.147c-.481.25.377 1.367 2.574 1.43 2.198.063-.632-2.447-2.575-1.43m4.848 1.199c-1.646-.536-.564.784.22.872.782.087.947-.492-.22-.872m1.717 1.292c-.548-.024-.646.307.176.482 1.162.247.372-.458-.176-.482" fill-rule="nonzero"/>\n      </g>\n    </svg>\n    ',
        lab: '\n    <svg width="120" height="24" viewBox="0 0 120 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <g fill="#FFF" fill-rule="evenodd">\n        <path d="M18.145.922c-2.474 1.03-5.007 2.267-5.979 2.906-.93.623-1.868 1.537-2.167 2.126-.2.399-.241.582-.241 1.063.008 1.254.897 2.25 2.715 3.04.997.44 2.26.789 4.933 1.395 3.222.73 4.377 1.121 5.19 1.76.814.64.756 1.686-.132 2.857a80.931 80.931 0 0 1-1.437 1.728c-2.325 2.74-4.451 5.53-4.31 5.672.075.074 1.653-.549 2.466-.98 1.13-.598 1.894-1.155 2.84-2.052 2.816-2.682 4.277-6.236 4.111-10.015-.182-4.127-2.126-7.706-5.539-10.19l-.29-.215-2.16.905ZM14.408 6.95c1.047.365 1.72 1.162 1.213 1.437-.449.232-2.118-.05-2.79-.474-.44-.274-.682-.64-.54-.814.29-.348 1.337-.423 2.117-.15Zm3.056 1.353c.798.3.955.756.283.814-.499.042-1.304-.49-1.304-.863 0-.175.498-.142 1.021.05ZM19.516 9.7c.58.315.348.523-.366.315-.423-.124-.556-.257-.407-.407.1-.108.482-.058.773.092Z" fill-rule="nonzero"/>\n        <path d="M1.985 4.036C.507 6.453-.175 9.284.066 12c.274 3.056 1.495 5.772 3.546 7.922 2.675 2.79 6.22 4.227 10.049 4.045 1.66-.075 1.57-.033 1.86-.79.424-1.104.523-1.627.49-2.549-.025-.797-.05-.88-.382-1.536-.224-.448-.598-.988-1.063-1.52-1.32-1.528-1.453-2.001-.897-3.23.274-.606.29-.69.208-.98-.191-.648-.856-1.046-3.58-2.15-3.338-1.355-4.94-2.227-6.12-3.348-1.138-1.088-1.735-2.25-1.835-3.62l-.058-.706-.3.498Z"/>\n        <path d="M82.87 3.837c-.008.108 0 .257.009.348.025.25-.2.1-.25-.166-.04-.232-.066-.24-.514-.265-.457-.025-.482-.017-.54.207-.033.125-.058.623-.05 1.105.009.481.025 1.312.025 1.843.008.607.042.98.092.98.05 0 .066.033.033.075-.025.05.025.116.1.166.14.075.149.307.165 3.056.017 2.923.067 3.729.2 3.388.041-.108.066-.124.066-.041.009.249-.34.498-.448.324-.033-.042-.092-.05-.141-.025-.067.041-.075.008-.025-.1.074-.174.207-2.59.14-2.749-.107-.307-.149.1-.115 1.196.033 1.296-.067 1.57-.158.415-.05-.573-.058-.498-.05.482.008.64.042 1.213.083 1.262.05.075.042.108-.017.108-.066 0-.083.092-.05.266.026.15.059.465.075.698.017.232.067.498.117.581.083.133.091.125.066-.091-.017-.142 0-.34.033-.457l.058-.208.1.233c.125.324.116.68-.033.805-.083.075-.125.075-.125.009a.092.092 0 0 0-.091-.092c-.1 0-.008.357.1.399.041.017.066.183.066.374l-.017.348-.058-.332c-.041-.249-.066-.282-.083-.124-.016.15-.033.166-.058.058-.033-.133-.19-.208-.19-.092 0 .1.281.657.356.706.05.034.025.133-.05.241-.091.125-.133.15-.166.067-.025-.059-.05-.009-.05.116-.008.133.05.257.142.307.074.05.1.091.05.091-.067 0-.067.125-.009.432.091.49.224.715.224.382v-.216l.806-.008c.515 0 .822-.033.864-.1.033-.05.1-.066.149-.033.15.092.332-.108.274-.307l-.041-.183-.067.183c-.041.1-.124.183-.2.183-.124 0-.165-.1-.066-.191.075-.075.083-1.454.017-1.786-.05-.224-.033-.266.058-.232.067.025.116-.009.116-.075 0-.067.042-.125.083-.125.059 0 .075-.133.05-.332-.016-.183-.008-.332.033-.332.034 0 .05-.075.025-.166-.025-.091-.074-.166-.108-.166-.058 0-.1-.1-.224-.498-.058-.216-.091-1.03-.041-1.113.025-.05.041-.274.033-.499-.017-.373-.008-.406.091-.282.175.224.308.175.308-.108 0-.133-.034-.232-.067-.207-.058.033-.008-.573.091-1.155A.358.358 0 0 0 84 12.15c-.066-.066-.116-.739-.158-2.142-.066-2.068-.083-2.284-.232-2.284-.042 0-.05.233-.025.557.025.315.058 1.187.075 1.951.016 1.08-.009 1.395-.092 1.429-.141.058-.15.963-.016.963.066 0 .083-.15.058-.457-.025-.274-.009-.432.033-.39.108.108.041 1.137-.067 1.12-.058-.007-.116.05-.14.142-.026.108-.009.141.074.108.075-.025.116.008.116.1 0 .074-.033.108-.083.083-.074-.05-.108.515-.091 1.495 0 .265-.008.298-.067.166-.041-.092-.083-.781-.083-1.528v-1.37l-.224-.175c-.2-.158-.207-.2-.124-.365.066-.125.108-.623.108-1.42.008-.681.041-1.28.083-1.346.041-.066.066.465.05 1.32-.009.79.008 1.454.041 1.487.033.033.066-.183.075-.473 0-.29.025-.964.041-1.487.067-2.242.05-3.986-.05-3.82-.05.067-.058.15-.033.2.025.041.009.05-.05.016-.05-.033-.074-.133-.05-.224.034-.092.017-.158-.041-.158-.066 0-.083-.075-.05-.208.033-.116.017-.207-.033-.207-.042 0-.083.124-.083.266a1.85 1.85 0 0 1-.166.606c-.175.365-.183.34-.166-.54 0-.324-.042-.631-.117-.756-.1-.199-.1-.232.025-.34.191-.158.34-.1.34.141 0 .24.159.357.258.2.042-.067.075-.35.075-.64 0-.457-.017-.515-.166-.515-.116 0-.166.058-.174.183Zm-.788.888c.05.332.216.54.282.357.017-.058.058-.1.083-.1.1 0 .075 1.695-.017 1.761-.058.042-.05.092.034.141.074.059.14.05.174-.008.075-.116.141.025.1.224a3.535 3.535 0 0 0-.025.582c0 .224.008.498 0 .606 0 .108.041.274.091.365.2.374.033 3.148-.183 3.015-.033-.025-.066-.93-.066-2.01 0-1.071-.025-1.976-.05-2.001-.025-.025-.041.274-.041.656-.009.382-.025 1.395-.05 2.25-.05 1.578-.008 2.126.141 1.885.058-.1.075-.1.075.009 0 .066.025.216.058.324.033.15.025.182-.067.157-.066-.025-.108-.108-.09-.19.016-.084-.01-.117-.059-.084-.05.025-.091.34-.091.731 0 .515-.025.648-.1.573-.1-.1-.125-5.92-.017-6.087.025-.05-.066-.191-.207-.307-.233-.2-.266-.283-.283-.714-.008-.333.017-.507.092-.524.05-.025.1-.091.1-.157 0-.075.04-.1.082-.075.142.083.092-.042-.09-.233-.142-.15-.167-.265-.142-.706.017-.282-.008-.523-.058-.54-.042-.016-.025-.082.041-.157.166-.175.216-.133.283.257Zm.226.108c-.046.058-.077.017-.077-.1 0-.116.03-.157.077-.107a.25.25 0 0 1 0 .207Zm.997 1.744c-.047.058-.077.017-.077-.1 0-.116.03-.157.077-.107a.25.25 0 0 1 0 .207Zm-.027.69c-.017.124-.05.174-.092.132-.05-.05-.058-.14-.033-.207.075-.2.141-.158.125.074Zm.016 1.162c0 .067-.016.125-.033.125s-.05-.058-.083-.125c-.025-.066-.008-.125.033-.125.05 0 .083.059.083.125Zm-.332 4.02c0 .041-.058.09-.125.124-.074.025-.124 0-.124-.075 0-.066.058-.124.124-.124.067 0 .125.033.125.074Zm0 .838c0 .042-.017.083-.033.083-.025 0-.067-.041-.092-.083-.025-.05-.008-.083.034-.083.05 0 .09.033.09.083Zm-.033.407a.12.12 0 0 1-.15.042c-.066-.042-.075.025-.041.19.058.291-.009.623-.117.565-.033-.025-.05-.1-.016-.166.025-.066 0-.124-.05-.124a.092.092 0 0 1-.091-.092c0-.041.041-.058.083-.033.05.033.083-.116.083-.39v-.432l.174.174c.1.092.15.216.125.266Zm.14.963c-.024.075-.066.117-.082.092-.025-.025-.017-.075.016-.125.075-.133.125-.108.067.033Zm-.024.4c0 .19-.017.182-.158-.084-.083-.158-.075-.183.033-.141.067.033.125.124.125.224Zm-.29.506c.107.58.074 1.386-.067 1.478-.183.116-.233-.05-.216-.69.008-.365-.008-.68-.033-.714-.033-.025-.017-.1.033-.166.075-.074.066-.108 0-.108-.125 0-.116-.19.008-.315.133-.133.166-.092.274.515Zm-.707.124c0 .34-.024.415-.174.449-.158.041-.166.016-.141-.34.025-.366.1-.507.257-.516.034 0 .058.183.058.407Zm-.414.357c-.037.067-.075.042-.075-.05-.012-.09.025-.14.063-.107.037.024.05.1.012.157Zm.748.25c-.038.066-.075.04-.075-.05-.013-.092.025-.142.062-.108.038.025.05.1.013.157Zm.314 1.544c.017.2-.008.266-.1.266-.1 0-.132-.083-.132-.3 0-.373.199-.348.232.034Zm.266.299c0 .29.025.606.05.69.041.124.033.124-.042.016-.116-.174-.19-1.237-.091-1.237.05 0 .083.24.083.531Zm-.581-.25c0 .026-.034.067-.083.092-.042.025-.083.009-.083-.033 0-.05.041-.091.083-.091.05 0 .083.016.083.033Zm-.042 1.288c.025.042.008.1-.041.133-.042.025-.083-.008-.083-.075 0-.15.05-.174.124-.058Z" fill-rule="nonzero"/>\n        <path d="M83.701 3.754a.721.721 0 0 0 .008.19c.009.042.017.25.009.457 0 .258.025.333.074.25.067-.108.083-.108.117 0 .025.066.058.274.066.456.042.582.191.283.158-.315-.025-.465-.008-.557.108-.557.075 0 .124.025.124.058-.033.183.017.457.067.416.025-.034.091-.017.15.025.066.058.116-.025.182-.291.066-.29.058-.39-.025-.465-.083-.067-.116-.067-.116-.008 0 .066-.067.066-.183.024-.141-.058-.232-.033-.374.1l-.182.166.033-.307c.033-.224.008-.299-.083-.299-.067 0-.133.05-.133.1ZM30.062 11.75v8.015h3.903l-.016-7.333c-.025-7.316-.025-7.325-.208-7.657-.224-.423-.473-.656-.938-.864-.316-.15-.548-.174-1.553-.174h-1.188v8.014Z"/>\n        <path d="M35.626 11.76v8.021l3.887-.041c3.172-.025 3.978-.058 4.426-.166 3.28-.79 5.398-2.782 6.228-5.838.266-.964.266-2.932.009-3.97-.83-3.313-3.563-5.556-7.242-5.946-.432-.041-2.259-.083-4.044-.083h-3.264v8.022Zm7.234-4.336c1.71.307 2.964 1.495 3.363 3.173.183.764.116 2.117-.125 2.806a4.111 4.111 0 0 1-3.064 2.675c-.357.074-1.08.116-2.026.116h-1.479V7.308h1.354c.756.008 1.62.058 1.977.116Z" fill-rule="nonzero"/>\n        <path d="M72.83 11.792v8.056h.416V3.737h-.416zm12.582-7.98c-.025.041-.009.1.041.133.042.025.083-.009.083-.075 0-.15-.05-.174-.124-.058Z"/>\n        <path d="M110.01 4.626c.008.647-.017.93-.108 1.054-.133.2-.15.332-.033.258.05-.034.083.05.083.174 0 .374.174.108.19-.282.009-.191.042-.349.075-.349.034 0 .067.432.067.955 0 .581-.033.955-.083.955-.042 0-.083-.042-.083-.1 0-.074-.025-.074-.092-.008-.074.075-.058.133.042.24.075.076.116.159.091.184-.025.033-.083 0-.124-.059-.1-.166-.158.142-.067.382a.757.757 0 0 1-.016.407c-.108.283-.108 1.113.008 1.113.041 0 .058.042.025.1-.05.083-.058.448-.025 1.021 0 .042-.017.283-.033.532-.025.249-.009.54.025.64.05.132.041.215-.05.282-.133.116-.166.83-.033.83.05 0 .083-.042.083-.1 0-.05.024-.074.05-.05.024.025 0 .216-.067.407-.058.2-.108.723-.116 1.155-.017.805-.092 1.353-.191 1.295-.025-.016-.058.357-.075.839-.025.764-.008.889.125.988.083.058.107.117.058.117-.133 0-.108 1.76.033 1.802.066.025.1-.059.1-.266 0-.175-.034-.282-.084-.25-.041.026-.083.009-.083-.032 0-.05.042-.092.083-.092.05 0 .084-.075.084-.166 0-.091-.034-.166-.084-.166-.041 0-.083-.058-.083-.125 0-.066.059-.124.125-.124.116 0 .166-.224.133-.606-.008-.075.025-.142.066-.142.058 0 .092-.29.092-.797 0-.556-.025-.772-.092-.73-.058.033-.074 0-.05-.1.092-.308.133-.93.183-2.65.033-.963.092-1.777.133-1.826.1-.1.1-.507 0-.856-.05-.166-.05-.265 0-.265.108 0 .091-.723-.025-.914-.075-.116-.083-.191-.025-.232.125-.092.158-.466.033-.39-.066.049-.083.032-.024-.05a.932.932 0 0 0 .083-.225 1.75 1.75 0 0 1 .083-.249c.083-.183.091-1.428.016-1.37-.041.016-.066-.05-.066-.15 0-.15.025-.166.1-.091.082.083.124.05.207-.166.075-.224.091.041.05 1.387-.067 2.01-.042 3.28.05 3.405.091.108.066 1.96-.025 2.109-.05.075-.042.1.016.058.067-.033.083.042.059.257a1.499 1.499 0 0 1-.05.316c-.009 0-.025.482-.034 1.063-.016.59-.05 1.088-.074 1.113-.025.033-.05-.05-.05-.175 0-.132-.033-.207-.083-.174-.042.025-.083.017-.083-.033 0-.042.041-.108.083-.133a.17.17 0 0 0 .083-.133c0-.05-.042-.058-.091-.025-.067.033-.075 0-.034-.124.034-.1.017-.175-.033-.175-.058 0-.083.648-.083 1.968a80.928 80.928 0 0 1 0 2.143c-.017.166-.017.166-.133.008s-.124-.15-.124.133c0 .399.074.565.24.565.108 0 .158-.141.25-.69.058-.381.074-.797.041-.921-.041-.183-.033-.233.058-.2.083.025.125.241.141.83.017.582.059.823.15.898.066.058.141.083.166.066.05-.058.066-.315.025-.481-.025-.075.025-.117.116-.117.208.017.191-.465-.025-.656-.091-.075-.166-.116-.166-.083s-.041.017-.091-.033c-.05-.05-.1-.29-.116-.54-.042-1.162-.067-1.428-.1-1.279-.067.25-.166 0-.125-.29.025-.183.058-.225.108-.15.05.075.075 0 .075-.216.025-1.362.083-2.408.158-2.64.183-.557.274-2.334.1-1.86-.125.348-.266-1.604-.241-3.348.025-1.66.033-1.785.174-1.76.125.025.141-.017.091-.208a1.254 1.254 0 0 0-.15-.349c-.066-.09-.066-.107 0-.066.067.042.092-.133.084-.59-.008-.473.017-.63.1-.622.05.016.1 0 .1-.042.008-.033.04-.216.074-.415.058-.307.05-.349-.083-.349-.075 0-.158.025-.183.058-.016.042-.016.017-.008-.041.017-.05-.042-.1-.133-.1-.108 0-.166.058-.166.15 0 .174-.357.548-.44.465-.033-.034-.017-.108.033-.167.067-.074.042-.149-.083-.274-.1-.1-.2-.174-.24-.174-.034 0-.05.399-.042.889Zm-.225 12.224c0 .05-.033.108-.083.133-.041.025-.083-.009-.083-.075 0-.075.042-.133.083-.133.05 0 .083.033.083.075Zm1.005 1.113c-.066.066-.091.041-.091-.092 0-.1-.042-.182-.091-.182-.042 0-.059-.042-.034-.092.042-.05.108-.016.183.092.091.132.1.207.033.274Zm.574 1.07c-.037.067-.075.042-.075-.049-.012-.091.025-.141.063-.108.037.025.05.1.012.158Z" fill-rule="nonzero"/>\n        <path d="M110.367 3.82c0 .042.033.083.075.083.05 0 .107-.041.132-.083.025-.05-.008-.083-.074-.083-.075 0-.133.033-.133.083Z"/>\n        <path d="M111.612 3.862c.092.108.092.224.009.59-.067.298-.1 1.02-.092 2.009.009.855.017 1.611.009 1.677l.033 2.3c.017 1.346 0 2.185-.05 2.185-.041 0-.075.05-.075.116 0 .067-.041.224-.1.357-.05.125-.082.307-.074.399.017.141 0 .141-.066.041-.075-.1-.092-.091-.092.058 0 .1.033.2.083.233.042.025.05.125.009.233-.1.274-.017 4.044.09 4.268.05.108.159.208.233.233.108.033.142.14.142.44-.009.348.166.93.274.93.05 0 .091-.332.091-.79 0-1.087-.008-1.054.141-.996.083.034.1 0 .067-.091a.993.993 0 0 1-.05-.166c0-.025-.033-.025-.075 0-.033.025-.066-.332-.075-.789 0-.681.017-.822.117-.789.14.05.166-.324.024-.407-.05-.033-.074 0-.058.083.017.083-.025.166-.091.191-.083.025-.1 0-.066-.1a.855.855 0 0 0 .058-.265c0-.075.041-.1.083-.075.05.025.083.008.083-.033 0-.05-.033-.092-.075-.092-.058 0-.266-2.042-.274-2.782 0-.182-.008-.971-.017-1.743-.016-.781-.008-1.595.017-1.81l.033-.408.283.274.29.283-.05 1.17c-.033.731-.016 1.196.034 1.23.116.074.182-.357.182-1.213 0-.423.009-1.229.017-1.794.017-.556 0-1.013-.033-1.013-.034 0-.042-.124-.025-.274.025-.141.041-.365.041-.498.009-.125.05-.224.092-.224.058 0 .058-.034 0-.108-.042-.05-.108-.233-.133-.39-.033-.167-.033-.25.008-.192.05.075.108-.016.174-.265.059-.208.15-.374.2-.374.24-.008.789-.664.556-.664-.066 0-.066-.034-.008-.108.041-.05.124-.241.166-.416.091-.34.125-.315-.54-.423-.24-.042-.274-.017-.357.24-.108.333-.266.308-.232-.024.016-.141-.017-.224-.1-.241-.108-.025-.125.166-.116 1.32.008.748.016 1.778.033 2.292.016.507.008.947-.017.972-.016.025-.133-.008-.257-.066-.183-.083-.224-.158-.233-.416-.033-.913.009-1.56.083-1.52.067.042.042-1.644-.033-1.843-.016-.05.008-.1.058-.1.117 0 .025-.473-.133-.63-.166-.167-.357-.158-.216.008Zm.358 4.758c-.025.1-.075.183-.117.183-.1 0-.091-.058.025-.25.125-.199.158-.174.092.067Zm-.308 5.074c-.025.033-.058.482-.066.988-.017.69-.05.939-.141.972-.083.033-.1-.017-.075-.208.025-.14.008-.274-.033-.299-.092-.058-.083-.747.008-.93.05-.074.1-.24.133-.373.025-.125.083-.225.133-.225s.066.034.041.075Zm-.05 2.957c0 .523-.033.871-.083.871-.041 0-.083-.116-.083-.257 0-.141-.033-.232-.083-.2-.05.034-.083-.157-.083-.506 0-.432.033-.581.15-.664a.876.876 0 0 1 .166-.116c.008 0 .016.39.016.872Z" fill-rule="nonzero"/>\n        <path d="M111.372 16.41c0 .091.038.116.075.05.038-.059.025-.133-.012-.158-.038-.033-.075.016-.063.108Zm.049.257c-.033.025-.058.108-.058.183.009.108.025.108.092-.017.091-.158.066-.274-.034-.166Z"/>\n        <path d="M51.322 11.792v7.981l4.675-.033c4.51-.025 4.692-.033 5.373-.208 2.624-.697 3.92-2.491 3.58-4.966a3.845 3.845 0 0 0-2.002-2.89l-.482-.257c-.016-.017.216-.25.507-.532.789-.756 1.071-1.42 1.121-2.59.058-1.338-.2-2.077-1.021-2.966-.499-.54-1.204-.955-2.16-1.27-.573-.191-.63-.191-5.082-.224l-4.51-.025v7.98Zm7.972-4.384c.465.14.723.373.872.772.266.68.008 1.295-.69 1.636-.373.183-.49.19-2.358.216l-1.976.033V7.2l1.935.058c1.054.033 2.06.1 2.217.15Zm1.013 6.236c.507.25.723.499.79.93.115.731-.283 1.362-.997 1.578-.333.1-.906.125-2.691.125h-2.267v-2.923l2.35.033 2.342.025.473.232Zm48.15-9.724c0 .05-.05.158-.117.224-.083.1-.132.54-.174 1.67l-.058 1.535.174-.224c.092-.116.175-.29.175-.382 0-.091.041-.182.083-.2.05-.016.091-.165.1-.34.008-.24.05-.34.182-.39.1-.033.266-.19.374-.34.166-.225.216-.399.24-.964l.042-.689h-.39c-.282 0-.382.033-.382.125 0 .066-.042.124-.091.124-.05 0-.075-.058-.042-.124.025-.067.008-.125-.033-.125-.05 0-.083.042-.083.1Zm.332.598c-.042.108-.05.216-.033.24.025.025.008.067-.034.092-.05.025-.074-.017-.058-.092a.583.583 0 0 0-.05-.29c-.05-.092-.041-.15.034-.175.166-.058.224.017.14.225Z" fill-rule="nonzero"/>\n        <path d="M84.93 4.185c.025.133.083.191.158.158.174-.066.141-.357-.042-.357-.116 0-.14.05-.116.2Zm29.257.341c0 .648.133.722.183.1.041-.465.008-.64-.108-.64-.042 0-.075.241-.075.54ZM98.574 4.36c0 .066.017.124.034.124.016 0 .05-.058.083-.124.025-.067.008-.125-.034-.125-.05 0-.083.058-.083.125Z"/>\n        <path d="M114.56 4.667c-.157.54-.157.922 0 1.262.1.208.125.524.109 1.404l-.025 1.138-.241-.3c-.208-.265-.224-.323-.141-.473.09-.133.09-.158-.009-.124-.15.058-.15-.631 0-.78.141-.142.125-.4-.025-.4-.091 0-.116-.074-.091-.29a1.32 1.32 0 0 1 .083-.366c.033-.041-.025-.074-.116-.066-.133.008-.166.066-.166.307 0 .166-.017.83-.042 1.478-.041 1.022-.025 1.18.083 1.18.083 0 .125.083.125.265 0 .216.025.25.083.15.075-.108.124-.083.332.15.216.232.25.332.257.788.009.748.142 1.005.15.283.008-.324.041-.548.083-.524.042.034.1 0 .116-.05.025-.057.05-.024.05.075.008.241.258.258.258.025 0-.091-.084-.249-.183-.348-.233-.233-.233-.225-.241-2.018-.008-1.37.008-1.52.166-1.827.1-.175.174-.374.174-.432 0-.05.025-.117.067-.133.058-.042.141 4.783.108 6.917-.017 1.42-.017 1.612.041 3.422.025.772.009 1.395-.033 1.395-.174 0-.465-.556-.473-.888-.008-.432-.125-.582-.125-.167 0 .333-.108.399-.24.158-.075-.124-.092-.116-.092.067a3.742 3.742 0 0 1-.041.365c-.017.091.016.2.083.25.083.066.132.348.157.88.025.431.075 1.12.125 1.536.041.407.083.797.083.847.008.058.042.108.075.108.033 0 .074-.399.083-.897.016-.49.041-.955.066-1.046.033-.092.017-.133-.033-.1s-.083-.133-.083-.432l-.008-.473.257.282c.25.274.25.299.216.98-.033.623-.017.706.125.78.207.117.282.026.157-.174-.124-.2-.133-.448-.016-.373.05.024.083-.025.083-.117 0-.1-.033-.174-.083-.174-.042 0-.083-.1-.083-.224 0-.208.008-.208.15-.083.323.299.365.024.066-.49-.158-.283-.208-.507-.233-1.163-.025-.457-.017-.922.025-1.046.033-.133.033-.233-.008-.233-.034 0-.067-.183-.058-.415 0-.233.024-.415.05-.415.024 0 .058-.283.074-.631.008-.35.058-.706.108-.798a.527.527 0 0 0 .033-.34c-.041-.133-.033-.15.025-.067.067.092.1.083.175-.05.1-.199.025-.307-.125-.182-.116.1-.15.008-.24-.673-.067-.54-.067-3.463 0-3.911.032-.233.024-.407-.026-.44-.05-.025-.083-.457-.091-.997-.008-.98-.05-1.246-.191-1.154-.058.033-.075-.033-.05-.166.042-.2.008-.233-.332-.35-.208-.066-.39-.124-.399-.124-.016 0-.083.191-.157.432Zm-.606-.183c0 .117.031.158.077.1.031-.05.031-.15 0-.208-.046-.05-.077-.008-.077.108Zm-28.592.059c-.042.531-.033 1.087.008 1.063.033-.017.067-.25.075-.507.008-.266.033-.507.058-.54.017-.033 0-.083-.05-.116-.041-.025-.091.017-.091.1Zm12.556.29c.009.108.042.3.075.44.058.225.067.208.075-.14 0-.217-.025-.416-.075-.441-.05-.025-.075.033-.075.141Zm-13.378.224c0 .042.041.108.083.133.05.025.083.017.083-.033a.17.17 0 0 0-.083-.133c-.042-.025-.083-.016-.083.033Zm13.76.366c-.058.415.009.739.142.697.124-.041.124-.988 0-1.03-.059-.016-.117.117-.142.333Zm.607-.241c-.05.075-.083.174-.067.233.025.066.075.033.141-.084.125-.232.075-.323-.074-.149Zm.348.091c.009.133.042.283.075.333.025.041.075.19.108.323.042.183.033.225-.05.191-.091-.033-.1.034-.025.34.05.242.092.316.108.2.017-.116.067-.158.158-.124.116.041.125.008.091-.233a5.16 5.16 0 0 0-.265-.789c-.175-.382-.216-.44-.2-.24Zm14.699.042c0 .158.031.224.077.141a.469.469 0 0 0 0-.29c-.046-.075-.077-.009-.077.149Z"/>\n        <path d="M116.363 5.282a.561.561 0 0 0-.1.348c.008.125.017.449.008.731-.008.465-.025.507-.19.499-.175-.009-.192.024-.167.406.033.532.29 1.628.332 1.429.034-.175.183-.183.399-.008.083.066.1.1.033.066-.066-.042-.016.075.108.25.2.257.233.356.183.605-.033.208-.025.274.041.233.075-.05.083.008.042.2-.058.281.108.381.183.099.041-.166.274-.316.274-.175 0 .142.224-.008.324-.216.132-.29.116-.406-.034-.282-.108.083-.124.075-.124-.066 0-.1-.042-.2-.092-.233-.05-.025-.066-.124-.05-.216.025-.091-.008-.432-.082-.755-.167-.764-.175-.856-.183-1.81l-.008-.79-.341-.224c-.39-.257-.407-.257-.556-.091Zm.249.64c.05.124.158.281.24.34.142.1.15.174.075 1.021-.083.972-.133 1.188-.265 1.188-.042 0-.059-.034-.025-.075.025-.05.008-.316-.034-.606-.083-.557-.19-2.55-.124-2.268.025.092.083.275.133.4Zm.897 2.848c0 .066-.034.1-.083.074-.042-.025-.083-.083-.083-.133 0-.041.041-.074.083-.074.05 0 .083.058.083.133Z" fill-rule="nonzero"/>\n        <path d="M83.211 5.514c0 .075.042.133.083.133.05 0 .083-.033.083-.075a.158.158 0 0 0-.083-.133c-.041-.024-.083.009-.083.075Zm29.938.324c-.033.125-.05 1.03-.025 2.018.016 1.237 0 1.752-.058 1.653-.224-.382-.25-.382-.224 0 .024.24.083.415.182.481.141.092.15.308.166 2.674.017 1.42.017 2.948.017 3.405l-.017.83-.224-.332a2.202 2.202 0 0 1-.249-.456c-.083-.54-.133-1.553-.125-2.517.009-.971-.008-1.137-.116-1.137-.066 0-.108.033-.083.074.05.084.067 3.09.033 5.432-.016.996 0 1.303.083 1.303.05 0 .1-.066.1-.149 0-.116.017-.125.083-.017.05.083.075.017.066-.216-.008-.49.1-.913.191-.772.05.083.075.05.075-.108 0-.116-.05-.232-.1-.257-.082-.025-.066-.075.034-.191.083-.083.158-.133.182-.108.067.066.092 1.528.025 1.627-.033.059-.008.2.075.316.125.2.274.307.158.116-.033-.041 0-.15.075-.232.083-.092.133-.324.14-.656.01-.283.05-.515.084-.515.041 0 .075.033.075.083 0 .041.058.083.124.083.083 0 .125.091.125.29 0 .158.033.358.075.44.041.075.1.208.124.283.025.091.091.125.174.1.067-.025.1-.083.075-.125-.025-.041.009-.075.067-.075.066 0 .05-.041-.042-.091-.133-.075-.141-.183-.108-.847.025-.424.067-.839.1-.922.041-.1.033-.141-.025-.108-.05.033-.108-.2-.15-.63-.058-.59-.14-4.352-.15-6.661 0-.415-.016-.664-.032-.565-.025.108-.067.191-.108.191-.033 0-.075.565-.075 1.254-.017.988-.042 1.296-.15 1.453-.116.183-.116.216.009.407a.7.7 0 0 1 .1.416c-.025.108 0 .224.041.257.1.058.083 3.737-.017 4.144-.033.133-.058.2-.066.141a.588.588 0 0 0-.133-.24c-.066-.067-.1-.158-.075-.208.034-.05.083-.042.125.025.05.083.075.066.075-.067 0-.141-.034-.174-.142-.133-.083.034-.116.017-.083-.033.034-.05.017-.2-.033-.332-.058-.141-.1-1.204-.124-2.799-.017-1.61-.058-2.599-.117-2.657-.108-.108-.108-1.188-.008-1.254.05-.025.067-.681.058-1.578-.025-1.295-.008-1.536.092-1.57.09-.033.1-.083.041-.157-.041-.05-.066-.283-.05-.499.017-.332.009-.39-.091-.307-.083.075-.116.058-.15-.058-.024-.116-.05-.1-.1.083Zm-3.762.058c0 .116.03.158.077.1.03-.05.03-.15 0-.208-.046-.05-.077-.008-.077.108Zm0 .415c0 .117.03.158.077.1.03-.05.03-.15 0-.208-.046-.05-.077-.008-.077.108Zm-25.677.142c0 .09-.026.19-.059.224-.15.15-.19.888-.05.938.1.033.258-1.187.158-1.279-.025-.033-.05.025-.05.117Zm.747.107a.09.09 0 0 0 .083.084c.05 0 .083-.042.083-.083 0-.05-.033-.083-.083-.083a.083.083 0 0 0-.083.083Zm15.089.283c-.141.208-.24 1.976-.141 2.375.05.191.058.191.108-.091.033-.166.033-.374 0-.457-.05-.141-.042-.15.091-.042a.31.31 0 0 1 .108.274c-.025.083-.008.175.042.2.041.025.066.199.05.39-.017.224.016.349.09.374.092.033.1-.025.067-.241-.033-.158-.025-.515.017-.806.058-.473.041-.548-.133-.789-.108-.149-.191-.34-.174-.44a.431.431 0 0 0-.092-.315c-.066-.075-.091-.166-.058-.191.033-.033.091-.009.133.058.058.091.083.041.083-.191 0-.357-.017-.374-.191-.108Zm11.618.025c-.05.116-.042.124.042.05.058-.058.083-.125.058-.15-.025-.025-.075.017-.1.1Zm-13.819.108c0 .116.031.158.077.1.031-.05.031-.15 0-.208-.046-.05-.077-.008-.077.108Z"/>\n        <path d="M97.827 7.366c0 .282-.033.532-.075.565-.041.025-.166-.075-.282-.216-.2-.258-.2-.258-.24-.067-.084.39-.067 1.362.024 1.487.066.091.075.025.042-.274-.025-.216-.017-.39.033-.39.1 0 .174.257.158.548-.017.456.074 2.292.124 2.333.025.025.017.15-.008.283a.463.463 0 0 0 .075.39c.074.083.132.34.14.598.009.249.026.531.034.623.008.091-.025.157-.083.14-.058-.007-.108.042-.108.117 0 .067-.042.1-.083.075-.083-.05-.058.183.05.54.066.19-.058.98-.183 1.137-.091.133-.108.108-.1-.224.017-.473-.058-1.353-.116-1.461-.083-.142-.166-1.628-.083-1.578.05.025.05-.092.008-.308-.033-.19-.074-.78-.083-1.303-.008-.524-.033-.814-.05-.64-.024.241-.066.307-.157.274-.117-.041-.158.042-.067.133.042.05.067 1.237.033 1.437a.934.934 0 0 0-.008.224c.025.174-.398.747-.49.69-.041-.026-.066-.507-.058-1.08.008-.573.008-1.005-.008-.964-.017.05-.083.058-.158.034-.108-.042-.116.024-.1.423.017.258 0 .482-.05.498-.041.025-.033.042.025.042.15.008.133 1.046-.033 1.769-.1.448-.108.598-.033.648.141.09.232 3.894.091 3.977-.124.083-.15.706-.066 1.437.058.432.1.556.224.59.108.025.141.091.116.232-.033.2-.033.191.058-.008.05-.116.133-.29.175-.382.083-.183.116-1.08.075-1.985-.017-.39-.042-.448-.092-.29-.041.124-.058-.1-.05-.565.017-.432.059-.806.108-.83.108-.075.2-.748.108-.806-.033-.017-.066-.208-.066-.415-.008-.208-.067-.457-.141-.565-.216-.316-.158-.955.133-1.387l.249-.374.008 1.038c0 .573 0 1.37-.008 1.786-.05 2.79-.05 4.094-.017 4.227.033.158.033.158.15 0 .116-.15.124-.15.232-.009.108.15.108.15.15 0 .066-.265.058-1.312-.017-1.91-.041-.307-.041-.714-.008-.896.033-.183.066-.258.074-.167.009.142.025.15.092.042.058-.091.083-.033.083.216 0 .274.033.357.166.39.133.033.166.116.166.357 0 .166.017.291.042.266.024-.025.05-.482.05-1.013 0-.855.016-.988.157-1.13.166-.166.166-.166.166.034 0 .108.025.265.058.349.034.09.017.124-.033.09-.05-.032-.066.034-.041.175.025.125.058.175.074.117.059-.167.191-.117.2.083 0 .182.008.182.066.024.042-.09.05-.465.025-.83-.033-.648.033-.855.1-.282.016.157.033.307.041.34.025.175.175.033.183-.166l.008-.224.067.249c.033.133.124.357.199.498.133.241.133.233.141-.581.008-.814.008-.822.1-.424.083.333.116.39.2.291.074-.091.074-.332.016-.98-.042-.473-.1-.897-.125-.93-.025-.041-.008-.075.033-.075.083 0 .067-1.652-.025-2.906-.041-.482-.066-.922-.05-.989.009-.058-.016-.083-.066-.05-.05.026-.091.109-.091.175 0 .066-.05.116-.1.116-.075 0-.108-.14-.116-.398-.008-.69-.125-1.77-.208-1.952-.074-.166-.041 1.063.058 2.417.025.332.009.423-.074.382-.075-.05-.075-.033-.009.058.059.066.092.24.075.382-.008.15.008.249.05.224.041-.025.075-.274.083-.556 0-.316.025-.457.066-.357.075.207.1 2.923.025 3.62a8.82 8.82 0 0 0 0 1.33c.034.423.034.821 0 .871-.033.042-.074-.316-.1-.805-.024-.573-.082-.93-.149-.997-.091-.091-.1-.083-.05.05.042.108.034.141-.033.1-.058-.034-.1-.158-.1-.283 0-.174.017-.2.084-.1.066.1.083.092.083-.066 0-.1-.042-.183-.092-.183-.058 0-.074-.074-.041-.19.033-.1.074-.3.091-.433.017-.14.058-.373.091-.523.042-.216.025-.265-.083-.265-.074 0-.132.033-.132.083a.083.083 0 0 1-.084.083c-.041 0-.083-.142-.074-.316.008-.274.016-.282.074-.1.05.167.067.117.075-.232.009-.332-.016-.424-.091-.382-.075.041-.075.017.008-.075.058-.075.075-.141.033-.141-.132 0-.29-1.088-.199-1.387.05-.174.05-.274-.008-.29-.042-.017-.133-.275-.183-.565-.1-.49-.116-.523-.19-.332l-.092.207-.1-.249c-.058-.15-.075-.432-.041-.756.041-.315.024-.573-.034-.664-.066-.125-.083-.05-.091.357Zm-.083 2.2c0 .74-.042.707-.116-.082-.034-.407-.025-.59.033-.557.041.025.083.316.083.64Zm.324.233c.008-.091.033-.091.108-.016.05.05.1.365.108.706.008.34.033.647.058.689.025.041.058.448.075.897.025.606.008.83-.067.855-.058.025-.141-.058-.19-.174-.042-.117-.117-.216-.159-.216-.041 0-.074-.274-.074-.606 0-.39.025-.54.066-.432.058.133.075.14.075.025.008-.075-.025-.166-.075-.191-.041-.025-.083-.175-.075-.316.009-.257.009-.257.075-.058l.067.208.008-.233c.008-.125-.025-.224-.075-.224-.05 0-.083-.266-.075-.648.009-.465.025-.573.075-.39.033.133.067.19.075.124Zm1.513 2.467c-.046.083-.077.033-.077-.1 0-.141.031-.2.077-.15a.347.347 0 0 1 0 .25Zm-1.48.913c-.066.432-.108.449-.108.042 0-.191.033-.349.075-.349.05 0 .058.141.033.307Zm.274 1.246c-.066 1.005-.066 1.03-.116.988-.058-.058-.033-1.62.025-1.71.124-.2.14-.034.091.722Zm.625.166c-.046.083-.077.033-.077-.1 0-.14.031-.199.077-.15.03.059.03.175 0 .25Zm-1.754.581c0 .507-.009.54-.125.39-.183-.24-.15-.946.05-.946.041 0 .075.25.075.556Zm.747-.216c0 .05-.033.059-.083.034-.041-.025-.083-.092-.083-.133 0-.05.042-.058.083-.033a.17.17 0 0 1 .083.132Zm-.415.648c0 .05-.033.108-.083.133-.042.025-.083-.008-.083-.075 0-.074.041-.133.083-.133.05 0 .083.034.083.075Zm0 .507c0 .091-.033.166-.083.166-.042 0-.083-.075-.083-.166 0-.092.041-.166.083-.166.05 0 .083.074.083.166Z" fill-rule="nonzero"/>\n        <path d="M109.38 7.109c0 .091.037.116.074.05.038-.059.025-.133-.012-.158-.038-.034-.075.016-.063.108Zm8.47.174c0 .2-.05.606-.109.914-.083.49-.075.597.042.813.074.142.133.191.14.125 0-.066.034-.349.076-.631.05-.34.041-.665-.034-1.038-.1-.499-.108-.515-.116-.183Zm-33.792-.058c0 .116.03.158.077.1.03-.05.03-.15 0-.208-.046-.05-.077-.008-.077.108Zm14.367.166c0 .133.033.25.075.25.041 0 .058-.1.041-.217-.058-.315-.108-.324-.116-.033Zm-13.404-.125c-.083.083.059.565.175.607.091.033.108-.025.058-.241-.058-.29-.15-.44-.233-.366Zm24.283.274c-.008.075-.017 1.37-.025 2.866 0 2.698-.008 2.723-.208 3.155-.199.44-.274 1.163-.124 1.263.1.058.257-.216.257-.449 0-.083.042-.174.1-.19.066-.026.091-.424.083-1.363 0-.722.025-1.246.058-1.162.058.149.066.149.116.016.083-.224.067-.947-.016-.805-.05.074-.067.041-.067-.117 0-.157.017-.19.067-.116.058.091.074.091.074-.017a.236.236 0 0 0-.124-.19c-.067-.025-.125-.092-.125-.15 0-.083.025-.075.075.008.05.075.075-.041.075-.332 0-.315-.017-.399-.067-.282-.066.14-.074.133-.074-.067-.009-.133.024-.216.074-.182.05.033.083-.075.083-.266 0-.233-.025-.282-.083-.191-.058.091-.074.008-.074-.29.016-.391.016-.4.074-.125.058.282.058.282.075-.108 0-.216-.025-.39-.066-.39-.042 0-.067-.134-.05-.291.016-.291-.083-.499-.108-.225Zm1.727.191c0 .042.042.059.083.034.05-.025.083-.067.083-.092 0-.016-.033-.033-.083-.033-.041 0-.083.042-.083.091Zm-26.624.1c.025.083.05.307.05.498 0 .241.025.316.074.233.092-.141.025-.681-.1-.797-.057-.058-.066-.034-.024.066Zm24.108.025c-.033.033-.058.432-.058.88 0 .74-.067.964-.208.731-.1-.166-.19-.075-.249.258-.05.307-.033.365.208.614l.265.282-.058.698c-.033.473-.025.723.033.764.092.05.133-.34.1-.938-.008-.142.025-.266.075-.266.041 0 .091.174.1.39.008.382.016.382.041.075.025-.174.008-.382-.025-.457-.116-.266-.116-.357.017-.249.091.075.116.066.116-.041 0-.075-.025-.133-.058-.133-.042 0-.067-.3-.058-.665 0-.365-.025-.623-.058-.564-.042.058-.05-.034-.017-.208.033-.2.017-.307-.05-.307-.124 0-.116-.39.008-.432.067-.025.067-.1.017-.266-.041-.124-.108-.2-.141-.166Zm2.566.158c.033.066.066.124.083.124s.033-.058.033-.124c0-.067-.033-.125-.083-.125-.041 0-.058.058-.033.125Zm-14.45.091c-.033.075-.033.158-.008.183.016.025.058-.025.091-.1.033-.075.033-.158.008-.182-.016-.025-.058.024-.09.1Zm1.869-.083c-.009.05.05.141.116.2.108.082.124.074.124-.092 0-.141-.024-.166-.074-.083-.058.091-.075.091-.117 0-.024-.066-.05-.075-.05-.025Zm2.076.358c-.009.265.016.348.083.282.058-.059.058-.175.008-.366l-.083-.282-.008.365Zm-18.968-.05c-.058.282-.016 3.371.05 3.437.033.025.058-.016.067-.107.066-1.844.066-3.43.008-3.472-.05-.025-.1.033-.125.141Zm36.665.224c0 .116.03.157.077.1.03-.05.03-.15 0-.208-.047-.05-.077-.009-.077.108Zm-21.6.049c0 .092.038.117.075.05.038-.058.025-.133-.012-.157-.038-.034-.075.016-.063.107Zm3.512.681c.017.424.05.79.075.823.033.024.058-.05.058-.167 0-.257.117-.298.208-.083.058.142.066.133.125-.016.09-.216.1-.88.016-.856-.041.017-.166-.083-.282-.224l-.216-.24.016.763Zm-16.16-.481a1.433 1.433 0 0 0-.058.415v.208l.083-.208a1.01 1.01 0 0 0 .058-.415l-.025-.208-.058.208Zm14.508.083c.025.041.066.083.091.083.017 0 .033-.042.033-.083 0-.05-.041-.083-.09-.083-.042 0-.059.033-.034.083Zm-1.86.133c0 .091.038.116.075.05.038-.059.025-.133-.012-.158-.038-.033-.075.016-.063.108Zm14.45.166c0 .091.038.116.075.05.038-.059.025-.133-.012-.158-.038-.033-.075.016-.063.108Zm5.148.822c.009.457.042.872.092.93.041.058.05.15.016.208-.041.083-.033.083.042.016.066-.058.108-.423.116-1.046.017-.839 0-.947-.125-.947-.124 0-.14.108-.14.839Zm-19.507-.374c0 .158.03.224.077.141a.469.469 0 0 0 0-.29c-.046-.075-.077-.009-.077.15Zm4.634.407c0 .1.041.175.083.175.05 0 .083-.05.083-.117 0-.066-.033-.15-.083-.174-.042-.025-.083.025-.083.116Zm-1.661.307c0 .067.042.1.083.075a.158.158 0 0 0 .083-.133c0-.041-.033-.074-.083-.074-.041 0-.083.058-.083.132Z"/>\n        <path d="M100.514 10.704c.054.258.036.466-.072.499-.107.025-.232.922-.304 2.126-.071 1.137-.071 2.05.018 2.01.662-.291 1.198-2.658.787-3.505-.09-.183-.179-.565-.197-.847-.018-.283-.107-.565-.178-.623-.09-.058-.108.091-.054.34Zm.018 1.23c-.054.083-.09.016-.09-.142 0-.157.036-.224.09-.15a.407.407 0 0 1 0 .292Z" fill-rule="nonzero"/>\n        <path d="M97.296 10.987c.008.357.041.673.066.697.075.075.041-.888-.025-1.137-.041-.125-.058.058-.041.44Zm1.361-.532c0 .05.042.108.083.133.05.025.084-.008.084-.075 0-.074-.034-.132-.084-.132-.041 0-.083.033-.083.074Zm3.083.308c0 .091.037.116.074.05.038-.059.025-.133-.012-.158-.038-.034-.075.016-.063.108Zm-17.034.357c-.258.207-.29.29-.374.888-.05.357-.075.756-.058.889l.033.224.2-.224c.215-.25.224-.316.124-.814-.066-.357.025-.872.158-.872.1 0 .091-.033.116.814.017.374.042.706.067.73.025.026.074-.157.108-.398.033-.24.09-.523.132-.623.067-.174-.033-.64-.166-.789-.033-.041-.182.042-.34.175Zm16.285.133c0 .282.025.373.075.29.033-.074.041-.257 0-.415-.067-.282-.067-.274-.075.125Zm13.794-.266c-.083.1-.092.34-.058.988a59 59 0 0 1 .083 1.943c.008.598.05 1.146.091 1.221.042.075.066-.423.042-1.237-.017-.997 0-1.362.074-1.362.05 0 .067-.042.034-.1-.034-.05-.084-.432-.108-.847-.042-.623-.067-.722-.158-.606Zm-15.039.44c0 .091.038.116.075.05.038-.058.025-.133-.012-.158-.038-.033-.075.017-.063.108Zm2.541.116c-.025.092-.009.166.033.166.041 0 .074-.074.074-.166 0-.091-.016-.166-.033-.166-.016 0-.05.075-.074.166Zm8.013.083c0 .158.031.225.077.141a.469.469 0 0 0 0-.29c-.046-.075-.077-.008-.077.15Zm-9.417 1.204c-.017 1.188-.017 1.528.025 2.409l.017.498.058-.581c.033-.324.066-.947.074-1.387.009-.507.042-.822.108-.864.067-.041.075 0 .05.116-.033.1-.016.183.025.183.042 0 .075-.091.075-.2 0-.099.025-.431.058-.722.05-.515.05-.523-.1-.373-.15.14-.157.14-.257-.05-.1-.166-.116-.033-.133.971Zm1.113-.872c0 .117.03.158.077.1a.25.25 0 0 0 0-.207c-.046-.05-.077-.009-.077.107Zm-.307.125c0 .116.024.208.066.208.033 0 .058-.092.058-.208 0-.116-.025-.208-.058-.208-.042 0-.066.092-.066.208Zm.631-.066c-.009.1.033.207.074.232.1.058.1-.016 0-.249-.066-.158-.074-.158-.074.017Zm-4.983.398c0 .283.025.374.075.29.033-.074.041-.257 0-.414-.067-.283-.067-.274-.075.124Zm12.224.083c0 .274.037.374.073.224a1.15 1.15 0 0 0 0-.498c-.036-.124-.073 0-.073.274Zm6.76-.258c-.025.067 0 .159.058.217.083.066.125.058.166-.05a.82.82 0 0 0 .05-.208c0-.124-.224-.083-.274.042Zm-21.068.94c-.34 1.095-.399 1.154-.366.381.033-.623.025-.64-.083-.357-.083.208-.1.507-.066 1.022.033.606.016.747-.1.88-.075.083-.174.29-.224.457-.083.299-.241.415-.241.174 0-.066-.025-.125-.058-.125-.1 0 0 2.575.1 2.641.05.034.09.3.09.598.01.905.341 1.23.532.532.092-.324.092-.39-.008-.457-.083-.05-.083-.075-.008-.075.058 0 .1-.124.1-.34 0-.2.033-.316.082-.283.05.025.084-.025.084-.124 0-.1-.034-.15-.084-.125-.041.025-.083.017-.083-.033 0-.042.042-.091.092-.108.124-.041.124-1.47 0-2.259-.075-.465-.083-.672-.017-.739.067-.066.092-.05.092.067 0 .14.016.15.083.041.058-.083.074.598.05 2.184-.034 2.134-.026 2.317.116 2.492.083.1.182.157.216.124.033-.033.066-.315.083-.623.008-.315.05-.63.074-.706.034-.074.034-.174.009-.216-.017-.033-.009-.207.033-.382.05-.215.033-.44-.05-.705-.15-.507-.15-.84.008-.84.191 0 .25-.688.117-1.452-.034-.233-.083-.54-.108-.69-.017-.158-.058-.299-.083-.324-.025-.025-.009-.116.041-.199.05-.1.05-.158 0-.158s-.066-.216-.033-.54c.066-.788-.091-.68-.39.266Zm6.469-.765c-.033.042-.058.839-.058 1.77-.009 1.37.008 1.677.1 1.602.057-.05.132-.058.174-.025.033.033.033-.017-.017-.108-.041-.091-.066-.448-.05-.789.009-.34.017-.805.025-1.03 0-.224.025-.39.05-.365.033.041.108.872.116 1.378 0 .059.025.092.067.067.091-.05.033-1.62-.067-1.786-.066-.108-.074-.1-.083.067 0 .357-.1.116-.158-.382-.024-.266-.074-.449-.1-.399Zm.714.374c.017.208-.017.531-.066.714-.067.274-.059.399.033.623.075.166.116.465.1.74-.034.722-.034.763.008.805.14.14.199-.15.174-.83-.025-.732.042-1.03.216-.923.042.025.075-.016.075-.083 0-.074.075-.249.166-.398.174-.283.232-.78.083-.69-.042.025-.083.125-.083.216 0 .083-.042.158-.083.158-.05 0-.083-.05-.075-.108.008-.05.008-.19 0-.299l-.008-.2-.191.175c-.25.233-.29.233-.332-.05-.017-.124-.025-.058-.017.15Zm-.54-.216c0 .017.067.083.15.141.124.108.133.1.025-.033-.108-.133-.175-.174-.175-.108Zm15.197.291c0 .05.034.108.083.133.05.024.059-.009.034-.075-.058-.15-.117-.175-.117-.058Zm.582.066c-.067.764-.017 1.23.124 1.096.092-.1.083-1.179-.016-1.212-.05-.017-.108.033-.108.116Zm-14.251.83c.033.682.017.939-.058.972-.075.042-.075.058.008.1.05.025.1.124.092.224 0 .1-.025.133-.05.075-.05-.125-.191-.05-.15.091.075.258.117.648.059.606-.075-.041-.133 2.508-.059 2.849.1.473.175.266.183-.515.017-1.52.108-3.347.2-3.729.1-.448.041-1.088-.142-1.395-.116-.19-.124-.125-.083.723Zm12.996.216c-.032.557-.024 1.005.034 1.18.133.432.257.357.183-.108a21.689 21.689 0 0 1-.117-1.18l-.05-.788-.05.896Zm-6.859-.191c0 .25.037.358.073.225a.97.97 0 0 0 0-.457c-.036-.125-.073-.017-.073.232Z"/>\n        <path d="M101.149 13.511c0 .042.041.125.083.191.058.1.075.083.058-.066-.008-.158-.141-.274-.141-.125Zm9.476.159c0 .09.038.115.075.049.037-.058.025-.133-.013-.158-.037-.033-.074.017-.062.108Zm3.246.032c0 .117.031.158.077.1.031-.05.031-.15 0-.208-.046-.05-.077-.008-.077.108Zm-12.614.748c0 .299.036.415.072.266.037-.142.037-.39 0-.54-.036-.141-.072-.025-.072.274Zm7.266-.29c-.025.605.075 1.286.191 1.286.1 0 .008-1.337-.1-1.453-.041-.041-.083.025-.09.166Zm-24.223.174c0 .09.037.116.075.05.037-.059.025-.133-.013-.158-.037-.034-.075.016-.062.108Zm.755.116c0 .116.03.158.077.1.03-.05.03-.15 0-.208-.047-.05-.077-.008-.077.108Zm24.249.041c0 .133.03.183.077.1a.347.347 0 0 0 0-.25c-.046-.049-.077.01-.077.15Zm.249-.041c0 .116.03.158.077.1.03-.05.03-.15 0-.208-.046-.05-.077-.008-.077.108Zm7.623.041c-.008.092-.024.274-.033.416-.041.431-.041.44-.216.398-.124-.033-.166 0-.166.133 0 .091-.033.174-.083.174-.041 0-.083.1-.075.225l.009.232.066-.207c.033-.117.067-.158.075-.1.008.141.266.706.34.764.142.1.258.44.2.565-.108.249-.1.34.016.29.067-.025.1-.074.075-.108-.041-.058.2-.199.258-.14.14.14.257.522.199.639-.092.174-.008.515.116.473.05-.017.141-.116.191-.233.058-.108.108-.149.108-.1 0 .059.042.109.083.109.125 0 .1-.3-.05-.648-.091-.208-.14-.656-.174-1.37-.025-.665-.075-1.138-.15-1.28-.108-.198-.108-.182-.066.267.041.398.033.473-.066.415-.1-.058-.1-.05-.009.058.116.141.116 1.063 0 1.063-.033 0-.124-.1-.207-.216a3.744 3.744 0 0 0-.333-.39c-.108-.092-.19-.208-.19-.258 0-.05.04-.033.082.034.059.09.084.058.084-.15 0-.141.041-.266.09-.266.042 0 .059-.041.034-.091-.033-.042-.083-.258-.124-.473-.034-.216-.075-.316-.084-.225Zm1.661-.008c0 .066-.041.133-.1.15-.066.024-.099.498-.124 1.528-.025.888-.008 1.453.042 1.403.15-.166.29-.847.274-1.354-.017-.514.066-.656.232-.373.067.116.083.074.092-.2 0-.423-.15-.797-.308-.739-.091.042-.1-.016-.058-.24.025-.158.025-.291 0-.291s-.05.05-.05.116Zm-8.454.341c0 .132.031.182.077.1a.347.347 0 0 0 0-.25c-.046-.05-.077.008-.077.15Zm-26.466.033c-.025.041-.008.1.041.133.042.025.084-.009.084-.075 0-.15-.05-.175-.125-.058Zm16.559.257c-.05.357.158 1.013.233.773a.417.417 0 0 0-.05-.266c-.067-.117-.067-.175.016-.2.075-.033.075-.066 0-.116-.05-.033-.108-.183-.124-.315-.025-.216-.042-.191-.075.124Zm-6.369-.008c-.059.158-.083.299-.059.324.05.058.216-.407.183-.515-.016-.05-.075.041-.124.19Zm10.048-.133c-.125.141-.257 2.167-.208 3.015.034.448.017.697-.05.73-.224.142-.016 1.047.25 1.047.116 0 .124-.216.091-1.935-.033-2.151-.025-2.799.033-2.899.067-.107-.025-.074-.116.042Zm-20.18.349c0 .133.03.182.077.1a.347.347 0 0 0 0-.25c-.046-.05-.077.009-.077.15Zm1.088.091c-.025.075-.008.158.05.191.075.05.066.092-.025.175-.158.124-.1.265.075.19.074-.024.124.009.124.084 0 .066.075.14.175.166.157.041.174.091.14.423-.032.283-.008.382.067.382.133 0 .283.258.29.515.01.141.026.15.05.042.017-.075.075-.117.125-.092.05.033.042-.025-.016-.124-.05-.1-.083-.382-.075-.615.025-.374 0-.432-.125-.432-.083 0-.182-.074-.216-.166a.94.94 0 0 0-.24-.324c-.092-.091-.175-.249-.175-.357 0-.216-.15-.257-.224-.058Zm9.193-.041c0 .041.042.058.083.033.05-.025.083-.067.083-.092 0-.016-.033-.033-.083-.033-.041 0-.083.042-.083.092Zm-9.94.258c-.017.132.008.149.083.074.058-.058.066-.116.008-.175-.05-.05-.083-.016-.091.1Zm15.754.066a.09.09 0 0 0 .082.083c.05 0 .083-.042.083-.083 0-.05-.033-.084-.083-.084a.083.083 0 0 0-.083.084Zm1.162.224c0 .133-.042.282-.1.34-.075.075-.033.166.191.415.158.167.457.524.648.798.299.398.374.465.44.357.05-.092.025-.233-.075-.424-.432-.83-.556-1.038-.63-1.021-.05.008-.134-.133-.184-.307-.116-.4-.29-.499-.29-.158Zm-13.877.232c.083.133.133.3.116.357-.025.058.009.083.083.05.125-.041.316.465.316.88.008.117.025.358.05.54.041.274.058.3.108.158.041-.091.033-.332-.009-.54-.1-.515-.091-.531.083-.373.083.074.142.207.117.29-.017.083 0 .274.041.432l.075.282.058-.332c.158-.88.2-.938.208-.274.008.374.041.648.091.648.05 0 .083-.125.083-.282 0-.158.042-.316.083-.34.05-.026.083.007.083.074 0 .066.042.224.092.357l.1.232.057-.207c.042-.116.067-.332.075-.482.008-.141.05-.266.091-.266.059 0 .075.108.042.266-.025.15-.017.424.025.606.066.258.083.092.075-.789 0-.614-.017-.996-.034-.855-.041.316-.274.382-.274.083l-.008-.183-.108.2c-.075.14-.125.166-.174.091-.05-.075-.083-.075-.142.008-.058.083-.066.067-.041-.074.025-.1.008-.183-.033-.183-.042 0-.075.041-.075.1 0 .05-.133-.083-.299-.291-.166-.216-.324-.39-.357-.399-.025 0-.208-.008-.399-.016l-.348-.017.149.25Z"/>\n        <path d="M90.851 16.036c0 .208-.133.407-.274.407-.033 0-.05-.075-.016-.158.058-.2-.133-.315-.549-.324l-.307-.008.075.307c.041.175.033.432-.008.598-.092.366.008 1.262.15 1.312.066.017.099-.083.107-.332l.008-.357.067.29c.108.416.108.997.016 1.296-.05.166-.05.307 0 .399.117.207.017.432-.132.307-.1-.083-.108-.066-.075.075.058.207.15.274.34.216.125-.042.141-.166.117-1.213-.025-.797 0-1.162.058-1.162.05 0 .091.083.091.182 0 .175 0 .175.125.017.108-.141.116-.091.124.523 0 .631.008.673.166.631.133-.033.166 0 .166.175 0 .232-.074.274-.232.116-.058-.058-.1-.067-.108-.017 0 .042-.017.141-.033.216-.017.092.025.15.1.15.074 0 .107.05.082.124-.033.067-.016.141.025.166.175.108.266-.448.25-1.511-.009-1.254-.125-2.425-.25-2.55-.058-.058-.083-.016-.083.125Zm-.83.673c-.037.066-.074.041-.074-.05-.013-.092.025-.141.062-.108.038.025.05.1.013.158Zm.714.058c-.025.033-.008.108.041.174.059.1.075.075.075-.083l.009-.207.083.199c.1.257.157 1.18.066 1.12-.042-.024-.075-.099-.075-.165 0-.067-.033-.116-.066-.116-.042 0-.116-.092-.166-.208-.058-.133-.141-.191-.224-.158-.15.058-.175-.249-.042-.59.075-.19.108-.207.208-.124.066.058.108.125.09.158Z" fill-rule="nonzero"/>\n        <path d="M86.716 16.393c0 .2-.025.407-.05.457-.033.05-.017.091.025.091.05 0 .091-.083.091-.19 0-.15.017-.159.091-.059.067.091.075.058.042-.158a3.803 3.803 0 0 1-.05-.39c0-.066-.033-.116-.083-.116-.042 0-.075.166-.066.365Zm22.596.091c0 .274.036.374.073.225a1.15 1.15 0 0 0 0-.499c-.037-.124-.073 0-.073.274Zm-4.343-.166c0 .092-.025.499-.05.914-.025.407-.058.955-.058 1.204-.008.25-.058.531-.1.623-.05.091-.091.299-.083.457 0 .257.025.29.208.29h.207l.025-1.735c.009-1.105-.008-1.77-.066-1.827-.058-.059-.083-.034-.083.074Zm7.2.175c-.033.033-.058.116-.058.19 0 .092.025.1.091.034.05-.05.083-.133.058-.191-.016-.05-.058-.066-.091-.033Zm4.277.706c.041.813.157 1.08.324.714.074-.166.074-.357.008-.773-.05-.307-.075-.58-.058-.614.016-.025-.05-.058-.141-.058-.158-.017-.167.016-.133.73Zm-22.888-.565a.59.59 0 0 1-.274.232c-.166.059-.199.117-.15.266.034.1.05.266.05.366 0 .09.05.19.109.215.083.034.116.191.108.532 0 .266-.017.365-.034.233-.05-.341-.166-.44-.174-.15-.008.125-.033.49-.066.806-.05.506-.042.564.083.523.074-.033.133-.017.133.025 0 .157.224.083.315-.108.133-.266.141-.366.067-.955-.034-.291-.092-.499-.142-.474-.1.067-.1-.315.009-.423.05-.05.083-.34.066-.665-.016-.398-.05-.531-.1-.423Zm-9.325.108c-.025.066-.009.324.033.556l.083.432v-.465c0-.257.033-.515.058-.565.033-.05.017-.091-.033-.091s-.108.058-.141.133Zm23.933.116c.067.307.274.814.365.864.025.025.059-.125.067-.324.008-.299-.033-.399-.24-.598l-.25-.233.058.291Zm8.77-.116c0 .091.038.116.075.05.038-.058.025-.133-.012-.158-.038-.033-.075.017-.063.108Zm-29.49.158c0 .066.017.124.034.124.016 0 .05-.058.083-.124.025-.067.008-.125-.034-.125-.05 0-.083.058-.083.125Zm3.912.1c-.009.149.033.273.075.273.1 0 .1-.14 0-.373-.059-.142-.075-.125-.075.1Zm-4.982-.009c0 .091.037.116.075.05.037-.058.025-.133-.013-.158-.037-.033-.075.017-.062.108Zm.688.615c.034.431.083.896.108 1.038.108.448.183-.507.092-1.122-.133-.88-.266-.822-.2.084Zm19.117-.64c.025.083.075.125.1.1.025-.025 0-.092-.058-.15-.083-.074-.092-.066-.042.05Zm-24.781.39c0 .158.031.225.078.142a.469.469 0 0 0 0-.291c-.047-.075-.077-.008-.077.15Zm5.257-.149c-.024.066-.008.224.042.349.041.124.083.415.083.656 0 .282.025.398.083.34.058-.058.058-.299-.008-.747-.092-.698-.125-.79-.2-.598Zm-1.129.44a45.36 45.36 0 0 1-.058 1.595c-.008.058-.091.107-.183.107-.141 0-.166-.058-.166-.398 0-.282-.025-.357-.083-.266-.058.083-.083-.091-.083-.581 0-.474.025-.665.083-.582.058.1.075.084.058-.058-.016-.265-.307-.083-.307.191 0 .117-.033.183-.083.158-.05-.033-.083.075-.083.266 0 .174-.017.448-.033.606-.017.158-.009.208.008.1.058-.307.19-.208.19.15 0 .182-.032.331-.082.331a.09.09 0 0 1-.083-.083c0-.182-.208.108-.216.308-.017.15.017.182.133.15.108-.034.158.016.19.207.05.224.225.357.225.166 0-.05.066-.083.15-.083.215-.009.448-.216.423-.39-.017-.084-.008-.192.025-.233.108-.174.174-1.844.083-2.001-.075-.125-.1-.067-.108.34Zm1.902-.249c-.025.116-.017.232.025.25.1.065.182-.3.091-.391-.05-.05-.091 0-.116.14Zm-1.047.017c-.116.215-.132 1.303-.025 1.237.042-.033.1 0 .117.05.025.058.05.025.05-.083.008-.108-.025-.175-.075-.141-.042.024-.075-.142-.075-.432.008-.266.05-.507.091-.532.05-.033.067-.108.05-.166-.025-.083-.066-.058-.133.067Zm11.22.191c0 .207.036.29.072.182a.654.654 0 0 0 0-.373c-.036-.1-.072-.017-.072.19Zm11.186.124c0 .274.066.473.232.723l.225.348.041-.456c.033-.366.017-.474-.124-.615-.083-.091-.208-.216-.266-.274-.091-.091-.108-.041-.108.274Zm-3.064.025c-.075.183-.083.365-.017.698.041.24.075.498.066.564-.008.067.025.133.067.15.108.025.158-1.346.058-1.528-.058-.108-.091-.092-.174.116Zm-2.832.498c0 .274.033.523.074.548.067.05.025-.938-.041-1.021-.017-.017-.033.19-.033.473Z"/>\n        <path d="M117.398 17.603c-.073.1-.025.29.12.43.146.138.17.277.098.327-.073.038-.049.076.097.076.557 0 .823-.34.532-.682-.339-.366-.654-.416-.847-.151Zm.75.328c.073.063.025.126-.096.126-.146 0-.267-.063-.267-.126 0-.076.049-.126.097-.126.073 0 .194.05.266.126Z" fill-rule="nonzero"/>\n        <path d="M83.958 17.871c-.008.042-.033.1-.041.15-.008.041-.025.091-.042.1-.066.09-.041.473.05.606.1.133.117.14.117.025a.21.21 0 0 0-.1-.175c-.083-.025-.083-.058 0-.166a.513.513 0 0 0 .075-.365c-.017-.125-.042-.208-.059-.175Zm.425.117c0 .09.037.116.075.05.037-.059.025-.134-.013-.158-.037-.034-.075.016-.062.108Zm.672.074c0 .133.03.183.077.1a.347.347 0 0 0 0-.25c-.047-.049-.077.01-.077.15Zm2.433-.124c.025.041.066.083.091.083.017 0 .033-.042.033-.083 0-.05-.041-.083-.09-.083-.042 0-.059.033-.034.083Zm27.031.124c0 .117.033.208.075.208.033 0 .05-.091.025-.208-.017-.116-.05-.207-.067-.207-.016 0-.033.091-.033.207Zm-16.932.092c0 .091.037.116.075.05.037-.059.025-.133-.013-.158-.037-.034-.075.016-.062.108Zm8.711.091c0 .075.024.108.058.083.025-.033.1-.017.166.042.091.066.1.058.058-.042-.067-.183-.282-.25-.282-.083Zm-24.822.158c0 .091.038.116.075.05.038-.059.025-.133-.012-.158-.038-.033-.075.016-.063.108Zm35.177 0c-.091.091-.066.598.025.656.125.075.415-.116.415-.274 0-.125-.016-.125-.083-.017-.041.067-.083.108-.091.083-.05-.29-.075-.365-.133-.423-.041-.042-.1-.05-.133-.025Zm-10.015.407c.008.182.033.54.075.789.058.44.058.431.058-.225 0-.373-.033-.73-.075-.789-.033-.066-.058.025-.058.225Zm-16.684.041c0 .116.031.158.077.1.031-.05.031-.15 0-.208-.046-.05-.077-.008-.077.108Zm-3.163.05c0 .091.038.116.075.05.038-.058.025-.133-.012-.158-.038-.033-.075.017-.063.108Zm2.607.033c-.042.125-.083.158-.125.092-.041-.075-.091-.067-.199.033-.075.075-.116.174-.091.216.033.041.008.074-.034.074-.05 0-.09.05-.09.117 0 .066.124.133.315.166.456.075.531.066.465-.05-.042-.058-.058-.216-.05-.357.025-.34-.108-.548-.191-.29Zm-2.201.083c0 .042-.058.083-.124.083-.067 0-.125.042-.125.092 0 .05-.058.074-.124.041-.092-.033-.117.009-.108.166.016.175.05.2.207.158.125-.025.208.008.266.1.083.14.083.14.091 0 0-.075.05-.141.108-.141.075 0 .067-.025-.016-.075-.059-.042-.108-.166-.108-.29 0-.117-.017-.217-.034-.217-.016 0-.033.033-.033.083Zm19.293.291c0 .183.036.25.07.141a.542.542 0 0 0 0-.332c-.052-.075-.086.008-.07.191Zm6.377-.075c0 .092.038.116.075.05.038-.058.025-.133-.012-.158-.038-.033-.075.017-.063.108Zm2.649-.066c0 .066.307.349.373.349.025 0 .042-.059.042-.125a.128.128 0 0 0-.125-.125c-.066 0-.124-.041-.124-.083 0-.05-.034-.083-.083-.083-.042 0-.083.025-.083.067Zm-6.146.266c0 .041.042.083.092.083.041 0 .058-.042.033-.083-.025-.05-.067-.084-.092-.084-.016 0-.033.034-.033.084Zm-22.911.132c0 .092.037.117.075.05.037-.058.025-.133-.013-.158-.037-.033-.075.017-.062.108Zm19.407.158c-.025.116-.009.233.025.258.041.025.074-.075.074-.208 0-.316-.05-.332-.1-.05Zm6.701.008c.025.241.1.341.191.241.034-.033.009-.083-.05-.1-.074-.033-.082-.074-.016-.149s.058-.116-.033-.15c-.083-.033-.108.009-.092.158Zm1.67-.074c-.1.1-.05.274.074.274.067 0 .125-.05.125-.116 0-.142-.116-.233-.2-.158Zm1.578.174c-.025.05-.009.116.041.141.125.083.208-.025.1-.133-.058-.058-.108-.058-.141-.008Z"/>\n      </g>\n    </svg>\n\n    ',
      });
  }
  render() {
    return V`
    <div class="footer-logos">
      <outline-link
        link-href="https://www.iadb.org/en"
        link-target="_blank"
        link-aria-label="Idb Logo"
      >
        ${Ze(this.logos.idb)}
      </outline-link>
      <outline-link
        link-href="https://www.idbinvest.org/en"
        link-target="_blank"
        link-aria-label="Idb Invest"
      >
        ${Ze(this.logos.invest)}
      </outline-link>
      <outline-link
        link-href="https://bidlab.org/en"
        link-target="_blank"
        link-aria-label="Idb Lab"
      >
      ${Ze(this.logos.lab)}
      </outline-link>
    </div>
    `;
  }
};
(mi.styles = [ui]), (mi = s([le("idb-footer-logos")], mi));
let bi = class extends xe {
  constructor() {
    super(...arguments), (this.mobileController = new r(this, "lg"));
  }
  render() {
    const e = { mobile: this.mobileController.isMobile };
    return V`
      <section class="footer">
        <div class="footer-navigation ${Ae(e)}">
          ${
            this.mobileController.isMobile
              ? V`<slot name="primary"></slot>`
              : V`
          <outline-container ?x-padding="${!this.mobileController
            .isMobile}" ?y-padding="${!this.mobileController.isMobile}"
          >
            <slot name="primary"></slot>
          </outline-container>`
          }
        </div>
        <div class="footer-bottom--wrapper">
          <outline-container x-padding y-padding container-align="center">
            <div class="footer-bottom--content">
              <div class="footer-social">
                <idb-social-icons></idb-social-icons>
              </div>
              <div class="footer-logos">
                <idb-footer-logos></idb-footer-logos>
              </div>
            </div>
          </outline-container>
        </div>
      </section>
    `;
  }
};
(bi.styles = [di]), (bi = s([le("idb-footer")], bi));
var vi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.idb-form--columns-2 form, .idb-form--columns-3 form {

  display: block;
}
    .idb-form--columns-2 form, .idb-form--columns-3 form {

  -moz-column-gap: 3rem;

       column-gap: 3rem;
}
    .idb-form--columns-2 form, .idb-form--columns-3 form {

  row-gap: 0.75rem;
}
    @media (min-width: 768px) {
  .idb-form--columns-2 form, .idb-form--columns-3 form {

    display: grid;
  }
}
    .idb-form--columns-2 form .form-item input, .idb-form--columns-3 form .form-item input {

  max-width: 100%;
}
  .idb-form--columns-3 form {

  grid-template-columns: repeat(3, minmax(0, 1fr));
}
  .idb-form--columns-3 form .form-actions {

  grid-column: span 3 / span 3;
}
  .idb-form--columns-2 form {

  grid-template-columns: repeat(2, minmax(0, 1fr));
}
  .idb-form--columns-2 form .form-actions {

  grid-column: span 2 / span 2;
}

label {

  margin-bottom: 0.75rem;

  display: block;

  font-weight: var(--fw-semibold);

  color: var(--blue-responsible-darken-1);
}

input[type='text'], input[type='email'], input[type='url'], input[type='password'], input[type='number'], input[type='date'], input[type='datetime-local'], input[type='month'], input[type='search'], input[type='tel'], input[type='time'], input[type='week'], textarea, select[multiple], select {

  box-sizing: border-box;

  width: 100%;

  -webkit-appearance: none;

     -moz-appearance: none;

          appearance: none;

  border-radius: 0.375rem;

  border-width: 1px;

  border-style: solid;

  border-color: var(--gray-cosmopolitan-main);

  background-color: var(--neutral-white);

  padding-top: 0.5rem;

  padding-bottom: 0.5rem;

  padding-left: 0.75rem;

  padding-right: 0.75rem;

  font-family: Open Sans, Helvetica, Arial, sans-serif;

  font-size: var(--fs-base);

  line-height: var(--lh-base);

  line-height: 1.25rem;

  color: var(--blue-responsible-darken-1);
}

@media (min-width: 768px) {
  input[type='text'], input[type='email'], input[type='url'], input[type='password'], input[type='number'], input[type='date'], input[type='datetime-local'], input[type='month'], input[type='search'], input[type='tel'], input[type='time'], input[type='week'], textarea, select[multiple], select {

    width: auto;
  }
}

input[type='text'],
input[type='email'],
input[type='url'],
input[type='password'],
input[type='number'],
input[type='date'],
input[type='datetime-local'],
input[type='month'],
input[type='search'],
input[type='tel'],
input[type='time'],
input[type='week'],
textarea,
select[multiple],
select{

  min-height:40px;
}

input[type='text']::-moz-placeholder, input[type='email']::-moz-placeholder, input[type='url']::-moz-placeholder, input[type='password']::-moz-placeholder, input[type='number']::-moz-placeholder, input[type='date']::-moz-placeholder, input[type='datetime-local']::-moz-placeholder, input[type='month']::-moz-placeholder, input[type='search']::-moz-placeholder, input[type='tel']::-moz-placeholder, input[type='time']::-moz-placeholder, input[type='week']::-moz-placeholder, textarea::-moz-placeholder, select[multiple]::-moz-placeholder, select::-moz-placeholder {

  color: var(--gray-cosmopolitan-main);
}

input[type='text']::placeholder, input[type='email']::placeholder, input[type='url']::placeholder, input[type='password']::placeholder, input[type='number']::placeholder, input[type='date']::placeholder, input[type='datetime-local']::placeholder, input[type='month']::placeholder, input[type='search']::placeholder, input[type='tel']::placeholder, input[type='time']::placeholder, input[type='week']::placeholder, textarea::placeholder, select[multiple]::placeholder, select::placeholder {

  color: var(--gray-cosmopolitan-main);
}

input[type='text']:hover, input[type='email']:hover, input[type='url']:hover, input[type='password']:hover, input[type='number']:hover, input[type='date']:hover, input[type='datetime-local']:hover, input[type='month']:hover, input[type='search']:hover, input[type='tel']:hover, input[type='time']:hover, input[type='week']:hover, textarea:hover, select[multiple]:hover, select:hover {

  border-color: var(--blue-responsible-darken-1);
}

input[type='text']:hover, input[type='email']:hover, input[type='url']:hover, input[type='password']:hover, input[type='number']:hover, input[type='date']:hover, input[type='datetime-local']:hover, input[type='month']:hover, input[type='search']:hover, input[type='tel']:hover, input[type='time']:hover, input[type='week']:hover, textarea:hover, select[multiple]:hover, select:hover {

  outline: 2px solid transparent;

  outline-offset: 2px;
}

input[type='text']:focus, input[type='email']:focus, input[type='url']:focus, input[type='password']:focus, input[type='number']:focus, input[type='date']:focus, input[type='datetime-local']:focus, input[type='month']:focus, input[type='search']:focus, input[type='tel']:focus, input[type='time']:focus, input[type='week']:focus, textarea:focus, select[multiple]:focus, select:focus {

  border-color: var(--blue-responsible-darken-1);
}

input[type='text']:focus, input[type='email']:focus, input[type='url']:focus, input[type='password']:focus, input[type='number']:focus, input[type='date']:focus, input[type='datetime-local']:focus, input[type='month']:focus, input[type='search']:focus, input[type='tel']:focus, input[type='time']:focus, input[type='week']:focus, textarea:focus, select[multiple]:focus, select:focus {

  outline: 2px solid transparent;

  outline-offset: 2px;
}

input[type='text']:focus, input[type='email']:focus, input[type='url']:focus, input[type='password']:focus, input[type='number']:focus, input[type='date']:focus, input[type='datetime-local']:focus, input[type='month']:focus, input[type='search']:focus, input[type='tel']:focus, input[type='time']:focus, input[type='week']:focus, textarea:focus, select[multiple]:focus, select:focus{
    box-shadow:var(--brand-shadow);
  }

input[type='text'].error, input[type='email'].error, input[type='url'].error, input[type='password'].error, input[type='number'].error, input[type='date'].error, input[type='datetime-local'].error, input[type='month'].error, input[type='search'].error, input[type='tel'].error, input[type='time'].error, input[type='week'].error, textarea.error, select[multiple].error, select.error {

  border-color: var(--ui-errorText);
}

select {

  background-repeat: no-repeat;

  padding-right: 3.5rem;
  background-position:right 1.25rem center;
  background-image:url("data:image/svg+xml,%3Csvg width='15' height='8' viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.81303 7.83121L14.6455 0.979811C14.8692 0.755333 14.8688 0.391897 14.6443 0.167795C14.4198 -0.0561333 14.0562 -0.0555547 13.8323 0.168952L7.40651 6.61254L0.980746 0.16872C0.756818 -0.0557579 0.393412 -0.0563366 0.168904 0.167563C0.0563612 0.279903 8.96267e-05 0.427077 8.96203e-05 0.574251C8.96139e-05 0.721049 0.0559854 0.867644 0.167747 0.979782L7.00003 7.83121C7.10759 7.93933 7.25399 8 7.40651 8C7.55904 8 7.70526 7.93916 7.81303 7.83121Z' fill='%231B365D'/%3E%3C/svg%3E");
}

textarea {

  display: block;
}

input[type='checkbox'], input[type='radio'] {

  float: left;

  margin: 0px;

  box-sizing: border-box;

  cursor: pointer;

  -webkit-appearance: none;

     -moz-appearance: none;

          appearance: none;

  border-width: 2px;

  border-style: solid;

  border-color: var(--gray-professional-lighten-1);

  outline: 2px solid transparent;

  outline-offset: 2px;

  min-width:1.25rem;
  width:25px;
  height:25px;
  margin-top:-2px;
}

input[type='checkbox'] + label, input[type='radio'] + label {

  margin-bottom: 0px;
}

input[type='checkbox'] + label, input[type='radio'] + label {

  margin-top: 0px;
}

input[type='checkbox'] + label, input[type='radio'] + label {

  display: inline-block;
}

input[type='checkbox'] + label, input[type='radio'] + label {

  cursor: pointer;
}

input[type='checkbox'] + label, input[type='radio'] + label {

  padding-left: 0.75rem;
}

input[type='checkbox'] + label, input[type='radio'] + label {

  color: var(--gray-professional-lighten-1);
}

input[type='checkbox'].error, input[type='radio'].error {

  border-color: var(--ui-errorText);
}

input[type='checkbox'] {

  position: relative;

  border-radius: 0.25rem;

  background-color: var(--neutral-white);
}

input[type='checkbox']:checked {

  position: relative;
}

input[type='checkbox']:checked {

  border-color: var(--blue-responsible-main);
}

input[type='checkbox']:checked {

  background-color: var(--blue-responsible-main);
}

input[type='checkbox']:checked {

  color: var(--neutral-white);
}

input[type='checkbox']:checked::before {

  position: absolute;
}

input[type='checkbox']:checked::before {

  left: 50%;
}

input[type='checkbox']:checked::before {

  top: 50%;
}

input[type='checkbox']:checked::before {

  display: block;
}

input[type='checkbox']:checked::before {

  height: 0.5rem;
}

input[type='checkbox']:checked::before {

  width: 1rem;
}

input[type='checkbox']:checked::before {

  border-width: 1px;
}

input[type='checkbox']:checked::before {

  border-top-width: 0px;
}

input[type='checkbox']:checked::before {

  border-bottom-width: 2px;
}

input[type='checkbox']:checked::before {

  border-left-width: 2px;
}

input[type='checkbox']:checked::before {

  border-right-width: 0px;
}

input[type='checkbox']:checked::before {

  border-style: solid;
}

input[type='checkbox']:checked::before {

  border-color: var(--neutral-white);
}

input[type='checkbox']:checked::before{
      content:'';
      transform:translate(-50%, -60%) rotate(-45deg);
    }

input[type='checkbox'].error:checked {

  border-color: var(--ui-errorText);
}

input[type='checkbox'].error:checked {

  background-color: var(--neutral-white);
}

input[type='checkbox'].error:checked::before {

  border-color: var(--ui-errorText);
}

input[type='radio'] {

  display: inline-flex;

  cursor: pointer;

  align-items: center;

  justify-content: center;

  border-radius: 9999px;

  color: var(--neutral-white);

  outline: 2px solid transparent;

  outline-offset: 2px;
}

input[type='radio']::before {

  display: block;
}

input[type='radio']::before {

  border-radius: 9999px;
}

input[type='radio']::before{

    content:'';
    width:15px;
    height:15px;
  }

input[type='radio']:checked {

  border-color: var(--blue-responsible-main);
}

input[type='radio']:checked::before {

  background-color: var(--blue-responsible-main);
}

input[type='radio'].error:checked {

  border-color: var(--ui-errorText);
}

input[type='radio'].error:checked::before {

  background-color: var(--ui-errorText);
}

input[type='file'] {

  font-size: var(--fs-base);

  line-height: var(--lh-base);
}

input[type='date'] {

  text-align: right;
}

fieldset {

  margin: 0px;

  border-style: none;

  padding: 0px;
}

legend {

  margin-bottom: 0.75rem;

  font-weight: var(--fw-semibold);
}

[type='submit'] {

  display: flex;

  cursor: pointer;

  align-items: center;

  border-width: 1px;

  border-style: solid;

  border-color: var(--blue-responsible-main);

  background-color: var(--blue-responsible-main);

  padding-left: 1rem;

  padding-right: 1rem;

  padding-top: 0.5rem;

  padding-bottom: 0.5rem;

  text-align: center;

  font-family: Open Sans, Helvetica, Arial, sans-serif;

  font-size: var(--fs-lg);

  line-height: var(--lh-lg);

  font-weight: var(--fw-semibold);

  line-height: 1.25;

  color: var(--neutral-white);

  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;

  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;

  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;

  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  transition-duration: 300ms;

  border-radius:10px;
}

[type='submit']:hover, [type='submit']:focus {

  background-color: var(--blue-responsible-main);
}

[type='submit']:hover, [type='submit']:focus {

  color: var(--neutral-white);
}

[type='submit'].secondary {

  background-color: var(--neutral-white);
}

[type='submit'].secondary {

  color: var(--blue-responsible-main);
}

[type='submit'].secondary:hover, [type='submit'].secondary:focus {

  background-color: var(--neutral-white);
}

[type='submit'].secondary:hover, [type='submit'].secondary:focus {

  color: var(--blue-responsible-main);
}

[type='submit'].tertiary {

  border-top-color: var(--green-guarantee-lighten-2);
}

[type='submit'].tertiary {

  background-color: var(--green-guarantee-lighten-3);
}

[type='submit'].tertiary {

  color: var(--neutral-white);
}

[type='submit'].tertiary:hover, [type='submit'].tertiary:focus {

  background-color: var(--neutral-white);
}

[type='submit'].tertiary:hover, [type='submit'].tertiary:focus {

  color: var(--green-guarantee-darken-2);
}

input[data-icon],
input[type='search']{
  background-repeat:no-repeat;
  background-position:10px center;
  background-size:20px auto;
  padding-left:40px;
}

input[data-icon='search'],
input[type='search']{
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath d='M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z' stroke='%23004E70' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 19L14.65 14.65' stroke='%23004E70' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
}

select[disabled], select[disabled]:hover, input[disabled], input[disabled]:hover, textarea[disabled], textarea[disabled]:hover {

  cursor: not-allowed;

  border-color: var(--gray-cosmopolitan-main);

  background-color: var(--gray-cosmopolitan-lighten-4);

  color: var(--gray-cosmopolitan-darken-1);
}

select[disabled]::-moz-placeholder, select[disabled]:hover::-moz-placeholder, input[disabled]::-moz-placeholder, input[disabled]:hover::-moz-placeholder, textarea[disabled]::-moz-placeholder, textarea[disabled]:hover::-moz-placeholder {

  color: var(--gray-professional-main);
}

select[disabled]::placeholder, select[disabled]:hover::placeholder, input[disabled]::placeholder, input[disabled]:hover::placeholder, textarea[disabled]::placeholder, textarea[disabled]:hover::placeholder {

  color: var(--gray-professional-main);
}

select[disabled]{
  background-image:url("data:image/svg+xml,%3Csvg width='15' height='8' viewBox='0 0 15 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.81303 7.83121L14.6455 0.979811C14.8692 0.755333 14.8688 0.391897 14.6443 0.167795C14.4198 -0.0561333 14.0562 -0.0555547 13.8323 0.168952L7.40651 6.61254L0.980746 0.16872C0.756818 -0.0557579 0.393412 -0.0563366 0.168904 0.167563C0.0563612 0.279903 8.96267e-05 0.427077 8.96203e-05 0.574251C8.96139e-05 0.721049 0.0559854 0.867644 0.167747 0.979782L7.00003 7.83121C7.10759 7.93933 7.25399 8 7.40651 8C7.55904 8 7.70526 7.93916 7.81303 7.83121Z' fill='%23B3B5B8'/%3E%3C/svg%3E");
}

input[type='checkbox'][disabled] + label, input[type='radio'][disabled] + label {

  color: var(--gray-professional-main);
}

input[type='checkbox'][disabled]:checked {

  border-color: var(--gray-cosmopolitan-main);

  background-color: var(--gray-cosmopolitan-main);
}

input[type='radio'][disabled]:checked {

  border-color: var(--gray-cosmopolitan-main);
}

input[type='radio'][disabled]:checked::before {

  background-color: var(--gray-cosmopolitan-main);
}

[type='submit'][disabled] {

  border-color: var(--gray-cosmopolitan-lighten-2);

  background-color: var(--gray-cosmopolitan-lighten-2);

  color: var(--neutral-white);
}

[type='submit'][disabled]:hover, [type='submit'][disabled]:focus {

  border-color: var(--gray-cosmopolitan-lighten-2);
}

[type='submit'][disabled]:hover, [type='submit'][disabled]:focus {

  background-color: var(--gray-cosmopolitan-lighten-2);
}

[type='submit'][disabled]:hover, [type='submit'][disabled]:focus {

  color: var(--neutral-white);
}

[type='submit'][disabled].secondary {

  border-color: var(--gray-cosmopolitan-main);
}

[type='submit'][disabled].secondary {

  background-color: var(--neutral-white);
}

[type='submit'][disabled].secondary {

  color: var(--gray-cosmopolitan-main);
}

[type='submit'][disabled].secondary:hover, [type='submit'][disabled].secondary:focus {

  border-color: var(--gray-cosmopolitan-main);
}

[type='submit'][disabled].secondary:hover, [type='submit'][disabled].secondary:focus {

  color: var(--gray-cosmopolitan-main);
}

input[readonly], textarea[readonly] {

  background-color: var(--gray-cosmopolitan-lighten-4);
}

.form-item, .form-actions {

  margin-bottom: 2rem;

  width: 100%;
}

@media (min-width: 768px) {
  .form-item, .form-actions {

    width: auto;
  }
}

.form-item .form-item {

  margin-bottom: 1rem;
}

.form-item .form-item:last-child {

  margin-bottom: 0px;
}

.form-actions {

  display: flex;

  flex-wrap: wrap;

  justify-content: center;
}

@media (min-width: 768px) {
  .form-actions {

    flex-wrap: nowrap;
  }
  .form-actions {

    justify-content: flex-start;
  }
}

.form-actions [type='submit'] {

  margin-bottom: 1.75rem;
}

@media (min-width: 768px) {
  .form-actions [type='submit'] {

    margin-right: 1rem;
  }
}

@media (min-width: 768px) {
  .form-actions [type='submit'] {

    margin-bottom: 0px;
  }
}

.form-actions [type='submit']:last-child {

  margin-right: 0px;
}

.form-actions [type='submit']:last-child {

  margin-bottom: 0px;
}

@media (min-width: 768px) {
  .form-actions--justify-center {

    justify-content: center;
  }
}

.visually-hidden{
  position:absolute;
  width:1px;
  height:1px;
  padding:0;
  margin:-1px;
  overflow:hidden;
  clip:rect(0, 0, 0, 0);
  white-space:nowrap;
  border-width:0;
}

.inline {

  display: flex;

  flex-wrap: wrap;
}

@media (min-width: 768px) {
  .inline {

    flex-wrap: nowrap;
  }
}

.inline .form-actions {

  align-items: flex-end;
}

@media (min-width: 768px) {
  .inline .form-item {

    margin-right: 1.75rem;
  }
}

.inline .form-item--flex-1 {

  flex: 1 1 0%;
}

.inline .form-item--flex-1 input {

  width: 100%;
}

.single .form-item {

  margin-bottom: 0px;
}

.error-message {

  margin-top: 0.75rem;

  display: flex;

  align-items: center;

  color: var(--ui-errorText);
}

.error-message::before {

  margin-right: 0.5rem;
}

.error-message::before {

  display: block;
}

.error-message::before {

  height: 1.25rem;
}

.error-message::before {

  width: 1.25rem;
}

.error-message::before{
    content:'';
    background-image:url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 1.29032C14.7831 1.29032 18.7097 5.16431 18.7097 10C18.7097 14.8101 14.8141 18.7097 10 18.7097C5.19177 18.7097 1.29032 14.816 1.29032 10C1.29032 5.19343 5.18556 1.29032 10 1.29032ZM10 0C4.47754 0 0 4.47915 0 10C0 15.5241 4.47754 20 10 20C15.5225 20 20 15.5241 20 10C20 4.47915 15.5225 0 10 0ZM9.53669 4.83871H10.4633C10.7384 4.83871 10.9582 5.06782 10.9467 5.34274L10.6645 12.1169C10.6537 12.3761 10.4404 12.5806 10.181 12.5806H9.81895C9.55956 12.5806 9.34629 12.3761 9.33548 12.1169L9.05323 5.34274C9.04181 5.06782 9.26157 4.83871 9.53669 4.83871ZM10 13.3871C9.37645 13.3871 8.87097 13.8926 8.87097 14.5161C8.87097 15.1397 9.37645 15.6452 10 15.6452C10.6235 15.6452 11.129 15.1397 11.129 14.5161C11.129 13.8926 10.6235 13.3871 10 13.3871Z' fill='%23991B1B'/%3E%3C/svg%3E");
    background-size:100%;
  }

.form-item__description {

  margin-top: 0.75rem;

  font-size: var(--fs-base);

  line-height: var(--lh-base);

  color: var(--gray-professional-lighten-1);
}

.form-item--order-first {

  order: -9999;
}

.form-item--order-second{
  order:-2;
}

.exposed-form {

  flex-wrap: wrap;

  border-radius: 0.75rem;

  padding-left: 1.75rem;

  padding-right: 1.75rem;

  padding-top: 1.75rem;
}

.exposed-form.shadow{
    box-shadow:var(--brand-shadow);
  }

.exposed-form::after {

  margin-bottom: 1.75rem;
}

.exposed-form::after {

  display: block;
}

.exposed-form::after {

  width: 100%;
}

.exposed-form::after {

  border-bottom-width: 1px;
}

.exposed-form::after {

  border-top-width: 0px;
}

.exposed-form::after {

  border-left-width: 0px;
}

.exposed-form::after {

  border-right-width: 0px;
}

.exposed-form::after {

  border-style: solid;
}

.exposed-form::after {

  border-color: var(--gray-professional-main);
}

.exposed-form::after{

    content:'';
    order:-1;
  }

.exposed-form .form-item:first-child {

  flex: 1 1 0%;
}

.exposed-form .form-item:first-child input {

  width: 100%;
}

.exposed-form [type='submit'] {

  border-color: var(--blue-responsible-darken-2);
}

.exposed-form [type='submit'] {

  background-color: var(--blue-responsible-darken-1);
}

.exposed-form [type='submit'].secondary {

  border-color: var(--blue-responsible-darken-1);
}

.exposed-form [type='submit'].secondary {

  background-color: var(--neutral-white);
}

.exposed-form [type='submit'].secondary {

  color: var(--blue-responsible-darken-1);
}

.exposed-form [type='submit'].secondary:hover {

  background-color: var(--blue-responsible-darken-1);
}

.exposed-form [type='submit'].secondary:hover {

  color: var(--neutral-white);
}

.autosubmit .form-actions, .autosubmit [type='submit'] {

  display: none;
}

.autosubmit .form-item {

  margin-bottom: 0px;
}
`;
let yi = class extends Bt {
  render() {
    const e = { [`idb-form--columns-${this.cols}`]: this.cols };
    return V`<div class=${Ae(e)}><slot></slot></div>`;
  }
};
(yi.styles = [vi]),
  s([de({ type: Number })], yi.prototype, "cols", void 0),
  (yi = s([le("idb-form")], yi));
var xi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.header{
  border-bottom:1px solid #eee;
}

.user-navigation {
  background-color: var(--blue-responsible-lighten-5);
  color: var(--blue-responsible-main);
  padding: 1rem;
}

.user-navigation outline-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.language {
  flex-shrink: 1;
}

.utility {
  flex-grow: 1;
  padding-left: 1.5rem;
}

@media (min-width: 640px) {

  .utility {
    padding-left: 4rem;
  }
}

.primary {
  width: 100%;
  align-self: flex-end;
}

@media (min-width: 1024px){
  .primary {
    flex-grow: 1;
  }
  .primary {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

.primary-navigation {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: var(--fs-base);
  line-height: var(--lh-base);
  color: var(--blue-responsible-main);
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1.5rem;
}

@media (min-width: 1024px) {

  .primary-navigation {
    padding-left: 1.5rem;
  }
  .primary-navigation {
    flex-wrap: nowrap;
  }
}

.primary-navigation .logo, .primary-navigation .search, .primary-navigation .mobile-menu-open, .primary-navigation .mobile-menu-close {
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: var(--fs-2xl);
  line-height: var(--lh-2xl);
}
`;
let fi = class extends xe {
  constructor() {
    super(...arguments),
      (this.logos = {
        en: '\n    <svg width="100" height="38" viewBox="0 0 100 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <defs>\n        <path id="a" d="M0 37.131h99.955V0H0z"/>\n      </defs>\n      <g transform="matrix(1 0 0 -1 0 37.225)" fill="none" fill-rule="evenodd">\n        <mask id="b" fill="#fff">\n          <use xlink:href="#a"/>\n        </mask>\n        <g mask="url(#b)">\n          <path d="M84.773 21.584v4.288h4.8c1.396 0 3.062-.359 3.062-2.075v-.068c0-1.423-1.146-2.145-3.404-2.145h-4.458Zm5.854-9.595h-5.854v4.492h5.683c2.326 0 3.505-.744 3.505-2.212v-.068c0-1.468-1.121-2.212-3.334-2.212Zm5.275 7.552c1.807 1.224 2.687 2.89 2.687 5.072v.068c0 1.731-.57 3.142-1.743 4.315-1.452 1.452-3.697 2.219-6.491 2.219H78.92l.001-24.568h11.705c5.903 0 9.289 2.518 9.289 6.908v.067c0 2.823-1.244 4.672-4.014 5.919Zm-24.963-.61v-.068c0-4.03-2.735-6.739-6.806-6.739h-3.676v13.612h3.676c4.07 0 6.806-2.734 6.806-6.805m-6.806 12.284H54.47l.006-24.57 9.658.002c3.678 0 7.013 1.26 9.396 3.545 2.346 2.251 3.636 5.355 3.636 8.74V19c0 7.077-5.481 12.215-13.032 12.215" fill="#4D4C4E" fill-rule="nonzero"/>\n          <path d="M49.1 31.254a2.995 2.995 0 0 0 2.996-2.994V6.642h-5.99v24.613H49.1Z" fill="#444443"/>\n          <path d="M29.258 22.335c-.858.036-1.01-.482.277-.754 1.818-.384.58.718-.277.754m-2.69 2.02c-2.577.834-.881-1.229.345-1.365 1.226-.136 1.481.772-.345 1.364m-7.589 1.866c-.751-.394.593-2.14 4.032-2.233 3.44-.095-.994 3.828-4.032 2.233M25.588.96c1.081 2.012 3.436 4.946 8.47 10.86 7.529 8.847-14.78 5.876-18.604 12.57-3.148 5.517 8.57 9.482 15.65 12.55 4.603-3.033 7.943-7.94 8.803-13.824C41.38 13.062 35.104 3.666 25.587.96M21.11 15.218c-3.16-5.115 6.99-5.192 2.294-14.75-.138-.023-.274-.05-.415-.07C12.044-1.204 1.873 6.37.27 17.315a19.965 19.965 0 0 0 3.295 14.216C3.054 19.98 24.06 19.994 21.11 15.218" fill="#195974" fill-rule="nonzero"/>\n          <path d="M29.232 22.29c-.857.035-1.01-.482.276-.754 1.816-.384.58.717-.276.753m-2.688 2.018c-2.575.833-.88-1.227.345-1.364 1.224-.135 1.48.772-.345 1.364m-7.582 1.864c-.75-.394.593-2.137 4.028-2.23 3.437-.096-.993 3.824-4.028 2.23M25.565.934c1.08 2.01 3.433 4.94 8.463 10.85 7.521 8.838-14.768 5.87-18.588 12.56-3.145 5.51 8.562 9.472 15.636 12.538 4.6-3.031 7.936-7.933 8.795-13.813C41.342 13.025 35.073 3.637 25.565.934M21.09 15.179c-3.157-5.11 6.983-5.187 2.292-14.737-.138-.023-.274-.05-.415-.07C12.033-1.228 1.871 6.34.27 17.274a19.947 19.947 0 0 0 3.291 14.203c-.51-11.54 20.478-11.527 17.53-16.298" fill="#195974" fill-rule="nonzero"/>\n        </g>\n      </g>\n    </svg>\n    ',
        es: '\n    <svg width="100" height="38" viewBox="0 0 100 38" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      <defs>\n        <path id="a" d="M0 88.106h234.357V0H0z"/>\n      </defs>\n      <g fill="none" fill-rule="evenodd">\n        <mask id="b" fill="#fff">\n          <use xlink:href="#a"/>\n        </mask>\n        <g mask="url(#b)">\n          <path d="M62.854 17.39c1.81-1.228 2.691-2.898 2.691-5.087v-.07c0-1.735-.57-3.15-1.746-4.327-1.454-1.455-3.702-2.225-6.5-2.225H45.848v24.642H57.57c5.912 0 9.304-2.526 9.304-6.929v-.067c0-2.833-1.246-4.687-4.02-5.937Zm-5.284 7.574h-5.862V20.46H57.4c2.328 0 3.51.746 3.51 2.218v.07c0 1.471-1.123 2.217-3.34 2.217Zm-5.862-9.624v-4.3h4.807c1.399 0 3.067.36 3.067 2.08v.069c0 1.427-1.148 2.151-3.41 2.151h-4.464Zm34.876-9.66h-9.68l.006 24.644 9.674-.002c3.682 0 7.023-1.263 9.41-3.555 2.349-2.259 3.64-5.372 3.64-8.766v-.068c0-7.1-5.488-12.253-13.05-12.253M93.4 18.001v.068c0 4.043-2.74 6.759-6.816 6.759h-3.682V11.176h3.682c4.076 0 6.816 2.742 6.816 6.825" fill="#4D4C4E" fill-rule="nonzero"/>\n          <path d="M71.527 5.641a3.002 3.002 0 0 1 3 3.003v21.684H68.53V5.64l2.998.001Z" fill="#4D4C4E"/>\n          <path d="M20.814 21.732c-3.173 5.144 7.018 5.221 2.303 14.833-.138.023-.275.05-.417.07C11.711 38.246 1.498 30.63-.11 19.625A20.102 20.102 0 0 1 3.197 5.328c-.513 11.614 20.58 11.601 17.617 16.403M25.31 36.07c1.086-2.023 3.45-4.973 8.505-10.92 7.559-8.896-14.84-5.909-18.68-12.641-3.16-5.547 8.605-9.533 15.713-12.62a20.08 20.08 0 0 1 8.839 13.902c1.478 10.11-4.821 19.558-14.377 22.28m-6.636-25.402c-.754.397.596 2.151 4.048 2.245 3.454.096-.998-3.849-4.048-2.245m7.62 1.877c-2.588-.84-.885 1.235.346 1.372 1.231.136 1.487-.777-.346-1.372m2.7 2.03c-.86-.036-1.014.485.279.759 1.825.386.583-.722-.278-.759" fill="#195974" fill-rule="nonzero"/>\n        </g>\n      </g>\n    </svg>\n    ',
      }),
      (this.logo = "en");
  }
  render() {
    return V`${Ze(this.logos[this.logo])}`;
  }
};
s([de({ type: String, attribute: "logo" })], fi.prototype, "logo", void 0),
  (fi = s([le("idb-logo")], fi));
var wi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:flex;
  --outline-btn--link-padding:0.1em 1em;
  --outline-btn--link-weight-default:var(--fw-semibold);
  --outline-btn--link-weight-hover:var(--fw-semibold);
  --outline-btn--link-weight-focus:var(--fw-semibold);
}

.dropdown__trigger{
}

.dropdown--open .dropdown__panel {
  position: fixed !important;
  left: 0px !important;
  right: 0px !important;
  z-index: 10 !important;
  width: 100% !important;
}

@media (min-width: 480px) {

  .dropdown--open .dropdown__panel {
    position: absolute !important;
  }

  .dropdown--open .dropdown__panel {
    width: auto !important;
  }

  .dropdown--open .dropdown__panel {
    min-width: 200px !important;
  }
}

.dropdown--open .dropdown__panel{
  background:var(--neutral-transparent);
}

.dropdown--open .dropdown__panel ul{
  margin:0;
  padding:0;
  list-style-type:none;
  margin-top:15px;
  background-color:var(--blue-responsible-lighten-5);
  border:1px solid var(--blue-responsible-lighten-3);
  border-top-width:0;
}

.dropdown--open .dropdown__panel a {
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
  color:var(--outline-link-color-default);
  display:block;
  text-decoration:none !important;
  padding:var(--spacing-3) var(--spacing-2);
}

.dropdown--open .dropdown__panel a:hover,
  .dropdown--open .dropdown__panel a:focus{
    color:var(--outline-link-color-hover) !important;
    text-decoration:none !important;
    font-weight:var(--fw-semibold);
    background-color:var(--blue-responsible-lighten-4) !important;
  }

.dropdown--open .dropdown__panel a:focus{
    color:var(--outline-link-color-focus) !important;
    outline:2px solid var(--blue-responsible-lighten-2);
  }

.is-active{
  font-weight:var(--fw-semibold);
}
`;
let ki = class extends St {};
(ki.styles = [St.styles, wi]), (ki = s([le("idb-language-switcher")], ki));
var zi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:flex;
  position:absolute;
  left:0;
  right:0;
  background:var(--outline-white);
  padding-top:30px;
  padding-bottom:30px;
  z-index:200;
}

@media (min-width: 1024px){
  :host{
    position:inherit;
    padding-top:0;
    padding-bottom:0;
  }
}
`;
let _i = class extends xe {
  constructor() {
    super(...arguments), (this.slots = new l(this, !1));
  }
  render() {
    return V`<slot></slot>`;
  }
};
(_i.styles = [wt, zi]), (_i = s([le("idb-primary-menu")], _i));
let $i = class extends xe {
  constructor() {
    super(...arguments),
      (this.mobileController = new r(this, "lg")),
      (this.slots = new l(this, !1)),
      (this.isMobile = this.mobileController.isMobile);
  }
  firstUpdated() {
    this.initMenu();
  }
  updated() {
    this.updateMenu();
  }
  render() {
    return V`
      <section class="header">
        <div class="user-navigation">
          <outline-container>
            <div class="language"><slot name="language"></slot></div>
            <div class="utility"><slot name="utility"></slot></div>
          </outline-container>
        </div>
        <outline-container>
          <div class="primary-navigation">
            ${this.mobileOpenIconTemplate()}
            ${this.mobileClosedIconTemplate()}
            <div class="logo"><slot name="logo"></slot></div>
            ${this.isMobile ? null : this.primaryMenuTemplate()}
            <div class="search"><slot name="search"></slot></div>
            ${this.isMobile ? this.primaryMenuTemplate() : null}
          </div>
        </outline-container>
      </section>
    `;
  }
  primaryMenuTemplate() {
    return V`
      <div 
        class="primary" 
        aria-hidden="${!this.menuVisible}"
      >
        <slot name="primary"></slot>
      </div>
    `;
  }
  mobileOpenIconTemplate() {
    return this.isMobile
      ? V`
    <div 
      class="mobile-menu-open" 
      aria-hidden="${!this.menuOpenIconVisible}" 
      @click="${this.showMenu}">
      <slot name="mobile-open"></slot>
    </div>
    `
      : null;
  }
  mobileClosedIconTemplate() {
    return this.isMobile
      ? V`
    <div 
      class="mobile-menu-close" 
      aria-hidden="${!this.menuCloseIconVisible}" 
      @click="${this.hideMenu}">
      <slot name="mobile-close"></slot>
    </div>
    `
      : null;
  }
  initMenu() {
    (this.menuVisible = !this.isMobile),
      (this.menuOpenIconVisible = this.isMobile && !this.menuVisible),
      (this.menuCloseIconVisible = this.isMobile && this.menuVisible);
  }
  updateMenu() {
    this.mobileController.isMobile !== this.isMobile &&
      this.mobileController.isMobile !== this.isMobile &&
      ((this.isMobile = this.mobileController.isMobile),
      this.isMobile ||
        ((this.menuVisible = !0),
        (this.menuOpenIconVisible = !1),
        (this.menuCloseIconVisible = !1)),
      this.isMobile &&
        ((this.menuVisible = !1),
        (this.menuOpenIconVisible = !0),
        (this.menuCloseIconVisible = !1)));
  }
  showMenu(e) {
    e.preventDefault(),
      (this.menuVisible = !0),
      (this.menuOpenIconVisible = !1),
      (this.menuCloseIconVisible = !0);
  }
  hideMenu(e) {
    e.preventDefault(),
      (this.menuVisible = !1),
      (this.menuOpenIconVisible = !0),
      (this.menuCloseIconVisible = !1);
  }
};
($i.styles = [wt, xi]),
  s([ce()], $i.prototype, "menuVisible", void 0),
  s([ce()], $i.prototype, "menuOpenIconVisible", void 0),
  s([ce()], $i.prototype, "menuCloseIconVisible", void 0),
  s([ce()], $i.prototype, "isMobile", void 0),
  ($i = s([le("idb-header")], $i));
var Si = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  display: block;
}

.link {
  position: relative;
  display: grid;
  max-width: 100%;
  align-items: center;
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
}

.text-wrapper {
  position: relative;
  z-index: 40;
  display: grid;
  min-height: 100%;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  color: var(--neutral-white);
}

@media (min-width: 768px) {

  .text-wrapper {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .text-wrapper {
    padding-left: 0px;
    padding-right: 0px;
  }
}

.text-wrapper{
  min-height:350px;
}

.text-wrapper.centered {
  position: relative;
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  justify-items: center;
  overflow: hidden;
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (min-width: 768px) {

  .text-wrapper.centered {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .text-wrapper.centered {
    padding-left: 0px;
    padding-right: 0px;
  }
}

.gray-overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  height: 100%;
  width: 100%;
  background-color:rgba(0, 0, 0, 0.3);
}

picture img {
  position: absolute;
  width: 100%;
  object-fit: cover;
  height:100% !important;
}

.heading {
  grid-column-start: 1;
  margin-top: 6rem;
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (min-width: 768px) {

  .heading {
    grid-column-start: 2;
  }

  .heading {
    grid-column-start: 3;
  }

  .heading {
    width: 100%;
  }

  .heading {
    padding-left: 0px;
    padding-right: 0px;
  }
}

:host([centered]) .heading, :host([centered='true']) .heading {
  grid-column-start: 1;
  margin-top: 7rem;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
}

@media (min-width: 768px) {

  :host([centered]) .heading, :host([centered='true']) .heading {
    grid-column-start: 2;
  }

  :host([centered]) .heading, :host([centered='true']) .heading {
    padding-left: 0px;
    padding-right: 0px;
  }
}

.paragraph {
  grid-column-start: 1;
  display: none;
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (min-width: 768px) {

  .paragraph {
    grid-column-start: 2;
  }

  .paragraph {
    grid-column-start: 3;
  }

  .paragraph {
    display: block;
  }

  .paragraph {
    width: 100%;
  }

  .paragraph {
    padding-left: 0px;
    padding-right: 0px;
  }
}

:host([centered]) .paragraph, :host([centered='true']) .paragraph {
  grid-column-start: 1;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
}

@media (min-width: 768px) {

  :host([centered]) .paragraph, :host([centered='true']) .paragraph {
    grid-column-start: 2;
  }

  :host([centered]) .paragraph, :host([centered='true']) .paragraph {
    padding-left: 0px;
    padding-right: 0px;
  }
}

.cta {
  grid-column-start: 1;
  margin-bottom: 7rem;
  margin-top: 0.75rem;
  display: block;
  width: 100%;
  white-space: nowrap;
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (min-width: 768px) {

  .cta {
    grid-column-start: 2;
  }

  .cta {
    grid-column-start: 3;
  }

  .cta {
    padding-left: 0px;
    padding-right: 0px;
  }
}

:host([centered]) .cta, :host([centered='true']) .cta {
  grid-column-start: 1;
  margin-top: 2rem;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;
}

@media (min-width: 768px) {

  :host([centered]) .cta, :host([centered='true']) .cta {
    grid-column-start: 2;
  }

  :host([centered]) .cta, :host([centered='true']) .cta {
    padding-left: 0px;
    padding-right: 0px;
  }
}
`;
let Ai = class extends xe {
  constructor() {
    super(...arguments),
      (this.slots = new l(this, !0)),
      (this.linkedBlock = new e(this, () => {
        var e, t;
        return null !==
          (t =
            null === (e = this.shadowRoot) || void 0 === e
              ? void 0
              : e.querySelector(".link")) && void 0 !== t
          ? t
          : void 0;
      })),
      (this.centered = !1);
  }
  render() {
    return V`
        <a class="link" href="${this.url}" target="_blank">
          <div class="gray-overlay"></div>
          <slot name="background"></slot>
        <div class="${Ae({ "text-wrapper": !0, centered: this.centered })}">
            <div class="heading">
                <slot name="heading"></slot>
            </div>
            <div class="paragraph">
                <slot name="paragraph"></slot>
            </div>
            <div class="cta">
                <slot name="cta"></slot>
            </div>
        </div>
        </a>
    `;
  }
};
(Ai.styles = [Si]),
  s(
    [de({ type: Boolean, reflect: !0, attribute: "centered" })],
    Ai.prototype,
    "centered",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "url" })],
    Ai.prototype,
    "url",
    void 0
  ),
  (Ai = s([le("idb-image-banner-cta")], Ai));
var Mi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  border-radius: 0.5rem;
  display:inline-block;
  box-sizing:border-box;
  position:relative;
  max-height:100%;
  width:100%;
}

.link {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  display: grid;
  height: 100%;
  width: 100%;
  align-items: center;
  border-radius: 0.5rem;
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
  pointer-events:all;
}

.gradient-background {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  background:rgb(176, 207, 184);
  background:linear-gradient(
    356deg,
    rgba(176, 207, 184, 1) 24%,
    rgba(48, 129, 68, 1) 100%
  );
}

.gray-overlay {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  background-color:rgba(0, 0, 0, 0.5);
}

img {
  position: absolute;
  border-radius: 0.5rem;
  object-fit: cover;
  height:100% !important;
  width:100% !important;
}

.text-wrapper {
  position: relative;
  z-index: 10;
  margin: 2rem;
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: left;
  color: var(--neutral-white);
  word-break:break-word;
}

.heading a {
  color: var(--neutral-white);
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
}

.description {
  position: relative;
  margin-top: 1rem;
}

@media (min-width: 1024px) {

  .description {
    display: none;
  }
}

.description__trigger {
  display: block;
}

.description__trigger .description {
  position: absolute;
}

.description__trigger .description {
  display: block;
}

.description__trigger .description {
  padding-right: 3rem;
}

.text-wrapper.wrapper-mobile {
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  background-color: var(--green-guarantee-darken-2);
  opacity: 0.9;
}

.text-wrapper.wrapper-mobile .number {
  display: none;
}

.link:hover .text-wrapper, .link:active .text-wrapper, .link:focus .text-wrapper, .link:hover .text-wrapper--open {
  position: relative;
  z-index: 10;
  margin: 2rem;
  border-radius: 0.5rem;
  background-color: var(--green-guarantee-darken-2);
  opacity: 0.9;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

@media (hover: none) and (pointer: coarse){
  .text-wrapper--open .description {
    background-color: var(--green-guarantee-darken-2);
  }
  .text-wrapper--open .description {
    color: var(--neutral-white);
  }
  .text-wrapper--open .description {
    opacity: 0.9;
  }
  .text-wrapper--open .description{
    z-index:6;
  }
}

.text-wrapper--open .description {
  border-radius: 0.5rem;
  text-align: left;
  color: var(--neutral-white);
  opacity:1 !important;
  pointer-events:all;
  z-index:6;
}

.number {
  position: absolute;
  z-index: 20;
  float: right;
  transform-origin: bottom right;
  bottom:-6px;
  right:16px;
}

:host([number='number-1']) .text-wrapper {
  min-height: 363px;
}

:host([number='number-1']) .text-wrapper.wrapper-mobile {
  min-height: 150px;
  background-color: var(--orange-darken-2);
  opacity: 0.9;
}

:host([number='number-1']) .link:hover .text-wrapper, :host([number='number-1']) .link:active .text-wrapper, :host([number='number-1']) .link:focus .text-wrapper, :host([number='number-1']) .link:hover .text-wrapper--open {
  background-color: var(--orange-darken-2);
  opacity: 0.9;
}

:host([number='number-2']) .text-wrapper {
  min-height: 752px;
}

:host([number='number-2']) .text-wrapper.wrapper-mobile {
  min-height: 150px;
  background-color: var(--green-guarantee-darken-2);
  opacity: 0.9;
}

:host([number='number-2']) .link:hover .text-wrapper, :host([number='number-2']) .link:active .text-wrapper, :host([number='number-2']) .link:focus .text-wrapper, :host([number='number-2']) .link:hover .text-wrapper--open {
  background-color: var(--green-guarantee-darken-2);
  opacity: 0.9;
}

:host([number='number-3']) .text-wrapper {
  min-height: 432px;
}

:host([number='number-3']) .text-wrapper.wrapper-mobile {
  min-height: 150px;
  background-color: var(--blue-responsible-darken-2);
  opacity: 0.9;
}

:host([number='number-3']) .link:hover .text-wrapper, :host([number='number-3']) .link:active .text-wrapper, :host([number='number-3']) .link:focus .text-wrapper, :host([number='number-3']) .link:hover .text-wrapper--open {
  background-color: var(--blue-responsible-darken-2);
  opacity: 0.9;
}

:host([number='number-4']) .text-wrapper {
  min-height: 363px;
}

:host([number='number-4']) .text-wrapper.wrapper-mobile {
  min-height: 150px;
  background-color: var(--purple-new-darken-2);
  opacity: 0.9;
}

:host([number='number-4']) .link:hover .text-wrapper, :host([number='number-4']) .link:active .text-wrapper, :host([number='number-4']) .link:focus .text-wrapper, :host([number='number-4']) .link:hover .text-wrapper--open {
  background-color: var(--purple-new-darken-2);
  opacity: 0.9;
}

:host([number='number-5']) .text-wrapper {
  min-height: 432px;
}

:host([number='number-5']) .text-wrapper.wrapper-mobile {
  min-height: 150px;
  background-color: var(--cyan-near-darken-2);
  opacity: 0.9;
}

:host([number='number-5']) .link:hover .text-wrapper, :host([number='number-5']) .link:active .text-wrapper, :host([number='number-5']) .link:focus .text-wrapper, :host([number='number-5']) .link:hover .text-wrapper--open {
  background-color: var(--cyan-near-darken-2);
  opacity: 0.9;
}
`;
let Ci = class extends mt {
  constructor() {
    super(...arguments),
      (this.slots = new l(this, !0)),
      (this.mobileController = new r(this, "lg")),
      (this._linkedBlockController = new e(this, () => {
        var e, t;
        return null !==
          (t =
            null === (e = this.shadowRoot) || void 0 === e
              ? void 0
              : e.querySelector(".link")) && void 0 !== t
          ? t
          : void 0;
      })),
      (this.open = !1),
      (this.disabled = !1),
      (this.hoist = !1),
      (this.imageBackground = !1);
  }
  firstUpdated() {
    this.panel.hidden = !this.open;
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this.hide();
  }
  async show() {
    if (!this.mobileController.isMobile)
      return (this.panel.hidden = !1), Ee(this, "after-show");
  }
  async hide() {
    return (this.panel.hidden = !0), Ee(this, "after-hide");
  }
  async handleOpenChange() {
    this.open
      ? (qe(this, "show"), qe(this, "after-show"))
      : (qe(this, "hide"), qe(this, "after-hide"));
  }
  handleTriggerKeyUp() {
    setTimeout(() => {
      document.activeElement !== this && this.hide();
    }, 0);
  }
  numberImage() {
    return "number-1" === this.number
      ? V`
                    <div class="number number-1">
                        <svg width="77" height="178" aria-labelledby="number-1" role="img" viewBox="0 0 77 178"
                             fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path opacity=".4"
                                  d="M76.453 178H47.996V63.687c0-13.643.323-24.46.969-32.453-1.857 1.938-4.158 4.077-6.903 6.418-2.664 2.341-11.705 9.769-27.124 22.282L.648 41.89 52.718.96h23.735V178Z"
                                  fill="#fff"/>
                        </svg>
                    </div>`
      : "number-2" === this.number
      ? V`
                        <div class="number number-2">
                            <svg width="121" height="180" aria-labelledby="number-2" role="img" viewBox="0 0 121 180"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity=".4"
                                      d="M120.902 180H.898v-21.555l45.653-45.894c13.482-13.805 22.402-23.573 26.761-29.305 4.44-5.812 7.67-11.262 9.688-16.348 2.018-5.085 3.027-10.535 3.027-16.347 0-7.992-2.421-14.29-7.265-18.89-4.763-4.602-11.383-6.903-19.86-6.903-6.78 0-13.36 1.251-19.738 3.754-6.297 2.502-13.603 7.023-21.918 13.562L1.867 23.304c9.85-8.314 19.416-14.208 28.7-17.679C39.85 2.154 49.74.418 60.233.418c16.47 0 29.668 4.319 39.598 12.957 9.93 8.557 14.895 20.102 14.895 34.633 0 7.992-1.454 15.58-4.36 22.765-2.825 7.185-7.225 14.612-13.199 22.282-5.893 7.588-15.742 17.881-29.547 30.879l-30.758 29.789v1.211h84.039V180Z"
                                      fill="#fff"/>
                            </svg>
                        </div>
                `
      : "number-3" === this.number
      ? V`
                            <div class="number number-3">
                                <svg width="120" height="183" aria-labelledby="number-3" role="img" viewBox="0 0 120 183"
                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity=".4"
                                          d="M114.242 43.648c0 11.222-3.269 20.586-9.808 28.094-6.54 7.427-15.743 12.432-27.61 15.016v.969c14.209 1.776 24.865 6.216 31.969 13.32 7.104 7.023 10.656 16.388 10.656 28.094 0 17.033-6.014 30.192-18.043 39.476-12.028 9.203-29.143 13.805-51.344 13.805-19.617 0-36.166-3.189-49.648-9.567v-25.308c7.508 3.713 15.46 6.579 23.855 8.598 8.396 2.018 16.47 3.027 24.22 3.027 13.723 0 23.976-2.543 30.757-7.629 6.781-5.086 10.172-12.957 10.172-23.613 0-9.446-3.754-16.388-11.262-20.828-7.508-4.441-19.294-6.661-35.36-6.661H27.419V77.312H43.04c28.255 0 42.383-9.768 42.383-29.304 0-7.589-2.462-13.442-7.387-17.559-4.924-4.117-12.19-6.176-21.797-6.176-6.7 0-13.159.97-19.375 2.907-6.216 1.857-13.562 5.53-22.039 11.02L.898 18.34C17.125 6.392 35.975.418 57.45.418c17.841 0 31.767 3.835 41.778 11.504 10.01 7.67 15.015 18.245 15.015 31.726Z"
                                          fill="#fff"/>
                                </svg>
                            </div>
                    `
      : "number-4" === this.number
      ? V`
                                <div class="number number-4">
                                    <svg width="134" height="178" aria-labelledby="number-4" role="img" viewBox="0 0 134 178"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity=".4"
                                              d="M133.199 139.371h-23.855V178h-27.73v-38.629H.722v-21.918L81.613.477h27.731v115.281h23.855v23.613Zm-51.586-23.613V71.316c0-15.823.404-28.78 1.211-38.87h-.968c-2.26 5.327-5.813 11.786-10.657 19.374l-43.957 63.938h54.371Z"
                                              fill="#fff"/>
                                    </svg>
                                </div>
                        `
      : "number-5" === this.number
      ? V`
                                <div class="number number-5">
                                    <svg width="115" height="181" aria-labelledby="number-5" role="img"
                                         viewBox="0 0 115 181" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity=".4"
                                              d="M56.96 67.441c17.842 0 31.97 4.723 42.384 14.168 10.414 9.446 15.621 22.322 15.621 38.629 0 18.891-5.934 33.664-17.8 44.321-11.787 10.575-28.58 15.863-50.376 15.863-19.779 0-35.319-3.189-46.621-9.567v-25.793c6.539 3.714 14.047 6.58 22.523 8.598 8.477 2.018 16.348 3.028 23.614 3.028 12.836 0 22.604-2.866 29.304-8.598 6.7-5.732 10.051-14.128 10.051-25.188 0-21.151-13.482-31.726-40.445-31.726-3.794 0-8.477.403-14.047 1.21-5.57.727-10.454 1.575-14.652 2.544L3.8 87.422 10.582.96h92.031v25.31H35.648l-3.996 43.836c2.826-.485 6.257-1.05 10.293-1.696 4.117-.646 9.123-.969 15.016-.969Z"
                                              fill="#fff"/>
                                    </svg>
                                </div>
                        `
      : null;
  }
  render() {
    const e = { "wrapper-mobile": this.mobileController.isMobile },
      t = {
        "description--open": this.open,
        mobile: this.mobileController.isMobile,
      };
    return V`
            <section class="${Ae({ "idb-image-card": !0 })}">
                <a class="link" href="${this.url}" target="_blank"
                   @mouseenter="${this.show}"
                   @mouseleave="${this.hide}"
                   @keydown="${this.handleTriggerKeyUp}"

                >
                    ${
                      this.imageBackground
                        ? V`
                                        <div class="gray-overlay"></div>
                                        <slot name="image"></slot>`
                        : V`
                                        <div class="gradient-background"/>`
                    }
                    <span
                            class="description__trigger ${Ae(t)}"

                    >
              <div class="text-wrapper ${Ae(e)}" @focus="${this.show}">
                <div id="${this.number}" class="heading">
                    <idb-heading level="h3" level-size="2xl" level-style="bold" number="${
                      this.number
                    }"><slot name="heading"></slot></idb-heading>
                </div>
                <div class="description ${Ae(t)}" aria-hidden=${this.open}
                     aria-labelledby="dropdown"
                >
                  <slot name="description"></slot>
                </div>
                  ${this.numberImage()}
              </div>
              </span>
                </a>
            </section>
        `;
  }
};
(Ci.styles = [Mi]),
  s([he(".description")], Ci.prototype, "panel", void 0),
  s([de({ type: Boolean, reflect: !0 })], Ci.prototype, "open", void 0),
  s([de({ type: Boolean })], Ci.prototype, "disabled", void 0),
  s([de({ type: Boolean })], Ci.prototype, "hoist", void 0),
  s(
    [de({ type: Boolean, attribute: "image-background" })],
    Ci.prototype,
    "imageBackground",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "url" })],
    Ci.prototype,
    "url",
    void 0
  ),
  s(
    [de({ type: String, reflect: !0, attribute: "number" })],
    Ci.prototype,
    "number",
    void 0
  ),
  s(
    [Fe("open", { waitUntilFirstUpdate: !0 })],
    Ci.prototype,
    "handleOpenChange",
    null
  ),
  (Ci = s([le("idb-image-card")], Ci));
var Bi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {

    font-size: var(--fs-xs);

    line-height: var(--lh-xs);

    font-weight: var(--fw-bold);

    text-transform: uppercase;

    color: var(--yellow-knowledge-darken-2)
}

.idb-image-tag-bg-green {

    width: -webkit-min-content;

    width: -moz-min-content;

    width: min-content;

    width: -webkit-max-content;

    width: -moz-max-content;

    width: max-content;

    border-radius: 0.5rem;

    background-color: var(--green-guarantee-lighten-4);

    padding-left: 0.5rem;

    padding-right: 0.5rem;

    padding-top: 0.25rem;

    padding-bottom: 0.25rem
}

.idb-image-tag-bg-yellow {

    width: -webkit-min-content;

    width: -moz-min-content;

    width: min-content;

    width: -webkit-max-content;

    width: -moz-max-content;

    width: max-content;

    border-radius: 0.5rem;

    background-color: var(--yellow-knowledge-lighten-3);

    padding-left: 0.5rem;

    padding-right: 0.5rem;

    padding-top: 0.25rem;

    padding-bottom: 0.25rem
}
`;
let Ti = class extends xe {
  constructor() {
    super(...arguments), (this.slots = new l(this, !0));
  }
  render() {
    const e = {
      [`idb-image-tag-bg-${this.tagBackground}`]: void 0 !== this.tagBackground,
      "idb-image-tag": !0,
    };
    return V`
      <div class="${Ae(e)}">
        <slot name="image-tag"></slot>
      </div>
        `;
  }
};
(Ti.styles = [Bi]),
  s(
    [de({ attribute: "tag-background" })],
    Ti.prototype,
    "tagBackground",
    void 0
  ),
  (Ti = s([le("idb-image-tag")], Ti));
var Zi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {

    display: block
}

.info-card-wrapper {

    display: flex;

    flex-direction: column
}

idb-content-card:not(:last-of-type) {

    position: relative;

    margin-bottom: 3rem
}
`;
let qi = class extends xe {
  constructor() {
    super(...arguments),
      (this.slots = new l(this, !0)),
      (this.firstImage = "left");
  }
  firstUpdated() {
    (this.contentCards = this.querySelectorAll("idb-content-card")),
      (this.cardCounter = this.contentCards.length),
      (this.nextImage = this.firstImage),
      this.alterCards();
  }
  render() {
    return V`
      <section class="info-card-wrapper">
        <slot></slot>
      </section>
    `;
  }
  alterCards() {
    this.contentCards.forEach((e) => {
      const t = "left" === this.nextImage ? "right" : "left";
      e.setAttribute("image-position", this.nextImage), (this.nextImage = t);
    });
  }
};
(qi.styles = [Zi]),
  s([ce()], qi.prototype, "cardCounter", void 0),
  s([ce()], qi.prototype, "nextImage", void 0),
  s(
    [de({ type: String, attribute: "first-image" })],
    qi.prototype,
    "firstImage",
    void 0
  ),
  (qi = s([le("idb-info-cards")], qi));
var Ei = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.idb-label-data-heading {
  display: flex;
  gap: 0.25rem;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem
}

.heading-label {
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
  text-transform: uppercase;
  color: var(--gray-professional-lighten-1);
  display:inherit
}

.heading-data {
  font-size: var(--fs-sm);
  line-height: var(--lh-sm);
  text-transform: uppercase;
  color: var(--blue-responsible-darken-2)
}
`;
let Fi = class extends xe {
  render() {
    return V`
     <section class="${Ae({ "idb-label-data-heading": !0 })}">
      <div class="heading-label">
        <slot name="heading-label"></slot><span class="colon">:&nbsp;</span>
      </div>
      <div class="heading-data">
        <slot name="heading-data"></slot>
      </div>
     </section>
    `;
  }
};
(Fi.styles = [Ei]), (Fi = s([le("idb-label-data-heading")], Fi));
var Li = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
}

.dropdown{
}

.dropdown--open .dropdown__panel{
  display:block;
  width:100%;
  padding:0 1rem;
}

@media (min-width: 1024px){
  .dropdown{
  }

  .dropdown--open .dropdown__panel{
    z-index:20;
    position:absolute;
    pointer-events:all;
    left:0;
    right:0;
    width:100%;
  }
  .submenu-wrapper{
    position:relative;
    background:var(--outline-white);
    margin-top:17px;
  }

  .submenu-inner{
    display:flex;
    flex-wrap:wrap;
    gap:var(--spacing-8) var(--spacing-20);
    position:relative;
    width:calc(
      100% - (200px + (var(--spacing-16) * 2) + (var(--spacing-8) * 2))
    );
    padding-bottom:var(--spacing-8);
    margin:0 auto;
  }
}

.dropdown__trigger{
  position:inherit;
}

.submenu-column{
  flex:1;
  min-width:200px;
  margin-top:var(--spacing-5);
}

.group-heading{
  font-size:var(--fs-sm);
  line-height:var(--lh-sm);
  text-transform:uppercase;
  margin-top:var(--spacing-8);
  margin-bottom:var(--spacing-5);
  color:var(--gray-professional-lighten-1);
  font-weight:var(--fw-semibold);
}

.submenu-item{
  margin-bottom:var(--spacing-3);
}

ul{
  margin:0;
  padding:0;
  list-style-type:none;
}

a{
  font-size:var(--fs-base);
  line-height:var(--lh-base);
  color:var(--blue-responsible-darken-2);
}
`;
let Hi = class extends St {};
(Hi.styles = [St.styles, Li]), (Hi = s([le("idb-primary-menu-dropdown")], Hi));
var ji = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  position: relative;
  display: block;
}

.idb-section-wrapper {
  color: var(--blue-responsible-darken-2);
}

.section-header {
  padding-left: 6rem;
  padding-right: 6rem;
  padding-top: 6rem;
  padding-bottom: 4rem;
  text-align: center;
}

idb-heading {
  margin-top: 2rem;
}

idb-heading:first-of-type {
  margin-top: 0px;
}

.section-content {
  padding-bottom: 6rem;
}

.cta-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 6rem;
}

.section-background--blue {
  background-color: var(--blue-responsible-lighten-4);
}

.section-background--light-blue {
  background-color: var(--blue-responsible-lighten-5);
}

.section-background--gray {
  background-color: var(--gray-professional-lighten-4);
}

.section-background--green {
  background-color: var(--green-guarantee-lighten-4);
}

.section-background-wave {
  background-image: none;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 2rem;
}

@media (min-width: 1024px){

.section-background-wave {
    background-size:cover;
    background-position-y:70%;
  }
  }

@media (min-width: 1024px){

.section-background--sm-yellow-wave{
    background-size:cover;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 1462 530' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 516.5s167.2-40 420-40c231.5 0 322.2 7.8 574.5 40 231.5 29.5 445.5 0 445.5 0V0s-143 223.9-425 228.3c-281 4.4-1015-59-1015-59v347.2Z' fill='%23F5CA50'/%3E%3Cpath d='M2 510c181.5-71 384-62.5 574-62.5 261 0 455 62.5 881.5-170' stroke='%23FE5100' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M2 510c181.5-71 384-62.5 574-62.5 261 0 455 62.5 881.5-170' stroke='%23000' stroke-opacity='.3' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A")
}
  }

@media (min-width: 1024px){

.section-background--md-yellow-wave{
    background-size:cover;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 1472 704' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1470 189s-149.2-20.5-402-20.5C836.5 168.5 589.4-2.7 335 0 148.4 2 30 34.6 30 34.6V661s516-82.5 798-89c281-6.5 642 78.5 642 78.5V189Z' fill='%23F5CA50'/%3E%3Cpath d='M2 496.3C69.5 590.8 286 760.1 611.5 682c406.8-97.7 631.4-324.4 858.5-255' stroke='%23FE5100' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M2 496.3C69.5 590.8 286 760.1 611.5 682c406.8-97.7 631.4-324.4 858.5-255' stroke='%23000' stroke-opacity='.3' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A")
}
  }

@media (min-width: 1024px){

.section-background--lg-yellow-wave{
    background-size:cover;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 1188' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1440 90.556s-88.7 133.5-341.5 133.5c-231.5 0-539.126-228.148-793.5-224C118.416 3.099 0 51.865 0 51.865V1187.56s437.99-55.23 720-64.93c281.09-9.67 720 15.15 720 15.15V90.556Z' fill='%23F5CA50'/%3E%3Cpath d='M-15 592.899c67.547 94.441 284.004 263.785 609.455 185.626C1001.27 680.827 1225.86 454.167 1453 523.533' stroke='%23FE5100' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M-15 592.899c67.547 94.441 284.004 263.785 609.455 185.626C1001.27 680.827 1225.86 454.167 1453 523.533' stroke='%23000' stroke-opacity='.3' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A")
}
  }

@media (min-width: 1024px){

.section-background--sm-green-wave{
    background-size:cover;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 1462 530' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 516.5s167.2-40 420-40c231.5 0 322.2 7.8 574.5 40 231.5 29.5 445.5 0 445.5 0V0s-143 223.9-425 228.3c-281 4.4-1015-59-1015-59v347.2Z' fill='%23308144'/%3E%3Cpath d='M22 516.5s167.2-40 420-40c231.5 0 322.2 7.8 574.5 40 231.5 29.5 445.5 0 445.5 0V0s-143 223.9-425 228.3c-281 4.4-1015-59-1015-59v347.2Z' fill='%23fff' fill-opacity='.2'/%3E%3Cpath d='M2 510c181.5-71 384-62.5 574-62.5 261 0 455 62.5 881.5-170' stroke='%23A6C964' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A")
}
  }

@media (min-width: 1024px){

.section-background--md-green-wave{
    background-size:cover;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 1472 704' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1470 189s-149.2-20.5-402-20.5C836.5 168.5 589.4-2.7 335 0 148.4 2 30 34.6 30 34.6V661s516-82.5 798-89c281-6.5 642 78.5 642 78.5V189Z' fill='%23308144'/%3E%3Cpath d='M1470 189s-149.2-20.5-402-20.5C836.5 168.5 589.4-2.7 335 0 148.4 2 30 34.6 30 34.6V661s516-82.5 798-89c281-6.5 642 78.5 642 78.5V189Z' fill='%23fff' fill-opacity='.2'/%3E%3Cpath d='M2 496.3C69.5 590.8 286 760.1 611.5 682c406.8-97.7 631.4-324.4 858.5-255' stroke='%234BA6DE' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M2 496.3C69.5 590.8 286 760.1 611.5 682c406.8-97.7 631.4-324.4 858.5-255' stroke='%23fff' stroke-opacity='.6' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A")
}
  }

@media (min-width: 1024px){

.section-background--lg-green-wave{
    background-size:cover;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 1440 1175' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 118.5S96.7 179 349.5 179C581 179 784.1-3.3 1038.5.5 1225.1 3.3 1440 107 1440 107v1068s-438-51-720-60c-281-9-720 14-720 14V118.5Z' fill='%23308144'/%3E%3Cpath d='M0 118.5S96.7 179 349.5 179C581 179 784.1-3.3 1038.5.5 1225.1 3.3 1440 107 1440 107v1068s-438-51-720-60c-281-9-720 14-720 14V118.5Z' fill='%23fff' fill-opacity='.2'/%3E%3Cpath d='M0 69c66.2 48.3 278.2 135 597 95 398.5-50 618.5-166 841-130.5' stroke='%23FE5100' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M0 69c66.2 48.3 278.2 135 597 95 398.5-50 618.5-166 841-130.5' stroke='%23000' stroke-opacity='.4' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A")
}
  }

@media (min-width: 1024px){

.section-background--sm-blue-wave{
    background-size:cover;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 1462 530' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M22 516.5s167.2-40 420-40c231.5 0 322.2 7.8 574.5 40 231.5 29.5 445.5 0 445.5 0V0s-143 223.9-425 228.3c-281 4.4-1015-59-1015-59v347.2Z' fill='%234BA6DE'/%3E%3Cpath d='M22 516.5s167.2-40 420-40c231.5 0 322.2 7.8 574.5 40 231.5 29.5 445.5 0 445.5 0V0s-143 223.9-425 228.3c-281 4.4-1015-59-1015-59v347.2Z' fill='%23fff' fill-opacity='.2'/%3E%3Cpath d='M2 510c181.5-71 384-62.5 574-62.5 261 0 455 62.5 881.5-170' stroke='%23F6E375' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A")
}
  }

@media (min-width: 1024px){

.section-background--md-blue-wave{
    background-size:cover;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 1472 704' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1470 189s-149.2-20.5-402-20.5C836.5 168.5 589.4-2.7 335 0 148.4 2 30 34.6 30 34.6V661s516-82.5 798-89c281-6.4 642 78.5 642 78.5V189Z' fill='%234BA6DE'/%3E%3Cpath d='M1470 189s-149.2-20.5-402-20.5C836.5 168.5 589.4-2.7 335 0 148.4 2 30 34.6 30 34.6V661s516-82.5 798-89c281-6.4 642 78.5 642 78.5V189Z' fill='%23fff' fill-opacity='.2'/%3E%3Cpath d='M2 496.3C69.5 590.8 286 760.1 611.5 682c406.8-97.7 631.4-324.4 858.5-255' stroke='%234BA6DE' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M2 496.3C69.5 590.8 286 760.1 611.5 682c406.8-97.7 631.4-324.4 858.5-255' stroke='%23fff' stroke-opacity='.6' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A")
}
  }

@media (min-width: 1024px){

.section-background--lg-blue-wave{
    background-size:cover;
    background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 1472 1188' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1457 90.6S1368.3 224 1115.5 224C884 224 576.4-4.1 322 0 135.4 3 17 51.9 17 51.9v1135.7s438-55.3 720-65c281-9.6 720 15.2 720 15.2V90.6Z' fill='%234BA6DE'/%3E%3Cpath d='M1457 90.6S1368.3 224 1115.5 224C884 224 576.4-4.1 322 0 135.4 3 17 51.9 17 51.9v1135.7s438-55.3 720-65c281-9.6 720 15.2 720 15.2V90.6Z' fill='%23fff' fill-opacity='.2'/%3E%3Cpath d='M2 592.9c67.5 94.4 284 263.8 609.5 185.6 406.8-97.7 631.4-324.3 858.5-255' stroke='%23F4DB4E' stroke-width='3' stroke-linecap='round'/%3E%3Cpath d='M2 592.9c67.5 94.4 284 263.8 609.5 185.6 406.8-97.7 631.4-324.3 858.5-255' stroke='%23fff' stroke-opacity='.2' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E%0A")
}
  }
`;
const Di = [
  "gray",
  "green",
  "blue",
  "white",
  "transparent",
  "sm-yellow-wave",
  "md-yellow-wave",
  "lg-yellow-wave",
  "sm-green-wave",
  "md-green-wave",
  "lg-green-wave",
  "sm-blue-wave",
  "md-blue-wave",
  "lg-blue-wave",
];
let Vi = class extends xe {
  constructor() {
    super(...arguments), (this.slots = new l(this, !0));
  }
  connectedCallback() {
    super.connectedCallback(),
      (this.hasEyebrowSlot = this.slots.test("eyebrow")),
      (this.hasTitleSlot = this.slots.test("title")),
      (this.hasContentSlot = this.slots.test("content")),
      (this.hasCtaSlot = this.slots.test("cta"));
  }
  firstUpdated() {}
  render() {
    const e = {
      "idb-section-wrapper": !0,
      "section-background-wave": this.sectionBackground.includes("wave"),
      [`section-background--${this.sectionBackground}`]: this.sectionBackground,
    };
    return V`
      <section class="${Ae(e)}">  
        ${this.sectionHeaderTemplate({ "section-header": !0 })}
        ${this.sectionContentTemplate({ "section-content": !0 })}
      </section>
    `;
  }
  sectionHeaderTemplate(e) {
    return this.hasEyebrowSlot || this.hasTitleSlot
      ? V` <section class="${Ae(e)}">
     ${this.eyebrowTemplate()}
     ${this.titleTemplate()}
    </section>`
      : null;
  }
  eyebrowTemplate() {
    return this.hasEyebrowSlot ? V`<slot name="eyebrow"></slot>` : null;
  }
  titleTemplate() {
    return this.hasTitleSlot ? V`<slot name="title"></slot>` : null;
  }
  sectionContentTemplate(e) {
    return this.hasContentSlot || this.hasCtaSlot
      ? V` <section class="${Ae(e)}">
     ${this.contentTemplate()}
     ${this.ctaTemplate()}
    </section>`
      : null;
  }
  contentTemplate() {
    return this.hasContentSlot
      ? V` <section class="content-wrapper">
      <outline-container x-padding><slot name="content"></slot></outline-container>
    </section>`
      : null;
  }
  ctaTemplate() {
    return this.hasCtaSlot
      ? V` <section class="cta-wrapper">
      <slot name="cta"></slot>
    </section>`
      : null;
  }
};
(Vi.styles = [ji]),
  s(
    [de({ type: String, attribute: "section-background" })],
    Vi.prototype,
    "sectionBackground",
    void 0
  ),
  s([ce()], Vi.prototype, "hasEyebrowSlot", void 0),
  s([ce()], Vi.prototype, "hasTitleSlot", void 0),
  s([ce()], Vi.prototype, "hasContentSlot", void 0),
  s([ce()], Vi.prototype, "hasCtaSlot", void 0),
  (Vi = s([le("idb-section-wrapper")], Vi));
var Gi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host(idb-special-icon-card){
  height:100%;
}

.idb-special-icon-card {
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-wrap: break-word;
  border-radius: 0.5rem;
  padding: 1rem;
}

@media (min-width: 768px) {

  .idb-special-icon-card {
    align-items: stretch;
  }
}

.idb-special-icon-card:hover{
  cursor:pointer;
}

.idb-special-icon-card-bg-gray {
  background-color: var(--gray-professional-lighten-4);
}

.idb-special-icon-card-bg-white {
  background-color: var(--neutral-white);
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.75rem;
  text-align: center;
}

@media (min-width: 768px) {

  .header {
    flex-direction: row;
  }

  .header {
    text-align: left;
  }
}

.header a {
  margin-bottom: -1rem;
  color: var(--blue-responsible-darken-2);
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
}

.header a:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

::slotted([slot='icon']) {
  width: 88px;
  color: var(--green-guarantee-lighten-2);
}

::slotted([slot='subtitle']) {
  margin-bottom: 1rem;
  color: var(--gray-professional-lighten-1);
}

.footer {
  display: flex;
  justify-content: flex-end;
}

.footer a {
  display: flex;
  justify-content: flex-end;
  font-weight: var(--fw-bold);
  color: var(--blue-responsible-main);
  -webkit-text-decoration-line: none;
          text-decoration-line: none;
  gap:0.3rem;
}

.footer .icon {
  font-weight: var(--fw-bold);
}

.footer a:hover {
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}
`;
let Oi = class extends oi {
  render() {
    const e = {
      [`idb-special-icon-card-bg-${this.backgroundColor}`]:
        void 0 !== this.backgroundColor,
      "idb-special-icon-card": !0,
    };
    return V`
            <section class="${Ae(e)}">
                <div class="header">
                    ${this._conditionalSlotTemplate({ slotName: "icon" })}
                    <div class="titles">
                        <idb-heading level="${
                          this.level
                        }" level-size="h3-medium" level-style="bold"
                        ><a class="link" href="${this.url}" target="_blank"
                        >${this._conditionalSlotTemplate({
                          slotName: "heading",
                        })}</a
                        ></idb-heading
                        >
                        ${this._conditionalSlotTemplate({
                          slotName: "subtitle",
                        })}
                    </div>
                </div>
                <div class="footer">
                    <idb-button class="mr-2" button-url="#" button-size="small" icon-right="arrow-right"
                                button-variant="secondary" button-label="Button" aria-disabled="false">
                        <a class="link btn secondary main" href="${
                          this.url
                        }" target="_blank">
                            ${this._conditionalSlotTemplate({
                              slotName: "cta-button",
                            })}
                        </a>
                    </idb-button>
                </div>
            </section>
        `;
  }
};
(Oi.styles = [Gi]),
  s(
    [de({ attribute: "background-color" })],
    Oi.prototype,
    "backgroundColor",
    void 0
  ),
  (Oi = s([le("idb-special-icon-card")], Oi));
var Ui = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {

    display: block
}

.bg-container {

    width: 100%;

    padding-top: 3rem;

    padding-bottom: 3rem;

    padding-left: 2rem;

    padding-right: 2rem
}

@media (min-width: 768px) {

    .bg-container {

        padding-left: 3rem;

        padding-right: 3rem
    }
}

.stat {

    margin-bottom: 0.5rem;

    font-family: Open Sans, Helvetica, Arial, sans-serif;

    font-size: var(--fs-xl);

    line-height: var(--lh-xl);

    font-weight: var(--fw-bold)
}

@media (min-width: 768px) {

    .stat {

        margin-bottom: 1rem
    }

    .stat {

        font-size: var(--fs-4xl);

        line-height: var(--lh-4xl)
    }
}

.stat-container {

    text-align: center
}

.stat-desc {

    margin-top: 0px;

    font-size: var(--fs-base);

    line-height: var(--lh-base)
}

idb-heading {

    margin-bottom: 1.5rem;

    text-align: center
}

.idb-stat-bar-color--blue-white {

    background-color: var(--blue-responsible-main);

    color: var(--neutral-white)
}

.idb-stat-bar-color--gray-blue {

    background-color: var(--gray-professional-lighten-4);

    color: var(--blue-responsible-main)
}

.idb-stat-bar-color--white-blue {

    background-color: var(--neutral-white);

    color: var(--blue-responsible-main)
}

.idb-stat-bar-color--light-blue-blue {

    background-color: var(--blue-responsible-lighten-5);

    color: var(--blue-responsible-main)
}
`;
let Ri = class extends xe {
  constructor() {
    super(...arguments),
      (this.mobileController = new r(this)),
      (this.level = "h2"),
      (this.headerTemplate = () => V`<idb-heading
      level="${this.level}"
      level-size="${(this.mobileController.isMobile, "3xl")}"
      level-style="semibold"
      >${this.heading}</idb-heading
    >`),
      (this.statsTemplate = () =>
        this.stats
          ? this.stats.map(
              (e) => V`
            <div class="stat-container">
              <p class="stat">${e.stat}</p>
              <p class="stat-desc">${e.desc}</p>
            </div>
          `
            )
          : []),
      (this.calculateGrid = () => {
        let e = [4, 2, 2];
        switch (this.stats ? Object.entries(this.stats).length : 1) {
          case 1:
            e = [1, 1, 1];
            break;
          case 2:
            e = [2, 2, 2];
            break;
          case 3:
            e = [3, 1, 1];
            break;
          case 4:
            e = [4, 2, 2];
        }
        return e;
      });
  }
  render() {
    const [e, t, r] = this.calculateGrid(),
      n = {
        [`idb-stat-bar-color--${this.componentColor}`]:
          void 0 !== this.componentColor,
        "idb-stat-bar": !0,
        "bg-container": !0,
      };
    return V` <div class="${Ae(n)}">
      <outline-container ?full-bleed=${!1}>
        ${this.headerTemplate()}
        <idb-card-grid
          columns-lg="${e}"
          columns-sm="${t}"
          columns-default="${r}"
          ?is-nested=${!0}
          >${this.statsTemplate()}</idb-card-grid
        >
      </outline-container>
    </div>`;
  }
};
(Ri.styles = [Ui]),
  s([de({ type: String })], Ri.prototype, "heading", void 0),
  s(
    [de({ type: String, reflect: !0, attribute: "level" })],
    Ri.prototype,
    "level",
    void 0
  ),
  s(
    [de({ type: String, attribute: "component-color" })],
    Ri.prototype,
    "componentColor",
    void 0
  ),
  s([de({ type: Array })], Ri.prototype, "stats", void 0),
  (Ri = s([le("idb-stat-bar")], Ri));
var Ii = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0
}
.pointer-events-none {
    pointer-events: none
}
.visible {
    visibility: visible
}
.invisible {
    visibility: hidden
}
.static {
    position: static
}
.fixed {
    position: fixed
}
.absolute {
    position: absolute
}
.relative {
    position: relative
}
.bottom-0 {
    bottom: 0px
}
.left-0 {
    left: 0px
}
.bottom-4 {
    bottom: 1rem
}
.right-4 {
    right: 1rem
}
.top-0 {
    top: 0px
}
.right-0 {
    right: 0px
}
.top-2\.5 {
    top: 0.625rem
}
.right-2\.5 {
    right: 0.625rem
}
.top-2 {
    top: 0.5rem
}
.right-2 {
    right: 0.5rem
}
.bottom-11 {
    bottom: 2.75rem
}
.left-1\/2 {
    left: 50%
}
.top-1\/2 {
    top: 50%
}
.left-2 {
    left: 0.5rem
}
.z-40 {
    z-index: 40
}
.z-50 {
    z-index: 50
}
.z-10 {
    z-index: 10
}
.z-0 {
    z-index: 0
}
.z-20 {
    z-index: 20
}
.order-1 {
    order: 1
}
.order-2 {
    order: 2
}
.col-span-12 {
    grid-column: span 12 / span 12
}
.col-start-3 {
    grid-column-start: 3
}
.col-start-1 {
    grid-column-start: 1
}
.col-start-5 {
    grid-column-start: 5
}
.col-start-9 {
    grid-column-start: 9
}
.col-start-7 {
    grid-column-start: 7
}
.float-right {
    float: right
}
.float-left {
    float: left
}
.m-0 {
    margin: 0px
}
.m-12 {
    margin: 3rem
}
.m-8 {
    margin: 2rem
}
.my-6 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem
}
.mx-auto {
    margin-left: auto;
    margin-right: auto
}
.my-10 {
    margin-top: 2.5rem;
    margin-bottom: 2.5rem
}
.my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem
}
.my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem
}
.my-0 {
    margin-top: 0px;
    margin-bottom: 0px
}
.mx-0 {
    margin-left: 0px;
    margin-right: 0px
}
.mb-6 {
    margin-bottom: 1.5rem
}
.mr-2 {
    margin-right: 0.5rem
}
.ml-2 {
    margin-left: 0.5rem
}
.mb-4 {
    margin-bottom: 1rem
}
.mt-8 {
    margin-top: 2rem
}
.mt-6 {
    margin-top: 1.5rem
}
.mb-10 {
    margin-bottom: 2.5rem
}
.mt-2 {
    margin-top: 0.5rem
}
.mt-0 {
    margin-top: 0px
}
.mr-3 {
    margin-right: 0.75rem
}
.mb-2 {
    margin-bottom: 0.5rem
}
.mb-0 {
    margin-bottom: 0px
}
.-mb-4 {
    margin-bottom: -1rem
}
.ml-4 {
    margin-left: 1rem
}
.mr-12 {
    margin-right: 3rem
}
.mb-20 {
    margin-bottom: 5rem
}
.mb-3 {
    margin-bottom: 0.75rem
}
.mb-8 {
    margin-bottom: 2rem
}
.mb-7 {
    margin-bottom: 1.75rem
}
.mr-0 {
    margin-right: 0px
}
.mt-3 {
    margin-top: 0.75rem
}
.mt-24 {
    margin-top: 6rem
}
.mt-28 {
    margin-top: 7rem
}
.mb-28 {
    margin-bottom: 7rem
}
.mt-4 {
    margin-top: 1rem
}
.mr-6 {
    margin-right: 1.5rem
}
.ml-7 {
    margin-left: 1.75rem
}
.ml-14 {
    margin-left: 3.5rem
}
.mb-0\.5 {
    margin-bottom: 0.125rem
}
.mt-10 {
    margin-top: 2.5rem
}
.box-border {
    box-sizing: border-box
}
.block {
    display: block
}
.inline-block {
    display: inline-block
}
.inline {
    display: inline
}
.flex {
    display: flex
}
.inline-flex {
    display: inline-flex
}
.table {
    display: table
}
.grid {
    display: grid
}
.contents {
    display: contents
}
.hidden {
    display: none
}
.h-full {
    height: 100%
}
.h-screen {
    height: 100vh
}
.h-full-screen-h {
    height: 100vh
}
.h-0 {
    height: 0px
}
.h-3 {
    height: 0.75rem
}
.h-16 {
    height: 4rem
}
.h-\[223px\] {
    height: 223px
}
.h-\[137px\] {
    height: 137px
}
.h-\[231px\] {
    height: 231px
}
.h-2 {
    height: 0.5rem
}
.h-5 {
    height: 1.25rem
}
.h-6 {
    height: 1.5rem
}
.max-h-80 {
    max-height: 20rem
}
.max-h-\[223px\] {
    max-height: 223px
}
.max-h-full {
    max-height: 100%
}
.max-h-\[137px\] {
    max-height: 137px
}
.max-h-\[231px\] {
    max-height: 231px
}
.min-h-full {
    min-height: 100%
}
.min-h-\[150px\] {
    min-height: 150px
}
.min-h-\[300px\] {
    min-height: 300px
}
.w-0 {
    width: 0px
}
.w-1 {
    width: 0.25rem
}
.w-2 {
    width: 0.5rem
}
.w-3 {
    width: 0.75rem
}
.w-4 {
    width: 1rem
}
.w-5 {
    width: 1.25rem
}
.w-6 {
    width: 1.5rem
}
.w-7 {
    width: 1.75rem
}
.w-8 {
    width: 2rem
}
.w-9 {
    width: 2.25rem
}
.w-10 {
    width: 2.5rem
}
.w-11 {
    width: 2.75rem
}
.w-12 {
    width: 3rem
}
.w-14 {
    width: 3.5rem
}
.w-16 {
    width: 4rem
}
.w-20 {
    width: 5rem
}
.w-24 {
    width: 6rem
}
.w-28 {
    width: 7rem
}
.w-32 {
    width: 8rem
}
.w-36 {
    width: 9rem
}
.w-40 {
    width: 10rem
}
.w-44 {
    width: 11rem
}
.w-48 {
    width: 12rem
}
.w-52 {
    width: 13rem
}
.w-56 {
    width: 14rem
}
.w-60 {
    width: 15rem
}
.w-64 {
    width: 16rem
}
.w-72 {
    width: 18rem
}
.w-80 {
    width: 20rem
}
.w-96 {
    width: 24rem
}
.w-px {
    width: 1px
}
.w-0\.5 {
    width: 0.125rem
}
.w-1\.5 {
    width: 0.375rem
}
.w-2\.5 {
    width: 0.625rem
}
.w-3\.5 {
    width: 0.875rem
}
.w-full {
    width: 100%
}
.w-1\/2 {
    width: 50%
}
.w-9\/12 {
    width: 75%
}
.w-full-screen-w {
    width: 100vw
}
.w-auto {
    width: auto
}
.w-min {
    width: -webkit-min-content;
    width: -moz-min-content;
    width: min-content
}
.w-max {
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content
}
.w-\[88px\] {
    width: 88px
}
.w-2\/3 {
    width: 66.666667%
}
.max-w-full-screen-w {
    max-width: 100vw
}
.max-w-full {
    max-width: 100%
}
.max-w-\[600px\] {
    max-width: 600px
}
.flex-grow {
    flex-grow: 1
}
.flex-grow-0 {
    flex-grow: 0
}
.grow {
    flex-grow: 1
}
.table-auto {
    table-layout: auto
}
.rotate-90 {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
.transform {
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
.cursor-pointer {
    cursor: pointer
}
.cursor-not-allowed {
    cursor: not-allowed
}
.select-none {
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none
}
.resize {
    resize: both
}
.list-none {
    list-style-type: none
}
.appearance-none {
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none
}
.columns-lg {
    -moz-columns: 32rem;
         columns: 32rem
}
.columns-md {
    -moz-columns: 28rem;
         columns: 28rem
}
.columns-sm {
    -moz-columns: 24rem;
         columns: 24rem
}
.grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr))
}
.grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr))
}
.grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr))
}
.grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr))
}
.grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr))
}
.flex-row {
    flex-direction: row
}
.flex-col {
    flex-direction: column
}
.flex-wrap {
    flex-wrap: wrap
}
.flex-nowrap {
    flex-wrap: nowrap
}
.place-content-center {
    place-content: center
}
.place-items-stretch {
    place-items: stretch
}
.content-center {
    align-content: center
}
.items-start {
    align-items: flex-start
}
.items-end {
    align-items: flex-end
}
.items-center {
    align-items: center
}
.justify-start {
    justify-content: flex-start
}
.justify-end {
    justify-content: flex-end
}
.justify-center {
    justify-content: center
}
.justify-between {
    justify-content: space-between
}
.justify-items-center {
    justify-items: center
}
.gap-6 {
    gap: 1.5rem
}
.gap-2 {
    gap: 0.5rem
}
.gap-8 {
    gap: 2rem
}
.gap-1 {
    gap: 0.25rem
}
.gap-7 {
    gap: 1.75rem
}
.gap-y-16 {
    row-gap: 4rem
}
.gap-y-10 {
    row-gap: 2.5rem
}
.gap-y-4 {
    row-gap: 1rem
}
.gap-x-12 {
    -moz-column-gap: 3rem;
         column-gap: 3rem
}
.gap-y-3 {
    row-gap: 0.75rem
}
.space-x-6 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1.5rem * var(--tw-space-x-reverse));
    margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))
}
.place-self-center {
    place-self: center
}
.place-self-stretch {
    place-self: stretch
}
.self-start {
    align-self: flex-start
}
.justify-self-end {
    justify-self: end
}
.overflow-hidden {
    overflow: hidden
}
.overflow-y-auto {
    overflow-y: auto
}
.whitespace-nowrap {
    white-space: nowrap
}
.whitespace-pre-wrap {
    white-space: pre-wrap
}
.break-words {
    overflow-wrap: break-word
}
.rounded-md {
    border-radius: 0.375rem
}
.rounded-xl {
    border-radius: 0.75rem
}
.rounded {
    border-radius: 0.25rem
}
.rounded-sm {
    border-radius: 0.125rem
}
.rounded-full {
    border-radius: 9999px
}
.rounded-lg {
    border-radius: 0.5rem
}
.rounded-2xl {
    border-radius: 1rem
}
.border-0 {
    border-width: 0px
}
.border {
    border-width: 1px
}
.border-2 {
    border-width: 2px
}
.border-b {
    border-bottom-width: 1px
}
.border-l-8 {
    border-left-width: 8px
}
.border-t-2 {
    border-top-width: 2px
}
.border-t-0 {
    border-top-width: 0px
}
.border-b-2 {
    border-bottom-width: 2px
}
.border-l-2 {
    border-left-width: 2px
}
.border-r-0 {
    border-right-width: 0px
}
.border-l-0 {
    border-left-width: 0px
}
.border-solid {
    border-style: solid
}
.border-dashed {
    border-style: dashed
}
.border-none {
    border-style: none
}
.border-outline-phase2-blue {
    border-color: var(--outline-phase2-blue)
}
.border-outline-karma-coral {
    border-color: var(--outline-karma-coral)
}
.border-outline-soft-black {
    border-color: var(--outline-soft-black)
}
.border-outline-not-gray {
    border-color: var(--outline-not-gray)
}
.border-outline-transparent {
    border-color: var(--outline-transparent)
}
.border-outline-white {
    border-color: var(--outline-white)
}
.border-outline-black {
    border-color: var(--outline-black)
}
.border-outline-dark-blue {
    border-color: var(--outline-dark-blue)
}
.border-outline-medium-blue {
    border-color: var(--outline-medium-blue)
}
.border-outline-light-blue {
    border-color: var(--outline-light-blue)
}
.border-outline-dark-gray {
    border-color: var(--outline-dark-gray)
}
.border-outline-medium-gray {
    border-color: var(--outline-medium-gray)
}
.border-outline-light-gray {
    border-color: var(--outline-light-gray)
}
.border-outline-misty-teal {
    border-color: var(--outline-misty-teal)
}
.border-outline-electric-violet {
    border-color: var(--outline-electric-violet)
}
.border-outline-dusty-blue {
    border-color: var(--outline-dusty-blue)
}
.border-blue-responsible-darken-1 {
    border-color: var(--blue-responsible-darken-1)
}
.border-blue-responsible-darken-2 {
    border-color: var(--blue-responsible-darken-2)
}
.border-blue-responsible-main {
    border-color: var(--blue-responsible-main)
}
.border-blue-responsible-lighten-1 {
    border-color: var(--blue-responsible-lighten-1)
}
.border-blue-responsible-lighten-2 {
    border-color: var(--blue-responsible-lighten-2)
}
.border-blue-responsible-lighten-3 {
    border-color: var(--blue-responsible-lighten-3)
}
.border-blue-responsible-lighten-4 {
    border-color: var(--blue-responsible-lighten-4)
}
.border-blue-responsible-lighten-5 {
    border-color: var(--blue-responsible-lighten-5)
}
.border-gray-professional-darken-1 {
    border-color: var(--gray-professional-darken-1)
}
.border-gray-professional-darken-2 {
    border-color: var(--gray-professional-darken-2)
}
.border-gray-professional-main {
    border-color: var(--gray-professional-main)
}
.border-gray-professional-lighten-1 {
    border-color: var(--gray-professional-lighten-1)
}
.border-gray-professional-lighten-2 {
    border-color: var(--gray-professional-lighten-2)
}
.border-gray-professional-lighten-3 {
    border-color: var(--gray-professional-lighten-3)
}
.border-gray-professional-lighten-4 {
    border-color: var(--gray-professional-lighten-4)
}
.border-gray-professional-lighten-5 {
    border-color: var(--gray-professional-lighten-5)
}
.border-cyan-near-darken-1 {
    border-color: var(--cyan-near-darken-1)
}
.border-cyan-near-darken-2 {
    border-color: var(--cyan-near-darken-2)
}
.border-cyan-near-main {
    border-color: var(--cyan-near-main)
}
.border-cyan-near-lighten-1 {
    border-color: var(--cyan-near-lighten-1)
}
.border-cyan-near-lighten-2 {
    border-color: var(--cyan-near-lighten-2)
}
.border-cyan-near-lighten-3 {
    border-color: var(--cyan-near-lighten-3)
}
.border-cyan-near-lighten-4 {
    border-color: var(--cyan-near-lighten-4)
}
.border-cyan-near-lighten-5 {
    border-color: var(--cyan-near-lighten-5)
}
.border-green-guarantee-darken-1 {
    border-color: var(--green-guarantee-darken-1)
}
.border-green-guarantee-darken-2 {
    border-color: var(--green-guarantee-darken-2)
}
.border-green-guarantee-main {
    border-color: var(--green-guarantee-main)
}
.border-green-guarantee-lighten-1 {
    border-color: var(--green-guarantee-lighten-1)
}
.border-green-guarantee-lighten-2 {
    border-color: var(--green-guarantee-lighten-2)
}
.border-green-guarantee-lighten-3 {
    border-color: var(--green-guarantee-lighten-3)
}
.border-green-guarantee-lighten-4 {
    border-color: var(--green-guarantee-lighten-4)
}
.border-green-guarantee-lighten-5 {
    border-color: var(--green-guarantee-lighten-5)
}
.border-gray-cosmopolitan-darken-1 {
    border-color: var(--gray-cosmopolitan-darken-1)
}
.border-gray-cosmopolitan-darken-2 {
    border-color: var(--gray-cosmopolitan-darken-2)
}
.border-gray-cosmopolitan-main {
    border-color: var(--gray-cosmopolitan-main)
}
.border-gray-cosmopolitan-lighten-1 {
    border-color: var(--gray-cosmopolitan-lighten-1)
}
.border-gray-cosmopolitan-lighten-2 {
    border-color: var(--gray-cosmopolitan-lighten-2)
}
.border-gray-cosmopolitan-lighten-3 {
    border-color: var(--gray-cosmopolitan-lighten-3)
}
.border-gray-cosmopolitan-lighten-4 {
    border-color: var(--gray-cosmopolitan-lighten-4)
}
.border-gray-cosmopolitan-lighten-5 {
    border-color: var(--gray-cosmopolitan-lighten-5)
}
.border-green-quality-darken-1 {
    border-color: var(--green-quality-darken-1)
}
.border-green-quality-darken-2 {
    border-color: var(--green-quality-darken-2)
}
.border-green-quality-main {
    border-color: var(--green-quality-main)
}
.border-green-quality-lighten-1 {
    border-color: var(--green-quality-lighten-1)
}
.border-green-quality-lighten-2 {
    border-color: var(--green-quality-lighten-2)
}
.border-green-quality-lighten-3 {
    border-color: var(--green-quality-lighten-3)
}
.border-green-quality-lighten-4 {
    border-color: var(--green-quality-lighten-4)
}
.border-green-quality-lighten-5 {
    border-color: var(--green-quality-lighten-5)
}
.border-yellow-knowledge-darken-1 {
    border-color: var(--yellow-knowledge-darken-1)
}
.border-yellow-knowledge-darken-2 {
    border-color: var(--yellow-knowledge-darken-2)
}
.border-yellow-knowledge-main {
    border-color: var(--yellow-knowledge-main)
}
.border-yellow-knowledge-lighten-1 {
    border-color: var(--yellow-knowledge-lighten-1)
}
.border-yellow-knowledge-lighten-2 {
    border-color: var(--yellow-knowledge-lighten-2)
}
.border-yellow-knowledge-lighten-3 {
    border-color: var(--yellow-knowledge-lighten-3)
}
.border-yellow-knowledge-lighten-4 {
    border-color: var(--yellow-knowledge-lighten-4)
}
.border-yellow-knowledge-lighten-5 {
    border-color: var(--yellow-knowledge-lighten-5)
}
.border-orange-darken-1 {
    border-color: var(--orange-darken-1)
}
.border-orange-darken-2 {
    border-color: var(--orange-darken-2)
}
.border-orange-main {
    border-color: var(--orange-main)
}
.border-orange-lighten-1 {
    border-color: var(--orange-lighten-1)
}
.border-orange-lighten-2 {
    border-color: var(--orange-lighten-2)
}
.border-orange-lighten-3 {
    border-color: var(--orange-lighten-3)
}
.border-orange-lighten-4 {
    border-color: var(--orange-lighten-4)
}
.border-orange-lighten-5 {
    border-color: var(--orange-lighten-5)
}
.border-purple-new-darken-1 {
    border-color: var(--purple-new-darken-1)
}
.border-purple-new-darken-2 {
    border-color: var(--purple-new-darken-2)
}
.border-purple-new-main {
    border-color: var(--purple-new-main)
}
.border-purple-new-lighten-1 {
    border-color: var(--purple-new-lighten-1)
}
.border-purple-new-lighten-2 {
    border-color: var(--purple-new-lighten-2)
}
.border-purple-new-lighten-3 {
    border-color: var(--purple-new-lighten-3)
}
.border-purple-new-lighten-4 {
    border-color: var(--purple-new-lighten-4)
}
.border-purple-new-lighten-5 {
    border-color: var(--purple-new-lighten-5)
}
.border-neutral-transparent {
    border-color: var(--neutral-transparent)
}
.border-neutral-white {
    border-color: var(--neutral-white)
}
.border-neutral-grayLight {
    border-color: var(--neutral-grayLight)
}
.border-neutral-grayMedium {
    border-color: var(--neutral-grayMedium)
}
.border-neutral-grayDark {
    border-color: var(--neutral-grayDark)
}
.border-neutral-black {
    border-color: var(--neutral-black)
}
.border-ui-error {
    border-color: var(--ui-errorBackground)
}
.border-ui-warning {
    border-color: var(--ui-warningBackground)
}
.border-ui-info {
    border-color: var(--ui-infoBackground)
}
.border-ui-success {
    border-color: var(--ui-successBackground)
}
.border-ui-errorText {
    border-color: var(--ui-errorText)
}
.border-ui-warningText {
    border-color: var(--ui-warningText)
}
.border-ui-infoText {
    border-color: var(--ui-infoText)
}
.border-ui-successText {
    border-color: var(--ui-successText)
}
.border-demo-white {
    border-color: var(--demo-white)
}
.border-demo-black {
    border-color: var(--demo-black)
}
.border-demo-darkBlue {
    border-color: var(--demo-darkBlue)
}
.border-demo-mediumBlue {
    border-color: var(--demo-mediumBlue)
}
.border-demo-lightBlue {
    border-color: var(--demo-lightBlue)
}
.border-demo-darkGray {
    border-color: var(--demo-darkGray)
}
.border-demo-mediumGray {
    border-color: var(--demo-mediumGray)
}
.border-demo-lightGray {
    border-color: var(--demo-lightGray)
}
.border-t-green-guarantee-lighten-2 {
    border-top-color: var(--green-guarantee-lighten-2)
}
.bg-outline-phase2-blue {
    background-color: var(--outline-phase2-blue)
}
.bg-outline-karma-coral {
    background-color: var(--outline-karma-coral)
}
.bg-outline-soft-black {
    background-color: var(--outline-soft-black)
}
.bg-outline-not-gray {
    background-color: var(--outline-not-gray)
}
.bg-outline-transparent {
    background-color: var(--outline-transparent)
}
.bg-outline-white {
    background-color: var(--outline-white)
}
.bg-outline-black {
    background-color: var(--outline-black)
}
.bg-outline-dark-blue {
    background-color: var(--outline-dark-blue)
}
.bg-outline-medium-blue {
    background-color: var(--outline-medium-blue)
}
.bg-outline-light-blue {
    background-color: var(--outline-light-blue)
}
.bg-outline-dark-gray {
    background-color: var(--outline-dark-gray)
}
.bg-outline-medium-gray {
    background-color: var(--outline-medium-gray)
}
.bg-outline-light-gray {
    background-color: var(--outline-light-gray)
}
.bg-outline-misty-teal {
    background-color: var(--outline-misty-teal)
}
.bg-outline-electric-violet {
    background-color: var(--outline-electric-violet)
}
.bg-outline-dusty-blue {
    background-color: var(--outline-dusty-blue)
}
.bg-blue-responsible-darken-1 {
    background-color: var(--blue-responsible-darken-1)
}
.bg-blue-responsible-darken-2 {
    background-color: var(--blue-responsible-darken-2)
}
.bg-blue-responsible-main {
    background-color: var(--blue-responsible-main)
}
.bg-blue-responsible-lighten-1 {
    background-color: var(--blue-responsible-lighten-1)
}
.bg-blue-responsible-lighten-2 {
    background-color: var(--blue-responsible-lighten-2)
}
.bg-blue-responsible-lighten-3 {
    background-color: var(--blue-responsible-lighten-3)
}
.bg-blue-responsible-lighten-4 {
    background-color: var(--blue-responsible-lighten-4)
}
.bg-blue-responsible-lighten-5 {
    background-color: var(--blue-responsible-lighten-5)
}
.bg-gray-professional-darken-1 {
    background-color: var(--gray-professional-darken-1)
}
.bg-gray-professional-darken-2 {
    background-color: var(--gray-professional-darken-2)
}
.bg-gray-professional-main {
    background-color: var(--gray-professional-main)
}
.bg-gray-professional-lighten-1 {
    background-color: var(--gray-professional-lighten-1)
}
.bg-gray-professional-lighten-2 {
    background-color: var(--gray-professional-lighten-2)
}
.bg-gray-professional-lighten-3 {
    background-color: var(--gray-professional-lighten-3)
}
.bg-gray-professional-lighten-4 {
    background-color: var(--gray-professional-lighten-4)
}
.bg-gray-professional-lighten-5 {
    background-color: var(--gray-professional-lighten-5)
}
.bg-cyan-near-darken-1 {
    background-color: var(--cyan-near-darken-1)
}
.bg-cyan-near-darken-2 {
    background-color: var(--cyan-near-darken-2)
}
.bg-cyan-near-main {
    background-color: var(--cyan-near-main)
}
.bg-cyan-near-lighten-1 {
    background-color: var(--cyan-near-lighten-1)
}
.bg-cyan-near-lighten-2 {
    background-color: var(--cyan-near-lighten-2)
}
.bg-cyan-near-lighten-3 {
    background-color: var(--cyan-near-lighten-3)
}
.bg-cyan-near-lighten-4 {
    background-color: var(--cyan-near-lighten-4)
}
.bg-cyan-near-lighten-5 {
    background-color: var(--cyan-near-lighten-5)
}
.bg-green-guarantee-darken-1 {
    background-color: var(--green-guarantee-darken-1)
}
.bg-green-guarantee-darken-2 {
    background-color: var(--green-guarantee-darken-2)
}
.bg-green-guarantee-main {
    background-color: var(--green-guarantee-main)
}
.bg-green-guarantee-lighten-1 {
    background-color: var(--green-guarantee-lighten-1)
}
.bg-green-guarantee-lighten-2 {
    background-color: var(--green-guarantee-lighten-2)
}
.bg-green-guarantee-lighten-3 {
    background-color: var(--green-guarantee-lighten-3)
}
.bg-green-guarantee-lighten-4 {
    background-color: var(--green-guarantee-lighten-4)
}
.bg-green-guarantee-lighten-5 {
    background-color: var(--green-guarantee-lighten-5)
}
.bg-gray-cosmopolitan-darken-1 {
    background-color: var(--gray-cosmopolitan-darken-1)
}
.bg-gray-cosmopolitan-darken-2 {
    background-color: var(--gray-cosmopolitan-darken-2)
}
.bg-gray-cosmopolitan-main {
    background-color: var(--gray-cosmopolitan-main)
}
.bg-gray-cosmopolitan-lighten-1 {
    background-color: var(--gray-cosmopolitan-lighten-1)
}
.bg-gray-cosmopolitan-lighten-2 {
    background-color: var(--gray-cosmopolitan-lighten-2)
}
.bg-gray-cosmopolitan-lighten-3 {
    background-color: var(--gray-cosmopolitan-lighten-3)
}
.bg-gray-cosmopolitan-lighten-4 {
    background-color: var(--gray-cosmopolitan-lighten-4)
}
.bg-gray-cosmopolitan-lighten-5 {
    background-color: var(--gray-cosmopolitan-lighten-5)
}
.bg-green-quality-darken-1 {
    background-color: var(--green-quality-darken-1)
}
.bg-green-quality-darken-2 {
    background-color: var(--green-quality-darken-2)
}
.bg-green-quality-main {
    background-color: var(--green-quality-main)
}
.bg-green-quality-lighten-1 {
    background-color: var(--green-quality-lighten-1)
}
.bg-green-quality-lighten-2 {
    background-color: var(--green-quality-lighten-2)
}
.bg-green-quality-lighten-3 {
    background-color: var(--green-quality-lighten-3)
}
.bg-green-quality-lighten-4 {
    background-color: var(--green-quality-lighten-4)
}
.bg-green-quality-lighten-5 {
    background-color: var(--green-quality-lighten-5)
}
.bg-yellow-knowledge-darken-1 {
    background-color: var(--yellow-knowledge-darken-1)
}
.bg-yellow-knowledge-darken-2 {
    background-color: var(--yellow-knowledge-darken-2)
}
.bg-yellow-knowledge-main {
    background-color: var(--yellow-knowledge-main)
}
.bg-yellow-knowledge-lighten-1 {
    background-color: var(--yellow-knowledge-lighten-1)
}
.bg-yellow-knowledge-lighten-2 {
    background-color: var(--yellow-knowledge-lighten-2)
}
.bg-yellow-knowledge-lighten-3 {
    background-color: var(--yellow-knowledge-lighten-3)
}
.bg-yellow-knowledge-lighten-4 {
    background-color: var(--yellow-knowledge-lighten-4)
}
.bg-yellow-knowledge-lighten-5 {
    background-color: var(--yellow-knowledge-lighten-5)
}
.bg-orange-darken-1 {
    background-color: var(--orange-darken-1)
}
.bg-orange-darken-2 {
    background-color: var(--orange-darken-2)
}
.bg-orange-main {
    background-color: var(--orange-main)
}
.bg-orange-lighten-1 {
    background-color: var(--orange-lighten-1)
}
.bg-orange-lighten-2 {
    background-color: var(--orange-lighten-2)
}
.bg-orange-lighten-3 {
    background-color: var(--orange-lighten-3)
}
.bg-orange-lighten-4 {
    background-color: var(--orange-lighten-4)
}
.bg-orange-lighten-5 {
    background-color: var(--orange-lighten-5)
}
.bg-purple-new-darken-1 {
    background-color: var(--purple-new-darken-1)
}
.bg-purple-new-darken-2 {
    background-color: var(--purple-new-darken-2)
}
.bg-purple-new-main {
    background-color: var(--purple-new-main)
}
.bg-purple-new-lighten-1 {
    background-color: var(--purple-new-lighten-1)
}
.bg-purple-new-lighten-2 {
    background-color: var(--purple-new-lighten-2)
}
.bg-purple-new-lighten-3 {
    background-color: var(--purple-new-lighten-3)
}
.bg-purple-new-lighten-4 {
    background-color: var(--purple-new-lighten-4)
}
.bg-purple-new-lighten-5 {
    background-color: var(--purple-new-lighten-5)
}
.bg-neutral-transparent {
    background-color: var(--neutral-transparent)
}
.bg-neutral-white {
    background-color: var(--neutral-white)
}
.bg-neutral-grayLight {
    background-color: var(--neutral-grayLight)
}
.bg-neutral-grayMedium {
    background-color: var(--neutral-grayMedium)
}
.bg-neutral-grayDark {
    background-color: var(--neutral-grayDark)
}
.bg-neutral-black {
    background-color: var(--neutral-black)
}
.bg-ui-error {
    background-color: var(--ui-errorBackground)
}
.bg-ui-warning {
    background-color: var(--ui-warningBackground)
}
.bg-ui-info {
    background-color: var(--ui-infoBackground)
}
.bg-ui-success {
    background-color: var(--ui-successBackground)
}
.bg-ui-errorText {
    background-color: var(--ui-errorText)
}
.bg-ui-warningText {
    background-color: var(--ui-warningText)
}
.bg-ui-infoText {
    background-color: var(--ui-infoText)
}
.bg-ui-successText {
    background-color: var(--ui-successText)
}
.bg-demo-white {
    background-color: var(--demo-white)
}
.bg-demo-black {
    background-color: var(--demo-black)
}
.bg-demo-darkBlue {
    background-color: var(--demo-darkBlue)
}
.bg-demo-mediumBlue {
    background-color: var(--demo-mediumBlue)
}
.bg-demo-lightBlue {
    background-color: var(--demo-lightBlue)
}
.bg-demo-darkGray {
    background-color: var(--demo-darkGray)
}
.bg-demo-mediumGray {
    background-color: var(--demo-mediumGray)
}
.bg-demo-lightGray {
    background-color: var(--demo-lightGray)
}
.bg-opacity-60 {
    --tw-bg-opacity: 0.6
}
.bg-none {
    background-image: none
}
.bg-center {
    background-position: center
}
.bg-no-repeat {
    background-repeat: no-repeat
}
.object-cover {
    object-fit: cover
}
.p-12 {
    padding: 3rem
}
.p-4 {
    padding: 1rem
}
.p-6 {
    padding: 1.5rem
}
.p-8 {
    padding: 2rem
}
.p-0 {
    padding: 0px
}
.p-2 {
    padding: 0.5rem
}
.p-3 {
    padding: 0.75rem
}
.py-0 {
    padding-top: 0px;
    padding-bottom: 0px
}
.px-8 {
    padding-left: 2rem;
    padding-right: 2rem
}
.py-4 {
    padding-top: 1rem;
    padding-bottom: 1rem
}
.py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem
}
.py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem
}
.py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem
}
.py-64 {
    padding-top: 16rem;
    padding-bottom: 16rem
}
.py-1 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem
}
.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem
}
.px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem
}
.px-4 {
    padding-left: 1rem;
    padding-right: 1rem
}
.py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem
}
.py-5 {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem
}
.px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem
}
.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}
.px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem
}
.px-7 {
    padding-left: 1.75rem;
    padding-right: 1.75rem
}
.px-24 {
    padding-left: 6rem;
    padding-right: 6rem
}
.px-12 {
    padding-left: 3rem;
    padding-right: 3rem
}
.px-1 {
    padding-left: 0.25rem;
    padding-right: 0.25rem
}
.px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem
}
.pl-8 {
    padding-left: 2rem
}
.pl-4 {
    padding-left: 1rem
}
.pr-0 {
    padding-right: 0px
}
.pr-2 {
    padding-right: 0.5rem
}
.pb-2 {
    padding-bottom: 0.5rem
}
.pt-4 {
    padding-top: 1rem
}
.pb-16 {
    padding-bottom: 4rem
}
.pt-\[1px\] {
    padding-top: 1px
}
.pb-12 {
    padding-bottom: 3rem
}
.pt-10 {
    padding-top: 2.5rem
}
.pl-3 {
    padding-left: 0.75rem
}
.pl-6 {
    padding-left: 1.5rem
}
.pr-6 {
    padding-right: 1.5rem
}
.pt-24 {
    padding-top: 6rem
}
.pr-36 {
    padding-right: 9rem
}
.pt-0 {
    padding-top: 0px
}
.pb-4 {
    padding-bottom: 1rem
}
.pt-12 {
    padding-top: 3rem
}
.pb-10 {
    padding-bottom: 2.5rem
}
.text-left {
    text-align: left
}
.text-center {
    text-align: center
}
.font-display {
    font-family: Open Sans, Helvetica, Arial, sans-serif
}
.font-body {
    font-family: Open Sans, Helvetica, Arial, sans-serif
}
.text-xs {
    font-size: var(--fs-xs);
    line-height: var(--lh-xs)
}
.text-sm {
    font-size: var(--fs-sm);
    line-height: var(--lh-sm)
}
.text-base {
    font-size: var(--fs-base);
    line-height: var(--lh-base)
}
.text-lg {
    font-size: var(--fs-lg);
    line-height: var(--lh-lg)
}
.text-xl {
    font-size: var(--fs-xl);
    line-height: var(--lh-xl)
}
.text-2xl {
    font-size: var(--fs-2xl);
    line-height: var(--lh-2xl)
}
.text-3xl {
    font-size: var(--fs-3xl);
    line-height: var(--lh-3xl)
}
.text-4xl {
    font-size: var(--fs-4xl);
    line-height: var(--lh-4xl)
}
.text-5xl {
    font-size: var(--fs-5xl);
    line-height: var(--lh-5xl)
}
.text-6xl {
    font-size: var(--fs-6xl);
    line-height: var(--lh-6xl)
}
.text-7xl {
    font-size: var(--fs-7xl);
    line-height: var(--lh-7xl)
}
.text-8xl {
    font-size: var(--fs-8xl);
    line-height: var(--lh-8xl)
}
.text-9xl {
    font-size: var(--fs-9xl);
    line-height: var(--lh-9lx)
}
.text-h1 {
    font-size: var(--fs-h1);
    line-height: var(--lh-h1)
}
.text-h1-small {
    font-size: var(--fs-h1-small);
    line-height: var(--lh-h1-small)
}
.text-h1-medium {
    font-size: var(--fs-h1-medium);
    line-height: var(--lh-h1-medium)
}
.text-h2 {
    font-size: var(--fs-h2);
    line-height: var(--lh-h2)
}
.text-h2-small {
    font-size: var(--fs-h2-small);
    line-height: var(--lh-h2-small)
}
.text-h2-medium {
    font-size: var(--fs-h2-medium);
    line-height: var(--lh-h2-medium)
}
.text-h3 {
    font-size: var(--fs-h3);
    line-height: var(--lh-h3)
}
.text-h3-small {
    font-size: var(--fs-h3-small);
    line-height: var(--lh-h3-small)
}
.text-h3-medium {
    font-size: var(--fs-h3-medium);
    line-height: var(--lh-h3-medium)
}
.text-h4 {
    font-size: var(--fs-h4);
    line-height: var(--lh-h4)
}
.text-h4-small {
    font-size: var(--fs-h4-small);
    line-height: var(--lh-h4-small)
}
.text-h4-medium {
    font-size: var(--fs-h4-medium);
    line-height: var(--lh-h4-medium)
}
.text-h5 {
    font-size: var(--fs-h5);
    line-height: var(--lh-h5)
}
.text-h5-small {
    font-size: var(--fs-h5-small);
    line-height: var(--lh-h5-small)
}
.text-h5-medium {
    font-size: var(--fs-h5-medium);
    line-height: var(--lh-h5-medium)
}
.text-h6 {
    font-size: var(--fs-h6);
    line-height: var(--lh-h6)
}
.text-h6-small {
    font-size: var(--fs-h6-small);
    line-height: var(--lh-h6-small)
}
.text-h6-medium {
    font-size: var(--fs-h6-medium);
    line-height: var(--lh-h6-medium)
}
.font-thin {
    font-weight: var(--fw-extralight)
}
.font-extralight {
    font-weight: var(--fw-thin)
}
.font-light {
    font-weight: var(--fw-light)
}
.font-normal {
    font-weight: var(--fw-normal)
}
.font-medium {
    font-weight: var(--fw-medium)
}
.font-semibold {
    font-weight: var(--fw-semibold)
}
.font-bold {
    font-weight: var(--fw-bold)
}
.font-extrabold {
    font-weight: var(--fw-extrabold)
}
.font-black {
    font-weight: var(--fw-black)
}
.uppercase {
    text-transform: uppercase
}
.lowercase {
    text-transform: lowercase
}
.capitalize {
    text-transform: capitalize
}
.italic {
    font-style: italic
}
.leading-5 {
    line-height: 1.25rem
}
.leading-tight {
    line-height: 1.25
}
.leading-normal {
    line-height: 1.5
}
.text-outline-phase2-blue {
    color: var(--outline-phase2-blue)
}
.text-outline-karma-coral {
    color: var(--outline-karma-coral)
}
.text-outline-soft-black {
    color: var(--outline-soft-black)
}
.text-outline-not-gray {
    color: var(--outline-not-gray)
}
.text-outline-transparent {
    color: var(--outline-transparent)
}
.text-outline-white {
    color: var(--outline-white)
}
.text-outline-black {
    color: var(--outline-black)
}
.text-outline-dark-blue {
    color: var(--outline-dark-blue)
}
.text-outline-medium-blue {
    color: var(--outline-medium-blue)
}
.text-outline-light-blue {
    color: var(--outline-light-blue)
}
.text-outline-dark-gray {
    color: var(--outline-dark-gray)
}
.text-outline-medium-gray {
    color: var(--outline-medium-gray)
}
.text-outline-light-gray {
    color: var(--outline-light-gray)
}
.text-outline-misty-teal {
    color: var(--outline-misty-teal)
}
.text-outline-electric-violet {
    color: var(--outline-electric-violet)
}
.text-outline-dusty-blue {
    color: var(--outline-dusty-blue)
}
.text-blue-responsible-darken-1 {
    color: var(--blue-responsible-darken-1)
}
.text-blue-responsible-darken-2 {
    color: var(--blue-responsible-darken-2)
}
.text-blue-responsible-main {
    color: var(--blue-responsible-main)
}
.text-blue-responsible-lighten-1 {
    color: var(--blue-responsible-lighten-1)
}
.text-blue-responsible-lighten-2 {
    color: var(--blue-responsible-lighten-2)
}
.text-blue-responsible-lighten-3 {
    color: var(--blue-responsible-lighten-3)
}
.text-blue-responsible-lighten-4 {
    color: var(--blue-responsible-lighten-4)
}
.text-blue-responsible-lighten-5 {
    color: var(--blue-responsible-lighten-5)
}
.text-gray-professional-darken-1 {
    color: var(--gray-professional-darken-1)
}
.text-gray-professional-darken-2 {
    color: var(--gray-professional-darken-2)
}
.text-gray-professional-main {
    color: var(--gray-professional-main)
}
.text-gray-professional-lighten-1 {
    color: var(--gray-professional-lighten-1)
}
.text-gray-professional-lighten-2 {
    color: var(--gray-professional-lighten-2)
}
.text-gray-professional-lighten-3 {
    color: var(--gray-professional-lighten-3)
}
.text-gray-professional-lighten-4 {
    color: var(--gray-professional-lighten-4)
}
.text-gray-professional-lighten-5 {
    color: var(--gray-professional-lighten-5)
}
.text-cyan-near-darken-1 {
    color: var(--cyan-near-darken-1)
}
.text-cyan-near-darken-2 {
    color: var(--cyan-near-darken-2)
}
.text-cyan-near-main {
    color: var(--cyan-near-main)
}
.text-cyan-near-lighten-1 {
    color: var(--cyan-near-lighten-1)
}
.text-cyan-near-lighten-2 {
    color: var(--cyan-near-lighten-2)
}
.text-cyan-near-lighten-3 {
    color: var(--cyan-near-lighten-3)
}
.text-cyan-near-lighten-4 {
    color: var(--cyan-near-lighten-4)
}
.text-cyan-near-lighten-5 {
    color: var(--cyan-near-lighten-5)
}
.text-green-guarantee-darken-1 {
    color: var(--green-guarantee-darken-1)
}
.text-green-guarantee-darken-2 {
    color: var(--green-guarantee-darken-2)
}
.text-green-guarantee-main {
    color: var(--green-guarantee-main)
}
.text-green-guarantee-lighten-1 {
    color: var(--green-guarantee-lighten-1)
}
.text-green-guarantee-lighten-2 {
    color: var(--green-guarantee-lighten-2)
}
.text-green-guarantee-lighten-3 {
    color: var(--green-guarantee-lighten-3)
}
.text-green-guarantee-lighten-4 {
    color: var(--green-guarantee-lighten-4)
}
.text-green-guarantee-lighten-5 {
    color: var(--green-guarantee-lighten-5)
}
.text-gray-cosmopolitan-darken-1 {
    color: var(--gray-cosmopolitan-darken-1)
}
.text-gray-cosmopolitan-darken-2 {
    color: var(--gray-cosmopolitan-darken-2)
}
.text-gray-cosmopolitan-main {
    color: var(--gray-cosmopolitan-main)
}
.text-gray-cosmopolitan-lighten-1 {
    color: var(--gray-cosmopolitan-lighten-1)
}
.text-gray-cosmopolitan-lighten-2 {
    color: var(--gray-cosmopolitan-lighten-2)
}
.text-gray-cosmopolitan-lighten-3 {
    color: var(--gray-cosmopolitan-lighten-3)
}
.text-gray-cosmopolitan-lighten-4 {
    color: var(--gray-cosmopolitan-lighten-4)
}
.text-gray-cosmopolitan-lighten-5 {
    color: var(--gray-cosmopolitan-lighten-5)
}
.text-green-quality-darken-1 {
    color: var(--green-quality-darken-1)
}
.text-green-quality-darken-2 {
    color: var(--green-quality-darken-2)
}
.text-green-quality-main {
    color: var(--green-quality-main)
}
.text-green-quality-lighten-1 {
    color: var(--green-quality-lighten-1)
}
.text-green-quality-lighten-2 {
    color: var(--green-quality-lighten-2)
}
.text-green-quality-lighten-3 {
    color: var(--green-quality-lighten-3)
}
.text-green-quality-lighten-4 {
    color: var(--green-quality-lighten-4)
}
.text-green-quality-lighten-5 {
    color: var(--green-quality-lighten-5)
}
.text-yellow-knowledge-darken-1 {
    color: var(--yellow-knowledge-darken-1)
}
.text-yellow-knowledge-darken-2 {
    color: var(--yellow-knowledge-darken-2)
}
.text-yellow-knowledge-main {
    color: var(--yellow-knowledge-main)
}
.text-yellow-knowledge-lighten-1 {
    color: var(--yellow-knowledge-lighten-1)
}
.text-yellow-knowledge-lighten-2 {
    color: var(--yellow-knowledge-lighten-2)
}
.text-yellow-knowledge-lighten-3 {
    color: var(--yellow-knowledge-lighten-3)
}
.text-yellow-knowledge-lighten-4 {
    color: var(--yellow-knowledge-lighten-4)
}
.text-yellow-knowledge-lighten-5 {
    color: var(--yellow-knowledge-lighten-5)
}
.text-orange-darken-1 {
    color: var(--orange-darken-1)
}
.text-orange-darken-2 {
    color: var(--orange-darken-2)
}
.text-orange-main {
    color: var(--orange-main)
}
.text-orange-lighten-1 {
    color: var(--orange-lighten-1)
}
.text-orange-lighten-2 {
    color: var(--orange-lighten-2)
}
.text-orange-lighten-3 {
    color: var(--orange-lighten-3)
}
.text-orange-lighten-4 {
    color: var(--orange-lighten-4)
}
.text-orange-lighten-5 {
    color: var(--orange-lighten-5)
}
.text-purple-new-darken-1 {
    color: var(--purple-new-darken-1)
}
.text-purple-new-darken-2 {
    color: var(--purple-new-darken-2)
}
.text-purple-new-main {
    color: var(--purple-new-main)
}
.text-purple-new-lighten-1 {
    color: var(--purple-new-lighten-1)
}
.text-purple-new-lighten-2 {
    color: var(--purple-new-lighten-2)
}
.text-purple-new-lighten-3 {
    color: var(--purple-new-lighten-3)
}
.text-purple-new-lighten-4 {
    color: var(--purple-new-lighten-4)
}
.text-purple-new-lighten-5 {
    color: var(--purple-new-lighten-5)
}
.text-neutral-transparent {
    color: var(--neutral-transparent)
}
.text-neutral-white {
    color: var(--neutral-white)
}
.text-neutral-grayLight {
    color: var(--neutral-grayLight)
}
.text-neutral-grayMedium {
    color: var(--neutral-grayMedium)
}
.text-neutral-grayDark {
    color: var(--neutral-grayDark)
}
.text-neutral-black {
    color: var(--neutral-black)
}
.text-ui-error {
    color: var(--ui-errorBackground)
}
.text-ui-warning {
    color: var(--ui-warningBackground)
}
.text-ui-info {
    color: var(--ui-infoBackground)
}
.text-ui-success {
    color: var(--ui-successBackground)
}
.text-ui-errorText {
    color: var(--ui-errorText)
}
.text-ui-warningText {
    color: var(--ui-warningText)
}
.text-ui-infoText {
    color: var(--ui-infoText)
}
.text-ui-successText {
    color: var(--ui-successText)
}
.text-demo-white {
    color: var(--demo-white)
}
.text-demo-black {
    color: var(--demo-black)
}
.text-demo-darkBlue {
    color: var(--demo-darkBlue)
}
.text-demo-mediumBlue {
    color: var(--demo-mediumBlue)
}
.text-demo-lightBlue {
    color: var(--demo-lightBlue)
}
.text-demo-darkGray {
    color: var(--demo-darkGray)
}
.text-demo-mediumGray {
    color: var(--demo-mediumGray)
}
.text-demo-lightGray {
    color: var(--demo-lightGray)
}
.underline {
    -webkit-text-decoration-line: underline;
            text-decoration-line: underline
}
.no-underline {
    -webkit-text-decoration-line: none;
            text-decoration-line: none
}
.opacity-90 {
    opacity: 0.9
}
.shadow {
    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
    box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
.shadow-md {
    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
    box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
.outline {
    outline-style: solid
}
.ring-2 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}
.ring-4 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 #0000;
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)
}
.ring-blue-responsible-main {
    --tw-ring-color: var(--blue-responsible-main)
}
.ring-blue-responsible-lighten-2 {
    --tw-ring-color: var(--blue-responsible-lighten-2)
}
.ring-cyan-near-lighten-2 {
    --tw-ring-color: var(--cyan-near-lighten-2)
}
.ring-green-guarantee-lighten-2 {
    --tw-ring-color: var(--green-guarantee-lighten-2)
}
.ring-orange-lighten-2 {
    --tw-ring-color: var(--orange-lighten-2)
}
.ring-yellow-knowledge-lighten-2 {
    --tw-ring-color: var(--yellow-knowledge-lighten-2)
}
.ring-purple-new-lighten-2 {
    --tw-ring-color: var(--purple-new-lighten-2)
}
.ring-gray-professional-lighten-2 {
    --tw-ring-color: var(--gray-professional-lighten-2)
}
.blur {
    --tw-blur: blur(8px);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.grayscale {
    --tw-grayscale: grayscale(100%);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.invert {
    --tw-invert: invert(100%);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.sepia {
    --tw-sepia: sepia(100%);
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.filter {
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
.backdrop-filter {
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
}
.transition-colors {
    transition-property: color, background-color, border-color, fill, stroke, -webkit-text-decoration-color;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, -webkit-text-decoration-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
.transition {
    transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
.hover\:bg-blue-responsible-darken-1:hover {
    background-color: var(--blue-responsible-darken-1)
}
.hover\:text-neutral-white:hover {
    color: var(--neutral-white)
}
@media (min-width: 480px) {
    .xs\:absolute {
        position: absolute
    }
    .xs\:w-auto {
        width: auto
    }
    .xs\:min-w-\[200px\] {
        min-width: 200px
    }
    .xs\:grid-cols-2 {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
}
@media (min-width: 640px) {
    .sm\:block {
        display: block
    }
    .sm\:max-w-screen-sm {
        max-width: 640px
    }
    .sm\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr))
    }
    .sm\:px-16 {
        padding-left: 4rem;
        padding-right: 4rem
    }
    .sm\:px-32 {
        padding-left: 8rem;
        padding-right: 8rem
    }
    .sm\:hover\:active\:disabled\:opacity-75:disabled:active:hover {
        opacity: 0.75
    }
}
@media (min-width: 768px) {
    .md\:absolute {
        position: absolute
    }
    .md\:bottom-0 {
        bottom: 0px
    }
    .md\:right-0 {
        right: 0px
    }
    .md\:col-start-2 {
        grid-column-start: 2
    }
    .md\:col-start-3 {
        grid-column-start: 3
    }
    .md\:my-20 {
        margin-top: 5rem;
        margin-bottom: 5rem
    }
    .md\:mr-6 {
        margin-right: 1.5rem
    }
    .md\:mr-4 {
        margin-right: 1rem
    }
    .md\:mb-4 {
        margin-bottom: 1rem
    }
    .md\:mt-10 {
        margin-top: 2.5rem
    }
    .md\:block {
        display: block
    }
    .md\:flex {
        display: flex
    }
    .md\:grid {
        display: grid
    }
    .md\:h-auto {
        height: auto
    }
    .md\:w-full-screen-w {
        width: 100vw
    }
    .md\:w-full {
        width: 100%
    }
    .md\:max-w-screen-md {
        max-width: 768px
    }
    .md\:grid-cols-4 {
        grid-template-columns: repeat(4, minmax(0, 1fr))
    }
    .md\:grid-cols-3 {
        grid-template-columns: repeat(3, minmax(0, 1fr))
    }
    .md\:flex-row {
        flex-direction: row
    }
    .md\:flex-nowrap {
        flex-wrap: nowrap
    }
    .md\:items-center {
        align-items: center
    }
    .md\:justify-start {
        justify-content: flex-start
    }
    .md\:gap-8 {
        gap: 2rem
    }
    .md\:gap-4 {
        gap: 1rem
    }
    .md\:border-r {
        border-right-width: 1px
    }
    .md\:border-b {
        border-bottom-width: 1px
    }
    .md\:p-8 {
        padding: 2rem
    }
    .md\:px-20 {
        padding-left: 5rem;
        padding-right: 5rem
    }
    .md\:px-40 {
        padding-left: 10rem;
        padding-right: 10rem
    }
    .md\:px-6 {
        padding-left: 1.5rem;
        padding-right: 1.5rem
    }
    .md\:pb-20 {
        padding-bottom: 5rem
    }
    .md\:pl-2 {
        padding-left: 0.5rem
    }
    .md\:pt-24 {
        padding-top: 6rem
    }
    .md\:pb-24 {
        padding-bottom: 6rem
    }
    .md\:pb-0 {
        padding-bottom: 0px
    }
    .md\:text-h1-medium {
        font-size: var(--fs-h1-medium);
        line-height: var(--lh-h1-medium)
    }
    .md\:text-h2-medium {
        font-size: var(--fs-h2-medium);
        line-height: var(--lh-h2-medium)
    }
    .md\:text-h3-medium {
        font-size: var(--fs-h3-medium);
        line-height: var(--lh-h3-medium)
    }
    .md\:text-h4-medium {
        font-size: var(--fs-h4-medium);
        line-height: var(--lh-h4-medium)
    }
    .md\:text-h5-medium {
        font-size: var(--fs-h5-medium);
        line-height: var(--lh-h5-medium)
    }
    .md\:text-h6-medium {
        font-size: var(--fs-h6-medium);
        line-height: var(--lh-h6-medium)
    }
    .md\:text-4xl {
        font-size: var(--fs-4xl);
        line-height: var(--lh-4xl)
    }
    .md\:text-2xl {
        font-size: var(--fs-2xl);
        line-height: var(--lh-2xl)
    }
}
@media (min-width: 1024px) {
    .lg\:bottom-24 {
        bottom: 6rem
    }
    .lg\:mx-0 {
        margin-left: 0px;
        margin-right: 0px
    }
    .lg\:flex {
        display: flex
    }
    .lg\:h-4 {
        height: 1rem
    }
    .lg\:max-w-screen-lg {
        max-width: 1024px
    }
    .lg\:grid-cols-5 {
        grid-template-columns: repeat(5, minmax(0, 1fr))
    }
    .lg\:grid-cols-6 {
        grid-template-columns: repeat(6, minmax(0, 1fr))
    }
    .lg\:flex-row {
        flex-direction: row
    }
    .lg\:flex-wrap {
        flex-wrap: wrap
    }
    .lg\:place-content-center {
        place-content: center
    }
    .lg\:justify-between {
        justify-content: space-between
    }
    .lg\:py-0 {
        padding-top: 0px;
        padding-bottom: 0px
    }
    .lg\:text-5xl {
        font-size: var(--fs-5xl);
        line-height: var(--lh-5xl)
    }
    .lg\:text-3xl {
        font-size: var(--fs-3xl);
        line-height: var(--lh-3xl)
    }
}
@media (min-width: 1280px) {
    .xl\:max-w-screen-xl {
        max-width: 1280px
    }
    .xl\:text-4xl {
        font-size: var(--fs-4xl);
        line-height: var(--lh-4xl)
    }
}
@media (min-width: 1440px) {
    .xxl\:max-w-screen-xxl {
        max-width: 1440px
    }
    .xxl\:grid-cols-6 {
        grid-template-columns: repeat(6, minmax(0, 1fr))
    }
    .xxl\:grid-cols-9 {
        grid-template-columns: repeat(9, minmax(0, 1fr))
    }
}
`,
  Ni = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host{
  display:block;
}

p {
  font-size: var(--fs-lg);
  line-height: var(--lh-lg);
  margin-bottom:1em;
}

ul {
  font-size: var(--fs-lg);
  line-height: var(--lh-lg);
  list-style-type:disc;
  list-style-position:inside;
}

ol {
  font-size: var(--fs-lg);
  line-height: var(--lh-lg);
  list-style-type:decimal;
  list-style-position:inside;
}

li{
  padding-left:1em;
  margin-top:0.5em;
  margin-bottom:0.5em;
}

hr{
  border-color:var(--brand-primary);
  margin-top:2em;
  margin-bottom:2em;
}

blockquote{
  margin-top:1em;
  margin-bottom:1em;
  font-size:var(--fs-lg);
  font-weight:bold;
}

a, a:hover {
  font-weight: var(--fw-semibold);
  color: var(--blue-responsible-main);
  -webkit-text-decoration-line: underline;
          text-decoration-line: underline;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: var(--fw-semibold);
  color: var(--blue-responsible-main);
}
`;
let Pi = class extends Mn {
  render() {
    return V`<slot></slot>`;
  }
};
(Pi.styles = [An, Ii, Lt, ii, Ni]), (Pi = s([le("idb-styled-text")], Pi));
var Wi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
#color {
  margin-bottom: 0.5rem;
  height: 4rem;
  width: 100%;
  border-radius: 0.5rem;
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  background-color:var(--swatch-color)
}
.information {
  display: flex;
  flex-direction: row;
  justify-content: space-between
}
.information--label {
  font-weight: var(--fw-semibold)
}
`;
let Xi = class extends xe {
  constructor() {
    super(...arguments), (this.set = "blue-responsible"), (this.color = "main");
  }
  render() {
    const e = i.colors[this.set][this.color],
      t = getComputedStyle(document.body).getPropertyValue(
        `--${this.set}-${this.color}`
      );
    return V`
      <div id="color" style="--swatch-color: ${e}"></div>
      <div class="information">
        <span class="information--label">Color:</span>${this.set}-${this.color}
      </div>
      <div class="information">
        <span class="information--label">CSS Variable:</span
        ><code>${e}</code>
      </div>
      <div class="information">
        <span class="information--label">Hex Code:</span><code>${t}</code>
      </div>
    `;
  }
};
(Xi.styles = [Wi]),
  s([de({ type: String })], Xi.prototype, "set", void 0),
  s([de({ type: String })], Xi.prototype, "color", void 0),
  (Xi = s([le("idb-swatch")], Xi));
var Yi = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
outline-grid {
    margin-bottom: 5rem
}
`;
const Ki = [
  "blue-responsible",
  "gray-professional",
  "cyan-near",
  "green-guarantee",
  "gray-cosmopolitan",
  "green-quality",
  "yellow-knowledge",
  "orange",
  "purple-new",
  "neutral",
  "ui",
  "demo",
];
let Ji = class extends xe {
  constructor() {
    super(...arguments), (this.set = "blue-responsible");
  }
  render() {
    const e = Object.entries(i.colors[this.set]).map(([e]) => e);
    return V`
      <outline-grid>
        ${e.map(
          (e) => V`
            <outline-column col-span-default="12">
              <idb-swatch set="${this.set}" color="${e}"></idb-swatch>
            </outline-column>
          `
        )}
      </outline-grid>
    `;
  }
};
(Ji.styles = [Yi]),
  s([de({ type: String })], Ji.prototype, "set", void 0),
  (Ji = s([le("idb-swatch-set")], Ji));
const Qi = Object.keys(i.spacing),
  ea = ["small", "medium", "large", "none"],
  ta = ["top", "middle", "bottom"],
  ra = ["left", "center", "right"],
  na = ["vertical", "horizontal"],
  ia = ["text", "search", "password", "email", "tel", "number", "url"];
function aa(e, t, r) {
  return (
    (e || "") + (void 0 !== t ? ` ${t}` : "") + (void 0 !== r ? ` ${r}` : "")
  );
}
const oa = {
    defaultSlot: {
      name: "Default Slot",
      description:
        "Renders anything that is passed into the inner HTML of the given element.",
    },
  },
  la = {
    orientation: {
      name: "Orientation",
      control: { type: "radio", options: na },
    },
  },
  sa = {
    name: "Number of Columns to Span",
    control: { type: "range", min: 1, max: 12, step: 1 },
  },
  da = {
    name: "Number of Rows to Span",
    control: { type: "range", min: 1, max: 6, step: 1 },
  },
  ca = {
    name: "Gap Size",
    control: { type: "select", options: ["large", "medium", "small", "none"] },
  },
  pa = { name: "Vertical Alignment", control: { type: "select", options: ta } },
  ha = {
    name: "Horizontal Alignment",
    control: { type: "select", options: ra },
  },
  ga = { name: "Size", control: { type: "select", options: ea } },
  ua = {
    name: "Color",
    description: "Select from a pre-defined list of colors.",
    control: { type: "select", options: n },
  },
  ma = { name: "Spacing", control: { type: "select", options: Qi } },
  ba = {
    name: "Image URL",
    description: "The image URL to use for this demo.",
    control: { type: "text" },
  },
  va = { table: { disable: !0 } },
  ya = (e) => {
    const [t, r] = e.split("rem");
    return "px" === r || void 0 === r ? e : 16 * parseFloat(t) + "px";
  };
var xa = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  display: inline-block;
  cursor: pointer;
}

:host([disabled]) {
  cursor: not-allowed;
}

.tab {
  pointer-events: none;
  margin-bottom: 0.125rem;
  display: block;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  white-space: nowrap;
  border-radius: 0.25rem;
  border-bottom-width: 2px;
  border-color: var(--demo-darkGray);
  background-repeat: no-repeat;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1.5rem;
  padding-right: 9rem;
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  font-size: var(--fs-xl);
  line-height: var(--lh-xl);
  font-weight: var(--fw-medium);
  color: var(--demo-darkGray);
}

@media (min-width: 1024px) {

  .tab {
    font-size: var(--fs-2xl);
    line-height: var(--lh-2xl);
  }
}

.tab{
  background-image:url("data:image/svg+xml,%3Csvg width='12' height='22' viewBox='0 0 12 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6036 10.3964L1.4449 0.237629C1.10859 -0.0871735 0.572681 -0.0778466 0.247879 0.258463C-0.0689857 0.586538 -0.0689856 1.10663 0.247879 1.43465L9.8081 10.9949L0.247879 20.5551C-0.0826265 20.8857 -0.0826265 21.4216 0.247879 21.7521C0.578485 22.0826 1.11435 22.0826 1.4449 21.7521L11.6036 11.5934C11.9341 11.2628 11.9341 10.7269 11.6036 10.3964Z' fill='%23363739'/%3E%3C/svg%3E%0A");
  background-position:calc(100% - 24px) 50%;
}

.tab:hover:not(.tab--disabled) {
  color: var(--demo-lightGray);
}

.tab:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.tab:focus:not(.tab--disabled), .tab:focus-visible:not(.tab--disabled) {
  background-color: var(--demo-lightBlue);
  color: var(--demo-darkBlue);
  --tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);
  box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.tab.tab--active:not(.tab--disabled) {
  background-color: var(--demo-lightGray);
  color: var(--demo-darkBlue);
  background-image:url("data:image/svg+xml,%3Csvg width='12' height='22' viewBox='0 0 12 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.6036 10.3964L1.4449 0.237629C1.10859 -0.0871735 0.572681 -0.0778466 0.247879 0.258463C-0.0689857 0.586538 -0.0689856 1.10663 0.247879 1.43465L9.8081 10.9949L0.247879 20.5551C-0.0826265 20.8857 -0.0826265 21.4216 0.247879 21.7521C0.578485 22.0826 1.11435 22.0826 1.4449 21.7521L11.6036 11.5934C11.9341 11.2628 11.9341 10.7269 11.6036 10.3964Z' fill='%23056CB6'/%3E%3C/svg%3E%0A");
}

.tab.tab--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
`;
let fa = 0,
  wa = class extends xe {
    constructor() {
      super(...arguments),
        (this.componentId = "tab-" + ++fa),
        (this.panel = ""),
        (this.active = !1),
        (this.disabled = !1);
    }
    focus(e) {
      this.tab.focus(e);
    }
    blur() {
      this.tab.blur();
    }
    render() {
      return (
        (this.id = this.id || this.componentId),
        V`
      <div
        part="base"
        class=${Ae({
          tab: !0,
          "tab--active": this.active,
          "tab--disabled": this.disabled,
        })}
        role="tab"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-selected=${this.active ? "true" : "false"}
        tabindex=${this.disabled || !this.active ? "-1" : "0"}
      >
        <slot> </slot>
      </div>
    `
      );
    }
  };
function ka(e, t) {
  return {
    top: Math.round(
      e.getBoundingClientRect().top - t.getBoundingClientRect().top
    ),
    left: Math.round(
      e.getBoundingClientRect().left - t.getBoundingClientRect().left
    ),
  };
}
function za(e, t, r = "vertical", n = "smooth") {
  const i = ka(e, t),
    a = i.top + t.scrollTop,
    o = i.left + t.scrollLeft,
    l = t.scrollLeft,
    s = t.scrollLeft + t.offsetWidth,
    d = t.scrollTop,
    c = t.scrollTop + t.offsetHeight;
  ("horizontal" !== r && "both" !== r) ||
    (o < l
      ? t.scrollTo({ left: o, behavior: n })
      : o + e.clientWidth > s &&
        t.scrollTo({ left: o - t.offsetWidth + e.clientWidth, behavior: n })),
    ("vertical" !== r && "both" !== r) ||
      (a < d
        ? t.scrollTo({ top: a, behavior: n })
        : a + e.clientHeight > c &&
          t.scrollTo({
            top: a - t.offsetHeight + e.clientHeight,
            behavior: n,
          }));
}
(wa.styles = [xa]),
  s([he(".tab")], wa.prototype, "tab", void 0),
  s([de()], wa.prototype, "panel", void 0),
  s([de({ type: Boolean, reflect: !0 })], wa.prototype, "active", void 0),
  s([de({ type: Boolean, reflect: !0 })], wa.prototype, "disabled", void 0),
  (wa = s([le("outline-tab")], wa));
var _a = g`
/* Apply standardized box sizing to the component. */
:host {
  box-sizing: border-box;
}
:host *,
:host *::before,
:host *::after {
  box-sizing: inherit;
}
[hidden] {
  display: none !important;
}
/* Apply component specific CSS */
:host {
  display: block;
}

.tab-group {
  display: flex;
  border-width: 1px;
  border-color: var(--neutral-transparent);
}

.tab-group .tab-group__tabs {
  position: relative;
  display: flex;
}

.tab-group .tab-group__indicator {
  position: absolute;
  left: 0px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.tab-group--start {
  flex-direction: row;
}

.tab-group--start .tab-group__nav-container {
  order: 1;
  border-width: 1px;
  border-bottom-color: var(--demo-lightGray);
}

.tab-group--start .tab-group__tabs{
  flex:0 0 auto;
  flex-direction:column;
}

.tab-group--start .tab-group__indicator{
  right:calc(-1 * 2px);
  border-bottom:0;
}

.tab-group--start .tab-group__body {
  order: 2;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  flex:1 1 auto;
}

.tab-group--top {
  flex-direction: column;
}

.tab-group--top .tab-group__nav-container {
  order: 1;
}

.tab-group--top .tab-group__nav {
  display: flex;
  overflow-x: auto;
  scrollbar-width:none;
}

.tab-group--top .tab-group__nav::-webkit-scrollbar {
  height: 0px;
  width: 0px;
}

.tab-group--top .tab-group__tabs {
  position: relative;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: row;
  border-width: 1px;
  border-bottom-color: var(--demo-darkGray);
}

.tab-group--top .tab-group__tabs .tab {
  padding-right: 1.5rem;
  background-image:none;
}

.tab-group--top .tab-group__indicator{
  bottom:-2px;
}

.tab-group--top .tab-group__body {
  order: 2;
}
`;
let $a = class extends xe {
  constructor() {
    super(...arguments),
      (this.mobileController = new r(this)),
      (this.tabs = []),
      (this.panels = []),
      (this.placement = "start"),
      (this.activation = "auto"),
      (this._handleResize = () => {
        this.mobileController.isMobile || this.intersectionObserver();
      });
  }
  connectedCallback() {
    super.connectedCallback(),
      window.addEventListener("resize", this._handleResize),
      (this.resizeObserver = new ResizeObserver(() => {
        this.mobileController.isMobile ||
          (this.preventIndicatorTransition(), this.repositionIndicator());
      })),
      (this.mutationObserver = new MutationObserver((e) => {
        e.some(
          (e) => !["aria-labelledby", "aria-controls"].includes(e.attributeName)
        ) && setTimeout(() => this.setAriaLabels()),
          e.some((e) => "disabled" === e.attributeName) &&
            this.syncTabsAndPanels();
      })),
      this.mobileController.isMobile ||
        this.updateComplete.then(() => {
          this.syncTabsAndPanels(),
            this.mutationObserver.observe(this, {
              attributes: !0,
              childList: !0,
              subtree: !0,
            }),
            this.resizeObserver.observe(this.nav),
            this.intersectionObserver();
        });
  }
  disconnectedCallback() {
    this.mutationObserver.disconnect(),
      this.resizeObserver.unobserve(this.nav),
      window.removeEventListener("resize", this._handleResize);
  }
  intersectionObserver() {
    new IntersectionObserver((e, t) => {
      e[0].intersectionRatio > 0 &&
        (this.setAriaLabels(),
        this.setActiveTab(this.getActiveTab() || this.tabs[0], {
          emitEvents: !1,
        }),
        t.unobserve(e[0].target));
    }).observe(this.tabGroup);
  }
  show(e) {
    const t = this.tabs.find((t) => t.panel === e);
    t && this.setActiveTab(t, { scrollBehavior: "smooth" });
  }
  getAllTabs(e = !1) {
    return [
      ...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements(),
    ].filter((t) =>
      e
        ? "outline-tab" === t.tagName.toLowerCase()
        : "outline-tab" === t.tagName.toLowerCase() && !t.disabled
    );
  }
  getAllPanels() {
    return [...this.body.querySelector("slot").assignedElements()].filter(
      (e) => "outline-tab-panel" === e.tagName.toLowerCase()
    );
  }
  getActiveTab() {
    return this.tabs.find((e) => e.active);
  }
  handleClick(e) {
    const t = e.target.closest("outline-tab");
    (null == t ? void 0 : t.closest("outline-tab-group")) === this &&
      t &&
      this.setActiveTab(t, { scrollBehavior: "smooth" });
  }
  handleKeyDown(e) {
    const t = e.target.closest("outline-tab");
    if (
      (null == t ? void 0 : t.closest("outline-tab-group")) === this &&
      (["Enter", " "].includes(e.key) &&
        t &&
        (this.setActiveTab(t, { scrollBehavior: "smooth" }),
        e.preventDefault()),
      [
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Home",
        "End",
      ].includes(e.key))
    ) {
      const t = document.activeElement;
      if (t && "outline-tab" === t.tagName.toLowerCase()) {
        let r = this.tabs.indexOf(t);
        "Home" === e.key
          ? (r = 0)
          : "End" === e.key
          ? (r = this.tabs.length - 1)
          : (["top", "bottom"].includes(this.placement) &&
              "ArrowLeft" === e.key) ||
            (["start", "end"].includes(this.placement) && "ArrowUp" === e.key)
          ? (r = Math.max(0, r - 1))
          : ((["top", "bottom"].includes(this.placement) &&
              "ArrowRight" === e.key) ||
              (["start", "end"].includes(this.placement) &&
                "ArrowDown" === e.key)) &&
            (r = Math.min(this.tabs.length - 1, r + 1)),
          this.tabs[r].focus({ preventScroll: !0 }),
          "auto" === this.activation &&
            this.setActiveTab(this.tabs[r], { scrollBehavior: "smooth" }),
          ["top", "bottom"].includes(this.placement) &&
            za(this.tabs[r], this.nav, "horizontal"),
          e.preventDefault();
      }
    }
  }
  handleScrollToStart() {
    this.nav.scroll({
      left: this.nav.scrollLeft - this.nav.clientWidth,
      behavior: "smooth",
    });
  }
  handleScrollToEnd() {
    this.nav.scroll({
      left: this.nav.scrollLeft + this.nav.clientWidth,
      behavior: "smooth",
    });
  }
  setActiveTab(e, t) {
    if (
      ((t = Object.assign({ emitEvents: !0, scrollBehavior: "auto" }, t)),
      e && e !== this.activeTab && !e.disabled)
    ) {
      const r = this.activeTab;
      (this.activeTab = e),
        this.tabs.map((e) => (e.active = e === this.activeTab)),
        this.panels.map((e) => (e.active = e.name === this.activeTab.panel)),
        this.syncIndicator(),
        ["top", "bottom"].includes(this.placement) &&
          za(this.activeTab, this.nav, "horizontal", t.scrollBehavior),
        t.emitEvents &&
          (r && qe(this, "outline-tab-hide", { detail: { name: r.panel } }),
          qe(this, "outline-tab-show", {
            detail: { name: this.activeTab.panel },
          }));
    }
  }
  setAriaLabels() {
    this.tabs.map((e) => {
      const t = this.panels.find((t) => t.name === e.panel);
      t &&
        (e.setAttribute("aria-controls", t.getAttribute("id")),
        t.setAttribute("aria-labelledby", e.getAttribute("id")));
    });
  }
  syncIndicator() {
    if (this.indicator) {
      if (!this.getActiveTab())
        return void (this.indicator.style.display = "none");
      (this.indicator.style.display = "block"), this.repositionIndicator();
    }
  }
  repositionIndicator() {
    const e = this.getActiveTab();
    if (!e) return;
    const t = e.clientWidth,
      r = e.clientHeight,
      n = ka(e, this.nav),
      i = n.top + this.nav.scrollTop,
      a = n.left + this.nav.scrollLeft;
    switch (this.placement) {
      case "top":
      case "bottom":
        (this.indicator.style.width = `${t}px`),
          (this.indicator.style.height = "auto"),
          (this.indicator.style.transform = `translateX(${a}px)`);
        break;
      case "start":
      case "end":
        (this.indicator.style.width = "auto"),
          (this.indicator.style.height = `${r}px`),
          (this.indicator.style.transform = `translateY(${i}px)`);
    }
  }
  preventIndicatorTransition() {
    if (!this.mobileController.isMobile) {
      const e = this.indicator.style.transition;
      (this.indicator.style.transition = "none"),
        requestAnimationFrame(() => {
          this.indicator.style.transition = e;
        });
    }
  }
  syncTabsAndPanels() {
    this.mobileController.isMobile ||
      ((this.tabs = this.getAllTabs()), (this.panels = this.getAllPanels())),
      this.syncIndicator();
  }
  render() {
    return V`${
      this.mobileController.isMobile
        ? V`<slot name="accordion-wrapper"></slot> `
        : V`<outline-container
            ><div
              part="base"
              class=${Ae({
                "tab-group": !0,
                "tab-group--top": "top" === this.placement,
                "tab-group--bottom": "bottom" === this.placement,
                "tab-group--start": "start" === this.placement,
                "tab-group--end": "end" === this.placement,
              })}
              @click=${this.handleClick}
              @keydown=${this.handleKeyDown}
            >
              <div class="tab-group__nav-container">
                <div part="nav" class="tab-group__nav">
                  <div part="tabs" class="tab-group__tabs" role="tablist">
                    <div
                      part="active-tab-indicator"
                      class="tab-group__indicator"
                    ></div>
                    <slot
                      name="nav"
                      @slotchange=${this.syncTabsAndPanels}
                    ></slot>
                  </div>
                </div>
              </div>
              <div part="body" class="tab-group__body">
                <slot @slotchange=${this.syncTabsAndPanels}></slot>
              </div></div
          ></outline-container>`
    }
    </outline-container>`;
  }
};
($a.styles = [_a]),
  s([he(".tab-group")], $a.prototype, "tabGroup", void 0),
  s([he(".tab-group__body")], $a.prototype, "body", void 0),
  s([he(".tab-group__nav")], $a.prototype, "nav", void 0),
  s([he(".tab-group__indicator")], $a.prototype, "indicator", void 0),
  s(
    [de({ type: String, reflect: !0, attribute: "placement" })],
    $a.prototype,
    "placement",
    void 0
  ),
  s([de()], $a.prototype, "activation", void 0),
  s([Fe("placement")], $a.prototype, "syncIndicator", null),
  ($a = s([le("outline-tab-group")], $a));
let Sa = 0,
  Aa = class extends xe {
    constructor() {
      super(...arguments),
        (this.componentId = "tab-panel-" + ++Sa),
        (this.name = ""),
        (this.active = !1);
    }
    connectedCallback() {
      super.connectedCallback(), (this.id = this.id || this.componentId);
    }
    render() {
      return (
        (this.style.display = this.active ? "block" : "none"),
        V`
      <div
        part="base"
        class="tab-panel"
        role="tabpanel"
        aria-selected=${this.active ? "true" : "false"}
        aria-hidden=${this.active ? "false" : "true"}
      >
        <slot></slot>
      </div>
    `
      );
    }
  };
s([de()], Aa.prototype, "name", void 0),
  s([de({ type: Boolean, reflect: !0 })], Aa.prototype, "active", void 0),
  (Aa = s([le("outline-tab-panel")], Aa));
export {
  n as ALL_COLORS,
  ra as ALL_HORIZONTAL_ALIGNMENT,
  na as ALL_ORIENTATION,
  ea as ALL_SIZES,
  Qi as ALL_SPACING_TOKENS,
  ia as ALL_TEXT_INPUTS,
  ta as ALL_VERTICAL_ALIGNMENT,
  Gn as BlogAndImprovingCard,
  ei as CourseCard,
  oi as DocumentCard,
  si as EventsCard,
  mi as FooterLogos,
  qt as HeadingLevels,
  Et as HeadingSizes,
  Ft as HeadingStyles,
  Un as IdbBreadcrumbs,
  Wn as IdbButton,
  Yn as IdbCardGrid,
  Jn as IdbContentCard,
  ri as IdbCtaBanner,
  bi as IdbFooter,
  yi as IdbForm,
  $i as IdbHeader,
  ai as IdbHeading,
  Pn as IdbIcon,
  Ti as IdbImageTag,
  qi as IdbInfoCards,
  ki as IdbLanguageSwitcher,
  _i as IdbPrimaryMenu,
  Hi as IdbPrimaryMenuDropdown,
  Vi as IdbSection,
  gi as IdbSocialIcons,
  Ri as IdbStatBar,
  Pi as IdbStyledText,
  Xi as IdbSwatch,
  Ji as IdbSwatchSet,
  Ki as IdbSwatchSets,
  pi as IdbUtilityMenu,
  Ai as ImageBannerCTA,
  Ci as ImageCard,
  Fi as LabelAndDataHeading,
  e as LinkedBlockController,
  fi as Logo,
  r as MobileController,
  we as OutlineAccordion,
  tt as OutlineAccordionPanel,
  nt as OutlineAdminLinks,
  lt as OutlineAlert,
  pt as OutlineBreadcrumbs,
  gt as OutlineButton,
  mt as OutlineCard,
  yt as OutlineCodeBlock,
  qn as OutlineColumn,
  ct as OutlineContainer,
  ft as OutlineContentCard,
  xe as OutlineElement,
  Ct as OutlineFeatherIcon,
  Bt as OutlineForm,
  Zt as OutlineGrid,
  Ht as OutlineHeading,
  Dt as OutlineImage,
  ln as OutlineImageSlider,
  un as OutlineLink,
  fn as OutlineList,
  _n as OutlineModal,
  Sn as OutlineSplideSlider,
  _t as OutlineSplitButton,
  Mn as OutlineStyledText,
  Bn as OutlineSwatch,
  Fn as OutlineSwatchSet,
  Hn as OutlineVideoVimeo,
  Dn as OutlineVideoYoutube,
  o as ScreenSizeController,
  l as SlotController,
  Oi as SpecialIconCard,
  at as alertSizes,
  ot as alertStatusTypes,
  sa as argTypeColSpan,
  ua as argTypeColor,
  ca as argTypeGapSize,
  va as argTypeHidden,
  ha as argTypeHorizontalAlign,
  cn as argTypeHref,
  ba as argTypeImageUrl,
  la as argTypeOrientation,
  hn as argTypeRel,
  da as argTypeRowSpan,
  ga as argTypeSize,
  oa as argTypeSlotContent,
  ma as argTypeSpacing,
  pn as argTypeTarget,
  pa as argTypeVerticalAlign,
  Di as availableBackgrounds,
  Nn as availableColors,
  Mt as availableIcons,
  xn as columnsCount,
  yn as dividerColors,
  ya as extractPx,
  aa as format,
  Ne as getIconLibrary,
  At as icons,
  vn as listOrientations,
  bn as listTypes,
  kn as modalSizes,
  Pe as registerIconLibrary,
  Je as requestIcon,
  Ye as requestInclude,
  a as screenSizeMap,
  En as swatchSets,
  We as unregisterIconLibrary,
  Ie as unwatchIcon,
  Re as watchIcon,
};
//# sourceMappingURL=outline.js.map
