"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkUYIRAQG2cjs = require('./chunk-UYIRAQG2.cjs');


var _chunk254ODWIRcjs = require('./chunk-254ODWIR.cjs');



var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');

// src/database/outputTypeSchemas/ServingUpdateArgsSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingUpdateArgsSchema = _zod.z.object({
  select: ServingSelectSchema.optional(),
  include: _chunkN2ITDNOTcjs.ServingIncludeSchema.optional(),
  data: _zod.z.union([_chunkUYIRAQG2cjs.ServingUpdateInputSchema, _chunk254ODWIRcjs.ServingUncheckedUpdateInputSchema]),
  where: _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema
}).strict();
var ServingUpdateArgsSchema_default = ServingUpdateArgsSchema;





exports.ServingSelectSchema = ServingSelectSchema; exports.ServingUpdateArgsSchema = ServingUpdateArgsSchema; exports.ServingUpdateArgsSchema_default = ServingUpdateArgsSchema_default;
//# sourceMappingURL=chunk-HWB4L34D.cjs.map