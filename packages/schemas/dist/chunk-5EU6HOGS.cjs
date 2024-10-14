"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLQH4O3QYcjs = require('./chunk-LQH4O3QY.cjs');


var _chunkNRMDM3TTcjs = require('./chunk-NRMDM3TT.cjs');


var _chunkDURHQP6Ecjs = require('./chunk-DURHQP6E.cjs');


var _chunkY2AXX5O2cjs = require('./chunk-Y2AXX5O2.cjs');



var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkA2X5KSO3cjs = require('./chunk-A2X5KSO3.cjs');

// src/database/outputTypeSchemas/ServingUpsertArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingUpsertArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.ServingIncludeSchema.optional(),
  where: _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema,
  create: _zod.z.union([_chunkLQH4O3QYcjs.ServingCreateInputSchema, _chunkNRMDM3TTcjs.ServingUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkDURHQP6Ecjs.ServingUpdateInputSchema, _chunkY2AXX5O2cjs.ServingUncheckedUpdateInputSchema])
}).strict();
var ServingUpsertArgsSchema_default = ServingUpsertArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingUpsertArgsSchema = ServingUpsertArgsSchema; exports.ServingUpsertArgsSchema_default = ServingUpsertArgsSchema_default;
//# sourceMappingURL=chunk-5EU6HOGS.cjs.map