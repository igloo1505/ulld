var r=e=>e.noteTypes.sort((t,o)=>o.fs.length-t.fs.length).map(t=>({...t,fs:t.fs.startsWith("/")?t.fs.slice(1):t.fs})),u=(e,t,o)=>(o||r(t)).find(p=>e.includes(p.fs));

export { r as a, u as b };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-4QFI5YHQ.js.map