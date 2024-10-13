import {
  BoolNullableFilterSchema
} from "./chunk-QYN6RJMK.js";
import {
  FloatNullableListFilterSchema
} from "./chunk-PDKEE5ZF.js";
import {
  IntNullableListFilterSchema
} from "./chunk-EUFG6BDQ.js";
import {
  EnumTaskCategoryNullableFilterSchema
} from "./chunk-MQUITXZ7.js";
import {
  JsonFilterSchema
} from "./chunk-P3VE75MX.js";
import {
  StringNullableListFilterSchema
} from "./chunk-6ULEVKEC.js";
import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";
import {
  FloatFilterSchema
} from "./chunk-DX2UN7V4.js";
import {
  FloatNullableFilterSchema
} from "./chunk-MDJNRMXP.js";
import {
  DateTimeNullableFilterSchema
} from "./chunk-GCZZHHO4.js";
import {
  IntNullableFilterSchema
} from "./chunk-3VYZ2XCQ.js";
import {
  BoolFilterSchema
} from "./chunk-SXFFRDDB.js";
import {
  StringNullableFilterSchema
} from "./chunk-2QBRQQJV.js";
import {
  IntFilterSchema
} from "./chunk-YWGZDUEP.js";
import {
  DateTimeFilterSchema
} from "./chunk-JHI3RHA5.js";
import {
  BytesFilterSchema
} from "./chunk-2FW6QR6Z.js";
import {
  StringFilterSchema
} from "./chunk-PJ2BGJH5.js";

// src/database/inputTypeSchemas/BibWhereInputSchema.ts
import { z as z44 } from "zod";

// src/database/inputTypeSchemas/BibEntryListRelationFilterSchema.ts
import { z as z43 } from "zod";

// src/database/inputTypeSchemas/BibEntryWhereInputSchema.ts
import { z as z42 } from "zod";

// src/database/inputTypeSchemas/BibNullableRelationFilterSchema.ts
import { z } from "zod";
var BibNullableRelationFilterSchema = z.object({
  is: z.lazy(() => BibWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BibWhereInputSchema).optional().nullable()
}).strict();
var BibNullableRelationFilterSchema_default = BibNullableRelationFilterSchema;

// src/database/inputTypeSchemas/CitationsGroupListRelationFilterSchema.ts
import { z as z3 } from "zod";

