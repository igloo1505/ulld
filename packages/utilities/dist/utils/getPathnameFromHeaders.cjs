'use strict';

require('../chunk-7ARU3YXQ.cjs');
var headers = require('next/headers');

var s=()=>{let e=headers.headers().get("x-url"),t=e?.indexOf("?");return e&&t&&t>-1&&(e=e.slice(0,t)),e};

exports.getPathnameFromHeaders = s;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getPathnameFromHeaders.cjs.map