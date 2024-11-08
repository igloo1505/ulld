'use strict';

var chunkLHSTJADE_cjs = require('./chunk-LHSTJADE.cjs');
var s = require('path');
var i = require('tinycolor2');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var s__default = /*#__PURE__*/_interopDefault(s);
var i__default = /*#__PURE__*/_interopDefault(i);

var m=class n{constructor(t,o="hex"){this.colorFormat=o;this.primary={light:i__default.default(typeof t=="string"?t:t.light),dark:i__default.default(typeof t=="string"?t:t.dark)},this.data=this.getThemeColorData();}formatHslString(t){return t.replace("hsl(","").replace(")","").split(",").map(o=>o.trim()).join(" ")}toColorFormatString(t){return this.colorFormat==="hex"?t.toHexString():this.colorFormat==="hsl"?t.toHslString():this.colorFormat==="hsv"?t.toHsvString():this.colorFormat==="rgb"?t.toRgbString():t.toHexString()}formatColorArray(t){return t.map(o=>this.toColorFormatString(o))}getAnalogousColors(t,o=10,e=30){return t.analogous(o,e)}getMonochromaticColors(t,o=10){return t.monochromatic(o)}getSplitComplement(t){return t.splitcomplement().map(o=>this.formatColorArray(this.getMonochromaticColors(o)))}getTriad(t){return t.triad().map(o=>this.formatColorArray(this.getMonochromaticColors(o)))}getTetrad(t){return t.tetrad().map(o=>this.formatColorArray(this.getMonochromaticColors(o)))}getComplement(t){let o=t.complement();return {complementColor:this.toColorFormatString(o),complement:this.formatColorArray(this.getMonochromaticColors(o))}}getThemeColorData(){return {light:{analogous:this.formatColorArray(this.getAnalogousColors(this.primary.light)),monochromatic:this.formatColorArray(this.getMonochromaticColors(this.primary.light)),splitComplement:this.getSplitComplement(this.primary.light),triad:this.getSplitComplement(this.primary.light),tetrad:this.getTetrad(this.primary.light),...this.getComplement(this.primary.light)},dark:{analogous:this.formatColorArray(this.getAnalogousColors(this.primary.dark)),monochromatic:this.formatColorArray(this.getMonochromaticColors(this.primary.dark)),splitComplement:this.getSplitComplement(this.primary.dark),triad:this.getSplitComplement(this.primary.dark),tetrad:this.getTetrad(this.primary.dark),...this.getComplement(this.primary.dark)}}}static fromThemeName(t){let o=process.env.ULLD_DEV_ROOT;if(!o)throw new Error("No dev root env variable found. Can not continue writing theme colors.");let e=s__default.default.join(o,`packages/tailwindAndShad/src/shad/defaultThemes/colorMaps/${t}.json`),a=new chunkLHSTJADE_cjs.a(e);if(!a.exists())throw new Error(`File does not exist while generating ULLD theme colors for theme ${t}`);let r=a.getJsonContent();if(!r?.dark?.primary&&!r?.light?.primary)throw new Error(`Could not find primary colors in color map for ${t}`);return new n({dark:r.dark.primary,light:r.light.primary})}};

exports.a = m;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-DFO2NUYT.cjs.map