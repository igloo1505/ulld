"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGQKEHJIAcjs = require('./chunk-GQKEHJIA.cjs');

// src/database/outputTypeSchemas/SnippetCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var SnippetCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkGQKEHJIAcjs.SnippetCreateManyInputSchema, _chunkGQKEHJIAcjs.SnippetCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SnippetCreateManyAndReturnArgsSchema_default = SnippetCreateManyAndReturnArgsSchema;




exports.SnippetCreateManyAndReturnArgsSchema = SnippetCreateManyAndReturnArgsSchema; exports.SnippetCreateManyAndReturnArgsSchema_default = SnippetCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-WYVG7KHD.cjs.map