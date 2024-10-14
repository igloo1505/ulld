"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/DJTCreateInputSchema.ts
var _zod = require('zod');
var DJTCreateInputSchema = _zod.z.object({
  type: _zod.z.string(),
  data: _zod.z.instanceof(Buffer)
}).strict();
var DJTCreateInputSchema_default = DJTCreateInputSchema;




exports.DJTCreateInputSchema = DJTCreateInputSchema; exports.DJTCreateInputSchema_default = DJTCreateInputSchema_default;
//# sourceMappingURL=chunk-LHOF3EOR.cjs.map