'use strict';

var t = require('react');
var e = require('next/script');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var t__default = /*#__PURE__*/_interopDefault(t);
var e__default = /*#__PURE__*/_interopDefault(e);

var l=()=>(console.log("Loading Mathjax Svg"),t__default.default.createElement(e__default.default,{id:"mathjax-script",src:"/utils/tex-mml-svg.js",strategy:"lazyOnload"})),s=()=>(console.log("Loading Mathjax Chtml"),t__default.default.createElement(e__default.default,{id:"mathjax-chtml-loader",src:"/utils/tex-chtml.js",strategy:"beforeInteractive"})),i=()=>t__default.default.createElement(e__default.default,{type:"text/x-mathjax-config",id:"mathjax-settings",strategy:"beforeInteractive"},`window.MathJax = {
 "HTML-CSS": {linebreaks: { automatic: true }},
  tex: {
    inlineMath: [['$', '$']]
  },
  menuSettings: {
    autocollapse: true
  },
  chtml: {
    minScale: 0.2,
    fontURL: "/font/mathjax",
  }
}`),o=({type:a="all"})=>{let r={chtml:a==="all"?!0:a.includes("chtml"),svg:a==="all"?!0:a.includes("svg"),config:a==="all"?!0:a.includes("config")};return t__default.default.createElement(t__default.default.Fragment,null,r.config&&t__default.default.createElement(i,null),r.svg&&t__default.default.createElement(l,null),r.chtml&&t__default.default.createElement(s,null))};o.displayName="MathjaxLoader";var h=o;

exports.a = l;
exports.b = s;
exports.c = i;
exports.d = o;
exports.e = h;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-VBEY2DWM.cjs.map