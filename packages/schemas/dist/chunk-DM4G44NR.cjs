"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DJTUncheckedCreateInputSchema.ts
var _zod = require('zod');
var DJTUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.number().int().optional(),
  type: _zod.z.string(),
  data: _zod.z.instanceof(Buffer)
}).strict();
var DJTUncheckedCreateInputSchema_default = DJTUncheckedCreateInputSchema;




exports.DJTUncheckedCreateInputSchema = DJTUncheckedCreateInputSchema; exports.DJTUncheckedCreateInputSchema_default = DJTUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-DM4G44NR.cjs.map