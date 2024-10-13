"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk5NF6R453cjs = require('./chunk-5NF6R453.cjs');


var _chunkFAKTSXXZcjs = require('./chunk-FAKTSXXZ.cjs');


var _chunkGXKT2J7Acjs = require('./chunk-GXKT2J7A.cjs');


var _chunkXQKVAOTYcjs = require('./chunk-XQKVAOTY.cjs');

// src/database/outputTypeSchemas/EquationGroupByArgsSchema.ts
var _zod = require('zod');
var EquationGroupByArgsSchema = _zod.z.object({
  where: _chunkXQKVAOTYcjs.EquationWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkFAKTSXXZcjs.EquationOrderByWithAggregationInputSchema.array(), _chunkFAKTSXXZcjs.EquationOrderByWithAggregationInputSchema]).optional(),
  by: _chunkGXKT2J7Acjs.EquationScalarFieldEnumSchema.array(),
  having: _chunk5NF6R453cjs.EquationScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var EquationGroupByArgsSchema_default = EquationGroupByArgsSchema;




exports.EquationGroupByArgsSchema = EquationGroupByArgsSchema; exports.EquationGroupByArgsSchema_default = EquationGroupByArgsSchema_default;
//# sourceMappingURL=chunk-7RKOSBNX.cjs.map