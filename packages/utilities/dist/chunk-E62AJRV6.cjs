'use strict';

var r=e=>e.noteTypes.sort((t,o)=>o.fs.length-t.fs.length).map(t=>({...t,fs:t.fs.startsWith("/")?t.fs.slice(1):t.fs})),n=(e,t,o)=>(o||r(t)).find(p=>e.includes(p.fs));

exports.a = r;
exports.b = n;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-E62AJRV6.cjs.map