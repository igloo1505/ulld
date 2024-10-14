"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkE4P7X2HKcjs = require('./chunk-E4P7X2HK.cjs');


var _chunkQF7FALKJcjs = require('./chunk-QF7FALKJ.cjs');


var _chunkBBQYWLSJcjs = require('./chunk-BBQYWLSJ.cjs');

// src/database/inputTypeSchemas/KanbanCreateOrConnectWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanCreateOrConnectWithoutListsInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkBBQYWLSJcjs.KanbanWhereUniqueInputSchema),
  create: _zod.z.union([_zod.z.lazy(() => _chunkE4P7X2HKcjs.KanbanCreateWithoutListsInputSchema), _zod.z.lazy(() => _chunkQF7FALKJcjs.KanbanUncheckedCreateWithoutListsInputSchema)])
}).strict();
var KanbanCreateOrConnectWithoutListsInputSchema_default = KanbanCreateOrConnectWithoutListsInputSchema;




exports.KanbanCreateOrConnectWithoutListsInputSchema = KanbanCreateOrConnectWithoutListsInputSchema; exports.KanbanCreateOrConnectWithoutListsInputSchema_default = KanbanCreateOrConnectWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-43GGRYCP.cjs.map