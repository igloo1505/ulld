"use client";
import React from "react";
import FormSectionHeading from "../../formUtils/formSectionHeading";
import { CheckboxOneFromGroup } from "@ulld/full-form/checkboxOneFromGroup";
import { AppConfigSchemaType } from "@ulld/configschema/zod/main";
import { AnimatePresence } from "framer-motion";
import { PostgresSpecificConfigurationForm } from "./databaseSpecificConfigurationForms/postgres";
import { SQLiteSpecificConfigurationForm } from "./databaseSpecificConfigurationForms/sqlite";
import { useFormContext } from "@ulld/full-form/form";

export const DatabaseConfigureFormContent = () => {
  const form = useFormContext<AppConfigSchemaType>();
  const databaseType = form.watch("build.database.type");
  return (
    <div className={"w-full space-y-6"}>
      <FormSectionHeading>Database</FormSectionHeading>
      <CheckboxOneFromGroup<AppConfigSchemaType>
        options={[
          { label: "Speed & Performance", value: "speed" },
          { label: "Database Size", value: "size" },
        ]}
        name="build.database.prioritize"
        label="Prioritize"
      />
      <CheckboxOneFromGroup<AppConfigSchemaType>
        options={[
          { label: "SQLite", value: "sqlite" },
          { label: "Postgres", value: "postgres" },
        ]}
        name="build.database.type"
        label="Type"
      />
      <AnimatePresence initial={false} mode="wait">
        {databaseType === "postgres" && (
          <PostgresSpecificConfigurationForm key="postgres-form" />
        )}
        {databaseType === "sqlite" && (
          <SQLiteSpecificConfigurationForm key="sqlite-form" />
        )}
      </AnimatePresence>
    </div>
  );
};

DatabaseConfigureFormContent.displayName = "DatabaseConfigureFormContent";
