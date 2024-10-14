"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkGADYTP7Kcjs = require('./chunk-GADYTP7K.cjs');

// src/database/outputTypeSchemas/KanBanCardFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var KanBanCardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  listId: _zod.z.boolean().optional(),
  indexWithinList: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  KanBanList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: KanBanCardSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanBanCardIncludeSchema.optional(),
  where: _chunkGADYTP7Kcjs.KanBanCardWhereUniqueInputSchema
}).strict();
var KanBanCardFindUniqueOrThrowArgsSchema_default = KanBanCardFindUniqueOrThrowArgsSchema;





exports.KanBanCardSelectSchema = KanBanCardSelectSchema; exports.KanBanCardFindUniqueOrThrowArgsSchema = KanBanCardFindUniqueOrThrowArgsSchema; exports.KanBanCardFindUniqueOrThrowArgsSchema_default = KanBanCardFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-KOXPW66L.cjs.map