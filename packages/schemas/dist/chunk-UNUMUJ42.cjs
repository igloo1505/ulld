"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkFX4FA72Acjs = require('./chunk-FX4FA72A.cjs');


var _chunkKBBNTZU5cjs = require('./chunk-KBBNTZU5.cjs');


var _chunkUWWD2DIOcjs = require('./chunk-UWWD2DIO.cjs');


var _chunkIU7CGSM2cjs = require('./chunk-IU7CGSM2.cjs');


var _chunkL7ZRMRIIcjs = require('./chunk-L7ZRMRII.cjs');


var _chunk5AWIXPHDcjs = require('./chunk-5AWIXPHD.cjs');


var _chunkPALRL6S5cjs = require('./chunk-PALRL6S5.cjs');


var _chunk73VPHG2Fcjs = require('./chunk-73VPHG2F.cjs');


var _chunk2WOD7U2Bcjs = require('./chunk-2WOD7U2B.cjs');


var _chunk54BATBBKcjs = require('./chunk-54BATBBK.cjs');


var _chunkRPNAAALBcjs = require('./chunk-RPNAAALB.cjs');


var _chunkOVUGA3P5cjs = require('./chunk-OVUGA3P5.cjs');


var _chunk2V5AKF3Qcjs = require('./chunk-2V5AKF3Q.cjs');


var _chunkE7BN4QPAcjs = require('./chunk-E7BN4QPA.cjs');


var _chunk2L755XMWcjs = require('./chunk-2L755XMW.cjs');


var _chunkQR4642W7cjs = require('./chunk-QR4642W7.cjs');


var _chunkXUF4Q3ZJcjs = require('./chunk-XUF4Q3ZJ.cjs');

// src/database/inputTypeSchemas/BibWhereInputSchema.ts
var _zod = require('zod');

// src/database/inputTypeSchemas/BibEntryListRelationFilterSchema.ts


// src/database/inputTypeSchemas/BibEntryWhereInputSchema.ts


// src/database/inputTypeSchemas/BibNullableRelationFilterSchema.ts

var BibNullableRelationFilterSchema = _zod.z.object({
  is: _zod.z.lazy(() => BibWhereInputSchema).optional().nullable(),
  isNot: _zod.z.lazy(() => BibWhereInputSchema).optional().nullable()
}).strict();
var BibNullableRelationFilterSchema_default = BibNullableRelationFilterSchema;

// src/database/inputTypeSchemas/CitationsGroupListRelationFilterSchema.ts


// src/database/inputTypeSchemas/CitationsGroupWhereInputSchema.ts

var CitationsGroupWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => CitationsGroupWhereInputSchema), _zod.z.lazy(() => CitationsGroupWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => CitationsGroupWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => CitationsGroupWhereInputSchema), _zod.z.lazy(() => CitationsGroupWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  entries: _zod.z.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict();
var CitationsGroupWhereInputSchema_default = CitationsGroupWhereInputSchema;

// src/database/inputTypeSchemas/CitationsGroupListRelationFilterSchema.ts
var CitationsGroupListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => CitationsGroupWhereInputSchema).optional(),
  some: _zod.z.lazy(() => CitationsGroupWhereInputSchema).optional(),
  none: _zod.z.lazy(() => CitationsGroupWhereInputSchema).optional()
}).strict();
var CitationsGroupListRelationFilterSchema_default = CitationsGroupListRelationFilterSchema;

// src/database/inputTypeSchemas/TagListRelationFilterSchema.ts


// src/database/inputTypeSchemas/TagWhereInputSchema.ts


// src/database/inputTypeSchemas/MdxNoteListRelationFilterSchema.ts


// src/database/inputTypeSchemas/MdxNoteWhereInputSchema.ts


// src/database/inputTypeSchemas/TopicListRelationFilterSchema.ts


// src/database/inputTypeSchemas/TopicWhereInputSchema.ts


// src/database/inputTypeSchemas/IpynbListRelationFilterSchema.ts


// src/database/inputTypeSchemas/IpynbWhereInputSchema.ts


// src/database/inputTypeSchemas/SubjectListRelationFilterSchema.ts


// src/database/inputTypeSchemas/SubjectWhereInputSchema.ts


// src/database/inputTypeSchemas/QAPairListRelationFilterSchema.ts


// src/database/inputTypeSchemas/QAPairWhereInputSchema.ts


// src/database/inputTypeSchemas/PracticeExamListRelationFilterSchema.ts


// src/database/inputTypeSchemas/PracticeExamWhereInputSchema.ts

var PracticeExamWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => PracticeExamWhereInputSchema), _zod.z.lazy(() => PracticeExamWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => PracticeExamWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => PracticeExamWhereInputSchema), _zod.z.lazy(() => PracticeExamWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  timeLimitInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  timeCompletedInSeconds: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  date: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  topics: _zod.z.lazy(() => TopicListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => TagListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => SubjectListRelationFilterSchema).optional(),
  questions: _zod.z.lazy(() => QAPairListRelationFilterSchema).optional()
}).strict();
var PracticeExamWhereInputSchema_default = PracticeExamWhereInputSchema;

