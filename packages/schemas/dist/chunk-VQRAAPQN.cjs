"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHKWLCEMZcjs = require('./chunk-HKWLCEMZ.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/NoteTypeOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var NoteTypeOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkHKWLCEMZcjs.NoteTypeOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkHKWLCEMZcjs.NoteTypeOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var NoteTypeOrderByRelevanceInputSchema_default = NoteTypeOrderByRelevanceInputSchema;




exports.NoteTypeOrderByRelevanceInputSchema = NoteTypeOrderByRelevanceInputSchema; exports.NoteTypeOrderByRelevanceInputSchema_default = NoteTypeOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-VQRAAPQN.cjs.map