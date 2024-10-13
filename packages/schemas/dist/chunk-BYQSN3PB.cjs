"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNFJ5VY4Ucjs = require('./chunk-NFJ5VY4U.cjs');


var _chunkR4IF2WXLcjs = require('./chunk-R4IF2WXL.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/ServingUpdateManyArgsSchema.ts
var _zod = require('zod');
var ServingUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkR4IF2WXLcjs.ServingUpdateManyMutationInputSchema, _chunkNFJ5VY4Ucjs.ServingUncheckedUpdateManyInputSchema]),
  where: _chunk4QJOIHDOcjs.ServingWhereInputSchema.optional()
}).strict();
var ServingUpdateManyArgsSchema_default = ServingUpdateManyArgsSchema;




exports.ServingUpdateManyArgsSchema = ServingUpdateManyArgsSchema; exports.ServingUpdateManyArgsSchema_default = ServingUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-BYQSN3PB.cjs.map