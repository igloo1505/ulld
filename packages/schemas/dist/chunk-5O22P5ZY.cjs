"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkANCCV4ARcjs = require('./chunk-ANCCV4AR.cjs');


var _chunkRO2FGWOJcjs = require('./chunk-RO2FGWOJ.cjs');

// src/database/outputTypeSchemas/DailyFocusCreateArgsSchema.ts
var _zod = require('zod');
var DailyFocusSelectSchema = _zod.z.object({
  value: _zod.z.boolean().optional(),
  createdAt: _zod.z.boolean().optional()
}).strict();
var DailyFocusCreateArgsSchema = _zod.z.object({
  select: DailyFocusSelectSchema.optional(),
  data: _zod.z.union([_chunkANCCV4ARcjs.DailyFocusCreateInputSchema, _chunkRO2FGWOJcjs.DailyFocusUncheckedCreateInputSchema])
}).strict();
var DailyFocusCreateArgsSchema_default = DailyFocusCreateArgsSchema;





exports.DailyFocusSelectSchema = DailyFocusSelectSchema; exports.DailyFocusCreateArgsSchema = DailyFocusCreateArgsSchema; exports.DailyFocusCreateArgsSchema_default = DailyFocusCreateArgsSchema_default;
//# sourceMappingURL=chunk-5O22P5ZY.cjs.map