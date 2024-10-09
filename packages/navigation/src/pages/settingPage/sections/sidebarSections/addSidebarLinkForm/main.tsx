import { InternalLocationsCombobox } from "@ulld/full-form/combobox-internalLocations";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { IconInput } from "@ulld/full-form/iconSelect";
import { SidebarLink } from "../../../form/schema";
import { useFormContext } from "@ulld/full-form/form";
import { Button } from "@ulld/tailwind/button";
import { useElementWidthByRef } from "@ulld/hooks/useElementWidthByRef";

interface AddSidebarLinkFormProps {
    onAddItem: (val: SidebarLink) => void;
}

const superTruthy = (s: string | undefined | null) => Boolean(s && s.length);


/* RESUME: Fix initial render issue for icon component. It looks horrendous right now on the first render. */

const AddSidebarLinkForm = ({ }: AddSidebarLinkFormProps) => {
    const form = useFormContext<SidebarLink>();
    const urlInputContainer = useRef<HTMLDivElement>(null!);
    const iconInputContainer = useRef<HTMLDivElement>(null!);
    const data = form.watch();

    const disabled = useMemo((): boolean => {
        return [
            data.url && data.url.length,
            data.label && data.label.length,
            data.icon && data.icon.length,
        ].some((t) => Boolean(!t));
    }, [data]);

    const urlInputWidth = useElementWidthByRef(urlInputContainer);
    const iconInputWidth = useElementWidthByRef(iconInputContainer);

    return (
        <div
            className={
                "w-full @container/sbLocForm flex flex-col justify-center items-start lg:flex-row lg:justify-start lg:items-center bg-secondary/20 border rounded p-4"
            }
        >
            <div
                className={
                    "w-full flex flex-col justify-center items-center @[768px]/sbLocForm:grid @[768px]/sbLocForm:grid-cols-[2fr_3fr] gap-4"
                }
            >
                <div
                    className={"w-full @[768px]/sbLocForm:w-auto"}
                    ref={iconInputContainer}
                >
                    <IconInput
                        name="icon"
                        classes={{
                            formItem: "w-full @[768px]/sbLocForm:w-auto",
                            button: "w-full @[768px]/sbLocForm:w-auto",
                            list: "w-full",
                        }}
                        styles={{
                            popoverContent: {
                                width: `${iconInputWidth}px`,
                                maxWidth: "calc(100vw - 2rem)",
                            },
                        }}
                        noDrawButtonLabel={false}
                    />
                </div>
                <div
                    className={"flex-grow w-full @[768px]/sbLocForm:w-auto"}
                    ref={urlInputContainer}
                >
                    <InternalLocationsCombobox
                        name="url"
                        label="Url"
                        placeholder={superTruthy(data.url) ? data.url : undefined}
                        classes={{
                            formItem: "w-full",
                            button: "w-full",
                            commandList: "w-full",
                            /* popoverContent: "w-full", */
                        }}
                        styles={{
                            popoverContent: {
                                width: `${urlInputWidth}px`,
                            },
                        }}
                        getPlaceHolder={(v) => v.value}
                        onChange={(val) => {
                            /* TODO: Check if the value exists in the user's appConfig, and if so apply their default icon here if the icon field is not already set. */
                            form.setValue("url", typeof val === "string" ? val : val.value);
                            let existingLabel = data.label;
                            if (!existingLabel || !existingLabel.trim().length) {
                                form.setValue(
                                    "label",
                                    typeof val === "string" ? undefined : (val as any).label,
                                );
                            }
                        }}
                    />
                </div>
            </div>
            <div className={"w-full flex flex-row justify-end items-center mt-4"}>
                <Button disabled={disabled}>Add</Button>
            </div>
        </div>
    );
};

AddSidebarLinkForm.displayName = "AddSidebarLinkForm";

export default AddSidebarLinkForm;
