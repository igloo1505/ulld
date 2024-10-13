"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkSRB7354Mcjs = require('./chunk-SRB7354M.cjs');


var _chunkZRG3FK3Tcjs = require('./chunk-ZRG3FK3T.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');

// src/database/inputTypeSchemas/ServingCreateOrConnectWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingCreateOrConnectWithoutItemInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkSRB7354Mcjs.ServingCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkZRG3FK3Tcjs.ServingUncheckedCreateWithoutItemInputSchema)])
}).strict();
var ServingCreateOrConnectWithoutItemInputSchema_default = ServingCreateOrConnectWithoutItemInputSchema;




exports.ServingCreateOrConnectWithoutItemInputSchema = ServingCreateOrConnectWithoutItemInputSchema; exports.ServingCreateOrConnectWithoutItemInputSchema_default = ServingCreateOrConnectWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-KWVCI6JY.cjs.map