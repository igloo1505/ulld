import { ToggleBlogSidebarProps } from "./types";

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface WindowEventMap {
    "cancel-landing-typing": CustomEvent;
    "resume-landing-typing": CustomEvent;
  }
}

export const cancelLandingTyping = () => {
  window.dispatchEvent(new Event("cancel-landing-typing"));
};

export const resumeLandingTyping = () => {
  window.dispatchEvent(new Event("resume-landing-typing"));
};

export const toggleBlogSidebar = ({
  buttonRef,
  open,
}: ToggleBlogSidebarProps = {}) => {
  let em = document.getElementById("blog-layout");
  if (!em) return;
  let isOpen =
    typeof open === "boolean" ? open : !em?.classList.contains("open");
  em.classList.add("transitioning");
  let btn = buttonRef
    ? buttonRef.current
    : document.getElementById("navbar-blog-sidebar-toggle");
  em.ontransitionend = () => em.classList.remove("transitioning");
  if (isOpen) {
    em.classList.add("open");
    document.body.classList.add("backdropOpen");
    if (btn) {
      btn.style.color = "hsl(var(--foreground))";
    }
    return;
  }
  em.classList.remove("open");
  document.body.classList.remove("backdropOpen");
  if (btn) {
    btn.style.color = "hsl(var(--muted-foreground))";
  }
};
