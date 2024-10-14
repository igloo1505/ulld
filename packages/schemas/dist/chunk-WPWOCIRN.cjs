"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkEVW6QIEXcjs = require('./chunk-EVW6QIEX.cjs');


var _chunkF5XXKWXVcjs = require('./chunk-F5XXKWXV.cjs');


var _chunkZGGHUMG7cjs = require('./chunk-ZGGHUMG7.cjs');

// src/database/outputTypeSchemas/ServingUpdateManyArgsSchema.ts
var _zod = require('zod');
var ServingUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkF5XXKWXVcjs.ServingUpdateManyMutationInputSchema, _chunkEVW6QIEXcjs.ServingUncheckedUpdateManyInputSchema]),
  where: _chunkZGGHUMG7cjs.ServingWhereInputSchema.optional()
}).strict();
var ServingUpdateManyArgsSchema_default = ServingUpdateManyArgsSchema;




exports.ServingUpdateManyArgsSchema = ServingUpdateManyArgsSchema; exports.ServingUpdateManyArgsSchema_default = ServingUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-WPWOCIRN.cjs.map