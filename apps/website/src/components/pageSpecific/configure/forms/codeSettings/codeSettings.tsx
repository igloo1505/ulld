"use client";
import React from "react";
import { CodeSettingFormProvider } from "./context";
import CodeThemeSelectModal from "../../modals/codeThemeSelect/main";
import CodeSettingsFormContent from "./codeSettingsForm";

interface CodeSettingsFormProps { }

const CodeSettingsForm = (props: CodeSettingsFormProps) => {
    return (
        <CodeSettingFormProvider>
            <CodeThemeSelectModal />
            <CodeSettingsFormContent />
        </CodeSettingFormProvider>
    );
};

CodeSettingsForm.displayName = "CodeSettingsForm";

export default CodeSettingsForm;
