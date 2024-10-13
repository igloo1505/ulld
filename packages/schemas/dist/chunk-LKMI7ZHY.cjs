"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75VK6XKPcjs = require('./chunk-75VK6XKP.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/HealthReportOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var HealthReportOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunk75VK6XKPcjs.HealthReportOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunk75VK6XKPcjs.HealthReportOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var HealthReportOrderByRelevanceInputSchema_default = HealthReportOrderByRelevanceInputSchema;




exports.HealthReportOrderByRelevanceInputSchema = HealthReportOrderByRelevanceInputSchema; exports.HealthReportOrderByRelevanceInputSchema_default = HealthReportOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-LKMI7ZHY.cjs.map