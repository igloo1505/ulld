"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIXG55FJcjs = require('./chunk-LIXG55FJ.cjs');

// src/database/outputTypeSchemas/TopicCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var TopicCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLIXG55FJcjs.TopicCreateManyInputSchema, _chunkLIXG55FJcjs.TopicCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TopicCreateManyAndReturnArgsSchema_default = TopicCreateManyAndReturnArgsSchema;




exports.TopicCreateManyAndReturnArgsSchema = TopicCreateManyAndReturnArgsSchema; exports.TopicCreateManyAndReturnArgsSchema_default = TopicCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-ZKCIMCJU.cjs.map