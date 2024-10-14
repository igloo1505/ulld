"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZFB62GLPcjs = require('./chunk-ZFB62GLP.cjs');


var _chunkARCMLFBUcjs = require('./chunk-ARCMLFBU.cjs');


var _chunkVF4KROUCcjs = require('./chunk-VF4KROUC.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');

// src/database/inputTypeSchemas/DietaryItemCreateNestedOneWithoutServingInputSchema.ts
var _zod = require('zod');
var DietaryItemCreateNestedOneWithoutServingInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkARCMLFBUcjs.DietaryItemCreateWithoutServingInputSchema), _zod.z.lazy(() => _chunkVF4KROUCcjs.DietaryItemUncheckedCreateWithoutServingInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkZFB62GLPcjs.DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema).optional()
}).strict();
var DietaryItemCreateNestedOneWithoutServingInputSchema_default = DietaryItemCreateNestedOneWithoutServingInputSchema;




exports.DietaryItemCreateNestedOneWithoutServingInputSchema = DietaryItemCreateNestedOneWithoutServingInputSchema; exports.DietaryItemCreateNestedOneWithoutServingInputSchema_default = DietaryItemCreateNestedOneWithoutServingInputSchema_default;
//# sourceMappingURL=chunk-XR7ZLD3Y.cjs.map