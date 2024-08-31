import React from "react";
import { ReorderStringInput } from "@ulld/full-form/reorder";
import { AppConfigSchemaType } from "@ulld/configschema/zod/main";

interface SearchConfigurationFormProps {}

export const SearchConfigurationForm = (
  props: SearchConfigurationFormProps,
) => {
  return (
    <div className={"w-full space-y-6"}>
      <ReorderStringInput<
        AppConfigSchemaType,
        AppConfigSchemaType["fileTypePriority"][number],
        "fileTypePriority"
      >
        label="Search Priority"
        desc="Reorder these file types from the highest priority to the lowest. This will only affect the way file name conflicts are handled."
        name="fileTypePriority"
        classes={{
          list: "min-w-[200px]",
          item: "py-2",
          desc: "!mt-2",
        }}
      />
    </div>
  );
};

SearchConfigurationForm.displayName = "SearchConfigurationForm";