// src/database/inputTypeSchemas/PracticeExamListRelationFilterSchema.ts
var PracticeExamListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => PracticeExamWhereInputSchema).optional(),
  some: _zod.z.lazy(() => PracticeExamWhereInputSchema).optional(),
  none: _zod.z.lazy(() => PracticeExamWhereInputSchema).optional()
}).strict();
var PracticeExamListRelationFilterSchema_default = PracticeExamListRelationFilterSchema;

// src/database/inputTypeSchemas/QAPairWhereInputSchema.ts
var QAPairWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => QAPairWhereInputSchema), _zod.z.lazy(() => QAPairWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => QAPairWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => QAPairWhereInputSchema), _zod.z.lazy(() => QAPairWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  question: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  answer: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  secondaryLabel: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  correctCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  inCorrectCount: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  tags: _zod.z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => SubjectListRelationFilterSchema).optional(),
  practiceExam: _zod.z.lazy(() => PracticeExamListRelationFilterSchema).optional()
}).strict();
var QAPairWhereInputSchema_default = QAPairWhereInputSchema;

// src/database/inputTypeSchemas/QAPairListRelationFilterSchema.ts
var QAPairListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => QAPairWhereInputSchema).optional(),
  some: _zod.z.lazy(() => QAPairWhereInputSchema).optional(),
  none: _zod.z.lazy(() => QAPairWhereInputSchema).optional()
}).strict();
var QAPairListRelationFilterSchema_default = QAPairListRelationFilterSchema;

// src/database/inputTypeSchemas/KanbanNullableRelationFilterSchema.ts


// src/database/inputTypeSchemas/KanbanWhereInputSchema.ts


// src/database/inputTypeSchemas/KanBanListListRelationFilterSchema.ts


// src/database/inputTypeSchemas/KanBanListWhereInputSchema.ts


// src/database/inputTypeSchemas/KanBanCardListRelationFilterSchema.ts


// src/database/inputTypeSchemas/KanBanCardWhereInputSchema.ts


// src/database/inputTypeSchemas/KanBanListNullableRelationFilterSchema.ts

var KanBanListNullableRelationFilterSchema = _zod.z.object({
  is: _zod.z.lazy(() => KanBanListWhereInputSchema).optional().nullable(),
  isNot: _zod.z.lazy(() => KanBanListWhereInputSchema).optional().nullable()
}).strict();
var KanBanListNullableRelationFilterSchema_default = KanBanListNullableRelationFilterSchema;

// src/database/inputTypeSchemas/KanBanCardWhereInputSchema.ts
var KanBanCardWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanBanCardWhereInputSchema), _zod.z.lazy(() => KanBanCardWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanBanCardWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanBanCardWhereInputSchema), _zod.z.lazy(() => KanBanCardWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  listId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  indexWithinList: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  KanBanList: _zod.z.union([_zod.z.lazy(() => KanBanListNullableRelationFilterSchema), _zod.z.lazy(() => KanBanListWhereInputSchema)]).optional().nullable()
}).strict();
var KanBanCardWhereInputSchema_default = KanBanCardWhereInputSchema;

// src/database/inputTypeSchemas/KanBanCardListRelationFilterSchema.ts
var KanBanCardListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => KanBanCardWhereInputSchema).optional(),
  some: _zod.z.lazy(() => KanBanCardWhereInputSchema).optional(),
  none: _zod.z.lazy(() => KanBanCardWhereInputSchema).optional()
}).strict();
var KanBanCardListRelationFilterSchema_default = KanBanCardListRelationFilterSchema;

// src/database/inputTypeSchemas/KanBanListWhereInputSchema.ts
var KanBanListWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanBanListWhereInputSchema), _zod.z.lazy(() => KanBanListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanBanListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanBanListWhereInputSchema), _zod.z.lazy(() => KanBanListWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  indexWithinBoard: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  boardId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  cards: _zod.z.lazy(() => KanBanCardListRelationFilterSchema).optional(),
  Kanban: _zod.z.union([_zod.z.lazy(() => KanbanNullableRelationFilterSchema), _zod.z.lazy(() => KanbanWhereInputSchema)]).optional().nullable()
}).strict();
var KanBanListWhereInputSchema_default = KanBanListWhereInputSchema;

// src/database/inputTypeSchemas/KanBanListListRelationFilterSchema.ts
var KanBanListListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => KanBanListWhereInputSchema).optional(),
  some: _zod.z.lazy(() => KanBanListWhereInputSchema).optional(),
  none: _zod.z.lazy(() => KanBanListWhereInputSchema).optional()
}).strict();
var KanBanListListRelationFilterSchema_default = KanBanListListRelationFilterSchema;

// src/database/inputTypeSchemas/KanbanWhereInputSchema.ts
var KanbanWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => KanbanWhereInputSchema), _zod.z.lazy(() => KanbanWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => KanbanWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => KanbanWhereInputSchema), _zod.z.lazy(() => KanbanWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lists: _zod.z.lazy(() => KanBanListListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => TagListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => SubjectListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => TopicListRelationFilterSchema).optional()
}).strict();
var KanbanWhereInputSchema_default = KanbanWhereInputSchema;

