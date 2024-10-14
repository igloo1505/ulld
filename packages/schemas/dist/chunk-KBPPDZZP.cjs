"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6ZJY6GH5cjs = require('./chunk-6ZJY6GH5.cjs');


var _chunkQZEB3DSIcjs = require('./chunk-QZEB3DSI.cjs');


var _chunkTHCCDXSYcjs = require('./chunk-THCCDXSY.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/NoteTypeOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var NoteTypeOrderByWithAggregationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkQZEB3DSIcjs.NoteTypeCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk6ZJY6GH5cjs.NoteTypeMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkTHCCDXSYcjs.NoteTypeMinOrderByAggregateInputSchema).optional()
}).strict();
var NoteTypeOrderByWithAggregationInputSchema_default = NoteTypeOrderByWithAggregationInputSchema;




exports.NoteTypeOrderByWithAggregationInputSchema = NoteTypeOrderByWithAggregationInputSchema; exports.NoteTypeOrderByWithAggregationInputSchema_default = NoteTypeOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-KBPPDZZP.cjs.map