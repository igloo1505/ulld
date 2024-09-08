import { a } from '../../chunk-NSQWXKMX.js';
import '../../chunk-GQSCBKA6.js';
import p from 'path';
import c from 'fs';

var u=(t,o,n=!1,a)=>p.join(a||process.cwd(),"generatedMarkdown","componentDocs",n?"full":"short",encodeURI(t),`${encodeURI(o)}.mdx`),D=t=>{let o=new URLSearchParams;return t.tag&&(Array.isArray(t.tag)?t.tag:[t.tag]).forEach(n=>o.append("tag",n)),t.full&&o.set("full","true"),t.query&&o.set("query",t.query),t.syntax&&o.set("syntax",t.syntax),t.pluginId&&o.set("pluginId",t.pluginId),`/componentDocs?${o.toString()}`},l=(t,o=!1)=>u(t.pluginName,t.componentName,o),i=async(t,o=!1)=>{let n=l(t,o);if(!(!n||!c.existsSync(n)))return await c.promises.readFile(n,{encoding:"utf-8"})},y=(t,o)=>new a().queryAll(t.componentDocs,o),x=async(t,o,n,a=!1,m=!0)=>{let r=t.componentDocs.find(e=>e.pluginName===o&&e.componentName===n);if(r){let e=await i(r,a);return !e&&m&&(e=await i(r,!a)),{item:r,content:e}}};

export { D as componentDocQueryObjectToUrl, u as componentDocsPathFromPluginComponent, l as docItemToComponentDocsFilePath, i as getComponentDocsContentFromItem, y as getItemsByQuery, x as getPluginDocContentByIds };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=componentDocPathUtils.js.map