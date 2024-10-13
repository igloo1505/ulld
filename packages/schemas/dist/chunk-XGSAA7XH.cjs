"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkL4HT4IEBcjs = require('./chunk-L4HT4IEB.cjs');


var _chunkAOSVUJ7Pcjs = require('./chunk-AOSVUJ7P.cjs');


var _chunkEF27D6HKcjs = require('./chunk-EF27D6HK.cjs');

// src/database/inputTypeSchemas/ServingOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var ServingOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunkEF27D6HKcjs.SortOrderSchema), _zod.z.lazy(() => _chunkAOSVUJ7Pcjs.SortOrderInputSchema)]).optional(),
  item: _zod.z.lazy(() => _chunkL4HT4IEBcjs.DietaryItemOrderByWithRelationInputSchema).optional()
}).strict();
var ServingOrderByWithRelationInputSchema_default = ServingOrderByWithRelationInputSchema;




exports.ServingOrderByWithRelationInputSchema = ServingOrderByWithRelationInputSchema; exports.ServingOrderByWithRelationInputSchema_default = ServingOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-XGSAA7XH.cjs.map