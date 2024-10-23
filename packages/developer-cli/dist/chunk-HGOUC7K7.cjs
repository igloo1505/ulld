'use strict';

var chunkKVSOEVQP_cjs = require('./chunk-KVSOEVQP.cjs');
var e = require('react');
var s = require('fs');
var t = require('path');
var marked = require('marked');
var p = require('chalk');
var markedTerminal = require('marked-terminal');
var ink = require('ink');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var e__default = /*#__PURE__*/_interopDefault(e);
var s__default = /*#__PURE__*/_interopDefault(s);
var t__default = /*#__PURE__*/_interopDefault(t);
var p__default = /*#__PURE__*/_interopDefault(p);

var c={firstHeading:p__default.default.hex(chunkKVSOEVQP_cjs.a),emoji:!0},g=({content:r,options:i=c,highlightOptions:n={}})=>{marked.marked.setOptions({gfm:!0}),marked.marked.use(markedTerminal.markedTerminal(i,n));let d=marked.marked.parse(r);return e__default.default.createElement(ink.Box,{paddingX:4},e__default.default.createElement(ink.Text,null,d))},h=r=>(console.log(undefined),t__default.default.join(undefined.endsWith("dist")?t__default.default.join(undefined,"markdown"):t__default.default.resolve(undefined,"../../markdown"),r)),a=r=>{console.log("import.meta.dirname: ",undefined);let n={content:"content"in r?r.content:s__default.default.readFileSync(h(r.filePath),{encoding:"utf-8"})};return e__default.default.createElement(g,{...n})};a.displayName="Markdown";var R=a;

exports.a = R;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-HGOUC7K7.cjs.map