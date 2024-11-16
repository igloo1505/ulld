// Slot: snippets/SnippetListPage type:page propsExtends:SnippetsPageProps
import REPLACEME from "#/components/REPLACEMEcomponent";
import { SnippetsPageProps } from "@ulld/snippets/types";
import React from "react";

export interface PageProps extends SnippetsPageProps {}

const SnippetPageWrapperTemplate = (props: PageProps) => {
  return <REPLACEME {...props} />;
};

SnippetPageWrapperTemplate.displayName = "REPLACEME";

export default SnippetPageWrapperTemplate;
