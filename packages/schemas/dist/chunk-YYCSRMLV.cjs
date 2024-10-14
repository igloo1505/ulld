"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');

// src/database/inputTypeSchemas/TimePeriodSelectSchema.ts
var _zod = require('zod');
var TimePeriodSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  start: _zod.z.boolean().optional(),
  end: _zod.z.boolean().optional(),
  dietId: _zod.z.boolean().optional(),
  Diet: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietArgsSchema)]).optional()
}).strict();
var TimePeriodSelectSchema_default = TimePeriodSelectSchema;




exports.TimePeriodSelectSchema = TimePeriodSelectSchema; exports.TimePeriodSelectSchema_default = TimePeriodSelectSchema_default;
//# sourceMappingURL=chunk-YYCSRMLV.cjs.map