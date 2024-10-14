"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGTAHTKQVcjs = require('./chunk-GTAHTKQV.cjs');


var _chunkYP3LL2TPcjs = require('./chunk-YP3LL2TP.cjs');


var _chunk2CZMALKXcjs = require('./chunk-2CZMALKX.cjs');


var _chunkNULV7DRJcjs = require('./chunk-NULV7DRJ.cjs');



var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkFSP2XQSCcjs = require('./chunk-FSP2XQSC.cjs');

// src/database/outputTypeSchemas/TimePeriodUpsertArgsSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodUpsertArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.TimePeriodIncludeSchema.optional(),
  where: _chunkFSP2XQSCcjs.TimePeriodWhereUniqueInputSchema,
  create: _zod.z.union([_chunkGTAHTKQVcjs.TimePeriodCreateInputSchema, _chunkYP3LL2TPcjs.TimePeriodUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkNULV7DRJcjs.TimePeriodUpdateInputSchema, _chunk2CZMALKXcjs.TimePeriodUncheckedUpdateInputSchema])
}).strict();
var TimePeriodUpsertArgsSchema_default = TimePeriodUpsertArgsSchema;





exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodUpsertArgsSchema = TimePeriodUpsertArgsSchema; exports.TimePeriodUpsertArgsSchema_default = TimePeriodUpsertArgsSchema_default;
//# sourceMappingURL=chunk-E7I55FLZ.cjs.map