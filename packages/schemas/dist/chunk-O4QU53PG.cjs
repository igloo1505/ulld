"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk2BYXS3TTcjs = require('./chunk-2BYXS3TT.cjs');


var _chunkUPB6NHPEcjs = require('./chunk-UPB6NHPE.cjs');


var _chunkCTNTXD6Zcjs = require('./chunk-CTNTXD6Z.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutSequentialListInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutSequentialListInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkUPB6NHPEcjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkCTNTXD6Zcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk2BYXS3TTcjs.IpynbUncheckedUpdateManyWithoutSequentialListInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutSequentialListInputSchema_default = IpynbUpdateManyWithWhereWithoutSequentialListInputSchema;




exports.IpynbUpdateManyWithWhereWithoutSequentialListInputSchema = IpynbUpdateManyWithWhereWithoutSequentialListInputSchema; exports.IpynbUpdateManyWithWhereWithoutSequentialListInputSchema_default = IpynbUpdateManyWithWhereWithoutSequentialListInputSchema_default;
//# sourceMappingURL=chunk-O4QU53PG.cjs.map