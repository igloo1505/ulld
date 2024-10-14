import {
  JsonValueSchema
} from "./chunk-WWHEEPM6.js";
import {
  TaskCategorySchema
} from "./chunk-T4CHWTHS.js";

// src/database/modelSchema/BibSchema.ts
import { z as z20 } from "zod";

// src/database/modelSchema/BibEntrySchema.ts
import { z as z19 } from "zod";

// src/database/modelSchema/CitationsGroupSchema.ts
import { z } from "zod";
var CitationsGroupSchema = z.object({
  name: z.string(),
  description: z.string().nullable()
});
var CitationsGroupPartialSchema = CitationsGroupSchema.partial();
var CitationsGroupWithRelationsSchema = CitationsGroupSchema.merge(z.object({
  entries: z.lazy(() => BibEntryWithRelationsSchema).array()
}));
var CitationsGroupPartialWithRelationsSchema = CitationsGroupPartialSchema.merge(z.object({
  entries: z.lazy(() => BibEntryPartialWithRelationsSchema).array()
})).partial();
var CitationsGroupWithPartialRelationsSchema = CitationsGroupSchema.merge(z.object({
  entries: z.lazy(() => BibEntryPartialWithRelationsSchema).array()
}).partial());
var CitationsGroupSchema_default = CitationsGroupSchema;

// src/database/modelSchema/TagSchema.ts
import { z as z18 } from "zod";

// src/database/modelSchema/MdxNoteSchema.ts
import { z as z17 } from "zod";

// src/database/modelSchema/TopicSchema.ts
import { z as z15 } from "zod";

// src/database/modelSchema/IpynbSchema.ts
import { z as z14 } from "zod";

// src/database/modelSchema/SubjectSchema.ts
import { z as z11 } from "zod";

// src/database/modelSchema/QAPairSchema.ts
import { z as z3 } from "zod";

// src/database/modelSchema/PracticeExamSchema.ts
import { z as z2 } from "zod";
var PracticeExamSchema = z2.object({
  id: z2.number().int(),
  correctCount: z2.number().int(),
  inCorrectCount: z2.number().int(),
  timeLimitInSeconds: z2.number().int(),
  timeCompletedInSeconds: z2.number().int(),
  date: z2.coerce.date()
});
var PracticeExamPartialSchema = PracticeExamSchema.partial();
var PracticeExamWithRelationsSchema = PracticeExamSchema.merge(z2.object({
  topics: z2.lazy(() => TopicWithRelationsSchema).array(),
  tags: z2.lazy(() => TagWithRelationsSchema).array(),
  subjects: z2.lazy(() => SubjectWithRelationsSchema).array(),
  questions: z2.lazy(() => QAPairWithRelationsSchema).array()
}));
var PracticeExamPartialWithRelationsSchema = PracticeExamPartialSchema.merge(z2.object({
  topics: z2.lazy(() => TopicPartialWithRelationsSchema).array(),
  tags: z2.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: z2.lazy(() => SubjectPartialWithRelationsSchema).array(),
  questions: z2.lazy(() => QAPairPartialWithRelationsSchema).array()
})).partial();
var PracticeExamWithPartialRelationsSchema = PracticeExamSchema.merge(z2.object({
  topics: z2.lazy(() => TopicPartialWithRelationsSchema).array(),
  tags: z2.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: z2.lazy(() => SubjectPartialWithRelationsSchema).array(),
  questions: z2.lazy(() => QAPairPartialWithRelationsSchema).array()
}).partial());
var PracticeExamSchema_default = PracticeExamSchema;

// src/database/modelSchema/QAPairSchema.ts
var QAPairSchema = z3.object({
  id: z3.string(),
  question: z3.string(),
  answer: z3.string(),
  description: z3.string().nullable(),
  secondaryLabel: z3.string().nullable(),
  correctCount: z3.number().int(),
  inCorrectCount: z3.number().int()
});
var QAPairPartialSchema = QAPairSchema.partial();
var QAPairWithRelationsSchema = QAPairSchema.merge(z3.object({
  tags: z3.lazy(() => TagWithRelationsSchema).array(),
  topics: z3.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z3.lazy(() => SubjectWithRelationsSchema).array(),
  practiceExam: z3.lazy(() => PracticeExamWithRelationsSchema).array()
}));
var QAPairPartialWithRelationsSchema = QAPairPartialSchema.merge(z3.object({
  tags: z3.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z3.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z3.lazy(() => SubjectPartialWithRelationsSchema).array(),
  practiceExam: z3.lazy(() => PracticeExamPartialWithRelationsSchema).array()
})).partial();
var QAPairWithPartialRelationsSchema = QAPairSchema.merge(z3.object({
  tags: z3.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z3.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z3.lazy(() => SubjectPartialWithRelationsSchema).array(),
  practiceExam: z3.lazy(() => PracticeExamPartialWithRelationsSchema).array()
}).partial());
var QAPairSchema_default = QAPairSchema;

// src/database/modelSchema/KanbanSchema.ts
import { z as z6 } from "zod";

// src/database/modelSchema/KanBanListSchema.ts
import { z as z5 } from "zod";

