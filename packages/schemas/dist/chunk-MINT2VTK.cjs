"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFHGT62N2cjs = require('./chunk-FHGT62N2.cjs');


var _chunkVW4JRYLLcjs = require('./chunk-VW4JRYLL.cjs');


var _chunkLNEEBWJKcjs = require('./chunk-LNEEBWJK.cjs');


var _chunkHGLQEYTScjs = require('./chunk-HGLQEYTS.cjs');

// src/database/outputTypeSchemas/GoogleCalendarAuthGroupByArgsSchema.ts
var _zod = require('zod');
var GoogleCalendarAuthGroupByArgsSchema = _zod.z.object({
  where: _chunkHGLQEYTScjs.GoogleCalendarAuthWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkVW4JRYLLcjs.GoogleCalendarAuthOrderByWithAggregationInputSchema.array(), _chunkVW4JRYLLcjs.GoogleCalendarAuthOrderByWithAggregationInputSchema]).optional(),
  by: _chunkLNEEBWJKcjs.GoogleCalendarAuthScalarFieldEnumSchema.array(),
  having: _chunkFHGT62N2cjs.GoogleCalendarAuthScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var GoogleCalendarAuthGroupByArgsSchema_default = GoogleCalendarAuthGroupByArgsSchema;




exports.GoogleCalendarAuthGroupByArgsSchema = GoogleCalendarAuthGroupByArgsSchema; exports.GoogleCalendarAuthGroupByArgsSchema_default = GoogleCalendarAuthGroupByArgsSchema_default;
//# sourceMappingURL=chunk-MINT2VTK.cjs.map