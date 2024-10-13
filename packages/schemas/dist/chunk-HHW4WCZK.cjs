"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkOCIJALN4cjs = require('./chunk-OCIJALN4.cjs');


var _chunkY6OCUOOFcjs = require('./chunk-Y6OCUOOF.cjs');


var _chunkF356JBCIcjs = require('./chunk-F356JBCI.cjs');

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
  data: _zod.z.union([_chunkOCIJALN4cjs.SnippetUpdateInputSchema, _chunkY6OCUOOFcjs.SnippetUncheckedUpdateInputSchema]),
  where: _chunkF356JBCIcjs.SnippetWhereUniqueInputSchema
}).strict();
var SnippetUpdateArgsSchema_default = SnippetUpdateArgsSchema;





exports.SnippetSelectSchema = SnippetSelectSchema; exports.SnippetUpdateArgsSchema = SnippetUpdateArgsSchema; exports.SnippetUpdateArgsSchema_default = SnippetUpdateArgsSchema_default;
//# sourceMappingURL=chunk-HHW4WCZK.cjs.map