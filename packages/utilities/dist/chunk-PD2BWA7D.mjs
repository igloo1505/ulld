import t from 'react';
import e from 'next/script';

var l=()=>(console.log("Loading Mathjax Svg"),t.createElement(e,{id:"mathjax-script",src:"/utils/tex-mml-svg.js",strategy:"lazyOnload"})),s=()=>(console.log("Loading Mathjax Chtml"),t.createElement(e,{id:"mathjax-chtml-loader",src:"/utils/tex-chtml.js",strategy:"beforeInteractive"})),i=()=>t.createElement(e,{type:"text/x-mathjax-config",id:"mathjax-settings",strategy:"beforeInteractive"},`window.MathJax = {
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
}`),o=({type:a="all"})=>{let r={chtml:a==="all"?!0:a.includes("chtml"),svg:a==="all"?!0:a.includes("svg"),config:a==="all"?!0:a.includes("config")};return t.createElement(t.Fragment,null,r.config&&t.createElement(i,null),r.svg&&t.createElement(l,null),r.chtml&&t.createElement(s,null))};o.displayName="MathjaxLoader";var m=o;

export { l as a, s as b, i as c, o as d, m as e };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-PD2BWA7D.mjs.map