// src/database/modelSchema/KanBanCardSchema.ts
import { z as z4 } from "zod";
var KanBanCardSchema = z4.object({
  id: z4.number().int(),
  listId: z4.number().int().nullable(),
  indexWithinList: z4.number().int(),
  label: z4.string().nullable(),
  details: z4.string().nullable()
});
var KanBanCardPartialSchema = KanBanCardSchema.partial();
var KanBanCardWithRelationsSchema = KanBanCardSchema.merge(z4.object({
  KanBanList: z4.lazy(() => KanBanListWithRelationsSchema).nullable()
}));
var KanBanCardPartialWithRelationsSchema = KanBanCardPartialSchema.merge(z4.object({
  KanBanList: z4.lazy(() => KanBanListPartialWithRelationsSchema).nullable()
})).partial();
var KanBanCardWithPartialRelationsSchema = KanBanCardSchema.merge(z4.object({
  KanBanList: z4.lazy(() => KanBanListPartialWithRelationsSchema).nullable()
}).partial());
var KanBanCardSchema_default = KanBanCardSchema;

// src/database/modelSchema/KanBanListSchema.ts
var KanBanListSchema = z5.object({
  id: z5.number().int(),
  indexWithinBoard: z5.number().int(),
  title: z5.string().nullable(),
  boardId: z5.number().int().nullable()
});
var KanBanListPartialSchema = KanBanListSchema.partial();
var KanBanListWithRelationsSchema = KanBanListSchema.merge(z5.object({
  cards: z5.lazy(() => KanBanCardWithRelationsSchema).array(),
  Kanban: z5.lazy(() => KanbanWithRelationsSchema).nullable()
}));
var KanBanListPartialWithRelationsSchema = KanBanListPartialSchema.merge(z5.object({
  cards: z5.lazy(() => KanBanCardPartialWithRelationsSchema).array(),
  Kanban: z5.lazy(() => KanbanPartialWithRelationsSchema).nullable()
})).partial();
var KanBanListWithPartialRelationsSchema = KanBanListSchema.merge(z5.object({
  cards: z5.lazy(() => KanBanCardPartialWithRelationsSchema).array(),
  Kanban: z5.lazy(() => KanbanPartialWithRelationsSchema).nullable()
}).partial());
var KanBanListSchema_default = KanBanListSchema;

// src/database/modelSchema/KanbanSchema.ts
var KanbanSchema = z6.object({
  id: z6.number().int(),
  title: z6.string(),
  createdAt: z6.coerce.date(),
  lastUpdate: z6.coerce.date()
});
var KanbanPartialSchema = KanbanSchema.partial();
var KanbanWithRelationsSchema = KanbanSchema.merge(z6.object({
  lists: z6.lazy(() => KanBanListWithRelationsSchema).array(),
  tags: z6.lazy(() => TagWithRelationsSchema).array(),
  subjects: z6.lazy(() => SubjectWithRelationsSchema).array(),
  topics: z6.lazy(() => TopicWithRelationsSchema).array()
}));
var KanbanPartialWithRelationsSchema = KanbanPartialSchema.merge(z6.object({
  lists: z6.lazy(() => KanBanListPartialWithRelationsSchema).array(),
  tags: z6.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: z6.lazy(() => SubjectPartialWithRelationsSchema).array(),
  topics: z6.lazy(() => TopicPartialWithRelationsSchema).array()
})).partial();
var KanbanWithPartialRelationsSchema = KanbanSchema.merge(z6.object({
  lists: z6.lazy(() => KanBanListPartialWithRelationsSchema).array(),
  tags: z6.lazy(() => TagPartialWithRelationsSchema).array(),
  subjects: z6.lazy(() => SubjectPartialWithRelationsSchema).array(),
  topics: z6.lazy(() => TopicPartialWithRelationsSchema).array()
}).partial());
var KanbanSchema_default = KanbanSchema;

// src/database/modelSchema/ToDoListSchema.ts
import { z as z8 } from "zod";

