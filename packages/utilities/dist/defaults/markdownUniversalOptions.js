import { mermaidTheme } from '../chunk-ANVX23WG.js';
import '../chunk-F3FYYIAV.js';

// src/defaults/markdownUniversalOptions.ts
var mathOptions = {
  tex: {
    // packages: [],
    tags: "all",
    // "all" | "ams" (ams breaks EqRef component, unless can find other way to force label creation.),
    useLabelIds: true,
    processEscapes: true,
    processEnvironments: true
  },
  chtml: {
    fontURL: "/font/mathjax",
    adaptiveCSS: true
  }
};
var mermaidConfig = {
  output: "svg",
  /* theme: { light: 'dark', dark: 'dark' }, */
  mermaid: {
    themeVariables: mermaidTheme.dark,
    theme: "base"
  }
};

export { mathOptions, mermaidConfig };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=markdownUniversalOptions.js.map