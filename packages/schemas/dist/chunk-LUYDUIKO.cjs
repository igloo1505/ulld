"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkFSP2XQSCcjs = require('./chunk-FSP2XQSC.cjs');

// src/database/outputTypeSchemas/TimePeriodFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.TimePeriodIncludeSchema.optional(),
  where: _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema
}).strict();
var TimePeriodFindUniqueOrThrowArgsSchema_default = TimePeriodFindUniqueOrThrowArgsSchema;





exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodFindUniqueOrThrowArgsSchema = TimePeriodFindUniqueOrThrowArgsSchema; exports.TimePeriodFindUniqueOrThrowArgsSchema_default = TimePeriodFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-LUYDUIKO.cjs.map