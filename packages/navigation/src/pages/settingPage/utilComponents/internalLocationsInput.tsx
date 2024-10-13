import React, { RefObject, useMemo } from "react";
import { SidebarLink } from "../form/schema";
import { NavLinkType, superTruthy } from "../form/utils";
import {
    InternalLocationsCombobox,
    InternalLocationsComboboxProps,
} from "@ulld/full-form/combobox-internalLocations";
import { useFormContext } from "@ulld/full-form/form";
import { internalAppLocations } from "@ulld/utilities/appData";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { useElementWidthByRef } from "@ulld/hooks/useElementWidthByRef";
import { internalGlobalActionMap } from "@ulld/state/globalActionsMap";

interface InternalLocationsInputWrapperProps<T extends NavLinkType>
    extends Partial<InternalLocationsComboboxProps<T>> {
    data: T;
    inputContainer: RefObject<HTMLElement>;
}

const InternalLocationsInputWrapper = <T extends NavLinkType>({
    data,
    inputContainer,
    ...props
}: InternalLocationsInputWrapperProps<T>) => {
    const form = useFormContext<NavLinkType>();
    const [appConfig] = useAppConfig();
    const appConfigIconMap = useMemo(() => {
        let obj: Record<string, SidebarLink["icon"]> = {};
        for (const x of internalAppLocations) {
            obj[x.url] = x.defaultIcon;
        }
        for (const l in internalGlobalActionMap) {
            let _icon = internalGlobalActionMap[l].defaultIcon;
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

    const locationIsAction = data.fieldType === "action";

    return (
        <InternalLocationsCombobox
            {...props}
            name={locationIsAction ? "action" : "url"}
            label="Url"
            placeholder={
                "url" in data
                    ? superTruthy(data.url)
                        ? data.url
                        : undefined
                    : superTruthy(data.action)
                        ? data.action
                        : undefined
            }
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
            getPlaceHolder={(v) => {
                return v.type === "action" ? v.label : v.value;
            }}
            onChange={(val) => {
                let fieldKey: "url" | "action" =
                    val.type === "action" ? "action" : "url";
                let _url = typeof val === "string" ? val : val.value;
                form.setValue(fieldKey, _url);
                form.setValue("fieldType", fieldKey);
                form.setValue(fieldKey === "url" ? "action" : "url", "");
                let existingLabel = data.label;
                if (!superTruthy(existingLabel) || typeof val !== "string") {
                    form.setValue(
                        "label",
                        typeof val === "string" ? undefined : (val as any).label,
                    );
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
            notFoundText="Nothing was found internally, but any valid URL will work."
        />
    );
};

InternalLocationsInputWrapper.displayName = "InternalLocationsInputWrapper";

export default InternalLocationsInputWrapper;
