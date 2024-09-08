import { RequireJsLoader_default } from '../../chunk-NVNJS4N6.js';
import { SvgLatexLoader_default } from '../../chunk-6ULDQ2Q3.js';
import { Mathjax_default } from '../../chunk-6ISTDGTB.js';
import '../../chunk-F3FYYIAV.js';
import React from 'react';

var InitialLoader = ({ requireJs = true, latex = true, mathjax = "all" }) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, requireJs && /* @__PURE__ */ React.createElement(RequireJsLoader_default, null), latex && /* @__PURE__ */ React.createElement(SvgLatexLoader_default, null), /* @__PURE__ */ React.createElement(
    Mathjax_default,
    {
      type: mathjax
    }
  ));
};

export { InitialLoader };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=initialLoader.js.map