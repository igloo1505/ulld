"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkKLKNQNVScjs = require('./chunk-KLKNQNVS.cjs');


var _chunkHCHIQX7Vcjs = require('./chunk-HCHIQX7V.cjs');

// src/database/outputTypeSchemas/DailyFocusCreateArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusCreateArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  data: _zod.z.union([_chunkKLKNQNVScjs.DailyFocusCreateInputSchema, _chunkHCHIQX7Vcjs.DailyFocusUncheckedCreateInputSchema])
}).strict();
var DailyFocusCreateArgsSchema_default = DailyFocusCreateArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusCreateArgsSchema = DailyFocusCreateArgsSchema; exports.DailyFocusCreateArgsSchema_default = DailyFocusCreateArgsSchema_default;
//# sourceMappingURL=chunk-TJFCEJT3.cjs.map