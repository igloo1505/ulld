"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAB22ZO5Scjs = require('./chunk-AB22ZO5S.cjs');


var _chunkF5EPMKX4cjs = require('./chunk-F5EPMKX4.cjs');


var _chunkMGQZW2V6cjs = require('./chunk-MGQZW2V6.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SequentialNoteListOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var SequentialNoteListOrderByWithRelationInputSchema = _zod.z.object({
  sequentialKey: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  MdxNote: _zod.z.lazy(() => _chunkMGQZW2V6cjs.MdxNoteOrderByRelationAggregateInputSchema).optional(),
  Ipynb: _zod.z.lazy(() => _chunkF5EPMKX4cjs.IpynbOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkAB22ZO5Scjs.SequentialNoteListOrderByRelevanceInputSchema).optional()
}).strict();
var SequentialNoteListOrderByWithRelationInputSchema_default = SequentialNoteListOrderByWithRelationInputSchema;




exports.SequentialNoteListOrderByWithRelationInputSchema = SequentialNoteListOrderByWithRelationInputSchema; exports.SequentialNoteListOrderByWithRelationInputSchema_default = SequentialNoteListOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-3MFRRMX7.cjs.map