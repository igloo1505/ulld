'use strict';

var e=async(r,o)=>{try{return await navigator.clipboard.writeText(r),o&&o({description:"Copied successfully!"}),!0}catch(t){return console.error("Failed to copy: ",t),!1}};

exports.a = e;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-7OTSCMOU.cjs.map