// src/database/modelSchema/ToDoSchema.ts
import { z as z7 } from "zod";
var ToDoSchema = z7.object({
  category: TaskCategorySchema.nullable(),
  id: z7.number().int(),
  createdAt: z7.coerce.date(),
  task: z7.string(),
  dueAt: z7.coerce.date().nullable(),
  details: z7.string().nullable(),
  parentId: z7.number().int().nullable(),
  bookmarked: z7.boolean(),
  status: z7.string(),
  priority: z7.number().int(),
  toDoListId: z7.number().int().nullable(),
  completedOn: z7.coerce.date().nullable()
});
var ToDoPartialSchema = ToDoSchema.partial();
var ToDoWithRelationsSchema = ToDoSchema.merge(z7.object({
  associatedNotes: z7.lazy(() => MdxNoteWithRelationsSchema).array(),
  tags: z7.lazy(() => TagWithRelationsSchema).array(),
  topics: z7.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z7.lazy(() => SubjectWithRelationsSchema).array(),
  parent: z7.lazy(() => ToDoWithRelationsSchema).nullable(),
  child: z7.lazy(() => ToDoWithRelationsSchema).array(),
  ToDoList: z7.lazy(() => ToDoListWithRelationsSchema).nullable()
}));
var ToDoPartialWithRelationsSchema = ToDoPartialSchema.merge(z7.object({
  associatedNotes: z7.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  tags: z7.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z7.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z7.lazy(() => SubjectPartialWithRelationsSchema).array(),
  parent: z7.lazy(() => ToDoPartialWithRelationsSchema).nullable(),
  child: z7.lazy(() => ToDoPartialWithRelationsSchema).array(),
  ToDoList: z7.lazy(() => ToDoListPartialWithRelationsSchema).nullable()
})).partial();
var ToDoWithPartialRelationsSchema = ToDoSchema.merge(z7.object({
  associatedNotes: z7.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  tags: z7.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z7.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z7.lazy(() => SubjectPartialWithRelationsSchema).array(),
  parent: z7.lazy(() => ToDoPartialWithRelationsSchema).nullable(),
  child: z7.lazy(() => ToDoPartialWithRelationsSchema).array(),
  ToDoList: z7.lazy(() => ToDoListPartialWithRelationsSchema).nullable()
}).partial());
var ToDoSchema_default = ToDoSchema;

// src/database/modelSchema/ToDoListSchema.ts
var ToDoListSchema = z8.object({
  id: z8.number().int(),
  label: z8.string(),
  createdAt: z8.coerce.date(),
  lastUpdate: z8.coerce.date(),
  lastAccess: z8.coerce.date()
});
var ToDoListPartialSchema = ToDoListSchema.partial();
var ToDoListWithRelationsSchema = ToDoListSchema.merge(z8.object({
  tasks: z8.lazy(() => ToDoWithRelationsSchema).array(),
  tags: z8.lazy(() => TagWithRelationsSchema).array(),
  topics: z8.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z8.lazy(() => SubjectWithRelationsSchema).array()
}));
var ToDoListPartialWithRelationsSchema = ToDoListPartialSchema.merge(z8.object({
  tasks: z8.lazy(() => ToDoPartialWithRelationsSchema).array(),
  tags: z8.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z8.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z8.lazy(() => SubjectPartialWithRelationsSchema).array()
})).partial();
var ToDoListWithPartialRelationsSchema = ToDoListSchema.merge(z8.object({
  tasks: z8.lazy(() => ToDoPartialWithRelationsSchema).array(),
  tags: z8.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z8.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z8.lazy(() => SubjectPartialWithRelationsSchema).array()
}).partial());
var ToDoListSchema_default = ToDoListSchema;

// src/database/modelSchema/EquationSchema.ts
import { z as z10 } from "zod";

// src/database/modelSchema/RelatedValuesSchema.ts
import { z as z9 } from "zod";
var RelatedValuesSchema = z9.object({
  id: z9.number().int(),
  input: JsonValueSchema,
  output: z9.number(),
  equationId: z9.number().int().array()
});
var RelatedValuesPartialSchema = RelatedValuesSchema.partial();
var RelatedValuesWithRelationsSchema = RelatedValuesSchema.merge(z9.object({
  equations: z9.lazy(() => EquationWithRelationsSchema).array()
}));
var RelatedValuesPartialWithRelationsSchema = RelatedValuesPartialSchema.merge(z9.object({
  equations: z9.lazy(() => EquationPartialWithRelationsSchema).array()
})).partial();
var RelatedValuesWithPartialRelationsSchema = RelatedValuesSchema.merge(z9.object({
  equations: z9.lazy(() => EquationPartialWithRelationsSchema).array()
}).partial());
var RelatedValuesSchema_default = RelatedValuesSchema;

// src/database/modelSchema/EquationSchema.ts
var EquationSchema = z10.object({
  id: z10.number().int(),
  equationId: z10.string().nullable(),
  title: z10.string(),
  desc: z10.string().nullable(),
  content: z10.string(),
  asPython: z10.string().nullable(),
  variableLegend: JsonValueSchema,
  variables: z10.string().array(),
  keywords: z10.string().array(),
  createdAt: z10.coerce.date(),
  lastAccess: z10.coerce.date()
});
var EquationPartialSchema = EquationSchema.partial();
var EquationWithRelationsSchema = EquationSchema.merge(z10.object({
  relatedValues: z10.lazy(() => RelatedValuesWithRelationsSchema).array(),
  tags: z10.lazy(() => TagWithRelationsSchema).array(),
  topics: z10.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z10.lazy(() => SubjectWithRelationsSchema).array(),
  mdxNotes: z10.lazy(() => MdxNoteWithRelationsSchema).array()
}));
var EquationPartialWithRelationsSchema = EquationPartialSchema.merge(z10.object({
  relatedValues: z10.lazy(() => RelatedValuesPartialWithRelationsSchema).array(),
  tags: z10.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z10.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z10.lazy(() => SubjectPartialWithRelationsSchema).array(),
  mdxNotes: z10.lazy(() => MdxNotePartialWithRelationsSchema).array()
})).partial();
var EquationWithPartialRelationsSchema = EquationSchema.merge(z10.object({
  relatedValues: z10.lazy(() => RelatedValuesPartialWithRelationsSchema).array(),
  tags: z10.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z10.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z10.lazy(() => SubjectPartialWithRelationsSchema).array(),
  mdxNotes: z10.lazy(() => MdxNotePartialWithRelationsSchema).array()
}).partial());
var EquationSchema_default = EquationSchema;

