'use strict';

// src/classes/urlManager.ts
var Paths = class {
  constructor() {
  }
  static getTaskListPath(idOrIds, showCompleted = false) {
    const sp = new URLSearchParams();
    let ids = Array.isArray(idOrIds) ? idOrIds : [idOrIds];
    for (const d of ids) {
      sp.append("listIds", `${d}`);
    }
    if (showCompleted) {
      sp.set("showCompleted", "true");
    }
    return `/todo?${sp.toString()}`;
  }
};

exports.Paths = Paths;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=urlManager.cjs.map