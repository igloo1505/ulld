"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunk4WL66OYDcjs = require('./chunk-4WL66OYD.cjs');


var _chunkDLSPXH2Lcjs = require('./chunk-DLSPXH2L.cjs');


var _chunk25YY3O2Jcjs = require('./chunk-25YY3O2J.cjs');

// src/database/inputTypeSchemas/SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema.ts
var _zod = require('zod');
var SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema = _zod.z.object({
  where: _zod.z.lazy(() => _chunkDLSPXH2Lcjs.SubjectScalarWhereInputSchema),
  data: _zod.z.union([_zod.z.lazy(() => _chunk25YY3O2Jcjs.SubjectUpdateManyMutationInputSchema), _zod.z.lazy(() => _chunk4WL66OYDcjs.SubjectUncheckedUpdateManyWithoutBibEntriesInputSchema)])
}).strict();
var SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema_default = SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema;




exports.SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema = SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema; exports.SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema_default = SubjectUpdateManyWithWhereWithoutBibEntriesInputSchema_default;
//# sourceMappingURL=chunk-KNNH2P2E.cjs.map