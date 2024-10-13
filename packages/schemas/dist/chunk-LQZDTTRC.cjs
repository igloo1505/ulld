"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/CitationsGroupCreateManyInputSchema.ts
var _zod = require('zod');
var CitationsGroupCreateManyInputSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().optional().nullable()
}).strict();
var CitationsGroupCreateManyInputSchema_default = CitationsGroupCreateManyInputSchema;




exports.CitationsGroupCreateManyInputSchema = CitationsGroupCreateManyInputSchema; exports.CitationsGroupCreateManyInputSchema_default = CitationsGroupCreateManyInputSchema_default;
//# sourceMappingURL=chunk-LQZDTTRC.cjs.map