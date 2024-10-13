"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _chunkQF2T6FCZcjs = require('./chunk-QF2T6FCZ.cjs');


var _chunkBRDOGD33cjs = require('./chunk-BRDOGD33.cjs');

// src/database/modelSchema/BibSchema.ts
var _zod = require('zod');

// src/database/modelSchema/BibEntrySchema.ts


// src/database/modelSchema/CitationsGroupSchema.ts

var CitationsGroupSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().nullable()
});
var CitationsGroupPartialSchema = CitationsGroupSchema.partial();
var CitationsGroupWithRelationsSchema = CitationsGroupSchema.merge(_zod.z.object({
  entries: _zod.z.lazy(() => BibEntryWithRelationsSchema).array()
}));
var CitationsGroupPartialWithRelationsSchema = CitationsGroupPartialSchema.merge(_zod.z.object({
  entries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array()
})).partial();
var CitationsGroupWithPartialRelationsSchema = CitationsGroupSchema.merge(_zod.z.object({
  entries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array()
}).partial());
var CitationsGroupSchema_default = CitationsGroupSchema;

// src/database/modelSchema/TagSchema.ts


// src/database/modelSchema/MdxNoteSchema.ts


// src/database/modelSchema/TopicSchema.ts


// src/database/modelSchema/IpynbSchema.ts


// src/database/modelSchema/SubjectSchema.ts


// src/database/modelSchema/QAPairSchema.ts


// src/database/modelSchema/PracticeExamSchema.ts

var PracticeExamSchema = _zod.z.object({
  id: _zod.z.number().int(),
  correctCount: _zod.z.number().int(),
  inCorrectCount: _zod.z.number().int(),
  timeLimitInSeconds: _zod.z.number().int(),
  timeCompletedInSeconds: _zod.z.number().int(),
  date: _zod.z.coerce.date()
});
var PracticeExamPartialSchema = PracticeExamSchema.partial();
var PracticeExamWithRelationsSchema = PracticeExamSchema.merge(_zod.z.object({
  topics: _zod.z.lazy(() => TopicWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectWithRelationsSchema).array(),
  questions: _zod.z.lazy(() => QAPairWithRelationsSchema).array()
}));
var PracticeExamPartialWithRelationsSchema = PracticeExamPartialSchema.merge(_zod.z.object({
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  questions: _zod.z.lazy(() => QAPairPartialWithRelationsSchema).array()
})).partial();
var PracticeExamWithPartialRelationsSchema = PracticeExamSchema.merge(_zod.z.object({
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  questions: _zod.z.lazy(() => QAPairPartialWithRelationsSchema).array()
}).partial());
var PracticeExamSchema_default = PracticeExamSchema;

// src/database/modelSchema/QAPairSchema.ts
var QAPairSchema = _zod.z.object({
  id: _zod.z.string(),
  question: _zod.z.string(),
  answer: _zod.z.string(),
  description: _zod.z.string().nullable(),
  secondaryLabel: _zod.z.string().nullable(),
  correctCount: _zod.z.number().int(),
  inCorrectCount: _zod.z.number().int()
});
var QAPairPartialSchema = QAPairSchema.partial();
var QAPairWithRelationsSchema = QAPairSchema.merge(_zod.z.object({
  tags: _zod.z.lazy(() => TagWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamWithRelationsSchema).array()
}));
var QAPairPartialWithRelationsSchema = QAPairPartialSchema.merge(_zod.z.object({
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamPartialWithRelationsSchema).array()
})).partial();
var QAPairWithPartialRelationsSchema = QAPairSchema.merge(_zod.z.object({
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamPartialWithRelationsSchema).array()
}).partial());
var QAPairSchema_default = QAPairSchema;

// src/database/modelSchema/KanbanSchema.ts


// src/database/modelSchema/KanBanListSchema.ts


// src/database/modelSchema/KanBanCardSchema.ts

var KanBanCardSchema = _zod.z.object({
  id: _zod.z.number().int(),
  listId: _zod.z.number().int().nullable(),
  indexWithinList: _zod.z.number().int(),
  label: _zod.z.string().nullable(),
  details: _zod.z.string().nullable()
});
var KanBanCardPartialSchema = KanBanCardSchema.partial();
var KanBanCardWithRelationsSchema = KanBanCardSchema.merge(_zod.z.object({
  KanBanList: _zod.z.lazy(() => KanBanListWithRelationsSchema).nullable()
}));
var KanBanCardPartialWithRelationsSchema = KanBanCardPartialSchema.merge(_zod.z.object({
  KanBanList: _zod.z.lazy(() => KanBanListPartialWithRelationsSchema).nullable()
})).partial();
var KanBanCardWithPartialRelationsSchema = KanBanCardSchema.merge(_zod.z.object({
  KanBanList: _zod.z.lazy(() => KanBanListPartialWithRelationsSchema).nullable()
}).partial());
var KanBanCardSchema_default = KanBanCardSchema;

