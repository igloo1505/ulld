'use strict';

var n = require('fs');
var p = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var n__default = /*#__PURE__*/_interopDefault(n);
var p__default = /*#__PURE__*/_interopDefault(p);

var c=(t,r)=>{let e=t;return t.endsWith(".d.ts")?e=e.slice(0,e.length-5):e=e.slice(0,e.lastIndexOf(".")),`${e}${r}`},a=(t,r,e)=>{let s=t;return r==="src"&&s.startsWith("./dist")?s=s.replace("./dist","./src"):r==="dist"&&s.startsWith("./src")&&(s=s.replace("./src","./dist")),c(s,e)},d=(t,r)=>{console.log("filePath: ",t);let e=c(t,".ts"),s=p__default.default.join(r.dirname,e),i=c(t,".tsx"),o=p__default.default.join(r.dirname,i);if(n__default.default.existsSync(s))return e;if(n__default.default.existsSync(o))return i;let l=c(t,".json");if(n__default.default.existsSync(p__default.default.join(r.dirname,l)))return l;throw new Error(`Could not find a path that exists for file ${t}`)},x=(t,r,e)=>{if(r==="dist dir object")return typeof t.value=="object"?t:{...t,value:{types:a(t.value,"dist",".d.ts"),import:a(t.value,"dist",".js"),require:a(t.value,"dist",".cjs")}};if(r==="src dir string"){let s=typeof t.value=="string"?t.value:d(a(t.value.import,"src",".ts"),e);if(!s)throw new Error(`Could not find file for ${t.value}`);return typeof t.value=="string"?t:{...t,value:s}}return t},g=t=>{let r=p__default.default.resolve(t.dirname,"./package.json");if(!n__default.default.existsSync(r))throw new Error(`Cannot modify package.json exports. Could not find ${r}`);let e=JSON.parse(n__default.default.readFileSync(r,{encoding:"utf-8"}));if(!e.exports)return;let s=[];for(let o in e.exports)s.push({key:o,value:e.exports[o],type:typeof e.exports[o]=="string"?"src dir string":"dist dir object"});let i=s.map(o=>x(o,t.to,t));console.log("newItems: ",i);};g({dirname:"/Users/bigsexy/Desktop/current/ulld/packages/utilities/",to:"dist dir object"});

exports.a = g;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ZWWS36EK.cjs.map