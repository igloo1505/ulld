'use strict';

var chunkRFZI7GA2_cjs = require('../chunk-RFZI7GA2.cjs');
require('../chunk-7ARU3YXQ.cjs');
var zod = require('zod');

var e=zod.z.string().transform(r=>chunkRFZI7GA2_cjs.d(r,!1)),l=zod.z.string().transform(r=>chunkRFZI7GA2_cjs.d(r,!0)),a=zod.z.string().transform(r=>r&&chunkRFZI7GA2_cjs.d(r,!1)),p=zod.z.string().transform(r=>r&&chunkRFZI7GA2_cjs.d(r,!0));

exports.autoWrapMathDisplayField = l;
exports.autoWrapMathDisplayNullishField = p;
exports.autoWrapMathInlineField = e;
exports.autoWrapMathInlineNullishField = a;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=autoWrapMathSchema.cjs.map