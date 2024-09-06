import { ToastConfigType } from "../types/toastConfig.js";


export const copyStringToClipboard = async (
  s: string,
  showToast?: (toastConfig: ToastConfigType) => void,
) => {
  try {
    await navigator.clipboard.writeText(s);
    if (showToast) {
      showToast({
        description: "Copied successfully!",
      });
    }
    return true;
  } catch (err) {
    console.error("Failed to copy: ", err);
    return false;
  }
};
