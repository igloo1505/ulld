"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkK336RN4Qcjs = require('./chunk-K336RN4Q.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TimePeriodOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var TimePeriodOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkK336RN4Qcjs.TimePeriodOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkK336RN4Qcjs.TimePeriodOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var TimePeriodOrderByRelevanceInputSchema_default = TimePeriodOrderByRelevanceInputSchema;




exports.TimePeriodOrderByRelevanceInputSchema = TimePeriodOrderByRelevanceInputSchema; exports.TimePeriodOrderByRelevanceInputSchema_default = TimePeriodOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-N33WTNCT.cjs.map