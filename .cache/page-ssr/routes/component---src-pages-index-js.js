"use strict";
exports.id = "component---src-pages-index-js";
exports.ids = ["component---src-pages-index-js"];
exports.modules = {

/***/ "./src/pages/fall-risk.js":
/*!********************************!*\
  !*** ./src/pages/fall-risk.js ***!
  \********************************/
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
/* 1) GLOBAL STYLES                                                                                                   */
/* ----------------------------------------------------------------------------------------------------------------- */
const GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(["*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}html{scroll-behavior:smooth;scroll-snap-type:y proximity;height:100%;}body{font-family:'Inter',sans-serif;background:#F7F9FA;color:#0A2640;line-height:1.5;min-height:100%;margin:0;}a{text-decoration:none;color:inherit;}ul{list-style:none;}::-webkit-scrollbar{width:8px;}::-webkit-scrollbar-thumb{background-color:#3FD0C9;border-radius:4px;}"]);

/* ----------------------------------------------------------------------------------------------------------------- */
/* 2) Color Palette                                                                                                   */
/* ----------------------------------------------------------------------------------------------------------------- */
const COLORS = {
  darkBlue: "#0A2640",
  teal: "#3FD0C9",
  lightGray: "#F7F9FA",
  cardBg: "#FFFFFF",
  neutralGray: "#6B7280"
};

/* ----------------------------------------------------------------------------------------------------------------- */
/* 3) LAYOUT COMPONENTS                                                                                               */
/* ----------------------------------------------------------------------------------------------------------------- */

/* 3.1: Sticky navigation bar with logo and either four tabs (desktop) or hamburger (mobile) */
const NavBar = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].nav.withConfig({
  displayName: "fall-risk__NavBar"
})(["position:sticky;top:0;width:100%;background:", ";box-shadow:0 2px 6px rgba(0,0,0,0.1);z-index:200;display:flex;flex-direction:column;align-items:center;padding-bottom:0.5rem;"], COLORS.cardBg);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "fall-risk__LogoWrapper"
})(["margin-top:1rem;margin-bottom:0.5rem;a img{display:block;height:100px;width:auto;}@media (min-width:600px){a img{height:140px;}}"]);

/* 3.1.1: Desktop version: NavLinks as a 4-column grid, centered under logo */
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "fall-risk__NavLinks"
})(["display:grid;grid-template-columns:repeat(4,1fr);width:100%;max-width:600px;gap:0;margin-bottom:0.5rem;li{list-style:none;text-align:center;}a{display:block;padding:0.75rem 0;font-size:1rem;font-weight:500;color:", ";transition:color 0.2s ease-in-out,font-weight 0.2s ease-in-out;&.active{color:", ";font-weight:600;}&:hover{color:", ";}}@media (max-width:768px){display:none;}@media (max-width:400px){a{font-size:0.85rem;padding:0.5rem 0;}}"], COLORS.darkBlue, COLORS.teal, COLORS.teal);

/* 3.1.2: Hamburger icon (mobile only) */
const Hamburger = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "fall-risk__Hamburger"
})(["display:none;background:none;border:none;font-size:2rem;cursor:pointer;color:", ";margin-bottom:0.5rem;&:hover{color:", ";}@media (max-width:768px){display:block;}"], COLORS.darkBlue, COLORS.teal);

/* 3.1.3: Overlay menu animation */
const fadeIn = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{opacity:0;}to{opacity:1;}"]);
const slideDown = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.keyframes)(["from{transform:translateY(-20px);opacity:0;}to{transform:translateY(0);opacity:1;}"]);

/* 3.1.4: Mobile overlay menu (full screen) */
const MobileMenu = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "fall-risk__MobileMenu"
})(["position:fixed;top:0;left:0;width:100%;height:100%;background:", ";z-index:300;display:flex;flex-direction:column;align-items:center;justify-content:center;animation:", " 0.3s ease-in-out;a{font-size:1.5rem;font-weight:500;color:", ";margin:1rem 0;opacity:0;animation:", " 0.4s ease-in-out forwards;}a:nth-child(1){animation-delay:0.2s;}a:nth-child(2){animation-delay:0.3s;}a:nth-child(3){animation-delay:0.4s;}a:nth-child(4){animation-delay:0.5s;}a:nth-child(5){animation-delay:0.6s;}"], COLORS.cardBg, fadeIn, COLORS.darkBlue, slideDown);

/* 3.2: Section container with top padding, bottom margin, and scroll-snap alignment */
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "fall-risk__Section"
})(["scroll-snap-align:start;scroll-margin-top:180px;max-width:960px;margin:4rem auto 8rem auto;padding:6rem 1rem 2rem 1rem;&:first-of-type{margin-top:4rem;}@media (max-width:768px){padding:5rem 1rem 2rem 1rem;margin:3rem auto 8rem auto;}"]);

/* 3.3: “InfoBox” to visually separate each Section’s content */
const InfoBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "fall-risk__InfoBox"
})(["background:", ";border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.05);padding:2rem;margin-top:1rem;@media (max-width:768px){padding:1.5rem;}"], COLORS.cardBg);

