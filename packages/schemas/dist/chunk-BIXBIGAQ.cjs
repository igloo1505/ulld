"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/NoteTypeScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var NoteTypeScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => NoteTypeScalarWhereWithAggregatesInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional()
}).strict();
var NoteTypeScalarWhereWithAggregatesInputSchema_default = NoteTypeScalarWhereWithAggregatesInputSchema;




exports.NoteTypeScalarWhereWithAggregatesInputSchema = NoteTypeScalarWhereWithAggregatesInputSchema; exports.NoteTypeScalarWhereWithAggregatesInputSchema_default = NoteTypeScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-BIXBIGAQ.cjs.map