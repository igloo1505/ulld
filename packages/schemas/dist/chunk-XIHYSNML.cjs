"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGQKEHJIAcjs = require('./chunk-GQKEHJIA.cjs');

// src/database/outputTypeSchemas/SnippetCreateManyArgsSchema.ts
var _zod = require('zod');
var SnippetCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkGQKEHJIAcjs.SnippetCreateManyInputSchema, _chunkGQKEHJIAcjs.SnippetCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SnippetCreateManyArgsSchema_default = SnippetCreateManyArgsSchema;




exports.SnippetCreateManyArgsSchema = SnippetCreateManyArgsSchema; exports.SnippetCreateManyArgsSchema_default = SnippetCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-XIHYSNML.cjs.map