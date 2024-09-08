'use strict';

require('../chunk-7ARU3YXQ.cjs');
var server = require('next/server');

var n=(e,t=200)=>{let o=e.headers.get("origin")||"*";return {status:t,headers:{"Access-Control-Allow-Origin":o,"Content-Type":"application/json","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization"}}},u=async(e,t)=>new server.NextResponse(null,n(e));

exports.getCorsHeaders = n;
exports.optionsMethodResponse = u;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=cors.cjs.map