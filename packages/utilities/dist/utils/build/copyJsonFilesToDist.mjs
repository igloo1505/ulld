"use client"
import '../../chunk-T7KECS5U.mjs';
import { globSync } from 'glob';
import n from 'fs';
import c from 'path';

var p=(e,i="src/**/*.json",r)=>{r||(r=globSync(i,{cwd:e,nodir:!0}));for(let s of r)n.cpSync(c.join(e,s),c.join(e,s.replace("src/","dist/")));},l=e=>{let i=n.readFileSync(e,{encoding:"utf-8"});n.writeFileSync(e,`"use client"
${i}`,{encoding:"utf-8"});},m=async(e,i)=>{globSync("**/*.{tsx,ts}",{cwd:c.join(e,"src"),nodir:!0,absolute:!0,ignore:i}).forEach(s=>{let t={cjs:s.replace("/src/","/dist/").replace(/\.tsx?/,".cjs"),esm:s.replace("/src/","/dist/").replace(/\.tsx?/,".mjs")};n.existsSync(t.cjs)||(console.error(`Could not find dist path ${t.cjs}`),process.exit()),n.existsSync(t.esm)||(console.error(`Could not find dist path ${t.esm}`),process.exit());let o=n.readFileSync(s,{encoding:"utf-8"});(o.includes('"use client"')||o.includes("'use client'"))&&(l(t.cjs),l(t.esm));}),p(__dirname);};

export { p as copyJsonFilesToDist, m as prependDirectives };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyJsonFilesToDist.mjs.map