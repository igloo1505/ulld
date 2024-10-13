"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4WHHATQCcjs = require('./chunk-4WHHATQC.cjs');


var _chunkOGM23X7Hcjs = require('./chunk-OGM23X7H.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanBanCardUpdateManyArgsSchema.ts
var _zod = require('zod');
var KanBanCardUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkOGM23X7Hcjs.KanBanCardUpdateManyMutationInputSchema, _chunk4WHHATQCcjs.KanBanCardUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.KanBanCardWhereInputSchema.optional()
}).strict();
var KanBanCardUpdateManyArgsSchema_default = KanBanCardUpdateManyArgsSchema;




exports.KanBanCardUpdateManyArgsSchema = KanBanCardUpdateManyArgsSchema; exports.KanBanCardUpdateManyArgsSchema_default = KanBanCardUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-S6V6A2QY.cjs.map