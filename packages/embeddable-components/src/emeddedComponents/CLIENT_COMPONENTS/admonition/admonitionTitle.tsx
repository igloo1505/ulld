"use client";
import type { HTMLProps, ReactNode } from "react";
import { cn } from "@ulld/utilities/cn";
import type { AdmonitionType } from "@ulld/utilities/admonition/types";
import { ChevronDown } from "lucide-react";
import type { ValidIconName } from "@ulld/types";
import { MdxContentCLIENT } from "@ulld/render/mdx";
import { DynamicIcon } from "@ulld/icons";
import { getIconName } from "./utils";

export interface AdmonitionTitleProps extends HTMLProps<HTMLDivElement> {
  title: string;
  admonitionType?: AdmonitionType;
  dropdown?: boolean;
  titleBold?: boolean;
  icon?: ValidIconName;
}

export const AdmonitionTitle = ({
  title,
  admonitionType = "plain",
  dropdown,
  titleBold,
  ...props
}: AdmonitionTitleProps): ReactNode => {
    /* NOTE: Don't need this with internal mdx components as they already handle state change automatically. Shouldn't need this with MDX from better-mdx-react either. */
  /* useMathjaxDynamicParse(title); */

  const iconName = getIconName({
        admonitionType,
        icon: props.icon
    })

  return (
    <div
      {...props}
      className={cn(
        "title not-prose w-full flex flex-row justify-start items-center text-lg px-4 py-2 rounded-tl-lg rounded-tr-lg  relative z-[10] grid place-items-center",
        dropdown ? "grid-cols-[1fr_2rem] cursor-pointer" : "grid-cols-1",
        props.className,
      )}
    >
      <div
        className="w-full flex flex-row flex-nowrap gap-2 justify-start items-center"
      >
        {iconName ? <DynamicIcon className="w-4 h-4" name={iconName}/> : null}
        <div
          className={cn(
            "admonition-title flex flex-row flex-wrap flex-grow font-bold tracking-wide inlineMath relative",
            titleBold && "font-semibold",
            dropdown && "mr-8",
          )}
        >
          <MdxContentCLIENT content={title} inline />
        </div>
        {dropdown ? <ChevronDown
            className="absolute right-4 top-[50%] translate-y-[-50%] group-data-[state=open]/fold:rotate-180 transition-transform duration-300"
          /> : null}
      </div>
    </div>
  );
};

AdmonitionTitle.displayName = "AdmonitionTitle";
