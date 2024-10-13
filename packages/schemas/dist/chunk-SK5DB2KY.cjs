"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkC2M65DPKcjs = require('./chunk-C2M65DPK.cjs');


var _chunkJNFEAHHEcjs = require('./chunk-JNFEAHHE.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/ReadingListUpdateManyArgsSchema.ts
var _zod = require('zod');
var ReadingListUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkJNFEAHHEcjs.ReadingListUpdateManyMutationInputSchema, _chunkC2M65DPKcjs.ReadingListUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.ReadingListWhereInputSchema.optional()
}).strict();
var ReadingListUpdateManyArgsSchema_default = ReadingListUpdateManyArgsSchema;




exports.ReadingListUpdateManyArgsSchema = ReadingListUpdateManyArgsSchema; exports.ReadingListUpdateManyArgsSchema_default = ReadingListUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-SK5DB2KY.cjs.map