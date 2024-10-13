"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/database/inputTypeSchemas/ReadingListCreateManyInputSchema.ts
var _zod = require('zod');
var ReadingListCreateManyInputSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().optional().nullable(),
  createdAt: _zod.z.coerce.date().optional(),
  lastUpdate: _zod.z.coerce.date().optional()
}).strict();
var ReadingListCreateManyInputSchema_default = ReadingListCreateManyInputSchema;




exports.ReadingListCreateManyInputSchema = ReadingListCreateManyInputSchema; exports.ReadingListCreateManyInputSchema_default = ReadingListCreateManyInputSchema_default;
//# sourceMappingURL=chunk-NXJ5MDHB.cjs.map