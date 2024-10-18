import '../../chunk-T7KECS5U.mjs';
import i from 'tinycolor2';

var n=(r,t="hsl")=>{if(r.indexOf("var")!==-1)return r;if(t==="hsl")return i(r).toHslString();if(t==="hex")return i(r).toHexString();if(t==="hsv")return i(r).toHsvString();if(t==="rgb")return i(r).toRgbString()};

export { n as convertColorString };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=convertColorString.mjs.map