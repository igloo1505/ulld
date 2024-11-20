import { z } from 'zod';

export const ToDoListScalarFieldEnumSchema = z.enum(['id','label','createdAt','lastUpdate','lastAccess']);

export default ToDoListScalarFieldEnumSchema;
