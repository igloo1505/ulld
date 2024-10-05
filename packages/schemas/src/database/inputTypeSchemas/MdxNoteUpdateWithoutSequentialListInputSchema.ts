import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableBoolFieldUpdateOperationsInputSchema } from './NullableBoolFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { MdxNoteUpdatecitationsListOrderInputSchema } from './MdxNoteUpdatecitationsListOrderInputSchema';
import { MdxNoteUpdateimportantValuesInputSchema } from './MdxNoteUpdateimportantValuesInputSchema';
import { NullableFloatFieldUpdateOperationsInputSchema } from './NullableFloatFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { MdxNoteUpdateoutgoingQuickLinksInputSchema } from './MdxNoteUpdateoutgoingQuickLinksInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TopicUpdateManyWithoutMdxNotesNestedInputSchema } from './TopicUpdateManyWithoutMdxNotesNestedInputSchema';
import { SubjectUpdateManyWithoutMdxNotesNestedInputSchema } from './SubjectUpdateManyWithoutMdxNotesNestedInputSchema';
import { TagUpdateManyWithoutMdxNotesNestedInputSchema } from './TagUpdateManyWithoutMdxNotesNestedInputSchema';
import { BibEntryUpdateManyWithoutMdxNotesNestedInputSchema } from './BibEntryUpdateManyWithoutMdxNotesNestedInputSchema';
import { ReadingListUpdateManyWithoutMdxNotesNestedInputSchema } from './ReadingListUpdateManyWithoutMdxNotesNestedInputSchema';
import { EquationUpdateManyWithoutMdxNotesNestedInputSchema } from './EquationUpdateManyWithoutMdxNotesNestedInputSchema';
import { DefinitionUpdateManyWithoutMdxNoteNestedInputSchema } from './DefinitionUpdateManyWithoutMdxNoteNestedInputSchema';
import { ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema } from './ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema';

export const MdxNoteUpdateWithoutSequentialListInputSchema: z.ZodType<Prisma.MdxNoteUpdateWithoutSequentialListInput> = z.object({
  isProtected: z.union([ z.boolean(),z.lazy(() => NullableBoolFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dietSummaryKey: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  latexTitle: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rootRelativePath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  noteType: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  formatted: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  summary: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  citationsListOrder: z.union([ z.lazy(() => MdxNoteUpdatecitationsListOrderInputSchema),z.string().array() ]).optional(),
  importantValues: z.union([ z.lazy(() => MdxNoteUpdateimportantValuesInputSchema),z.number().array() ]).optional(),
  imageSrc: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  href: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  sequentialIndex: z.union([ z.number(),z.lazy(() => NullableFloatFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  floatImages: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  remoteUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  trackRemote: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  outgoingQuickLinks: z.union([ z.lazy(() => MdxNoteUpdateoutgoingQuickLinksInputSchema),z.string().array() ]).optional(),
  quickLink: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bookmarked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  firstSync: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSync: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  citations: z.lazy(() => BibEntryUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  ReadingList: z.lazy(() => ReadingListUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutMdxNotesNestedInputSchema).optional(),
  definitions: z.lazy(() => DefinitionUpdateManyWithoutMdxNoteNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutAssociatedNotesNestedInputSchema).optional()
}).strict();

export default MdxNoteUpdateWithoutSequentialListInputSchema;
