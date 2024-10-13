"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNV5OAECIcjs = require('./chunk-NV5OAECI.cjs');


var _chunkX6VV6VIFcjs = require('./chunk-X6VV6VIF.cjs');


var _chunkR7HA5FFAcjs = require('./chunk-R7HA5FFA.cjs');


var _chunk4DRYHMMVcjs = require('./chunk-4DRYHMMV.cjs');


var _chunkRLHIBSMPcjs = require('./chunk-RLHIBSMP.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/AutoSettingOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var AutoSettingOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  glob: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkNV5OAECIcjs.AutoSettingCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunkX6VV6VIFcjs.AutoSettingAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunk4DRYHMMVcjs.AutoSettingMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkR7HA5FFAcjs.AutoSettingMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkRLHIBSMPcjs.AutoSettingSumOrderByAggregateInputSchema).optional()
}).strict();
var AutoSettingOrderByWithAggregationInputSchema_default = AutoSettingOrderByWithAggregationInputSchema;




exports.AutoSettingOrderByWithAggregationInputSchema = AutoSettingOrderByWithAggregationInputSchema; exports.AutoSettingOrderByWithAggregationInputSchema_default = AutoSettingOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-52VF3HCX.cjs.map