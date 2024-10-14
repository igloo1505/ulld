"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2A5DDLAAcjs = require('./chunk-2A5DDLAA.cjs');

// src/database/outputTypeSchemas/SnippetCreateManyAndReturnArgsSchema.ts
var _zod = require('zod');
var SnippetCreateManyAndReturnArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk2A5DDLAAcjs.SnippetCreateManyInputSchema, _chunk2A5DDLAAcjs.SnippetCreateManyInputSchema.array()]),
  skipDuplicates: _zod.z.boolean().optional()
}).strict();
var SnippetCreateManyAndReturnArgsSchema_default = SnippetCreateManyAndReturnArgsSchema;




exports.SnippetCreateManyAndReturnArgsSchema = SnippetCreateManyAndReturnArgsSchema; exports.SnippetCreateManyAndReturnArgsSchema_default = SnippetCreateManyAndReturnArgsSchema_default;
//# sourceMappingURL=chunk-EB36UOS4.cjs.map