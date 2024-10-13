"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');

// src/database/outputTypeSchemas/ServingDeleteArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingDeleteArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.ServingIncludeSchema.optional(),
  where: _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema
}).strict();
var ServingDeleteArgsSchema_default = ServingDeleteArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingDeleteArgsSchema = ServingDeleteArgsSchema; exports.ServingDeleteArgsSchema_default = ServingDeleteArgsSchema_default;
//# sourceMappingURL=chunk-N33ANFQ4.cjs.map