'use strict';

// src/actions/copyStringToClipboard.ts
var copyStringToClipboard = async (s, showToast) => {
  try {
    await navigator.clipboard.writeText(s);
    if (showToast) {
      showToast({
        description: "Copied successfully!"
      });
    }
    return true;
  } catch (err) {
    console.error("Failed to copy: ", err);
    return false;
  }
};

exports.copyStringToClipboard = copyStringToClipboard;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=copyStringToClipboard.cjs.map