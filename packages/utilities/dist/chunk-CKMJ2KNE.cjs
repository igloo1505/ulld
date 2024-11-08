'use strict';

var chunkTNPBOZR7_cjs = require('./chunk-TNPBOZR7.cjs');
var chunkJF6JSIA2_cjs = require('./chunk-JF6JSIA2.cjs');
var f = require('fs');
var m = require('path');
var glob = require('glob');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var f__default = /*#__PURE__*/_interopDefault(f);
var m__default = /*#__PURE__*/_interopDefault(m);

var d=async(n,e)=>{let r=chunkTNPBOZR7_cjs.a.parse(n),t=await glob.glob(r.glob,{cwd:e.fsRoot,ignore:r.ignore||void 0,nodir:r.type==="files"}),i=r.returnAs==="absolute";return i?t=t.map(o=>m__default.default.join(e.fsRoot,o)):t=t.map(o=>chunkJF6JSIA2_cjs.a(o)),r.type==="dirs"&&(t=t.filter(o=>f__default.default.statSync(i?o:m__default.default.join(e.fsRoot,o)).isDirectory())),t};

exports.a = d;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-CKMJ2KNE.cjs.map