// src/database/modelSchema/KanBanListSchema.ts
var KanBanListSchema = _zod.z.object({
  id: _zod.z.number().int(),
  indexWithinBoard: _zod.z.number().int(),
  title: _zod.z.string().nullable(),
  boardId: _zod.z.number().int().nullable()
});
var KanBanListPartialSchema = KanBanListSchema.partial();
var KanBanListWithRelationsSchema = KanBanListSchema.merge(_zod.z.object({
  cards: _zod.z.lazy(() => KanBanCardWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanWithRelationsSchema).nullable()
}));
var KanBanListPartialWithRelationsSchema = KanBanListPartialSchema.merge(_zod.z.object({
  cards: _zod.z.lazy(() => KanBanCardPartialWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanPartialWithRelationsSchema).nullable()
})).partial();
var KanBanListWithPartialRelationsSchema = KanBanListSchema.merge(_zod.z.object({
  cards: _zod.z.lazy(() => KanBanCardPartialWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanPartialWithRelationsSchema).nullable()
}).partial());
var KanBanListSchema_default = KanBanListSchema;

// src/database/modelSchema/KanbanSchema.ts
var KanbanSchema = _zod.z.object({
  id: _zod.z.number().int(),
  title: _zod.z.string(),
  createdAt: _zod.z.coerce.date(),
  lastUpdate: _zod.z.coerce.date()
});
var KanbanPartialSchema = KanbanSchema.partial();
var KanbanWithRelationsSchema = KanbanSchema.merge(_zod.z.object({
  lists: _zod.z.lazy(() => KanBanListWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicWithRelationsSchema).array()
}));
var KanbanPartialWithRelationsSchema = KanbanPartialSchema.merge(_zod.z.object({
  lists: _zod.z.lazy(() => KanBanListPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array()
})).partial();
var KanbanWithPartialRelationsSchema = KanbanSchema.merge(_zod.z.object({
  lists: _zod.z.lazy(() => KanBanListPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array()
}).partial());
var KanbanSchema_default = KanbanSchema;

// src/database/modelSchema/ToDoListSchema.ts


// src/database/modelSchema/ToDoSchema.ts

var ToDoSchema = _zod.z.object({
  category: _chunkBRDOGD33cjs.TaskCategorySchema.nullable(),
  id: _zod.z.number().int(),
  createdAt: _zod.z.coerce.date(),
  task: _zod.z.string(),
  dueAt: _zod.z.coerce.date().nullable(),
  details: _zod.z.string().nullable(),
  parentId: _zod.z.number().int().nullable(),
  bookmarked: _zod.z.boolean(),
  status: _zod.z.string(),
  priority: _zod.z.number().int(),
  toDoListId: _zod.z.number().int().nullable(),
  completedOn: _zod.z.coerce.date().nullable()
});
var ToDoPartialSchema = ToDoSchema.partial();
var ToDoWithRelationsSchema = ToDoSchema.merge(_zod.z.object({
  associatedNotes: _zod.z.lazy(() => MdxNoteWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectWithRelationsSchema).array(),
  parent: _zod.z.lazy(() => ToDoWithRelationsSchema).nullable(),
  child: _zod.z.lazy(() => ToDoWithRelationsSchema).array(),
  ToDoList: _zod.z.lazy(() => ToDoListWithRelationsSchema).nullable()
}));
var ToDoPartialWithRelationsSchema = ToDoPartialSchema.merge(_zod.z.object({
  associatedNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  parent: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).nullable(),
  child: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  ToDoList: _zod.z.lazy(() => ToDoListPartialWithRelationsSchema).nullable()
})).partial();
var ToDoWithPartialRelationsSchema = ToDoSchema.merge(_zod.z.object({
  associatedNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  parent: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).nullable(),
  child: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  ToDoList: _zod.z.lazy(() => ToDoListPartialWithRelationsSchema).nullable()
}).partial());
var ToDoSchema_default = ToDoSchema;

// src/database/modelSchema/ToDoListSchema.ts
var ToDoListSchema = _zod.z.object({
  id: _zod.z.number().int(),
  label: _zod.z.string(),
  createdAt: _zod.z.coerce.date(),
  lastUpdate: _zod.z.coerce.date(),
  lastAccess: _zod.z.coerce.date()
});
var ToDoListPartialSchema = ToDoListSchema.partial();
var ToDoListWithRelationsSchema = ToDoListSchema.merge(_zod.z.object({
  tasks: _zod.z.lazy(() => ToDoWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectWithRelationsSchema).array()
}));
var ToDoListPartialWithRelationsSchema = ToDoListPartialSchema.merge(_zod.z.object({
  tasks: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array()
})).partial();
var ToDoListWithPartialRelationsSchema = ToDoListSchema.merge(_zod.z.object({
  tasks: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array()
}).partial());
var ToDoListSchema_default = ToDoListSchema;

