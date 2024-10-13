"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkHE5KRW24cjs = require('./chunk-HE5KRW24.cjs');

// src/database/outputTypeSchemas/TopicCreateManyArgsSchema.ts
var _zod = require('zod');
var TopicCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkHE5KRW24cjs.TopicCreateManyInputSchema, _chunkHE5KRW24cjs.TopicCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TopicCreateManyArgsSchema_default = TopicCreateManyArgsSchema;




exports.TopicCreateManyArgsSchema = TopicCreateManyArgsSchema; exports.TopicCreateManyArgsSchema_default = TopicCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-ZBSOOF2U.cjs.map