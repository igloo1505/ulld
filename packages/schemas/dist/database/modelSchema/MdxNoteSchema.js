import { z } from 'zod';
import { TopicWithRelationsSchema } from './TopicSchema.js';
import { TopicPartialWithRelationsSchema } from './TopicSchema.js';
import { SubjectWithRelationsSchema } from './SubjectSchema.js';
import { SubjectPartialWithRelationsSchema } from './SubjectSchema.js';
import { TagWithRelationsSchema } from './TagSchema.js';
import { TagPartialWithRelationsSchema } from './TagSchema.js';
import { BibEntryWithRelationsSchema } from './BibEntrySchema.js';
import { BibEntryPartialWithRelationsSchema } from './BibEntrySchema.js';
import { SequentialNoteListWithRelationsSchema } from './SequentialNoteListSchema.js';
import { SequentialNoteListPartialWithRelationsSchema } from './SequentialNoteListSchema.js';
import { ReadingListWithRelationsSchema } from './ReadingListSchema.js';
import { ReadingListPartialWithRelationsSchema } from './ReadingListSchema.js';
import { EquationWithRelationsSchema } from './EquationSchema.js';
import { EquationPartialWithRelationsSchema } from './EquationSchema.js';
import { DefinitionWithRelationsSchema } from './DefinitionSchema.js';
import { DefinitionPartialWithRelationsSchema } from './DefinitionSchema.js';
import { ToDoWithRelationsSchema } from './ToDoSchema.js';
import { ToDoPartialWithRelationsSchema } from './ToDoSchema.js';
/////////////////////////////////////////
// MDX NOTE SCHEMA
/////////////////////////////////////////
export const MdxNoteSchema = z.object({
    id: z.number().int(),
    isProtected: z.boolean().nullable(),
    dietSummaryKey: z.string().nullable(),
    title: z.string(),
    latexTitle: z.string().nullable(),
    rootRelativePath: z.string(),
    noteType: z.string(),
    content: z.string(),
    formatted: z.string().nullable(),
    summary: z.string().nullable(),
    citationsListOrder: z.string().array(),
    importantValues: z.number().array(),
    imageSrc: z.string().nullable(),
    href: z.string(),
    sequentialKey: z.string().nullable(),
    sequentialIndex: z.number().nullable(),
    floatImages: z.boolean(),
    remoteUrl: z.string().nullable(),
    trackRemote: z.boolean(),
    outgoingQuickLinks: z.string().array(),
    quickLink: z.string().nullable(),
    bookmarked: z.boolean(),
    firstSync: z.coerce.date(),
    lastSync: z.coerce.date(),
    lastAccess: z.coerce.date(),
});
/////////////////////////////////////////
// MDX NOTE PARTIAL SCHEMA
/////////////////////////////////////////
export const MdxNotePartialSchema = MdxNoteSchema.partial();
export const MdxNoteWithRelationsSchema = MdxNoteSchema.merge(z.object({
    topics: z.lazy(() => TopicWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectWithRelationsSchema).array(),
    tags: z.lazy(() => TagWithRelationsSchema).array(),
    citations: z.lazy(() => BibEntryWithRelationsSchema).array(),
    sequentialList: z.lazy(() => SequentialNoteListWithRelationsSchema).nullable(),
    ReadingList: z.lazy(() => ReadingListWithRelationsSchema).array(),
    equations: z.lazy(() => EquationWithRelationsSchema).array(),
    definitions: z.lazy(() => DefinitionWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoWithRelationsSchema).array(),
}));
export const MdxNotePartialWithRelationsSchema = MdxNotePartialSchema.merge(z.object({
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    citations: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    sequentialList: z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
    ReadingList: z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
    equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
    definitions: z.lazy(() => DefinitionPartialWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
})).partial();
export const MdxNoteWithPartialRelationsSchema = MdxNoteSchema.merge(z.object({
    topics: z.lazy(() => TopicPartialWithRelationsSchema).array(),
    subjects: z.lazy(() => SubjectPartialWithRelationsSchema).array(),
    tags: z.lazy(() => TagPartialWithRelationsSchema).array(),
    citations: z.lazy(() => BibEntryPartialWithRelationsSchema).array(),
    sequentialList: z.lazy(() => SequentialNoteListPartialWithRelationsSchema).nullable(),
    ReadingList: z.lazy(() => ReadingListPartialWithRelationsSchema).array(),
    equations: z.lazy(() => EquationPartialWithRelationsSchema).array(),
    definitions: z.lazy(() => DefinitionPartialWithRelationsSchema).array(),
    toDo: z.lazy(() => ToDoPartialWithRelationsSchema).array(),
}).partial());
export default MdxNoteSchema;
