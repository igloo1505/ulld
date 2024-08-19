import React from "react";
import { FooterSectionList } from "./footerSectionList";
import { Button } from "@ulld/tailwind/button";
import { TextInput } from "@ulld/full-form/textInput";
import { useFormContext } from "@ulld/full-form/form";
import { NavigationFormWithUtilityFields } from "../form/schema";
import { onEnter } from "@ulld/state/listeners/keydown";

interface FooterSectionFormProps { }

const FooterSectionForm = (props: FooterSectionFormProps) => {
    const form = useFormContext<NavigationFormWithUtilityFields>();
    const appendNewSection = () => {
        let inputValue = form.getValues("footerSectionInput");
        if (inputValue.length < 3) {
            return;
        }
        form.setValue("footerSections", [
            ...(form.getValues("footerSections") || []),
            {
                label: inputValue,
                items: [],
            },
        ]);
        form.setValue("footerSectionInput", "");
    };

    let secs = form.watch("footerSections");

    return (
        <div className={"w-full space-y-6"}>
            <div className={"inline"}>
                <TextInput
                    name="footerSectionInput"
                    placeholder="Footer section label"
                    disabled={secs && secs.length >= 3}
                    classes={{
                        formItem: "w-[200px] inline-block mr-4",
                    }}
                    onKeyDown={(e) => onEnter(e, appendNewSection, "onEnter")}
                />
                <Button disabled={secs && secs.length >= 3} onClick={appendNewSection}>
                    Add
                </Button>
            </div>
            {secs.length ? <FooterSectionList /> : <div className={"px-8 md:px-16 min-h-[200px] py-20 flex flex-col justify-center items-center text-xl text-muted-foreground"}>You don't have any footer sections yet.</div>}
        </div>
    );
};

FooterSectionForm.displayName = "FooterSectionForm";

export default FooterSectionForm;
