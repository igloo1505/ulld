"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMTRTR3UEcjs = require('./chunk-MTRTR3UE.cjs');


var _chunkQJU3TSCScjs = require('./chunk-QJU3TSCS.cjs');


var _chunkSRB7354Mcjs = require('./chunk-SRB7354M.cjs');


var _chunkZRG3FK3Tcjs = require('./chunk-ZRG3FK3T.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');

// src/database/inputTypeSchemas/ServingUpsertWithWhereUniqueWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingUpsertWithWhereUniqueWithoutItemInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkQJU3TSCScjs.ServingUpdateWithoutItemInputSchema), _zod.z.lazy(() => _chunkMTRTR3UEcjs.ServingUncheckedUpdateWithoutItemInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkSRB7354Mcjs.ServingCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkZRG3FK3Tcjs.ServingUncheckedCreateWithoutItemInputSchema)])
}).strict();
var ServingUpsertWithWhereUniqueWithoutItemInputSchema_default = ServingUpsertWithWhereUniqueWithoutItemInputSchema;




exports.ServingUpsertWithWhereUniqueWithoutItemInputSchema = ServingUpsertWithWhereUniqueWithoutItemInputSchema; exports.ServingUpsertWithWhereUniqueWithoutItemInputSchema_default = ServingUpsertWithWhereUniqueWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-E5WVRZQR.cjs.map