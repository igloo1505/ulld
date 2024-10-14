"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkLN23EB36cjs = require('./chunk-LN23EB36.cjs');


var _chunk75QHS3DWcjs = require('./chunk-75QHS3DW.cjs');


var _chunkZ5QFVX25cjs = require('./chunk-Z5QFVX25.cjs');


var _chunkNZ24BHG7cjs = require('./chunk-NZ24BHG7.cjs');

// src/database/inputTypeSchemas/RelatedValuesCreateNestedManyWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesCreateNestedManyWithoutEquationsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunk75QHS3DWcjs.RelatedValuesCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunk75QHS3DWcjs.RelatedValuesCreateWithoutEquationsInputSchema).array(), _zod.z.lazy(() => _chunkZ5QFVX25cjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkZ5QFVX25cjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkLN23EB36cjs.RelatedValuesCreateOrConnectWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkLN23EB36cjs.RelatedValuesCreateOrConnectWithoutEquationsInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema), _zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema).array()]).optional()
}).strict();
var RelatedValuesCreateNestedManyWithoutEquationsInputSchema_default = RelatedValuesCreateNestedManyWithoutEquationsInputSchema;




exports.RelatedValuesCreateNestedManyWithoutEquationsInputSchema = RelatedValuesCreateNestedManyWithoutEquationsInputSchema; exports.RelatedValuesCreateNestedManyWithoutEquationsInputSchema_default = RelatedValuesCreateNestedManyWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-ARLLUPPQ.cjs.map