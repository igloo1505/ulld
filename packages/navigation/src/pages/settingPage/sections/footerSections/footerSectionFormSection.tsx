import React, { type ReactNode } from "react";
import { Button } from "@ulld/tailwind/button";
import { TextInput } from "@ulld/full-form/textInput";
import { TextAreaInput } from "@ulld/full-form/textArea";
import { useFormContext } from "@ulld/full-form/form";
import { onEnter } from "@ulld/state/listeners/keydown";
import type { NavigationFormWithUtilityFields } from "../../form/schema";
import { defaultCopyrightText } from "../../staticSettingData";
import { FooterSectionList } from "./footerSectionList";

const FooterSectionForm = (): ReactNode => {
    const form = useFormContext<NavigationFormWithUtilityFields>();
    const appendNewSection = (): void => {
        const inputValue = form.getValues("footerSectionInput");
        if (inputValue.length < 3) {
            return;
        }
        form.setValue("footerSections", [
            ...form.getValues("footerSections"),
            {
                label: inputValue,
                items: [],
            },
        ]);
        form.setValue("footerSectionInput", "");
    };

    const secs = form.watch("footerSections");

    return (
        <div className="w-full flex flex-col justify-center items-start gap-6">
                <TextInput
                    classes={{
                        formItem: "w-[min(450px,90vw)]",
                    }}
                    desc="Title displayed above all quick links."
                    label="Quick Link Heading"
                    name="quickLinkLabel"
                />
                <TextAreaInput
                    classes={{
                        formItem: "w-[min(450px,90vw)]"
                    }}
                    defaultValue={defaultCopyrightText}
                    label="Copyright text"
                    name="copyrightText"
                />
            <div 
                className="w-full space-y-6 bg-secondary/20 border rounded p-4"
                id="nav-settings-footer-sec"
            >
                <div className="inline">
                    <TextInput
                        classes={{
                            formItem: "w-[200px] inline-block mr-4",
                        }}
                        disabled={secs.length >= 3}
                        name="footerSectionInput"
                        onKeyDown={(e) => {
                            onEnter(e, appendNewSection, "onEnter");
                        }}
                        placeholder="Footer section label"
                    />
                    <Button disabled={secs.length >= 3} onClick={appendNewSection}>
                        Add
                    </Button>
                </div>
                {secs.length ? (
                    <FooterSectionList />
                ) : (
                    <div className="px-8 md:px-16 min-h-[200px] py-20 flex flex-col justify-center items-center text-xl text-muted-foreground">
                        You don&apos;t have any footer sections yet.
                    </div>
                )}
            </div>
        </div>
    );
};

FooterSectionForm.displayName = "FooterSectionForm";

export default FooterSectionForm;
