"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIUCYH5KDcjs = require('./chunk-IUCYH5KD.cjs');


var _chunkIUYZ5AO5cjs = require('./chunk-IUYZ5AO5.cjs');


var _chunkQ2FZSAGLcjs = require('./chunk-Q2FZSAGL.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SequentialNoteListOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var SequentialNoteListOrderByWithAggregationInputSchema = _zod.z.object({
  sequentialKey: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkIUCYH5KDcjs.SequentialNoteListCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkQ2FZSAGLcjs.SequentialNoteListMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkIUYZ5AO5cjs.SequentialNoteListMinOrderByAggregateInputSchema).optional()
}).strict();
var SequentialNoteListOrderByWithAggregationInputSchema_default = SequentialNoteListOrderByWithAggregationInputSchema;




exports.SequentialNoteListOrderByWithAggregationInputSchema = SequentialNoteListOrderByWithAggregationInputSchema; exports.SequentialNoteListOrderByWithAggregationInputSchema_default = SequentialNoteListOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-P6BC6OKR.cjs.map