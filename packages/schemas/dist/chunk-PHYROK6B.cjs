"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUTDRGYVOcjs = require('./chunk-UTDRGYVO.cjs');


var _chunkFMBPWARJcjs = require('./chunk-FMBPWARJ.cjs');


var _chunkILZLS6H4cjs = require('./chunk-ILZLS6H4.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/SettingsAppendixOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var SettingsAppendixOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  data: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  createdAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  updatedAt: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkILZLS6H4cjs.SettingsAppendixCountOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkFMBPWARJcjs.SettingsAppendixMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkUTDRGYVOcjs.SettingsAppendixMinOrderByAggregateInputSchema).optional()
}).strict();
var SettingsAppendixOrderByWithAggregationInputSchema_default = SettingsAppendixOrderByWithAggregationInputSchema;




exports.SettingsAppendixOrderByWithAggregationInputSchema = SettingsAppendixOrderByWithAggregationInputSchema; exports.SettingsAppendixOrderByWithAggregationInputSchema_default = SettingsAppendixOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-PHYROK6B.cjs.map