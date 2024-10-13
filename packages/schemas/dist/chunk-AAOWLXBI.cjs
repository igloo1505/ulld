"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkJOZ5AZACcjs = require('./chunk-JOZ5AZAC.cjs');


var _chunkKWVCI6JYcjs = require('./chunk-KWVCI6JY.cjs');


var _chunkSRB7354Mcjs = require('./chunk-SRB7354M.cjs');


var _chunkZRG3FK3Tcjs = require('./chunk-ZRG3FK3T.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');

// src/database/inputTypeSchemas/ServingCreateNestedManyWithoutItemInputSchema.ts
var _zod = require('zod');
var ServingCreateNestedManyWithoutItemInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkSRB7354Mcjs.ServingCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkSRB7354Mcjs.ServingCreateWithoutItemInputSchema).array(), _zod.z.lazy(() => _chunkZRG3FK3Tcjs.ServingUncheckedCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkZRG3FK3Tcjs.ServingUncheckedCreateWithoutItemInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkKWVCI6JYcjs.ServingCreateOrConnectWithoutItemInputSchema), _zod.z.lazy(() => _chunkKWVCI6JYcjs.ServingCreateOrConnectWithoutItemInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkJOZ5AZACcjs.ServingCreateManyItemInputEnvelopeSchema).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema), _zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema).array()]).optional()
}).strict();
var ServingCreateNestedManyWithoutItemInputSchema_default = ServingCreateNestedManyWithoutItemInputSchema;




exports.ServingCreateNestedManyWithoutItemInputSchema = ServingCreateNestedManyWithoutItemInputSchema; exports.ServingCreateNestedManyWithoutItemInputSchema_default = ServingCreateNestedManyWithoutItemInputSchema_default;
//# sourceMappingURL=chunk-AAOWLXBI.cjs.map