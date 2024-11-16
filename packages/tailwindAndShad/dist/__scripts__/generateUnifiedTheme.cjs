'use strict';

var chunk4V3S5RHE_cjs = require('../chunk-4V3S5RHE.cjs');
require('../chunk-GX4GL4KK.cjs');
var n = require('fs');
var o = require('path');
var glob = require('glob');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var n__default = /*#__PURE__*/_interopDefault(n);
var o__default = /*#__PURE__*/_interopDefault(o);

var r="unifiedTheme.scss",s=o__default.default.join(__dirname,`../shad/defaultThemes/${r}`),d=glob.globSync(`${o__default.default.join(__dirname,"../shad/defaultThemes/")}/*.scss`,{}),t=`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
`;d.map(e=>new chunk4V3S5RHE_cjs.a(e)).filter(e=>e.isValid).forEach(e=>{t+=e.getUnifiedContent();});t+=`
    * {
      @apply border-border;
    }

    body {
      @apply bg-background text-foreground font-sans;
    }
  }
`;n__default.default.writeFileSync(s,t,{encoding:"utf-8"});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=generateUnifiedTheme.cjs.map