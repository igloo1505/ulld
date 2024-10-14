"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2CZMALKXcjs = require('./chunk-2CZMALKX.cjs');


var _chunkNULV7DRJcjs = require('./chunk-NULV7DRJ.cjs');



var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkFSP2XQSCcjs = require('./chunk-FSP2XQSC.cjs');

// src/database/outputTypeSchemas/TimePeriodUpdateArgsSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodUpdateArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.TimePeriodIncludeSchema.optional(),
  data: _zod.z.union([_chunkNULV7DRJcjs.TimePeriodUpdateInputSchema, _chunk2CZMALKXcjs.TimePeriodUncheckedUpdateInputSchema]),
  where: _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema
}).strict();
var TimePeriodUpdateArgsSchema_default = TimePeriodUpdateArgsSchema;





exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodUpdateArgsSchema = TimePeriodUpdateArgsSchema; exports.TimePeriodUpdateArgsSchema_default = TimePeriodUpdateArgsSchema_default;
//# sourceMappingURL=chunk-ZPBFKULQ.cjs.map