import { z } from 'zod';

export const ToDoOrderByRelevanceFieldEnumSchema = z.enum(['task','details','status']);

export default ToDoOrderByRelevanceFieldEnumSchema;
