'use strict';

// src/utils/baseAppUtils/getAllPlugins.ts
var getAllPlugins = (appConfig) => {
  let data = appConfig.plugins;
  for (const k in appConfig.slots) {
    data = data.concat(appConfig.slots[k]);
  }
  return data;
};

// src/utils/baseAppUtils/getPluginConfig.ts
var getPluginConfig = ({ pluginName, appConfig }) => {
  return getAllPlugins(appConfig).find((p) => p.pluginName === pluginName);
};

exports.getPluginConfig = getPluginConfig;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getPluginConfig.cjs.map