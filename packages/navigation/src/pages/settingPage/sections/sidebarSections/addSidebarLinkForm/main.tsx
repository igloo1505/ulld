import React, { type ReactNode, useMemo, useRef } from "react";
import { IconInput } from "@ulld/full-form/iconSelect";
import { useFormContext } from "@ulld/full-form/form";
import { Button } from "@ulld/tailwind/button";
import { useElementWidthByRef } from "@ulld/hooks/useElementWidthByRef";
import { useElementWidthById } from "@ulld/hooks/useElementWidthById";
import { cn } from "@ulld/utilities/cn";
import { TextInput } from "@ulld/full-form/textInput";
import type { SidebarLink } from "../../../form/schema";
import { maxSidebarLinks } from "../../../staticSettingData";
import EmbeddedFormCard from "../../../utilComponents/embeddedFormCard";
import InternalLocationsInputWrapper from "../../../utilComponents/internalLocationsInput";
import { isValidAction, isValidUrl } from "../../../form/utils";

interface AddSidebarLinkFormProps {
    onAddItem: (val: SidebarLink) => void;
    totalItems: number;
}


const AddSidebarLinkForm = ({
    onAddItem,
    totalItems,
}: AddSidebarLinkFormProps): ReactNode => {
    const form = useFormContext<SidebarLink>();
    const urlInputContainer = useRef<HTMLDivElement>(null);
    const iconInputContainer = useRef<HTMLDivElement>(null);
    const outterContainerId = "addSidebarLinkContainer";

    const data = form.watch();

    const disabled = useMemo((): boolean => {
        return [
            Boolean(data.fieldType === "url" ? isValidUrl(data.value) :
            isValidAction(data.value)),
            Boolean(data.label.length),
            Boolean(data.icon.length),
            Boolean(totalItems <= (maxSidebarLinks + 1))
        ].some((t) => !t);
    }, [data, totalItems]);

    const iconInputWidth = useElementWidthByRef(iconInputContainer);
    const outterContainerWidth = useElementWidthById(outterContainerId);

    const isWide = outterContainerWidth >= 768;

    const handleAddItem = (parsedData: SidebarLink): void => {
        onAddItem(parsedData);
        form.reset();
    };

    return (
        <EmbeddedFormCard
            form={form}
            id={outterContainerId}
            onSubmit={handleAddItem}
        >
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <div
                    className={cn(
                        "w-full flex flex-col justify-center items-center gap-4",
                        isWide && "grid grid-cols-[2fr_3fr]",
                    )}
                >
                    <div className={isWide ? "" : "w-full"} ref={iconInputContainer}>
                        <IconInput
                            classes={{
                                formItem: isWide ? "" : "w-full",
                                button: "w-full",
                                list: isWide ? "" : "w-full",
                            }}
                            name="icon"
                            noDrawButtonLabel={false}
                            styles={{
                                popoverContent: {
                                    width: `${iconInputWidth ? iconInputWidth : 350}px`,
                                    maxWidth: "calc(100vw - 2rem)",
                                },
                            }}
                        />
                    </div>
                    <div
                        className={cn("flex-grow", !isWide && "w-full")}
                        ref={urlInputContainer}
                    >
                        <InternalLocationsInputWrapper
                            data={data}
                            inputContainer={urlInputContainer}
                        />
                    </div>
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

AddSidebarLinkForm.displayName = "AddSidebarLinkForm";

export default AddSidebarLinkForm;
