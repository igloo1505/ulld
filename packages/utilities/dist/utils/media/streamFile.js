import '../../chunk-5WT32FJO.js';
import o from 'fs';

var d=(n,a)=>{let e=o.createReadStream(n,a);return new ReadableStream({start(r){e.on("data",t=>r.enqueue(new Uint8Array(t))),e.on("end",()=>r.close()),e.on("error",t=>r.error(t));},cancel(){e.destroy();},type:"bytes"})};

export { d as streamFile };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=streamFile.js.map