// src/database/modelSchema/EquationSchema.ts


// src/database/modelSchema/RelatedValuesSchema.ts

var RelatedValuesSchema = _zod.z.object({
  id: _zod.z.number().int(),
  input: _chunkQF2T6FCZcjs.JsonValueSchema,
  output: _zod.z.number(),
  equationId: _zod.z.number().int().array()
});
var RelatedValuesPartialSchema = RelatedValuesSchema.partial();
var RelatedValuesWithRelationsSchema = RelatedValuesSchema.merge(_zod.z.object({
  equations: _zod.z.lazy(() => EquationWithRelationsSchema).array()
}));
var RelatedValuesPartialWithRelationsSchema = RelatedValuesPartialSchema.merge(_zod.z.object({
  equations: _zod.z.lazy(() => EquationPartialWithRelationsSchema).array()
})).partial();
var RelatedValuesWithPartialRelationsSchema = RelatedValuesSchema.merge(_zod.z.object({
  equations: _zod.z.lazy(() => EquationPartialWithRelationsSchema).array()
}).partial());
var RelatedValuesSchema_default = RelatedValuesSchema;

// src/database/modelSchema/EquationSchema.ts
var EquationSchema = _zod.z.object({
  id: _zod.z.number().int(),
  equationId: _zod.z.string().nullable(),
  title: _zod.z.string(),
  desc: _zod.z.string().nullable(),
  content: _zod.z.string(),
  asPython: _zod.z.string().nullable(),
  variableLegend: _chunkQF2T6FCZcjs.JsonValueSchema,
  variables: _zod.z.string().array(),
  keywords: _zod.z.string().array(),
  createdAt: _zod.z.coerce.date(),
  lastAccess: _zod.z.coerce.date()
});
var EquationPartialSchema = EquationSchema.partial();
var EquationWithRelationsSchema = EquationSchema.merge(_zod.z.object({
  relatedValues: _zod.z.lazy(() => RelatedValuesWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectWithRelationsSchema).array(),
  mdxNotes: _zod.z.lazy(() => MdxNoteWithRelationsSchema).array()
}));
var EquationPartialWithRelationsSchema = EquationPartialSchema.merge(_zod.z.object({
  relatedValues: _zod.z.lazy(() => RelatedValuesPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  mdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array()
})).partial();
var EquationWithPartialRelationsSchema = EquationSchema.merge(_zod.z.object({
  relatedValues: _zod.z.lazy(() => RelatedValuesPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  mdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array()
}).partial());
var EquationSchema_default = EquationSchema;

// src/database/modelSchema/SubjectSchema.ts
var SubjectSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().nullable(),
  createdAt: _zod.z.coerce.date(),
  lastAccess: _zod.z.coerce.date()
});
var SubjectPartialSchema = SubjectSchema.partial();
var SubjectWithRelationsSchema = SubjectSchema.merge(_zod.z.object({
  MdxNotes: _zod.z.lazy(() => MdxNoteWithRelationsSchema).array(),
  IpynbNotes: _zod.z.lazy(() => IpynbWithRelationsSchema).array(),
  QaPair: _zod.z.lazy(() => QAPairWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanWithRelationsSchema).nullable(),
  todoList: _zod.z.lazy(() => ToDoListWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoWithRelationsSchema).array(),
  bibEntries: _zod.z.lazy(() => BibEntryWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationWithRelationsSchema).array()
}));
var SubjectPartialWithRelationsSchema = SubjectPartialSchema.merge(_zod.z.object({
  MdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  IpynbNotes: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QaPair: _zod.z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: _zod.z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  bibEntries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationPartialWithRelationsSchema).array()
})).partial();
var SubjectWithPartialRelationsSchema = SubjectSchema.merge(_zod.z.object({
  MdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  IpynbNotes: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QaPair: _zod.z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: _zod.z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  bibEntries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationPartialWithRelationsSchema).array()
}).partial());
var SubjectSchema_default = SubjectSchema;

// src/database/modelSchema/SequentialNoteListSchema.ts

