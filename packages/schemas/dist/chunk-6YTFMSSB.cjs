"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOJXMAYV4cjs = require('./chunk-OJXMAYV4.cjs');


var _chunkDPJRDDVZcjs = require('./chunk-DPJRDDVZ.cjs');


var _chunkA2X5KSO3cjs = require('./chunk-A2X5KSO3.cjs');

// src/database/inputTypeSchemas/ServingUpdateWithWhereUniqueWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingUpdateWithWhereUniqueWithoutItemInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkDPJRDDVZcjs.ServingUpdateWithoutItemInputSchema), _zod.z.lazy(() => _chunkOJXMAYV4cjs.ServingUncheckedUpdateWithoutItemInputSchema)])
}).strict();
var ServingUpdateWithWhereUniqueWithoutItemInputSchema_default = ServingUpdateWithWhereUniqueWithoutItemInputSchema;




exports.ServingUpdateWithWhereUniqueWithoutItemInputSchema = ServingUpdateWithWhereUniqueWithoutItemInputSchema; exports.ServingUpdateWithWhereUniqueWithoutItemInputSchema_default = ServingUpdateWithWhereUniqueWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-6YTFMSSB.cjs.map