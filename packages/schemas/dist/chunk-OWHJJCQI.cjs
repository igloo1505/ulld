"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZXI3CXPCcjs = require('./chunk-ZXI3CXPC.cjs');


var _chunkN65HZY3Icjs = require('./chunk-N65HZY3I.cjs');


var _chunk4MX2EH5Wcjs = require('./chunk-4MX2EH5W.cjs');


var _chunkSX4WVYYUcjs = require('./chunk-SX4WVYYU.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk67ASKHYDcjs = require('./chunk-67ASKHYD.cjs');

// src/database/outputTypeSchemas/KanBanCardUpsertArgsSchema.ts
var _zod = require('zod');
var KanBanCardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  listId: _zod.z.boolean().optional(),
  indexWithinList: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  KanBanList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardUpsertArgsSchema = _zod.z.object({
  select: KanBanCardSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanBanCardIncludeSchema.optional(),
  where: _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema,
  create: _zod.z.union([_chunkZXI3CXPCcjs.KanBanCardCreateInputSchema, _chunkN65HZY3Icjs.KanBanCardUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkSX4WVYYUcjs.KanBanCardUpdateInputSchema, _chunk4MX2EH5Wcjs.KanBanCardUncheckedUpdateInputSchema])
}).strict();
var KanBanCardUpsertArgsSchema_default = KanBanCardUpsertArgsSchema;





exports.KanBanCardSelectSchema = KanBanCardSelectSchema; exports.KanBanCardUpsertArgsSchema = KanBanCardUpsertArgsSchema; exports.KanBanCardUpsertArgsSchema_default = KanBanCardUpsertArgsSchema_default;
//# sourceMappingURL=chunk-OWHJJCQI.cjs.map