"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkADEBEWEBcjs = require('./chunk-ADEBEWEB.cjs');


var _chunkUXRMLJ4Tcjs = require('./chunk-UXRMLJ4T.cjs');


var _chunkSUTZUCHPcjs = require('./chunk-SUTZUCHP.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/BibGroupByArgsSchema.ts
var _zod = require('zod');
var BibGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.BibWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkUXRMLJ4Tcjs.BibOrderByWithAggregationInputSchema.array(), _chunkUXRMLJ4Tcjs.BibOrderByWithAggregationInputSchema]).optional(),
  by: _chunkSUTZUCHPcjs.BibScalarFieldEnumSchema.array(),
  having: _chunkADEBEWEBcjs.BibScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var BibGroupByArgsSchema_default = BibGroupByArgsSchema;




exports.BibGroupByArgsSchema = BibGroupByArgsSchema; exports.BibGroupByArgsSchema_default = BibGroupByArgsSchema_default;
//# sourceMappingURL=chunk-Z4DCEDE2.cjs.map