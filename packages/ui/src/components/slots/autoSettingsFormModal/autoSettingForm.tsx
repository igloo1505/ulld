import React from "react";
import { FieldValues } from "@ulld/full-form/form";
import { autoSetting } from "@ulld/database";
import { TextInput } from "@ulld/full-form/textInput";
import { SelectInput } from "@ulld/full-form/select";

interface AutoSettingFormProps { }

const AutoSettingForm = <T extends FieldValues>(
    props: AutoSettingFormProps,
) => {
    return (
        <form className="space-y-6">
            <TextInput
                name="glob"
                desc={
                    "This is passed to the `glob-to-regexp` package to match files automatically."
                }
                label="Glob"
            />
            <div className={"grid grid-cols-1 xs:grid-cols-[1fr_120px] gap-5"}>
                <TextInput name="value" label="Value" />
                <SelectInput
                    name="type"
                    label="Type"
                    placeholder="What type of auto-property?"
                    options={Object.keys(autoSetting).map((s) => ({
                        value: s,
                        label: s,
                    }))}
                />
            </div>
        </form>
    );
};

AutoSettingForm.displayName = "AutoSettingForm";

export default AutoSettingForm;
