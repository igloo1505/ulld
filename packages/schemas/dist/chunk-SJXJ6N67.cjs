"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE3LSL5NXcjs = require('./chunk-E3LSL5NX.cjs');


var _chunkDIU4CJCAcjs = require('./chunk-DIU4CJCA.cjs');


var _chunkKEV5POACcjs = require('./chunk-KEV5POAC.cjs');


var _chunkRJPM5WRJcjs = require('./chunk-RJPM5WRJ.cjs');

// src/database/inputTypeSchemas/RelatedValuesCreateNestedManyWithoutEquationsInputSchema.ts
var _zod = require('zod');
var RelatedValuesCreateNestedManyWithoutEquationsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkDIU4CJCAcjs.RelatedValuesCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkDIU4CJCAcjs.RelatedValuesCreateWithoutEquationsInputSchema).array(), _zod.z.lazy(() => _chunkKEV5POACcjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkKEV5POACcjs.RelatedValuesUncheckedCreateWithoutEquationsInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkE3LSL5NXcjs.RelatedValuesCreateOrConnectWithoutEquationsInputSchema), _zod.z.lazy(() => _chunkE3LSL5NXcjs.RelatedValuesCreateOrConnectWithoutEquationsInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema), _zod.z.lazy(() => _chunkRJPM5WRJcjs.RelatedValuesWhereUniqueInputSchema).array()]).optional()
}).strict();
var RelatedValuesCreateNestedManyWithoutEquationsInputSchema_default = RelatedValuesCreateNestedManyWithoutEquationsInputSchema;




exports.RelatedValuesCreateNestedManyWithoutEquationsInputSchema = RelatedValuesCreateNestedManyWithoutEquationsInputSchema; exports.RelatedValuesCreateNestedManyWithoutEquationsInputSchema_default = RelatedValuesCreateNestedManyWithoutEquationsInputSchema_default;
//# sourceMappingURL=chunk-SJXJ6N67.cjs.map