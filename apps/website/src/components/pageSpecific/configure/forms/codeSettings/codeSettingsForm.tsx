import React from "react";
import ThemeTriggerButton from "./themeTriggerButton";
import { Label } from "@ulld/tailwind/label";

interface CodeSettingsFormContentProps { }

const CodeSettingsFormContent = (props: CodeSettingsFormContentProps) => {
    return (
        <div className={"w-full space-y-6"}>
            <Label className={"text-lg font-medium"}>Themes</Label>
            <div className={"grid grid-cols-1 gap-6 w-fit lg:grid-cols-2 lg:gap-16"}>
                <ThemeTriggerButton theme="dark" />
                <ThemeTriggerButton theme="light" />
            </div>
        </div>
    );
};

CodeSettingsFormContent.displayName = "CodeSettingsFormContent";

export default CodeSettingsFormContent;
