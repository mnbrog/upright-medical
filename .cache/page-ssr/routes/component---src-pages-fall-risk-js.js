"use strict";
exports.id = "component---src-pages-fall-risk-js";
exports.ids = ["component---src-pages-fall-risk-js"];
exports.modules = {

/***/ "./src/pages/fall-risk.js?export=default":
/*!***********************************************!*\
  !*** ./src/pages/fall-risk.js?export=default ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
// File: src/pages/fall-risk.js




/* ----------------------------------------------------------------------------------------------------------------- */
/* 1) GLOBAL STYLES                                                                                                  */
/* ----------------------------------------------------------------------------------------------------------------- */
const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}html{scroll-behavior:smooth;scroll-snap-type:y proximity;height:100%;}body{font-family:'Inter',sans-serif;background:#F7F9FA;color:#0A2640;line-height:1.5;min-height:100%;margin:0;}a{text-decoration:none;color:inherit;}ul{list-style:none;}::-webkit-scrollbar{width:8px;}::-webkit-scrollbar-thumb{background-color:#3FD0C9;border-radius:4px;}"]);

/* ----------------------------------------------------------------------------------------------------------------- */
/* 2) Color Palette                                                                                                  */
/* ----------------------------------------------------------------------------------------------------------------- */
const COLORS = {
  darkBlue: "#0A2640",
  teal: "#3FD0C9",
  lightGray: "#F7F9FA",
  cardBg: "#FFFFFF",
  neutralGray: "#6B7280"
};

/* ----------------------------------------------------------------------------------------------------------------- */
/* 3) LAYOUT COMPONENTS                                                                                              */
/* ----------------------------------------------------------------------------------------------------------------- */

/* 3.1: Sticky navigation bar with logo and either desktop links or mobile hamburger */
const NavBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "fall-risk__NavBar"
})(["position:sticky;top:0;width:100%;background:", ";box-shadow:0 2px 6px rgba(0,0,0,0.1);z-index:200;display:flex;flex-direction:column;align-items:center;padding-bottom:0.5rem;"], COLORS.cardBg);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "fall-risk__LogoWrapper"
})(["margin-top:1rem;margin-bottom:0.5rem;a img{display:block;height:100px;width:auto;}@media (min-width:600px){a img{height:140px;}}"]);

/* Desktop nav links wrap when needed */
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "fall-risk__NavLinks"
})(["display:flex;flex-wrap:wrap;justify-content:center;gap:0.5rem;width:100%;max-width:800px;margin-bottom:0.5rem;li{list-style:none;}a{display:block;padding:0.5rem 0.75rem;font-size:0.9rem;font-weight:500;color:", ";transition:color 0.2s ease-in-out,font-weight 0.2s ease-in-out;&.active{color:", ";font-weight:600;}&:hover{color:", ";}}@media (max-width:768px){display:none;}@media (max-width:400px){a{font-size:0.8rem;padding:0.4rem 0.6rem;}}"], COLORS.darkBlue, COLORS.teal, COLORS.teal);

/* Hamburger icon (mobile only) */
const Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "fall-risk__Hamburger"
})(["display:none;background:none;border:none;font-size:2.25rem;cursor:pointer;color:", ";margin:0.5rem 0;&:hover{color:", ";}@media (max-width:768px){display:block;}"], COLORS.darkBlue, COLORS.teal);

/* Overlay animations */
const fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{opacity:0;}to{opacity:1;}"]);
const slideDown = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{transform:translateY(-20px);opacity:0;}to{transform:translateY(0);opacity:1;}"]);

/* Mobile full-screen menu */
const MobileMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "fall-risk__MobileMenu"
})(["position:fixed;top:0;left:0;width:100%;height:100%;background:", ";z-index:300;display:flex;flex-direction:column;align-items:center;padding-top:2rem;animation:", " 0.3s ease-in-out;.close-btn{position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:2rem;color:", ";cursor:pointer;&:hover{color:", ";}}a{font-size:1.25rem;font-weight:500;color:", ";margin:0.75rem 0;opacity:0;animation:", " 0.35s ease-in-out forwards;}a:nth-child(2){animation-delay:0.25s;}a:nth-child(3){animation-delay:0.40s;}a:nth-child(4){animation-delay:0.55s;}a:nth-child(5){animation-delay:0.70s;}a:nth-child(6){animation-delay:0.85s;}a:nth-child(7){animation-delay:1.00s;}a:nth-child(8){animation-delay:1.15s;}a:nth-child(9){animation-delay:1.30s;}a:nth-child(10){animation-delay:1.45s;}a:nth-child(11){animation-delay:1.60s;}"], COLORS.cardBg, fadeIn, COLORS.darkBlue, COLORS.teal, COLORS.darkBlue, slideDown);

