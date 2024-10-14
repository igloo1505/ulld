"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk75QHS3DWcjs = require('./chunk-75QHS3DW.cjs');


var _chunkZ5QFVX25cjs = require('./chunk-Z5QFVX25.cjs');


var _chunkNZ24BHG7cjs = require('./chunk-NZ24BHG7.cjs');

// src/database/inputTypeSchemas/RelatedValuesCreateOrConnectWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesCreateOrConnectWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunk75QHS3DWcjs.RelatedValuesCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkZ5QFVX25cjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesCreateOrConnectWithoutEquationsInputSchema_default = RelatedValuesCreateOrConnectWithoutEquationsInputSchema;




exports.RelatedValuesCreateOrConnectWithoutEquationsInputSchema = RelatedValuesCreateOrConnectWithoutEquationsInputSchema; exports.RelatedValuesCreateOrConnectWithoutEquationsInputSchema_default = RelatedValuesCreateOrConnectWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-LN23EB36.cjs.map