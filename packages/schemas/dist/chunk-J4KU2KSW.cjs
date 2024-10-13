"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTKQYIIUNcjs = require('./chunk-TKQYIIUN.cjs');


var _chunkC3V2CAYXcjs = require('./chunk-C3V2CAYX.cjs');


var _chunkKKFWEL4Wcjs = require('./chunk-KKFWEL4W.cjs');

// src/database/inputTypeSchemas/EquationCreateOrConnectWithoutRelatedValuesInputSchema.ts
var _zod = require('zod');
var EquationCreateOrConnectWithoutRelatedValuesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkKKFWEL4Wcjs.EquationWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkTKQYIIUNcjs.EquationCreateWithoutRelatedValuesInputSchema), _zod.z.lazy(() => _chunkC3V2CAYXcjs.EquationUncheckedCreateWithoutRelatedValuesInputSchema)])
}).strict();
var EquationCreateOrConnectWithoutRelatedValuesInputSchema_default = EquationCreateOrConnectWithoutRelatedValuesInputSchema;




exports.EquationCreateOrConnectWithoutRelatedValuesInputSchema = EquationCreateOrConnectWithoutRelatedValuesInputSchema; exports.EquationCreateOrConnectWithoutRelatedValuesInputSchema_default = EquationCreateOrConnectWithoutRelatedValuesInputSchema_default;
//# sourceMappingURL=chunk-J4KU2KSW.cjs.map