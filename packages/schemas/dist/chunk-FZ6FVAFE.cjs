"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/TagCreateManyInputSchema.ts
var _zod = require('zod');
var TagCreateManyInputSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var TagCreateManyInputSchema_default = TagCreateManyInputSchema;




exports.TagCreateManyInputSchema = TagCreateManyInputSchema; exports.TagCreateManyInputSchema_default = TagCreateManyInputSchema_default;
//# sourceMappingURL=chunk-FZ6FVAFE.cjs.map