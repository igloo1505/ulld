import '../chunk-F3FYYIAV.js';
import { NextResponse } from 'next/server';

var getCorsHeaders = (req, _status = 200) => {
  const origin = req.headers.get("origin") || "*";
  return {
    status: _status,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization"
    }
  };
};
var optionsMethodResponse = async (req, ctx) => {
  return new NextResponse(null, getCorsHeaders(req));
};

export { getCorsHeaders, optionsMethodResponse };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=cors.js.map