"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/NoteTypeWhereInputSchema.ts
var _zod = require('zod');
var NoteTypeWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => NoteTypeWhereInputSchema), _zod.z.lazy(() => NoteTypeWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => NoteTypeWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => NoteTypeWhereInputSchema), _zod.z.lazy(() => NoteTypeWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional()
}).strict();
var NoteTypeWhereInputSchema_default = NoteTypeWhereInputSchema;




exports.NoteTypeWhereInputSchema = NoteTypeWhereInputSchema; exports.NoteTypeWhereInputSchema_default = NoteTypeWhereInputSchema_default;
//# sourceMappingURL=chunk-7QDGTUEQ.cjs.map