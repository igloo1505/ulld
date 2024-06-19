import React from "react";
import { DatabaseConfigureFormContent } from "./databaseFormContent";

interface DatabaseConfigurationFormProps {}

export const DatabaseConfigurationForm = (
  props: DatabaseConfigurationFormProps,
) => {
  return <DatabaseConfigureFormContent />;
};

DatabaseConfigurationForm.displayName = "DatabaseConfigurationForm";
