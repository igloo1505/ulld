"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMPFMJZKTcjs = require('./chunk-MPFMJZKT.cjs');


var _chunkKOZOBY7Vcjs = require('./chunk-KOZOBY7V.cjs');


var _chunkX2VVAIJIcjs = require('./chunk-X2VVAIJI.cjs');


var _chunk3PIF5MSUcjs = require('./chunk-3PIF5MSU.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/inputTypeSchemas/DietUpsertWithWhereUniqueWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietUpsertWithWhereUniqueWithoutItemsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkKOZOBY7Vcjs.DietUpdateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkMPFMJZKTcjs.DietUncheckedUpdateWithoutItemsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkX2VVAIJIcjs.DietCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunk3PIF5MSUcjs.DietUncheckedCreateWithoutItemsInputSchema)])
}).strict();
var DietUpsertWithWhereUniqueWithoutItemsInputSchema_default = DietUpsertWithWhereUniqueWithoutItemsInputSchema;




exports.DietUpsertWithWhereUniqueWithoutItemsInputSchema = DietUpsertWithWhereUniqueWithoutItemsInputSchema; exports.DietUpsertWithWhereUniqueWithoutItemsInputSchema_default = DietUpsertWithWhereUniqueWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-OFJH4XCK.cjs.map