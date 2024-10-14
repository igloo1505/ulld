"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBPCPA2V4cjs = require('./chunk-BPCPA2V4.cjs');


var _chunkD33NQUAGcjs = require('./chunk-D33NQUAG.cjs');


var _chunkW62IMNKFcjs = require('./chunk-W62IMNKF.cjs');


var _chunkCV7OTBEFcjs = require('./chunk-CV7OTBEF.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

// src/database/inputTypeSchemas/DietUpsertWithWhereUniqueWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietUpsertWithWhereUniqueWithoutItemsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkD33NQUAGcjs.DietUpdateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkBPCPA2V4cjs.DietUncheckedUpdateWithoutItemsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkW62IMNKFcjs.DietCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkCV7OTBEFcjs.DietUncheckedCreateWithoutItemsInputSchema)])
}).strict();
var DietUpsertWithWhereUniqueWithoutItemsInputSchema_default = DietUpsertWithWhereUniqueWithoutItemsInputSchema;




exports.DietUpsertWithWhereUniqueWithoutItemsInputSchema = DietUpsertWithWhereUniqueWithoutItemsInputSchema; exports.DietUpsertWithWhereUniqueWithoutItemsInputSchema_default = DietUpsertWithWhereUniqueWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-E4UG4B2K.cjs.map