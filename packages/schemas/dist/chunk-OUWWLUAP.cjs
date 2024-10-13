"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAKJGX73Qcjs = require('./chunk-AKJGX73Q.cjs');


var _chunkFWDI77GAcjs = require('./chunk-FWDI77GA.cjs');


var _chunkMOPKABQWcjs = require('./chunk-MOPKABQW.cjs');


var _chunkCKIYIVLCcjs = require('./chunk-CKIYIVLC.cjs');



var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');

// src/database/outputTypeSchemas/TimePeriodUpsertArgsSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodUpsertArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.TimePeriodIncludeSchema.optional(),
  where: _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema,
  create: _zod.z.union([_chunkAKJGX73Qcjs.TimePeriodCreateInputSchema, _chunkFWDI77GAcjs.TimePeriodUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkCKIYIVLCcjs.TimePeriodUpdateInputSchema, _chunkMOPKABQWcjs.TimePeriodUncheckedUpdateInputSchema])
}).strict();
var TimePeriodUpsertArgsSchema_default = TimePeriodUpsertArgsSchema;





exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodUpsertArgsSchema = TimePeriodUpsertArgsSchema; exports.TimePeriodUpsertArgsSchema_default = TimePeriodUpsertArgsSchema_default;
//# sourceMappingURL=chunk-OUWWLUAP.cjs.map