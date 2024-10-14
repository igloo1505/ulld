import { z } from 'zod';

export const TagScalarFieldEnumSchema = z.enum(['value','kanbanId','createdAt','lastAccess']);

export default TagScalarFieldEnumSchema;
