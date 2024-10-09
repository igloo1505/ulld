import { InternalLocationsCombobox } from "@ulld/full-form/combobox-internalLocations";
import React, { useMemo } from "react";
import { IconInput } from "@ulld/full-form/iconSelect";
import { SidebarLink } from "../../../form/schema";
import { useFormContext } from "@ulld/full-form/form";
import { Button } from "@ulld/tailwind/button";
import { internalAppLocations } from "@ulld/utilities/appData";

interface AddSidebarLinkFormProps {
    onAddItem: (val: SidebarLink) => void;
}

const superTruthy = (s: string | undefined | null) => Boolean(s && s.length);

const AddSidebarLinkForm = ({ }: AddSidebarLinkFormProps) => {
    const form = useFormContext<SidebarLink>();
    const data = form.watch();

    const disabled = useMemo((): boolean => {
        return [
            data.url && data.url.length,
            data.label && data.label.length,
            data.icon && data.icon.length,
        ].some((t) => Boolean(!t));
    }, [data]);

    const placeholder = useMemo(() => {
        if (!data.label) {
            return superTruthy(data.url) ? data.url : undefined;
        }
        let itemInternal = internalAppLocations.find((x) => x.label === data.label);
        if (itemInternal) {
            return superTruthy(data.url) ? data.url : undefined;
        }
        return undefined;
    }, [data]);

    return (
        <div
            className={
                "w-full flex flex-col justify-center items-start lg:flex-row lg:justify-start lg:items-center bg-secondary/20 border rounded p-4"
            }
        >
            <div className={"w-full flex flex-row justify-start items-center gap-4"}>
                <IconInput name="icon" />
                <InternalLocationsCombobox
                    name="url"
                    label="Url"
                    placeholder={placeholder}
                    classes={{
                        "formItem": "w-full"
                    }}
                    getPlaceHolder={(v) => v.value}
                    onChange={(val) => {
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
            <div className={"w-full flex flex-row justify-end items-center mt-4"}>
                <Button disabled={disabled}>Add</Button>
            </div>
        </div>
    );
};

AddSidebarLinkForm.displayName = "AddSidebarLinkForm";

export default AddSidebarLinkForm;
