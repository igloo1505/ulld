"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkW3OIPUMEcjs = require('./chunk-W3OIPUME.cjs');


var _chunkVTZFISLTcjs = require('./chunk-VTZFISLT.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanBanCardUpdateManyArgsSchema.ts
var _zod = require('zod');
var KanBanCardUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkVTZFISLTcjs.KanBanCardUpdateManyMutationInputSchema, _chunkW3OIPUMEcjs.KanBanCardUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.KanBanCardWhereInputSchema.optional()
}).strict();
var KanBanCardUpdateManyArgsSchema_default = KanBanCardUpdateManyArgsSchema;




exports.KanBanCardUpdateManyArgsSchema = KanBanCardUpdateManyArgsSchema; exports.KanBanCardUpdateManyArgsSchema_default = KanBanCardUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-YV4ZHMSY.cjs.map