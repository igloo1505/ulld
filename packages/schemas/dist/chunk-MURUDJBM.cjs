"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAL5TLVHFcjs = require('./chunk-AL5TLVHF.cjs');

// src/database/outputTypeSchemas/KanBanListCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var KanBanListCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkAL5TLVHFcjs.KanBanListCreateManyInputSchema, _chunkAL5TLVHFcjs.KanBanListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanListCreateManyAndReturnArgsSchema_default = KanBanListCreateManyAndReturnArgsSchema;




exports.KanBanListCreateManyAndReturnArgsSchema = KanBanListCreateManyAndReturnArgsSchema; exports.KanBanListCreateManyAndReturnArgsSchema_default = KanBanListCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-MURUDJBM.cjs.map