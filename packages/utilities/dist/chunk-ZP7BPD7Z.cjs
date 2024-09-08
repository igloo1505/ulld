'use strict';

var l=(e,r,t,o)=>{if(!r.groups)return console.log(`No groups were found for match ${r}`),e;let s=r.groups?.[t];if(console.log("match: ",r),!s)throw new Error(`An invalid match group was given to replaceContentByMatch. Looked for ${t} and found groups ${Object.keys(r.groups).join(", ")}`);return e.replaceAll(r[0],typeof o=="string"?o:o(s))};

exports.a = l;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-ZP7BPD7Z.cjs.map