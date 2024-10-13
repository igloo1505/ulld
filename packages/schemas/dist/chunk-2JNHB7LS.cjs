"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJ4KU2KSWcjs = require('./chunk-J4KU2KSW.cjs');


var _chunkTKQYIIUNcjs = require('./chunk-TKQYIIUN.cjs');


var _chunkC3V2CAYXcjs = require('./chunk-C3V2CAYX.cjs');


var _chunkKKFWEL4Wcjs = require('./chunk-KKFWEL4W.cjs');

// src/database/inputTypeSchemas/EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkTKQYIIUNcjs.EquationCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkTKQYIIUNcjs.EquationCreateWithoutRelatedValuesInputSchema).array(), _zod.z.lazy(() => _chunkC3V2CAYXcjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkC3V2CAYXcjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkJ4KU2KSWcjs.EquationCreateOrConnectWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkJ4KU2KSWcjs.EquationCreateOrConnectWithoutRelatedValuesInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema).array()]).optional()
}).strict();
var EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema_default = EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema;




exports.EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema = EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema; exports.EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema_default = EquationUncheckedCreateNestedManyWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-2JNHB7LS.cjs.map