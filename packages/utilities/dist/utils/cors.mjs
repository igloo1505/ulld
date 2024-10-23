import '../chunk-T7KECS5U.mjs';
import { NextResponse } from 'next/server';

var n=(e,t=200)=>{let s=e.headers.get("origin")||"*";return {status:t,headers:{"Access-Control-Allow-Origin":s,"Content-Type":"application/json","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization"}}},i=async e=>new NextResponse(null,n(e));

export { n as getCorsHeaders, i as optionsMethodResponse };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=cors.mjs.map