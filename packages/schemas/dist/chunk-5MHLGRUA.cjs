"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkO766JMQPcjs = require('./chunk-O766JMQP.cjs');


var _chunkJUBMCBDVcjs = require('./chunk-JUBMCBDV.cjs');


var _chunkY3RJAHQ5cjs = require('./chunk-Y3RJAHQ5.cjs');


var _chunk5IWHFLFNcjs = require('./chunk-5IWHFLFN.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var DietOrderByWithRelationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  activelyFollowing: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  gf: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  vegan: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  pescatarian: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  vegetarian: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  fasting: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  cardioTraining: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  weightTraining: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  carb: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  pro: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  fat: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  goals: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  created: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  items: _zod.z.lazy(() => _chunkJUBMCBDVcjs.DietaryItemOrderByRelationAggregateInputSchema).optional(),
  periodsFollowed: _zod.z.lazy(() => _chunk5IWHFLFNcjs.TimePeriodOrderByRelationAggregateInputSchema).optional(),
  HealthReport: _zod.z.lazy(() => _chunkY3RJAHQ5cjs.HealthReportOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkO766JMQPcjs.DietOrderByRelevanceInputSchema).optional()
}).strict();
var DietOrderByWithRelationInputSchema_default = DietOrderByWithRelationInputSchema;




exports.DietOrderByWithRelationInputSchema = DietOrderByWithRelationInputSchema; exports.DietOrderByWithRelationInputSchema_default = DietOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-5MHLGRUA.cjs.map