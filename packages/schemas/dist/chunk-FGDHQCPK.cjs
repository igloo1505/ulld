"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkUVMQA5FCcjs = require('./chunk-UVMQA5FC.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');


var _chunkOBEFW72Ecjs = require('./chunk-OBEFW72E.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/TimePeriodFindFirstArgsSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodFindFirstArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.TimePeriodIncludeSchema.optional(),
  where: _chunk4QJOIHDOcjs.TimePeriodWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkUVMQA5FCcjs.TimePeriodOrderByWithRelationInputSchema.array(), _chunkUVMQA5FCcjs.TimePeriodOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkOBEFW72Ecjs.TimePeriodScalarFieldEnumSchema, _chunkOBEFW72Ecjs.TimePeriodScalarFieldEnumSchema.array()]).optional()
}).strict();
var TimePeriodFindFirstArgsSchema_default = TimePeriodFindFirstArgsSchema;





exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodFindFirstArgsSchema = TimePeriodFindFirstArgsSchema; exports.TimePeriodFindFirstArgsSchema_default = TimePeriodFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-FGDHQCPK.cjs.map