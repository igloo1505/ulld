"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkN4OCLFS3cjs = require('./chunk-N4OCLFS3.cjs');

// src/database/outputTypeSchemas/TimePeriodFindUniqueArgsSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodFindUniqueArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.TimePeriodIncludeSchema.optional(),
  where: _chunkN4OCLFS3cjs.TimePeriodWhereUniqueInputSchema
}).strict();
var TimePeriodFindUniqueArgsSchema_default = TimePeriodFindUniqueArgsSchema;





exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodFindUniqueArgsSchema = TimePeriodFindUniqueArgsSchema; exports.TimePeriodFindUniqueArgsSchema_default = TimePeriodFindUniqueArgsSchema_default;
//# sourceMappingURL=chunk-JDEI7QN3.cjs.map