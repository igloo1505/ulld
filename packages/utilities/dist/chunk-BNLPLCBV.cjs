'use strict';

var i=async(r,o)=>{try{return await navigator.clipboard.writeText(r),o&&o({description:"Copied successfully!"}),!0}catch(t){return console.error("Failed to copy: ",t),!1}};

exports.a = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-BNLPLCBV.cjs.map