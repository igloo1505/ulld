'use strict';

var chunk3C6RACUK_cjs = require('./chunk-3C6RACUK.cjs');
var a = require('path');
var glob = require('glob');
var admonitionTypes = require('@ulld/types/admonitionTypes');
var r = require('lucide-react/dynamicIconImports');
var iconNameMap = require('@ulld/types/iconNameMap');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var a__default = /*#__PURE__*/_interopDefault(a);
var r__default = /*#__PURE__*/_interopDefault(r);

var I=()=>{let n=[];for(let o in r__default.default)n.push({type:"lucide",name:o});let e=a__default.default.join(chunk3C6RACUK_cjs.a("getValidIconNames"),"packages/icons/src/logoIcons");glob.globSync("**/*.{ts,tsx}",{cwd:e,nodir:!0}).forEach(o=>{n.push({type:"logo",name:a__default.default.parse(o).name});}),admonitionTypes.admonitionTypeList.forEach(o=>{n.push({type:"admonition",name:o});});for(let o in iconNameMap.iconNameMap)n.push({type:"nameMap",name:o});return n};

exports.a = I;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ZNQHQW7V.cjs.map