"use strict";Object.defineProperty(exports, "__esModule", {value: true});



var _chunk2MYBOFS7cjs = require('./chunk-2MYBOFS7.cjs');


var _chunkMZSXSRMGcjs = require('./chunk-MZSXSRMG.cjs');


var _chunkWMQC5L2Zcjs = require('./chunk-WMQC5L2Z.cjs');


var _chunkTRWQMEUBcjs = require('./chunk-TRWQMEUB.cjs');


var _chunkOLKPIJWRcjs = require('./chunk-OLKPIJWR.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/KanBanListFindFirstArgsSchema.ts
var _zod = require('zod');
var KanBanListSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  indexWithinBoard: _zod.z.boolean().optional(),
  title: _zod.z.boolean().optional(),
  boardId: _zod.z.boolean().optional(),
  cards: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanBanCardFindManyArgsSchema)]).optional(),
  Kanban: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2MYBOFS7cjs.KanbanArgsSchema)]).optional(),
  _count: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMZSXSRMGcjs.KanBanListCountOutputTypeArgsSchema)]).optional()
}).strict();
var KanBanListFindFirstArgsSchema = _zod.z.object({
  select: KanBanListSelectSchema.optional(),
  include: _chunk2MYBOFS7cjs.KanBanListIncludeSchema.optional(),
  where: _chunkUNUMUJ42cjs.KanBanListWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkTRWQMEUBcjs.KanBanListOrderByWithRelationInputSchema.array(), _chunkTRWQMEUBcjs.KanBanListOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkWMQC5L2Zcjs.KanBanListWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkOLKPIJWRcjs.KanBanListScalarFieldEnumSchema, _chunkOLKPIJWRcjs.KanBanListScalarFieldEnumSchema.array()]).optional()
}).strict();
var KanBanListFindFirstArgsSchema_default = KanBanListFindFirstArgsSchema;





exports.KanBanListSelectSchema = KanBanListSelectSchema; exports.KanBanListFindFirstArgsSchema = KanBanListFindFirstArgsSchema; exports.KanBanListFindFirstArgsSchema_default = KanBanListFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-MRCQATNS.cjs.map