"use client";
import React from "react";
import { FeatureContainerProps } from "./types";
import FeatureContainerText from "./featureContainerText";
import FeatureContainerDisplay from "./featureContainerDisplay";
import clsx from "clsx";
import { useViewport } from "@ulld/hooks/useViewport";

const FeatureContainer = ({
  orientation = "ltr",
  idx,
  expandDisplay,
  override,
  spaceEven,
  displayContainerClasses,
  sectionIndex,
  top,
  ...props
}: FeatureContainerProps) => {
  const shouldShow = idx === sectionIndex - 1;
  const vp = useViewport();
  if (override) {
    let O = override;
    return <O orientation={orientation} shouldShow={shouldShow} />;
  }
  return (
    <div
      className={clsx(
        "absolute group/feature left-0 top-0 h-[calc(100vh-76px)] w-screen max-w-[1440px] gap-4 md:gap-6 lg:gap-8 px-8 lg:px-12 pb-8 flex-col md:flex-row justify-center items-center place-items-center",
        shouldShow && "z-10",
        spaceEven ? "grid grid-cols-1 md:flex" : "flex",
        expandDisplay && "display-expand",
        vp?.window.width && vp.window.width < 768 ? "stack" : "flow",
      )}
      style={{
        height: `calc(100vh - ${top}px)`,
      }}
    >
      {orientation === "ltr" ? (
        <>
          <FeatureContainerText
            title={props.title}
            desc={props.desc}
            label={props.label}
            orientation={orientation}
            idx={idx}
            shouldShow={shouldShow}
          />
          <FeatureContainerDisplay
            containerClasses={displayContainerClasses}
            displayExpand={expandDisplay || spaceEven}
            orientation={orientation}
            component={props.component}
            shouldShow={shouldShow}
            idx={idx}
          />
        </>
      ) : (
        <>
          <FeatureContainerDisplay
            containerClasses={displayContainerClasses}
            displayExpand={expandDisplay || spaceEven}
            orientation={orientation}
            component={props.component}
            shouldShow={shouldShow}
            idx={idx}
          />
          <FeatureContainerText
            title={props.title}
            desc={props.desc}
            label={props.label}
            orientation={orientation}
            idx={idx}
            shouldShow={shouldShow}
          />
        </>
      )}
    </div>
  );
};

FeatureContainer.displayName = "FeatureContainer";

export default FeatureContainer;
