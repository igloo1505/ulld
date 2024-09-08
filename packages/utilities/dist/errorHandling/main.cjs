'use strict';

// src/errorHandling/categoryRecords/taskManager.tsx
var taskManagerErrorRecord = {
  toDoListExists: {
    title: "Uh Oh",
    description: "A to-do list with this name already exists."
  }
};

// src/errorHandling/categoryRecords/bibManager.tsx
var bibManagerErrorRecord = {
  bibPathFileDoesNotExist: {
    title: "No bib file found.",
    description: "The bibPath field in your appConfig.ulld.json points to a file that does not exist. Your bibliography cannot be synced."
  }
};

// src/errorHandling/main.ts
var errorToastRecord = {
  ...taskManagerErrorRecord,
  ...bibManagerErrorRecord
};

exports.errorToastRecord = errorToastRecord;
exports.taskManagerErrorRecord = taskManagerErrorRecord;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=main.cjs.map