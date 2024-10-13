"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWNKKQKUYcjs = require('./chunk-WNKKQKUY.cjs');


var _chunk5RY5Y6ZTcjs = require('./chunk-5RY5Y6ZT.cjs');


var _chunk3ICNTAHAcjs = require('./chunk-3ICNTAHA.cjs');


var _chunkBZ6M7NGTcjs = require('./chunk-BZ6M7NGT.cjs');


var _chunkBF7247FBcjs = require('./chunk-BF7247FB.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/GoogleCalendarAuthOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  auth: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  _count: _zod.z.lazy(() => _chunk3ICNTAHAcjs.GoogleCalendarAuthCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkBZ6M7NGTcjs.GoogleCalendarAuthAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk5RY5Y6ZTcjs.GoogleCalendarAuthMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkWNKKQKUYcjs.GoogleCalendarAuthMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkBF7247FBcjs.GoogleCalendarAuthSumOrderByAggregateInputSchema).optional()
}).strict();
var GoogleCalendarAuthOrderByWithAggregationInputSchema_default = GoogleCalendarAuthOrderByWithAggregationInputSchema;




exports.GoogleCalendarAuthOrderByWithAggregationInputSchema = GoogleCalendarAuthOrderByWithAggregationInputSchema; exports.GoogleCalendarAuthOrderByWithAggregationInputSchema_default = GoogleCalendarAuthOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-E2HIV62F.cjs.map