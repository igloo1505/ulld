"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkDNTJK62Rcjs = require('./chunk-DNTJK62R.cjs');


var _chunkW2QAWSEAcjs = require('./chunk-W2QAWSEA.cjs');


var _chunkDNRIYHEHcjs = require('./chunk-DNRIYHEH.cjs');


var _chunkJ4KU2KSWcjs = require('./chunk-J4KU2KSW.cjs');


var _chunkTKQYIIUNcjs = require('./chunk-TKQYIIUN.cjs');


var _chunkC3V2CAYXcjs = require('./chunk-C3V2CAYX.cjs');


var _chunk2VRF2N3Ocjs = require('./chunk-2VRF2N3O.cjs');


var _chunkKKFWEL4Wcjs = require('./chunk-KKFWEL4W.cjs');

// src/database/inputTypeSchemas/EquationUpdateManyWithoutRelatedValuesNestedInputSchema.ts
var _zod = require('zod');
var EquationUpdateManyWithoutRelatedValuesNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkTKQYIIUNcjs.EquationCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkTKQYIIUNcjs.EquationCreateWithoutRelatedValuesInputSchema).array(), _zod.z.lazy(() => _chunkC3V2CAYXcjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkC3V2CAYXcjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkJ4KU2KSWcjs.EquationCreateOrConnectWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkJ4KU2KSWcjs.EquationCreateOrConnectWithoutRelatedValuesInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkDNRIYHEHcjs.EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkDNRIYHEHcjs.EquationUpsertWithWhereUniqueWithoutRelatedValuesInputSchema).array()]).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema), _zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkW2QAWSEAcjs.EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkW2QAWSEAcjs.EquationUpdateWithWhereUniqueWithoutRelatedValuesInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkDNTJK62Rcjs.EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkDNTJK62Rcjs.EquationUpdateManyWithWhereWithoutRelatedValuesInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunk2VRF2N3Ocjs.EquationScalarWhereInputSchema), _zod.z.lazy(() => _chunk2VRF2N3Ocjs.EquationScalarWhereInputSchema).array()]).optional()
}).strict();
var EquationUpdateManyWithoutRelatedValuesNestedInputSchema_default = EquationUpdateManyWithoutRelatedValuesNestedInputSchema;




exports.EquationUpdateManyWithoutRelatedValuesNestedInputSchema = EquationUpdateManyWithoutRelatedValuesNestedInputSchema; exports.EquationUpdateManyWithoutRelatedValuesNestedInputSchema_default = EquationUpdateManyWithoutRelatedValuesNestedInputSchema_default;
//# sourceMappingURL=chunk-6FLEAVAN.cjs.map