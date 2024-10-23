'use strict';

var c = require('react');
var n = require('@ulld/utilities/buildStaticData');
var inkResponsiveSelect = require('ink-responsive-select');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var c__default = /*#__PURE__*/_interopDefault(c);
var n__default = /*#__PURE__*/_interopDefault(n);

var l=({setPackageData:r,value:t})=>{let o={options:n__default.default.internalPackageData.map((e,a)=>({label:e.name.replace("@ulld/",""),value:`${a}`,checked:!!(t&&t.name===e.name)})),loading:!1,onChanged:e=>{let a=n__default.default.internalPackageData[parseInt(e.value)];a&&r(a);}};return c__default.default.createElement(inkResponsiveSelect.ResponsiveSelect,{...o})};l.displayName="InternalPackageSelect";var g=l;

module.exports = g;
//# sourceMappingURL=out.js.map

module.exports = exports.default;
//# sourceMappingURL=main.cjs.map