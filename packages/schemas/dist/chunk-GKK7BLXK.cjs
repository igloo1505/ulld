"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkXGNSIAY7cjs = require('./chunk-XGNSIAY7.cjs');


var _chunkU6VJIOIBcjs = require('./chunk-U6VJIOIB.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/CitationsGroupUpdateManyArgsSchema.ts
var _zod = require('zod');
var CitationsGroupUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkU6VJIOIBcjs.CitationsGroupUpdateManyMutationInputSchema, _chunkXGNSIAY7cjs.CitationsGroupUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.CitationsGroupWhereInputSchema.optional()
}).strict();
var CitationsGroupUpdateManyArgsSchema_default = CitationsGroupUpdateManyArgsSchema;




exports.CitationsGroupUpdateManyArgsSchema = CitationsGroupUpdateManyArgsSchema; exports.CitationsGroupUpdateManyArgsSchema_default = CitationsGroupUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-GKK7BLXK.cjs.map