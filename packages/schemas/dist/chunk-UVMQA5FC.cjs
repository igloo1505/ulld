"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkN33WTNCTcjs = require('./chunk-N33WTNCT.cjs');


var _chunk5MHLGRUAcjs = require('./chunk-5MHLGRUA.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/TimePeriodOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var TimePeriodOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  start: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  end: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  dietId: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  Diet: _zod.z.lazy(() => _chunk5MHLGRUAcjs.DietOrderByWithRelationInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkN33WTNCTcjs.TimePeriodOrderByRelevanceInputSchema).optional()
}).strict();
var TimePeriodOrderByWithRelationInputSchema_default = TimePeriodOrderByWithRelationInputSchema;




exports.TimePeriodOrderByWithRelationInputSchema = TimePeriodOrderByWithRelationInputSchema; exports.TimePeriodOrderByWithRelationInputSchema_default = TimePeriodOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-UVMQA5FC.cjs.map