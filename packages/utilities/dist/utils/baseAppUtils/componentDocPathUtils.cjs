'use strict';

var chunkWVAQ6QHM_cjs = require('../../chunk-WVAQ6QHM.cjs');
require('../../chunk-7ARU3YXQ.cjs');
var p = require('path');
var c = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var p__default = /*#__PURE__*/_interopDefault(p);
var c__default = /*#__PURE__*/_interopDefault(c);

var u=(t,o,n=!1,a)=>p__default.default.join(a||process.cwd(),"generatedMarkdown","componentDocs",n?"full":"short",encodeURI(t),`${encodeURI(o)}.mdx`),y=t=>{let o=new URLSearchParams;return t.tag&&(Array.isArray(t.tag)?t.tag:[t.tag]).forEach(n=>o.append("tag",n)),t.full&&o.set("full","true"),t.query&&o.set("query",t.query),t.syntax&&o.set("syntax",t.syntax),t.pluginId&&o.set("pluginId",t.pluginId),`/componentDocs?${o.toString()}`},l=(t,o=!1)=>u(t.pluginName,t.componentName,o),i=async(t,o=!1)=>{let n=l(t,o);if(!(!n||!c__default.default.existsSync(n)))return await c__default.default.promises.readFile(n,{encoding:"utf-8"})},x=(t,o)=>new chunkWVAQ6QHM_cjs.a().queryAll(t.componentDocs,o),C=async(t,o,n,a=!1,m=!0)=>{let r=t.componentDocs.find(e=>e.pluginName===o&&e.componentName===n);if(r){let e=await i(r,a);return !e&&m&&(e=await i(r,!a)),{item:r,content:e}}};

exports.componentDocQueryObjectToUrl = y;
exports.componentDocsPathFromPluginComponent = u;
exports.docItemToComponentDocsFilePath = l;
exports.getComponentDocsContentFromItem = i;
exports.getItemsByQuery = x;
exports.getPluginDocContentByIds = C;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=componentDocPathUtils.cjs.map