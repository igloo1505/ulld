"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkZLTPFLTVcjs = require('./chunk-ZLTPFLTV.cjs');


var _chunkFP5ZUKCXcjs = require('./chunk-FP5ZUKCX.cjs');


var _chunkNCMAIJ2Scjs = require('./chunk-NCMAIJ2S.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthAggregateArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthAggregateArgsSchema = _zod.z.object({
  where: _chunkNCMAIJ2Scjs.GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZLTPFLTVcjs.GoogleCalendarAuthOrderByWithRelationInputSchema.array(), _chunkZLTPFLTVcjs.GoogleCalendarAuthOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkFP5ZUKCXcjs.GoogleCalendarAuthWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var GoogleCalendarAuthAggregateArgsSchema_default = GoogleCalendarAuthAggregateArgsSchema;




exports.GoogleCalendarAuthAggregateArgsSchema = GoogleCalendarAuthAggregateArgsSchema; exports.GoogleCalendarAuthAggregateArgsSchema_default = GoogleCalendarAuthAggregateArgsSchema_default;
//# sourceMappingURL=chunk-WHIY53BO.cjs.map