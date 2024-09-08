'use strict';

var i = require('fs');
var s = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var i__default = /*#__PURE__*/_interopDefault(i);
var s__default = /*#__PURE__*/_interopDefault(s);

var r=class{constructor(t,e){this.path=t;this._isDir=e;this.dirname=this.getDirname(e);}getFileName(){return s__default.default.basename(this.path).split(".")[0]}getExtension(){let t=s__default.default.basename(this.path).split(".");return `.${t[t.length-1]}`}getStat(){return i__default.default.statSync(this.path)}isDir(){return !!this.getStat()?.isDirectory()}getDirname(t){if(typeof t=="boolean"?t:this.isDir())return this.path;try{return s__default.default.dirname(this.path)}catch{return console.error(`Could not get dirname. Path likely does not exist at ${this.path}`),this.path}}mkdirIfNotExists(){i__default.default.existsSync(this.dirname)||i__default.default.mkdirSync(this.dirname,{recursive:!0});}getContent(){if(this.content)return this.content;let t=i__default.default.readFileSync(this.path,{encoding:"utf-8"});return this.content=t,t}exists(){return i__default.default.existsSync(this.path)}getLines(){return this.getContent().split(`
`)}filterLines(t){let e=this.getLines().filter(n=>t(n));this.content=e.join(`
`);}getImportLines(){let t=this.getLines(),e=[];return t.forEach((n,o)=>{n.trim().startsWith("import")&&e.push({content:n,index:o});}),e}throwIfNotExists(){if(!this.exists())throw new Error(`No file exists at ${this.path}. Aborting.`)}getAsJson(){return JSON.parse(this.getContent())}writeContent(t){let e=t||this.content;if(!e)return console.error("Could not write file content as none was found.");this.mkdirIfNotExists(),i__default.default.writeFileSync(this.path,e,{encoding:"utf-8"});}};

exports.a = r;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-XPBKDDN6.cjs.map