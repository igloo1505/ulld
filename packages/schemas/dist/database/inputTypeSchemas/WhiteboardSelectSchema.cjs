"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/WhiteboardSelectSchema.ts
var _zod = require('zod');
var WhiteboardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  data: _zod.z.boolean().optional()
}).strict();
var WhiteboardSelectSchema_default = WhiteboardSelectSchema;



exports.WhiteboardSelectSchema = WhiteboardSelectSchema; exports.default = WhiteboardSelectSchema_default;
//# sourceMappingURL=WhiteboardSelectSchema.cjs.map