"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOJXMAYV4cjs = require('./chunk-OJXMAYV4.cjs');


var _chunkDPJRDDVZcjs = require('./chunk-DPJRDDVZ.cjs');


var _chunkXUTSIZS3cjs = require('./chunk-XUTSIZS3.cjs');


var _chunkHWLGR4NCcjs = require('./chunk-HWLGR4NC.cjs');


var _chunkA2X5KSO3cjs = require('./chunk-A2X5KSO3.cjs');

// src/database/inputTypeSchemas/ServingUpsertWithWhereUniqueWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingUpsertWithWhereUniqueWithoutItemInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkDPJRDDVZcjs.ServingUpdateWithoutItemInputSchema), _zod.z.lazy(() => _chunkOJXMAYV4cjs.ServingUncheckedUpdateWithoutItemInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkXUTSIZS3cjs.ServingCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkHWLGR4NCcjs.ServingUncheckedCreateWithoutItemInputSchema)])
}).strict();
var ServingUpsertWithWhereUniqueWithoutItemInputSchema_default = ServingUpsertWithWhereUniqueWithoutItemInputSchema;




exports.ServingUpsertWithWhereUniqueWithoutItemInputSchema = ServingUpsertWithWhereUniqueWithoutItemInputSchema; exports.ServingUpsertWithWhereUniqueWithoutItemInputSchema_default = ServingUpsertWithWhereUniqueWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-APFOZUCZ.cjs.map