"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4MX2EH5Wcjs = require('./chunk-4MX2EH5W.cjs');


var _chunkSX4WVYYUcjs = require('./chunk-SX4WVYYU.cjs');



var _chunk2TN6PYK3cjs = require('./chunk-2TN6PYK3.cjs');


var _chunk67ASKHYDcjs = require('./chunk-67ASKHYD.cjs');

// src/database/outputTypeSchemas/KanBanCardUpdateArgsSchema.ts
var _zod = require('zod');
var KanBanCardSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  listId: _zod.z.boolean().optional(),
  indexWithinList: _zod.z.boolean().optional(),
  label: _zod.z.boolean().optional(),
  details: _zod.z.boolean().optional(),
  KanBanList: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunk2TN6PYK3cjs.KanBanListArgsSchema)]).optional()
}).strict();
var KanBanCardUpdateArgsSchema = _zod.z.object({
  select: KanBanCardSelectSchema.optional(),
  include: _chunk2TN6PYK3cjs.KanBanCardIncludeSchema.optional(),
  data: _zod.z.union([_chunkSX4WVYYUcjs.KanBanCardUpdateInputSchema, _chunk4MX2EH5Wcjs.KanBanCardUncheckedUpdateInputSchema]),
  where: _chunk67ASKHYDcjs.KanBanCardWhereUniqueInputSchema
}).strict();
var KanBanCardUpdateArgsSchema_default = KanBanCardUpdateArgsSchema;





exports.KanBanCardSelectSchema = KanBanCardSelectSchema; exports.KanBanCardUpdateArgsSchema = KanBanCardUpdateArgsSchema; exports.KanBanCardUpdateArgsSchema_default = KanBanCardUpdateArgsSchema_default;
//# sourceMappingURL=chunk-YFOLWTVD.cjs.map