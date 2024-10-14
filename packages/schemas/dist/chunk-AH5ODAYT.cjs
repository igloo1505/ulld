"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZCH32CBScjs = require('./chunk-ZCH32CBS.cjs');

// src/database/outputTypeSchemas/ReadingListCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var ReadingListCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZCH32CBScjs.ReadingListCreateManyInputSchema, _chunkZCH32CBScjs.ReadingListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ReadingListCreateManyAndReturnArgsSchema_default = ReadingListCreateManyAndReturnArgsSchema;




exports.ReadingListCreateManyAndReturnArgsSchema = ReadingListCreateManyAndReturnArgsSchema; exports.ReadingListCreateManyAndReturnArgsSchema_default = ReadingListCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-AH5ODAYT.cjs.map