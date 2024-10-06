import { Route } from "next";
import React from "react";
import { AppConfigSchemaOutput } from "@ulld/types";
import { TaggableListConditionalDropdown } from "./dropdown/taggableListConditionalDropdown";
import { WithOptional } from "@ulld/utilities/types";

interface TaggableListProps {
  items: string[];
  type: "tag" | "topic" | "subject";
  label?: string;
  activeItems?: string[];
  noteType: WithOptional<AppConfigSchemaOutput["noteTypes"][number], "docType">;
  searchParams: any;
}

const defaultLabels: Record<TaggableListProps["type"], string> = {
  tag: "Tags",
  topic: "Topics",
  subject: "Subjects",
};

const TaggableList = ({
  items,
  type,
  label,
  activeItems = [],
  noteType,
  searchParams,
}: TaggableListProps) => {
  if (!items || !items.length) return null;
  let inactiveItems = items.filter((s) => !activeItems.includes(s));
  return (
      <TaggableListConditionalDropdown
        type={type}
        label={label || defaultLabels[type]}
        activeItems={activeItems.map((s) => ({
          searchParams: searchParams,
          basePath: noteType.url as Route,
          value: s,
          category: noteType.docType,
          type: type,
        }))}
        inactiveItems={inactiveItems.map((s) => ({
          searchParams: searchParams,
          basePath: noteType.url as Route,
          value: s,
          category: noteType.docType,
          type: type,
        }))}
      />
  );
};

TaggableList.displayName = "TaggableList";

export default TaggableList;
