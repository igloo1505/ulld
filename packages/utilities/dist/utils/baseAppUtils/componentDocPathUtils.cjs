'use strict';

var chunkOCYNHVYZ_cjs = require('../../chunk-OCYNHVYZ.cjs');
require('../../chunk-7ARU3YXQ.cjs');
var u = require('path');
var c = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var u__default = /*#__PURE__*/_interopDefault(u);
var c__default = /*#__PURE__*/_interopDefault(c);

var m=(t,n,o=!1,r)=>u__default.default.join(r||process.cwd(),"generatedMarkdown","componentDocs",o?"full":"short",encodeURI(t),`${encodeURI(n)}.mdx`),D=t=>{let n=new URLSearchParams;return t.tag&&(Array.isArray(t.tag)?t.tag:[t.tag]).forEach(o=>{n.append("tag",o);}),t.full&&n.set("full","true"),t.query&&n.set("query",t.query),t.syntax&&n.set("syntax",t.syntax),t.pluginId&&n.set("pluginId",t.pluginId),`/componentDocs?${n.toString()}`},l=(t,n=!1)=>m(t.pluginName,t.componentName,n),i=async(t,n=!1)=>{let o=l(t,n);if(!(!o||!c__default.default.existsSync(o)))return c__default.default.promises.readFile(o,{encoding:"utf-8"})},y=(t,n)=>new chunkOCYNHVYZ_cjs.a().queryAll(t.componentDocs,n),P=async(t,n,o,r=!1,p=!0)=>{let s=t.componentDocs.find(e=>e.pluginName===n&&e.componentName===o);if(s){let e=await i(s,r);return !e&&p&&(e=await i(s,!r)),{item:s,content:e}}};

exports.componentDocQueryObjectToUrl = D;
exports.componentDocsPathFromPluginComponent = m;
exports.docItemToComponentDocsFilePath = l;
exports.getComponentDocsContentFromItem = i;
exports.getItemsByQuery = y;
exports.getPluginDocContentByIds = P;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=componentDocPathUtils.cjs.map