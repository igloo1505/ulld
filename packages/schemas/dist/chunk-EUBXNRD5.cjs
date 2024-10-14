"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk32SG3HGZcjs = require('./chunk-32SG3HGZ.cjs');


var _chunkUPB6NHPEcjs = require('./chunk-UPB6NHPE.cjs');


var _chunkCTNTXD6Zcjs = require('./chunk-CTNTXD6Z.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutSubjectsInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutSubjectsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUPB6NHPEcjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkCTNTXD6Zcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk32SG3HGZcjs.IpynbUncheckedUpdateManyWithoutSubjectsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutSubjectsInputSchema_default = IpynbUpdateManyWithWhereWithoutSubjectsInputSchema;




exports.IpynbUpdateManyWithWhereWithoutSubjectsInputSchema = IpynbUpdateManyWithWhereWithoutSubjectsInputSchema; exports.IpynbUpdateManyWithWhereWithoutSubjectsInputSchema_default = IpynbUpdateManyWithWhereWithoutSubjectsInputSchema_default;
//# sourceMappingURL=chunk-EUBXNRD5.cjs.map