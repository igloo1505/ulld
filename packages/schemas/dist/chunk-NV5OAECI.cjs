"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/AutoSettingCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var AutoSettingCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  glob: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  value: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional()
}).strict();
var AutoSettingCountOrderByAggregateInputSchema_default = AutoSettingCountOrderByAggregateInputSchema;




exports.AutoSettingCountOrderByAggregateInputSchema = AutoSettingCountOrderByAggregateInputSchema; exports.AutoSettingCountOrderByAggregateInputSchema_default = AutoSettingCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-NV5OAECI.cjs.map