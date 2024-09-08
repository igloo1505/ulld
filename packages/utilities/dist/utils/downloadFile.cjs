'use strict';

// src/utils/downloadFile.ts
var downloadFile = (data, fileName = "appConfig.ulld.json") => {
  let file = new File([data], fileName, { type: "application/json" });
  let exportUrl = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = exportUrl;
  a.download = file.name;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(exportUrl);
};

exports.downloadFile = downloadFile;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=downloadFile.cjs.map