// src/database/modelSchema/SubjectSchema.ts
var SubjectSchema = z11.object({
  value: z11.string(),
  kanbanId: z11.number().int().nullable(),
  createdAt: z11.coerce.date(),
  lastAccess: z11.coerce.date()
});
var SubjectPartialSchema = SubjectSchema.partial();
var SubjectWithRelationsSchema = SubjectSchema.merge(z11.object({
  MdxNotes: z11.lazy(() => MdxNoteWithRelationsSchema).array(),
  IpynbNotes: z11.lazy(() => IpynbWithRelationsSchema).array(),
  QaPair: z11.lazy(() => QAPairWithRelationsSchema).array(),
  practiceExam: z11.lazy(() => PracticeExamWithRelationsSchema).array(),
  Kanban: z11.lazy(() => KanbanWithRelationsSchema).nullable(),
  todoList: z11.lazy(() => ToDoListWithRelationsSchema).array(),
  toDo: z11.lazy(() => ToDoWithRelationsSchema).array(),
  bibEntries: z11.lazy(() => BibEntryWithRelationsSchema).array(),
  equations: z11.lazy(() => EquationWithRelationsSchema).array()
}));
var SubjectPartialWithRelationsSchema = SubjectPartialSchema.merge(z11.object({
  MdxNotes: z11.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  IpynbNotes: z11.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QaPair: z11.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z11.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  Kanban: z11.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z11.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  toDo: z11.lazy(() => ToDoPartialWithRelationsSchema).array(),
  bibEntries: z11.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: z11.lazy(() => EquationPartialWithRelationsSchema).array()
})).partial();
var SubjectWithPartialRelationsSchema = SubjectSchema.merge(z11.object({
  MdxNotes: z11.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  IpynbNotes: z11.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QaPair: z11.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z11.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  Kanban: z11.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z11.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  toDo: z11.lazy(() => ToDoPartialWithRelationsSchema).array(),
  bibEntries: z11.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: z11.lazy(() => EquationPartialWithRelationsSchema).array()
}).partial());
var SubjectSchema_default = SubjectSchema;

// src/database/modelSchema/SequentialNoteListSchema.ts
import { z as z12 } from "zod";
var SequentialNoteListSchema = z12.object({
  sequentialKey: z12.string()
});
var SequentialNoteListPartialSchema = SequentialNoteListSchema.partial();
var SequentialNoteListWithRelationsSchema = SequentialNoteListSchema.merge(z12.object({
  MdxNote: z12.lazy(() => MdxNoteWithRelationsSchema).array(),
  Ipynb: z12.lazy(() => IpynbWithRelationsSchema).array()
}));
var SequentialNoteListPartialWithRelationsSchema = SequentialNoteListPartialSchema.merge(z12.object({
  MdxNote: z12.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  Ipynb: z12.lazy(() => IpynbPartialWithRelationsSchema).array()
})).partial();
var SequentialNoteListWithPartialRelationsSchema = SequentialNoteListSchema.merge(z12.object({
  MdxNote: z12.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  Ipynb: z12.lazy(() => IpynbPartialWithRelationsSchema).array()
}).partial());
var SequentialNoteListSchema_default = SequentialNoteListSchema;

// src/database/modelSchema/ReadingListSchema.ts
import { z as z13 } from "zod";
var ReadingListSchema = z13.object({
  name: z13.string(),
  description: z13.string().nullable(),
  createdAt: z13.coerce.date(),
  lastUpdate: z13.coerce.date()
});
var ReadingListPartialSchema = ReadingListSchema.partial();
var ReadingListWithRelationsSchema = ReadingListSchema.merge(z13.object({
  bibEntries: z13.lazy(() => BibEntryWithRelationsSchema).array(),
  mdxNotes: z13.lazy(() => MdxNoteWithRelationsSchema).array(),
  ipynbNotes: z13.lazy(() => IpynbWithRelationsSchema).array()
}));
var ReadingListPartialWithRelationsSchema = ReadingListPartialSchema.merge(z13.object({
  bibEntries: z13.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  mdxNotes: z13.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: z13.lazy(() => IpynbPartialWithRelationsSchema).array()
})).partial();
var ReadingListWithPartialRelationsSchema = ReadingListSchema.merge(z13.object({
  bibEntries: z13.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  mdxNotes: z13.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: z13.lazy(() => IpynbPartialWithRelationsSchema).array()
}).partial());
var ReadingListSchema_default = ReadingListSchema;

