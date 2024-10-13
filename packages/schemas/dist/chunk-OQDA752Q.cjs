"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunkRKGVME74cjs = require('./chunk-RKGVME74.cjs');


var _chunk67ASKHYDcjs = require('./chunk-67ASKHYD.cjs');


var _chunkIAPJUCQFcjs = require('./chunk-IAPJUCQF.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/KanBanCardFindFirstOrThrowArgsSchema.ts
var _zod = require('zod');
var KanBanCardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  listId: _zod.z.boolean().optional(),
  indexWithinList: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  KanBanList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardFindFirstOrThrowArgsSchema = _zod.z.object({
  select: KanBanCardSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanBanCardIncludeSchema.optional(),
  where: _chunkXQKVAOTYcjs.KanBanCardWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkRKGVME74cjs.KanBanCardOrderByWithRelationInputSchema.array(), _chunkRKGVME74cjs.KanBanCardOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkIAPJUCQFcjs.KanBanCardScalarFieldEnumSchema, _chunkIAPJUCQFcjs.KanBanCardScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanBanCardFindFirstOrThrowArgsSchema_default = KanBanCardFindFirstOrThrowArgsSchema;





exports.KanBanCardSelectSchema = KanBanCardSelectSchema; exports.KanBanCardFindFirstOrThrowArgsSchema = KanBanCardFindFirstOrThrowArgsSchema; exports.KanBanCardFindFirstOrThrowArgsSchema_default = KanBanCardFindFirstOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-OQDA752Q.cjs.map