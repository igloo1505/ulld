import { a } from '../../chunk-AKBRSWKU.mjs';
import '../../chunk-T7KECS5U.mjs';
import u from 'path';
import c from 'fs';

var m=(t,n,o=!1,r)=>u.join(r||process.cwd(),"generatedMarkdown","componentDocs",o?"full":"short",encodeURI(t),`${encodeURI(n)}.mdx`),D=t=>{let n=new URLSearchParams;return t.tag&&(Array.isArray(t.tag)?t.tag:[t.tag]).forEach(o=>{n.append("tag",o);}),t.full&&n.set("full","true"),t.query&&n.set("query",t.query),t.syntax&&n.set("syntax",t.syntax),t.pluginId&&n.set("pluginId",t.pluginId),`/componentDocs?${n.toString()}`},l=(t,n=!1)=>m(t.pluginName,t.componentName,n),i=async(t,n=!1)=>{let o=l(t,n);if(!(!o||!c.existsSync(o)))return c.promises.readFile(o,{encoding:"utf-8"})},y=(t,n)=>new a().queryAll(t.componentDocs,n),P=async(t,n,o,r=!1,p=!0)=>{let s=t.componentDocs.find(e=>e.pluginName===n&&e.componentName===o);if(s){let e=await i(s,r);return !e&&p&&(e=await i(s,!r)),{item:s,content:e}}};

export { D as componentDocQueryObjectToUrl, m as componentDocsPathFromPluginComponent, l as docItemToComponentDocsFilePath, i as getComponentDocsContentFromItem, y as getItemsByQuery, P as getPluginDocContentByIds };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=componentDocPathUtils.mjs.map