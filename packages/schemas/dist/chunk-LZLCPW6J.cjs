"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk43GGRYCPcjs = require('./chunk-43GGRYCP.cjs');


var _chunkE4P7X2HKcjs = require('./chunk-E4P7X2HK.cjs');


var _chunkQF7FALKJcjs = require('./chunk-QF7FALKJ.cjs');


var _chunkBBQYWLSJcjs = require('./chunk-BBQYWLSJ.cjs');

// src/database/inputTypeSchemas/KanbanCreateNestedOneWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanCreateNestedOneWithoutListsInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkE4P7X2HKcjs.KanbanCreateWithoutListsInputSchema), _zod.z.lazy(() => _chunkQF7FALKJcjs.KanbanUncheckedCreateWithoutListsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunk43GGRYCPcjs.KanbanCreateOrConnectWithoutListsInputSchema).optional(),
  connect: _zod.z.lazy(() => _chunkBBQYWLSJcjs.KanbanWhereUniqueInputSchema).optional()
}).strict();
var KanbanCreateNestedOneWithoutListsInputSchema_default = KanbanCreateNestedOneWithoutListsInputSchema;




exports.KanbanCreateNestedOneWithoutListsInputSchema = KanbanCreateNestedOneWithoutListsInputSchema; exports.KanbanCreateNestedOneWithoutListsInputSchema_default = KanbanCreateNestedOneWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-LZLCPW6J.cjs.map