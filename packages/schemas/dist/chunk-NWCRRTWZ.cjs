"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZNYZBKFDcjs = require('./chunk-ZNYZBKFD.cjs');

// src/database/outputTypeSchemas/KanBanListCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var KanBanListCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZNYZBKFDcjs.KanBanListCreateManyInputSchema, _chunkZNYZBKFDcjs.KanBanListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanListCreateManyAndReturnArgsSchema_default = KanBanListCreateManyAndReturnArgsSchema;




exports.KanBanListCreateManyAndReturnArgsSchema = KanBanListCreateManyAndReturnArgsSchema; exports.KanBanListCreateManyAndReturnArgsSchema_default = KanBanListCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-NWCRRTWZ.cjs.map