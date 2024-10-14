"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsAppendixMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SettingsAppendixMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  updatedAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SettingsAppendixMinOrderByAggregateInputSchema_default = SettingsAppendixMinOrderByAggregateInputSchema;




exports.SettingsAppendixMinOrderByAggregateInputSchema = SettingsAppendixMinOrderByAggregateInputSchema; exports.SettingsAppendixMinOrderByAggregateInputSchema_default = SettingsAppendixMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-UTDRGYVO.cjs.map