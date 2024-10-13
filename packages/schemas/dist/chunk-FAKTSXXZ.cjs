"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDCHKQJEQcjs = require('./chunk-DCHKQJEQ.cjs');


var _chunkYT57VXF2cjs = require('./chunk-YT57VXF2.cjs');


var _chunkLYBO3RMPcjs = require('./chunk-LYBO3RMP.cjs');


var _chunk4HVGQAZ5cjs = require('./chunk-4HVGQAZ5.cjs');


var _chunk6IGPMQ2Vcjs = require('./chunk-6IGPMQ2V.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/EquationOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var EquationOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  title: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  desc: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  content: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  asPython: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  variableLegend: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  variables: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  keywords: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastAccess: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkDCHKQJEQcjs.EquationCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkYT57VXF2cjs.EquationAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk4HVGQAZ5cjs.EquationMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkLYBO3RMPcjs.EquationMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunk6IGPMQ2Vcjs.EquationSumOrderByAggregateInputSchema).optional()
}).strict();
var EquationOrderByWithAggregationInputSchema_default = EquationOrderByWithAggregationInputSchema;




exports.EquationOrderByWithAggregationInputSchema = EquationOrderByWithAggregationInputSchema; exports.EquationOrderByWithAggregationInputSchema_default = EquationOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-FAKTSXXZ.cjs.map