"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSQPEFQGIcjs = require('./chunk-SQPEFQGI.cjs');


var _chunk66FZNRMPcjs = require('./chunk-66FZNRMP.cjs');


var _chunkFBVMCAMUcjs = require('./chunk-FBVMCAMU.cjs');


var _chunkIAYK6XLHcjs = require('./chunk-IAYK6XLH.cjs');


var _chunkP64MEHXYcjs = require('./chunk-P64MEHXY.cjs');


var _chunk7C4CPACYcjs = require('./chunk-7C4CPACY.cjs');


var _chunkA2U43OQYcjs = require('./chunk-A2U43OQY.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunk7C4CPACYcjs.DietaryItemCreateWithoutServingInputSchema), _zod.z.lazy(() => _chunkA2U43OQYcjs.DietaryItemUncheckedCreateWithoutServingInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkP64MEHXYcjs.DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunk66FZNRMPcjs.DietaryItemUpsertWithoutServingInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkSQPEFQGIcjs.DietaryItemUpdateToOneWithWhereWithoutServingInputSchema), _zod.z.lazy(() => _chunkIAYK6XLHcjs.DietaryItemUpdateWithoutServingInputSchema), _zod.z.lazy(() => _chunkFBVMCAMUcjs.DietaryItemUncheckedUpdateWithoutServingInputSchema)]).optional()
}).strict();
var DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema_default = DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema;




exports.DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema = DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema; exports.DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema_default = DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema_default;
//# sourceMappingURL=chunk-AYHNNWMT.cjs.map