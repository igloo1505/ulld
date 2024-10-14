"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkW62IMNKFcjs = require('./chunk-W62IMNKF.cjs');


var _chunkCV7OTBEFcjs = require('./chunk-CV7OTBEF.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

// src/database/inputTypeSchemas/DietCreateOrConnectWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietCreateOrConnectWithoutItemsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkW62IMNKFcjs.DietCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkCV7OTBEFcjs.DietUncheckedCreateWithoutItemsInputSchema)])
}).strict();
var DietCreateOrConnectWithoutItemsInputSchema_default = DietCreateOrConnectWithoutItemsInputSchema;




exports.DietCreateOrConnectWithoutItemsInputSchema = DietCreateOrConnectWithoutItemsInputSchema; exports.DietCreateOrConnectWithoutItemsInputSchema_default = DietCreateOrConnectWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-NNX5OVBF.cjs.map