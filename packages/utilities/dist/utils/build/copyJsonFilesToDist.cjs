"use client"
'use strict';

require('../../chunk-7ARU3YXQ.cjs');
var glob = require('glob');
var n = require('fs');
var c = require('path');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var n__default = /*#__PURE__*/_interopDefault(n);
var c__default = /*#__PURE__*/_interopDefault(c);

var p=(e,i="src/**/*.json",r)=>{r||(r=glob.globSync(i,{cwd:e,nodir:!0}));for(let s of r)n__default.default.cpSync(c__default.default.join(e,s),c__default.default.join(e,s.replace("src/","dist/")));},l=e=>{let i=n__default.default.readFileSync(e,{encoding:"utf-8"});n__default.default.writeFileSync(e,`"use client"
${i}`,{encoding:"utf-8"});},m=async(e,i)=>{glob.globSync("**/*.{tsx,ts}",{cwd:c__default.default.join(e,"src"),nodir:!0,absolute:!0,ignore:i}).forEach(s=>{let t={cjs:s.replace("/src/","/dist/").replace(/\.tsx?/,".cjs"),esm:s.replace("/src/","/dist/").replace(/\.tsx?/,".mjs")};n__default.default.existsSync(t.cjs)||(console.error(`Could not find dist path ${t.cjs}`),process.exit()),n__default.default.existsSync(t.esm)||(console.error(`Could not find dist path ${t.esm}`),process.exit());let o=n__default.default.readFileSync(s,{encoding:"utf-8"});(o.includes('"use client"')||o.includes("'use client'"))&&(l(t.cjs),l(t.esm));}),p(__dirname);};

exports.copyJsonFilesToDist = p;
exports.prependDirectives = m;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyJsonFilesToDist.cjs.map