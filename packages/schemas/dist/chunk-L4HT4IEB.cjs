"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEKIGWT25cjs = require('./chunk-EKIGWT25.cjs');


var _chunkZAE4N77Xcjs = require('./chunk-ZAE4N77X.cjs');


var _chunkBY5W3VZNcjs = require('./chunk-BY5W3VZN.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/DietaryItemOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var DietaryItemOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  name: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  barcode: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  gi: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  calsPerOz: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  glutenFree: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  minimalFructose: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  natural: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  organic: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  impactScore: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  Diet: _zod.z.lazy(() => _chunkEKIGWT25cjs.DietOrderByRelationAggregateInputSchema).optional(),
  Serving: _zod.z.lazy(() => _chunkBY5W3VZNcjs.ServingOrderByRelationAggregateInputSchema).optional(),
  _relevance: _zod.z.lazy(() => _chunkZAE4N77Xcjs.DietaryItemOrderByRelevanceInputSchema).optional()
}).strict();
var DietaryItemOrderByWithRelationInputSchema_default = DietaryItemOrderByWithRelationInputSchema;




exports.DietaryItemOrderByWithRelationInputSchema = DietaryItemOrderByWithRelationInputSchema; exports.DietaryItemOrderByWithRelationInputSchema_default = DietaryItemOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-L4HT4IEB.cjs.map