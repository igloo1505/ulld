"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/WhiteboardCreateInputSchema.ts
var _zod = require('zod');
var WhiteboardCreateInputSchema = _zod.z.object({
  id: _zod.z.string(),
  data: _zod.z.instanceof(Buffer)
}).strict();
var WhiteboardCreateInputSchema_default = WhiteboardCreateInputSchema;




exports.WhiteboardCreateInputSchema = WhiteboardCreateInputSchema; exports.WhiteboardCreateInputSchema_default = WhiteboardCreateInputSchema_default;
//# sourceMappingURL=chunk-2OQNILCZ.cjs.map