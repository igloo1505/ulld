"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkGTAHTKQVcjs = require('./chunk-GTAHTKQV.cjs');


var _chunkYP3LL2TPcjs = require('./chunk-YP3LL2TP.cjs');



var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');

// src/database/outputTypeSchemas/TimePeriodCreateArgsSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodCreateArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.TimePeriodIncludeSchema.optional(),
  data: _zod.z.union([_chunkGTAHTKQVcjs.TimePeriodCreateInputSchema, _chunkYP3LL2TPcjs.TimePeriodUncheckedCreateInputSchema]).optional()
}).strict();
var TimePeriodCreateArgsSchema_default = TimePeriodCreateArgsSchema;





exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodCreateArgsSchema = TimePeriodCreateArgsSchema; exports.TimePeriodCreateArgsSchema_default = TimePeriodCreateArgsSchema_default;
//# sourceMappingURL=chunk-FC2EJBFB.cjs.map