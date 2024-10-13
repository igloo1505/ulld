"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMOPKABQWcjs = require('./chunk-MOPKABQW.cjs');


var _chunkCKIYIVLCcjs = require('./chunk-CKIYIVLC.cjs');



var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');

// src/database/outputTypeSchemas/TimePeriodUpdateArgsSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodUpdateArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.TimePeriodIncludeSchema.optional(),
  data: _zod.z.union([_chunkCKIYIVLCcjs.TimePeriodUpdateInputSchema, _chunkMOPKABQWcjs.TimePeriodUncheckedUpdateInputSchema]),
  where: _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema
}).strict();
var TimePeriodUpdateArgsSchema_default = TimePeriodUpdateArgsSchema;





exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodUpdateArgsSchema = TimePeriodUpdateArgsSchema; exports.TimePeriodUpdateArgsSchema_default = TimePeriodUpdateArgsSchema_default;
//# sourceMappingURL=chunk-XG4267KW.cjs.map