"use strict";
exports.id = "component---src-pages-fall-risk-js";
exports.ids = ["component---src-pages-fall-risk-js"];
exports.modules = {

/***/ "./src/components/Layout/GlobalStyles.jsx":
/*!************************************************!*\
  !*** ./src/components/Layout/GlobalStyles.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle)(["*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}html{scroll-behavior:smooth;}body{font-family:'Inter',sans-serif;background:#F7F9FA;color:#0A2640;line-height:1.5;}a{text-decoration:none;color:inherit;}ul{list-style:none;}::-webkit-scrollbar{width:8px;}::-webkit-scrollbar-thumb{background-color:#3FD0C9;border-radius:4px;}"]));

/***/ }),

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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_Layout_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout/GlobalStyles */ "./src/components/Layout/GlobalStyles.jsx");
// File: src/pages/fall-risk.js





/* ----------------------------------------------------------------------------------------------------------------- */
/* 1) Color Palette                                                                                                   */
/* ----------------------------------------------------------------------------------------------------------------- */
const COLORS = {
  darkBlue: "#0A2640",
  teal: "#3FD0C9",
  lightGray: "#F7F9FA",
  cardBg: "#FFFFFF",
  neutralGray: "#6B7280"
};

/* ----------------------------------------------------------------------------------------------------------------- */
/* 2) LAYOUT COMPONENTS                                                                                               */
/* ----------------------------------------------------------------------------------------------------------------- */

/* 2.1: Sticky navigation bar with logo above nav links */
const NavBar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].nav.withConfig({
  displayName: "fall-risk__NavBar"
})(["position:sticky;top:0;width:100%;background:", ";box-shadow:0 2px 6px rgba(0,0,0,0.1);z-index:100;display:flex;flex-direction:column;align-items:center;padding:1rem 0;@media (min-width:600px){padding:1rem 0.5rem;}"], COLORS.cardBg);
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "fall-risk__LogoWrapper"
})(["margin-bottom:0.75rem;img{height:60px;width:auto;}@media (min-width:600px){img{height:80px;}}"]);
const NavLinks = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "fall-risk__NavLinks"
})(["display:flex;flex-wrap:wrap;justify-content:center;gap:1.5rem;li{list-style:none;}a{font-size:1rem;font-weight:500;color:", ";transition:color 0.2s ease-in-out;&:hover{color:", ";}}@media (min-width:600px){gap:2rem;a{font-size:1.1rem;}}"], COLORS.darkBlue, COLORS.teal);

/* 2.2: Section container with top/bottom padding */
const Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "fall-risk__Section"
})(["max-width:960px;margin:0 auto;padding:3rem 1rem;&:not(:first-of-type){margin-top:2rem;}@media (max-width:768px){padding:2rem 1rem;}"]);

/* 2.3: “InfoBox” to visually separate each Section’s content */
const InfoBox = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "fall-risk__InfoBox"
})(["background:", ";border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.05);padding:2rem;margin-top:1rem;@media (max-width:768px){padding:1.5rem;}"], COLORS.cardBg);

/* 2.4: Section Title (H2) */
const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "fall-risk__SectionTitle"
})(["font-size:2rem;color:", ";margin-bottom:0.5rem;text-align:center;@media (max-width:768px){font-size:1.75rem;}"], COLORS.darkBlue);

/* 2.5: Paragraph / Body Text */
const Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "fall-risk__Paragraph"
})(["color:", ";font-size:1rem;line-height:1.6;margin-bottom:1rem;"], COLORS.darkBlue);

/* 2.6: Larger intro text (centered) */
const IntroText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "fall-risk__IntroText"
})(["color:", ";font-size:1.125rem;text-align:center;margin-bottom:1.5rem;line-height:1.5;"], COLORS.darkBlue);

/* 2.7: Bullet List styling */
const BulletList = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "fall-risk__BulletList"
})(["margin-left:1.25rem;margin-bottom:1.5rem;li{margin-bottom:0.5rem;line-height:1.5;position:relative;padding-left:1.25rem;&::before{content:\"\u2022\";position:absolute;left:0;color:", ";}}"], COLORS.teal);

/* 2.8: Hero Section (with video background) */
const HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].section.withConfig({
  displayName: "fall-risk__HeroWrapper"
})(["position:relative;height:60vh;min-height:400px;overflow:hidden;display:flex;align-items:center;justify-content:center;color:#ffffff;text-align:center;@media (max-width:768px){height:50vh;}"]);

