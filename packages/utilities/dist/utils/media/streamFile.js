import '../../chunk-F3FYYIAV.js';
import fs from 'fs';

var streamFile = (path, options) => {
  const downloadStream = fs.createReadStream(path, options);
  return new ReadableStream({
    start(controller) {
      downloadStream.on("data", (chunk) => controller.enqueue(new Uint8Array(chunk)));
      downloadStream.on("end", () => controller.close());
      downloadStream.on("error", (error) => controller.error(error));
    },
    cancel() {
      downloadStream.destroy();
    },
    type: "bytes"
  });
};

export { streamFile };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=streamFile.js.map