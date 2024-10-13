"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE5WVRZQRcjs = require('./chunk-E5WVRZQR.cjs');


var _chunkLQDB67PYcjs = require('./chunk-LQDB67PY.cjs');


var _chunkERTDOVF7cjs = require('./chunk-ERTDOVF7.cjs');


var _chunk3LLSBTYIcjs = require('./chunk-3LLSBTYI.cjs');


var _chunkJOZ5AZACcjs = require('./chunk-JOZ5AZAC.cjs');


var _chunkKWVCI6JYcjs = require('./chunk-KWVCI6JY.cjs');


var _chunkSRB7354Mcjs = require('./chunk-SRB7354M.cjs');


var _chunkZRG3FK3Tcjs = require('./chunk-ZRG3FK3T.cjs');


var _chunkU7MTPHNYcjs = require('./chunk-U7MTPHNY.cjs');

// src/database/inputTypeSchemas/ServingUpdateManyWithoutItemNestedInputSchema.ts
var _zod = require('zod');
var ServingUpdateManyWithoutItemNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkSRB7354Mcjs.ServingCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkSRB7354Mcjs.ServingCreateWithoutItemInputSchema).array(), _zod.z.lazy(() => _chunkZRG3FK3Tcjs.ServingUncheckedCreateWithoutItemInputSchema), _zod.z.lazy(() => _chunkZRG3FK3Tcjs.ServingUncheckedCreateWithoutItemInputSchema).array()]).optional(),
  connectOrCreate: _zod.z.union([_zod.z.lazy(() => _chunkKWVCI6JYcjs.ServingCreateOrConnectWithoutItemInputSchema), _zod.z.lazy(() => _chunkKWVCI6JYcjs.ServingCreateOrConnectWithoutItemInputSchema).array()]).optional(),
  upsert: _zod.z.union([_zod.z.lazy(() => _chunkE5WVRZQRcjs.ServingUpsertWithWhereUniqueWithoutItemInputSchema), _zod.z.lazy(() => _chunkE5WVRZQRcjs.ServingUpsertWithWhereUniqueWithoutItemInputSchema).array()]).optional(),
  createMany: _zod.z.lazy(() => _chunkJOZ5AZACcjs.ServingCreateManyItemInputEnvelopeSchema).optional(),
  set: _zod.z.union([_zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema), _zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema).array()]).optional(),
  disconnect: _zod.z.union([_zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema), _zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema).array()]).optional(),
  delete: _zod.z.union([_zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema), _zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema).array()]).optional(),
  connect: _zod.z.union([_zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema), _zod.z.lazy(() => _chunkU7MTPHNYcjs.ServingWhereUniqueInputSchema).array()]).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunkLQDB67PYcjs.ServingUpdateWithWhereUniqueWithoutItemInputSchema), _zod.z.lazy(() => _chunkLQDB67PYcjs.ServingUpdateWithWhereUniqueWithoutItemInputSchema).array()]).optional(),
  updateMany: _zod.z.union([_zod.z.lazy(() => _chunkERTDOVF7cjs.ServingUpdateManyWithWhereWithoutItemInputSchema), _zod.z.lazy(() => _chunkERTDOVF7cjs.ServingUpdateManyWithWhereWithoutItemInputSchema).array()]).optional(),
  deleteMany: _zod.z.union([_zod.z.lazy(() => _chunk3LLSBTYIcjs.ServingScalarWhereInputSchema), _zod.z.lazy(() => _chunk3LLSBTYIcjs.ServingScalarWhereInputSchema).array()]).optional()
}).strict();
var ServingUpdateManyWithoutItemNestedInputSchema_default = ServingUpdateManyWithoutItemNestedInputSchema;




exports.ServingUpdateManyWithoutItemNestedInputSchema = ServingUpdateManyWithoutItemNestedInputSchema; exports.ServingUpdateManyWithoutItemNestedInputSchema_default = ServingUpdateManyWithoutItemNestedInputSchema_default;
//# sourceMappingURL=chunk-6WFGMZA2.cjs.map