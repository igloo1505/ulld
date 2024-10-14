"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkTZB4RC6Dcjs = require('./chunk-TZB4RC6D.cjs');


var _chunkSJYOKQRIcjs = require('./chunk-SJYOKQRI.cjs');


var _chunkE4P7X2HKcjs = require('./chunk-E4P7X2HK.cjs');


var _chunkQF7FALKJcjs = require('./chunk-QF7FALKJ.cjs');


var _chunkUNUMUJ42cjs = require('./chunk-UNUMUJ42.cjs');

// src/database/inputTypeSchemas/KanbanUpsertWithoutListsInputSchema.ts
var _zod = require('zod');
var KanbanUpsertWithoutListsInputSchema = _zod.z.object({
  update: _zod.z.union([_zod.z.lazy(() => _chunkSJYOKQRIcjs.KanbanUpdateWithoutListsInputSchema), _zod.z.lazy(() => _chunkTZB4RC6Dcjs.KanbanUncheckedUpdateWithoutListsInputSchema)]),
  create: _zod.z.union([_zod.z.lazy(() => _chunkE4P7X2HKcjs.KanbanCreateWithoutListsInputSchema), _zod.z.lazy(() => _chunkQF7FALKJcjs.KanbanUncheckedCreateWithoutListsInputSchema)]),
  where: _zod.z.lazy(() => _chunkUNUMUJ42cjs.KanbanWhereInputSchema).optional()
}).strict();
var KanbanUpsertWithoutListsInputSchema_default = KanbanUpsertWithoutListsInputSchema;




exports.KanbanUpsertWithoutListsInputSchema = KanbanUpsertWithoutListsInputSchema; exports.KanbanUpsertWithoutListsInputSchema_default = KanbanUpsertWithoutListsInputSchema_default;
//# sourceMappingURL=chunk-QFZXERNC.cjs.map