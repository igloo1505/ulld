import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TERTIARY_TOGGLESchema } from './TERTIARY_TOGGLESchema';

export const EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTERTIARY_TOGGLEFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TERTIARY_TOGGLESchema).optional()
}).strict();

export default EnumTERTIARY_TOGGLEFieldUpdateOperationsInputSchema;
