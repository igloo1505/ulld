"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2NH2VI3Icjs = require('./chunk-2NH2VI3I.cjs');


var _chunkX3AHTJO3cjs = require('./chunk-X3AHTJO3.cjs');


var _chunkUYIRAQG2cjs = require('./chunk-UYIRAQG2.cjs');


var _chunk254ODWIRcjs = require('./chunk-254ODWIR.cjs');



var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');

// src/database/outputTypeSchemas/ServingUpsertArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingUpsertArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.ServingIncludeSchema.optional(),
  where: _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema,
  create: _zod.z.union([_chunk2NH2VI3Icjs.ServingCreateInputSchema, _chunkX3AHTJO3cjs.ServingUncheckedCreateInputSchema]),
  update: _zod.z.union([_chunkUYIRAQG2cjs.ServingUpdateInputSchema, _chunk254ODWIRcjs.ServingUncheckedUpdateInputSchema])
}).strict();
var ServingUpsertArgsSchema_default = ServingUpsertArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingUpsertArgsSchema = ServingUpsertArgsSchema; exports.ServingUpsertArgsSchema_default = ServingUpsertArgsSchema_default;
//# sourceMappingURL=chunk-COJUAR5A.cjs.map