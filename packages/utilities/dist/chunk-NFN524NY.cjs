'use strict';

var chunk4IWGOKKQ_cjs = require('./chunk-4IWGOKKQ.cjs');
var chunkXYSZNEDQ_cjs = require('./chunk-XYSZNEDQ.cjs');
var glob = require('glob');
var n = require('fs');
var m = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var n__default = /*#__PURE__*/_interopDefault(n);
var m__default = /*#__PURE__*/_interopDefault(m);

var S=async(f,e)=>{let r=chunk4IWGOKKQ_cjs.a.parse(f),t=await glob.glob(r.glob,{cwd:e.fsRoot,ignore:r.ignore||void 0,nodir:r.type==="files"}),i=r.returnAs==="absolute";return i?t=t.map(o=>m__default.default.join(e.fsRoot,o)):t=t.map(o=>chunkXYSZNEDQ_cjs.a(o)),r.type==="dirs"&&(t=t.filter(o=>n__default.default.statSync(i?o:m__default.default.join(e.fsRoot,o)).isDirectory())),t};

exports.a = S;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-NFN524NY.cjs.map