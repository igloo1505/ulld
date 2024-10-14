"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2A5DDLAAcjs = require('./chunk-2A5DDLAA.cjs');

// src/database/outputTypeSchemas/SnippetCreateManyArgsSchema.ts
var _zod = require('zod');
var SnippetCreateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk2A5DDLAAcjs.SnippetCreateManyInputSchema, _chunk2A5DDLAAcjs.SnippetCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SnippetCreateManyArgsSchema_default = SnippetCreateManyArgsSchema;




exports.SnippetCreateManyArgsSchema = SnippetCreateManyArgsSchema; exports.SnippetCreateManyArgsSchema_default = SnippetCreateManyArgsSchema_default;
//# sourceMappingURL=chunk-PWREAX2R.cjs.map