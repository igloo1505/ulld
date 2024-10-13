"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZQALRKR2cjs = require('./chunk-ZQALRKR2.cjs');


var _chunkBPHSYDLBcjs = require('./chunk-BPHSYDLB.cjs');


var _chunkKUZ7YP2Qcjs = require('./chunk-KUZ7YP2Q.cjs');

// src/database/outputTypeSchemas/WhiteboardUpdateManyArgsSchema.ts
var _zod = require('zod');
var WhiteboardUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZQALRKR2cjs.WhiteboardUpdateManyMutationInputSchema, _chunkBPHSYDLBcjs.WhiteboardUncheckedUpdateManyInputSchema]),
  where: _chunkKUZ7YP2Qcjs.WhiteboardWhereInputSchema.optional()
}).strict();
var WhiteboardUpdateManyArgsSchema_default = WhiteboardUpdateManyArgsSchema;




exports.WhiteboardUpdateManyArgsSchema = WhiteboardUpdateManyArgsSchema; exports.WhiteboardUpdateManyArgsSchema_default = WhiteboardUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-WCK5NTDO.cjs.map