import { a } from '../chunk-HMEKDG3R.js';
import '../chunk-GQSCBKA6.js';

var i=e=>e.replaceAll(/\\|\:|\-|\=|\_/gm,"")[0],c=e=>e.equationId?"byEquation":e.sequentialId?"bySequentialId":e.tags&&e.tags.length?"byTag":"searchAll",s=e=>{let t=new URLSearchParams;if(!e)return t;if(e.query&&t.set("query",e.query),(e.page||typeof e.page=="number")&&t.set("page",e.page),e.tags)for(let a$1 of a.beArray(e.tags))t.append("tags",a$1);if(e.take&&t.set("take",e.take),e.remote&&t.set("remote","true"),e.topics)for(let a$1 of a.beArray(e.topics))t.append("topics",a$1);if(e.subjects)for(let a$1 of a.beArray(e.subjects))t.append("subjects",a$1);if(e.perPage&&t.set("perPage",e.perPage),e.tagRegex)for(let a$1 of a.beArray(e.tagRegex))t.append("tagRegex",a$1.source);if(e.citations)for(let a$1 of a.beArray(e.citations))t.append("citations",a$1);if(e.categories)for(let a$1 of a.beArray(e.categories))t.append("categories",a$1);return e.sequentialId&&t.set("sequentialId",e.sequentialId),e.equationId&&t.set("equationId",e.equationId),t},n=e=>({tags:e.tags||[],topics:e.topics||[],subjects:e.subjects||[]}),l=e=>{for(let t of e.keys())e.get(t)||e.delete(t);return e};

export { l as clearNullSearchParams, i as getFirstLetterWithLatex, c as getSearchType, n as getTaggablesFromSearchAllParams, s as searchAllParamsToSearchParamsClass };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=searchUtils.js.map