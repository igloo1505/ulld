// src/database/inputTypeSchemas/ToDoScalarFieldEnumSchema.ts
import { z } from "zod";
var ToDoScalarFieldEnumSchema = z.enum(["id", "createdAt", "task", "dueAt", "details", "parentId", "category", "bookmarked", "status", "priority", "toDoListId", "completedOn"]);
var ToDoScalarFieldEnumSchema_default = ToDoScalarFieldEnumSchema;

export {
  ToDoScalarFieldEnumSchema,
  ToDoScalarFieldEnumSchema_default
};
//# sourceMappingURL=chunk-JWOPOQ43.js.map