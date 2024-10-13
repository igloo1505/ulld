"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3XFYV4GRcjs = require('./chunk-3XFYV4GR.cjs');


var _chunk6WFGMZA2cjs = require('./chunk-6WFGMZA2.cjs');


var _chunk5OM742D4cjs = require('./chunk-5OM742D4.cjs');


var _chunkT7BWXFP5cjs = require('./chunk-T7BWXFP5.cjs');


var _chunkNAPXQQJ3cjs = require('./chunk-NAPXQQJ3.cjs');


var _chunkVBWN4YJJcjs = require('./chunk-VBWN4YJJ.cjs');


var _chunkLDZNGXK5cjs = require('./chunk-LDZNGXK5.cjs');


var _chunkHGFNG2SEcjs = require('./chunk-HGFNG2SE.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateInputSchema = _zod.z.object({
  name: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkHGFNG2SEcjs.StringFieldUpdateOperationsInputSchema)]).optional(),
  barcode: _zod.z.union([_zod.z.string(), _zod.z.lazy(() => _chunkVBWN4YJJcjs.NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  gi: _zod.z.union([_zod.z.number().int(), _zod.z.lazy(() => _chunkLDZNGXK5cjs.NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  calsPerOz: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunkT7BWXFP5cjs.NullableFloatFieldUpdateOperationsInputSchema)]).optional().nullable(),
  glutenFree: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  minimalFructose: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  natural: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  organic: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkNAPXQQJ3cjs.BoolFieldUpdateOperationsInputSchema)]).optional(),
  impactScore: _zod.z.union([_zod.z.number(), _zod.z.lazy(() => _chunk5OM742D4cjs.FloatFieldUpdateOperationsInputSchema)]).optional(),
  Diet: _zod.z.lazy(() => _chunk3XFYV4GRcjs.DietUpdateManyWithoutItemsNestedInputSchema).optional(),
  Serving: _zod.z.lazy(() => _chunk6WFGMZA2cjs.ServingUpdateManyWithoutItemNestedInputSchema).optional()
}).strict();
var DietaryItemUpdateInputSchema_default = DietaryItemUpdateInputSchema;




exports.DietaryItemUpdateInputSchema = DietaryItemUpdateInputSchema; exports.DietaryItemUpdateInputSchema_default = DietaryItemUpdateInputSchema_default;
//# sourceMappingURL=chunk-XNB27JVC.cjs.map