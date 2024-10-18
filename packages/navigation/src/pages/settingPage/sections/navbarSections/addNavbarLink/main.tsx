"use client";
import { useFormContext } from "@ulld/full-form/form";
import { TextInput } from "@ulld/full-form/textInput";
import { Button } from "@ulld/tailwind/button";
import React, { ReactNode, useMemo, useRef } from "react";
import type { NavbarLink } from "../../../form/schema";
import { maxNavbarLinks } from "../../../staticSettingData";
import EmbeddedFormCard from "../../../utilComponents/embeddedFormCard";
import InternalLocationsInputWrapper from "../../../utilComponents/internalLocationsInput";
import { isValidUrlAction } from "../../../form/utils";

interface AddNavbarLinkSectionProps { 
    onAddItem: (val: NavbarLink) => void;
    totalItems: number
}

const AddNavbarLinkSection = (props: AddNavbarLinkSectionProps): ReactNode => {
    const form =
        useFormContext<NavbarLink>();
    const urlInputContainer = useRef<HTMLDivElement>(null);

    const handleSubmit = (
        data: NavbarLink,
    ): void => { 
        console.log("data: ", data)
        props.onAddItem(data);
        form.reset();
    };

    const data = form.watch();

    const disabled = useMemo(() => {
        if(props.totalItems > maxNavbarLinks){
            return true
        }
        if(!data.label || data.label.length < 3){
            return true
        }
        return !isValidUrlAction(data.value, data.fieldType)
    }, [data, props.totalItems])

    return (
        <EmbeddedFormCard
            form={form}
            onSubmit={handleSubmit}
        >
            <div 
                className="w-full flex flex-col justify-center items-center lg:flex-row lg:items-end gap-4"
            >
                <div
                    className="w-full"
                    ref={urlInputContainer}
                >
                <InternalLocationsInputWrapper
                    data={data}
                    inputContainer={urlInputContainer}
                />
                </div>
                <TextInput
                    classes={{
                        formItem: "w-full",
                        input: "w-full",
                    }}
                    label="Label"
                    name="label"
                />
            </div>
            <div className="w-full flex flex-row justify-end items-center mt-4">
                <Button disabled={disabled} type="submit">
                    Add
                </Button>
            </div>
        </EmbeddedFormCard>
    );
};

AddNavbarLinkSection.displayName = "AddNavbarLinkSection";

export default AddNavbarLinkSection;
