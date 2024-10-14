"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4GDMD7BHcjs = require('./chunk-4GDMD7BH.cjs');


var _chunkQFZXERNCcjs = require('./chunk-QFZXERNC.cjs');


var _chunkTZB4RC6Dcjs = require('./chunk-TZB4RC6D.cjs');


var _chunkSJYOKQRIcjs = require('./chunk-SJYOKQRI.cjs');


var _chunk43GGRYCPcjs = require('./chunk-43GGRYCP.cjs');


var _chunkE4P7X2HKcjs = require('./chunk-E4P7X2HK.cjs');


var _chunkQF7FALKJcjs = require('./chunk-QF7FALKJ.cjs');


var _chunkBBQYWLSJcjs = require('./chunk-BBQYWLSJ.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/KanbanUpdateOneWithoutListsNestedInputSchema.ts
var _zod = require('zod');
var KanbanUpdateOneWithoutListsNestedInputSchema = _zod.z.object({
  create: _zod.z.union([_zod.z.lazy(() => _chunkE4P7X2HKcjs.KanbanCreateWithoutListsInputSchema), _zod.z.lazy(() => _chunkQF7FALKJcjs.KanbanUncheckedCreateWithoutListsInputSchema)]).optional(),
  connectOrCreate: _zod.z.lazy(() => _chunk43GGRYCPcjs.KanbanCreateOrConnectWithoutListsInputSchema).optional(),
  upsert: _zod.z.lazy(() => _chunkQFZXERNCcjs.KanbanUpsertWithoutListsInputSchema).optional(),
  disconnect: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema)]).optional(),
  delete: _zod.z.union([_zod.z.boolean(), _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema)]).optional(),
  connect: _zod.z.lazy(() => _chunkBBQYWLSJcjs.KanbanWhereUniqueInputSchema).optional(),
  update: _zod.z.union([_zod.z.lazy(() => _chunk4GDMD7BHcjs.KanbanUpdateToOneWithWhereWithoutListsInputSchema), _zod.z.lazy(() => _chunkSJYOKQRIcjs.KanbanUpdateWithoutListsInputSchema), _zod.z.lazy(() => _chunkTZB4RC6Dcjs.KanbanUncheckedUpdateWithoutListsInputSchema)]).optional()
}).strict();
var KanbanUpdateOneWithoutListsNestedInputSchema_default = KanbanUpdateOneWithoutListsNestedInputSchema;




exports.KanbanUpdateOneWithoutListsNestedInputSchema = KanbanUpdateOneWithoutListsNestedInputSchema; exports.KanbanUpdateOneWithoutListsNestedInputSchema_default = KanbanUpdateOneWithoutListsNestedInputSchema_default;
//# sourceMappingURL=chunk-EPH6L2T7.cjs.map