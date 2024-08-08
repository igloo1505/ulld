"use client"
import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
export interface EditorModalSyncValueOpts {
    initialValueSource?: "storage" | "value";
}
import { useRouter } from "next/navigation";
import {
    EditorModalConfig,
    getEditorUrl,
} from "@ulld/utilities/pathUtilsClientSide";

export const useEditorModalSyncedValue = (
    localStorageKey: string,
    initialValue: string,
    onChange?: (val: string) => void,
    opts?: EditorModalSyncValueOpts,
) => {
    const [isInitial, setIsInitial] = useState(true);
    const router = useRouter();
    const [internalValue, setInternalValue] = useLocalStorage(
        localStorageKey,
        initialValue,
        {
            initializeWithValue: opts?.initialValueSource === "storage",
        },
    );

    useEffect(() => {
        onChange && onChange(internalValue);
    }, [internalValue]);

    const showEditorModal = (modalConfig: Omit<EditorModalConfig, "contentId">) => {
        router.push(getEditorUrl({
            ...modalConfig,
            language: modalConfig.language || "mdx",
            contentId: localStorageKey
        }));
    };

    useEffect(() => {
        if (!isInitial) return;
        if (initialValue === "storage") {
            onChange && onChange(internalValue);
        } else {
            setInternalValue(initialValue);
        }
        setIsInitial(false);
    }, []);

    return [internalValue, setInternalValue, showEditorModal] as [
        string,
        (s: string) => void,
        (config: Omit<EditorModalConfig, "contentId">) => void,
    ];
};
