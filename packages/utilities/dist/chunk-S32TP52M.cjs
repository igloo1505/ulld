'use strict';

var o=e=>e.noteTypes.sort((t,s)=>s.fs.length-t.fs.length).map(t=>({...t,fs:t.fs.startsWith("/")?t.fs.slice(1):t.fs})),a=(e,t,s)=>(s||o(t)).find(n=>e.includes(n.fs));

exports.a = o;
exports.b = a;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-S32TP52M.cjs.map