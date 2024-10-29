import {
    InternalLocationsCombobox,
    type InternalLocationsComboboxProps,
} from "@ulld/full-form/combobox-internalLocations";
import { useFormContext } from "@ulld/full-form/form";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { useElementWidthByRef } from "@ulld/hooks/useElementWidthByRef";
import { internalGlobalActionMap } from "@ulld/state/globalActionsMap";
import { internalAppLocations } from "@ulld/utilities/internalAppLocations";
import React, { type ReactNode, type RefObject, useMemo } from "react";
import type { SidebarLink } from "../form/schema";
import { type NavLinkType, superTruthy } from "../form/utils";
import { InternalGlobalActionIds } from "@ulld/types";

interface InternalLocationsInputWrapperProps<T extends NavLinkType>
    extends Partial<InternalLocationsComboboxProps<T>> {
    data: T;
    inputContainer: RefObject<HTMLElement>;
}

const InternalLocationsInputWrapper = <T extends NavLinkType>({
    data,
    inputContainer,
    ...props
}: InternalLocationsInputWrapperProps<T>): ReactNode => {
    const form = useFormContext<NavLinkType>();
    const [appConfig] = useAppConfig();
    const appConfigIconMap = useMemo(() => {
        const obj: Record<string, SidebarLink["icon"]> = {};
        for (const x of internalAppLocations) {
            obj[x.url] = x.defaultIcon;
        }
        for (const l in internalGlobalActionMap) {
            const _icon = internalGlobalActionMap[l as InternalGlobalActionIds].defaultIcon;
            if (_icon) {
                obj[l] = _icon;
            }
        }
        if (!appConfig) {
            return obj;
        }
        for (const k of appConfig.noteTypes) {
            obj[k.url] = k.icon as SidebarLink["icon"];
        }
        return obj;
    }, [appConfig]);

    const urlInputWidth = useElementWidthByRef(inputContainer);

    const formData = form.watch()

    return (
        <InternalLocationsCombobox
            {...props}
            classes={{
                formItem: "w-full",
                button: "w-full",
                commandList: "w-full",
                notFoundText: "text-sm",
            }}
            label="Url"
            name="value"
            notFoundText="Nothing was found internally, but any valid URL will work."
            onChange={(val) => {
                const _url = typeof val === "string" ? val : val.value;
                form.setValue("value", _url);
                form.setValue("fieldType", val.type);
                const existingLabel = data.label;
                if (
                    !superTruthy(existingLabel) ||
                    (typeof val !== "string" && val.label !== "")
                ) {
                    form.setValue("label", typeof val === "string" ? "" : val.label);
                }
                if (
                    "icon" in data &&
                    _url in appConfigIconMap &&
                    (!superTruthy(data.icon) ||
                        Object.values(appConfigIconMap).includes(data.icon))
                ) {
                    form.setValue("icon", appConfigIconMap[_url]);
                }
            }}
            placeholder={superTruthy(formData.value) ? formData.value : undefined}
            styles={{
                popoverContent: {
                    width: `${urlInputWidth}px`,
                },
            }}
        />
    );
};

InternalLocationsInputWrapper.displayName = "InternalLocationsInputWrapper";

export default InternalLocationsInputWrapper;
