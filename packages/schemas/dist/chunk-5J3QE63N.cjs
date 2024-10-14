"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/modelSchema/WhiteboardSchema.ts
var _zod = require('zod');
var WhiteboardSchema = _zod.z.object({
  id: _zod.z.string(),
  data: _zod.z.instanceof(Buffer)
});
var WhiteboardPartialSchema = WhiteboardSchema.partial();
var WhiteboardSchema_default = WhiteboardSchema;





exports.WhiteboardSchema = WhiteboardSchema; exports.WhiteboardPartialSchema = WhiteboardPartialSchema; exports.WhiteboardSchema_default = WhiteboardSchema_default;
//# sourceMappingURL=chunk-5J3QE63N.cjs.map