// src/database/modelSchema/IpynbSchema.ts
var IpynbSchema = z14.object({
  id: z14.number().int(),
  rootRelativePath: z14.string(),
  isProtected: z14.boolean().nullable(),
  title: z14.string(),
  latexTitle: z14.string().nullable(),
  citationsListOrder: z14.string().array(),
  importantValues: z14.number().array(),
  href: z14.string(),
  outgoingQuickLinks: z14.string().array(),
  raw: z14.instanceof(Buffer),
  sequentialKey: z14.string().nullable(),
  sequentialIndex: z14.number().int().nullable(),
  bookmarked: z14.boolean(),
  firstSync: z14.coerce.date(),
  lastSync: z14.coerce.date(),
  lastAccess: z14.coerce.date()
});
var IpynbPartialSchema = IpynbSchema.partial();
var IpynbWithRelationsSchema = IpynbSchema.merge(z14.object({
  tags: z14.lazy(() => TagWithRelationsSchema).array(),
  topics: z14.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z14.lazy(() => SubjectWithRelationsSchema).array(),
  citations: z14.lazy(() => BibEntryWithRelationsSchema).array(),
  sequentialList: z14.lazy(() => SequentialNoteListWithRelationsSchema).nullable(),
  readingList: z14.lazy(() => ReadingListWithRelationsSchema).array()
}));
var IpynbPartialWithRelationsSchema = IpynbPartialSchema.merge(z14.object({
  tags: z14.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z14.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z14.lazy(() => SubjectPartialWithRelationsSchema).array(),
  citations: z14.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: z14.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  readingList: z14.lazy(() => ReadingListPartialWithRelationsSchema).array()
})).partial();
var IpynbWithPartialRelationsSchema = IpynbSchema.merge(z14.object({
  tags: z14.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z14.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z14.lazy(() => SubjectPartialWithRelationsSchema).array(),
  citations: z14.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: z14.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  readingList: z14.lazy(() => ReadingListPartialWithRelationsSchema).array()
}).partial());
var IpynbSchema_default = IpynbSchema;

// src/database/modelSchema/TopicSchema.ts
var TopicSchema = z15.object({
  value: z15.string(),
  kanbanId: z15.number().int().nullable(),
  createdAt: z15.coerce.date(),
  lastAccess: z15.coerce.date()
});
var TopicPartialSchema = TopicSchema.partial();
var TopicWithRelationsSchema = TopicSchema.merge(z15.object({
  MdxNotes: z15.lazy(() => MdxNoteWithRelationsSchema).array(),
  ipynbNotes: z15.lazy(() => IpynbWithRelationsSchema).array(),
  QAPair: z15.lazy(() => QAPairWithRelationsSchema).array(),
  practiceExam: z15.lazy(() => PracticeExamWithRelationsSchema).array(),
  toDo: z15.lazy(() => ToDoWithRelationsSchema).array(),
  Kanban: z15.lazy(() => KanbanWithRelationsSchema).nullable(),
  todoList: z15.lazy(() => ToDoListWithRelationsSchema).array(),
  bibEntries: z15.lazy(() => BibEntryWithRelationsSchema).array(),
  equations: z15.lazy(() => EquationWithRelationsSchema).array()
}));
var TopicPartialWithRelationsSchema = TopicPartialSchema.merge(z15.object({
  MdxNotes: z15.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: z15.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: z15.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z15.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  toDo: z15.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: z15.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z15.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  bibEntries: z15.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: z15.lazy(() => EquationPartialWithRelationsSchema).array()
})).partial();
var TopicWithPartialRelationsSchema = TopicSchema.merge(z15.object({
  MdxNotes: z15.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: z15.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: z15.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z15.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  toDo: z15.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: z15.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z15.lazy(() => ToDoListPartialWithRelationsSchema).array(),
  bibEntries: z15.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  equations: z15.lazy(() => EquationPartialWithRelationsSchema).array()
}).partial());
var TopicSchema_default = TopicSchema;

// src/database/modelSchema/DefinitionSchema.ts
import { z as z16 } from "zod";
var DefinitionSchema = z16.object({
  id: z16.string(),
  label: z16.string().nullable(),
  content: z16.string().nullable(),
  alphabeticalLabel: z16.string().nullable(),
  mdxNoteId: z16.number().int().nullable(),
  createdAt: z16.coerce.date(),
  lastAccess: z16.coerce.date()
});
var DefinitionPartialSchema = DefinitionSchema.partial();
var DefinitionWithRelationsSchema = DefinitionSchema.merge(z16.object({
  mdxNote: z16.lazy(() => MdxNoteWithRelationsSchema).nullable()
}));
var DefinitionPartialWithRelationsSchema = DefinitionPartialSchema.merge(z16.object({
  mdxNote: z16.lazy(() => MdxNotePartialWithRelationsSchema).nullable()
})).partial();
var DefinitionWithPartialRelationsSchema = DefinitionSchema.merge(z16.object({
  mdxNote: z16.lazy(() => MdxNotePartialWithRelationsSchema).nullable()
}).partial());
var DefinitionSchema_default = DefinitionSchema;

