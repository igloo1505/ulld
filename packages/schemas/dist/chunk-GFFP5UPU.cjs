"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkWHUNI4HZcjs = require('./chunk-WHUNI4HZ.cjs');


var _chunkRAXKCLK6cjs = require('./chunk-RAXKCLK6.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/TagUpdateManyArgsSchema.ts
var _zod = require('zod');
var TagUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkRAXKCLK6cjs.TagUpdateManyMutationInputSchema, _chunkWHUNI4HZcjs.TagUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.TagWhereInputSchema.optional()
}).strict();
var TagUpdateManyArgsSchema_default = TagUpdateManyArgsSchema;




exports.TagUpdateManyArgsSchema = TagUpdateManyArgsSchema; exports.TagUpdateManyArgsSchema_default = TagUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-GFFP5UPU.cjs.map