"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6KUUGPPOcjs = require('./chunk-6KUUGPPO.cjs');


var _chunkHUPGFVARcjs = require('./chunk-HUPGFVAR.cjs');

// src/database/outputTypeSchemas/SnippetCreateArgsSchema.ts
var _zod = require('zod');
var SnippetSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  language: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var SnippetCreateArgsSchema = _zod.z.object({
  select: SnippetSelectSchema.optional(),
  data: _zod.z.union([_chunk6KUUGPPOcjs.SnippetCreateInputSchema, _chunkHUPGFVARcjs.SnippetUncheckedCreateInputSchema])
}).strict();
var SnippetCreateArgsSchema_default = SnippetCreateArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetCreateArgsSchema = SnippetCreateArgsSchema; exports.SnippetCreateArgsSchema_default = SnippetCreateArgsSchema_default;
//# sourceMappingURL=chunk-TLF67ZAX.cjs.map