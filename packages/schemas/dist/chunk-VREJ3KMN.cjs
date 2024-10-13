"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZLTPFLTVcjs = require('./chunk-ZLTPFLTV.cjs');


var _chunk5L6HBPWQcjs = require('./chunk-5L6HBPWQ.cjs');


var _chunkFP5ZUKCXcjs = require('./chunk-FP5ZUKCX.cjs');


var _chunkNCMAIJ2Scjs = require('./chunk-NCMAIJ2S.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthFindFirstArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  auth: _zod.z.boolean().optional()
}).strict();
var GoogleCalendarAuthFindFirstArgsSchema = _zod.z.object({
  select: GoogleCalendarAuthSelectSchema.optional(),
  where: _chunkNCMAIJ2Scjs.GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZLTPFLTVcjs.GoogleCalendarAuthOrderByWithRelationInputSchema.array(), _chunkZLTPFLTVcjs.GoogleCalendarAuthOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkFP5ZUKCXcjs.GoogleCalendarAuthWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunk5L6HBPWQcjs.GoogleCalendarAuthScalarFieldEnumSchema, _chunk5L6HBPWQcjs.GoogleCalendarAuthScalarFieldEnumSchema.array()]).optional()
}).strict();
var GoogleCalendarAuthFindFirstArgsSchema_default = GoogleCalendarAuthFindFirstArgsSchema;





exports.GoogleCalendarAuthSelectSchema = GoogleCalendarAuthSelectSchema; exports.GoogleCalendarAuthFindFirstArgsSchema = GoogleCalendarAuthFindFirstArgsSchema; exports.GoogleCalendarAuthFindFirstArgsSchema_default = GoogleCalendarAuthFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-VREJ3KMN.cjs.map