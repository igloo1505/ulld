import '../chunk-GQSCBKA6.js';
import { NextResponse } from 'next/server';

var n=(e,t=200)=>{let o=e.headers.get("origin")||"*";return {status:t,headers:{"Access-Control-Allow-Origin":o,"Content-Type":"application/json","Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS","Access-Control-Allow-Headers":"Content-Type, Authorization"}}},i=async(e,t)=>new NextResponse(null,n(e));

export { n as getCorsHeaders, i as optionsMethodResponse };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=cors.js.map