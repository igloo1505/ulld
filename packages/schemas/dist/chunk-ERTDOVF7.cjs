"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3LLSBTYIcjs = require('./chunk-3LLSBTYI.cjs');


var _chunkF7KDDPNVcjs = require('./chunk-F7KDDPNV.cjs');


var _chunkR4IF2WXLcjs = require('./chunk-R4IF2WXL.cjs');

// src/database/inputTypeSchemas/ServingUpdateManyWithWhereWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingUpdateManyWithWhereWithoutItemInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk3LLSBTYIcjs.ServingScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkR4IF2WXLcjs.ServingUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkF7KDDPNVcjs.ServingUncheckedUpdateManyWithoutItemInputSchema)])
}).strict();
var ServingUpdateManyWithWhereWithoutItemInputSchema_default = ServingUpdateManyWithWhereWithoutItemInputSchema;




exports.ServingUpdateManyWithWhereWithoutItemInputSchema = ServingUpdateManyWithWhereWithoutItemInputSchema; exports.ServingUpdateManyWithWhereWithoutItemInputSchema_default = ServingUpdateManyWithWhereWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-ERTDOVF7.cjs.map