/* 3.2: Section container (common) */
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "fall-risk__Section"
})(["scroll-snap-align:start;scroll-margin-top:180px;max-width:960px;margin:4rem auto 8rem auto;padding:6rem 1rem 2rem 1rem;&:first-of-type{margin-top:4rem;}@media (max-width:768px){padding:5rem 1rem 2rem 1rem;margin:3rem auto 8rem auto;}"]);

/* 3.3: InfoBox wrapper */
const InfoBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "fall-risk__InfoBox"
})(["background:", ";border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.05);padding:2rem;margin-top:1rem;@media (max-width:768px){padding:1.5rem;}"], COLORS.cardBg);

/* 3.4: Section Titles */
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "fall-risk__SectionTitle"
})(["font-size:2rem;color:", ";margin-bottom:1rem;text-align:center;@media (max-width:768px){font-size:1.75rem;}"], COLORS.darkBlue);

/* 3.5: Paragraph text */
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "fall-risk__Paragraph"
})(["color:", ";font-size:1rem;line-height:1.6;margin-bottom:1rem;"], COLORS.darkBlue);

/* 3.6: Centered intro text */
const IntroText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "fall-risk__IntroText"
})(["color:", ";font-size:1.125rem;text-align:center;margin-bottom:2rem;line-height:1.5;"], COLORS.darkBlue);

/* 3.7: Bullet list */
const BulletList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "fall-risk__BulletList"
})(["margin-left:1.25rem;margin-bottom:1.5rem;li{margin-bottom:0.5rem;line-height:1.5;position:relative;padding-left:1.25rem;&::before{content:\"\u2022\";position:absolute;left:0;color:", ";}}"], COLORS.teal);

/* 3.7b: Step-by-step (ordered list) */
const StepList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ol.withConfig({
  displayName: "fall-risk__StepList"
})(["margin-left:1.25rem;margin-bottom:1.5rem;li{margin-bottom:0.5rem;line-height:1.5;}"]);

/* 3.7c: Subsection titles */
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "fall-risk__SubTitle"
})(["font-size:1.5rem;color:", ";margin:1.5rem 0 1rem;text-align:center;"], COLORS.darkBlue);

/* 3.8: Hero Section */
const HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "fall-risk__HeroWrapper"
})(["position:relative;height:70vh;min-height:450px;overflow:hidden;display:flex;align-items:center;justify-content:center;color:#ffffff;text-align:center;scroll-snap-align:start;scroll-margin-top:180px;@media (max-width:768px){height:60vh;}"]);

/* 3.9: Video background */
const BackgroundVideo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].video.withConfig({
  displayName: "fall-risk__BackgroundVideo"
})(["position:absolute;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%,-50%);z-index:1;object-fit:cover;filter:brightness(0.6);"]);

/* 3.10: Hero text container */
const HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "fall-risk__HeroContent"
})(["position:relative;z-index:2;max-width:800px;margin:0 1rem;display:flex;flex-direction:column;align-items:center;"]);
const HeroHeadline = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h1.withConfig({
  displayName: "fall-risk__HeroHeadline"
})(["font-size:clamp(2.5rem,6vw,3.5rem);font-weight:700;line-height:1.2;margin-bottom:1.5rem;color:#ffffff;"]);
const HeroSubhead = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "fall-risk__HeroSubhead"
})(["font-size:clamp(1.125rem,3vw,1.5rem);margin-bottom:2.5rem;color:#ffffff;"]);
const HeroButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "fall-risk__HeroButton"
})(["background:", ";color:#ffffff;padding:0.75rem 1.75rem;border-radius:4px;font-size:1rem;font-weight:600;transition:background 0.2s ease-in-out;&:hover{background:#64FFDA;}"], COLORS.teal);

