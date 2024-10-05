'use strict';

var chunk7ARU3YXQ_cjs = require('./chunk-7ARU3YXQ.cjs');
var i = require('fs');
var r = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var i__default = /*#__PURE__*/_interopDefault(i);
var r__default = /*#__PURE__*/_interopDefault(r);

var o=class{constructor(t,e){chunk7ARU3YXQ_cjs.a(this,"path");chunk7ARU3YXQ_cjs.a(this,"_isDir");chunk7ARU3YXQ_cjs.a(this,"dirname");chunk7ARU3YXQ_cjs.a(this,"content");this.path=t,this._isDir=e,this.dirname=this.getDirname(e);}getFileName(){return r__default.default.basename(this.path).split(".")[0]}getExtension(){let t=r__default.default.basename(this.path).split(".");return `.${t[t.length-1]}`}getStat(){return i__default.default.statSync(this.path)}isDir(){return !!this.getStat()?.isDirectory()}getDirname(t){if(typeof t=="boolean"?t:this.isDir())return this.path;try{return r__default.default.dirname(this.path)}catch{return console.error(`Could not get dirname. Path likely does not exist at ${this.path}`),this.path}}mkdirIfNotExists(){i__default.default.existsSync(this.dirname)||i__default.default.mkdirSync(this.dirname,{recursive:!0});}createIfNotExists(){if(this.exists())return;this.mkdirIfNotExists();let t=i__default.default.openSync(this.path);i__default.default.closeSync(t);}getContent(){if(this.content)return this.content;let t=i__default.default.readFileSync(this.path,{encoding:"utf-8"});return this.content=t,t}exists(){return i__default.default.existsSync(this.path)}getLines(){return this.getContent().split(`
`)}filterLines(t){let e=this.getLines().filter(s=>t(s));this.content=e.join(`
`);}getImportLines(){let t=this.getLines(),e=[];return t.forEach((s,h)=>{s.trim().startsWith("import")&&e.push({content:s,index:h});}),e}throwIfNotExists(){if(!this.exists())throw new Error(`No file exists at ${this.path}. Aborting.`)}getAsJson(){return JSON.parse(this.getContent())}writeContent(t){let e=t||this.content;if(!e)return console.error("Could not write file content as none was found.");this.mkdirIfNotExists(),i__default.default.writeFileSync(this.path,e,{encoding:"utf-8"});}};

exports.a = o;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-J57BSQHL.cjs.map