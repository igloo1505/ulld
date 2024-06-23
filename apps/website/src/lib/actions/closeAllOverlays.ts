import { toggleBlogSidebar } from "./client";

export const closeAllOverlays = (e?: Event) => {
    console.log(`closeAllOverlays ${e}`)
  if (e) {
    e.stopPropagation();
    e.preventDefault();
  }
  toggleBlogSidebar({ open: false });
};
