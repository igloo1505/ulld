"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk6KUUGPPOcjs = require('./chunk-6KUUGPPO.cjs');


var _chunkHUPGFVARcjs = require('./chunk-HUPGFVAR.cjs');


var _chunkJRHQX6EGcjs = require('./chunk-JRHQX6EG.cjs');


var _chunkGSHNMSNPcjs = require('./chunk-GSHNMSNP.cjs');


var _chunk5PVVIOYFcjs = require('./chunk-5PVVIOYF.cjs');

// src/database/outputTypeSchemas/SnippetUpsertArgsSchema.ts
var _zod = require('zod');
var SnippetSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  language: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var SnippetUpsertArgsSchema = _zod.z.object({
  select: SnippetSelectSchema.optional(),
  where: _chunk5PVVIOYFcjs.SnippetWhereUniqueInputSchema,
  create: _zod.z.union([_chunk6KUUGPPOcjs.SnippetCreateInputSchema, _chunkHUPGFVARcjs.SnippetUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkJRHQX6EGcjs.SnippetUpdateInputSchema, _chunkGSHNMSNPcjs.SnippetUncheckedUpdateInputSchema])
}).strict();
var SnippetUpsertArgsSchema_default = SnippetUpsertArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetUpsertArgsSchema = SnippetUpsertArgsSchema; exports.SnippetUpsertArgsSchema_default = SnippetUpsertArgsSchema_default;
//# sourceMappingURL=chunk-ZE4IUY37.cjs.map