// src/database/modelSchema/MdxNoteSchema.ts
var MdxNoteSchema = z17.object({
  id: z17.number().int(),
  isProtected: z17.boolean().nullable(),
  dietSummaryKey: z17.string().nullable(),
  title: z17.string(),
  latexTitle: z17.string().nullable(),
  rootRelativePath: z17.string(),
  noteType: z17.string(),
  content: z17.string(),
  formatted: z17.string().nullable(),
  summary: z17.string().nullable(),
  citationsListOrder: z17.string().array(),
  importantValues: z17.number().array(),
  imageSrc: z17.string().nullable(),
  href: z17.string(),
  sequentialKey: z17.string().nullable(),
  sequentialIndex: z17.number().nullable(),
  floatImages: z17.boolean(),
  remoteUrl: z17.string().nullable(),
  trackRemote: z17.boolean(),
  outgoingQuickLinks: z17.string().array(),
  quickLink: z17.string().nullable(),
  bookmarked: z17.boolean(),
  firstSync: z17.coerce.date(),
  lastSync: z17.coerce.date(),
  lastAccess: z17.coerce.date()
});
var MdxNotePartialSchema = MdxNoteSchema.partial();
var MdxNoteWithRelationsSchema = MdxNoteSchema.merge(z17.object({
  topics: z17.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z17.lazy(() => SubjectWithRelationsSchema).array(),
  tags: z17.lazy(() => TagWithRelationsSchema).array(),
  citations: z17.lazy(() => BibEntryWithRelationsSchema).array(),
  sequentialList: z17.lazy(() => SequentialNoteListWithRelationsSchema).nullable(),
  ReadingList: z17.lazy(() => ReadingListWithRelationsSchema).array(),
  equations: z17.lazy(() => EquationWithRelationsSchema).array(),
  definitions: z17.lazy(() => DefinitionWithRelationsSchema).array(),
  toDo: z17.lazy(() => ToDoWithRelationsSchema).array()
}));
var MdxNotePartialWithRelationsSchema = MdxNotePartialSchema.merge(z17.object({
  topics: z17.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z17.lazy(() => SubjectPartialWithRelationsSchema).array(),
  tags: z17.lazy(() => TagPartialWithRelationsSchema).array(),
  citations: z17.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: z17.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  ReadingList: z17.lazy(() => ReadingListPartialWithRelationsSchema).array(),
  equations: z17.lazy(() => EquationPartialWithRelationsSchema).array(),
  definitions: z17.lazy(() => DefinitionPartialWithRelationsSchema).array(),
  toDo: z17.lazy(() => ToDoPartialWithRelationsSchema).array()
})).partial();
var MdxNoteWithPartialRelationsSchema = MdxNoteSchema.merge(z17.object({
  topics: z17.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z17.lazy(() => SubjectPartialWithRelationsSchema).array(),
  tags: z17.lazy(() => TagPartialWithRelationsSchema).array(),
  citations: z17.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  sequentialList: z17.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
  ReadingList: z17.lazy(() => ReadingListPartialWithRelationsSchema).array(),
  equations: z17.lazy(() => EquationPartialWithRelationsSchema).array(),
  definitions: z17.lazy(() => DefinitionPartialWithRelationsSchema).array(),
  toDo: z17.lazy(() => ToDoPartialWithRelationsSchema).array()
}).partial());
var MdxNoteSchema_default = MdxNoteSchema;

// src/database/modelSchema/TagSchema.ts
var TagSchema = z18.object({
  value: z18.string(),
  kanbanId: z18.number().int().nullable(),
  createdAt: z18.coerce.date(),
  lastAccess: z18.coerce.date()
});
var TagPartialSchema = TagSchema.partial();
var TagWithRelationsSchema = TagSchema.merge(z18.object({
  MdxNotes: z18.lazy(() => MdxNoteWithRelationsSchema).array(),
  bibEntries: z18.lazy(() => BibEntryWithRelationsSchema).array(),
  ipynbNotes: z18.lazy(() => IpynbWithRelationsSchema).array(),
  QAPair: z18.lazy(() => QAPairWithRelationsSchema).array(),
  practiceExam: z18.lazy(() => PracticeExamWithRelationsSchema).array(),
  equations: z18.lazy(() => EquationWithRelationsSchema).array(),
  toDo: z18.lazy(() => ToDoWithRelationsSchema).array(),
  Kanban: z18.lazy(() => KanbanWithRelationsSchema).nullable(),
  todoList: z18.lazy(() => ToDoListWithRelationsSchema).array()
}));
var TagPartialWithRelationsSchema = TagPartialSchema.merge(z18.object({
  MdxNotes: z18.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  bibEntries: z18.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  ipynbNotes: z18.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: z18.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z18.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  equations: z18.lazy(() => EquationPartialWithRelationsSchema).array(),
  toDo: z18.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: z18.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z18.lazy(() => ToDoListPartialWithRelationsSchema).array()
})).partial();
var TagWithPartialRelationsSchema = TagSchema.merge(z18.object({
  MdxNotes: z18.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  bibEntries: z18.lazy(() => BibEntryPartialWithRelationsSchema).array(),
  ipynbNotes: z18.lazy(() => IpynbPartialWithRelationsSchema).array(),
  QAPair: z18.lazy(() => QAPairPartialWithRelationsSchema).array(),
  practiceExam: z18.lazy(() => PracticeExamPartialWithRelationsSchema).array(),
  equations: z18.lazy(() => EquationPartialWithRelationsSchema).array(),
  toDo: z18.lazy(() => ToDoPartialWithRelationsSchema).array(),
  Kanban: z18.lazy(() => KanbanPartialWithRelationsSchema).nullable(),
  todoList: z18.lazy(() => ToDoListPartialWithRelationsSchema).array()
}).partial());
var TagSchema_default = TagSchema;

