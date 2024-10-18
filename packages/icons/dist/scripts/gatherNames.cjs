'use strict';

var chunkDES5CRWS_cjs = require('../chunk-DES5CRWS.cjs');
require('../chunk-236SEY2B.cjs');
var a = require('lucide-react/dynamicIconImports');
var c = require('fs');
var s = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var a__default = /*#__PURE__*/_interopDefault(a);
var c__default = /*#__PURE__*/_interopDefault(c);
var s__default = /*#__PURE__*/_interopDefault(s);

var t=Object.keys(a__default.default);for(let o in chunkDES5CRWS_cjs.a)t.includes(o)||t.push(o);var n="const allIconNames = [";for(let o of t)n+=`
"${o}",`;n+=`
] as const

export default allIconNames`;var m=s__default.default.join(s__default.default.parse(__filename).dir,"../allIconNames.ts");c__default.default.writeFileSync(m,n,{encoding:"utf-8"});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=gatherNames.cjs.map