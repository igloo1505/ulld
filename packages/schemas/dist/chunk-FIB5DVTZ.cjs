"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPOH4I4M7cjs = require('./chunk-POH4I4M7.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/HealthReportOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var HealthReportOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkPOH4I4M7cjs.HealthReportOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkPOH4I4M7cjs.HealthReportOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var HealthReportOrderByRelevanceInputSchema_default = HealthReportOrderByRelevanceInputSchema;




exports.HealthReportOrderByRelevanceInputSchema = HealthReportOrderByRelevanceInputSchema; exports.HealthReportOrderByRelevanceInputSchema_default = HealthReportOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-FIB5DVTZ.cjs.map