// src/database/modelSchema/BibEntrySchema.ts
var BibEntrySchema = z19.object({
  id: z19.string(),
  BibId: z19.number().int().nullable(),
  OwnWork: z19.boolean(),
  ColleaguesWork: z19.boolean(),
  read: z19.boolean(),
  htmlCitation: z19.string().nullable(),
  PdfPath: z19.string().nullable(),
  address: z19.string().nullable(),
  annote: z19.string().nullable(),
  author: z19.string().nullable(),
  booktitle: z19.string().nullable(),
  chapter: z19.string().nullable(),
  crossref: z19.string().nullable(),
  doi: z19.string().nullable(),
  edition: z19.string().nullable(),
  editor: z19.string().nullable(),
  email: z19.string().nullable(),
  howpublished: z19.string().nullable(),
  institution: z19.string().nullable(),
  journal: z19.string().nullable(),
  month: z19.string().nullable(),
  note: z19.string().nullable(),
  number: z19.string().nullable(),
  organization: z19.string().nullable(),
  pages: z19.string().nullable(),
  publisher: z19.string().nullable(),
  school: z19.string().nullable(),
  series: z19.string().nullable(),
  title: z19.string().nullable(),
  volume: z19.string().nullable(),
  type: z19.string().nullable(),
  year: z19.string().nullable(),
  numpages: z19.string().nullable(),
  url: z19.string().nullable(),
  issue: z19.string().nullable(),
  issn: z19.string().nullable(),
  abstract: z19.string().nullable(),
  urldate: z19.string().nullable(),
  keywords: z19.string().nullable(),
  copyright: z19.string().nullable(),
  createdAt: z19.coerce.date(),
  lastAccess: z19.coerce.date()
});
var BibEntryPartialSchema = BibEntrySchema.partial();
var BibEntryWithRelationsSchema = BibEntrySchema.merge(z19.object({
  Bib: z19.lazy(() => BibWithRelationsSchema).nullable(),
  citationGroups: z19.lazy(() => CitationsGroupWithRelationsSchema).array(),
  tags: z19.lazy(() => TagWithRelationsSchema).array(),
  topics: z19.lazy(() => TopicWithRelationsSchema).array(),
  subjects: z19.lazy(() => SubjectWithRelationsSchema).array(),
  MdxNotes: z19.lazy(() => MdxNoteWithRelationsSchema).array(),
  ipynbNotes: z19.lazy(() => IpynbWithRelationsSchema).array(),
  readingList: z19.lazy(() => ReadingListWithRelationsSchema).array()
}));
var BibEntryPartialWithRelationsSchema = BibEntryPartialSchema.merge(z19.object({
  Bib: z19.lazy(() => BibPartialWithRelationsSchema).nullable(),
  citationGroups: z19.lazy(() => CitationsGroupPartialWithRelationsSchema).array(),
  tags: z19.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z19.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z19.lazy(() => SubjectPartialWithRelationsSchema).array(),
  MdxNotes: z19.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: z19.lazy(() => IpynbPartialWithRelationsSchema).array(),
  readingList: z19.lazy(() => ReadingListPartialWithRelationsSchema).array()
})).partial();
var BibEntryWithPartialRelationsSchema = BibEntrySchema.merge(z19.object({
  Bib: z19.lazy(() => BibPartialWithRelationsSchema).nullable(),
  citationGroups: z19.lazy(() => CitationsGroupPartialWithRelationsSchema).array(),
  tags: z19.lazy(() => TagPartialWithRelationsSchema).array(),
  topics: z19.lazy(() => TopicPartialWithRelationsSchema).array(),
  subjects: z19.lazy(() => SubjectPartialWithRelationsSchema).array(),
  MdxNotes: z19.lazy(() => MdxNotePartialWithRelationsSchema).array(),
  ipynbNotes: z19.lazy(() => IpynbPartialWithRelationsSchema).array(),
  readingList: z19.lazy(() => ReadingListPartialWithRelationsSchema).array()
}).partial());
var BibEntrySchema_default = BibEntrySchema;

// src/database/modelSchema/BibSchema.ts
var BibSchema = z20.object({
  id: z20.number().int(),
  filename: z20.string(),
  firstSync: z20.coerce.date(),
  lastSync: z20.coerce.date()
});
var BibPartialSchema = BibSchema.partial();
var BibWithRelationsSchema = BibSchema.merge(z20.object({
  entries: z20.lazy(() => BibEntryWithRelationsSchema).array()
}));
var BibPartialWithRelationsSchema = BibPartialSchema.merge(z20.object({
  entries: z20.lazy(() => BibEntryPartialWithRelationsSchema).array()
})).partial();
var BibWithPartialRelationsSchema = BibSchema.merge(z20.object({
  entries: z20.lazy(() => BibEntryPartialWithRelationsSchema).array()
}).partial());
var BibSchema_default = BibSchema;

