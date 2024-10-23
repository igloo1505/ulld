'use strict';

var r = require('path');
var o = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);
var o__default = /*#__PURE__*/_interopDefault(o);

var i=class{getOutputToFilePath(t){if(t.isAbsolutePath)return t.filePath;if(!process.env.ULLD_DEV_ROOT)throw new Error("Cannot find ULLD_DEV_ROOT variable. Cannot continue in the DevelopmentOutput class.");return r__default.default.join(process.env.ULLD_DEV_ROOT,t.filePath)}outputToFile(t,e){e&&o__default.default.writeFileSync(this.getOutputToFilePath(e),t,{encoding:"utf-8"});}};

exports.a = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-T5AYEUMB.cjs.map