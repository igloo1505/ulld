"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4EVNBWNIcjs = require('./chunk-4EVNBWNI.cjs');


var _chunkLUSAI5TZcjs = require('./chunk-LUSAI5TZ.cjs');


var _chunkNTUQUDWRcjs = require('./chunk-NTUQUDWR.cjs');

// src/database/outputTypeSchemas/SnippetUpdateManyArgsSchema.ts
var _zod = require('zod');
var SnippetUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk4EVNBWNIcjs.SnippetUpdateManyMutationInputSchema, _chunkLUSAI5TZcjs.SnippetUncheckedUpdateManyInputSchema]),
  where: _chunkNTUQUDWRcjs.SnippetWhereInputSchema.optional()
}).strict();
var SnippetUpdateManyArgsSchema_default = SnippetUpdateManyArgsSchema;




exports.SnippetUpdateManyArgsSchema = SnippetUpdateManyArgsSchema; exports.SnippetUpdateManyArgsSchema_default = SnippetUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-KR4ICC65.cjs.map