import { a } from './chunk-RSVLPYAN.mjs';
import i from 'fs';

var o=class extends a{constructor(e){super(e,!1);this.path=e;}getJsonContent(){return this.throwIfNotExists(),JSON.parse(this.getContent())}writeContent(e,r=2){let t=e||this.content;if(!t)throw new Error("Cannot write content. No content was found.");typeof t=="object"&&(t=JSON.stringify(t,null,r)),i.writeFileSync(this.path,t,{encoding:"utf-8"});}};

export { o as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ZTGAGE6J.mjs.map