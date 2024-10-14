import { z } from 'zod';

export const KanbanScalarFieldEnumSchema = z.enum(['id','title','createdAt','lastUpdate']);

export default KanbanScalarFieldEnumSchema;
