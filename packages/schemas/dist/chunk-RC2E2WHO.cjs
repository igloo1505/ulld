"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkM3EUTZFQcjs = require('./chunk-M3EUTZFQ.cjs');


var _chunkZIP3BKDDcjs = require('./chunk-ZIP3BKDD.cjs');


var _chunk5UEM4U5Ycjs = require('./chunk-5UEM4U5Y.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/outputTypeSchemas/QAPairGroupByArgsSchema.ts
var _zod = require('zod');
var QAPairGroupByArgsSchema = _zod.z.object({
  where: _chunkUNUMUJ42cjs.QAPairWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkZIP3BKDDcjs.QAPairOrderByWithAggregationInputSchema.array(), _chunkZIP3BKDDcjs.QAPairOrderByWithAggregationInputSchema]).optional(),
  by: _chunk5UEM4U5Ycjs.QAPairScalarFieldEnumSchema.array(),
  having: _chunkM3EUTZFQcjs.QAPairScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var QAPairGroupByArgsSchema_default = QAPairGroupByArgsSchema;




exports.QAPairGroupByArgsSchema = QAPairGroupByArgsSchema; exports.QAPairGroupByArgsSchema_default = QAPairGroupByArgsSchema_default;
//# sourceMappingURL=chunk-RC2E2WHO.cjs.map