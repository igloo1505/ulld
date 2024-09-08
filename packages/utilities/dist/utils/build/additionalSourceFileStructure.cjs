'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var o = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var o__default = /*#__PURE__*/_interopDefault(o);

var e={style:[{subPath:"index.scss",rootGlob:"styles/**/*.scss",dirPath:"styles",validate:t=>t.includes("styles/index.scss"),includeDirContents:!0,getOutputPath:t=>`src/styles/userProvided/${t.startsWith(`styles${o__default.default.sep}`)?t.slice(`styles${o__default.default.sep}`.length):t}`}],public:[{subPath:"**",rootGlob:"public/**",dirPath:"public",getOutputPath:t=>t,allowMultiple:!0}],root:[{subPath:"tailwind.config.ts",rootGlob:"tailwind.config.ts",getOutputPath:()=>"tailwind.config.ts"},{subPath:"anyFilename.bib",globPath:"*.bib",rootGlob:"*.bib",getOutputPath:t=>t},{subPath:"appConfig.ulld.json",globPath:"appConfig.ulld.json",rootGlob:"appConfig.ulld.json",getOutputPath:()=>"appConfig.ulld.json"},{subPath:".env",globPath:".env",rootGlob:".env",getOutputPath:()=>".env.local"},{subPath:"favicon.{ico,png,jpg}",rootGlob:"favicon.{ico,png,jpg}",getOutputPath:t=>`public/${t}`}]},s={subPath:"/",items:[...e.root,{subPath:"styles",items:e.style},{subPath:"public",items:[{subPath:"unreserved-public-dir",globPath:"<NOT_EXISTING_PUBLIC_DIR>",items:e.public}]}]},a=()=>{let t=[];for(let i in e)t=t.concat(e[i]);return t};

exports.additionalFilePaths = s;
exports.fileItems = e;
exports.getFlattenedFileItems = a;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=additionalSourceFileStructure.cjs.map