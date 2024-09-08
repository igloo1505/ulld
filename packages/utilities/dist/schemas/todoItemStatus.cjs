'use strict';

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

exports.toDoItemStatusData = toDoItemStatusData;
exports.toDoItemStatuses = toDoItemStatuses;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=todoItemStatus.cjs.map