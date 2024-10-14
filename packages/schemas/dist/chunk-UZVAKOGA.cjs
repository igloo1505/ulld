"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2OMFR2Z5cjs = require('./chunk-2OMFR2Z5.cjs');


var _chunkNLVY4YYKcjs = require('./chunk-NLVY4YYK.cjs');


var _chunkNZ24BHG7cjs = require('./chunk-NZ24BHG7.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkNZ24BHG7cjs.RelatedValuesWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk2OMFR2Z5cjs.RelatedValuesUpdateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkNLVY4YYKcjs.RelatedValuesUncheckedUpdateWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema_default = RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema;




exports.RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema = RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema; exports.RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema_default = RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-UZVAKOGA.cjs.map