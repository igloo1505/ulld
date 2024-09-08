import { a } from './chunk-GQSCBKA6.js';
import i from 'fs';
import r from 'path';

var o=class{constructor(t,e){a(this,"path");a(this,"_isDir");a(this,"dirname");a(this,"content");this.path=t,this._isDir=e,this.dirname=this.getDirname(e);}getFileName(){return r.basename(this.path).split(".")[0]}getExtension(){let t=r.basename(this.path).split(".");return `.${t[t.length-1]}`}getStat(){return i.statSync(this.path)}isDir(){return !!this.getStat()?.isDirectory()}getDirname(t){if(typeof t=="boolean"?t:this.isDir())return this.path;try{return r.dirname(this.path)}catch{return console.error(`Could not get dirname. Path likely does not exist at ${this.path}`),this.path}}mkdirIfNotExists(){i.existsSync(this.dirname)||i.mkdirSync(this.dirname,{recursive:!0});}getContent(){if(this.content)return this.content;let t=i.readFileSync(this.path,{encoding:"utf-8"});return this.content=t,t}exists(){return i.existsSync(this.path)}getLines(){return this.getContent().split(`
`)}filterLines(t){let e=this.getLines().filter(s=>t(s));this.content=e.join(`
`);}getImportLines(){let t=this.getLines(),e=[];return t.forEach((s,h)=>{s.trim().startsWith("import")&&e.push({content:s,index:h});}),e}throwIfNotExists(){if(!this.exists())throw new Error(`No file exists at ${this.path}. Aborting.`)}getAsJson(){return JSON.parse(this.getContent())}writeContent(t){let e=t||this.content;if(!e)return console.error("Could not write file content as none was found.");this.mkdirIfNotExists(),i.writeFileSync(this.path,e,{encoding:"utf-8"});}};

export { o as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-2NPKUNYW.js.map