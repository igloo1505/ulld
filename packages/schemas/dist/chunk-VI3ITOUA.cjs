"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DJTCreateManyInputSchema.ts
var _zod = require('zod');
var DJTCreateManyInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  type: _zod.z.string(),
  data: _zod.z.instanceof(Buffer)
}).strict();
var DJTCreateManyInputSchema_default = DJTCreateManyInputSchema;




exports.DJTCreateManyInputSchema = DJTCreateManyInputSchema; exports.DJTCreateManyInputSchema_default = DJTCreateManyInputSchema_default;
//# sourceMappingURL=chunk-VI3ITOUA.cjs.map