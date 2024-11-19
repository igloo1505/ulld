"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/methods/moveAndChangeExtension.ts
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var moveAndChangeExtension = (props) => {
  let pathData = _path2.default.parse(_path2.default.join(props.outputDir, props.rootRelativePath));
  return _path2.default.join(
    `${pathData.dir}`,
    `${pathData.name}${props.newExtension}`
  );
};



exports.moveAndChangeExtension = moveAndChangeExtension;
//# sourceMappingURL=chunk-AN6MDGWE.cjs.map