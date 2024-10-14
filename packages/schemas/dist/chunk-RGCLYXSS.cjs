"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUYESGAP6cjs = require('./chunk-UYESGAP6.cjs');


var _chunkUO5TR2SFcjs = require('./chunk-UO5TR2SF.cjs');


var _chunkQY4M5Y6Kcjs = require('./chunk-QY4M5Y6K.cjs');


var _chunkZIMNRZU5cjs = require('./chunk-ZIMNRZU5.cjs');


var _chunk6UMP7M7Ocjs = require('./chunk-6UMP7M7O.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthUpsertArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthUpsertArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: _chunk6UMP7M7Ocjs.GoogleCalendarAuthWhereUniqueInputSchema,
  create: _zod.z.union([_chunkUYESGAP6cjs.GoogleCalendarAuthCreateInputSchema, _chunkUO5TR2SFcjs.GoogleCalendarAuthUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkQY4M5Y6Kcjs.GoogleCalendarAuthUpdateInputSchema, _chunkZIMNRZU5cjs.GoogleCalendarAuthUncheckedUpdateInputSchema])
}).strict();
var GoogleCalendarAuthUpsertArgsSchema_default = GoogleCalendarAuthUpsertArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthUpsertArgsSchema = GoogleCalendarAuthUpsertArgsSchema; exports.GoogleCalendarAuthUpsertArgsSchema_default = GoogleCalendarAuthUpsertArgsSchema_default;
//# sourceMappingURL=chunk-RGCLYXSS.cjs.map