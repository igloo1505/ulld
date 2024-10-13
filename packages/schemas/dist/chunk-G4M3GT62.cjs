"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSEKBYXCCcjs = require('./chunk-SEKBYXCC.cjs');


var _chunk7YFOWEK6cjs = require('./chunk-7YFOWEK6.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/TopicUpdateManyArgsSchema.ts
var _zod = require('zod');
var TopicUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunk7YFOWEK6cjs.TopicUpdateManyMutationInputSchema, _chunkSEKBYXCCcjs.TopicUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.TopicWhereInputSchema.optional()
}).strict();
var TopicUpdateManyArgsSchema_default = TopicUpdateManyArgsSchema;




exports.TopicUpdateManyArgsSchema = TopicUpdateManyArgsSchema; exports.TopicUpdateManyArgsSchema_default = TopicUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-G4M3GT62.cjs.map