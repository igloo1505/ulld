'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunkJDUMNZA2_cjs = require('../../chunk-JDUMNZA2.cjs');
var chunk7HWK6X75_cjs = require('../../chunk-7HWK6X75.cjs');
var pastel = require('pastel');
var r = require('react');
var zod = require('zod');
var g = require('path');
var n = require('fs');
var ink = require('ink');
var ui = require('@inkjs/ui');
var k = require('log-symbols');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var r__default = /*#__PURE__*/_interopDefault(r);
var g__default = /*#__PURE__*/_interopDefault(g);
var n__default = /*#__PURE__*/_interopDefault(n);
var k__default = /*#__PURE__*/_interopDefault(k);

var D=zod.z.tuple([zod.z.string().default(".").describe(pastel.argument({name:"path",description:"Directory at which tunnel file should be created",defaultValueDescription:"cwd"}))]),d=({args:x})=>{let o=chunk7HWK6X75_cjs.a(x[0]),t=o.endsWith("package.json")?o:g__default.default.join(o,"package.json");if(!n__default.default.existsSync(t))return r__default.default.createElement(ui.Alert,{variant:"error"},"No package.json path found.");let e=JSON.parse(n__default.default.readFileSync(t,{encoding:"utf-8"})),a=!1;if(e.exports)for(let i in e.exports){let s=e.exports[i];if(typeof s=="string"){let p=chunkJDUMNZA2_cjs.a({key:i,value:s,type:typeof s=="string"?"src dir string":"dist dir object"},"dist dir object",{dirname:g__default.default.dirname(t),to:"dist dir object"});p.value&&(e.exports[i]=p.value,a=!0);}}return a&&n__default.default.writeFileSync(t,JSON.stringify(e,null,2),{encoding:"utf-8"}),r__default.default.createElement(ink.Box,{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",gap:2},r__default.default.createElement(ink.Text,null,k__default.default.success),r__default.default.createElement(ink.Text,null,`Successfully set export fields for package.json at ${t}`))};d.displayName="PackageJsonExportsCommand";var F=d;

exports.args = D;
exports.default = F;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map