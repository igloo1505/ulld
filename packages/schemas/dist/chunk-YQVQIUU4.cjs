"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk7TTPY5BRcjs = require('./chunk-7TTPY5BR.cjs');


var _chunkE2HIV62Fcjs = require('./chunk-E2HIV62F.cjs');


var _chunk5L6HBPWQcjs = require('./chunk-5L6HBPWQ.cjs');


var _chunkNCMAIJ2Scjs = require('./chunk-NCMAIJ2S.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthGroupByArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthGroupByArgsSchema = _zod.z.object({
  where: _chunkNCMAIJ2Scjs.GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkE2HIV62Fcjs.GoogleCalendarAuthOrderByWithAggregationInputSchema.array(), _chunkE2HIV62Fcjs.GoogleCalendarAuthOrderByWithAggregationInputSchema]).optional(),
  by: _chunk5L6HBPWQcjs.GoogleCalendarAuthScalarFieldEnumSchema.array(),
  having: _chunk7TTPY5BRcjs.GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var GoogleCalendarAuthGroupByArgsSchema_default = GoogleCalendarAuthGroupByArgsSchema;




exports.GoogleCalendarAuthGroupByArgsSchema = GoogleCalendarAuthGroupByArgsSchema; exports.GoogleCalendarAuthGroupByArgsSchema_default = GoogleCalendarAuthGroupByArgsSchema_default;
//# sourceMappingURL=chunk-YQVQIUU4.cjs.map