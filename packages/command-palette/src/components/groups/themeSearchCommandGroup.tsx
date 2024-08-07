import React from "react";
import { pages } from "../commandPaletteUtilities";
import CommandPaletteItem from "../commandItem";
import { Command } from "cmdk";
import { ulldDefaultColorThemes } from "@ulld/utilities/defaultColorThemeList";
import { capitalize } from "@ulld/utilities/stringUtils";
import { changeTheme } from "@ulld/state/actions/client/theming";


interface SwitchThemeCommandGroupProps {
    activePage?: pages;
    close: () => void;
    setLoading: (b: boolean) => void;
}

const SwitchThemeCommandGroup = ({
    activePage,
    close,
}: SwitchThemeCommandGroupProps) => {

    return (
        <Command.Group heading="Themes">
            {ulldDefaultColorThemes.map((t) => {
                return (
                    <CommandPaletteItem
                        close={close}
                        key={`theme-cmd-option-${t}`}
                        parent={pages.switchTheme}
                        activePage={activePage}
                        onSelect={async () => {
                            await changeTheme(t);
                        }}
                        value={t}
                    >
                        {capitalize(t)}
                    </CommandPaletteItem>
                );
            })}
        </Command.Group>
    );
};

SwitchThemeCommandGroup.displayName = "SwitchThemeCommandGroup";

export default SwitchThemeCommandGroup;
