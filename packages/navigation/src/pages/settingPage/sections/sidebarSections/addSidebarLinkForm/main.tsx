import { InternalLocationsCombobox } from "@ulld/full-form/combobox-internalLocations";
import React, { useMemo, useRef } from "react";
import { IconInput } from "@ulld/full-form/iconSelect";
import { SidebarLink } from "../../../form/schema";
import { useFormContext } from "@ulld/full-form/form";
import { Button } from "@ulld/tailwind/button";
import { useElementWidthByRef } from "@ulld/hooks/useElementWidthByRef";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { internalAppLocations } from "@ulld/utilities/appData";
import cn from "@ulld/utilities/cn";
import { TextInput } from "@ulld/full-form/textInput";

interface AddSidebarLinkFormProps {
    onAddItem: (val: SidebarLink) => void;
}

const superTruthy = (s: string | undefined | null) => Boolean(s && s.length);

const AddSidebarLinkForm = ({ onAddItem }: AddSidebarLinkFormProps) => {
    const form = useFormContext<SidebarLink>();
    const urlInputContainer = useRef<HTMLDivElement>(null!);
    const iconInputContainer = useRef<HTMLDivElement>(null!);
    const outterContainer = useRef<HTMLFormElement>(null!);

    const data = form.watch();
    const [appConfig] = useAppConfig();

    const appConfigIconMap = useMemo(() => {
        let obj: Record<string, SidebarLink["icon"]> = {};
        for (const x of internalAppLocations) {
            obj[x.url] = x.defaultIcon;
        }
        if (!appConfig) {
            return obj;
        }
        for (const k of appConfig.noteTypes) {
            obj[k.url] = k.icon as SidebarLink["icon"];
        }
        return obj;
    }, [appConfig]);

    const disabled = useMemo((): boolean => {
        return [
            data.url && data.url.length,
            data.label && data.label.length,
            data.icon && data.icon.length,
        ].some((t) => Boolean(!t));
    }, [data]);

    const urlInputWidth = useElementWidthByRef(urlInputContainer);
    const iconInputWidth = useElementWidthByRef(iconInputContainer);
    const outterContainerWidth = useElementWidthByRef(outterContainer);

    const isWide = outterContainerWidth >= 768;

    const handleAddItem = (parsedData: SidebarLink) => {
        onAddItem(parsedData);
        form.reset();
    };

    return (
        <form
            className={
                "w-full flex flex-col justify-center items-start bg-secondary/20 border rounded p-4"
            }
            ref={outterContainer}
            onSubmit={form.handleSubmit(handleAddItem)}
        >
            <div className={"w-full flex flex-col justify-center items-center gap-4"}>
                <div
                    className={cn(
                        "w-full flex flex-col justify-center items-center gap-4",
                        isWide && "grid grid-cols-[2fr_3fr]",
                    )}
                >
                    <div className={isWide ? "" : "w-full"} ref={iconInputContainer}>
                        <IconInput
                            name="icon"
                            classes={{
                                formItem: isWide ? "" : "w-full",
                                button: "w-full",
                                list: isWide ? "" : "w-full",
                            }}
                            styles={{
                                popoverContent: {
                                    width: `${iconInputWidth ? iconInputWidth : 350}px`,
                                    maxWidth: "calc(100vw - 2rem)",
                                },
                            }}
                            noDrawButtonLabel={false}
                        />
                    </div>
                    <div
                        className={cn("flex-grow", !isWide && "w-full")}
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
                                notFoundText: "text-sm",
                            }}
                            styles={{
                                popoverContent: {
                                    width: `${urlInputWidth}px`,
                                },
                            }}
                            getPlaceHolder={(v) => v.value}
                            onChange={(val) => {
                                let _url = typeof val === "string" ? val : val.value;
                                form.setValue("url", _url);
                                let existingLabel = data.label;
                                if (!superTruthy(existingLabel)) {
                                    form.setValue(
                                        "label",
                                        typeof val === "string" ? undefined : (val as any).label,
                                    );
                                }
                                if (
                                    _url in appConfigIconMap &&
                                    (!superTruthy(data.icon) ||
                                        Object.values(appConfigIconMap).includes(data.icon))
                                ) {
                                    form.setValue("icon", appConfigIconMap[_url]);
                                }
                            }}
                            notFoundText="Nothing was found internally, but any valid URL will work."
                        />
                    </div>
                </div>
                <TextInput
                    name="label"
                    label="Label"
                    classes={{
                        formItem: "w-full",
                        input: "w-full",
                    }}
                />
            </div>
            <div className={"w-full flex flex-row justify-end items-center mt-4"}>
                <Button disabled={disabled} type="submit">
                    Add
                </Button>
            </div>
        </form>
    );
};

AddSidebarLinkForm.displayName = "AddSidebarLinkForm";

export default AddSidebarLinkForm;
