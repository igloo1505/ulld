import React from "react";
import { useCodeFormState } from "./useCodeFormState";
import { Button } from "@ulld/tailwind/button";
import { ShikiThemeSelect } from "@ulld/full-form/selectShikiTheme"
import { AppConfigSchemaType } from "@ulld/configschema/zod/main";

interface ThemeTriggerButtonProps {
    theme: "dark" | "light";
}

const ThemeTriggerButton = ({ theme }: ThemeTriggerButtonProps) => {
    const state = useCodeFormState();
    return (
        <div className={"flex flex-row justify-start items-end gap-4 w-full"}>
            <ShikiThemeSelect<AppConfigSchemaType> 
                label={theme === "dark" ? "Dark Mode" : "Light Mode"}
                name={`code.theme.${theme}`}
                classes={{
                    selectTrigger: "w-[230px]"
                }}
            />
            <Button
                variant="ghost"
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    state.showThemeSelectModal(theme);
                }}
            >
                Preview
            </Button>
        </div>
    );
};

ThemeTriggerButton.displayName = "ThemeTriggerButton";

export default ThemeTriggerButton;
