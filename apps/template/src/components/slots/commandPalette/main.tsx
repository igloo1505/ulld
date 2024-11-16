// Slot: commandPalette/commandPalette propsExtends:CommandPalettePopoverProps
import REPLACEME from "#/components/REPLACEMEcomponent";
import React from "react";
import { CommandPalettePopoverProps } from "@ulld/command-palette/types";
import appConfig from "appConfig"
import { AppConfigSchemaOutput } from "@ulld/configschema/types";

const CommandPaletteTemplate = (props: Omit<CommandPalettePopoverProps, "appConfig">) => {
    return <REPLACEME
        appConfig={appConfig as AppConfigSchemaOutput}
    />;
};

CommandPaletteTemplate.displayName = "CommandPaletteTemplate";

export default CommandPaletteTemplate;
