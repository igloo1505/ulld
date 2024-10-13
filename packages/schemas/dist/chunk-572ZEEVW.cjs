"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSWD2AQPScjs = require('./chunk-SWD2AQPS.cjs');


var _chunkJP33CJEVcjs = require('./chunk-JP33CJEV.cjs');


var _chunkKRDQXIG5cjs = require('./chunk-KRDQXIG5.cjs');


var _chunk4FYHHISDcjs = require('./chunk-4FYHHISD.cjs');

// src/database/outputTypeSchemas/BusinessContactGroupByArgsSchema.ts
var _zod = require('zod');
var BusinessContactGroupByArgsSchema = _zod.z.object({
  where: _chunk4FYHHISDcjs.BusinessContactWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkJP33CJEVcjs.BusinessContactOrderByWithAggregationInputSchema.array(), _chunkJP33CJEVcjs.BusinessContactOrderByWithAggregationInputSchema]).optional(),
  by: _chunkKRDQXIG5cjs.BusinessContactScalarFieldEnumSchema.array(),
  having: _chunkSWD2AQPScjs.BusinessContactScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BusinessContactGroupByArgsSchema_default = BusinessContactGroupByArgsSchema;




exports.BusinessContactGroupByArgsSchema = BusinessContactGroupByArgsSchema; exports.BusinessContactGroupByArgsSchema_default = BusinessContactGroupByArgsSchema_default;
//# sourceMappingURL=chunk-572ZEEVW.cjs.map