/* ----------------------------------------------------------------------------------------------------------------- */
/* 4) FALL RISK PAGE COMPONENT                                                                                       */
/* ----------------------------------------------------------------------------------------------------------------- */
const FallRiskPage = () => {
  // track which section is currently visible
  const {
    0: activeSection,
    1: setActiveSection
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("hero");
  // track whether mobile menu is open
  const {
    0: menuOpen,
    1: setMenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const sectionIds = ["hero", "home", "fall-overview", "fall-how", "balance-key", "balance-video", "home-safety", "telehealth-features", "telehealth-setup", "p4p-overview", "p4p-how", "key-tests", "eligible-conditions", "practice-benefits", "resources-guides", "resources-faq", "resources-infographics", "resources-case-studies", "about-mission", "about-team", "about-affiliations", "blog-section", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -60% 0px",
      threshold: 0
    };
    const observerCallback = entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu and scroll to section
  const handleMobileClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      window.location.hash = `#${targetId}`;
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GlobalStyles, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavBar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#hero",
    onClick: () => setMenuOpen(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/Upright Medical Solutions Logo.png",
    alt: "Upright Medical Solutions"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavLinks, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#home",
    className: activeSection === "home" ? "active" : ""
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#fall-overview",
    className: activeSection === "fall-overview" ? "active" : ""
  }, "Fall Risk")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#balance-key",
    className: activeSection === "balance-key" ? "active" : ""
  }, "Balance Training")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#home-safety",
    className: activeSection === "home-safety" ? "active" : ""
  }, "Home Safety")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#telehealth-features",
    className: activeSection === "telehealth-features" ? "active" : ""
  }, "Telehealth")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#p4p-overview",
    className: activeSection === "p4p-overview" ? "active" : ""
  }, "Pulse4Pulse")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#resources-guides",
    className: activeSection === "resources-guides" ? "active" : ""
  }, "Resources")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#about-mission",
    className: activeSection === "about-mission" ? "active" : ""
  }, "About")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#blog-section",
    className: activeSection === "blog-section" ? "active" : ""
  }, "Blog")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#contact",
    className: activeSection === "contact" ? "active" : ""
  }, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Hamburger, {
    onClick: () => setMenuOpen(prev => !prev)
  }, menuOpen ? "✕" : "☰"), menuOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "close-btn",
    onClick: () => setMenuOpen(false),
    "aria-label": "Close Menu"
  }, "\u2715"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#home",
    onClick: e => handleMobileClick(e, "home"),
    className: activeSection === "home" ? "active" : ""
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#fall-overview",
    onClick: e => handleMobileClick(e, "fall-overview"),
    className: activeSection === "fall-overview" ? "active" : ""
  }, "Fall Risk"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#balance-key",
    onClick: e => handleMobileClick(e, "balance-key"),
    className: activeSection === "balance-key" ? "active" : ""
  }, "Balance Training"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#home-safety",
    onClick: e => handleMobileClick(e, "home-safety"),
    className: activeSection === "home-safety" ? "active" : ""
  }, "Home Safety"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#telehealth-features",
    onClick: e => handleMobileClick(e, "telehealth-features"),
    className: activeSection === "telehealth-features" ? "active" : ""
  }, "Telehealth"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#p4p-overview",
    onClick: e => handleMobileClick(e, "p4p-overview"),
    className: activeSection === "p4p-overview" ? "active" : ""
  }, "Pulse4Pulse"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#resources-guides",
    onClick: e => handleMobileClick(e, "resources-guides"),
    className: activeSection === "resources-guides" ? "active" : ""
  }, "Resources"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#about-mission",
    onClick: e => handleMobileClick(e, "about-mission"),
    className: activeSection === "about-mission" ? "active" : ""
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#blog-section",
    onClick: e => handleMobileClick(e, "blog-section"),
    className: activeSection === "blog-section" ? "active" : ""
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#contact",
    onClick: e => handleMobileClick(e, "contact"),
    className: activeSection === "contact" ? "active" : ""
  }, "Contact"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroWrapper, {
    id: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BackgroundVideo, {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    poster: "/images/clinic-background-fallback.jpg",
    src: "/videos/clinic-background.mp4",
    type: "video/mp4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroHeadline, null, "Predict Risk. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Prevent Falls."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroSubhead, null, "Innovative Health & Safety Solutions for your practice and patients."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroButton, {
    href: "#home"
  }, "Learn More"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Innovative Health & Safety Solutions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "We help clinicians implement cutting\u2010edge screening and training tools to reduce falls, improve balance, ensure home safety, offer telehealth, and deliver turnkey cardiovascular assessments at $0 cost."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Fall Risk Assessment"), " \u2013 Predict a patient\u2019s 12\u2010month fall probability with minimal clinic time."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Balance Training Program"), " \u2013 Personalized plans, real\u2010time feedback, and progress tracking."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Home Safety Toolkit"), " \u2013 Downloadable PDF checklist + interactive online version."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Telehealth Integration"), " \u2013 Remote assessment & virtual follow\u2010up."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Pulse4Pulse"), " \u2013 Turnkey cardiovascular wellness service at $0 cost.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroButton, {
    href: "#contact",
    style: {
      marginTop: "1rem"
    }
  }, "Get a Demo"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "fall-overview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Fall Risk Assessment \u2015 Overview & Benefits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Predict each patient\u2019s 12\u2010month probability of falling using a data\u2010driven, automated model."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Automated Math:"), " Combines multiple performance\u2010test results into a single risk score\u2014no manual calculation required."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Built on 2,300+ Studies:"), " Extensive clinical research ensures accuracy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Quick to Administer:"), " Only 10\u201325 minutes in any clinical setting."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Evidence\u2010Based Algorithm:"), " Outperforms traditional screening methods.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "",
    alt: "Fall Risk Assessment Device",
    style: {
      width: "100%",
      height: "200px",
      background: "#e0e0e0"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontStyle: "italic",
      marginTop: "0.5rem"
    }
  }, "Feature image placeholder: device or assessment in action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "fall-how"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Fall Risk Assessment \u2015 How It Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "A simple 3\u2010step process to screen and intervene."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StepList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Patient Screening:"), " Self\u2010answer questionnaires in waiting room or at home."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Performance Testing:"), " Administer 3\u20135 tests:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Five Time Sit to Stand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Self Paced Walking Test"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Single Leg Stance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Timed Up and Go"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Review Report & Care Plan:"), " Provider reviews auto\u2010generated FRA report, provides educational materials, and schedules follow\u2010up.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "balance-key"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Balance Training Program \u2015 Key Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Personalized, engaging balance exercises with real\u2010time feedback and tracking."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Personalized balance exercise plans"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Real\u2010time performance feedback"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Progress tracking & analytics")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "balance-video"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Balance Training Program \u2015 Sample Exercises & Video Preview"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("video", {
    controls: true,
    width: "100%",
    height: "200",
    style: {
      background: "#000"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontStyle: "italic",
      marginTop: "0.5rem"
    }
  }, "Video preview placeholder for balance training exercises"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "home-safety"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Home Safety Toolkit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Ensure a safer home environment with our comprehensive safety checklist."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    className: "button",
    style: {
      display: "inline-block",
      padding: "0.75rem 1.25rem",
      background: COLORS.teal,
      color: "#fff",
      borderRadius: "4px",
      fontWeight: 600,
      marginBottom: "1rem"
    }
  }, "Download Home Safety Checklist (PDF)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontStyle: "italic"
    }
  }, "Placeholder: Interactive home safety checklist UI can be inserted here"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "telehealth-features"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Telehealth Integration \u2015 Platform Features"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, {
    style: {
      background: "#F0F9FF"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Our telehealth platform seamlessly connects with your practice, enabling remote assessments and consultations. Easy to set up and integrate:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Integrate platform with EHR & scheduling system"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Train staff on conducting virtual assessments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Begin remote monitoring & follow\u2010up via secure video/data sharing")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "telehealth-setup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Telehealth Integration \u2015 Technical Requirements & Setup Guide"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Requirements:"), " Standard webcam, stable internet, basic tablet/laptop for patient self\u2010screening."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Setup:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Install telehealth app/plugin on clinic workstations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Configure HIPAA\u2010compliant video link."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Ensure data sync with EHR for automated documentation."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "p4p-overview"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Pulse4Pulse Overview & Mission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Turnkey cardiovascular wellness assessment service at $0 cost to your practice."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "FDA-Cleared Device:"), " Portable, in-office setup. No referrals needed."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "60%+ of Adult Patients Qualify:"), " Detect microvascular disease early."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Real-Time Results:"), " Three simultaneous tests in 20 minutes\u2014instant reporting."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "$0 Cost to Practice:"), " We supply device, certified staff, and billing support.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "p4p-how"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Pulse4Pulse \u2015 How It Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StepList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Intake Qualification:"), " Patient completes a form to identify clinical risk factors."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "On-Site Testing:"), " A P4P medical assistant visits your practice and performs the assessment."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Instant Results:"), " Technician provides real-time results & preliminary recommendations."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Billing & Support:"), " Pulse4Pulse handles billing and provides an account manager.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "key-tests"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Pulse4Pulse \u2015 Key Tests & Benefits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "ANS Testing:"), " Measures autonomic function (heart rate variability, adaptability)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "ABI Testing:"), " Screens for PAD by comparing limb blood pressures."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Sudomotor Testing:"), " Detects microvascular neuropathy via sweat\u2010gland stimulation.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "All three tests complete within 20 minutes, non-invasive, with an easy-to-interpret summary report."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "eligible-conditions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Pulse4Pulse \u2015 Eligible Conditions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Any one condition below makes a patient eligible for Pulse4Pulse testing:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Diabetes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "High Blood Pressure"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "High Cholesterol"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Sleep Apnea"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Erectile Dysfunction / Sexual Dysfunction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Chronic Kidney Disease"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Heart Disease"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Current or Past Nicotine Use"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Numbness or Coldness in Hands/Feet"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Leg Pain When Walking (Claudication)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "practice-benefits"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Pulse4Pulse \u2015 Practice Benefits"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "New Revenue Stream:"), " Potential for ~$150k/physician annually; 60%+ of adults qualify."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "No Capital Expenditure:"), " We provide device, staff, and billing support."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "5 Billable Diagnostic Codes:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Ankle Brachial Index (CPT 93923)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Autonomic Function (CPT 95921)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Sudomotor (CPT 95923)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Electrocardiogram (CPT 93040)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Pulse Oximetry (CPT 94761)"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Enhanced Patient Care:"), " Early disease detection leads to timely intervention.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "resources-guides"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Resources \u2015 User Guides"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    style: {
      color: COLORS.darkBlue,
      textDecoration: "underline"
    }
  }, "Fall Prevention Guide (PDF)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    style: {
      color: COLORS.darkBlue,
      textDecoration: "underline"
    }
  }, "Balance Training Quick-Start (PDF)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    style: {
      color: COLORS.darkBlue,
      textDecoration: "underline"
    }
  }, "Telehealth Setup Manual")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    style: {
      color: COLORS.darkBlue,
      textDecoration: "underline"
    }
  }, "Pulse4Pulse Device User Manual"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "resources-faq"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Resources \u2015 Troubleshooting FAQs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Fall Risk Assessment:"), " \u201CDevice won\u2019t calibrate\u201D | \u201CIncomplete test data\u201D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Balance Training:"), " \u201CVideo preview not loading\u201D | \u201CSensor pairing issues\u201D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Home Safety Toolkit:"), " \u201CPDF not downloading\u201D | \u201CInteractive section not loading\u201D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Telehealth:"), " \u201CVideo connection drops\u201D | \u201CEHR integration issue\u201D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Pulse4Pulse:"), " \u201CBilling code errors\u201D | \u201CTechnician scheduling delays\u201D")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "resources-infographics"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Resources \u2015 Infographics"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "200px",
      height: "150px",
      background: "#e0e0e0"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontStyle: "italic"
    }
  }, "Placeholder: \u201CNeed to Screen\u201D Infographic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "200px",
      height: "150px",
      background: "#e0e0e0"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontStyle: "italic"
    }
  }, "Placeholder: \u201CSafe Home Layout\u201D Flowchart")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "resources-case-studies"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Resources \u2015 Case Studies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "1rem",
      width: "280px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontStyle: "italic"
    }
  }, "\u201CSince implementing these programs, our clinic reduced patient falls by 30% in one year.\u201D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: "right",
      fontSize: "0.9rem",
      color: "#555"
    }
  }, "\u2013 Dr. Alice Smith, Geriatric Specialist (Senior Care Facility)")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid #ddd",
      borderRadius: "4px",
      padding: "1rem",
      width: "280px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontStyle: "italic"
    }
  }, "\u201CPulse4Pulse reduced downstream cardiovascular costs by 20% at our rehab center.\u201D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      textAlign: "right",
      fontSize: "0.9rem",
      color: "#555"
    }
  }, "\u2013 Dr. John Doe, Cardiologist (Rehab Center)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "about-mission"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "About Us \u2015 Mission & Vision"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "We are committed to advancing preventive healthcare through innovative solutions that improve patient safety and wellness. Our team brings decades of experience in medical technology, rehabilitation, and patient care."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "about-team"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "About Us \u2015 Leadership Team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "2rem",
      justifyContent: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: "center",
      width: "150px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "100px",
      height: "100px",
      background: "#ddd",
      borderRadius: "50%",
      margin: "0 auto 0.5rem"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: 600
    }
  }, "Jane Doe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#555"
    }
  }, "Founder & CEO")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: "center",
      width: "150px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "100px",
      height: "100px",
      background: "#ddd",
      borderRadius: "50%",
      margin: "0 auto 0.5rem"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: 600
    }
  }, "Richard Roe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#555"
    }
  }, "Chief Medical Officer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      textAlign: "center",
      width: "150px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      width: "100px",
      height: "100px",
      background: "#ddd",
      borderRadius: "50%",
      margin: "0 auto 0.5rem"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontWeight: 600
    }
  }, "Emily Smith"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      fontSize: "0.9rem",
      color: "#555"
    }
  }, "Director of Therapy Programs")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "about-affiliations"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "About Us \u2015 Partnerships & Affiliations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "National Falls Prevention Alliance"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "American Heart Association (Partner)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Telehealth Innovators Coalition"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "University of Alabama Health Research (UA HR)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Kappa Alpha Order (Affiliated)")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "blog-section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    style: {
      color: COLORS.darkBlue,
      textDecoration: "underline"
    }
  }, "Top 5 Strategies for Fall Prevention in Hospitals")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    style: {
      color: COLORS.darkBlue,
      textDecoration: "underline"
    }
  }, "Senior Wellness Tips: Balance Exercises & Fall Prevention")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    style: {
      color: COLORS.darkBlue,
      textDecoration: "underline"
    }
  }, "Pulse4Pulse Insights: Cardio Screening Best Practices")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#",
    style: {
      color: COLORS.darkBlue,
      textDecoration: "underline"
    }
  }, "Our Latest Product Updates & News"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "contact"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Interested in learning more or scheduling a demo? Fill out the form below:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "contact-form",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      maxWidth: "400px",
      margin: "0 auto"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Name",
    required: true,
    style: {
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "4px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "email",
    placeholder: "Email",
    required: true,
    style: {
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "4px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("textarea", {
    placeholder: "Your Message",
    rows: 4,
    style: {
      padding: "0.5rem",
      border: "1px solid #ccc",
      borderRadius: "4px"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "submit",
    style: {
      alignSelf: "flex-start",
      padding: "0.5rem 1rem",
      background: COLORS.teal,
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: 600
    }
  }, "Submit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: () => window.location.hash = "#home",
    style: {
      marginTop: "1rem",
      padding: "0.75rem 1.25rem",
      background: COLORS.teal,
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      fontWeight: 600,
      cursor: "pointer"
    }
  }, "Request a Demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "office-info",
    style: {
      marginTop: "1rem",
      fontSize: "0.9rem",
      color: "#555",
      textAlign: "center"
    }
  }, "Office: 123 Health St, Wellness City, ST 00000 | Phone: (123) 456-7890 | Email: info@uprightmedical.com"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallRiskPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-fall-risk-js.js.map