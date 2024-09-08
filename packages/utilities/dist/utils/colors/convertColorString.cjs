'use strict';

var tinycolor = require('tinycolor2');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var tinycolor__default = /*#__PURE__*/_interopDefault(tinycolor);

// src/utils/colors/convertColorString.ts
var convertColorString = (value, format = "hsl") => {
  if (value.indexOf("var") !== -1) {
    return value;
  }
  if (format === "hsl") {
    return tinycolor__default.default(value).toHslString();
  }
  if (format === "hex") {
    return tinycolor__default.default(value).toHexString();
  }
  if (format === "hsv") {
    return tinycolor__default.default(value).toHsvString();
  }
  if (format === "rgb") {
    return tinycolor__default.default(value).toRgbString();
  }
};

exports.convertColorString = convertColorString;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=convertColorString.cjs.map