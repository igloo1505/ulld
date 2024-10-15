import { z } from 'zod';
import { Prisma } from '@ulld/database/db';
export const JsonNullValueInputSchema = z.enum(['JsonNull',]).transform((value) => (value === 'JsonNull' ? Prisma.JsonNull : value));
