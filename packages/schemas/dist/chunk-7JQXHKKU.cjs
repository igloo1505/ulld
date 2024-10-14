"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkD3BVOUDHcjs = require('./chunk-D3BVOUDH.cjs');


var _chunkBGO5W2HWcjs = require('./chunk-BGO5W2HW.cjs');


var _chunk54IZ6RTNcjs = require('./chunk-54IZ6RTN.cjs');

// src/database/outputTypeSchemas/SnippetUpdateManyArgsSchema.ts
var _zod = require('zod');
var SnippetUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkD3BVOUDHcjs.SnippetUpdateManyMutationInputSchema, _chunkBGO5W2HWcjs.SnippetUncheckedUpdateManyInputSchema]),
  where: _chunk54IZ6RTNcjs.SnippetWhereInputSchema.optional()
}).strict();
var SnippetUpdateManyArgsSchema_default = SnippetUpdateManyArgsSchema;




exports.SnippetUpdateManyArgsSchema = SnippetUpdateManyArgsSchema; exports.SnippetUpdateManyArgsSchema_default = SnippetUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-7JQXHKKU.cjs.map