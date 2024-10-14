"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/WhiteboardCreateManyInputSchema.ts
var _zod = require('zod');
var WhiteboardCreateManyInputSchema = _zod.z.object({
  id: _zod.z.string(),
  data: _zod.z.instanceof(Buffer)
}).strict();
var WhiteboardCreateManyInputSchema_default = WhiteboardCreateManyInputSchema;




exports.WhiteboardCreateManyInputSchema = WhiteboardCreateManyInputSchema; exports.WhiteboardCreateManyInputSchema_default = WhiteboardCreateManyInputSchema_default;
//# sourceMappingURL=chunk-4ZDGSQT2.cjs.map