import { z } from 'zod';

export const SubjectScalarFieldEnumSchema = z.enum(['value','kanbanId','createdAt','lastAccess']);

export default SubjectScalarFieldEnumSchema;
