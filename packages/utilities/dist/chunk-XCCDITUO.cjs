'use strict';

var chunkTNPBOZR7_cjs = require('./chunk-TNPBOZR7.cjs');
var chunkFICKYDMP_cjs = require('./chunk-FICKYDMP.cjs');
var glob = require('glob');
var n = require('fs');
var m = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var n__default = /*#__PURE__*/_interopDefault(n);
var m__default = /*#__PURE__*/_interopDefault(m);

var S=async(f,e)=>{let r=chunkTNPBOZR7_cjs.a.parse(f),t=await glob.glob(r.glob,{cwd:e.fsRoot,ignore:r.ignore||void 0,nodir:r.type==="files"}),i=r.returnAs==="absolute";return i?t=t.map(o=>m__default.default.join(e.fsRoot,o)):t=t.map(o=>chunkFICKYDMP_cjs.a(o)),r.type==="dirs"&&(t=t.filter(o=>n__default.default.statSync(i?o:m__default.default.join(e.fsRoot,o)).isDirectory())),t};

exports.a = S;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-XCCDITUO.cjs.map