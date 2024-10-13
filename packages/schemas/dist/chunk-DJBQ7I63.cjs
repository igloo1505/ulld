"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkYYUUHZBPcjs = require('./chunk-YYUUHZBP.cjs');


var _chunkBHXAPMTHcjs = require('./chunk-BHXAPMTH.cjs');


var _chunkKDNN2QI5cjs = require('./chunk-KDNN2QI5.cjs');


var _chunkOFJH4XCKcjs = require('./chunk-OFJH4XCK.cjs');


var _chunkVRA7CNX6cjs = require('./chunk-VRA7CNX6.cjs');


var _chunkX2VVAIJIcjs = require('./chunk-X2VVAIJI.cjs');


var _chunk3PIF5MSUcjs = require('./chunk-3PIF5MSU.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/inputTypeSchemas/DietUncheckedUpdateManyWithoutItemsNestedInputSchema.ts
var _zod = require('zod');
var DietUncheckedUpdateManyWithoutItemsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkX2VVAIJIcjs.DietCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkX2VVAIJIcjs.DietCreateWithoutItemsInputSchema).array(), _zod.z.lazy(() => _chunk3PIF5MSUcjs.DietUncheckedCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunk3PIF5MSUcjs.DietUncheckedCreateWithoutItemsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkVRA7CNX6cjs.DietCreateOrConnectWithoutItemsInputSchema), _zod.z.lazy(() => _chunkVRA7CNX6cjs.DietCreateOrConnectWithoutItemsInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkOFJH4XCKcjs.DietUpsertWithWhereUniqueWithoutItemsInputSchema), _zod.z.lazy(() => _chunkOFJH4XCKcjs.DietUpsertWithWhereUniqueWithoutItemsInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkKDNN2QI5cjs.DietUpdateWithWhereUniqueWithoutItemsInputSchema), _zod.z.lazy(() => _chunkKDNN2QI5cjs.DietUpdateWithWhereUniqueWithoutItemsInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkYYUUHZBPcjs.DietUpdateManyWithWhereWithoutItemsInputSchema), _zod.z.lazy(() => _chunkYYUUHZBPcjs.DietUpdateManyWithWhereWithoutItemsInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkBHXAPMTHcjs.DietScalarWhereInputSchema), _zod.z.lazy(() => _chunkBHXAPMTHcjs.DietScalarWhereInputSchema).array()]).optional()
}).strict();
var DietUncheckedUpdateManyWithoutItemsNestedInputSchema_default = DietUncheckedUpdateManyWithoutItemsNestedInputSchema;




exports.DietUncheckedUpdateManyWithoutItemsNestedInputSchema = DietUncheckedUpdateManyWithoutItemsNestedInputSchema; exports.DietUncheckedUpdateManyWithoutItemsNestedInputSchema_default = DietUncheckedUpdateManyWithoutItemsNestedInputSchema_default;
//# sourceMappingURL=chunk-DJBQ7I63.cjs.map