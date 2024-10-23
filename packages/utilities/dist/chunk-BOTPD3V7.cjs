'use strict';

var n = require('fs');
var p = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var n__default = /*#__PURE__*/_interopDefault(n);
var p__default = /*#__PURE__*/_interopDefault(p);

var a=(t,r)=>{let e=t;return t.endsWith(".d.ts")?e=e.slice(0,e.length-5):e=e.slice(0,e.lastIndexOf(".")),`${e}${r}`},i=(t,r,e)=>{let s=t;return r==="src"&&s.startsWith("./dist")?s=s.replace("./dist","./src"):r==="dist"&&s.startsWith("./src")&&(s=s.replace("./src","./dist")),a(s,e)},x=(t,r)=>{console.log("filePath: ",t);let e=a(t,".ts"),s=p__default.default.join(r.dirname,e),c=a(t,".tsx"),o=p__default.default.join(r.dirname,c);if(n__default.default.existsSync(s))return e;if(n__default.default.existsSync(o))return c;let l=a(t,".json");if(n__default.default.existsSync(p__default.default.join(r.dirname,l)))return l;throw new Error(`Could not find a path that exists for file ${t}`)},d=(t,r,e)=>{if(r==="dist dir object")return typeof t.value=="object"?t:{...t,value:{types:i(t.value,"dist",".d.ts"),import:i(t.value,"dist",".js"),require:i(t.value,"dist",".cjs")}};if(r==="src dir string"){let s=typeof t.value=="string"?t.value:x(i(t.value.import,"src",".ts"),e);if(!s)throw new Error(`Could not find file for ${t.value}`);return typeof t.value=="string"?t:{...t,value:s}}return t},u=t=>{let r=p__default.default.resolve(t.dirname,"./package.json");if(!n__default.default.existsSync(r))throw new Error(`Cannot modify package.json exports. Could not find ${r}`);let e=JSON.parse(n__default.default.readFileSync(r,{encoding:"utf-8"}));if(!e.exports)return;let s=[];for(let o in e.exports)s.push({key:o,value:e.exports[o],type:typeof e.exports[o]=="string"?"src dir string":"dist dir object"});s.map(o=>d(o,t.to,t));};

exports.a = u;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-BOTPD3V7.cjs.map