"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDFCL7WNWcjs = require('./chunk-DFCL7WNW.cjs');


var _chunk4Z3CH2MKcjs = require('./chunk-4Z3CH2MK.cjs');


var _chunkAENYMZHAcjs = require('./chunk-AENYMZHA.cjs');


var _chunkXQRMQ4N2cjs = require('./chunk-XQRMQ4N2.cjs');


var _chunkOGLTS6OKcjs = require('./chunk-OGLTS6OK.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/AutoSettingOrderByWithAggregationInputSchema.ts
var _zod = require('zod');
var AutoSettingOrderByWithAggregationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  type: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  glob: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  value: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  _count: _zod.z.lazy(() => _chunkDFCL7WNWcjs.AutoSettingCountOrderByAggregateInputSchema).optional(),
  _avg: _zod.z.lazy(() => _chunk4Z3CH2MKcjs.AutoSettingAvgOrderByAggregateInputSchema).optional(),
  _max: _zod.z.lazy(() => _chunkXQRMQ4N2cjs.AutoSettingMaxOrderByAggregateInputSchema).optional(),
  _min: _zod.z.lazy(() => _chunkAENYMZHAcjs.AutoSettingMinOrderByAggregateInputSchema).optional(),
  _sum: _zod.z.lazy(() => _chunkOGLTS6OKcjs.AutoSettingSumOrderByAggregateInputSchema).optional()
}).strict();
var AutoSettingOrderByWithAggregationInputSchema_default = AutoSettingOrderByWithAggregationInputSchema;




exports.AutoSettingOrderByWithAggregationInputSchema = AutoSettingOrderByWithAggregationInputSchema; exports.AutoSettingOrderByWithAggregationInputSchema_default = AutoSettingOrderByWithAggregationInputSchema_default;
//# sourceMappingURL=chunk-PUM37SNC.cjs.map