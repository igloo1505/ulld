'use strict';

var server = require('next/server');

// src/utils/cors.ts
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
  return new server.NextResponse(null, getCorsHeaders(req));
};

exports.getCorsHeaders = getCorsHeaders;
exports.optionsMethodResponse = optionsMethodResponse;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=cors.cjs.map