"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkBHXAPMTHcjs = require('./chunk-BHXAPMTH.cjs');


var _chunkTGEOLUMGcjs = require('./chunk-TGEOLUMG.cjs');


var _chunkXX657GIFcjs = require('./chunk-XX657GIF.cjs');

// src/database/inputTypeSchemas/DietUpdateManyWithWhereWithoutItemsInputSchema.ts
var _zod = require('zod');
var DietUpdateManyWithWhereWithoutItemsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkBHXAPMTHcjs.DietScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkXX657GIFcjs.DietUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkTGEOLUMGcjs.DietUncheckedUpdateManyWithoutItemsInputSchema)])
}).strict();
var DietUpdateManyWithWhereWithoutItemsInputSchema_default = DietUpdateManyWithWhereWithoutItemsInputSchema;




exports.DietUpdateManyWithWhereWithoutItemsInputSchema = DietUpdateManyWithWhereWithoutItemsInputSchema; exports.DietUpdateManyWithWhereWithoutItemsInputSchema_default = DietUpdateManyWithWhereWithoutItemsInputSchema_default;
//# sourceMappingURL=chunk-YYUUHZBP.cjs.map