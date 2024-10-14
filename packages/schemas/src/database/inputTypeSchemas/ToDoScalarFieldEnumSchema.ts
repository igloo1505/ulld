import { z } from 'zod';

export const ToDoScalarFieldEnumSchema = z.enum(['id','createdAt','task','dueAt','details','parentId','category','bookmarked','status','priority','toDoListId','completedOn']);

export default ToDoScalarFieldEnumSchema;
