"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkN2ITDNOTcjs = require('./chunk-N2ITDNOT.cjs');

// src/database/inputTypeSchemas/ServingSelectSchema.ts
var _zod = require('zod');
var ServingSelectSchema = _zod.z.object({
  id: _zod.z.boolean().optional(),
  dietaryItemId: _zod.z.boolean().optional(),
  quant_oz: _zod.z.boolean().optional(),
  quant_guess: _zod.z.boolean().optional(),
  item: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkN2ITDNOTcjs.DietaryItemArgsSchema)]).optional()
}).strict();
var ServingSelectSchema_default = ServingSelectSchema;




exports.ServingSelectSchema = ServingSelectSchema; exports.ServingSelectSchema_default = ServingSelectSchema_default;
//# sourceMappingURL=chunk-5MISDIR6.cjs.map