// src/database/inputTypeSchemas/KanbanNullableRelationFilterSchema.ts
var KanbanNullableRelationFilterSchema = _zod.z.object({
  is: _zod.z.lazy(() => KanbanWhereInputSchema).optional().nullable(),
  isNot: _zod.z.lazy(() => KanbanWhereInputSchema).optional().nullable()
}).strict();
var KanbanNullableRelationFilterSchema_default = KanbanNullableRelationFilterSchema;

// src/database/inputTypeSchemas/ToDoListListRelationFilterSchema.ts


// src/database/inputTypeSchemas/ToDoListWhereInputSchema.ts


// src/database/inputTypeSchemas/ToDoListRelationFilterSchema.ts


// src/database/inputTypeSchemas/ToDoWhereInputSchema.ts


// src/database/inputTypeSchemas/ToDoNullableRelationFilterSchema.ts

var ToDoNullableRelationFilterSchema = _zod.z.object({
  is: _zod.z.lazy(() => ToDoWhereInputSchema).optional().nullable(),
  isNot: _zod.z.lazy(() => ToDoWhereInputSchema).optional().nullable()
}).strict();
var ToDoNullableRelationFilterSchema_default = ToDoNullableRelationFilterSchema;

// src/database/inputTypeSchemas/ToDoListNullableRelationFilterSchema.ts

var ToDoListNullableRelationFilterSchema = _zod.z.object({
  is: _zod.z.lazy(() => ToDoListWhereInputSchema).optional().nullable(),
  isNot: _zod.z.lazy(() => ToDoListWhereInputSchema).optional().nullable()
}).strict();
var ToDoListNullableRelationFilterSchema_default = ToDoListNullableRelationFilterSchema;

// src/database/inputTypeSchemas/ToDoWhereInputSchema.ts
var ToDoWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ToDoWhereInputSchema), _zod.z.lazy(() => ToDoWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ToDoWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ToDoWhereInputSchema), _zod.z.lazy(() => ToDoWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  task: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  dueAt: _zod.z.union([_zod.z.lazy(() => _chunk54BATBBKcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  details: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  parentId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  category: _zod.z.union([_zod.z.lazy(() => _chunkIU7CGSM2cjs.EnumTaskCategoryNullableFilterSchema), _zod.z.lazy(() => _chunkPALRL6S5cjs.TaskCategorySchema)]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  status: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  priority: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  toDoListId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  completedOn: _zod.z.union([_zod.z.lazy(() => _chunk54BATBBKcjs.DateTimeNullableFilterSchema), _zod.z.coerce.date()]).optional().nullable(),
  associatedNotes: _zod.z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => SubjectListRelationFilterSchema).optional(),
  parent: _zod.z.union([_zod.z.lazy(() => ToDoNullableRelationFilterSchema), _zod.z.lazy(() => ToDoWhereInputSchema)]).optional().nullable(),
  child: _zod.z.lazy(() => ToDoListRelationFilterSchema).optional(),
  ToDoList: _zod.z.union([_zod.z.lazy(() => ToDoListNullableRelationFilterSchema), _zod.z.lazy(() => ToDoListWhereInputSchema)]).optional().nullable()
}).strict();
var ToDoWhereInputSchema_default = ToDoWhereInputSchema;

// src/database/inputTypeSchemas/ToDoListRelationFilterSchema.ts
var ToDoListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => ToDoWhereInputSchema).optional(),
  some: _zod.z.lazy(() => ToDoWhereInputSchema).optional(),
  none: _zod.z.lazy(() => ToDoWhereInputSchema).optional()
}).strict();
var ToDoListRelationFilterSchema_default = ToDoListRelationFilterSchema;

// src/database/inputTypeSchemas/ToDoListWhereInputSchema.ts
var ToDoListWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ToDoListWhereInputSchema), _zod.z.lazy(() => ToDoListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ToDoListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ToDoListWhereInputSchema), _zod.z.lazy(() => ToDoListWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  tasks: _zod.z.lazy(() => ToDoListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => SubjectListRelationFilterSchema).optional()
}).strict();
var ToDoListWhereInputSchema_default = ToDoListWhereInputSchema;

// src/database/inputTypeSchemas/ToDoListListRelationFilterSchema.ts
var ToDoListListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => ToDoListWhereInputSchema).optional(),
  some: _zod.z.lazy(() => ToDoListWhereInputSchema).optional(),
  none: _zod.z.lazy(() => ToDoListWhereInputSchema).optional()
}).strict();
var ToDoListListRelationFilterSchema_default = ToDoListListRelationFilterSchema;

// src/database/inputTypeSchemas/EquationListRelationFilterSchema.ts


// src/database/inputTypeSchemas/EquationWhereInputSchema.ts


// src/database/inputTypeSchemas/RelatedValuesListRelationFilterSchema.ts


// src/database/inputTypeSchemas/RelatedValuesWhereInputSchema.ts

var RelatedValuesWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => RelatedValuesWhereInputSchema), _zod.z.lazy(() => RelatedValuesWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => RelatedValuesWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => RelatedValuesWhereInputSchema), _zod.z.lazy(() => RelatedValuesWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  input: _zod.z.lazy(() => _chunkL7ZRMRIIcjs.JsonFilterSchema).optional(),
  output: _zod.z.union([_zod.z.lazy(() => _chunk73VPHG2Fcjs.FloatFilterSchema), _zod.z.number()]).optional(),
  equationId: _zod.z.lazy(() => _chunkUWWD2DIOcjs.IntNullableListFilterSchema).optional(),
  equations: _zod.z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict();
var RelatedValuesWhereInputSchema_default = RelatedValuesWhereInputSchema;

// src/database/inputTypeSchemas/RelatedValuesListRelationFilterSchema.ts
var RelatedValuesListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => RelatedValuesWhereInputSchema).optional(),
  some: _zod.z.lazy(() => RelatedValuesWhereInputSchema).optional(),
  none: _zod.z.lazy(() => RelatedValuesWhereInputSchema).optional()
}).strict();
var RelatedValuesListRelationFilterSchema_default = RelatedValuesListRelationFilterSchema;

// src/database/inputTypeSchemas/EquationWhereInputSchema.ts
var EquationWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => EquationWhereInputSchema), _zod.z.lazy(() => EquationWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => EquationWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => EquationWhereInputSchema), _zod.z.lazy(() => EquationWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  equationId: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  desc: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  asPython: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  variableLegend: _zod.z.lazy(() => _chunkL7ZRMRIIcjs.JsonFilterSchema).optional(),
  variables: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  keywords: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  relatedValues: _zod.z.lazy(() => RelatedValuesListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => SubjectListRelationFilterSchema).optional(),
  mdxNotes: _zod.z.lazy(() => MdxNoteListRelationFilterSchema).optional()
}).strict();
var EquationWhereInputSchema_default = EquationWhereInputSchema;

// src/database/inputTypeSchemas/EquationListRelationFilterSchema.ts
var EquationListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => EquationWhereInputSchema).optional(),
  some: _zod.z.lazy(() => EquationWhereInputSchema).optional(),
  none: _zod.z.lazy(() => EquationWhereInputSchema).optional()
}).strict();
var EquationListRelationFilterSchema_default = EquationListRelationFilterSchema;

// src/database/inputTypeSchemas/SubjectWhereInputSchema.ts
var SubjectWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SubjectWhereInputSchema), _zod.z.lazy(() => SubjectWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SubjectWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SubjectWhereInputSchema), _zod.z.lazy(() => SubjectWhereInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  MdxNotes: _zod.z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  IpynbNotes: _zod.z.lazy(() => IpynbListRelationFilterSchema).optional(),
  QaPair: _zod.z.lazy(() => QAPairListRelationFilterSchema).optional(),
  practiceExam: _zod.z.lazy(() => PracticeExamListRelationFilterSchema).optional(),
  Kanban: _zod.z.union([_zod.z.lazy(() => KanbanNullableRelationFilterSchema), _zod.z.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
  todoList: _zod.z.lazy(() => ToDoListListRelationFilterSchema).optional(),
  toDo: _zod.z.lazy(() => ToDoListRelationFilterSchema).optional(),
  bibEntries: _zod.z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  equations: _zod.z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict();
var SubjectWhereInputSchema_default = SubjectWhereInputSchema;

// src/database/inputTypeSchemas/SubjectListRelationFilterSchema.ts
var SubjectListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => SubjectWhereInputSchema).optional(),
  some: _zod.z.lazy(() => SubjectWhereInputSchema).optional(),
  none: _zod.z.lazy(() => SubjectWhereInputSchema).optional()
}).strict();
var SubjectListRelationFilterSchema_default = SubjectListRelationFilterSchema;

// src/database/inputTypeSchemas/SequentialNoteListNullableRelationFilterSchema.ts


// src/database/inputTypeSchemas/SequentialNoteListWhereInputSchema.ts

var SequentialNoteListWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => SequentialNoteListWhereInputSchema), _zod.z.lazy(() => SequentialNoteListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => SequentialNoteListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => SequentialNoteListWhereInputSchema), _zod.z.lazy(() => SequentialNoteListWhereInputSchema).array()]).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  MdxNote: _zod.z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  Ipynb: _zod.z.lazy(() => IpynbListRelationFilterSchema).optional()
}).strict();
var SequentialNoteListWhereInputSchema_default = SequentialNoteListWhereInputSchema;

// src/database/inputTypeSchemas/SequentialNoteListNullableRelationFilterSchema.ts
var SequentialNoteListNullableRelationFilterSchema = _zod.z.object({
  is: _zod.z.lazy(() => SequentialNoteListWhereInputSchema).optional().nullable(),
  isNot: _zod.z.lazy(() => SequentialNoteListWhereInputSchema).optional().nullable()
}).strict();
var SequentialNoteListNullableRelationFilterSchema_default = SequentialNoteListNullableRelationFilterSchema;

// src/database/inputTypeSchemas/ReadingListListRelationFilterSchema.ts


// src/database/inputTypeSchemas/ReadingListWhereInputSchema.ts

var ReadingListWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => ReadingListWhereInputSchema), _zod.z.lazy(() => ReadingListWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => ReadingListWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => ReadingListWhereInputSchema), _zod.z.lazy(() => ReadingListWhereInputSchema).array()]).optional(),
  name: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  description: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastUpdate: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  bibEntries: _zod.z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  mdxNotes: _zod.z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => IpynbListRelationFilterSchema).optional()
}).strict();
var ReadingListWhereInputSchema_default = ReadingListWhereInputSchema;

