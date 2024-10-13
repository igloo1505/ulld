import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DefinitionCreateWithoutMdxNoteInputSchema } from '../DefinitionCreateWithoutMdxNoteInputSchema.js';
import { DefinitionUncheckedCreateWithoutMdxNoteInputSchema } from '../DefinitionUncheckedCreateWithoutMdxNoteInputSchema.js';
import { DefinitionCreateOrConnectWithoutMdxNoteInputSchema } from '../DefinitionCreateOrConnectWithoutMdxNoteInputSchema.js';
import { DefinitionCreateManyMdxNoteInputEnvelopeSchema } from '../DefinitionCreateManyMdxNoteInputEnvelopeSchema.js';
import { DefinitionWhereUniqueInputSchema } from '../DefinitionWhereUniqueInputSchema.js';
export const DefinitionCreateNestedManyWithoutMdxNoteInputSchema: z.ZodType<Prisma.DefinitionCreateNestedManyWithoutMdxNoteInput> = z.object({
  create: z.union([ z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionCreateWithoutMdxNoteInputSchema).array(),z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema),z.lazy(() => DefinitionUncheckedCreateWithoutMdxNoteInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema),z.lazy(() => DefinitionCreateOrConnectWithoutMdxNoteInputSchema).array() ]).optional(),
  createMany: z.lazy(() => DefinitionCreateManyMdxNoteInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => DefinitionWhereUniqueInputSchema),z.lazy(() => DefinitionWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default DefinitionCreateNestedManyWithoutMdxNoteInputSchema;