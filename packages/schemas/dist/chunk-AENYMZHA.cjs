"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/AutoSettingMinOrderByAggregateInputSchema.ts
var _zod = require('zod');
var AutoSettingMinOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  glob: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var AutoSettingMinOrderByAggregateInputSchema_default = AutoSettingMinOrderByAggregateInputSchema;




exports.AutoSettingMinOrderByAggregateInputSchema = AutoSettingMinOrderByAggregateInputSchema; exports.AutoSettingMinOrderByAggregateInputSchema_default = AutoSettingMinOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-AENYMZHA.cjs.map