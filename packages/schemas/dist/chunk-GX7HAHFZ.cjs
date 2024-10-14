"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKSUU37WEcjs = require('./chunk-KSUU37WE.cjs');


var _chunkTERO4NRDcjs = require('./chunk-TERO4NRD.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/ReadingListUpdateManyArgsSchema.ts
var _zod = require('zod');
var ReadingListUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkTERO4NRDcjs.ReadingListUpdateManyMutationInputSchema, _chunkKSUU37WEcjs.ReadingListUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.ReadingListWhereInputSchema.optional()
}).strict();
var ReadingListUpdateManyArgsSchema_default = ReadingListUpdateManyArgsSchema;




exports.ReadingListUpdateManyArgsSchema = ReadingListUpdateManyArgsSchema; exports.ReadingListUpdateManyArgsSchema_default = ReadingListUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-GX7HAHFZ.cjs.map