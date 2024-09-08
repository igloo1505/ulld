import '../../chunk-F3FYYIAV.js';
import React from 'react';
import Script from 'next/script';

var RequireJsLoader = (props) => {
  return /* @__PURE__ */ React.createElement(
    Script,
    {
      id: "load-requireJs",
      src: "/scripts/require.js",
      async: true,
      strategy: "lazyOnload",
      ...props
    }
  );
};
RequireJsLoader.displayName = "RequireJsLoader";

export { RequireJsLoader };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=requirejs.js.map