"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsAppendixCountOrderByAggregateInputSchema.ts
var _zod = require('zod');
var SettingsAppendixCountOrderByAggregateInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  updatedAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional()
}).strict();
var SettingsAppendixCountOrderByAggregateInputSchema_default = SettingsAppendixCountOrderByAggregateInputSchema;




exports.SettingsAppendixCountOrderByAggregateInputSchema = SettingsAppendixCountOrderByAggregateInputSchema; exports.SettingsAppendixCountOrderByAggregateInputSchema_default = SettingsAppendixCountOrderByAggregateInputSchema_default;
//# sourceMappingURL=chunk-ILZLS6H4.cjs.map