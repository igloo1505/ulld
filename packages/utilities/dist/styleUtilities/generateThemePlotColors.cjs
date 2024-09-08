'use strict';

var chunkMNKUZT5W_cjs = require('../chunk-MNKUZT5W.cjs');
var chunk7ARU3YXQ_cjs = require('../chunk-7ARU3YXQ.cjs');
var f = require('path');
var glob = require('glob');
var p = require('fs');
var w = require('coloring-palette');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var f__default = /*#__PURE__*/_interopDefault(f);
var p__default = /*#__PURE__*/_interopDefault(p);
var w__default = /*#__PURE__*/_interopDefault(w);

var i=class extends chunkMNKUZT5W_cjs.a{constructor(o){super(o,!1);chunk7ARU3YXQ_cjs.a(this,"path");this.path=o;}getJsonContent(){return this.throwIfNotExists(),JSON.parse(this.getContent())}writeContent(o,e=2){let t=o||this.content;if(!t)throw new Error("Cannot write content. No content was found.");typeof t=="object"&&(t=JSON.stringify(t,null,e)),p__default.default.writeFileSync(this.path,t,{encoding:"utf-8"});}};var m=r=>r.replace("hsl(","").replace(")","").split(",").map(n=>n.trim()).join(" "),h=(r,n="hsl")=>{let o=w__default.default(r,n),e=[];for(let t in o)e.push({color:m(o[t].color),foreground:m(o[t].contrastText)});return e},y=()=>{let r=process.env.ULLD_DEV_ROOT;if(!r)throw new Error("No dev root env variable found. Can not continue writing theme colors.");let n=f__default.default.join(r,"packages/tailwindAndShad/src/shad/defaultThemes/colorMaps"),o=glob.globSync("*.json",{cwd:n,absolute:!0}).filter(t=>!t.includes("-raw")).map(t=>new i(t)),e={};for(let t of o){let l=t.getJsonContent(),a={light:l.light.primary,dark:l.dark.primary},d={light:h(a.light),dark:h(a.dark)},g=t.getFileName();e[g]=d;}p__default.default.writeFileSync(f__default.default.join(__dirname,"./themeColorGradients.json"),JSON.stringify(e,null,4),{encoding:"utf-8"});};y();
//# sourceMappingURL=out.js.map
//# sourceMappingURL=generateThemePlotColors.cjs.map