/* 3.4: Section Title (H2) */
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "fall-risk__SectionTitle"
})(["font-size:2rem;color:", ";margin-bottom:1rem;text-align:center;@media (max-width:768px){font-size:1.75rem;}"], COLORS.darkBlue);

/* 3.5: Paragraph / Body Text */
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "fall-risk__Paragraph"
})(["color:", ";font-size:1rem;line-height:1.6;margin-bottom:1rem;"], COLORS.darkBlue);

/* 3.6: Larger intro text (centered) */
const IntroText = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "fall-risk__IntroText"
})(["color:", ";font-size:1.125rem;text-align:center;margin-bottom:2rem;line-height:1.5;"], COLORS.darkBlue);

/* 3.7: Bullet List styling */
const BulletList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ul.withConfig({
  displayName: "fall-risk__BulletList"
})(["margin-left:1.25rem;margin-bottom:1.5rem;li{margin-bottom:0.5rem;line-height:1.5;position:relative;padding-left:1.25rem;&::before{content:\"\u2022\";position:absolute;left:0;color:", ";}}"], COLORS.teal);

/* 3.7b: Ordered list styling for step-by-step instructions */
const StepList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].ol.withConfig({
  displayName: "fall-risk__StepList"
})(["margin-left:1.25rem;margin-bottom:1.5rem;li{margin-bottom:0.5rem;line-height:1.5;}"]);

/* 3.7c: Sub-heading used within sections */
const SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "fall-risk__SubTitle"
})(["font-size:1.5rem;color:", ";margin:1.5rem 0 1rem;text-align:center;"], COLORS.darkBlue);

/* 3.8: Hero Section (with video background) */
const HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section.withConfig({
  displayName: "fall-risk__HeroWrapper"
})(["position:relative;height:70vh;min-height:450px;overflow:hidden;display:flex;align-items:center;justify-content:center;color:#ffffff;text-align:center;scroll-snap-align:start;scroll-margin-top:180px;@media (max-width:768px){height:60vh;}"]);

/* 3.9: BackgroundVideo */
const BackgroundVideo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].video.withConfig({
  displayName: "fall-risk__BackgroundVideo"
})(["position:absolute;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%,-50%);z-index:1;object-fit:cover;filter:brightness(0.6);"]);

/* 3.10: Hero Content (over the video) */
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
})(["background:", ";color:#ffffff;padding:0.75rem 1.75rem;border-radius:4px;font-size:1rem;font-weight:600;transition:background 0.2s ease-in-out;text-decoration:none;&:hover{background:#64FFDA;}"], COLORS.teal);

