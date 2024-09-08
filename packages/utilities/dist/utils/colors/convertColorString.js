import '../../chunk-F3FYYIAV.js';
import tinycolor from 'tinycolor2';

var convertColorString = (value, format = "hsl") => {
  if (value.indexOf("var") !== -1) {
    return value;
  }
  if (format === "hsl") {
    return tinycolor(value).toHslString();
  }
  if (format === "hex") {
    return tinycolor(value).toHexString();
  }
  if (format === "hsv") {
    return tinycolor(value).toHsvString();
  }
  if (format === "rgb") {
    return tinycolor(value).toRgbString();
  }
};

export { convertColorString };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=convertColorString.js.map