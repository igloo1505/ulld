"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHFJFGRCOcjs = require('./chunk-HFJFGRCO.cjs');


var _chunkMYA2Q2GOcjs = require('./chunk-MYA2Q2GO.cjs');


var _chunkSK2NSUSVcjs = require('./chunk-SK2NSUSV.cjs');


var _chunkCQS4GPT6cjs = require('./chunk-CQS4GPT6.cjs');


var _chunkTFL5FXWPcjs = require('./chunk-TFL5FXWP.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  auth: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunkSK2NSUSVcjs.GoogleCalendarAuthCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkCQS4GPT6cjs.GoogleCalendarAuthAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkMYA2Q2GOcjs.GoogleCalendarAuthMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkHFJFGRCOcjs.GoogleCalendarAuthMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkTFL5FXWPcjs.GoogleCalendarAuthSumOrderByAggregateInputSchema).optional()
}).strict();
var GoogleCalendarAuthOrderByWithAggregationInputSchema_default = GoogleCalendarAuthOrderByWithAggregationInputSchema;




exports.GoogleCalendarAuthOrderByWithAggregationInputSchema = GoogleCalendarAuthOrderByWithAggregationInputSchema; exports.GoogleCalendarAuthOrderByWithAggregationInputSchema_default = GoogleCalendarAuthOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-VW4JRYLL.cjs.map