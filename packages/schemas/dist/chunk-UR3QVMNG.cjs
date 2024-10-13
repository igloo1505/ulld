"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNU5WTKQScjs = require('./chunk-NU5WTKQS.cjs');


var _chunkOVONTNQTcjs = require('./chunk-OVONTNQT.cjs');


var _chunkF3UJW7VEcjs = require('./chunk-F3UJW7VE.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/SettingsAppendixOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var SettingsAppendixOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  updatedAt: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkF3UJW7VEcjs.SettingsAppendixCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkOVONTNQTcjs.SettingsAppendixMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkNU5WTKQScjs.SettingsAppendixMinOrderByAggregateInputSchema).optional()
}).strict();
var SettingsAppendixOrderByWithAggregationInputSchema_default = SettingsAppendixOrderByWithAggregationInputSchema;




exports.SettingsAppendixOrderByWithAggregationInputSchema = SettingsAppendixOrderByWithAggregationInputSchema; exports.SettingsAppendixOrderByWithAggregationInputSchema_default = SettingsAppendixOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-UR3QVMNG.cjs.map