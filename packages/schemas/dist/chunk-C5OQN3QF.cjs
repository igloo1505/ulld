"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTI3QZMBJcjs = require('./chunk-TI3QZMBJ.cjs');


var _chunkFYS4B3IJcjs = require('./chunk-FYS4B3IJ.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanBanListUpdateManyArgsSchema.ts
var _zod = require('zod');
var KanBanListUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkFYS4B3IJcjs.KanBanListUpdateManyMutationInputSchema, _chunkTI3QZMBJcjs.KanBanListUncheckedUpdateManyInputSchema]),
  where: _chunkXQKVAOTYcjs.KanBanListWhereInputSchema.optional()
}).strict();
var KanBanListUpdateManyArgsSchema_default = KanBanListUpdateManyArgsSchema;




exports.KanBanListUpdateManyArgsSchema = KanBanListUpdateManyArgsSchema; exports.KanBanListUpdateManyArgsSchema_default = KanBanListUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-C5OQN3QF.cjs.map