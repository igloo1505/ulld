"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNNX5OVBFcjs = require('./chunk-NNX5OVBF.cjs');


var _chunkW62IMNKFcjs = require('./chunk-W62IMNKF.cjs');


var _chunkCV7OTBEFcjs = require('./chunk-CV7OTBEF.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

// src/database/inputTypeSchemas/DietCreateNestedManyWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietCreateNestedManyWithoutItemsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkW62IMNKFcjs.DietCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkW62IMNKFcjs.DietCreateWithoutItemsInputSchema).array(), _zod.z.lazy(() => _chunkCV7OTBEFcjs.DietUncheckedCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkCV7OTBEFcjs.DietUncheckedCreateWithoutItemsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkNNX5OVBFcjs.DietCreateOrConnectWithoutItemsInputSchema), _zod.z.lazy(() => _chunkNNX5OVBFcjs.DietCreateOrConnectWithoutItemsInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema).array()]).optional()
}).strict();
var DietCreateNestedManyWithoutItemsInputSchema_default = DietCreateNestedManyWithoutItemsInputSchema;




exports.DietCreateNestedManyWithoutItemsInputSchema = DietCreateNestedManyWithoutItemsInputSchema; exports.DietCreateNestedManyWithoutItemsInputSchema_default = DietCreateNestedManyWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-OOGJTQ4A.cjs.map