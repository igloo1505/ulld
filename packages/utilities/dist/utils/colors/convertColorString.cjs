'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var i = require('tinycolor2');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var i__default = /*#__PURE__*/_interopDefault(i);

var n=(r,t="hsl")=>{if(r.indexOf("var")!==-1)return r;if(t==="hsl")return i__default.default(r).toHslString();if(t==="hex")return i__default.default(r).toHexString();if(t==="hsv")return i__default.default(r).toHsvString();if(t==="rgb")return i__default.default(r).toRgbString()};

exports.convertColorString = n;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=convertColorString.cjs.map