"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDIU4CJCAcjs = require('./chunk-DIU4CJCA.cjs');


var _chunkKEV5POACcjs = require('./chunk-KEV5POAC.cjs');


var _chunkRJPM5WRJcjs = require('./chunk-RJPM5WRJ.cjs');

// src/database/inputTypeSchemas/RelatedValuesCreateOrConnectWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesCreateOrConnectWithoutEquationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkDIU4CJCAcjs.RelatedValuesCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkKEV5POACcjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema)])
}).strict();
var RelatedValuesCreateOrConnectWithoutEquationsInputSchema_default = RelatedValuesCreateOrConnectWithoutEquationsInputSchema;




exports.RelatedValuesCreateOrConnectWithoutEquationsInputSchema = RelatedValuesCreateOrConnectWithoutEquationsInputSchema; exports.RelatedValuesCreateOrConnectWithoutEquationsInputSchema_default = RelatedValuesCreateOrConnectWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-E3LSL5NX.cjs.map