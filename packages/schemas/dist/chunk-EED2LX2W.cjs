"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDMSS7TGLcjs = require('./chunk-DMSS7TGL.cjs');


var _chunkLQIGFUZZcjs = require('./chunk-LQIGFUZZ.cjs');


var _chunkMHUGOAQScjs = require('./chunk-MHUGOAQS.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SequentialNoteListOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var SequentialNoteListOrderByWithAggregationInputSchema = _zod.z.object({
  sequentialKey: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkDMSS7TGLcjs.SequentialNoteListCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkMHUGOAQScjs.SequentialNoteListMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkLQIGFUZZcjs.SequentialNoteListMinOrderByAggregateInputSchema).optional()
}).strict();
var SequentialNoteListOrderByWithAggregationInputSchema_default = SequentialNoteListOrderByWithAggregationInputSchema;




exports.SequentialNoteListOrderByWithAggregationInputSchema = SequentialNoteListOrderByWithAggregationInputSchema; exports.SequentialNoteListOrderByWithAggregationInputSchema_default = SequentialNoteListOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-EED2LX2W.cjs.map