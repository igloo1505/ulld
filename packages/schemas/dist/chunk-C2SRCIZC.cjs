"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2J7SWVD7cjs = require('./chunk-2J7SWVD7.cjs');


var _chunkBKB3QDLCcjs = require('./chunk-BKB3QDLC.cjs');


var _chunkGHFCOP5Kcjs = require('./chunk-GHFCOP5K.cjs');

// src/database/inputTypeSchemas/DietUpdateManyWithWhereWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietUpdateManyWithWhereWithoutItemsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunk2J7SWVD7cjs.DietScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkGHFCOP5Kcjs.DietUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkBKB3QDLCcjs.DietUncheckedUpdateManyWithoutItemsInputSchema)])
}).strict();
var DietUpdateManyWithWhereWithoutItemsInputSchema_default = DietUpdateManyWithWhereWithoutItemsInputSchema;




exports.DietUpdateManyWithWhereWithoutItemsInputSchema = DietUpdateManyWithWhereWithoutItemsInputSchema; exports.DietUpdateManyWithWhereWithoutItemsInputSchema_default = DietUpdateManyWithWhereWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-C2SRCIZC.cjs.map