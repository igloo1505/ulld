"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDURHQP6Ecjs = require('./chunk-DURHQP6E.cjs');


var _chunkY2AXX5O2cjs = require('./chunk-Y2AXX5O2.cjs');



var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');


var _chunkA2X5KSO3cjs = require('./chunk-A2X5KSO3.cjs');

// src/database/outputTypeSchemas/ServingUpdateArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingUpdateArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.ServingIncludeSchema.optional(),
  data: _zod.z.union([_chunkDURHQP6Ecjs.ServingUpdateInputSchema, _chunkY2AXX5O2cjs.ServingUncheckedUpdateInputSchema]),
  where: _chunkA2X5KSO3cjs.ServingWhereUniqueInputSchema
}).strict();
var ServingUpdateArgsSchema_default = ServingUpdateArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingUpdateArgsSchema = ServingUpdateArgsSchema; exports.ServingUpdateArgsSchema_default = ServingUpdateArgsSchema_default;
//# sourceMappingURL=chunk-TAK2V7SC.cjs.map