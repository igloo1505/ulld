import Script from 'next/script';
import React from 'react';

// src/loaders/installerComponents/RequireJsLoader.tsx
var RequireJsLoader = (props) => {
  return /* @__PURE__ */ React.createElement(
    Script,
    {
      id: "load-requireJs",
      src: "/utils/require.js",
      async: true,
      ...props
    }
  );
};
RequireJsLoader.displayName = "RequireJsLoader";
var RequireJsLoader_default = RequireJsLoader;

export { RequireJsLoader_default };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-NVNJS4N6.js.map