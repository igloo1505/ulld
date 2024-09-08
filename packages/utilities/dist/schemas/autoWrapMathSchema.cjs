'use strict';

var chunkEVHGLAPJ_cjs = require('../chunk-EVHGLAPJ.cjs');
require('../chunk-7ARU3YXQ.cjs');
var zod = require('zod');

var o=zod.z.string().transform(r=>chunkEVHGLAPJ_cjs.d(r,!1)),e=zod.z.string().transform(r=>chunkEVHGLAPJ_cjs.d(r,!0)),l=zod.z.string().transform(r=>r&&chunkEVHGLAPJ_cjs.d(r,!1)),a=zod.z.string().transform(r=>r&&chunkEVHGLAPJ_cjs.d(r,!0));

exports.autoWrapMathDisplayField = e;
exports.autoWrapMathDisplayNullishField = a;
exports.autoWrapMathInlineField = o;
exports.autoWrapMathInlineNullishField = l;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=autoWrapMathSchema.cjs.map