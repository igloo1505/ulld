"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkVRA7CNX6cjs = require('./chunk-VRA7CNX6.cjs');


var _chunkX2VVAIJIcjs = require('./chunk-X2VVAIJI.cjs');


var _chunk3PIF5MSUcjs = require('./chunk-3PIF5MSU.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/inputTypeSchemas/DietCreateNestedManyWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietCreateNestedManyWithoutItemsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkX2VVAIJIcjs.DietCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkX2VVAIJIcjs.DietCreateWithoutItemsInputSchema).array(), _zod.z.lazy(() => _chunk3PIF5MSUcjs.DietUncheckedCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunk3PIF5MSUcjs.DietUncheckedCreateWithoutItemsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkVRA7CNX6cjs.DietCreateOrConnectWithoutItemsInputSchema), _zod.z.lazy(() => _chunkVRA7CNX6cjs.DietCreateOrConnectWithoutItemsInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema).array()]).optional()
}).strict();
var DietCreateNestedManyWithoutItemsInputSchema_default = DietCreateNestedManyWithoutItemsInputSchema;




exports.DietCreateNestedManyWithoutItemsInputSchema = DietCreateNestedManyWithoutItemsInputSchema; exports.DietCreateNestedManyWithoutItemsInputSchema_default = DietCreateNestedManyWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-SSQ65K3Y.cjs.map