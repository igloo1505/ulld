"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEOB53DGHcjs = require('./chunk-EOB53DGH.cjs');


var _chunkMMXO446Lcjs = require('./chunk-MMXO446L.cjs');


var _chunk75IWYFYUcjs = require('./chunk-75IWYFYU.cjs');

// src/database/inputTypeSchemas/ServingOrderByWithRelationInputSchema.ts
var _zod = require('zod');
var ServingOrderByWithRelationInputSchema = _zod.z.object({
  id: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  dietaryItemId: _zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema).optional(),
  quant_oz: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  quant_guess: _zod.z.union([_zod.z.lazy(() => _chunk75IWYFYUcjs.SortOrderSchema), _zod.z.lazy(() => _chunkMMXO446Lcjs.SortOrderInputSchema)]).optional(),
  item: _zod.z.lazy(() => _chunkEOB53DGHcjs.DietaryItemOrderByWithRelationInputSchema).optional()
}).strict();
var ServingOrderByWithRelationInputSchema_default = ServingOrderByWithRelationInputSchema;




exports.ServingOrderByWithRelationInputSchema = ServingOrderByWithRelationInputSchema; exports.ServingOrderByWithRelationInputSchema_default = ServingOrderByWithRelationInputSchema_default;
//# sourceMappingURL=chunk-XKUAIKZK.cjs.map