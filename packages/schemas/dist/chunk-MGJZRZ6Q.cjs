"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkK2ZWL5NZcjs = require('./chunk-K2ZWL5NZ.cjs');


var _chunkSB7LQ4RJcjs = require('./chunk-SB7LQ4RJ.cjs');


var _chunkRJPM5WRJcjs = require('./chunk-RJPM5WRJ.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkK2ZWL5NZcjs.RelatedValuesUpdateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkSB7LQ4RJcjs.RelatedValuesUncheckedUpdateWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema_default = RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema;




exports.RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema = RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema; exports.RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema_default = RelatedValuesUpdateWithWhereUniqueWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-MGJZRZ6Q.cjs.map