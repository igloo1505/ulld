"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMTRTR3UEcjs = require('./chunk-MTRTR3UE.cjs');


var _chunkQJU3TSCScjs = require('./chunk-QJU3TSCS.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');

// src/database/inputTypeSchemas/ServingUpdateWithWhereUniqueWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingUpdateWithWhereUniqueWithoutItemInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkQJU3TSCScjs.ServingUpdateWithoutItemInputSchema), _zod.z.lazy(() => _chunkMTRTR3UEcjs.ServingUncheckedUpdateWithoutItemInputSchema)])
}).strict();
var ServingUpdateWithWhereUniqueWithoutItemInputSchema_default = ServingUpdateWithWhereUniqueWithoutItemInputSchema;




exports.ServingUpdateWithWhereUniqueWithoutItemInputSchema = ServingUpdateWithWhereUniqueWithoutItemInputSchema; exports.ServingUpdateWithWhereUniqueWithoutItemInputSchema_default = ServingUpdateWithWhereUniqueWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-LQDB67PY.cjs.map