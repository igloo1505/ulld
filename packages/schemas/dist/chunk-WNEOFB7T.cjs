"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk3FN2MUQFcjs = require('./chunk-3FN2MUQF.cjs');


var _chunkW33EWOU7cjs = require('./chunk-W33EWOU7.cjs');


var _chunkTNGLEEEDcjs = require('./chunk-TNGLEEED.cjs');

// src/database/inputTypeSchemas/IpynbUpdateManyWithWhereWithoutCitationsInputSchema.ts
var _zod = require('zod');
var IpynbUpdateManyWithWhereWithoutCitationsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkW33EWOU7cjs.IpynbScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunkTNGLEEEDcjs.IpynbUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk3FN2MUQFcjs.IpynbUncheckedUpdateManyWithoutCitationsInputSchema)])
}).strict();
var IpynbUpdateManyWithWhereWithoutCitationsInputSchema_default = IpynbUpdateManyWithWhereWithoutCitationsInputSchema;




exports.IpynbUpdateManyWithWhereWithoutCitationsInputSchema = IpynbUpdateManyWithWhereWithoutCitationsInputSchema; exports.IpynbUpdateManyWithWhereWithoutCitationsInputSchema_default = IpynbUpdateManyWithWhereWithoutCitationsInputSchema_default;
//# sourceMappingURL=chunk-WNEOFB7T.cjs.map