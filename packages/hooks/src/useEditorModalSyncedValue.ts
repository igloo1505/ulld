import {useEffect, useState} from "react"
import {useLocalStorage} from "./useLocalStorage"
export interface EditorModalSyncValueOpts {
    initialValueSource?: "storage" | "value";
}

export const useEditorModalSyncedValue = (
    localStorageKey: string,
    initialValue: string,
    onChange?: (val: string) => void,
    opts?: EditorModalSyncValueOpts,
) => { 
    const [isInitial, setIsInitial] = useState(true)
    const [internalValue, setInternalValue] = useLocalStorage(localStorageKey, initialValue, {
        initializeWithValue:  opts?.initialValueSource === "storage"
    })

    useEffect(() => {
       onChange && onChange(internalValue) 
    }, [internalValue])

    useEffect(() => {
        if(!isInitial) return
        if(initialValue === "storage"){
            onChange && onChange(internalValue)
        } else {
            setInternalValue(initialValue)
        }
        setIsInitial(false)
    }, [])

    return [internalValue, setInternalValue] as [string, (s: string) => void]
};
