"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLIXG55FJcjs = require('./chunk-LIXG55FJ.cjs');

// src/database/outputTypeSchemas/TopicCreateManyArgsSchema.ts
var _zod = require('zod');
var TopicCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkLIXG55FJcjs.TopicCreateManyInputSchema, _chunkLIXG55FJcjs.TopicCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TopicCreateManyArgsSchema_default = TopicCreateManyArgsSchema;




exports.TopicCreateManyArgsSchema = TopicCreateManyArgsSchema; exports.TopicCreateManyArgsSchema_default = TopicCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-ACPUDQ64.cjs.map