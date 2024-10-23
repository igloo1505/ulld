'use strict';

require('../chunk-7ARU3YXQ.cjs');
var server = require('next/server');

var n=(e,t=200)=>{let s=e.headers.get("origin")||"*";return {status:t,headers:{"Access-Control-Allow-Origin":s,"Content-Type":"application/json","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization"}}},i=async e=>new server.NextResponse(null,n(e));

exports.getCorsHeaders = n;
exports.optionsMethodResponse = i;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=cors.cjs.map