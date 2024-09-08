import '../chunk-F3FYYIAV.js';

// src/schemas/todoItemStatus.ts
var toDoItemStatuses = [
  "ToDo",
  "In_Progress",
  "Backlog",
  "Cancelled",
  "Done",
  "Future"
];
var toDoItemStatusData = toDoItemStatuses.map((x) => {
  return {
    label: x === "ToDo" ? "To Do" : x.replaceAll("_", " "),
    value: x
  };
});

export { toDoItemStatusData, toDoItemStatuses };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=todoItemStatus.js.map