"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/AutoSettingCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var AutoSettingCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  glob: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var AutoSettingCountOrderByAggregateInputSchema_default = AutoSettingCountOrderByAggregateInputSchema;




exports.AutoSettingCountOrderByAggregateInputSchema = AutoSettingCountOrderByAggregateInputSchema; exports.AutoSettingCountOrderByAggregateInputSchema_default = AutoSettingCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-DFCL7WNW.cjs.map