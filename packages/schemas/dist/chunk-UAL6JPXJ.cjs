"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkAKJGX73Qcjs = require('./chunk-AKJGX73Q.cjs');


var _chunkFWDI77GAcjs = require('./chunk-FWDI77GA.cjs');



var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');

// src/database/outputTypeSchemas/TimePeriodCreateArgsSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodCreateArgsSchema = _zod.z.object({
  select: TimePeriodSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.TimePeriodIncludeSchema.optional(),
  data: _zod.z.union([_chunkAKJGX73Qcjs.TimePeriodCreateInputSchema, _chunkFWDI77GAcjs.TimePeriodUncheckedCreateInputSchema]).optional()
}).strict();
var TimePeriodCreateArgsSchema_default = TimePeriodCreateArgsSchema;





exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodCreateArgsSchema = TimePeriodCreateArgsSchema; exports.TimePeriodCreateArgsSchema_default = TimePeriodCreateArgsSchema_default;
//# sourceMappingURL=chunk-UAL6JPXJ.cjs.map