"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DJTSelectSchema.ts
var _zod = require('zod');
var DJTSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  type: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var DJTSelectSchema_default = DJTSelectSchema;



exports.DJTSelectSchema = DJTSelectSchema; exports.default = DJTSelectSchema_default;
//# sourceMappingURL=DJTSelectSchema.cjs.map