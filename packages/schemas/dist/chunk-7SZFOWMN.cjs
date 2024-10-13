"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHE5KRW24cjs = require('./chunk-HE5KRW24.cjs');

// src/database/outputTypeSchemas/TopicCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var TopicCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkHE5KRW24cjs.TopicCreateManyInputSchema, _chunkHE5KRW24cjs.TopicCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TopicCreateManyAndReturnArgsSchema_default = TopicCreateManyAndReturnArgsSchema;




exports.TopicCreateManyAndReturnArgsSchema = TopicCreateManyAndReturnArgsSchema; exports.TopicCreateManyAndReturnArgsSchema_default = TopicCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-7SZFOWMN.cjs.map