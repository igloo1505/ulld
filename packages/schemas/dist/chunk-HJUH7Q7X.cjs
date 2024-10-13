"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGJJPJAQOcjs = require('./chunk-GJJPJAQO.cjs');


var _chunkYI7KKGDCcjs = require('./chunk-YI7KKGDC.cjs');


var _chunk54TUFPICcjs = require('./chunk-54TUFPIC.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/NoteTypeOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var NoteTypeOrderByWithAggregationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkYI7KKGDCcjs.NoteTypeCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkGJJPJAQOcjs.NoteTypeMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunk54TUFPICcjs.NoteTypeMinOrderByAggregateInputSchema).optional()
}).strict();
var NoteTypeOrderByWithAggregationInputSchema_default = NoteTypeOrderByWithAggregationInputSchema;




exports.NoteTypeOrderByWithAggregationInputSchema = NoteTypeOrderByWithAggregationInputSchema; exports.NoteTypeOrderByWithAggregationInputSchema_default = NoteTypeOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-HJUH7Q7X.cjs.map