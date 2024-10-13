"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkN7TUPIQVcjs = require('./chunk-N7TUPIQV.cjs');


var _chunkYWPI5TBLcjs = require('./chunk-YWPI5TBL.cjs');


var _chunkDN3XII3Jcjs = require('./chunk-DN3XII3J.cjs');


var _chunkH7ATQFXCcjs = require('./chunk-H7ATQFXC.cjs');

// src/database/outputTypeSchemas/RandomImageGroupByArgsSchema.ts
var _zod = require('zod');
var RandomImageGroupByArgsSchema = _zod.z.object({
  where: _chunkH7ATQFXCcjs.RandomImageWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkYWPI5TBLcjs.RandomImageOrderByWithAggregationInputSchema.array(), _chunkYWPI5TBLcjs.RandomImageOrderByWithAggregationInputSchema]).optional(),
  by: _chunkDN3XII3Jcjs.RandomImageScalarFieldEnumSchema.array(),
  having: _chunkN7TUPIQVcjs.RandomImageScalarWhereWithAggregatesInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional()
}).strict();
var RandomImageGroupByArgsSchema_default = RandomImageGroupByArgsSchema;




exports.RandomImageGroupByArgsSchema = RandomImageGroupByArgsSchema; exports.RandomImageGroupByArgsSchema_default = RandomImageGroupByArgsSchema_default;
//# sourceMappingURL=chunk-RKKOSYAV.cjs.map