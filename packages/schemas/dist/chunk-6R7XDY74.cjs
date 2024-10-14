"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJRHQX6EGcjs = require('./chunk-JRHQX6EG.cjs');


var _chunkGSHNMSNPcjs = require('./chunk-GSHNMSNP.cjs');


var _chunk5PVVIOYFcjs = require('./chunk-5PVVIOYF.cjs');

// src/database/outputTypeSchemas/SnippetUpdateArgsSchema.ts
var _zod = require('zod');
var SnippetSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  content: _zod.z.boolean().optional(),
  description: _zod.z.boolean().optional(),
  keywords: _zod.z.boolean().optional(),
  language: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var SnippetUpdateArgsSchema = _zod.z.object({
  select: SnippetSelectSchema.optional(),
  data: _zod.z.union([_chunkJRHQX6EGcjs.SnippetUpdateInputSchema, _chunkGSHNMSNPcjs.SnippetUncheckedUpdateInputSchema]),
  where: _chunk5PVVIOYFcjs.SnippetWhereUniqueInputSchema
}).strict();
var SnippetUpdateArgsSchema_default = SnippetUpdateArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetUpdateArgsSchema = SnippetUpdateArgsSchema; exports.SnippetUpdateArgsSchema_default = SnippetUpdateArgsSchema_default;
//# sourceMappingURL=chunk-6R7XDY74.cjs.map