'use strict';

// src/utils/baseAppUtils/getAllPlugins.ts
var getAllPlugins = (appConfig) => {
  let data = appConfig.plugins;
  for (const k in appConfig.slots) {
    data = data.concat(appConfig.slots[k]);
  }
  return data;
};

exports.getAllPlugins = getAllPlugins;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getAllPlugins.cjs.map