export {
  BibSchema,
  BibPartialSchema,
  BibWithRelationsSchema,
  BibPartialWithRelationsSchema,
  BibWithPartialRelationsSchema,
  BibSchema_default,
  CitationsGroupSchema,
  CitationsGroupPartialSchema,
  CitationsGroupWithRelationsSchema,
  CitationsGroupPartialWithRelationsSchema,
  CitationsGroupWithPartialRelationsSchema,
  CitationsGroupSchema_default,
  ReadingListSchema,
  ReadingListPartialSchema,
  ReadingListWithRelationsSchema,
  ReadingListPartialWithRelationsSchema,
  ReadingListWithPartialRelationsSchema,
  ReadingListSchema_default,
  BibEntrySchema,
  BibEntryPartialSchema,
  BibEntryWithRelationsSchema,
  BibEntryPartialWithRelationsSchema,
  BibEntryWithPartialRelationsSchema,
  BibEntrySchema_default,
  PracticeExamSchema,
  PracticeExamPartialSchema,
  PracticeExamWithRelationsSchema,
  PracticeExamPartialWithRelationsSchema,
  PracticeExamWithPartialRelationsSchema,
  PracticeExamSchema_default,
  QAPairSchema,
  QAPairPartialSchema,
  QAPairWithRelationsSchema,
  QAPairPartialWithRelationsSchema,
  QAPairWithPartialRelationsSchema,
  QAPairSchema_default,
  RelatedValuesSchema,
  RelatedValuesPartialSchema,
  RelatedValuesWithRelationsSchema,
  RelatedValuesPartialWithRelationsSchema,
  RelatedValuesWithPartialRelationsSchema,
  RelatedValuesSchema_default,
  EquationSchema,
  EquationPartialSchema,
  EquationWithRelationsSchema,
  EquationPartialWithRelationsSchema,
  EquationWithPartialRelationsSchema,
  EquationSchema_default,
  ToDoListSchema,
  ToDoListPartialSchema,
  ToDoListWithRelationsSchema,
  ToDoListPartialWithRelationsSchema,
  ToDoListWithPartialRelationsSchema,
  ToDoListSchema_default,
  ToDoSchema,
  ToDoPartialSchema,
  ToDoWithRelationsSchema,
  ToDoPartialWithRelationsSchema,
  ToDoWithPartialRelationsSchema,
  ToDoSchema_default,
  KanBanCardSchema,
  KanBanCardPartialSchema,
  KanBanCardWithRelationsSchema,
  KanBanCardPartialWithRelationsSchema,
  KanBanCardWithPartialRelationsSchema,
  KanBanCardSchema_default,
  KanBanListSchema,
  KanBanListPartialSchema,
  KanBanListWithRelationsSchema,
  KanBanListPartialWithRelationsSchema,
  KanBanListWithPartialRelationsSchema,
  KanBanListSchema_default,
  KanbanSchema,
  KanbanPartialSchema,
  KanbanWithRelationsSchema,
  KanbanPartialWithRelationsSchema,
  KanbanWithPartialRelationsSchema,
  KanbanSchema_default,
  TagSchema,
  TagPartialSchema,
  TagWithRelationsSchema,
  TagPartialWithRelationsSchema,
  TagWithPartialRelationsSchema,
  TagSchema_default,
  SequentialNoteListSchema,
  SequentialNoteListPartialSchema,
  SequentialNoteListWithRelationsSchema,
  SequentialNoteListPartialWithRelationsSchema,
  SequentialNoteListWithPartialRelationsSchema,
  SequentialNoteListSchema_default,
  IpynbSchema,
  IpynbPartialSchema,
  IpynbWithRelationsSchema,
  IpynbPartialWithRelationsSchema,
  IpynbWithPartialRelationsSchema,
  IpynbSchema_default,
  TopicSchema,
  TopicPartialSchema,
  TopicWithRelationsSchema,
  TopicPartialWithRelationsSchema,
  TopicWithPartialRelationsSchema,
  TopicSchema_default,
  DefinitionSchema,
  DefinitionPartialSchema,
  DefinitionWithRelationsSchema,
  DefinitionPartialWithRelationsSchema,
  DefinitionWithPartialRelationsSchema,
  DefinitionSchema_default,
  MdxNoteSchema,
  MdxNotePartialSchema,
  MdxNoteWithRelationsSchema,
  MdxNotePartialWithRelationsSchema,
  MdxNoteWithPartialRelationsSchema,
  MdxNoteSchema_default,
  SubjectSchema,
  SubjectPartialSchema,
  SubjectWithRelationsSchema,
  SubjectPartialWithRelationsSchema,
  SubjectWithPartialRelationsSchema,
  SubjectSchema_default
};
//# sourceMappingURL=chunk-VPR5VB7J.js.map