// src/database/inputTypeSchemas/ReadingListListRelationFilterSchema.ts
var ReadingListListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => ReadingListWhereInputSchema).optional(),
  some: _zod.z.lazy(() => ReadingListWhereInputSchema).optional(),
  none: _zod.z.lazy(() => ReadingListWhereInputSchema).optional()
}).strict();
var ReadingListListRelationFilterSchema_default = ReadingListListRelationFilterSchema;

// src/database/inputTypeSchemas/IpynbWhereInputSchema.ts
var IpynbWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => IpynbWhereInputSchema), _zod.z.lazy(() => IpynbWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => IpynbWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => IpynbWhereInputSchema), _zod.z.lazy(() => IpynbWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  rootRelativePath: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkFX4FA72Acjs.BoolNullableFilterSchema), _zod.z.boolean()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  citationsListOrder: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkKBBNTZU5cjs.FloatNullableListFilterSchema).optional(),
  href: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  raw: _zod.z.union([_zod.z.lazy(() => _chunkQR4642W7cjs.BytesFilterSchema), _zod.z.instanceof(Buffer)]).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  tags: _zod.z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => SubjectListRelationFilterSchema).optional(),
  citations: _zod.z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  sequentialList: _zod.z.union([_zod.z.lazy(() => SequentialNoteListNullableRelationFilterSchema), _zod.z.lazy(() => SequentialNoteListWhereInputSchema)]).optional().nullable(),
  readingList: _zod.z.lazy(() => ReadingListListRelationFilterSchema).optional()
}).strict();
var IpynbWhereInputSchema_default = IpynbWhereInputSchema;

// src/database/inputTypeSchemas/IpynbListRelationFilterSchema.ts
var IpynbListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => IpynbWhereInputSchema).optional(),
  some: _zod.z.lazy(() => IpynbWhereInputSchema).optional(),
  none: _zod.z.lazy(() => IpynbWhereInputSchema).optional()
}).strict();
var IpynbListRelationFilterSchema_default = IpynbListRelationFilterSchema;

// src/database/inputTypeSchemas/TopicWhereInputSchema.ts
var TopicWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TopicWhereInputSchema), _zod.z.lazy(() => TopicWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TopicWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TopicWhereInputSchema), _zod.z.lazy(() => TopicWhereInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  MdxNotes: _zod.z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => IpynbListRelationFilterSchema).optional(),
  QAPair: _zod.z.lazy(() => QAPairListRelationFilterSchema).optional(),
  practiceExam: _zod.z.lazy(() => PracticeExamListRelationFilterSchema).optional(),
  toDo: _zod.z.lazy(() => ToDoListRelationFilterSchema).optional(),
  Kanban: _zod.z.union([_zod.z.lazy(() => KanbanNullableRelationFilterSchema), _zod.z.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
  todoList: _zod.z.lazy(() => ToDoListListRelationFilterSchema).optional(),
  bibEntries: _zod.z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  equations: _zod.z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict();
var TopicWhereInputSchema_default = TopicWhereInputSchema;

// src/database/inputTypeSchemas/TopicListRelationFilterSchema.ts
var TopicListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => TopicWhereInputSchema).optional(),
  some: _zod.z.lazy(() => TopicWhereInputSchema).optional(),
  none: _zod.z.lazy(() => TopicWhereInputSchema).optional()
}).strict();
var TopicListRelationFilterSchema_default = TopicListRelationFilterSchema;

// src/database/inputTypeSchemas/DefinitionListRelationFilterSchema.ts


// src/database/inputTypeSchemas/DefinitionWhereInputSchema.ts


// src/database/inputTypeSchemas/MdxNoteNullableRelationFilterSchema.ts

var MdxNoteNullableRelationFilterSchema = _zod.z.object({
  is: _zod.z.lazy(() => MdxNoteWhereInputSchema).optional().nullable(),
  isNot: _zod.z.lazy(() => MdxNoteWhereInputSchema).optional().nullable()
}).strict();
var MdxNoteNullableRelationFilterSchema_default = MdxNoteNullableRelationFilterSchema;

// src/database/inputTypeSchemas/DefinitionWhereInputSchema.ts
var DefinitionWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => DefinitionWhereInputSchema), _zod.z.lazy(() => DefinitionWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => DefinitionWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => DefinitionWhereInputSchema), _zod.z.lazy(() => DefinitionWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  label: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  content: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  alphabeticalLabel: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  mdxNoteId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  mdxNote: _zod.z.union([_zod.z.lazy(() => MdxNoteNullableRelationFilterSchema), _zod.z.lazy(() => MdxNoteWhereInputSchema)]).optional().nullable()
}).strict();
var DefinitionWhereInputSchema_default = DefinitionWhereInputSchema;

// src/database/inputTypeSchemas/DefinitionListRelationFilterSchema.ts
var DefinitionListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => DefinitionWhereInputSchema).optional(),
  some: _zod.z.lazy(() => DefinitionWhereInputSchema).optional(),
  none: _zod.z.lazy(() => DefinitionWhereInputSchema).optional()
}).strict();
var DefinitionListRelationFilterSchema_default = DefinitionListRelationFilterSchema;