var SequentialNoteListSchema = _zod.z.object({
  sequentialKey: _zod.z.string()
});
var SequentialNoteListPartialSchema = SequentialNoteListSchema.partial();
var SequentialNoteListWithRelationsSchema = SequentialNoteListSchema.merge(_zod.z.object({
  MdxNote: _zod.z.lazy(() => MdxNoteWithRelationsSchema).array(),
  Ipynb: _zod.z.lazy(() => IpynbWithRelationsSchema).array()
}));
var SequentialNoteListPartialWithRelationsSchema = SequentialNoteListPartialSchema.merge(_zod.z.object({
  MdxNote: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  Ipynb: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array()
})).partial();
var SequentialNoteListWithPartialRelationsSchema = SequentialNoteListSchema.merge(_zod.z.object({
  MdxNote: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  Ipynb: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array()
}).partial());
var SequentialNoteListSchema_default = SequentialNoteListSchema;

// src/database/modelSchema/ReadingListSchema.ts

var ReadingListSchema = _zod.z.object({
  name: _zod.z.string(),
  description: _zod.z.string().nullable(),
  createdAt: _zod.z.coerce.date(),
  lastUpdate: _zod.z.coerce.date()
});
var ReadingListPartialSchema = ReadingListSchema.partial();
var ReadingListWithRelationsSchema = ReadingListSchema.merge(_zod.z.object({
  bibEntries: _zod.z.lazy(() => BibEntryWithRelationsSchema).array(),
  mdxNotes: _zod.z.lazy(() => MdxNoteWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbWithRelationsSchema).array()
}));
var ReadingListPartialWithRelationsSchema = ReadingListPartialSchema.merge(_zod.z.object({
  bibEntries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  mdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array()
})).partial();
var ReadingListWithPartialRelationsSchema = ReadingListSchema.merge(_zod.z.object({
  bibEntries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  mdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array()
}).partial());
var ReadingListSchema_default = ReadingListSchema;

// src/database/modelSchema/IpynbSchema.ts
var IpynbSchema = _zod.z.object({
  id: _zod.z.number().int(),
  rootRelativePath: _zod.z.string(),
  isProtected: _zod.z.boolean().nullable(),
  title: _zod.z.string(),
  latexTitle: _zod.z.string().nullable(),
  citationsListOrder: _zod.z.string().array(),
  importantValues: _zod.z.number().array(),
  href: _zod.z.string(),
  outgoingQuickLinks: _zod.z.string().array(),
  raw: _zod.z.instanceof(Buffer),
  sequentialKey: _zod.z.string().nullable(),
  sequentialIndex: _zod.z.number().int().nullable(),
  bookmarked: _zod.z.boolean(),
  firstSync: _zod.z.coerce.date(),
  lastSync: _zod.z.coerce.date(),
  lastAccess: _zod.z.coerce.date()
});
var IpynbPartialSchema = IpynbSchema.partial();
var IpynbWithRelationsSchema = IpynbSchema.merge(_zod.z.object({
  tags: _zod.z.lazy(() => TagWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectWithRelationsSchema).array(),
  citations: _zod.z.lazy(() => BibEntryWithRelationsSchema).array(),
  sequentialList: _zod.z.lazy(() => SequentialNoteListWithRelationsSchema).nullable(),
  readingList: _zod.z.lazy(() => ReadingListWithRelationsSchema).array()
}));
var IpynbPartialWithRelationsSchema = IpynbPartialSchema.merge(_zod.z.object({
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  citations: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: _zod.z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  readingList: _zod.z.lazy(() => ReadingListPartialWithRelationsSchema).array()
})).partial();
var IpynbWithPartialRelationsSchema = IpynbSchema.merge(_zod.z.object({
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  citations: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: _zod.z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  readingList: _zod.z.lazy(() => ReadingListPartialWithRelationsSchema).array()
}).partial());
var IpynbSchema_default = IpynbSchema;

// src/database/modelSchema/TopicSchema.ts
var TopicSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().nullable(),
  createdAt: _zod.z.coerce.date(),
  lastAccess: _zod.z.coerce.date()
});
var TopicPartialSchema = TopicSchema.partial();
var TopicWithRelationsSchema = TopicSchema.merge(_zod.z.object({
  MdxNotes: _zod.z.lazy(() => MdxNoteWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbWithRelationsSchema).array(),
  QAPair: _zod.z.lazy(() => QAPairWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanWithRelationsSchema).nullable(),
  todoList: _zod.z.lazy(() => ToDoListWithRelationsSchema).array(),
  bibEntries: _zod.z.lazy(() => BibEntryWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationWithRelationsSchema).array()
}));
var TopicPartialWithRelationsSchema = TopicPartialSchema.merge(_zod.z.object({
  MdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: _zod.z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: _zod.z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  bibEntries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationPartialWithRelationsSchema).array()
})).partial();
var TopicWithPartialRelationsSchema = TopicSchema.merge(_zod.z.object({
  MdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: _zod.z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: _zod.z.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  bibEntries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationPartialWithRelationsSchema).array()
}).partial());
var TopicSchema_default = TopicSchema;

