"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOVLFGP6Wcjs = require('./chunk-OVLFGP6W.cjs');


var _chunkSANZXRLTcjs = require('./chunk-SANZXRLT.cjs');


var _chunkNQYHFAMGcjs = require('./chunk-NQYHFAMG.cjs');

// src/database/outputTypeSchemas/DJTUpdateManyArgsSchema.ts
var _zod = require('zod');
var DJTUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkSANZXRLTcjs.DJTUpdateManyMutationInputSchema, _chunkOVLFGP6Wcjs.DJTUncheckedUpdateManyInputSchema]),
  where: _chunkNQYHFAMGcjs.DJTWhereInputSchema.optional()
}).strict();
var DJTUpdateManyArgsSchema_default = DJTUpdateManyArgsSchema;




exports.DJTUpdateManyArgsSchema = DJTUpdateManyArgsSchema; exports.DJTUpdateManyArgsSchema_default = DJTUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-CAVRZLKS.cjs.map