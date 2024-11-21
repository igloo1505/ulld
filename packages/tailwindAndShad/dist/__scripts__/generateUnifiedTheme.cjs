"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _chunkDMJ3KMLRcjs = require('../chunk-DMJ3KMLR.cjs');require('../chunk-GX4GL4KK.cjs');var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);var _path = require('path'); var _path2 = _interopRequireDefault(_path);var _glob = require('glob');var r="unifiedTheme.scss",s=_path2.default.join(__dirname,`../shad/defaultThemes/${r}`),d=_glob.globSync.call(void 0, `${_path2.default.join(__dirname,"../shad/defaultThemes/")}/*.scss`,{}),t=`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
`;d.map(e=>new (0, _chunkDMJ3KMLRcjs.a)(e)).filter(e=>e.isValid).forEach(e=>{t+=e.getUnifiedContent()});t+=`
    * {
      @apply border-border;
    }

    body {
      @apply bg-background text-foreground font-sans;
    }
  }
`;_fs2.default.writeFileSync(s,t,{encoding:"utf-8"});
//# sourceMappingURL=generateUnifiedTheme.cjs.map