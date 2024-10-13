"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/WhiteboardUncheckedCreateInputSchema.ts
var _zod = require('zod');
var WhiteboardUncheckedCreateInputSchema = _zod.z.object({
  id: _zod.z.string(),
  data: _zod.z.instanceof(Buffer)
}).strict();
var WhiteboardUncheckedCreateInputSchema_default = WhiteboardUncheckedCreateInputSchema;




exports.WhiteboardUncheckedCreateInputSchema = WhiteboardUncheckedCreateInputSchema; exports.WhiteboardUncheckedCreateInputSchema_default = WhiteboardUncheckedCreateInputSchema_default;
//# sourceMappingURL=chunk-VJWDJ55V.cjs.map