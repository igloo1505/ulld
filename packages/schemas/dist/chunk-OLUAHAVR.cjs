"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVQRAAPQNcjs = require('./chunk-VQRAAPQN.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/NoteTypeOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var NoteTypeOrderByWithRelationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkVQRAAPQNcjs.NoteTypeOrderByRelevanceInputSchema).optional()
}).strict();
var NoteTypeOrderByWithRelationInputSchema_default = NoteTypeOrderByWithRelationInputSchema;




exports.NoteTypeOrderByWithRelationInputSchema = NoteTypeOrderByWithRelationInputSchema; exports.NoteTypeOrderByWithRelationInputSchema_default = NoteTypeOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-OLUAHAVR.cjs.map