"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/TopicCreateManyInputSchema.ts
var _zod = require('zod');
var TopicCreateManyInputSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastAccess: _zod.z.coerce.date().optional()
}).strict();
var TopicCreateManyInputSchema_default = TopicCreateManyInputSchema;




exports.TopicCreateManyInputSchema = TopicCreateManyInputSchema; exports.TopicCreateManyInputSchema_default = TopicCreateManyInputSchema_default;
//# sourceMappingURL=chunk-LIXG55FJ.cjs.map