'use strict';

var chunkO4MUVT72_cjs = require('../chunk-O4MUVT72.cjs');
require('../chunk-7ARU3YXQ.cjs');

var c=e=>e.replaceAll(/\\|\:|\-|\=|\_/gm,"")[0],s=e=>e.equationId?"byEquation":e.sequentialId?"bySequentialId":e.tags&&e.tags.length?"byTag":"searchAll",n=e=>{let t=new URLSearchParams;if(!e)return t;if(e.query&&t.set("query",e.query),(e.page||typeof e.page=="number")&&t.set("page",e.page),e.tags)for(let a of chunkO4MUVT72_cjs.a.beArray(e.tags))t.append("tags",a);if(e.take&&t.set("take",e.take),e.remote&&t.set("remote","true"),e.topics)for(let a of chunkO4MUVT72_cjs.a.beArray(e.topics))t.append("topics",a);if(e.subjects)for(let a of chunkO4MUVT72_cjs.a.beArray(e.subjects))t.append("subjects",a);if(e.perPage&&t.set("perPage",e.perPage),e.tagRegex)for(let a of chunkO4MUVT72_cjs.a.beArray(e.tagRegex))t.append("tagRegex",a.source);if(e.citations)for(let a of chunkO4MUVT72_cjs.a.beArray(e.citations))t.append("citations",a);if(e.categories)for(let a of chunkO4MUVT72_cjs.a.beArray(e.categories))t.append("categories",a);return e.sequentialId&&t.set("sequentialId",e.sequentialId),e.equationId&&t.set("equationId",e.equationId),t},l=e=>({tags:e.tags||[],topics:e.topics||[],subjects:e.subjects||[]}),f=e=>{for(let t of e.keys())e.get(t)||e.delete(t);return e};

exports.clearNullSearchParams = f;
exports.getFirstLetterWithLatex = c;
exports.getSearchType = s;
exports.getTaggablesFromSearchAllParams = l;
exports.searchAllParamsToSearchParamsClass = n;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=searchUtils.cjs.map