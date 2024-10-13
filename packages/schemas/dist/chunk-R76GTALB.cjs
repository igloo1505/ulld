"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkNXJ5MDHBcjs = require('./chunk-NXJ5MDHB.cjs');

// src/database/outputTypeSchemas/ReadingListCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var ReadingListCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkNXJ5MDHBcjs.ReadingListCreateManyInputSchema, _chunkNXJ5MDHBcjs.ReadingListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ReadingListCreateManyAndReturnArgsSchema_default = ReadingListCreateManyAndReturnArgsSchema;




exports.ReadingListCreateManyAndReturnArgsSchema = ReadingListCreateManyAndReturnArgsSchema; exports.ReadingListCreateManyAndReturnArgsSchema_default = ReadingListCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-R76GTALB.cjs.map