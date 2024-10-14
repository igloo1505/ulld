"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKVBHLHNPcjs = require('./chunk-KVBHLHNP.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SequentialNoteListOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var SequentialNoteListOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkKVBHLHNPcjs.SequentialNoteListOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkKVBHLHNPcjs.SequentialNoteListOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var SequentialNoteListOrderByRelevanceInputSchema_default = SequentialNoteListOrderByRelevanceInputSchema;




exports.SequentialNoteListOrderByRelevanceInputSchema = SequentialNoteListOrderByRelevanceInputSchema; exports.SequentialNoteListOrderByRelevanceInputSchema_default = SequentialNoteListOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-AB22ZO5S.cjs.map