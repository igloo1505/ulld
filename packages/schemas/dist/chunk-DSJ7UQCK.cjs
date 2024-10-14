"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNNX5OVBFcjs = require('./chunk-NNX5OVBF.cjs');


var _chunkW62IMNKFcjs = require('./chunk-W62IMNKF.cjs');


var _chunkCV7OTBEFcjs = require('./chunk-CV7OTBEF.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

// src/database/inputTypeSchemas/DietUncheckedCreateNestedManyWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietUncheckedCreateNestedManyWithoutItemsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkW62IMNKFcjs.DietCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkW62IMNKFcjs.DietCreateWithoutItemsInputSchema).array(), _zod.z.lazy(() => _chunkCV7OTBEFcjs.DietUncheckedCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkCV7OTBEFcjs.DietUncheckedCreateWithoutItemsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkNNX5OVBFcjs.DietCreateOrConnectWithoutItemsInputSchema), _zod.z.lazy(() => _chunkNNX5OVBFcjs.DietCreateOrConnectWithoutItemsInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema).array()]).optional()
}).strict();
var DietUncheckedCreateNestedManyWithoutItemsInputSchema_default = DietUncheckedCreateNestedManyWithoutItemsInputSchema;




exports.DietUncheckedCreateNestedManyWithoutItemsInputSchema = DietUncheckedCreateNestedManyWithoutItemsInputSchema; exports.DietUncheckedCreateNestedManyWithoutItemsInputSchema_default = DietUncheckedCreateNestedManyWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-DSJ7UQCK.cjs.map