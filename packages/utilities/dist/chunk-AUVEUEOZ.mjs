var o=e=>e.noteTypes.sort((t,s)=>s.fs.length-t.fs.length).map(t=>({...t,fs:t.fs.startsWith("/")?t.fs.slice(1):t.fs})),a=(e,t,s)=>(s||o(t)).find(n=>e.includes(n.fs));

export { o as a, a as b };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-AUVEUEOZ.mjs.map