"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7C4CPACYcjs = require('./chunk-7C4CPACY.cjs');


var _chunkA2U43OQYcjs = require('./chunk-A2U43OQY.cjs');


var _chunkREJ2CPAXcjs = require('./chunk-REJ2CPAX.cjs');

// src/database/inputTypeSchemas/DietaryItemCreateOrConnectWithoutServingInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateOrConnectWithoutServingInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkREJ2CPAXcjs.DietaryItemWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunk7C4CPACYcjs.DietaryItemCreateWithoutServingInputSchema), _zod.z.lazy(() => _chunkA2U43OQYcjs.DietaryItemUncheckedCreateWithoutServingInputSchema)])
}).strict();
var DietaryItemCreateOrConnectWithoutServingInputSchema_default = DietaryItemCreateOrConnectWithoutServingInputSchema;




exports.DietaryItemCreateOrConnectWithoutServingInputSchema = DietaryItemCreateOrConnectWithoutServingInputSchema; exports.DietaryItemCreateOrConnectWithoutServingInputSchema_default = DietaryItemCreateOrConnectWithoutServingInputSchema_default;
//# sourceMappingURL=chunk-P64MEHXY.cjs.map