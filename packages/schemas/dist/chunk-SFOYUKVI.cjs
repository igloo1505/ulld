"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2ZLUCEVBcjs = require('./chunk-2ZLUCEVB.cjs');


var _chunkP2CXKTNOcjs = require('./chunk-P2CXKTNO.cjs');


var _chunkTGC76B2Zcjs = require('./chunk-TGC76B2Z.cjs');


var _chunkPRQLXWPVcjs = require('./chunk-PRQLXWPV.cjs');


var _chunkFP5ZUKCXcjs = require('./chunk-FP5ZUKCX.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthUpsertArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthUpsertArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: _chunkFP5ZUKCXcjs.GoogleCalendarAuthWhereUniqueInputSchema,
  create: _zod.z.union([_chunk2ZLUCEVBcjs.GoogleCalendarAuthCreateInputSchema, _chunkP2CXKTNOcjs.GoogleCalendarAuthUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkTGC76B2Zcjs.GoogleCalendarAuthUpdateInputSchema, _chunkPRQLXWPVcjs.GoogleCalendarAuthUncheckedUpdateInputSchema])
}).strict();
var GoogleCalendarAuthUpsertArgsSchema_default = GoogleCalendarAuthUpsertArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthUpsertArgsSchema = GoogleCalendarAuthUpsertArgsSchema; exports.GoogleCalendarAuthUpsertArgsSchema_default = GoogleCalendarAuthUpsertArgsSchema_default;
//# sourceMappingURL=chunk-SFOYUKVI.cjs.map