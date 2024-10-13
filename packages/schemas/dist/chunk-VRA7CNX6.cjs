"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkX2VVAIJIcjs = require('./chunk-X2VVAIJI.cjs');


var _chunk3PIF5MSUcjs = require('./chunk-3PIF5MSU.cjs');


var _chunkMR2A4XZPcjs = require('./chunk-MR2A4XZP.cjs');

// src/database/inputTypeSchemas/DietCreateOrConnectWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietCreateOrConnectWithoutItemsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkMR2A4XZPcjs.DietWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkX2VVAIJIcjs.DietCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunk3PIF5MSUcjs.DietUncheckedCreateWithoutItemsInputSchema)])
}).strict();
var DietCreateOrConnectWithoutItemsInputSchema_default = DietCreateOrConnectWithoutItemsInputSchema;




exports.DietCreateOrConnectWithoutItemsInputSchema = DietCreateOrConnectWithoutItemsInputSchema; exports.DietCreateOrConnectWithoutItemsInputSchema_default = DietCreateOrConnectWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-VRA7CNX6.cjs.map