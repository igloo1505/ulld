"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC2SRCIZCcjs = require('./chunk-C2SRCIZC.cjs');


var _chunk2J7SWVD7cjs = require('./chunk-2J7SWVD7.cjs');


var _chunkTR2GKJ43cjs = require('./chunk-TR2GKJ43.cjs');


var _chunkE4UG4B2Kcjs = require('./chunk-E4UG4B2K.cjs');


var _chunkNNX5OVBFcjs = require('./chunk-NNX5OVBF.cjs');


var _chunkW62IMNKFcjs = require('./chunk-W62IMNKF.cjs');


var _chunkCV7OTBEFcjs = require('./chunk-CV7OTBEF.cjs');


var _chunkELJLHOYBcjs = require('./chunk-ELJLHOYB.cjs');

// src/database/inputTypeSchemas/DietUncheckedUpdateManyWithoutItemsNestedInputSchema.ts
var _zod = require('zod');
var DietUncheckedUpdateManyWithoutItemsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkW62IMNKFcjs.DietCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkW62IMNKFcjs.DietCreateWithoutItemsInputSchema).array(), _zod.z.lazy(() => _chunkCV7OTBEFcjs.DietUncheckedCreateWithoutItemsInputSchema), _zod.z.lazy(() => _chunkCV7OTBEFcjs.DietUncheckedCreateWithoutItemsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkNNX5OVBFcjs.DietCreateOrConnectWithoutItemsInputSchema), _zod.z.lazy(() => _chunkNNX5OVBFcjs.DietCreateOrConnectWithoutItemsInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkE4UG4B2Kcjs.DietUpsertWithWhereUniqueWithoutItemsInputSchema), _zod.z.lazy(() => _chunkE4UG4B2Kcjs.DietUpsertWithWhereUniqueWithoutItemsInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema), _zod.z.lazy(() => _chunkELJLHOYBcjs.DietWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkTR2GKJ43cjs.DietUpdateWithWhereUniqueWithoutItemsInputSchema), _zod.z.lazy(() => _chunkTR2GKJ43cjs.DietUpdateWithWhereUniqueWithoutItemsInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkC2SRCIZCcjs.DietUpdateManyWithWhereWithoutItemsInputSchema), _zod.z.lazy(() => _chunkC2SRCIZCcjs.DietUpdateManyWithWhereWithoutItemsInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunk2J7SWVD7cjs.DietScalarWhereInputSchema), _zod.z.lazy(() => _chunk2J7SWVD7cjs.DietScalarWhereInputSchema).array()]).optional()
}).strict();
var DietUncheckedUpdateManyWithoutItemsNestedInputSchema_default = DietUncheckedUpdateManyWithoutItemsNestedInputSchema;




exports.DietUncheckedUpdateManyWithoutItemsNestedInputSchema = DietUncheckedUpdateManyWithoutItemsNestedInputSchema; exports.DietUncheckedUpdateManyWithoutItemsNestedInputSchema_default = DietUncheckedUpdateManyWithoutItemsNestedInputSchema_default;
//# sourceMappingURL=chunk-5RP5PTBO.cjs.map