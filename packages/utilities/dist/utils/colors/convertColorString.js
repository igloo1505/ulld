import '../../chunk-5WT32FJO.js';
import i from 'tinycolor2';

var s=(r,t="hsl")=>{if(r.indexOf("var")!==-1)return r;if(t==="hsl")return i(r).toHslString();if(t==="hex")return i(r).toHexString();if(t==="hsv")return i(r).toHsvString();if(t==="rgb")return i(r).toRgbString()};

export { s as convertColorString };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=convertColorString.js.map