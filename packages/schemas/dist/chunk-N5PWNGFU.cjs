"use strict";Object.defineProperty(exports, "__esModule", {value: true});


var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkXGSAA7XHcjs = require('./chunk-XGSAA7XH.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');


var _chunkFZVFNRNScjs = require('./chunk-FZVFNRNS.cjs');


var _chunk4QJOIHDOcjs = require('./chunk-4QJOIHDO.cjs');

// src/database/outputTypeSchemas/ServingFindFirstArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingFindFirstArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.ServingIncludeSchema.optional(),
  where: _chunk4QJOIHDOcjs.ServingWhereInputSchema.optional(),
  orderBy: _zod.z.union([_chunkXGSAA7XHcjs.ServingOrderByWithRelationInputSchema.array(), _chunkXGSAA7XHcjs.ServingOrderByWithRelationInputSchema]).optional(),
  cursor: _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema.optional(),
  take: _zod.z.number().optional(),
  skip: _zod.z.number().optional(),
  distinct: _zod.z.union([_chunkFZVFNRNScjs.ServingScalarFieldEnumSchema, _chunkFZVFNRNScjs.ServingScalarFieldEnumSchema.array()]).optional()
}).strict();
var ServingFindFirstArgsSchema_default = ServingFindFirstArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingFindFirstArgsSchema = ServingFindFirstArgsSchema; exports.ServingFindFirstArgsSchema_default = ServingFindFirstArgsSchema_default;
//# sourceMappingURL=chunk-N5PWNGFU.cjs.map