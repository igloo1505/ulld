'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var chunkKVSOEVQP_cjs = require('../../chunk-KVSOEVQP.cjs');
var ink = require('ink');
var pastel = require('pastel');
var s = require('react');
var zod = require('zod');
var glob = require('glob');
var r = require('path');
var b = require('log-symbols');
var h = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var s__default = /*#__PURE__*/_interopDefault(s);
var r__default = /*#__PURE__*/_interopDefault(r);
var b__default = /*#__PURE__*/_interopDefault(b);
var h__default = /*#__PURE__*/_interopDefault(h);

var v=zod.z.tuple([zod.z.string().default(".").describe(pastel.argument({name:"path",description:"Directory at which tunnel file should be created",defaultValueDescription:"cwd"})),zod.z.string().default(".js").describe(pastel.argument({name:"file extension",description:"File extension to append to imported file paths."}))]),z=zod.z.object({exclude:zod.z.string().array().optional().describe(pastel.option({description:"File globs to exclude from generated tunnel file.",alias:"x"})),glob:zod.z.string().default("**/*.{ts,tsx}").describe("Glob with which to find files to include"),asType:zod.z.boolean().describe(pastel.option({description:"Export everything as type"}))}),y=({exportedPath:e})=>s__default.default.createElement(ink.Box,{flexDirection:"row",justifyContent:"center",alignItems:"flex-start",gap:2,marginBottom:.1,paddingBottom:.1},s__default.default.createElement(ink.Text,{color:chunkKVSOEVQP_cjs.a},b__default.default.success),s__default.default.createElement(ink.Text,null,e)),w=(e,n,l,i)=>{if(!i){let a=r__default.default.parse(e);e=r__default.default.join(a.dir,`${a.name}${l}`);}let t=r__default.default.relative(r__default.default.dirname(n),e);return t.startsWith(".")||(t=t.startsWith("/")?`.${t}`:`./${t}`),i?`export type * from "${t}";`:`export * from "${t}";`},x=({args:e,options:n})=>{let l=r__default.default.isAbsolute(e[0])?e[0]:r__default.default.resolve(process.cwd(),e[0]),i=glob.globSync(n.glob,{cwd:l,nodir:!0,absolute:!0,ignore:[...n.exclude||[],"index.ts"]}),t=r__default.default.join(l,"index.ts"),a=i.map(p=>w(p,t,e[1],n.asType)).join(`
`);return h__default.default.writeFileSync(t,a,{encoding:"utf-8"}),s__default.default.createElement(ink.Box,{flexDirection:"column",justifyContent:"center",alignItems:"flex-start"},i.map(p=>s__default.default.createElement(y,{exportedPath:p,key:p})))};x.displayName="GenerateTunnelFile";var C=x;

exports.args = v;
exports.default = C;
exports.options = z;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.cjs.map