"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNXJ5MDHBcjs = require('./chunk-NXJ5MDHB.cjs');

// src/database/outputTypeSchemas/ReadingListCreateManyArgsSchema.ts
var _zod = require('zod');
var ReadingListCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkNXJ5MDHBcjs.ReadingListCreateManyInputSchema, _chunkNXJ5MDHBcjs.ReadingListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ReadingListCreateManyArgsSchema_default = ReadingListCreateManyArgsSchema;




exports.ReadingListCreateManyArgsSchema = ReadingListCreateManyArgsSchema; exports.ReadingListCreateManyArgsSchema_default = ReadingListCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-MPJU2P24.cjs.map