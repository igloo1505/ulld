"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUULM5PYGcjs = require('./chunk-UULM5PYG.cjs');


var _chunkM3EST7T5cjs = require('./chunk-M3EST7T5.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/CitationsGroupOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var CitationsGroupOrderByWithRelationInputSchema = _zod.z.object({
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  entries: _zod.z.lazy(() => _chunkM3EST7T5cjs.BibEntryOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkUULM5PYGcjs.CitationsGroupOrderByRelevanceInputSchema).optional()
}).strict();
var CitationsGroupOrderByWithRelationInputSchema_default = CitationsGroupOrderByWithRelationInputSchema;




exports.CitationsGroupOrderByWithRelationInputSchema = CitationsGroupOrderByWithRelationInputSchema; exports.CitationsGroupOrderByWithRelationInputSchema_default = CitationsGroupOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-QUF2NMPA.cjs.map