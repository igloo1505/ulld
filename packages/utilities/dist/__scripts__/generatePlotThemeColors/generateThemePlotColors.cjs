'use strict';

var chunkDFO2NUYT_cjs = require('../../chunk-DFO2NUYT.cjs');
require('../../chunk-LHSTJADE.cjs');
require('../../chunk-J57BSQHL.cjs');
var chunkGVLMYDX2_cjs = require('../../chunk-GVLMYDX2.cjs');
require('../../chunk-LY5APYUW.cjs');
require('../../chunk-7ARU3YXQ.cjs');
var a = require('path');
var n = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var a__default = /*#__PURE__*/_interopDefault(a);
var n__default = /*#__PURE__*/_interopDefault(n);

var i=()=>{let e=process.env.ULLD_DEV_ROOT,o={};if(!e)throw new Error("No dev root env variable found. Can not continue writing theme colors.");chunkGVLMYDX2_cjs.a.forEach(r=>{let m=chunkDFO2NUYT_cjs.a.fromThemeName(r);o[r]=m.data;}),n__default.default.writeFileSync(a__default.default.join(e,"packages/utilities/src/styleUtilities/generatedThemeColorSchemes.json"),JSON.stringify(o,null,2),{encoding:"utf-8"});};i();
//# sourceMappingURL=out.js.map
//# sourceMappingURL=generateThemePlotColors.cjs.map