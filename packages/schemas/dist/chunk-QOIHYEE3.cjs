"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/outputTypeSchemas/DietaryItemCountOutputTypeSelectSchema.ts
var _zod = require('zod');
var DietaryItemCountOutputTypeSelectSchema = _zod.z.object({
  Diet: _zod.z.boolean().optional(),
  Serving: _zod.z.boolean().optional()
}).strict();
var DietaryItemCountOutputTypeSelectSchema_default = DietaryItemCountOutputTypeSelectSchema;




exports.DietaryItemCountOutputTypeSelectSchema = DietaryItemCountOutputTypeSelectSchema; exports.DietaryItemCountOutputTypeSelectSchema_default = DietaryItemCountOutputTypeSelectSchema_default;
//# sourceMappingURL=chunk-QOIHYEE3.cjs.map