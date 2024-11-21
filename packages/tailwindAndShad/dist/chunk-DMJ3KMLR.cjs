"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } var _class;var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);var r= (_class =class{constructor(e){;_class.prototype.__init.call(this);this.file=e;var n;this.content=_fs2.default.readFileSync(e,{encoding:"utf-8"});let t=(n=e.split("/").at(-1))==null?void 0:n.split(".")[0];if(!t)throw new Error("No name found in ThemeFile.");t.includes("unified")&&(this.isValid=!1),this.name=t}__init() {this.isValid=!0}darkContent(){let t=/.dark\s?{(?<content>[^}]*)}/gm.exec(this.getInteriorContent());return t?t[1]:void 0}lightContent(){let t=/:root\s?{(?<content>[^}]*)}/gm.exec(this.getInteriorContent());return t?t[1]:void 0}getInteriorContent(){let e=[],t=this.content.split(`
`),n=!1;for(let i of t)n&&e.push(i),i.trim()==="@layer base {"&&(n=!0);return e.slice(0,e.map(i=>i.trim()).lastIndexOf("}")).join(`
`)}getUnifiedContent(){return`html[data-ulld-theme="${this.name}"] {
${this.lightContent()}
.dark:not(.light *),
&.dark {
       ${this.darkContent()}
}
}
`}}, _class);exports.a = r;
//# sourceMappingURL=chunk-DMJ3KMLR.cjs.map