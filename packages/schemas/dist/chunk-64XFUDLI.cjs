"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOIOTPB57cjs = require('./chunk-OIOTPB57.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/TimePeriodOrderByRelevanceInputSchema.ts
var _zod = require('zod');
var TimePeriodOrderByRelevanceInputSchema = _zod.z.object({
  fields: _zod.z.union([_zod.z.lazy(() => _chunkOIOTPB57cjs.TimePeriodOrderByRelevanceFieldEnumSchema), _zod.z.lazy(() => _chunkOIOTPB57cjs.TimePeriodOrderByRelevanceFieldEnumSchema).array()]),
  sort: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema),
  search: _zod.z.string()
}).strict();
var TimePeriodOrderByRelevanceInputSchema_default = TimePeriodOrderByRelevanceInputSchema;




exports.TimePeriodOrderByRelevanceInputSchema = TimePeriodOrderByRelevanceInputSchema; exports.TimePeriodOrderByRelevanceInputSchema_default = TimePeriodOrderByRelevanceInputSchema_default;
//# sourceMappingURL=chunk-64XFUDLI.cjs.map