/* 2.9: BackgroundVideo */
const BackgroundVideo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].video.withConfig({
  displayName: "fall-risk__BackgroundVideo"
})(["position:absolute;top:50%;left:50%;min-width:100%;min-height:100%;width:auto;height:auto;transform:translate(-50%,-50%);z-index:1;object-fit:cover;filter:brightness(0.6);"]);

/* 2.10: Hero Content (over the video) */
const HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "fall-risk__HeroContent"
})(["position:relative;z-index:2;max-width:800px;margin:0 1rem;display:flex;flex-direction:column;align-items:center;"]);
const HeroHeadline = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1.withConfig({
  displayName: "fall-risk__HeroHeadline"
})(["font-size:clamp(2.5rem,6vw,3.5rem);font-weight:700;line-height:1.2;margin-bottom:1rem;color:#ffffff;"]);
const HeroSubhead = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "fall-risk__HeroSubhead"
})(["font-size:clamp(1.125rem,3vw,1.5rem);margin-bottom:2rem;color:#ffffff;"]);
const HeroButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].a.withConfig({
  displayName: "fall-risk__HeroButton"
})(["background:", ";color:#ffffff;padding:0.75rem 1.75rem;border-radius:4px;font-size:1rem;font-weight:600;transition:background 0.2s ease-in-out;text-decoration:none;&:hover{background:#64FFDA;}"], COLORS.teal);

/* ----------------------------------------------------------------------------------------------------------------- */
/* 3) FALL RISK PAGE COMPONENT                                                                                          */
/* ----------------------------------------------------------------------------------------------------------------- */
const FallRiskPage = () => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout_GlobalStyles__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavBar, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/images/Upright Medical Solutions Logo.png",
    alt: "Upright Medical Solutions"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(NavLinks, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#hero"
  }, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#need-screen"
  }, "Need to Screen")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#what-is-fra"
  }, "What Is FRA?")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#pboms"
  }, "PBOMs")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "#workflow"
  }, "Workflow")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeroWrapper, {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "What Is the Fall Risk Assessment (FRA)?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "A data-driven, automated assessment that calculates each individual\u2019s 12-month probability of falling."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Automated Math:"), " Combines multiple test results into a single risk score\u2014no manual calculation required."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "2,300+ Studies:"), " Built on extensive clinical research to ensure accuracy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "10\u201325 Minutes:"), " Simple to administer in any clinic setting, with minimal training."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Evidence-Based:"), " Rooted in peer-reviewed algorithms that outperform traditional screening methods.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Step 1: Screen"), " \u2013 Identify existing risk factors using a brief questionnaire.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Step 2: Assess"), " \u2013 Administer 3-5 performance tests in under 25 minutes.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Step 3: Intervene"), " \u2013 Generate a personalized, evidence-based care plan immediately."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "pboms"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Performance-Based Outcome Measures (PBOMs)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "These functional tests are the heart of any accurate fall-risk model."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Lusardi et al (2017):"), " PBOMs are the most powerful predictors of future falls."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Combination Algorithm:"), " Merges multiple test scores into a composite risk probability."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "APTA-SR/3 vs. STEADI:"), " Demonstrated higher Positive Likelihood Ratio (2.2 vs. 1.57) in Parcetich et al (2022)."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Minimize False Negatives:"), " Nithman et al (2019) showed multiple tests reduce missed high-risk patients.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Quick Clinic Integration:"), "Patients self-screen via tablet or online form. A medical assistant then runs 3-5 tests\u2014walk speed, sit-to-stand, single-leg stance, etc.\u2014and our algorithm does the rest."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Section, {
    id: "workflow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SectionTitle, null, "Clinic Workflow \u2013 Best Practice Example"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(InfoBox, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Step 1: Patient Screening"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Patients complete a brief questionnaire while waiting\u2014captures history, medications, previous falls."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Step 2: Performance Testing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Patient is escorted down the hallway for a 10-meter walk test. A physician assistant or MA administers the remaining performance tests in the exam room."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Step 3: Report & Care Plan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Paragraph, null, "Within seconds, the FRA engine generates a risk report and tailored interventions. The clinician reviews results, provides educational materials, and schedules follow-up."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IntroText, null, "Financial Impact / Case Studies"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BulletList, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Florida (5 Physicians):"), " 6 Months of Collections \u2013 $138,562."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Arkansas (6 PT Centers):"), " 3 Months of Collections \u2013 $176,215."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "California (1 Hospital):"), " 3 Months of Collections \u2013 $235,178.")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FallRiskPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-fall-risk-js.js.map