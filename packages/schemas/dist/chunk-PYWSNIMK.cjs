"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXUTSIZS3cjs = require('./chunk-XUTSIZS3.cjs');


var _chunkHWLGR4NCcjs = require('./chunk-HWLGR4NC.cjs');


var _chunkA2X5KSO3cjs = require('./chunk-A2X5KSO3.cjs');

// src/database/inputTypeSchemas/ServingCreateOrConnectWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingCreateOrConnectWithoutItemInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkXUTSIZS3cjs.ServingCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkHWLGR4NCcjs.ServingUncheckedCreateWithoutItemInputSchema)])
}).strict();
var ServingCreateOrConnectWithoutItemInputSchema_default = ServingCreateOrConnectWithoutItemInputSchema;




exports.ServingCreateOrConnectWithoutItemInputSchema = ServingCreateOrConnectWithoutItemInputSchema; exports.ServingCreateOrConnectWithoutItemInputSchema_default = ServingCreateOrConnectWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-PYWSNIMK.cjs.map