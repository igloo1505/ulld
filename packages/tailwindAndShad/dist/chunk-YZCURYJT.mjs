import o from"fs";var r=class{constructor(e){this.file=e;var n;this.content=o.readFileSync(e,{encoding:"utf-8"});let t=(n=e.split("/").at(-1))==null?void 0:n.split(".")[0];if(!t)throw new Error("No name found in ThemeFile.");t.includes("unified")&&(this.isValid=!1),this.name=t}content;name;isValid=!0;darkContent(){let t=/.dark\s?{(?<content>[^}]*)}/gm.exec(this.getInteriorContent());return t?t[1]:void 0}lightContent(){let t=/:root\s?{(?<content>[^}]*)}/gm.exec(this.getInteriorContent());return t?t[1]:void 0}getInteriorContent(){let e=[],t=this.content.split(`
`),n=!1;for(let i of t)n&&e.push(i),i.trim()==="@layer base {"&&(n=!0);return e.slice(0,e.map(i=>i.trim()).lastIndexOf("}")).join(`
`)}getUnifiedContent(){return`html[data-ulld-theme="${this.name}"] {
${this.lightContent()}
.dark:not(.light *),
&.dark {
       ${this.darkContent()}
}
}
`}};export{r as a};
//# sourceMappingURL=chunk-YZCURYJT.mjs.map