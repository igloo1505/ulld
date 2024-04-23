"use client";
import { LandingSection, getNewSection } from "#/types/landingSection";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
/* import { Handler,  } from "@use-gesture/react" */
import {
  Handler,
  ScrollGesture,
  createGesture,
  scrollAction,
  wheelAction,
} from "@use-gesture/vanilla";
import { Lethargy } from "lethargy";
import { ReactDOMAttributes } from "@use-gesture/react/dist/declarations/src/types";
import { useLockBodyScroll } from "@ulld/hooks/useLockScroll";
import { useSection } from "./useSection";

const lethargy = new Lethargy();
const Gesture = createGesture([scrollAction, wheelAction]);

const ScrollGestureListener = () => {
  const router = useRouter();
  const sp = useSearchParams();
  const section = useRef<LandingSection>("hero");
  const _section = (sp.get("section") as LandingSection) || ("hero" as "hero");
  section.current = _section;
  const lockBody = useLockBodyScroll(true);
  const [scrolling, setScrolling] = useState(false);

  const setContainerClass = (newSection: LandingSection) => {
    let em = document.getElementById("main-landing-container");
    if (!em) return;
    let newClasses: string[] = [`section-${newSection}`];
    em.classList.forEach((val) => {
      if (!val.startsWith("section-")) {
        newClasses.push(val);
      }
    });
    em.classList.value = newClasses.join(" ");
  };
  const wheelListener: Handler<"wheel", UIEvent> = (data) => {
    if (!data.last) {
      if (scrolling) return;
      setScrolling(true);
      const dir = lethargy.check(data.event);
      if (!dir) return;
      const newSection = getNewSection(
        section.current,
        dir < 0 ? "up" : "down",
      );
      if (newSection) {
        console.log(`New section in wheel: ${newSection}`);
        window.history.replaceState(null, "", `?section=${newSection}`);
        setContainerClass(newSection);
      }
    } else {
      setScrolling(false);
    }
  };
  const scrollListener: Handler<"scroll", UIEvent> = (data) => {
    /* console.log("data in wheel", data) */
    if (!data.last) {
      if (scrolling) return;
      setScrolling(true);
      const dir = lethargy.check(data.event);
      if (!dir) return;
      const newSection = getNewSection(
        section.current,
        dir < 0 ? "up" : "down",
      );
      if (newSection) {
        console.log(`New section in scroll: ${newSection}`);
        window.history.replaceState(null, "", `?section=${newSection}`);
        setContainerClass(newSection);
      }
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    let em = document.getElementById("main-landing-container");
    if (em) {
      console.log(`Appending listener to dom`);
      /* @ts-ignore */
      const gesture = new Gesture(
        window,
        {
          onScroll: scrollListener,
          onWheel: wheelListener,
        },
        {
          scroll: {
            preventDefault: true,
          },
          wheel: {
            preventDefault: true,
          },
        },
      );
    }
  }, []);

  return <div></div>;
};

ScrollGestureListener.displayName = "ScrollGestureListener";

export default ScrollGestureListener;
