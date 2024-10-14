"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3ZUNZQPRcjs = require('./chunk-3ZUNZQPR.cjs');


var _chunkABAO632Kcjs = require('./chunk-ABAO632K.cjs');


var _chunkZZ55OFPZcjs = require('./chunk-ZZ55OFPZ.cjs');


var _chunkDRXT3DJHcjs = require('./chunk-DRXT3DJH.cjs');



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkGADYTP7Kcjs = require('./chunk-GADYTP7K.cjs');

// src/database/outputTypeSchemas/KanBanCardUpsertArgsSchema.ts
var _zod = require('zod');
var KanBanCardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  listId: _zod.z.boolean().optional(),
  indexWithinList: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  KanBanList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardUpsertArgsSchema = _zod.z.object({
  select: KanBanCardSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanBanCardIncludeSchema.optional(),
  where: _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema,
  create: _zod.z.union([_chunk3ZUNZQPRcjs.KanBanCardCreateInputSchema, _chunkABAO632Kcjs.KanBanCardUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkDRXT3DJHcjs.KanBanCardUpdateInputSchema, _chunkZZ55OFPZcjs.KanBanCardUncheckedUpdateInputSchema])
}).strict();
var KanBanCardUpsertArgsSchema_default = KanBanCardUpsertArgsSchema;





exports.KanBanCardSelectSchema = KanBanCardSelectSchema; exports.KanBanCardUpsertArgsSchema = KanBanCardUpsertArgsSchema; exports.KanBanCardUpsertArgsSchema_default = KanBanCardUpsertArgsSchema_default;
//# sourceMappingURL=chunk-2GQGK24Z.cjs.map