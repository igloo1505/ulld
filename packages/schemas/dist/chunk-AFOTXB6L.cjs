"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLQH4O3QYcjs = require('./chunk-LQH4O3QY.cjs');


var _chunkNRMDM3TTcjs = require('./chunk-NRMDM3TT.cjs');



var _chunkMWW6FNG3cjs = require('./chunk-MWW6FNG3.cjs');

// src/database/outputTypeSchemas/ServingCreateArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkMWW6FNG3cjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingCreateArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkMWW6FNG3cjs.ServingIncludeSchema.optional(),
  data: _zod.z.union([_chunkLQH4O3QYcjs.ServingCreateInputSchema, _chunkNRMDM3TTcjs.ServingUncheckedCreateInputSchema])
}).strict();
var ServingCreateArgsSchema_default = ServingCreateArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingCreateArgsSchema = ServingCreateArgsSchema; exports.ServingCreateArgsSchema_default = ServingCreateArgsSchema_default;
//# sourceMappingURL=chunk-AFOTXB6L.cjs.map