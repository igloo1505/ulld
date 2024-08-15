"use client";
import React from "react";
import { TOCItemType } from "@ulld/utilities/getTocFromContent";
import { MdxContentCLIENT } from "@ulld/render/mdx/client";

interface TocHeadingItemProps extends TOCItemType {
  close: () => void;
}

const TocHeadingItem = (props: TocHeadingItemProps) => {
  return (
    <a
      href={props.url}
      onClick={props.close}
      className={
        "text-sm text-foreground/70 hover:text-foreground [&_.highlight-text]:!text-foreground/70 [&_.highlight-text_*]:!text-foreground/70 [&_*]:!font-normal [&_.highlight-text_*]:hover:!text-foreground [&_.highlight-text]:hover:!text-foreground"
      }
      style={{
        paddingLeft: `${16 * props.depth}px`,
      }}
    >
      <MdxContentCLIENT inline content={props.title as string} />
    </a>
  );
};

TocHeadingItem.displayName = "TocHeadingItem";

export default TocHeadingItem;
