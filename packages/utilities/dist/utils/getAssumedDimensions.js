import '../chunk-F3FYYIAV.js';

// src/utils/getAssumedDimensions.ts
var getAssumedDimensions = ({
  width,
  height,
  maxViewportWidth = 90,
  maxViewportHeight = 70,
  maxSource = "container",
  includeMin = true
}) => {
  let data = {
    maxWidth: "100%",
    maxHeight: "100%"
  };
  if (width) {
    data.width = width > 1 ? `min(${maxViewportWidth}${maxSource === "container" ? "%" : "vw"}, ${width}px)` : `${width}vw`;
  }
  if (height) {
    data.height = height > 1 ? `min(${maxViewportHeight}${maxSource === "container" ? "%" : "vh"}, ${height}px)` : `${height}vh`;
  }
  if (includeMin) {
    data.minWidth = data.width;
    data.minHeight = data.height;
  }
  return data;
};

export { getAssumedDimensions };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getAssumedDimensions.js.map