import React from "react";
import ThemeTriggerButton from "./themeTriggerButton";
import { Label } from "@ulld/tailwind/label";
import FormSectionHeading from "../../formUtils/formSectionHeading";
import { LogoAsText } from "#/components/general/logoAsText";
import staticData from "staticContent";
import { CheckboxInput } from "@ulld/full-form/checkboxInput";
import { AppConfigSchemaType } from "@ulld/configschema/zod/main";
import { MonacoLanguageSelect } from "@ulld/full-form/selectMonacoLanguage";

interface CodeSettingsFormContentProps { }

const CodeSettingsFormContent = (props: CodeSettingsFormContentProps) => {
    return (
        <div className={"w-full space-y-6"}>
            <Label className={"text-lg font-medium"}>Themes</Label>
            <div
                className={
                    "gap-x-16 gap-y-6 flex flex-row justify-between items-center flex-wrap"
                }
            >
                <ThemeTriggerButton theme="dark" />
                <ThemeTriggerButton theme="light" />
            </div>
            <FormSectionHeading
                subtitle={
                    <>
                        <LogoAsText fontSize={13} /> uses the{" "}
                        <a
                            href={staticData.links.docs.external.monaco}
                            className={"text-link"}
                        >
                            Monaco editor
                        </a>{" "}
                        to optionally extend inputs for code, math and markdown.
                    </>
                }
            >
                Editor
            </FormSectionHeading>
            <CheckboxInput<AppConfigSchemaType>
                name="code.editor.useVimMode"
                label="Use Vim keybindings"
                desc="Some sensible, common keymap settings are applied by default. An update in the very near future will extend the configuration schema to support user defined keymaps."
            />
            <MonacoLanguageSelect<AppConfigSchemaType>
                name="code.editor.defaultLangauge"
                label="Default Language"
                desc="Where the language being used is in question, what default language should the editor prefer?"
            />
        </div>
    );
};

CodeSettingsFormContent.displayName = "CodeSettingsFormContent";

export default CodeSettingsFormContent;
