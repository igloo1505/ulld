"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVDXTVAH2cjs = require('./chunk-VDXTVAH2.cjs');


var _chunkXM3XK2DJcjs = require('./chunk-XM3XK2DJ.cjs');


var _chunkUGVL26KNcjs = require('./chunk-UGVL26KN.cjs');


var _chunkHJXBZFUIcjs = require('./chunk-HJXBZFUI.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/DietOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var DietOrderByWithRelationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  activelyFollowing: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  gf: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  vegan: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  pescatarian: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  vegetarian: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  fasting: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  cardioTraining: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  weightTraining: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  carb: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  pro: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  fat: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  goals: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  created: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  lastUpdate: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  items: _zod.z.lazy(() => _chunkXM3XK2DJcjs.DietaryItemOrderByRelationAggregateInputSchema).optional(),
  periodsFollowed: _zod.z.lazy(() => _chunkHJXBZFUIcjs.TimePeriodOrderByRelationAggregateInputSchema).optional(),
  HealthReport: _zod.z.lazy(() => _chunkUGVL26KNcjs.HealthReportOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkVDXTVAH2cjs.DietOrderByRelevanceInputSchema).optional()
}).strict();
var DietOrderByWithRelationInputSchema_default = DietOrderByWithRelationInputSchema;




exports.DietOrderByWithRelationInputSchema = DietOrderByWithRelationInputSchema; exports.DietOrderByWithRelationInputSchema_default = DietOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-7CPS7QVL.cjs.map