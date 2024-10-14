"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGEZCMVXAcjs = require('./chunk-GEZCMVXA.cjs');


var _chunkPYWSNIMKcjs = require('./chunk-PYWSNIMK.cjs');


var _chunkXUTSIZS3cjs = require('./chunk-XUTSIZS3.cjs');


var _chunkHWLGR4NCcjs = require('./chunk-HWLGR4NC.cjs');


var _chunkA2X5KSO3cjs = require('./chunk-A2X5KSO3.cjs');

// src/database/inputTypeSchemas/ServingCreateNestedManyWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingCreateNestedManyWithoutItemInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkXUTSIZS3cjs.ServingCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkXUTSIZS3cjs.ServingCreateWithoutItemInputSchema).array(), _zod.z.lazy(() => _chunkHWLGR4NCcjs.ServingUncheckedCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkHWLGR4NCcjs.ServingUncheckedCreateWithoutItemInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkPYWSNIMKcjs.ServingCreateOrConnectWithoutItemInputSchema), _zod.z.lazy(() => _chunkPYWSNIMKcjs.ServingCreateOrConnectWithoutItemInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkGEZCMVXAcjs.ServingCreateManyItemInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema), _zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema).array()]).optional()
}).strict();
var ServingCreateNestedManyWithoutItemInputSchema_default = ServingCreateNestedManyWithoutItemInputSchema;




exports.ServingCreateNestedManyWithoutItemInputSchema = ServingCreateNestedManyWithoutItemInputSchema; exports.ServingCreateNestedManyWithoutItemInputSchema_default = ServingCreateNestedManyWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-H2SJCHTZ.cjs.map