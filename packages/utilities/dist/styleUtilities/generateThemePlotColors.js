import { a } from '../chunk-2NPKUNYW.js';
import { a as a$1 } from '../chunk-GQSCBKA6.js';
import f from 'path';
import { globSync } from 'glob';
import p from 'fs';
import w from 'coloring-palette';

var i=class extends a{constructor(o){super(o,!1);a$1(this,"path");this.path=o;}getJsonContent(){return this.throwIfNotExists(),JSON.parse(this.getContent())}writeContent(o,e=2){let t=o||this.content;if(!t)throw new Error("Cannot write content. No content was found.");typeof t=="object"&&(t=JSON.stringify(t,null,e)),p.writeFileSync(this.path,t,{encoding:"utf-8"});}};var m=r=>r.replace("hsl(","").replace(")","").split(",").map(n=>n.trim()).join(" "),h=(r,n="hsl")=>{let o=w(r,n),e=[];for(let t in o)e.push({color:m(o[t].color),foreground:m(o[t].contrastText)});return e},y=()=>{let r=process.env.ULLD_DEV_ROOT;if(!r)throw new Error("No dev root env variable found. Can not continue writing theme colors.");let n=f.join(r,"packages/tailwindAndShad/src/shad/defaultThemes/colorMaps"),o=globSync("*.json",{cwd:n,absolute:!0}).filter(t=>!t.includes("-raw")).map(t=>new i(t)),e={};for(let t of o){let l=t.getJsonContent(),a={light:l.light.primary,dark:l.dark.primary},d={light:h(a.light),dark:h(a.dark)},g=t.getFileName();e[g]=d;}p.writeFileSync(f.join(__dirname,"./themeColorGradients.json"),JSON.stringify(e,null,4),{encoding:"utf-8"});};y();
//# sourceMappingURL=out.js.map
//# sourceMappingURL=generateThemePlotColors.js.map