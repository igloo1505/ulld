import { a as a$1 } from './chunk-D3DDP6NH.mjs';
import { a } from './chunk-IPKN6IIB.mjs';

var r=class extends a{constructor(o){super(o);}clear(){this.initialContent="";}getSeperatedInputs(o){let e={prefix:[],body:[],suffix:[],locationComments:[]};for(let t of o)a$1.prefix.includes(t.fnc)?e.prefix.push(t):a$1.suffix.includes(t.fnc)?e.suffix.push(t):a$1.locationComments.includes(t.fnc)?e.locationComments.push(t):e.body.push(t);return e}genFileContent(o,e){let t=this.getSeperatedInputs(o);for(let n of t.body){let i=this[n.fnc](n.props);this.initialContent+=`

${i}`;}for(let n of t.prefix){let i=this[n.fnc](n.props);this.initialContent=`${i}
${this.initialContent}`;}for(let n of t.suffix){let i=this[n.fnc](n.props);this.initialContent+=`

${i}`;}for(let n of t.locationComments){let i=this[n.fnc](n.props);this.initialContent=`${i}

${this.initialContent}`;}return this.outputToFile(this.initialContent,e),this.initialContent}};

export { r as a };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ZYIASHDL.mjs.map