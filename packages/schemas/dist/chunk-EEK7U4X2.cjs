"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJNKFOIDEcjs = require('./chunk-JNKFOIDE.cjs');


var _chunk2BFCCKH4cjs = require('./chunk-2BFCCKH4.cjs');


var _chunkF5XXKWXVcjs = require('./chunk-F5XXKWXV.cjs');

// src/database/inputTypeSchemas/ServingUpdateManyWithWhereWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingUpdateManyWithWhereWithoutItemInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkJNKFOIDEcjs.ServingScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkF5XXKWXVcjs.ServingUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk2BFCCKH4cjs.ServingUncheckedUpdateManyWithoutItemInputSchema)])
}).strict();
var ServingUpdateManyWithWhereWithoutItemInputSchema_default = ServingUpdateManyWithWhereWithoutItemInputSchema;




exports.ServingUpdateManyWithWhereWithoutItemInputSchema = ServingUpdateManyWithWhereWithoutItemInputSchema; exports.ServingUpdateManyWithWhereWithoutItemInputSchema_default = ServingUpdateManyWithWhereWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-EEK7U4X2.cjs.map