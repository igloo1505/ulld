"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkK2ZWL5NZcjs = require('./chunk-K2ZWL5NZ.cjs');


var _chunkSB7LQ4RJcjs = require('./chunk-SB7LQ4RJ.cjs');


var _chunkDIU4CJCAcjs = require('./chunk-DIU4CJCA.cjs');


var _chunkKEV5POACcjs = require('./chunk-KEV5POAC.cjs');


var _chunkRJPM5WRJcjs = require('./chunk-RJPM5WRJ.cjs');

// src/database/inputTypeSchemas/RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema),
  update: _zod.z.union([_zod.z.lazy(() => _chunkK2ZWL5NZcjs.RelatedValuesUpdateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkSB7LQ4RJcjs.RelatedValuesUncheckedUpdateWithoutEquationsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkDIU4CJCAcjs.RelatedValuesCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkKEV5POACcjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema_default = RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema;




exports.RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema = RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema; exports.RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema_default = RelatedValuesUpsertWithWhereUniqueWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-DJLFEMG3.cjs.map