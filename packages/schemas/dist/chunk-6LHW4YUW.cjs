"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkT7LSCSLIcjs = require('./chunk-T7LSCSLI.cjs');


var _chunk6UMP7M7Ocjs = require('./chunk-6UMP7M7O.cjs');


var _chunkHGLQEYTScjs = require('./chunk-HGLQEYTS.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthAggregateArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthAggregateArgsSchema = _zod.z.object({
  where: _chunkHGLQEYTScjs.GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkT7LSCSLIcjs.GoogleCalendarAuthOrderByWithRelationInputSchema.array(), _chunkT7LSCSLIcjs.GoogleCalendarAuthOrderByWithRelationInputSchema]).optional(),
  cursor: _chunk6UMP7M7Ocjs.GoogleCalendarAuthWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var GoogleCalendarAuthAggregateArgsSchema_default = GoogleCalendarAuthAggregateArgsSchema;




exports.GoogleCalendarAuthAggregateArgsSchema = GoogleCalendarAuthAggregateArgsSchema; exports.GoogleCalendarAuthAggregateArgsSchema_default = GoogleCalendarAuthAggregateArgsSchema_default;
//# sourceMappingURL=chunk-6LHW4YUW.cjs.map