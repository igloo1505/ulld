"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7QDGTUEQcjs = require('./chunk-7QDGTUEQ.cjs');

// src/database/inputTypeSchemas/NoteTypeWhereUniqueInputSchema.ts
var _zod = require('zod');
var NoteTypeWhereUniqueInputSchema = _zod.z.object({
  name: _zod.z.string()
}).and(_zod.z.object({
  name: _zod.z.string().optional(),
  AND: _zod.z.union([_zod.z.lazy(() => _chunk7QDGTUEQcjs.NoteTypeWhereInputSchema), _zod.z.lazy(() => _chunk7QDGTUEQcjs.NoteTypeWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => _chunk7QDGTUEQcjs.NoteTypeWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => _chunk7QDGTUEQcjs.NoteTypeWhereInputSchema), _zod.z.lazy(() => _chunk7QDGTUEQcjs.NoteTypeWhereInputSchema).array()]).optional()
}).strict());
var NoteTypeWhereUniqueInputSchema_default = NoteTypeWhereUniqueInputSchema;




exports.NoteTypeWhereUniqueInputSchema = NoteTypeWhereUniqueInputSchema; exports.NoteTypeWhereUniqueInputSchema_default = NoteTypeWhereUniqueInputSchema_default;
//# sourceMappingURL=chunk-CEHTDISD.cjs.map