/* ----------------------------------------------------------------------------------------------------------------- */
/* 4) FALL RISK PAGE COMPONENT                                                                                          */
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
    const sectionIds = ["hero", "need-screen", "what-is-fra", "pboms", "workflow"];
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
    onClick: () => {
      setMenuOpen(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/Upright Medical Solutions Logo.png",
    alt: "Upright Medical Solutions"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavLinks, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#need-screen",
    className: activeSection === "need-screen" ? "active" : ""
  }, "Need to Screen")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#what-is-fra",
    className: activeSection === "what-is-fra" ? "active" : ""
  }, "What Is FRA?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#pboms",
    className: activeSection === "pboms" ? "active" : ""
  }, "PBOMs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#workflow",
    className: activeSection === "workflow" ? "active" : ""
  }, "Workflow"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Hamburger, {
    onClick: () => setMenuOpen(prev => !prev)
  }, menuOpen ? "✕" : "☰"), menuOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileMenu, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#need-screen",
    onClick: e => handleMobileClick(e, "need-screen"),
    className: activeSection === "need-screen" ? "active" : ""
  }, "Need to Screen"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#what-is-fra",
    onClick: e => handleMobileClick(e, "what-is-fra"),
    className: activeSection === "what-is-fra" ? "active" : ""
  }, "What Is FRA?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#pboms",
    onClick: e => handleMobileClick(e, "pboms"),
    className: activeSection === "pboms" ? "active" : ""
  }, "PBOMs"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#workflow",
    onClick: e => handleMobileClick(e, "workflow"),
    className: activeSection === "workflow" ? "active" : ""
  }, "Workflow"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroWrapper, {
    id: "hero"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BackgroundVideo, {
    autoPlay: true,
    loop: true,
    muted: true,
    playsInline: true,
    poster: "/images/clinic-background-fallback.jpg",
    src: "/videos/clinic-background.mp4",
    type: "video/mp4"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroHeadline, null, "Predict Risk. ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Prevent Falls."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroSubhead, null, "Solutions to rising insurance costs and health-related employee productivity problems."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroButton, {
    href: "#need-screen"
  }, "Learn More"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "need-screen"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "The Need to Screen for Falls"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "For older adults, falls are serious\u2014and costly."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "The CDC STEADI initiative tells healthcare providers to \u201CScreen all patients age 65+ for fall risk.\u201D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Based on American and British Geriatrics Societies\u2019 clinical practice guidelines."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Medicare MIPS Measure #318 calls for \u201CScreening for Future Fall Risk\u201D for all patients age 65+."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Also covers MIPS #154 and #155.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Unlock the ability to predict and prevent falls"), " using our validated Fall Risk Assessment (FRA) technology. Clinicians can quickly identify critical areas of fall risk without lengthy manual evaluation."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "what-is-fra"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "What Is the Fall Risk Assessment (FRA)?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "A data-driven, automated assessment that calculates each individual\u2019s 12-month probability of falling."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Automated Math:"), " Combines multiple test results into a single risk score\u2014no manual calculation required."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "2,300+ Studies:"), " Built on extensive clinical research to ensure accuracy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "10\u201325 Minutes:"), " Simple to administer in any clinic setting, with minimal training."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Evidence-Based:"), " Rooted in peer-reviewed algorithms that outperform traditional screening methods.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubTitle, null, "How It Works"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StepList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Patient Screening:"), " Patients self-answer questionnaires in the waiting room or at home."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Performance Testing:"), " A medical assistant administers 3\u20135 performance tests (Five Time Sit to Stand, Self Paced Walking Test, Single Leg Stance, Timed Up and Go)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Review Report & Care Plan:"), " Doctor reviews auto-generated FRA report and develops care plan, providing educational materials.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Five Time Sit to Stand:"), " Measures lower-limb strength and balance."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Self Paced Walking Test:"), " Assesses gait speed and stability."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Single Leg Stance:"), " Tests static balance on one limb."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Timed Up and Go:"), " Evaluates dynamic balance and mobility.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "pboms"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Performance-Based Outcome Measures (PBOMs)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "These functional tests are the heart of any accurate fall-risk model."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Lusardi et al (2017):"), " PBOMs are the most powerful predictors of future falls."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Combination Algorithm:"), " Merges multiple test scores into a composite risk probability."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "APTA-SR/3 vs. STEADI:"), " Demonstrated higher Positive Likelihood Ratio (2.2 vs. 1.57) in Parcetich et al (2022)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Minimize False Negatives:"), " Nithman et al (2019) showed multiple tests reduce missed high-risk patients.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Quick Clinic Integration:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Patients self-screen via tablet or online form. A medical assistant then runs 3-5 tests\u2014walk speed, sit-to-stand, single-leg stance, etc.\u2014and our algorithm does the rest."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "billing"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Billing & Financial Impact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubTitle, null, "Billing Information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Average procedure reimbursement: $73.48 (range $45\u2013$136). Clients use code CPT 97750 (Physical Performance Test) billed in 15-minute units. Rounding rules: 8 minutes = 1 unit, 23 minutes = 2 units, 38 minutes = 3 units. For self-report questionnaire interpretation, use CPT 96160 \u2014 two questionnaires may be used in the protocol."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubTitle, null, "Fall Risk Program Financial Impact"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Florida (5 physicians, program 5 days/week, patients 65+ pre- and post-op): 6 months collections: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "$138,562")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Arkansas (6 PT centers, program 5 days/week, patients 65+): 3 months collections: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "$176,215")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "California (1 hospital, program 7 days/week, patients 65+): 3 months collections: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "$235,178"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SubTitle, null, "Plan of Care & Educational Materials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Once a patient\u2019s FRA report is complete, the doctor reviews results with the patient, provides a Falls Care Plan, and offers educational materials (e.g., brochures on home modifications, exercise tips)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "PLACEHOLDER_plan_of_care.jpg",
    alt: "Falls Care Plan sample",
    style: {
      maxWidth: "100%",
      marginBottom: "1rem"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "PLACEHOLDER_education.jpg",
    alt: "Educational Materials",
    style: {
      maxWidth: "100%"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "workflow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Clinic Workflow \u2013 Best Practice Example"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Step 1: Patient Screening"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Patients complete a brief questionnaire while waiting\u2014captures history, medications, previous falls."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Step 2: Performance Testing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Patient is escorted down the hallway for a 10-meter walk test. A physician assistant or MA administers the remaining performance tests in the exam room."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Step 3: Report & Care Plan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Within seconds, the FRA engine generates a risk report and tailored interventions. The clinician reviews results, provides educational materials, and schedules follow-up."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Financial Impact / Case Studies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Florida (5 Physicians):"), " 6 Months of Collections \u2013 $138,562."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Arkansas (6 PT Centers):"), " 3 Months of Collections \u2013 $176,215."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "California (1 Hospital):"), " 3 Months of Collections \u2013 $235,178.")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallRiskPage);

/***/ }),

/***/ "./src/pages/index.js?export=default":
/*!*******************************************!*\
  !*** ./src/pages/index.js?export=default ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fall_risk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fall-risk */ "./src/pages/fall-risk.js");


function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_fall_risk__WEBPACK_IMPORTED_MODULE_1__["default"], null);
}

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map