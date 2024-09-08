import Script from 'next/script';
import React from 'react';

// src/loaders/installerComponents/SvgLatexLoader.tsx
var SvgLatexLoader = () => {
  return /* @__PURE__ */ React.createElement(Script, { type: "module", id: "123" }, `import {LaTeXJSComponent} from "https://cdn.jsdelivr.net/npm/latex.js/dist/latex.mjs"
                    customElements.define("latex-js", LaTeXJSComponent)`);
};
SvgLatexLoader.displayName = "SvgLatexLoader";
var SvgLatexLoader_default = SvgLatexLoader;

export { SvgLatexLoader_default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-6ULDQ2Q3.js.map