"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2OMFR2Z5cjs = require('./chunk-2OMFR2Z5.cjs');


var _chunkNLVY4YYKcjs = require('./chunk-NLVY4YYK.cjs');


var _chunk75QHS3DWcjs = require('./chunk-75QHS3DW.cjs');


var _chunkZ5QFVX25cjs = require('./chunk-Z5QFVX25.cjs');


var _chunkNZ24BHG7cjs = require('./chunk-NZ24BHG7.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunk2OMFR2Z5cjs.RelatedValuesUpdateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkNLVY4YYKcjs.RelatedValuesUncheckedUpdateWithoutEquationsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunk75QHS3DWcjs.RelatedValuesCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkZ5QFVX25cjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema_default = RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema;




exports.RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema = RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema; exports.RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema_default = RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-PSUIPIHO.cjs.map