// src/database/inputTypeSchemas/MdxNoteWhereInputSchema.ts
var MdxNoteWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => MdxNoteWhereInputSchema), _zod.z.lazy(() => MdxNoteWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => MdxNoteWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => MdxNoteWhereInputSchema), _zod.z.lazy(() => MdxNoteWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  isProtected: _zod.z.union([_zod.z.lazy(() => _chunkFX4FA72Acjs.BoolNullableFilterSchema), _zod.z.boolean()]).optional().nullable(),
  dietSummaryKey: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  latexTitle: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  rootRelativePath: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  noteType: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  content: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  formatted: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  summary: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  citationsListOrder: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  importantValues: _zod.z.lazy(() => _chunkKBBNTZU5cjs.FloatNullableListFilterSchema).optional(),
  imageSrc: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  href: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  sequentialKey: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  sequentialIndex: _zod.z.union([_zod.z.lazy(() => _chunk2WOD7U2Bcjs.FloatNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  floatImages: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  remoteUrl: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  trackRemote: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  outgoingQuickLinks: _zod.z.lazy(() => _chunk5AWIXPHDcjs.StringNullableListFilterSchema).optional(),
  quickLink: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  bookmarked: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  topics: _zod.z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => SubjectListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => TagListRelationFilterSchema).optional(),
  citations: _zod.z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  sequentialList: _zod.z.union([_zod.z.lazy(() => SequentialNoteListNullableRelationFilterSchema), _zod.z.lazy(() => SequentialNoteListWhereInputSchema)]).optional().nullable(),
  ReadingList: _zod.z.lazy(() => ReadingListListRelationFilterSchema).optional(),
  equations: _zod.z.lazy(() => EquationListRelationFilterSchema).optional(),
  definitions: _zod.z.lazy(() => DefinitionListRelationFilterSchema).optional(),
  toDo: _zod.z.lazy(() => ToDoListRelationFilterSchema).optional()
}).strict();
var MdxNoteWhereInputSchema_default = MdxNoteWhereInputSchema;

// src/database/inputTypeSchemas/MdxNoteListRelationFilterSchema.ts
var MdxNoteListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => MdxNoteWhereInputSchema).optional(),
  some: _zod.z.lazy(() => MdxNoteWhereInputSchema).optional(),
  none: _zod.z.lazy(() => MdxNoteWhereInputSchema).optional()
}).strict();
var MdxNoteListRelationFilterSchema_default = MdxNoteListRelationFilterSchema;

// src/database/inputTypeSchemas/TagWhereInputSchema.ts
var TagWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => TagWhereInputSchema), _zod.z.lazy(() => TagWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => TagWhereInputSchema), _zod.z.lazy(() => TagWhereInputSchema).array()]).optional(),
  value: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  kanbanId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  MdxNotes: _zod.z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  bibEntries: _zod.z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => IpynbListRelationFilterSchema).optional(),
  QAPair: _zod.z.lazy(() => QAPairListRelationFilterSchema).optional(),
  practiceExam: _zod.z.lazy(() => PracticeExamListRelationFilterSchema).optional(),
  equations: _zod.z.lazy(() => EquationListRelationFilterSchema).optional(),
  toDo: _zod.z.lazy(() => ToDoListRelationFilterSchema).optional(),
  Kanban: _zod.z.union([_zod.z.lazy(() => KanbanNullableRelationFilterSchema), _zod.z.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
  todoList: _zod.z.lazy(() => ToDoListListRelationFilterSchema).optional()
}).strict();
var TagWhereInputSchema_default = TagWhereInputSchema;

// src/database/inputTypeSchemas/TagListRelationFilterSchema.ts
var TagListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => TagWhereInputSchema).optional(),
  some: _zod.z.lazy(() => TagWhereInputSchema).optional(),
  none: _zod.z.lazy(() => TagWhereInputSchema).optional()
}).strict();
var TagListRelationFilterSchema_default = TagListRelationFilterSchema;

// src/database/inputTypeSchemas/BibEntryWhereInputSchema.ts
var BibEntryWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => BibEntryWhereInputSchema), _zod.z.lazy(() => BibEntryWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => BibEntryWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => BibEntryWhereInputSchema), _zod.z.lazy(() => BibEntryWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  BibId: _zod.z.union([_zod.z.lazy(() => _chunkRPNAAALBcjs.IntNullableFilterSchema), _zod.z.number()]).optional().nullable(),
  OwnWork: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  ColleaguesWork: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  read: _zod.z.union([_zod.z.lazy(() => _chunkOVUGA3P5cjs.BoolFilterSchema), _zod.z.boolean()]).optional(),
  htmlCitation: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  PdfPath: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  address: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  annote: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  author: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  booktitle: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  chapter: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  crossref: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  doi: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  edition: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  editor: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  email: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  howpublished: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  institution: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  journal: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  month: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  note: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  number: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  organization: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  pages: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  publisher: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  school: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  series: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  title: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  volume: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  type: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  year: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  numpages: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  url: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  issue: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  issn: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  abstract: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  urldate: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  keywords: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  copyright: _zod.z.union([_zod.z.lazy(() => _chunk2V5AKF3Qcjs.StringNullableFilterSchema), _zod.z.string()]).optional().nullable(),
  createdAt: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastAccess: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  Bib: _zod.z.union([_zod.z.lazy(() => BibNullableRelationFilterSchema), _zod.z.lazy(() => BibWhereInputSchema)]).optional().nullable(),
  citationGroups: _zod.z.lazy(() => CitationsGroupListRelationFilterSchema).optional(),
  tags: _zod.z.lazy(() => TagListRelationFilterSchema).optional(),
  topics: _zod.z.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: _zod.z.lazy(() => SubjectListRelationFilterSchema).optional(),
  MdxNotes: _zod.z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: _zod.z.lazy(() => IpynbListRelationFilterSchema).optional(),
  readingList: _zod.z.lazy(() => ReadingListListRelationFilterSchema).optional()
}).strict();
var BibEntryWhereInputSchema_default = BibEntryWhereInputSchema;

