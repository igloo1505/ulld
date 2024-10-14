"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAPFOZUCZcjs = require('./chunk-APFOZUCZ.cjs');


var _chunk6YTFMSSBcjs = require('./chunk-6YTFMSSB.cjs');


var _chunkEEK7U4X2cjs = require('./chunk-EEK7U4X2.cjs');


var _chunkJNKFOIDEcjs = require('./chunk-JNKFOIDE.cjs');


var _chunkGEZCMVXAcjs = require('./chunk-GEZCMVXA.cjs');


var _chunkPYWSNIMKcjs = require('./chunk-PYWSNIMK.cjs');


var _chunkXUTSIZS3cjs = require('./chunk-XUTSIZS3.cjs');


var _chunkHWLGR4NCcjs = require('./chunk-HWLGR4NC.cjs');


var _chunkA2X5KSO3cjs = require('./chunk-A2X5KSO3.cjs');

// src/database/inputTypeSchemas/ServingUncheckedUpdateManyWithoutItemNestedInputSchema.ts
var _zod = require('zod');
var ServingUncheckedUpdateManyWithoutItemNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkXUTSIZS3cjs.ServingCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkXUTSIZS3cjs.ServingCreateWithoutItemInputSchema).array(), _zod.z.lazy(() => _chunkHWLGR4NCcjs.ServingUncheckedCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkHWLGR4NCcjs.ServingUncheckedCreateWithoutItemInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkPYWSNIMKcjs.ServingCreateOrConnectWithoutItemInputSchema), _zod.z.lazy(() => _chunkPYWSNIMKcjs.ServingCreateOrConnectWithoutItemInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkAPFOZUCZcjs.ServingUpsertWithWhereUniqueWithoutItemInputSchema), _zod.z.lazy(() => _chunkAPFOZUCZcjs.ServingUpsertWithWhereUniqueWithoutItemInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkGEZCMVXAcjs.ServingCreateManyItemInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema), _zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema), _zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema), _zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema), _zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunk6YTFMSSBcjs.ServingUpdateWithWhereUniqueWithoutItemInputSchema), _zod.z.lazy(() => _chunk6YTFMSSBcjs.ServingUpdateWithWhereUniqueWithoutItemInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkEEK7U4X2cjs.ServingUpdateManyWithWhereWithoutItemInputSchema), _zod.z.lazy(() => _chunkEEK7U4X2cjs.ServingUpdateManyWithWhereWithoutItemInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunkJNKFOIDEcjs.ServingScalarWhereInputSchema), _zod.z.lazy(() => _chunkJNKFOIDEcjs.ServingScalarWhereInputSchema).array()]).optional()
}).strict();
var ServingUncheckedUpdateManyWithoutItemNestedInputSchema_default = ServingUncheckedUpdateManyWithoutItemNestedInputSchema;




exports.ServingUncheckedUpdateManyWithoutItemNestedInputSchema = ServingUncheckedUpdateManyWithoutItemNestedInputSchema; exports.ServingUncheckedUpdateManyWithoutItemNestedInputSchema_default = ServingUncheckedUpdateManyWithoutItemNestedInputSchema_default;
//# sourceMappingURL=chunk-RYBR3CMA.cjs.map