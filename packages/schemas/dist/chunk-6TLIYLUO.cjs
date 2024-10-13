"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGVQJANR6cjs = require('./chunk-GVQJANR6.cjs');


var _chunkRMGXYLYOcjs = require('./chunk-RMGXYLYO.cjs');


var _chunkOCIJALN4cjs = require('./chunk-OCIJALN4.cjs');


var _chunkY6OCUOOFcjs = require('./chunk-Y6OCUOOF.cjs');


var _chunkF356JBCIcjs = require('./chunk-F356JBCI.cjs');

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
  where: _chunkF356JBCIcjs.SnippetWhereUniqueInputSchema,
  create: _zod.z.union([_chunkGVQJANR6cjs.SnippetCreateInputSchema, _chunkRMGXYLYOcjs.SnippetUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkOCIJALN4cjs.SnippetUpdateInputSchema, _chunkY6OCUOOFcjs.SnippetUncheckedUpdateInputSchema])
}).strict();
var SnippetUpsertArgsSchema_default = SnippetUpsertArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetUpsertArgsSchema = SnippetUpsertArgsSchema; exports.SnippetUpsertArgsSchema_default = SnippetUpsertArgsSchema_default;
//# sourceMappingURL=chunk-6TLIYLUO.cjs.map