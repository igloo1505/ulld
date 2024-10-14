"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsAppendixMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SettingsAppendixMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  updatedAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SettingsAppendixMaxOrderByAggregateInputSchema_default = SettingsAppendixMaxOrderByAggregateInputSchema;




exports.SettingsAppendixMaxOrderByAggregateInputSchema = SettingsAppendixMaxOrderByAggregateInputSchema; exports.SettingsAppendixMaxOrderByAggregateInputSchema_default = SettingsAppendixMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-FMBPWARJ.cjs.map