'use strict';

var fs = require('fs');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var fs__default = /*#__PURE__*/_interopDefault(fs);

// src/utils/media/streamFile.ts
var streamFile = (path, options) => {
  const downloadStream = fs__default.default.createReadStream(path, options);
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

exports.streamFile = streamFile;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=streamFile.cjs.map