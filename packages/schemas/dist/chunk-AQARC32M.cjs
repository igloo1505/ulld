"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZZ55OFPZcjs = require('./chunk-ZZ55OFPZ.cjs');


var _chunkDRXT3DJHcjs = require('./chunk-DRXT3DJH.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkGADYTP7Kcjs = require('./chunk-GADYTP7K.cjs');

// src/database/outputTypeSchemas/KanBanCardUpdateArgsSchema.ts
var _zod = require('zod');
var KanBanCardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  listId: _zod.z.boolean().optional(),
  indexWithinList: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  KanBanList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardUpdateArgsSchema = _zod.z.object({
  select: KanBanCardSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanBanCardIncludeSchema.optional(),
  data: _zod.z.union([_chunkDRXT3DJHcjs.KanBanCardUpdateInputSchema, _chunkZZ55OFPZcjs.KanBanCardUncheckedUpdateInputSchema]),
  where: _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema
}).strict();
var KanBanCardUpdateArgsSchema_default = KanBanCardUpdateArgsSchema;





exports.KanBanCardSelectSchema = KanBanCardSelectSchema; exports.KanBanCardUpdateArgsSchema = KanBanCardUpdateArgsSchema; exports.KanBanCardUpdateArgsSchema_default = KanBanCardUpdateArgsSchema_default;
//# sourceMappingURL=chunk-AQARC32M.cjs.map