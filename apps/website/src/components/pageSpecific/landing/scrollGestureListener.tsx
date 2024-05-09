"use client";
import { LandingSection, getNewSection } from "#/types/landingSection";
import  { useEffect, useRef } from "react";
import {
  Handler,
  createGesture,
  scrollAction,
  wheelAction,
} from "@use-gesture/vanilla";
import { Lethargy } from "lethargy";
import { useLockBodyScroll } from "@ulld/hooks/useLockScroll";
import { useLandingSection } from "./useSection";

const lethargy = new Lethargy();
const Gesture = createGesture([scrollAction, wheelAction]);

const ScrollGestureListener = () => {
  const section = useRef<LandingSection | string | undefined>("hero");
  const _section = useLandingSection()
  section.current = _section;
    useEffect(() => {
       section.current = _section 
    }, [_section])
  useLockBodyScroll(true);
    const scrolling = useRef<boolean>(false)
    const setScrolling = (val: boolean) => scrolling.current = val

  const setContainerClass = (newSection: LandingSection | string) => {
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
      if (scrolling.current) return;
      setScrolling(true);
      const dir = lethargy.check(data.event);
      if (!dir) return;
      const newSection = getNewSection(
        section.current,
        dir < 0 ? "up" : "down",
      );
      if (newSection) {
        window.history.replaceState(null, "", `?section=${newSection}`);
        setContainerClass(newSection);
      }
    } else {
      setScrolling(false);
    }
  };
  const scrollListener: Handler<"scroll", UIEvent> = (data) => {
    if (!data.last) {
      if (scrolling.current) return;
      setScrolling(true);
      const dir = lethargy.check(data.event);
      if (!dir) return;
      const newSection = getNewSection(
        section.current,
        dir < 0 ? "up" : "down",
      );
      if (newSection) {
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

  return null
};

ScrollGestureListener.displayName = "ScrollGestureListener";

export default ScrollGestureListener;
