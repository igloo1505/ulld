"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunk4B6MDZLUcjs = require('./chunk-4B6MDZLU.cjs');


var _chunkGADYTP7Kcjs = require('./chunk-GADYTP7K.cjs');


var _chunkLBZ5FISGcjs = require('./chunk-LBZ5FISG.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanBanCardFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var KanBanCardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  listId: _zod.z.boolean().optional(),
  indexWithinList: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  KanBanList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardFindFirstOrThrowArgsSchema = _zod.z.object({
  select: KanBanCardSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanBanCardIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.KanBanCardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunk4B6MDZLUcjs.KanBanCardOrderByWithRelationInputSchema.array(), _chunk4B6MDZLUcjs.KanBanCardOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkLBZ5FISGcjs.KanBanCardScalarFieldEnumSchema, _chunkLBZ5FISGcjs.KanBanCardScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanBanCardFindFirstOrThrowArgsSchema_default = KanBanCardFindFirstOrThrowArgsSchema;





exports.KanBanCardSelectSchema = KanBanCardSelectSchema; exports.KanBanCardFindFirstOrThrowArgsSchema = KanBanCardFindFirstOrThrowArgsSchema; exports.KanBanCardFindFirstOrThrowArgsSchema_default = KanBanCardFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-XM4SNQAP.cjs.map