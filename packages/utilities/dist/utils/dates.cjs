'use strict';

require('../chunk-7ARU3YXQ.cjs');
var zod = require('zod');

var n=zod.z.union([zod.z.string(),zod.z.date()]).transform(o=>new Date(o)),a=zod.z.union([zod.z.string(),zod.z.date()]).nullish().transform(o=>o&&new Date(o));

exports.dateNullableZodProperty = a;
exports.dateZodProperty = n;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=dates.cjs.map