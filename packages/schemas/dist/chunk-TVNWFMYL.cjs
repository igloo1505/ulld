"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkP64MEHXYcjs = require('./chunk-P64MEHXY.cjs');


var _chunk7C4CPACYcjs = require('./chunk-7C4CPACY.cjs');


var _chunkA2U43OQYcjs = require('./chunk-A2U43OQY.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');

// src/database/inputTypeSchemas/DietaryItemCreateNestedOneWithoutServingInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateNestedOneWithoutServingInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunk7C4CPACYcjs.DietaryItemCreateWithoutServingInputSchema), _zod.z.lazy(() => _chunkA2U43OQYcjs.DietaryItemUncheckedCreateWithoutServingInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkP64MEHXYcjs.DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema).optional()
}).strict();
var DietaryItemCreateNestedOneWithoutServingInputSchema_default = DietaryItemCreateNestedOneWithoutServingInputSchema;




exports.DietaryItemCreateNestedOneWithoutServingInputSchema = DietaryItemCreateNestedOneWithoutServingInputSchema; exports.DietaryItemCreateNestedOneWithoutServingInputSchema_default = DietaryItemCreateNestedOneWithoutServingInputSchema_default;
//# sourceMappingURL=chunk-TVNWFMYL.cjs.map