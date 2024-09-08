'use strict';

var headers = require('next/headers');

// src/utils/getPathnameFromHeaders.ts
var getPathnameFromHeaders = () => {
  const headerList = headers.headers();
  let pathname = headerList.get("x-url");
  let pindex = pathname?.indexOf("?");
  if (pathname && pindex && pindex > -1) {
    pathname = pathname.slice(0, pindex);
  }
  return pathname;
};

exports.getPathnameFromHeaders = getPathnameFromHeaders;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getPathnameFromHeaders.cjs.map