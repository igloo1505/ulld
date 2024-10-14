"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/AutoSettingMaxOrderByAggregateInputSchema.ts
var _zod = require('zod');
var AutoSettingMaxOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  glob: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var AutoSettingMaxOrderByAggregateInputSchema_default = AutoSettingMaxOrderByAggregateInputSchema;




exports.AutoSettingMaxOrderByAggregateInputSchema = AutoSettingMaxOrderByAggregateInputSchema; exports.AutoSettingMaxOrderByAggregateInputSchema_default = AutoSettingMaxOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-XQRMQ4N2.cjs.map