// src/database/inputTypeSchemas/CitationsGroupWhereInputSchema.ts
import { z as z2 } from "zod";
var CitationsGroupWhereInputSchema = z2.object({
  AND: z2.union([z2.lazy(() => CitationsGroupWhereInputSchema), z2.lazy(() => CitationsGroupWhereInputSchema).array()]).optional(),
  OR: z2.lazy(() => CitationsGroupWhereInputSchema).array().optional(),
  NOT: z2.union([z2.lazy(() => CitationsGroupWhereInputSchema), z2.lazy(() => CitationsGroupWhereInputSchema).array()]).optional(),
  name: z2.union([z2.lazy(() => StringFilterSchema), z2.string()]).optional(),
  description: z2.union([z2.lazy(() => StringNullableFilterSchema), z2.string()]).optional().nullable(),
  entries: z2.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict();
var CitationsGroupWhereInputSchema_default = CitationsGroupWhereInputSchema;

// src/database/inputTypeSchemas/CitationsGroupListRelationFilterSchema.ts
var CitationsGroupListRelationFilterSchema = z3.object({
  every: z3.lazy(() => CitationsGroupWhereInputSchema).optional(),
  some: z3.lazy(() => CitationsGroupWhereInputSchema).optional(),
  none: z3.lazy(() => CitationsGroupWhereInputSchema).optional()
}).strict();
var CitationsGroupListRelationFilterSchema_default = CitationsGroupListRelationFilterSchema;

// src/database/inputTypeSchemas/TagListRelationFilterSchema.ts
import { z as z41 } from "zod";

// src/database/inputTypeSchemas/TagWhereInputSchema.ts
import { z as z40 } from "zod";

// src/database/inputTypeSchemas/MdxNoteListRelationFilterSchema.ts
import { z as z39 } from "zod";

// src/database/inputTypeSchemas/MdxNoteWhereInputSchema.ts
import { z as z38 } from "zod";

// src/database/inputTypeSchemas/TopicListRelationFilterSchema.ts
import { z as z34 } from "zod";

// src/database/inputTypeSchemas/TopicWhereInputSchema.ts
import { z as z33 } from "zod";

// src/database/inputTypeSchemas/IpynbListRelationFilterSchema.ts
import { z as z32 } from "zod";

// src/database/inputTypeSchemas/IpynbWhereInputSchema.ts
import { z as z31 } from "zod";

// src/database/inputTypeSchemas/SubjectListRelationFilterSchema.ts
import { z as z26 } from "zod";

// src/database/inputTypeSchemas/SubjectWhereInputSchema.ts
import { z as z25 } from "zod";

// src/database/inputTypeSchemas/QAPairListRelationFilterSchema.ts
import { z as z7 } from "zod";

// src/database/inputTypeSchemas/QAPairWhereInputSchema.ts
import { z as z6 } from "zod";

// src/database/inputTypeSchemas/PracticeExamListRelationFilterSchema.ts
import { z as z5 } from "zod";

// src/database/inputTypeSchemas/PracticeExamWhereInputSchema.ts
import { z as z4 } from "zod";
var PracticeExamWhereInputSchema = z4.object({
  AND: z4.union([z4.lazy(() => PracticeExamWhereInputSchema), z4.lazy(() => PracticeExamWhereInputSchema).array()]).optional(),
  OR: z4.lazy(() => PracticeExamWhereInputSchema).array().optional(),
  NOT: z4.union([z4.lazy(() => PracticeExamWhereInputSchema), z4.lazy(() => PracticeExamWhereInputSchema).array()]).optional(),
  id: z4.union([z4.lazy(() => IntFilterSchema), z4.number()]).optional(),
  correctCount: z4.union([z4.lazy(() => IntFilterSchema), z4.number()]).optional(),
  inCorrectCount: z4.union([z4.lazy(() => IntFilterSchema), z4.number()]).optional(),
  timeLimitInSeconds: z4.union([z4.lazy(() => IntFilterSchema), z4.number()]).optional(),
  timeCompletedInSeconds: z4.union([z4.lazy(() => IntFilterSchema), z4.number()]).optional(),
  date: z4.union([z4.lazy(() => DateTimeFilterSchema), z4.coerce.date()]).optional(),
  topics: z4.lazy(() => TopicListRelationFilterSchema).optional(),
  tags: z4.lazy(() => TagListRelationFilterSchema).optional(),
  subjects: z4.lazy(() => SubjectListRelationFilterSchema).optional(),
  questions: z4.lazy(() => QAPairListRelationFilterSchema).optional()
}).strict();
var PracticeExamWhereInputSchema_default = PracticeExamWhereInputSchema;

// src/database/inputTypeSchemas/PracticeExamListRelationFilterSchema.ts
var PracticeExamListRelationFilterSchema = z5.object({
  every: z5.lazy(() => PracticeExamWhereInputSchema).optional(),
  some: z5.lazy(() => PracticeExamWhereInputSchema).optional(),
  none: z5.lazy(() => PracticeExamWhereInputSchema).optional()
}).strict();
var PracticeExamListRelationFilterSchema_default = PracticeExamListRelationFilterSchema;

// src/database/inputTypeSchemas/QAPairWhereInputSchema.ts
var QAPairWhereInputSchema = z6.object({
  AND: z6.union([z6.lazy(() => QAPairWhereInputSchema), z6.lazy(() => QAPairWhereInputSchema).array()]).optional(),
  OR: z6.lazy(() => QAPairWhereInputSchema).array().optional(),
  NOT: z6.union([z6.lazy(() => QAPairWhereInputSchema), z6.lazy(() => QAPairWhereInputSchema).array()]).optional(),
  id: z6.union([z6.lazy(() => StringFilterSchema), z6.string()]).optional(),
  question: z6.union([z6.lazy(() => StringFilterSchema), z6.string()]).optional(),
  answer: z6.union([z6.lazy(() => StringFilterSchema), z6.string()]).optional(),
  description: z6.union([z6.lazy(() => StringNullableFilterSchema), z6.string()]).optional().nullable(),
  secondaryLabel: z6.union([z6.lazy(() => StringNullableFilterSchema), z6.string()]).optional().nullable(),
  correctCount: z6.union([z6.lazy(() => IntFilterSchema), z6.number()]).optional(),
  inCorrectCount: z6.union([z6.lazy(() => IntFilterSchema), z6.number()]).optional(),
  tags: z6.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z6.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z6.lazy(() => SubjectListRelationFilterSchema).optional(),
  practiceExam: z6.lazy(() => PracticeExamListRelationFilterSchema).optional()
}).strict();
var QAPairWhereInputSchema_default = QAPairWhereInputSchema;

// src/database/inputTypeSchemas/QAPairListRelationFilterSchema.ts
var QAPairListRelationFilterSchema = z7.object({
  every: z7.lazy(() => QAPairWhereInputSchema).optional(),
  some: z7.lazy(() => QAPairWhereInputSchema).optional(),
  none: z7.lazy(() => QAPairWhereInputSchema).optional()
}).strict();
var QAPairListRelationFilterSchema_default = QAPairListRelationFilterSchema;

// src/database/inputTypeSchemas/KanbanNullableRelationFilterSchema.ts
import { z as z14 } from "zod";

// src/database/inputTypeSchemas/KanbanWhereInputSchema.ts
import { z as z13 } from "zod";

// src/database/inputTypeSchemas/KanBanListListRelationFilterSchema.ts
import { z as z12 } from "zod";

// src/database/inputTypeSchemas/KanBanListWhereInputSchema.ts
import { z as z11 } from "zod";

// src/database/inputTypeSchemas/KanBanCardListRelationFilterSchema.ts
import { z as z10 } from "zod";

// src/database/inputTypeSchemas/KanBanCardWhereInputSchema.ts
import { z as z9 } from "zod";

// src/database/inputTypeSchemas/KanBanListNullableRelationFilterSchema.ts
import { z as z8 } from "zod";
var KanBanListNullableRelationFilterSchema = z8.object({
  is: z8.lazy(() => KanBanListWhereInputSchema).optional().nullable(),
  isNot: z8.lazy(() => KanBanListWhereInputSchema).optional().nullable()
}).strict();
var KanBanListNullableRelationFilterSchema_default = KanBanListNullableRelationFilterSchema;

// src/database/inputTypeSchemas/KanBanCardWhereInputSchema.ts
var KanBanCardWhereInputSchema = z9.object({
  AND: z9.union([z9.lazy(() => KanBanCardWhereInputSchema), z9.lazy(() => KanBanCardWhereInputSchema).array()]).optional(),
  OR: z9.lazy(() => KanBanCardWhereInputSchema).array().optional(),
  NOT: z9.union([z9.lazy(() => KanBanCardWhereInputSchema), z9.lazy(() => KanBanCardWhereInputSchema).array()]).optional(),
  id: z9.union([z9.lazy(() => IntFilterSchema), z9.number()]).optional(),
  listId: z9.union([z9.lazy(() => IntNullableFilterSchema), z9.number()]).optional().nullable(),
  indexWithinList: z9.union([z9.lazy(() => IntFilterSchema), z9.number()]).optional(),
  label: z9.union([z9.lazy(() => StringNullableFilterSchema), z9.string()]).optional().nullable(),
  details: z9.union([z9.lazy(() => StringNullableFilterSchema), z9.string()]).optional().nullable(),
  KanBanList: z9.union([z9.lazy(() => KanBanListNullableRelationFilterSchema), z9.lazy(() => KanBanListWhereInputSchema)]).optional().nullable()
}).strict();
var KanBanCardWhereInputSchema_default = KanBanCardWhereInputSchema;

// src/database/inputTypeSchemas/KanBanCardListRelationFilterSchema.ts
var KanBanCardListRelationFilterSchema = z10.object({
  every: z10.lazy(() => KanBanCardWhereInputSchema).optional(),
  some: z10.lazy(() => KanBanCardWhereInputSchema).optional(),
  none: z10.lazy(() => KanBanCardWhereInputSchema).optional()
}).strict();
var KanBanCardListRelationFilterSchema_default = KanBanCardListRelationFilterSchema;

// src/database/inputTypeSchemas/KanBanListWhereInputSchema.ts
var KanBanListWhereInputSchema = z11.object({
  AND: z11.union([z11.lazy(() => KanBanListWhereInputSchema), z11.lazy(() => KanBanListWhereInputSchema).array()]).optional(),
  OR: z11.lazy(() => KanBanListWhereInputSchema).array().optional(),
  NOT: z11.union([z11.lazy(() => KanBanListWhereInputSchema), z11.lazy(() => KanBanListWhereInputSchema).array()]).optional(),
  id: z11.union([z11.lazy(() => IntFilterSchema), z11.number()]).optional(),
  indexWithinBoard: z11.union([z11.lazy(() => IntFilterSchema), z11.number()]).optional(),
  title: z11.union([z11.lazy(() => StringNullableFilterSchema), z11.string()]).optional().nullable(),
  boardId: z11.union([z11.lazy(() => IntNullableFilterSchema), z11.number()]).optional().nullable(),
  cards: z11.lazy(() => KanBanCardListRelationFilterSchema).optional(),
  Kanban: z11.union([z11.lazy(() => KanbanNullableRelationFilterSchema), z11.lazy(() => KanbanWhereInputSchema)]).optional().nullable()
}).strict();
var KanBanListWhereInputSchema_default = KanBanListWhereInputSchema;

// src/database/inputTypeSchemas/KanBanListListRelationFilterSchema.ts
var KanBanListListRelationFilterSchema = z12.object({
  every: z12.lazy(() => KanBanListWhereInputSchema).optional(),
  some: z12.lazy(() => KanBanListWhereInputSchema).optional(),
  none: z12.lazy(() => KanBanListWhereInputSchema).optional()
}).strict();
var KanBanListListRelationFilterSchema_default = KanBanListListRelationFilterSchema;

// src/database/inputTypeSchemas/KanbanWhereInputSchema.ts
var KanbanWhereInputSchema = z13.object({
  AND: z13.union([z13.lazy(() => KanbanWhereInputSchema), z13.lazy(() => KanbanWhereInputSchema).array()]).optional(),
  OR: z13.lazy(() => KanbanWhereInputSchema).array().optional(),
  NOT: z13.union([z13.lazy(() => KanbanWhereInputSchema), z13.lazy(() => KanbanWhereInputSchema).array()]).optional(),
  id: z13.union([z13.lazy(() => IntFilterSchema), z13.number()]).optional(),
  title: z13.union([z13.lazy(() => StringFilterSchema), z13.string()]).optional(),
  createdAt: z13.union([z13.lazy(() => DateTimeFilterSchema), z13.coerce.date()]).optional(),
  lastUpdate: z13.union([z13.lazy(() => DateTimeFilterSchema), z13.coerce.date()]).optional(),
  lists: z13.lazy(() => KanBanListListRelationFilterSchema).optional(),
  tags: z13.lazy(() => TagListRelationFilterSchema).optional(),
  subjects: z13.lazy(() => SubjectListRelationFilterSchema).optional(),
  topics: z13.lazy(() => TopicListRelationFilterSchema).optional()
}).strict();
var KanbanWhereInputSchema_default = KanbanWhereInputSchema;

// src/database/inputTypeSchemas/KanbanNullableRelationFilterSchema.ts
var KanbanNullableRelationFilterSchema = z14.object({
  is: z14.lazy(() => KanbanWhereInputSchema).optional().nullable(),
  isNot: z14.lazy(() => KanbanWhereInputSchema).optional().nullable()
}).strict();
var KanbanNullableRelationFilterSchema_default = KanbanNullableRelationFilterSchema;

// src/database/inputTypeSchemas/ToDoListListRelationFilterSchema.ts
import { z as z20 } from "zod";

// src/database/inputTypeSchemas/ToDoListWhereInputSchema.ts
import { z as z19 } from "zod";

// src/database/inputTypeSchemas/ToDoListRelationFilterSchema.ts
import { z as z18 } from "zod";

// src/database/inputTypeSchemas/ToDoWhereInputSchema.ts
import { z as z17 } from "zod";

// src/database/inputTypeSchemas/ToDoNullableRelationFilterSchema.ts
import { z as z15 } from "zod";
var ToDoNullableRelationFilterSchema = z15.object({
  is: z15.lazy(() => ToDoWhereInputSchema).optional().nullable(),
  isNot: z15.lazy(() => ToDoWhereInputSchema).optional().nullable()
}).strict();
var ToDoNullableRelationFilterSchema_default = ToDoNullableRelationFilterSchema;

// src/database/inputTypeSchemas/ToDoListNullableRelationFilterSchema.ts
import { z as z16 } from "zod";
var ToDoListNullableRelationFilterSchema = z16.object({
  is: z16.lazy(() => ToDoListWhereInputSchema).optional().nullable(),
  isNot: z16.lazy(() => ToDoListWhereInputSchema).optional().nullable()
}).strict();
var ToDoListNullableRelationFilterSchema_default = ToDoListNullableRelationFilterSchema;

// src/database/inputTypeSchemas/ToDoWhereInputSchema.ts
var ToDoWhereInputSchema = z17.object({
  AND: z17.union([z17.lazy(() => ToDoWhereInputSchema), z17.lazy(() => ToDoWhereInputSchema).array()]).optional(),
  OR: z17.lazy(() => ToDoWhereInputSchema).array().optional(),
  NOT: z17.union([z17.lazy(() => ToDoWhereInputSchema), z17.lazy(() => ToDoWhereInputSchema).array()]).optional(),
  id: z17.union([z17.lazy(() => IntFilterSchema), z17.number()]).optional(),
  createdAt: z17.union([z17.lazy(() => DateTimeFilterSchema), z17.coerce.date()]).optional(),
  task: z17.union([z17.lazy(() => StringFilterSchema), z17.string()]).optional(),
  dueAt: z17.union([z17.lazy(() => DateTimeNullableFilterSchema), z17.coerce.date()]).optional().nullable(),
  details: z17.union([z17.lazy(() => StringNullableFilterSchema), z17.string()]).optional().nullable(),
  parentId: z17.union([z17.lazy(() => IntNullableFilterSchema), z17.number()]).optional().nullable(),
  category: z17.union([z17.lazy(() => EnumTaskCategoryNullableFilterSchema), z17.lazy(() => TaskCategorySchema)]).optional().nullable(),
  bookmarked: z17.union([z17.lazy(() => BoolFilterSchema), z17.boolean()]).optional(),
  status: z17.union([z17.lazy(() => StringFilterSchema), z17.string()]).optional(),
  priority: z17.union([z17.lazy(() => IntFilterSchema), z17.number()]).optional(),
  toDoListId: z17.union([z17.lazy(() => IntNullableFilterSchema), z17.number()]).optional().nullable(),
  completedOn: z17.union([z17.lazy(() => DateTimeNullableFilterSchema), z17.coerce.date()]).optional().nullable(),
  associatedNotes: z17.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  tags: z17.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z17.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z17.lazy(() => SubjectListRelationFilterSchema).optional(),
  parent: z17.union([z17.lazy(() => ToDoNullableRelationFilterSchema), z17.lazy(() => ToDoWhereInputSchema)]).optional().nullable(),
  child: z17.lazy(() => ToDoListRelationFilterSchema).optional(),
  ToDoList: z17.union([z17.lazy(() => ToDoListNullableRelationFilterSchema), z17.lazy(() => ToDoListWhereInputSchema)]).optional().nullable()
}).strict();
var ToDoWhereInputSchema_default = ToDoWhereInputSchema;

// src/database/inputTypeSchemas/ToDoListRelationFilterSchema.ts
var ToDoListRelationFilterSchema = z18.object({
  every: z18.lazy(() => ToDoWhereInputSchema).optional(),
  some: z18.lazy(() => ToDoWhereInputSchema).optional(),
  none: z18.lazy(() => ToDoWhereInputSchema).optional()
}).strict();
var ToDoListRelationFilterSchema_default = ToDoListRelationFilterSchema;

// src/database/inputTypeSchemas/ToDoListWhereInputSchema.ts
var ToDoListWhereInputSchema = z19.object({
  AND: z19.union([z19.lazy(() => ToDoListWhereInputSchema), z19.lazy(() => ToDoListWhereInputSchema).array()]).optional(),
  OR: z19.lazy(() => ToDoListWhereInputSchema).array().optional(),
  NOT: z19.union([z19.lazy(() => ToDoListWhereInputSchema), z19.lazy(() => ToDoListWhereInputSchema).array()]).optional(),
  id: z19.union([z19.lazy(() => IntFilterSchema), z19.number()]).optional(),
  label: z19.union([z19.lazy(() => StringFilterSchema), z19.string()]).optional(),
  createdAt: z19.union([z19.lazy(() => DateTimeFilterSchema), z19.coerce.date()]).optional(),
  lastUpdate: z19.union([z19.lazy(() => DateTimeFilterSchema), z19.coerce.date()]).optional(),
  lastAccess: z19.union([z19.lazy(() => DateTimeFilterSchema), z19.coerce.date()]).optional(),
  tasks: z19.lazy(() => ToDoListRelationFilterSchema).optional(),
  tags: z19.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z19.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z19.lazy(() => SubjectListRelationFilterSchema).optional()
}).strict();
var ToDoListWhereInputSchema_default = ToDoListWhereInputSchema;

// src/database/inputTypeSchemas/ToDoListListRelationFilterSchema.ts
var ToDoListListRelationFilterSchema = z20.object({
  every: z20.lazy(() => ToDoListWhereInputSchema).optional(),
  some: z20.lazy(() => ToDoListWhereInputSchema).optional(),
  none: z20.lazy(() => ToDoListWhereInputSchema).optional()
}).strict();
var ToDoListListRelationFilterSchema_default = ToDoListListRelationFilterSchema;

// src/database/inputTypeSchemas/EquationListRelationFilterSchema.ts
import { z as z24 } from "zod";

// src/database/inputTypeSchemas/EquationWhereInputSchema.ts
import { z as z23 } from "zod";

// src/database/inputTypeSchemas/RelatedValuesListRelationFilterSchema.ts
import { z as z22 } from "zod";

// src/database/inputTypeSchemas/RelatedValuesWhereInputSchema.ts
import { z as z21 } from "zod";
var RelatedValuesWhereInputSchema = z21.object({
  AND: z21.union([z21.lazy(() => RelatedValuesWhereInputSchema), z21.lazy(() => RelatedValuesWhereInputSchema).array()]).optional(),
  OR: z21.lazy(() => RelatedValuesWhereInputSchema).array().optional(),
  NOT: z21.union([z21.lazy(() => RelatedValuesWhereInputSchema), z21.lazy(() => RelatedValuesWhereInputSchema).array()]).optional(),
  id: z21.union([z21.lazy(() => IntFilterSchema), z21.number()]).optional(),
  input: z21.lazy(() => JsonFilterSchema).optional(),
  output: z21.union([z21.lazy(() => FloatFilterSchema), z21.number()]).optional(),
  equationId: z21.lazy(() => IntNullableListFilterSchema).optional(),
  equations: z21.lazy(() => EquationListRelationFilterSchema).optional()
}).strict();
var RelatedValuesWhereInputSchema_default = RelatedValuesWhereInputSchema;

// src/database/inputTypeSchemas/RelatedValuesListRelationFilterSchema.ts
var RelatedValuesListRelationFilterSchema = z22.object({
  every: z22.lazy(() => RelatedValuesWhereInputSchema).optional(),
  some: z22.lazy(() => RelatedValuesWhereInputSchema).optional(),
  none: z22.lazy(() => RelatedValuesWhereInputSchema).optional()
}).strict();
var RelatedValuesListRelationFilterSchema_default = RelatedValuesListRelationFilterSchema;

// src/database/inputTypeSchemas/EquationWhereInputSchema.ts
var EquationWhereInputSchema = z23.object({
  AND: z23.union([z23.lazy(() => EquationWhereInputSchema), z23.lazy(() => EquationWhereInputSchema).array()]).optional(),
  OR: z23.lazy(() => EquationWhereInputSchema).array().optional(),
  NOT: z23.union([z23.lazy(() => EquationWhereInputSchema), z23.lazy(() => EquationWhereInputSchema).array()]).optional(),
  id: z23.union([z23.lazy(() => IntFilterSchema), z23.number()]).optional(),
  equationId: z23.union([z23.lazy(() => StringNullableFilterSchema), z23.string()]).optional().nullable(),
  title: z23.union([z23.lazy(() => StringFilterSchema), z23.string()]).optional(),
  desc: z23.union([z23.lazy(() => StringNullableFilterSchema), z23.string()]).optional().nullable(),
  content: z23.union([z23.lazy(() => StringFilterSchema), z23.string()]).optional(),
  asPython: z23.union([z23.lazy(() => StringNullableFilterSchema), z23.string()]).optional().nullable(),
  variableLegend: z23.lazy(() => JsonFilterSchema).optional(),
  variables: z23.lazy(() => StringNullableListFilterSchema).optional(),
  keywords: z23.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z23.union([z23.lazy(() => DateTimeFilterSchema), z23.coerce.date()]).optional(),
  lastAccess: z23.union([z23.lazy(() => DateTimeFilterSchema), z23.coerce.date()]).optional(),
  relatedValues: z23.lazy(() => RelatedValuesListRelationFilterSchema).optional(),
  tags: z23.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z23.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z23.lazy(() => SubjectListRelationFilterSchema).optional(),
  mdxNotes: z23.lazy(() => MdxNoteListRelationFilterSchema).optional()
}).strict();
var EquationWhereInputSchema_default = EquationWhereInputSchema;

// src/database/inputTypeSchemas/EquationListRelationFilterSchema.ts
var EquationListRelationFilterSchema = z24.object({
  every: z24.lazy(() => EquationWhereInputSchema).optional(),
  some: z24.lazy(() => EquationWhereInputSchema).optional(),
  none: z24.lazy(() => EquationWhereInputSchema).optional()
}).strict();
var EquationListRelationFilterSchema_default = EquationListRelationFilterSchema;

// src/database/inputTypeSchemas/SubjectWhereInputSchema.ts
var SubjectWhereInputSchema = z25.object({
  AND: z25.union([z25.lazy(() => SubjectWhereInputSchema), z25.lazy(() => SubjectWhereInputSchema).array()]).optional(),
  OR: z25.lazy(() => SubjectWhereInputSchema).array().optional(),
  NOT: z25.union([z25.lazy(() => SubjectWhereInputSchema), z25.lazy(() => SubjectWhereInputSchema).array()]).optional(),
  value: z25.union([z25.lazy(() => StringFilterSchema), z25.string()]).optional(),
  kanbanId: z25.union([z25.lazy(() => IntNullableFilterSchema), z25.number()]).optional().nullable(),
  createdAt: z25.union([z25.lazy(() => DateTimeFilterSchema), z25.coerce.date()]).optional(),
  lastAccess: z25.union([z25.lazy(() => DateTimeFilterSchema), z25.coerce.date()]).optional(),
  MdxNotes: z25.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  IpynbNotes: z25.lazy(() => IpynbListRelationFilterSchema).optional(),
  QaPair: z25.lazy(() => QAPairListRelationFilterSchema).optional(),
  practiceExam: z25.lazy(() => PracticeExamListRelationFilterSchema).optional(),
  Kanban: z25.union([z25.lazy(() => KanbanNullableRelationFilterSchema), z25.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
  todoList: z25.lazy(() => ToDoListListRelationFilterSchema).optional(),
  toDo: z25.lazy(() => ToDoListRelationFilterSchema).optional(),
  bibEntries: z25.lazy(() => BibEntryListRelationFilterSchema).optional(),
  equations: z25.lazy(() => EquationListRelationFilterSchema).optional()
}).strict();
var SubjectWhereInputSchema_default = SubjectWhereInputSchema;

// src/database/inputTypeSchemas/SubjectListRelationFilterSchema.ts
var SubjectListRelationFilterSchema = z26.object({
  every: z26.lazy(() => SubjectWhereInputSchema).optional(),
  some: z26.lazy(() => SubjectWhereInputSchema).optional(),
  none: z26.lazy(() => SubjectWhereInputSchema).optional()
}).strict();
var SubjectListRelationFilterSchema_default = SubjectListRelationFilterSchema;

// src/database/inputTypeSchemas/SequentialNoteListNullableRelationFilterSchema.ts
import { z as z28 } from "zod";

// src/database/inputTypeSchemas/SequentialNoteListWhereInputSchema.ts
import { z as z27 } from "zod";
var SequentialNoteListWhereInputSchema = z27.object({
  AND: z27.union([z27.lazy(() => SequentialNoteListWhereInputSchema), z27.lazy(() => SequentialNoteListWhereInputSchema).array()]).optional(),
  OR: z27.lazy(() => SequentialNoteListWhereInputSchema).array().optional(),
  NOT: z27.union([z27.lazy(() => SequentialNoteListWhereInputSchema), z27.lazy(() => SequentialNoteListWhereInputSchema).array()]).optional(),
  sequentialKey: z27.union([z27.lazy(() => StringFilterSchema), z27.string()]).optional(),
  MdxNote: z27.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  Ipynb: z27.lazy(() => IpynbListRelationFilterSchema).optional()
}).strict();
var SequentialNoteListWhereInputSchema_default = SequentialNoteListWhereInputSchema;

// src/database/inputTypeSchemas/SequentialNoteListNullableRelationFilterSchema.ts
var SequentialNoteListNullableRelationFilterSchema = z28.object({
  is: z28.lazy(() => SequentialNoteListWhereInputSchema).optional().nullable(),
  isNot: z28.lazy(() => SequentialNoteListWhereInputSchema).optional().nullable()
}).strict();
var SequentialNoteListNullableRelationFilterSchema_default = SequentialNoteListNullableRelationFilterSchema;

// src/database/inputTypeSchemas/ReadingListListRelationFilterSchema.ts
import { z as z30 } from "zod";

// src/database/inputTypeSchemas/ReadingListWhereInputSchema.ts
import { z as z29 } from "zod";
var ReadingListWhereInputSchema = z29.object({
  AND: z29.union([z29.lazy(() => ReadingListWhereInputSchema), z29.lazy(() => ReadingListWhereInputSchema).array()]).optional(),
  OR: z29.lazy(() => ReadingListWhereInputSchema).array().optional(),
  NOT: z29.union([z29.lazy(() => ReadingListWhereInputSchema), z29.lazy(() => ReadingListWhereInputSchema).array()]).optional(),
  name: z29.union([z29.lazy(() => StringFilterSchema), z29.string()]).optional(),
  description: z29.union([z29.lazy(() => StringNullableFilterSchema), z29.string()]).optional().nullable(),
  createdAt: z29.union([z29.lazy(() => DateTimeFilterSchema), z29.coerce.date()]).optional(),
  lastUpdate: z29.union([z29.lazy(() => DateTimeFilterSchema), z29.coerce.date()]).optional(),
  bibEntries: z29.lazy(() => BibEntryListRelationFilterSchema).optional(),
  mdxNotes: z29.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: z29.lazy(() => IpynbListRelationFilterSchema).optional()
}).strict();
var ReadingListWhereInputSchema_default = ReadingListWhereInputSchema;

// src/database/inputTypeSchemas/ReadingListListRelationFilterSchema.ts
var ReadingListListRelationFilterSchema = z30.object({
  every: z30.lazy(() => ReadingListWhereInputSchema).optional(),
  some: z30.lazy(() => ReadingListWhereInputSchema).optional(),
  none: z30.lazy(() => ReadingListWhereInputSchema).optional()
}).strict();
var ReadingListListRelationFilterSchema_default = ReadingListListRelationFilterSchema;

// src/database/inputTypeSchemas/IpynbWhereInputSchema.ts
var IpynbWhereInputSchema = z31.object({
  AND: z31.union([z31.lazy(() => IpynbWhereInputSchema), z31.lazy(() => IpynbWhereInputSchema).array()]).optional(),
  OR: z31.lazy(() => IpynbWhereInputSchema).array().optional(),
  NOT: z31.union([z31.lazy(() => IpynbWhereInputSchema), z31.lazy(() => IpynbWhereInputSchema).array()]).optional(),
  id: z31.union([z31.lazy(() => IntFilterSchema), z31.number()]).optional(),
  rootRelativePath: z31.union([z31.lazy(() => StringFilterSchema), z31.string()]).optional(),
  isProtected: z31.union([z31.lazy(() => BoolNullableFilterSchema), z31.boolean()]).optional().nullable(),
  title: z31.union([z31.lazy(() => StringFilterSchema), z31.string()]).optional(),
  latexTitle: z31.union([z31.lazy(() => StringNullableFilterSchema), z31.string()]).optional().nullable(),
  citationsListOrder: z31.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z31.lazy(() => FloatNullableListFilterSchema).optional(),
  href: z31.union([z31.lazy(() => StringFilterSchema), z31.string()]).optional(),
  outgoingQuickLinks: z31.lazy(() => StringNullableListFilterSchema).optional(),
  raw: z31.union([z31.lazy(() => BytesFilterSchema), z31.instanceof(Buffer)]).optional(),
  sequentialKey: z31.union([z31.lazy(() => StringNullableFilterSchema), z31.string()]).optional().nullable(),
  sequentialIndex: z31.union([z31.lazy(() => IntNullableFilterSchema), z31.number()]).optional().nullable(),
  bookmarked: z31.union([z31.lazy(() => BoolFilterSchema), z31.boolean()]).optional(),
  firstSync: z31.union([z31.lazy(() => DateTimeFilterSchema), z31.coerce.date()]).optional(),
  lastSync: z31.union([z31.lazy(() => DateTimeFilterSchema), z31.coerce.date()]).optional(),
  lastAccess: z31.union([z31.lazy(() => DateTimeFilterSchema), z31.coerce.date()]).optional(),
  tags: z31.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z31.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z31.lazy(() => SubjectListRelationFilterSchema).optional(),
  citations: z31.lazy(() => BibEntryListRelationFilterSchema).optional(),
  sequentialList: z31.union([z31.lazy(() => SequentialNoteListNullableRelationFilterSchema), z31.lazy(() => SequentialNoteListWhereInputSchema)]).optional().nullable(),
  readingList: z31.lazy(() => ReadingListListRelationFilterSchema).optional()
}).strict();
var IpynbWhereInputSchema_default = IpynbWhereInputSchema;

// src/database/inputTypeSchemas/IpynbListRelationFilterSchema.ts
var IpynbListRelationFilterSchema = z32.object({
  every: z32.lazy(() => IpynbWhereInputSchema).optional(),
  some: z32.lazy(() => IpynbWhereInputSchema).optional(),
  none: z32.lazy(() => IpynbWhereInputSchema).optional()
}).strict();
var IpynbListRelationFilterSchema_default = IpynbListRelationFilterSchema;

// src/database/inputTypeSchemas/TopicWhereInputSchema.ts
var TopicWhereInputSchema = z33.object({
  AND: z33.union([z33.lazy(() => TopicWhereInputSchema), z33.lazy(() => TopicWhereInputSchema).array()]).optional(),
  OR: z33.lazy(() => TopicWhereInputSchema).array().optional(),
  NOT: z33.union([z33.lazy(() => TopicWhereInputSchema), z33.lazy(() => TopicWhereInputSchema).array()]).optional(),
  value: z33.union([z33.lazy(() => StringFilterSchema), z33.string()]).optional(),
  kanbanId: z33.union([z33.lazy(() => IntNullableFilterSchema), z33.number()]).optional().nullable(),
  createdAt: z33.union([z33.lazy(() => DateTimeFilterSchema), z33.coerce.date()]).optional(),
  lastAccess: z33.union([z33.lazy(() => DateTimeFilterSchema), z33.coerce.date()]).optional(),
  MdxNotes: z33.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: z33.lazy(() => IpynbListRelationFilterSchema).optional(),
  QAPair: z33.lazy(() => QAPairListRelationFilterSchema).optional(),
  practiceExam: z33.lazy(() => PracticeExamListRelationFilterSchema).optional(),
  toDo: z33.lazy(() => ToDoListRelationFilterSchema).optional(),
  Kanban: z33.union([z33.lazy(() => KanbanNullableRelationFilterSchema), z33.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
  todoList: z33.lazy(() => ToDoListListRelationFilterSchema).optional(),
  bibEntries: z33.lazy(() => BibEntryListRelationFilterSchema).optional(),
  equations: z33.lazy(() => EquationListRelationFilterSchema).optional()
}).strict();
var TopicWhereInputSchema_default = TopicWhereInputSchema;

// src/database/inputTypeSchemas/TopicListRelationFilterSchema.ts
var TopicListRelationFilterSchema = z34.object({
  every: z34.lazy(() => TopicWhereInputSchema).optional(),
  some: z34.lazy(() => TopicWhereInputSchema).optional(),
  none: z34.lazy(() => TopicWhereInputSchema).optional()
}).strict();
var TopicListRelationFilterSchema_default = TopicListRelationFilterSchema;

// src/database/inputTypeSchemas/DefinitionListRelationFilterSchema.ts
import { z as z37 } from "zod";

// src/database/inputTypeSchemas/DefinitionWhereInputSchema.ts
import { z as z36 } from "zod";

// src/database/inputTypeSchemas/MdxNoteNullableRelationFilterSchema.ts
import { z as z35 } from "zod";
var MdxNoteNullableRelationFilterSchema = z35.object({
  is: z35.lazy(() => MdxNoteWhereInputSchema).optional().nullable(),
  isNot: z35.lazy(() => MdxNoteWhereInputSchema).optional().nullable()
}).strict();
var MdxNoteNullableRelationFilterSchema_default = MdxNoteNullableRelationFilterSchema;

// src/database/inputTypeSchemas/DefinitionWhereInputSchema.ts
var DefinitionWhereInputSchema = z36.object({
  AND: z36.union([z36.lazy(() => DefinitionWhereInputSchema), z36.lazy(() => DefinitionWhereInputSchema).array()]).optional(),
  OR: z36.lazy(() => DefinitionWhereInputSchema).array().optional(),
  NOT: z36.union([z36.lazy(() => DefinitionWhereInputSchema), z36.lazy(() => DefinitionWhereInputSchema).array()]).optional(),
  id: z36.union([z36.lazy(() => StringFilterSchema), z36.string()]).optional(),
  label: z36.union([z36.lazy(() => StringNullableFilterSchema), z36.string()]).optional().nullable(),
  content: z36.union([z36.lazy(() => StringNullableFilterSchema), z36.string()]).optional().nullable(),
  alphabeticalLabel: z36.union([z36.lazy(() => StringNullableFilterSchema), z36.string()]).optional().nullable(),
  mdxNoteId: z36.union([z36.lazy(() => IntNullableFilterSchema), z36.number()]).optional().nullable(),
  createdAt: z36.union([z36.lazy(() => DateTimeFilterSchema), z36.coerce.date()]).optional(),
  lastAccess: z36.union([z36.lazy(() => DateTimeFilterSchema), z36.coerce.date()]).optional(),
  mdxNote: z36.union([z36.lazy(() => MdxNoteNullableRelationFilterSchema), z36.lazy(() => MdxNoteWhereInputSchema)]).optional().nullable()
}).strict();
var DefinitionWhereInputSchema_default = DefinitionWhereInputSchema;

// src/database/inputTypeSchemas/DefinitionListRelationFilterSchema.ts
var DefinitionListRelationFilterSchema = z37.object({
  every: z37.lazy(() => DefinitionWhereInputSchema).optional(),
  some: z37.lazy(() => DefinitionWhereInputSchema).optional(),
  none: z37.lazy(() => DefinitionWhereInputSchema).optional()
}).strict();
var DefinitionListRelationFilterSchema_default = DefinitionListRelationFilterSchema;

// src/database/inputTypeSchemas/MdxNoteWhereInputSchema.ts
var MdxNoteWhereInputSchema = z38.object({
  AND: z38.union([z38.lazy(() => MdxNoteWhereInputSchema), z38.lazy(() => MdxNoteWhereInputSchema).array()]).optional(),
  OR: z38.lazy(() => MdxNoteWhereInputSchema).array().optional(),
  NOT: z38.union([z38.lazy(() => MdxNoteWhereInputSchema), z38.lazy(() => MdxNoteWhereInputSchema).array()]).optional(),
  id: z38.union([z38.lazy(() => IntFilterSchema), z38.number()]).optional(),
  isProtected: z38.union([z38.lazy(() => BoolNullableFilterSchema), z38.boolean()]).optional().nullable(),
  dietSummaryKey: z38.union([z38.lazy(() => StringNullableFilterSchema), z38.string()]).optional().nullable(),
  title: z38.union([z38.lazy(() => StringFilterSchema), z38.string()]).optional(),
  latexTitle: z38.union([z38.lazy(() => StringNullableFilterSchema), z38.string()]).optional().nullable(),
  rootRelativePath: z38.union([z38.lazy(() => StringFilterSchema), z38.string()]).optional(),
  noteType: z38.union([z38.lazy(() => StringFilterSchema), z38.string()]).optional(),
  content: z38.union([z38.lazy(() => StringFilterSchema), z38.string()]).optional(),
  formatted: z38.union([z38.lazy(() => StringNullableFilterSchema), z38.string()]).optional().nullable(),
  summary: z38.union([z38.lazy(() => StringNullableFilterSchema), z38.string()]).optional().nullable(),
  citationsListOrder: z38.lazy(() => StringNullableListFilterSchema).optional(),
  importantValues: z38.lazy(() => FloatNullableListFilterSchema).optional(),
  imageSrc: z38.union([z38.lazy(() => StringNullableFilterSchema), z38.string()]).optional().nullable(),
  href: z38.union([z38.lazy(() => StringFilterSchema), z38.string()]).optional(),
  sequentialKey: z38.union([z38.lazy(() => StringNullableFilterSchema), z38.string()]).optional().nullable(),
  sequentialIndex: z38.union([z38.lazy(() => FloatNullableFilterSchema), z38.number()]).optional().nullable(),
  floatImages: z38.union([z38.lazy(() => BoolFilterSchema), z38.boolean()]).optional(),
  remoteUrl: z38.union([z38.lazy(() => StringNullableFilterSchema), z38.string()]).optional().nullable(),
  trackRemote: z38.union([z38.lazy(() => BoolFilterSchema), z38.boolean()]).optional(),
  outgoingQuickLinks: z38.lazy(() => StringNullableListFilterSchema).optional(),
  quickLink: z38.union([z38.lazy(() => StringNullableFilterSchema), z38.string()]).optional().nullable(),
  bookmarked: z38.union([z38.lazy(() => BoolFilterSchema), z38.boolean()]).optional(),
  firstSync: z38.union([z38.lazy(() => DateTimeFilterSchema), z38.coerce.date()]).optional(),
  lastSync: z38.union([z38.lazy(() => DateTimeFilterSchema), z38.coerce.date()]).optional(),
  lastAccess: z38.union([z38.lazy(() => DateTimeFilterSchema), z38.coerce.date()]).optional(),
  topics: z38.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z38.lazy(() => SubjectListRelationFilterSchema).optional(),
  tags: z38.lazy(() => TagListRelationFilterSchema).optional(),
  citations: z38.lazy(() => BibEntryListRelationFilterSchema).optional(),
  sequentialList: z38.union([z38.lazy(() => SequentialNoteListNullableRelationFilterSchema), z38.lazy(() => SequentialNoteListWhereInputSchema)]).optional().nullable(),
  ReadingList: z38.lazy(() => ReadingListListRelationFilterSchema).optional(),
  equations: z38.lazy(() => EquationListRelationFilterSchema).optional(),
  definitions: z38.lazy(() => DefinitionListRelationFilterSchema).optional(),
  toDo: z38.lazy(() => ToDoListRelationFilterSchema).optional()
}).strict();
var MdxNoteWhereInputSchema_default = MdxNoteWhereInputSchema;

// src/database/inputTypeSchemas/MdxNoteListRelationFilterSchema.ts
var MdxNoteListRelationFilterSchema = z39.object({
  every: z39.lazy(() => MdxNoteWhereInputSchema).optional(),
  some: z39.lazy(() => MdxNoteWhereInputSchema).optional(),
  none: z39.lazy(() => MdxNoteWhereInputSchema).optional()
}).strict();
var MdxNoteListRelationFilterSchema_default = MdxNoteListRelationFilterSchema;

// src/database/inputTypeSchemas/TagWhereInputSchema.ts
var TagWhereInputSchema = z40.object({
  AND: z40.union([z40.lazy(() => TagWhereInputSchema), z40.lazy(() => TagWhereInputSchema).array()]).optional(),
  OR: z40.lazy(() => TagWhereInputSchema).array().optional(),
  NOT: z40.union([z40.lazy(() => TagWhereInputSchema), z40.lazy(() => TagWhereInputSchema).array()]).optional(),
  value: z40.union([z40.lazy(() => StringFilterSchema), z40.string()]).optional(),
  kanbanId: z40.union([z40.lazy(() => IntNullableFilterSchema), z40.number()]).optional().nullable(),
  createdAt: z40.union([z40.lazy(() => DateTimeFilterSchema), z40.coerce.date()]).optional(),
  lastAccess: z40.union([z40.lazy(() => DateTimeFilterSchema), z40.coerce.date()]).optional(),
  MdxNotes: z40.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  bibEntries: z40.lazy(() => BibEntryListRelationFilterSchema).optional(),
  ipynbNotes: z40.lazy(() => IpynbListRelationFilterSchema).optional(),
  QAPair: z40.lazy(() => QAPairListRelationFilterSchema).optional(),
  practiceExam: z40.lazy(() => PracticeExamListRelationFilterSchema).optional(),
  equations: z40.lazy(() => EquationListRelationFilterSchema).optional(),
  toDo: z40.lazy(() => ToDoListRelationFilterSchema).optional(),
  Kanban: z40.union([z40.lazy(() => KanbanNullableRelationFilterSchema), z40.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
  todoList: z40.lazy(() => ToDoListListRelationFilterSchema).optional()
}).strict();
var TagWhereInputSchema_default = TagWhereInputSchema;

// src/database/inputTypeSchemas/TagListRelationFilterSchema.ts
var TagListRelationFilterSchema = z41.object({
  every: z41.lazy(() => TagWhereInputSchema).optional(),
  some: z41.lazy(() => TagWhereInputSchema).optional(),
  none: z41.lazy(() => TagWhereInputSchema).optional()
}).strict();
var TagListRelationFilterSchema_default = TagListRelationFilterSchema;

// src/database/inputTypeSchemas/BibEntryWhereInputSchema.ts
var BibEntryWhereInputSchema = z42.object({
  AND: z42.union([z42.lazy(() => BibEntryWhereInputSchema), z42.lazy(() => BibEntryWhereInputSchema).array()]).optional(),
  OR: z42.lazy(() => BibEntryWhereInputSchema).array().optional(),
  NOT: z42.union([z42.lazy(() => BibEntryWhereInputSchema), z42.lazy(() => BibEntryWhereInputSchema).array()]).optional(),
  id: z42.union([z42.lazy(() => StringFilterSchema), z42.string()]).optional(),
  BibId: z42.union([z42.lazy(() => IntNullableFilterSchema), z42.number()]).optional().nullable(),
  OwnWork: z42.union([z42.lazy(() => BoolFilterSchema), z42.boolean()]).optional(),
  ColleaguesWork: z42.union([z42.lazy(() => BoolFilterSchema), z42.boolean()]).optional(),
  read: z42.union([z42.lazy(() => BoolFilterSchema), z42.boolean()]).optional(),
  htmlCitation: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  PdfPath: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  address: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  annote: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  author: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  booktitle: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  chapter: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  crossref: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  doi: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  edition: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  editor: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  email: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  howpublished: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  institution: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  journal: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  month: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  note: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  number: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  organization: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  pages: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  publisher: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  school: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  series: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  title: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  volume: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  type: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  year: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  numpages: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  url: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  issue: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  issn: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  abstract: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  urldate: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  keywords: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  copyright: z42.union([z42.lazy(() => StringNullableFilterSchema), z42.string()]).optional().nullable(),
  createdAt: z42.union([z42.lazy(() => DateTimeFilterSchema), z42.coerce.date()]).optional(),
  lastAccess: z42.union([z42.lazy(() => DateTimeFilterSchema), z42.coerce.date()]).optional(),
  Bib: z42.union([z42.lazy(() => BibNullableRelationFilterSchema), z42.lazy(() => BibWhereInputSchema)]).optional().nullable(),
  citationGroups: z42.lazy(() => CitationsGroupListRelationFilterSchema).optional(),
  tags: z42.lazy(() => TagListRelationFilterSchema).optional(),
  topics: z42.lazy(() => TopicListRelationFilterSchema).optional(),
  subjects: z42.lazy(() => SubjectListRelationFilterSchema).optional(),
  MdxNotes: z42.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  ipynbNotes: z42.lazy(() => IpynbListRelationFilterSchema).optional(),
  readingList: z42.lazy(() => ReadingListListRelationFilterSchema).optional()
}).strict();
var BibEntryWhereInputSchema_default = BibEntryWhereInputSchema;

// src/database/inputTypeSchemas/BibEntryListRelationFilterSchema.ts
var BibEntryListRelationFilterSchema = z43.object({
  every: z43.lazy(() => BibEntryWhereInputSchema).optional(),
  some: z43.lazy(() => BibEntryWhereInputSchema).optional(),
  none: z43.lazy(() => BibEntryWhereInputSchema).optional()
}).strict();
var BibEntryListRelationFilterSchema_default = BibEntryListRelationFilterSchema;

// src/database/inputTypeSchemas/BibWhereInputSchema.ts
var BibWhereInputSchema = z44.object({
  AND: z44.union([z44.lazy(() => BibWhereInputSchema), z44.lazy(() => BibWhereInputSchema).array()]).optional(),
  OR: z44.lazy(() => BibWhereInputSchema).array().optional(),
  NOT: z44.union([z44.lazy(() => BibWhereInputSchema), z44.lazy(() => BibWhereInputSchema).array()]).optional(),
  id: z44.union([z44.lazy(() => IntFilterSchema), z44.number()]).optional(),
  filename: z44.union([z44.lazy(() => StringFilterSchema), z44.string()]).optional(),
  firstSync: z44.union([z44.lazy(() => DateTimeFilterSchema), z44.coerce.date()]).optional(),
  lastSync: z44.union([z44.lazy(() => DateTimeFilterSchema), z44.coerce.date()]).optional(),
  entries: z44.lazy(() => BibEntryListRelationFilterSchema).optional()
}).strict();
var BibWhereInputSchema_default = BibWhereInputSchema;

export {
  BibWhereInputSchema,
  BibWhereInputSchema_default,
  BibNullableRelationFilterSchema,
  BibNullableRelationFilterSchema_default,
  CitationsGroupWhereInputSchema,
  CitationsGroupWhereInputSchema_default,
  CitationsGroupListRelationFilterSchema,
  CitationsGroupListRelationFilterSchema_default,
  SubjectListRelationFilterSchema,
  SubjectListRelationFilterSchema_default,
  ReadingListWhereInputSchema,
  ReadingListWhereInputSchema_default,
  ReadingListListRelationFilterSchema,
  ReadingListListRelationFilterSchema_default,
  BibEntryWhereInputSchema,
  BibEntryWhereInputSchema_default,
  BibEntryListRelationFilterSchema,
  BibEntryListRelationFilterSchema_default,
  PracticeExamWhereInputSchema,
  PracticeExamWhereInputSchema_default,
  PracticeExamListRelationFilterSchema,
  PracticeExamListRelationFilterSchema_default,
  QAPairWhereInputSchema,
  QAPairWhereInputSchema_default,
  QAPairListRelationFilterSchema,
  QAPairListRelationFilterSchema_default,
  RelatedValuesWhereInputSchema,
  RelatedValuesWhereInputSchema_default,
  RelatedValuesListRelationFilterSchema,
  RelatedValuesListRelationFilterSchema_default,
  EquationWhereInputSchema,
  EquationWhereInputSchema_default,
  EquationListRelationFilterSchema,
  EquationListRelationFilterSchema_default,
  ToDoNullableRelationFilterSchema,
  ToDoNullableRelationFilterSchema_default,
  ToDoListWhereInputSchema,
  ToDoListWhereInputSchema_default,
  ToDoListNullableRelationFilterSchema,
  ToDoListNullableRelationFilterSchema_default,
  ToDoWhereInputSchema,
  ToDoWhereInputSchema_default,
  ToDoListRelationFilterSchema,
  ToDoListRelationFilterSchema_default,
  KanBanListNullableRelationFilterSchema,
  KanBanListNullableRelationFilterSchema_default,
  KanBanCardWhereInputSchema,
  KanBanCardWhereInputSchema_default,
  KanBanCardListRelationFilterSchema,
  KanBanCardListRelationFilterSchema_default,
  KanBanListWhereInputSchema,
  KanBanListWhereInputSchema_default,
  KanBanListListRelationFilterSchema,
  KanBanListListRelationFilterSchema_default,
  KanbanWhereInputSchema,
  KanbanWhereInputSchema_default,
  KanbanNullableRelationFilterSchema,
  KanbanNullableRelationFilterSchema_default,
  ToDoListListRelationFilterSchema,
  ToDoListListRelationFilterSchema_default,
  TagWhereInputSchema,
  TagWhereInputSchema_default,
  TagListRelationFilterSchema,
  TagListRelationFilterSchema_default,
  SequentialNoteListWhereInputSchema,
  SequentialNoteListWhereInputSchema_default,
  SequentialNoteListNullableRelationFilterSchema,
  SequentialNoteListNullableRelationFilterSchema_default,
  IpynbWhereInputSchema,
  IpynbWhereInputSchema_default,
  IpynbListRelationFilterSchema,
  IpynbListRelationFilterSchema_default,
  TopicWhereInputSchema,
  TopicWhereInputSchema_default,
  TopicListRelationFilterSchema,
  TopicListRelationFilterSchema_default,
  MdxNoteNullableRelationFilterSchema,
  MdxNoteNullableRelationFilterSchema_default,
  DefinitionWhereInputSchema,
  DefinitionWhereInputSchema_default,
  DefinitionListRelationFilterSchema,
  DefinitionListRelationFilterSchema_default,
  MdxNoteWhereInputSchema,
  MdxNoteWhereInputSchema_default,
  MdxNoteListRelationFilterSchema,
  MdxNoteListRelationFilterSchema_default,
  SubjectWhereInputSchema,
  SubjectWhereInputSchema_default
};
//# sourceMappingURL=chunk-XHIJ766H.js.map