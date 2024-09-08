// src/utils/baseAppUtils/getAllPlugins.ts
var getAllPlugins = (appConfig) => {
  let data = appConfig.plugins;
  for (const k in appConfig.slots) {
    data = data.concat(appConfig.slots[k]);
  }
  return data;
};

export { getAllPlugins };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=chunk-65NJLKUN.js.map