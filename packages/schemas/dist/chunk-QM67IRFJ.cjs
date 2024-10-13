"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZNYZBKFDcjs = require('./chunk-ZNYZBKFD.cjs');

// src/database/outputTypeSchemas/KanBanListCreateManyArgsSchema.ts
var _zod = require('zod');
var KanBanListCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZNYZBKFDcjs.KanBanListCreateManyInputSchema, _chunkZNYZBKFDcjs.KanBanListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var KanBanListCreateManyArgsSchema_default = KanBanListCreateManyArgsSchema;




exports.KanBanListCreateManyArgsSchema = KanBanListCreateManyArgsSchema; exports.KanBanListCreateManyArgsSchema_default = KanBanListCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-QM67IRFJ.cjs.map