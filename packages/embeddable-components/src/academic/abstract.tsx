import React, { ReactNode } from "react";


/**
 * Takes no properties directly, but can wrap content to add an abstract to mdx content.
 * @alpha
 * @example
 * ```tsx
 * <Abstract>
 * While Einstein revolutionized our understanding of space and time, experimental evidence only supports the fact that the fundamental identity $d=vt$ is broken at relativistic velocities, not that time itself dilates. Dilating space according to $\gamma$ as opposed to time not only maintains all of special relativity's experimental validations, but provides a mechanism for the equivalence principle and yields multiple directly observed quantities.
 * </Abstract>
 * ```
 * ### Output
 * <Abstract>
 * While Einstein revolutionized our understanding of space and time, experimental evidence only supports the fact that the fundamental identity $d=vt$ is broken at relativistic velocities, not that time itself dilates. Dilating space according to $\gamma$ as opposed to time not only maintains all of special relativity's experimental validations, but provides a mechanism for the equivalence principle and yields multiple directly observed quantities.
 * </Abstract>
 * @interface
 */
interface AbstractProps {
  children: ReactNode;
}

export const Abstract = ({ children }: AbstractProps) => {
  return (
    <div className={"w-full h-fit flex justify-center items-center mt-8 mb-12"}>
      <div
        className={
          "bg-secondary text-secondary-foreground w-fit md:max-w-[min(83%,1080px)] rounded-md border"
        }
      >
        <div className={"w-full text-semibold text-lg px-4 py-2 border-b-2 border-secondary-foreground/20"}>
          Abstract
        </div>
        <div className={"p-4 prose dark:prose-invert"}>{children}</div>
      </div>
    </div>
  );
};

Abstract.displayName = "Abstract";
