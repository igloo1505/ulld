"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkPEONIKQ5cjs = require('./chunk-PEONIKQ5.cjs');


var _chunkW33EWOU7cjs = require('./chunk-W33EWOU7.cjs');


var _chunkTNGLEEEDcjs = require('./chunk-TNGLEEED.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkW33EWOU7cjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTNGLEEEDcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunkPEONIKQ5cjs.IpynbUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutSubjectsInputSchema_default = IpynbUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.IpynbUpdateManyWithWhereWithoutSubjectsInputSchema = IpynbUpdateManyWithWhereWithoutSubjectsInputSchema; exports.IpynbUpdateManyWithWhereWithoutSubjectsInputSchema_default = IpynbUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-ASFD2JVL.cjs.map