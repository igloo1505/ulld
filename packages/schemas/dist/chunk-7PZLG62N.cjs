"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2NH2VI3Icjs = require('./chunk-2NH2VI3I.cjs');


var _chunkX3AHTJO3cjs = require('./chunk-X3AHTJO3.cjs');



var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');

// src/database/outputTypeSchemas/ServingCreateArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingCreateArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.ServingIncludeSchema.optional(),
  data: _zod.z.union([_chunk2NH2VI3Icjs.ServingCreateInputSchema, _chunkX3AHTJO3cjs.ServingUncheckedCreateInputSchema])
}).strict();
var ServingCreateArgsSchema_default = ServingCreateArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingCreateArgsSchema = ServingCreateArgsSchema; exports.ServingCreateArgsSchema_default = ServingCreateArgsSchema_default;
//# sourceMappingURL=chunk-7PZLG62N.cjs.map