// src/database/modelSchema/DefinitionSchema.ts

var DefinitionSchema = _zod.z.object({
  id: _zod.z.string(),
  label: _zod.z.string().nullable(),
  content: _zod.z.string().nullable(),
  alphabeticalLabel: _zod.z.string().nullable(),
  mdxNoteId: _zod.z.number().int().nullable(),
  createdAt: _zod.z.coerce.date(),
  lastAccess: _zod.z.coerce.date()
});
var DefinitionPartialSchema = DefinitionSchema.partial();
var DefinitionWithRelationsSchema = DefinitionSchema.merge(_zod.z.object({
  mdxNote: _zod.z.lazy(() => MdxNoteWithRelationsSchema).nullable()
}));
var DefinitionPartialWithRelationsSchema = DefinitionPartialSchema.merge(_zod.z.object({
  mdxNote: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).nullable()
})).partial();
var DefinitionWithPartialRelationsSchema = DefinitionSchema.merge(_zod.z.object({
  mdxNote: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).nullable()
}).partial());
var DefinitionSchema_default = DefinitionSchema;

// src/database/modelSchema/MdxNoteSchema.ts
var MdxNoteSchema = _zod.z.object({
  id: _zod.z.number().int(),
  isProtected: _zod.z.boolean().nullable(),
  dietSummaryKey: _zod.z.string().nullable(),
  title: _zod.z.string(),
  latexTitle: _zod.z.string().nullable(),
  rootRelativePath: _zod.z.string(),
  noteType: _zod.z.string(),
  content: _zod.z.string(),
  formatted: _zod.z.string().nullable(),
  summary: _zod.z.string().nullable(),
  citationsListOrder: _zod.z.string().array(),
  importantValues: _zod.z.number().array(),
  imageSrc: _zod.z.string().nullable(),
  href: _zod.z.string(),
  sequentialKey: _zod.z.string().nullable(),
  sequentialIndex: _zod.z.number().nullable(),
  floatImages: _zod.z.boolean(),
  remoteUrl: _zod.z.string().nullable(),
  trackRemote: _zod.z.boolean(),
  outgoingQuickLinks: _zod.z.string().array(),
  quickLink: _zod.z.string().nullable(),
  bookmarked: _zod.z.boolean(),
  firstSync: _zod.z.coerce.date(),
  lastSync: _zod.z.coerce.date(),
  lastAccess: _zod.z.coerce.date()
});
var MdxNotePartialSchema = MdxNoteSchema.partial();
var MdxNoteWithRelationsSchema = MdxNoteSchema.merge(_zod.z.object({
  topics: _zod.z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagWithRelationsSchema).array(),
  citations: _zod.z.lazy(() => BibEntryWithRelationsSchema).array(),
  sequentialList: _zod.z.lazy(() => SequentialNoteListWithRelationsSchema).nullable(),
  ReadingList: _zod.z.lazy(() => ReadingListWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationWithRelationsSchema).array(),
  definitions: _zod.z.lazy(() => DefinitionWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoWithRelationsSchema).array()
}));
var MdxNotePartialWithRelationsSchema = MdxNotePartialSchema.merge(_zod.z.object({
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  citations: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: _zod.z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  ReadingList: _zod.z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationPartialWithRelationsSchema).array(),
  definitions: _zod.z.lazy(() => DefinitionPartialWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array()
})).partial();
var MdxNoteWithPartialRelationsSchema = MdxNoteSchema.merge(_zod.z.object({
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  citations: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: _zod.z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  ReadingList: _zod.z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationPartialWithRelationsSchema).array(),
  definitions: _zod.z.lazy(() => DefinitionPartialWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array()
}).partial());
var MdxNoteSchema_default = MdxNoteSchema;

// src/database/modelSchema/TagSchema.ts
var TagSchema = _zod.z.object({
  value: _zod.z.string(),
  kanbanId: _zod.z.number().int().nullable(),
  createdAt: _zod.z.coerce.date(),
  lastAccess: _zod.z.coerce.date()
});
var TagPartialSchema = TagSchema.partial();
var TagWithRelationsSchema = TagSchema.merge(_zod.z.object({
  MdxNotes: _zod.z.lazy(() => MdxNoteWithRelationsSchema).array(),
  bibEntries: _zod.z.lazy(() => BibEntryWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbWithRelationsSchema).array(),
  QAPair: _zod.z.lazy(() => QAPairWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanWithRelationsSchema).nullable(),
  todoList: _zod.z.lazy(() => ToDoListWithRelationsSchema).array()
}));
var TagPartialWithRelationsSchema = TagPartialSchema.merge(_zod.z.object({
  MdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  bibEntries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: _zod.z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationPartialWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: _zod.z.lazy(() => ToDoListPartialWithRelationsSchema).array()
})).partial();
var TagWithPartialRelationsSchema = TagSchema.merge(_zod.z.object({
  MdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  bibEntries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: _zod.z.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: _zod.z.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  equations: _zod.z.lazy(() => EquationPartialWithRelationsSchema).array(),
  toDo: _zod.z.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: _zod.z.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: _zod.z.lazy(() => ToDoListPartialWithRelationsSchema).array()
}).partial());
var TagSchema_default = TagSchema;

