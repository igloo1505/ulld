"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMSREU6ITcjs = require('./chunk-MSREU6IT.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SequentialNoteListOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var SequentialNoteListOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkMSREU6ITcjs.SequentialNoteListOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkMSREU6ITcjs.SequentialNoteListOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var SequentialNoteListOrderByRelevanceInputSchema_default = SequentialNoteListOrderByRelevanceInputSchema;




exports.SequentialNoteListOrderByRelevanceInputSchema = SequentialNoteListOrderByRelevanceInputSchema; exports.SequentialNoteListOrderByRelevanceInputSchema_default = SequentialNoteListOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-P3OK7LHN.cjs.map