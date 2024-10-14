"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFZ6FVAFEcjs = require('./chunk-FZ6FVAFE.cjs');

// src/database/outputTypeSchemas/TagCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var TagCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkFZ6FVAFEcjs.TagCreateManyInputSchema, _chunkFZ6FVAFEcjs.TagCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var TagCreateManyAndReturnArgsSchema_default = TagCreateManyAndReturnArgsSchema;




exports.TagCreateManyAndReturnArgsSchema = TagCreateManyAndReturnArgsSchema; exports.TagCreateManyAndReturnArgsSchema_default = TagCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-W4PLTDEN.cjs.map