'use strict';

var o = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var o__default = /*#__PURE__*/_interopDefault(o);

var r=class{constructor(e){this.file=e;this.isValid=!0;this.content=o__default.default.readFileSync(e,{encoding:"utf-8"});let t=e.split("/").at(-1)?.split(".")[0];if(!t)throw new Error("No name found in ThemeFile.");t.includes("unified")&&(this.isValid=!1),this.name=t;}darkContent(){let t=/.dark\s?{(?<content>[^}]*)}/gm.exec(this.getInteriorContent());return t?t[1]:void 0}lightContent(){let t=/:root\s?{(?<content>[^}]*)}/gm.exec(this.getInteriorContent());return t?t[1]:void 0}getInteriorContent(){let e=[],t=this.content.split(`
`),i=!1;for(let n of t)i&&e.push(n),n.trim()==="@layer base {"&&(i=!0);return e.slice(0,e.map(n=>n.trim()).lastIndexOf("}")).join(`
`)}getUnifiedContent(){return `html[data-ulld-theme="${this.name}"] {
${this.lightContent()}
.dark:not(.light *),
&.dark {
       ${this.darkContent()}
}
}
`}};

exports.a = r;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-4V3S5RHE.cjs.map