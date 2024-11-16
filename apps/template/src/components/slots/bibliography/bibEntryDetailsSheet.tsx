// Slot: bibliography/BibEntryDetails clientOnly propsExtends:BibEntryDetailsProps
"use client";
import REPLACEME from "#/components/REPLACEMEcomponent";
import React from "react";
import { useBibEntryDetailsDisplay } from "@ulld/hooks/useBibEntryDetails";

const BibEntryDetailSheetTemplate = () => {
    const [item, setItem, close] = useBibEntryDetailsDisplay();
    return <REPLACEME close={close} item={item} />;
};

BibEntryDetailSheetTemplate.displayName = "BibEntryDetailSheetTemplate";

export default BibEntryDetailSheetTemplate;
