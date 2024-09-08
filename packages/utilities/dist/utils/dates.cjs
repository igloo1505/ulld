'use strict';

var zod = require('zod');

// src/utils/dates.ts
var dateZodProperty = zod.z.union([zod.z.string(), zod.z.date()]).transform((d) => new Date(d));
var dateNullableZodProperty = zod.z.union([zod.z.string(), zod.z.date()]).nullish().transform((d) => d ? new Date(d) : d);

exports.dateNullableZodProperty = dateNullableZodProperty;
exports.dateZodProperty = dateZodProperty;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=dates.cjs.map