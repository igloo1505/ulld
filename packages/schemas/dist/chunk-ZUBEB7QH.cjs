"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTCMBHTSZcjs = require('./chunk-TCMBHTSZ.cjs');


var _chunkEL3QVAAAcjs = require('./chunk-EL3QVAAA.cjs');


var _chunkRDW27HGKcjs = require('./chunk-RDW27HGK.cjs');


var _chunkJMCAELG2cjs = require('./chunk-JMCAELG2.cjs');


var _chunkZFB62GLPcjs = require('./chunk-ZFB62GLP.cjs');


var _chunkARCMLFBUcjs = require('./chunk-ARCMLFBU.cjs');


var _chunkVF4KROUCcjs = require('./chunk-VF4KROUC.cjs');


var _chunkY3BQCPCHcjs = require('./chunk-Y3BQCPCH.cjs');

// src/database/inputTypeSchemas/DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema.ts
var _zod = require('zod');
var DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkARCMLFBUcjs.DietaryItemCreateWithoutServingInputSchema), _zod.z.lazy(() => _chunkVF4KROUCcjs.DietaryItemUncheckedCreateWithoutServingInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunkZFB62GLPcjs.DietaryItemCreateOrConnectWithoutServingInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkEL3QVAAAcjs.DietaryItemUpsertWithoutServingInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkY3BQCPCHcjs.DietaryItemWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkTCMBHTSZcjs.DietaryItemUpdateToOneWithWhereWithoutServingInputSchema), _zod.z.lazy(() => _chunkJMCAELG2cjs.DietaryItemUpdateWithoutServingInputSchema), _zod.z.lazy(() => _chunkRDW27HGKcjs.DietaryItemUncheckedUpdateWithoutServingInputSchema)]).optional()
}).strict();
var DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema_default = DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema;




exports.DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema = DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema; exports.DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema_default = DietaryItemUpdateOneRequiredWithoutServingNestedInputSchema_default;
//# sourceMappingURL=chunk-ZUBEB7QH.cjs.map