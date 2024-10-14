"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQA5C3LIPcjs = require('./chunk-QA5C3LIP.cjs');


var _chunkOHLWTEXTcjs = require('./chunk-OHLWTEXT.cjs');


var _chunk6CDV3VOJcjs = require('./chunk-6CDV3VOJ.cjs');


var _chunkIYNN3UKQcjs = require('./chunk-IYNN3UKQ.cjs');

// src/database/outputTypeSchemas/BusinessContactGroupByArgsSchema.ts
var _zod = require('zod');
var BusinessContactGroupByArgsSchema = _zod.z.object({
  where: _chunkIYNN3UKQcjs.BusinessContactWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkOHLWTEXTcjs.BusinessContactOrderByWithAggregationInputSchema.array(), _chunkOHLWTEXTcjs.BusinessContactOrderByWithAggregationInputSchema]).optional(),
  by: _chunk6CDV3VOJcjs.BusinessContactScalarFieldEnumSchema.array(),
  having: _chunkQA5C3LIPcjs.BusinessContactScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BusinessContactGroupByArgsSchema_default = BusinessContactGroupByArgsSchema;




exports.BusinessContactGroupByArgsSchema = BusinessContactGroupByArgsSchema; exports.BusinessContactGroupByArgsSchema_default = BusinessContactGroupByArgsSchema_default;
//# sourceMappingURL=chunk-H5GEXUMJ.cjs.map