// src/database/modelSchema/BibEntrySchema.ts
var BibEntrySchema = _zod.z.object({
  id: _zod.z.string(),
  BibId: _zod.z.number().int().nullable(),
  OwnWork: _zod.z.boolean(),
  ColleaguesWork: _zod.z.boolean(),
  read: _zod.z.boolean(),
  htmlCitation: _zod.z.string().nullable(),
  PdfPath: _zod.z.string().nullable(),
  address: _zod.z.string().nullable(),
  annote: _zod.z.string().nullable(),
  author: _zod.z.string().nullable(),
  booktitle: _zod.z.string().nullable(),
  chapter: _zod.z.string().nullable(),
  crossref: _zod.z.string().nullable(),
  doi: _zod.z.string().nullable(),
  edition: _zod.z.string().nullable(),
  editor: _zod.z.string().nullable(),
  email: _zod.z.string().nullable(),
  howpublished: _zod.z.string().nullable(),
  institution: _zod.z.string().nullable(),
  journal: _zod.z.string().nullable(),
  month: _zod.z.string().nullable(),
  note: _zod.z.string().nullable(),
  number: _zod.z.string().nullable(),
  organization: _zod.z.string().nullable(),
  pages: _zod.z.string().nullable(),
  publisher: _zod.z.string().nullable(),
  school: _zod.z.string().nullable(),
  series: _zod.z.string().nullable(),
  title: _zod.z.string().nullable(),
  volume: _zod.z.string().nullable(),
  type: _zod.z.string().nullable(),
  year: _zod.z.string().nullable(),
  numpages: _zod.z.string().nullable(),
  url: _zod.z.string().nullable(),
  issue: _zod.z.string().nullable(),
  issn: _zod.z.string().nullable(),
  abstract: _zod.z.string().nullable(),
  urldate: _zod.z.string().nullable(),
  keywords: _zod.z.string().nullable(),
  copyright: _zod.z.string().nullable(),
  createdAt: _zod.z.coerce.date(),
  lastAccess: _zod.z.coerce.date()
});
var BibEntryPartialSchema = BibEntrySchema.partial();
var BibEntryWithRelationsSchema = BibEntrySchema.merge(_zod.z.object({
  Bib: _zod.z.lazy(() => BibWithRelationsSchema).nullable(),
  citationGroups: _zod.z.lazy(() => CitationsGroupWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectWithRelationsSchema).array(),
  MdxNotes: _zod.z.lazy(() => MdxNoteWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbWithRelationsSchema).array(),
  readingList: _zod.z.lazy(() => ReadingListWithRelationsSchema).array()
}));
var BibEntryPartialWithRelationsSchema = BibEntryPartialSchema.merge(_zod.z.object({
  Bib: _zod.z.lazy(() => BibPartialWithRelationsSchema).nullable(),
  citationGroups: _zod.z.lazy(() => CitationsGroupPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  MdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  readingList: _zod.z.lazy(() => ReadingListPartialWithRelationsSchema).array()
})).partial();
var BibEntryWithPartialRelationsSchema = BibEntrySchema.merge(_zod.z.object({
  Bib: _zod.z.lazy(() => BibPartialWithRelationsSchema).nullable(),
  citationGroups: _zod.z.lazy(() => CitationsGroupPartialWithRelationsSchema).array(),
  tags: _zod.z.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: _zod.z.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: _zod.z.lazy(() => SubjectPartialWithRelationsSchema).array(),
  MdxNotes: _zod.z.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: _zod.z.lazy(() => IpynbPartialWithRelationsSchema).array(),
  readingList: _zod.z.lazy(() => ReadingListPartialWithRelationsSchema).array()
}).partial());
var BibEntrySchema_default = BibEntrySchema;

// src/database/modelSchema/BibSchema.ts
var BibSchema = _zod.z.object({
  id: _zod.z.number().int(),
  filename: _zod.z.string(),
  firstSync: _zod.z.coerce.date(),
  lastSync: _zod.z.coerce.date()
});
var BibPartialSchema = BibSchema.partial();
var BibWithRelationsSchema = BibSchema.merge(_zod.z.object({
  entries: _zod.z.lazy(() => BibEntryWithRelationsSchema).array()
}));
var BibPartialWithRelationsSchema = BibPartialSchema.merge(_zod.z.object({
  entries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array()
})).partial();
var BibWithPartialRelationsSchema = BibSchema.merge(_zod.z.object({
  entries: _zod.z.lazy(() => BibEntryPartialWithRelationsSchema).array()
}).partial());
var BibSchema_default = BibSchema;


























































































































exports.BibSchema = BibSchema; exports.BibPartialSchema = BibPartialSchema; exports.BibWithRelationsSchema = BibWithRelationsSchema; exports.BibPartialWithRelationsSchema = BibPartialWithRelationsSchema; exports.BibWithPartialRelationsSchema = BibWithPartialRelationsSchema; exports.BibSchema_default = BibSchema_default; exports.CitationsGroupSchema = CitationsGroupSchema; exports.CitationsGroupPartialSchema = CitationsGroupPartialSchema; exports.CitationsGroupWithRelationsSchema = CitationsGroupWithRelationsSchema; exports.CitationsGroupPartialWithRelationsSchema = CitationsGroupPartialWithRelationsSchema; exports.CitationsGroupWithPartialRelationsSchema = CitationsGroupWithPartialRelationsSchema; exports.CitationsGroupSchema_default = CitationsGroupSchema_default; exports.ReadingListSchema = ReadingListSchema; exports.ReadingListPartialSchema = ReadingListPartialSchema; exports.ReadingListWithRelationsSchema = ReadingListWithRelationsSchema; exports.ReadingListPartialWithRelationsSchema = ReadingListPartialWithRelationsSchema; exports.ReadingListWithPartialRelationsSchema = ReadingListWithPartialRelationsSchema; exports.ReadingListSchema_default = ReadingListSchema_default; exports.BibEntrySchema = BibEntrySchema; exports.BibEntryPartialSchema = BibEntryPartialSchema; exports.BibEntryWithRelationsSchema = BibEntryWithRelationsSchema; exports.BibEntryPartialWithRelationsSchema = BibEntryPartialWithRelationsSchema; exports.BibEntryWithPartialRelationsSchema = BibEntryWithPartialRelationsSchema; exports.BibEntrySchema_default = BibEntrySchema_default; exports.PracticeExamSchema = PracticeExamSchema; exports.PracticeExamPartialSchema = PracticeExamPartialSchema; exports.PracticeExamWithRelationsSchema = PracticeExamWithRelationsSchema; exports.PracticeExamPartialWithRelationsSchema = PracticeExamPartialWithRelationsSchema; exports.PracticeExamWithPartialRelationsSchema = PracticeExamWithPartialRelationsSchema; exports.PracticeExamSchema_default = PracticeExamSchema_default; exports.QAPairSchema = QAPairSchema; exports.QAPairPartialSchema = QAPairPartialSchema; exports.QAPairWithRelationsSchema = QAPairWithRelationsSchema; exports.QAPairPartialWithRelationsSchema = QAPairPartialWithRelationsSchema; exports.QAPairWithPartialRelationsSchema = QAPairWithPartialRelationsSchema; exports.QAPairSchema_default = QAPairSchema_default; exports.RelatedValuesSchema = RelatedValuesSchema; exports.RelatedValuesPartialSchema = RelatedValuesPartialSchema; exports.RelatedValuesWithRelationsSchema = RelatedValuesWithRelationsSchema; exports.RelatedValuesPartialWithRelationsSchema = RelatedValuesPartialWithRelationsSchema; exports.RelatedValuesWithPartialRelationsSchema = RelatedValuesWithPartialRelationsSchema; exports.RelatedValuesSchema_default = RelatedValuesSchema_default; exports.EquationSchema = EquationSchema; exports.EquationPartialSchema = EquationPartialSchema; exports.EquationWithRelationsSchema = EquationWithRelationsSchema; exports.EquationPartialWithRelationsSchema = EquationPartialWithRelationsSchema; exports.EquationWithPartialRelationsSchema = EquationWithPartialRelationsSchema; exports.EquationSchema_default = EquationSchema_default; exports.ToDoListSchema = ToDoListSchema; exports.ToDoListPartialSchema = ToDoListPartialSchema; exports.ToDoListWithRelationsSchema = ToDoListWithRelationsSchema; exports.ToDoListPartialWithRelationsSchema = ToDoListPartialWithRelationsSchema; exports.ToDoListWithPartialRelationsSchema = ToDoListWithPartialRelationsSchema; exports.ToDoListSchema_default = ToDoListSchema_default; exports.ToDoSchema = ToDoSchema; exports.ToDoPartialSchema = ToDoPartialSchema; exports.ToDoWithRelationsSchema = ToDoWithRelationsSchema; exports.ToDoPartialWithRelationsSchema = ToDoPartialWithRelationsSchema; exports.ToDoWithPartialRelationsSchema = ToDoWithPartialRelationsSchema; exports.ToDoSchema_default = ToDoSchema_default; exports.KanBanCardSchema = KanBanCardSchema; exports.KanBanCardPartialSchema = KanBanCardPartialSchema; exports.KanBanCardWithRelationsSchema = KanBanCardWithRelationsSchema; exports.KanBanCardPartialWithRelationsSchema = KanBanCardPartialWithRelationsSchema; exports.KanBanCardWithPartialRelationsSchema = KanBanCardWithPartialRelationsSchema; exports.KanBanCardSchema_default = KanBanCardSchema_default; exports.KanBanListSchema = KanBanListSchema; exports.KanBanListPartialSchema = KanBanListPartialSchema; exports.KanBanListWithRelationsSchema = KanBanListWithRelationsSchema; exports.KanBanListPartialWithRelationsSchema = KanBanListPartialWithRelationsSchema; exports.KanBanListWithPartialRelationsSchema = KanBanListWithPartialRelationsSchema; exports.KanBanListSchema_default = KanBanListSchema_default; exports.KanbanSchema = KanbanSchema; exports.KanbanPartialSchema = KanbanPartialSchema; exports.KanbanWithRelationsSchema = KanbanWithRelationsSchema; exports.KanbanPartialWithRelationsSchema = KanbanPartialWithRelationsSchema; exports.KanbanWithPartialRelationsSchema = KanbanWithPartialRelationsSchema; exports.KanbanSchema_default = KanbanSchema_default; exports.TagSchema = TagSchema; exports.TagPartialSchema = TagPartialSchema; exports.TagWithRelationsSchema = TagWithRelationsSchema; exports.TagPartialWithRelationsSchema = TagPartialWithRelationsSchema; exports.TagWithPartialRelationsSchema = TagWithPartialRelationsSchema; exports.TagSchema_default = TagSchema_default; exports.SequentialNoteListSchema = SequentialNoteListSchema; exports.SequentialNoteListPartialSchema = SequentialNoteListPartialSchema; exports.SequentialNoteListWithRelationsSchema = SequentialNoteListWithRelationsSchema; exports.SequentialNoteListPartialWithRelationsSchema = SequentialNoteListPartialWithRelationsSchema; exports.SequentialNoteListWithPartialRelationsSchema = SequentialNoteListWithPartialRelationsSchema; exports.SequentialNoteListSchema_default = SequentialNoteListSchema_default; exports.IpynbSchema = IpynbSchema; exports.IpynbPartialSchema = IpynbPartialSchema; exports.IpynbWithRelationsSchema = IpynbWithRelationsSchema; exports.IpynbPartialWithRelationsSchema = IpynbPartialWithRelationsSchema; exports.IpynbWithPartialRelationsSchema = IpynbWithPartialRelationsSchema; exports.IpynbSchema_default = IpynbSchema_default; exports.TopicSchema = TopicSchema; exports.TopicPartialSchema = TopicPartialSchema; exports.TopicWithRelationsSchema = TopicWithRelationsSchema; exports.TopicPartialWithRelationsSchema = TopicPartialWithRelationsSchema; exports.TopicWithPartialRelationsSchema = TopicWithPartialRelationsSchema; exports.TopicSchema_default = TopicSchema_default; exports.DefinitionSchema = DefinitionSchema; exports.DefinitionPartialSchema = DefinitionPartialSchema; exports.DefinitionWithRelationsSchema = DefinitionWithRelationsSchema; exports.DefinitionPartialWithRelationsSchema = DefinitionPartialWithRelationsSchema; exports.DefinitionWithPartialRelationsSchema = DefinitionWithPartialRelationsSchema; exports.DefinitionSchema_default = DefinitionSchema_default; exports.MdxNoteSchema = MdxNoteSchema; exports.MdxNotePartialSchema = MdxNotePartialSchema; exports.MdxNoteWithRelationsSchema = MdxNoteWithRelationsSchema; exports.MdxNotePartialWithRelationsSchema = MdxNotePartialWithRelationsSchema; exports.MdxNoteWithPartialRelationsSchema = MdxNoteWithPartialRelationsSchema; exports.MdxNoteSchema_default = MdxNoteSchema_default; exports.SubjectSchema = SubjectSchema; exports.SubjectPartialSchema = SubjectPartialSchema; exports.SubjectWithRelationsSchema = SubjectWithRelationsSchema; exports.SubjectPartialWithRelationsSchema = SubjectPartialWithRelationsSchema; exports.SubjectWithPartialRelationsSchema = SubjectWithPartialRelationsSchema; exports.SubjectSchema_default = SubjectSchema_default;
//# sourceMappingURL=chunk-LFQDZDFT.cjs.map