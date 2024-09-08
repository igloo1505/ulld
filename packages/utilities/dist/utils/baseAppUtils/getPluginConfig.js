import { getAllPlugins } from '../../chunk-65NJLKUN.js';
import '../../chunk-F3FYYIAV.js';

// src/utils/baseAppUtils/getPluginConfig.ts
var getPluginConfig = ({ pluginName, appConfig }) => {
  return getAllPlugins(appConfig).find((p) => p.pluginName === pluginName);
};

export { getPluginConfig };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getPluginConfig.js.map