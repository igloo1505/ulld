"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/DietCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var DietCountOutputTypeSelectSchema = _zod.z.object({
  items: _zod.z.boolean().optional(),
  periodsFollowed: _zod.z.boolean().optional(),
  HealthReport: _zod.z.boolean().optional()
}).strict();
var DietCountOutputTypeSelectSchema_default = DietCountOutputTypeSelectSchema;




exports.DietCountOutputTypeSelectSchema = DietCountOutputTypeSelectSchema; exports.DietCountOutputTypeSelectSchema_default = DietCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-L6YL4IOB.cjs.map