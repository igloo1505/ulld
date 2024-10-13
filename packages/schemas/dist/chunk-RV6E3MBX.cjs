"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOYCJHDTMcjs = require('./chunk-OYCJHDTM.cjs');

// src/database/inputTypeSchemas/SequentialNoteListScalarWhereWithAggregatesInputSchema.ts
var _zod = require('zod');
var SequentialNoteListScalarWhereWithAggregatesInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema), _zod.z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema).array()]).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunkOYCJHDTMcjs.StringWithAggregatesFilterSchema), _zod.z.string()]).optional()
}).strict();
var SequentialNoteListScalarWhereWithAggregatesInputSchema_default = SequentialNoteListScalarWhereWithAggregatesInputSchema;




exports.SequentialNoteListScalarWhereWithAggregatesInputSchema = SequentialNoteListScalarWhereWithAggregatesInputSchema; exports.SequentialNoteListScalarWhereWithAggregatesInputSchema_default = SequentialNoteListScalarWhereWithAggregatesInputSchema_default;
//# sourceMappingURL=chunk-RV6E3MBX.cjs.map