"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkARCMLFBUcjs = require('./chunk-ARCMLFBU.cjs');


var _chunkVF4KROUCcjs = require('./chunk-VF4KROUC.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');

// src/database/inputTypeSchemas/DietaryItemCreateOrConnectWithoutServingInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateOrConnectWithoutServingInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkARCMLFBUcjs.DietaryItemCreateWithoutServingInputSchema), _zod.z.lazy(() => _chunkVF4KROUCcjs.DietaryItemUncheckedCreateWithoutServingInputSchema)])
}).strict();
var DietaryItemCreateOrConnectWithoutServingInputSchema_default = DietaryItemCreateOrConnectWithoutServingInputSchema;




exports.DietaryItemCreateOrConnectWithoutServingInputSchema = DietaryItemCreateOrConnectWithoutServingInputSchema; exports.DietaryItemCreateOrConnectWithoutServingInputSchema_default = DietaryItemCreateOrConnectWithoutServingInputSchema_default;
//# sourceMappingURL=chunk-ZFB62GLP.cjs.map