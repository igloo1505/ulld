"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');

// src/database/outputTypeSchemas/ServingFindUniqueOrThrowArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingFindUniqueOrThrowArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.ServingIncludeSchema.optional(),
  where: _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema
}).strict();
var ServingFindUniqueOrThrowArgsSchema_default = ServingFindUniqueOrThrowArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingFindUniqueOrThrowArgsSchema = ServingFindUniqueOrThrowArgsSchema; exports.ServingFindUniqueOrThrowArgsSchema_default = ServingFindUniqueOrThrowArgsSchema_default;
//# sourceMappingURL=chunk-ZNXFCEUG.cjs.map