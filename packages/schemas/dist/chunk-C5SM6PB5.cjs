"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOLN5KQBLcjs = require('./chunk-OLN5KQBL.cjs');

// src/database/inputTypeSchemas/NoteTypeWhereUniqueInputSchema.ts
var _zod = require('zod');
var NoteTypeWhereUniqueInputSchema = _zod.z.object({
  name: _zod.z.string()
}).and(_zod.z.object({
  name: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunkOLN5KQBLcjs.NoteTypeWhereInputSchema), _zod.z.lazy(() => _chunkOLN5KQBLcjs.NoteTypeWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunkOLN5KQBLcjs.NoteTypeWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunkOLN5KQBLcjs.NoteTypeWhereInputSchema), _zod.z.lazy(() => _chunkOLN5KQBLcjs.NoteTypeWhereInputSchema).array()]).optional()
}).strict());
var NoteTypeWhereUniqueInputSchema_default = NoteTypeWhereUniqueInputSchema;




exports.NoteTypeWhereUniqueInputSchema = NoteTypeWhereUniqueInputSchema; exports.NoteTypeWhereUniqueInputSchema_default = NoteTypeWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-C5SM6PB5.cjs.map