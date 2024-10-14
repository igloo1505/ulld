"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/DJTSchema.ts
var _zod = require('zod');
var DJTSchema = _zod.z.object({
  id: _zod.z.number().int(),
  type: _zod.z.string(),
  data: _zod.z.instanceof(Buffer)
});
var DJTPartialSchema = DJTSchema.partial();
var DJTSchema_default = DJTSchema;





exports.DJTSchema = DJTSchema; exports.DJTPartialSchema = DJTPartialSchema; exports.DJTSchema_default = DJTSchema_default;
//# sourceMappingURL=chunk-ZDAFREXY.cjs.map