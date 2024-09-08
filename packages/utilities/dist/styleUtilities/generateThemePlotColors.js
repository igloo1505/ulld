import { a } from '../chunk-FM4IUWAP.js';
import { b, a as a$1 } from '../chunk-5WT32FJO.js';
import m from 'path';
import { globSync } from 'glob';
import C from 'fs';
import T from 'coloring-palette';

var i=class extends a{constructor(o){super(o,!1);a$1(this,"path");this.path=o;}getJsonContent(){return this.throwIfNotExists(),JSON.parse(this.getContent())}writeContent(o,e=2){let t=o||this.content;if(!t)throw new Error("Cannot write content. No content was found.");typeof t=="object"&&(t=JSON.stringify(t,null,e)),C.writeFileSync(this.path,t,{encoding:"utf-8"});}};var h=r=>r.replace("hsl(","").replace(")","").split(",").map(n=>n.trim()).join(" "),g=(r,n="hsl")=>{let o=T(r,n),e=[];for(let t in o)e.push({color:h(o[t].color),foreground:h(o[t].contrastText)});return e},k=()=>{let r=process.env.ULLD_DEV_ROOT;if(!r)throw new Error("No dev root env variable found. Can not continue writing theme colors.");let n=m.join(r,"packages/tailwindAndShad/src/shad/defaultThemes/colorMaps"),o=globSync("*.json",{cwd:n,absolute:!0}).filter(t=>!t.includes("-raw")).map(t=>new i(t)),e={};for(let t of o){let a=t.getJsonContent(),s={light:a.light.primary,dark:a.dark.primary},d={light:g(s.light),dark:g(s.dark)},p=t.getFileName();e[p]=d;}C.writeFileSync(m.join(b,"./themeColorGradients.json"),JSON.stringify(e,null,4),{encoding:"utf-8"});};k();
//# sourceMappingURL=out.js.map
//# sourceMappingURL=generateThemePlotColors.js.map