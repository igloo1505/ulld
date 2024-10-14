"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZCH32CBScjs = require('./chunk-ZCH32CBS.cjs');

// src/database/outputTypeSchemas/ReadingListCreateManyArgsSchema.ts
var _zod = require('zod');
var ReadingListCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZCH32CBScjs.ReadingListCreateManyInputSchema, _chunkZCH32CBScjs.ReadingListCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var ReadingListCreateManyArgsSchema_default = ReadingListCreateManyArgsSchema;




exports.ReadingListCreateManyArgsSchema = ReadingListCreateManyArgsSchema; exports.ReadingListCreateManyArgsSchema_default = ReadingListCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-7VG3B4W7.cjs.map