// src/database/inputTypeSchemas/BibEntryListRelationFilterSchema.ts
var BibEntryListRelationFilterSchema = _zod.z.object({
  every: _zod.z.lazy(() => BibEntryWhereInputSchema).optional(),
  some: _zod.z.lazy(() => BibEntryWhereInputSchema).optional(),
  none: _zod.z.lazy(() => BibEntryWhereInputSchema).optional()
}).strict();
var BibEntryListRelationFilterSchema_default = BibEntryListRelationFilterSchema;

// src/database/inputTypeSchemas/BibWhereInputSchema.ts
var BibWhereInputSchema = _zod.z.object({
  AND: _zod.z.union([_zod.z.lazy(() => BibWhereInputSchema), _zod.z.lazy(() => BibWhereInputSchema).array()]).optional(),
  OR: _zod.z.lazy(() => BibWhereInputSchema).array().optional(),
  NOT: _zod.z.union([_zod.z.lazy(() => BibWhereInputSchema), _zod.z.lazy(() => BibWhereInputSchema).array()]).optional(),
  id: _zod.z.union([_zod.z.lazy(() => _chunkE7BN4QPAcjs.IntFilterSchema), _zod.z.number()]).optional(),
  filename: _zod.z.union([_zod.z.lazy(() => _chunkXUF4Q3ZJcjs.StringFilterSchema), _zod.z.string()]).optional(),
  firstSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  lastSync: _zod.z.union([_zod.z.lazy(() => _chunk2L755XMWcjs.DateTimeFilterSchema), _zod.z.coerce.date()]).optional(),
  entries: _zod.z.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict();
var BibWhereInputSchema_default = BibWhereInputSchema;


























































































exports.BibWhereInputSchema = BibWhereInputSchema; exports.BibWhereInputSchema_default = BibWhereInputSchema_default; exports.BibNullableRelationFilterSchema = BibNullableRelationFilterSchema; exports.BibNullableRelationFilterSchema_default = BibNullableRelationFilterSchema_default; exports.CitationsGroupWhereInputSchema = CitationsGroupWhereInputSchema; exports.CitationsGroupWhereInputSchema_default = CitationsGroupWhereInputSchema_default; exports.CitationsGroupListRelationFilterSchema = CitationsGroupListRelationFilterSchema; exports.CitationsGroupListRelationFilterSchema_default = CitationsGroupListRelationFilterSchema_default; exports.SubjectListRelationFilterSchema = SubjectListRelationFilterSchema; exports.SubjectListRelationFilterSchema_default = SubjectListRelationFilterSchema_default; exports.ReadingListWhereInputSchema = ReadingListWhereInputSchema; exports.ReadingListWhereInputSchema_default = ReadingListWhereInputSchema_default; exports.ReadingListListRelationFilterSchema = ReadingListListRelationFilterSchema; exports.ReadingListListRelationFilterSchema_default = ReadingListListRelationFilterSchema_default; exports.BibEntryWhereInputSchema = BibEntryWhereInputSchema; exports.BibEntryWhereInputSchema_default = BibEntryWhereInputSchema_default; exports.BibEntryListRelationFilterSchema = BibEntryListRelationFilterSchema; exports.BibEntryListRelationFilterSchema_default = BibEntryListRelationFilterSchema_default; exports.PracticeExamWhereInputSchema = PracticeExamWhereInputSchema; exports.PracticeExamWhereInputSchema_default = PracticeExamWhereInputSchema_default; exports.PracticeExamListRelationFilterSchema = PracticeExamListRelationFilterSchema; exports.PracticeExamListRelationFilterSchema_default = PracticeExamListRelationFilterSchema_default; exports.QAPairWhereInputSchema = QAPairWhereInputSchema; exports.QAPairWhereInputSchema_default = QAPairWhereInputSchema_default; exports.QAPairListRelationFilterSchema = QAPairListRelationFilterSchema; exports.QAPairListRelationFilterSchema_default = QAPairListRelationFilterSchema_default; exports.RelatedValuesWhereInputSchema = RelatedValuesWhereInputSchema; exports.RelatedValuesWhereInputSchema_default = RelatedValuesWhereInputSchema_default; exports.RelatedValuesListRelationFilterSchema = RelatedValuesListRelationFilterSchema; exports.RelatedValuesListRelationFilterSchema_default = RelatedValuesListRelationFilterSchema_default; exports.EquationWhereInputSchema = EquationWhereInputSchema; exports.EquationWhereInputSchema_default = EquationWhereInputSchema_default; exports.EquationListRelationFilterSchema = EquationListRelationFilterSchema; exports.EquationListRelationFilterSchema_default = EquationListRelationFilterSchema_default; exports.ToDoNullableRelationFilterSchema = ToDoNullableRelationFilterSchema; exports.ToDoNullableRelationFilterSchema_default = ToDoNullableRelationFilterSchema_default; exports.ToDoListWhereInputSchema = ToDoListWhereInputSchema; exports.ToDoListWhereInputSchema_default = ToDoListWhereInputSchema_default; exports.ToDoListNullableRelationFilterSchema = ToDoListNullableRelationFilterSchema; exports.ToDoListNullableRelationFilterSchema_default = ToDoListNullableRelationFilterSchema_default; exports.ToDoWhereInputSchema = ToDoWhereInputSchema; exports.ToDoWhereInputSchema_default = ToDoWhereInputSchema_default; exports.ToDoListRelationFilterSchema = ToDoListRelationFilterSchema; exports.ToDoListRelationFilterSchema_default = ToDoListRelationFilterSchema_default; exports.KanBanListNullableRelationFilterSchema = KanBanListNullableRelationFilterSchema; exports.KanBanListNullableRelationFilterSchema_default = KanBanListNullableRelationFilterSchema_default; exports.KanBanCardWhereInputSchema = KanBanCardWhereInputSchema; exports.KanBanCardWhereInputSchema_default = KanBanCardWhereInputSchema_default; exports.KanBanCardListRelationFilterSchema = KanBanCardListRelationFilterSchema; exports.KanBanCardListRelationFilterSchema_default = KanBanCardListRelationFilterSchema_default; exports.KanBanListWhereInputSchema = KanBanListWhereInputSchema; exports.KanBanListWhereInputSchema_default = KanBanListWhereInputSchema_default; exports.KanBanListListRelationFilterSchema = KanBanListListRelationFilterSchema; exports.KanBanListListRelationFilterSchema_default = KanBanListListRelationFilterSchema_default; exports.KanbanWhereInputSchema = KanbanWhereInputSchema; exports.KanbanWhereInputSchema_default = KanbanWhereInputSchema_default; exports.KanbanNullableRelationFilterSchema = KanbanNullableRelationFilterSchema; exports.KanbanNullableRelationFilterSchema_default = KanbanNullableRelationFilterSchema_default; exports.ToDoListListRelationFilterSchema = ToDoListListRelationFilterSchema; exports.ToDoListListRelationFilterSchema_default = ToDoListListRelationFilterSchema_default; exports.TagWhereInputSchema = TagWhereInputSchema; exports.TagWhereInputSchema_default = TagWhereInputSchema_default; exports.TagListRelationFilterSchema = TagListRelationFilterSchema; exports.TagListRelationFilterSchema_default = TagListRelationFilterSchema_default; exports.SequentialNoteListWhereInputSchema = SequentialNoteListWhereInputSchema; exports.SequentialNoteListWhereInputSchema_default = SequentialNoteListWhereInputSchema_default; exports.SequentialNoteListNullableRelationFilterSchema = SequentialNoteListNullableRelationFilterSchema; exports.SequentialNoteListNullableRelationFilterSchema_default = SequentialNoteListNullableRelationFilterSchema_default; exports.IpynbWhereInputSchema = IpynbWhereInputSchema; exports.IpynbWhereInputSchema_default = IpynbWhereInputSchema_default; exports.IpynbListRelationFilterSchema = IpynbListRelationFilterSchema; exports.IpynbListRelationFilterSchema_default = IpynbListRelationFilterSchema_default; exports.TopicWhereInputSchema = TopicWhereInputSchema; exports.TopicWhereInputSchema_default = TopicWhereInputSchema_default; exports.TopicListRelationFilterSchema = TopicListRelationFilterSchema; exports.TopicListRelationFilterSchema_default = TopicListRelationFilterSchema_default; exports.MdxNoteNullableRelationFilterSchema = MdxNoteNullableRelationFilterSchema; exports.MdxNoteNullableRelationFilterSchema_default = MdxNoteNullableRelationFilterSchema_default; exports.DefinitionWhereInputSchema = DefinitionWhereInputSchema; exports.DefinitionWhereInputSchema_default = DefinitionWhereInputSchema_default; exports.DefinitionListRelationFilterSchema = DefinitionListRelationFilterSchema; exports.DefinitionListRelationFilterSchema_default = DefinitionListRelationFilterSchema_default; exports.MdxNoteWhereInputSchema = MdxNoteWhereInputSchema; exports.MdxNoteWhereInputSchema_default = MdxNoteWhereInputSchema_default; exports.MdxNoteListRelationFilterSchema = MdxNoteListRelationFilterSchema; exports.MdxNoteListRelationFilterSchema_default = MdxNoteListRelationFilterSchema_default; exports.SubjectWhereInputSchema = SubjectWhereInputSchema; exports.SubjectWhereInputSchema_default = SubjectWhereInputSchema_default;
//# sourceMappingURL=chunk-UNUMUJ42.cjs.map