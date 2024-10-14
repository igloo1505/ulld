"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4BKDHWOKcjs = require('./chunk-4BKDHWOK.cjs');


var _chunkDXJSG742cjs = require('./chunk-DXJSG742.cjs');


var _chunkNC4JAUC2cjs = require('./chunk-NC4JAUC2.cjs');


var _chunk54IZ6RTNcjs = require('./chunk-54IZ6RTN.cjs');

// src/database/outputTypeSchemas/SnippetGroupByArgsSchema.ts
var _zod = require('zod');
var SnippetGroupByArgsSchema = _zod.z.object({
  where: _chunk54IZ6RTNcjs.SnippetWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkDXJSG742cjs.SnippetOrderByWithAggregationInputSchema.array(), _chunkDXJSG742cjs.SnippetOrderByWithAggregationInputSchema]).optional(),
  by: _chunkNC4JAUC2cjs.SnippetScalarFieldEnumSchema.array(),
  having: _chunk4BKDHWOKcjs.SnippetScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var SnippetGroupByArgsSchema_default = SnippetGroupByArgsSchema;




exports.SnippetGroupByArgsSchema = SnippetGroupByArgsSchema; exports.SnippetGroupByArgsSchema_default = SnippetGroupByArgsSchema_default;
//# sourceMappingURL=chunk-BIC7AYW7.cjs.map