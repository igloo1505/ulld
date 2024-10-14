"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkIAQYBTOScjs = require('./chunk-IAQYBTOS.cjs');


var _chunkZCQDI3SRcjs = require('./chunk-ZCQDI3SR.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanBanListUpdateManyArgsSchema.ts
var _zod = require('zod');
var KanBanListUpdateManyArgsSchema = _zod.z.object({
  data: _zod.z.union([_chunkZCQDI3SRcjs.KanBanListUpdateManyMutationInputSchema, _chunkIAQYBTOScjs.KanBanListUncheckedUpdateManyInputSchema]),
  where: _chunkUNUMUJ42cjs.KanBanListWhereInputSchema.optional()
}).strict();
var KanBanListUpdateManyArgsSchema_default = KanBanListUpdateManyArgsSchema;




exports.KanBanListUpdateManyArgsSchema = KanBanListUpdateManyArgsSchema; exports.KanBanListUpdateManyArgsSchema_default = KanBanListUpdateManyArgsSchema_default;
//# sourceMappingURL=chunk-H66B6KFM.cjs.map