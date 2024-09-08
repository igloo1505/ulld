'use strict';

require('../chunk-7ARU3YXQ.cjs');
var zod = require('zod');

var e=zod.z.union([zod.z.string(),zod.z.date()]).transform(o=>new Date(o)),n=zod.z.union([zod.z.string(),zod.z.date()]).nullish().transform(o=>o&&new Date(o));

exports.dateNullableZodProperty = n;
exports.dateZodProperty = e;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=dates.cjs.map