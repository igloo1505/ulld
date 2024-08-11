import { useState } from "react"
import { useEventListener } from "./useEventListener"

export interface FilePathInputModalConfig {
    glob?: string
    ignore?: string | string[] | null
    label: string
}

interface EventProps {
    config: FilePathInputModalConfig | null
    inputId: string | number
}

declare global {
    // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
    interface WindowEventMap {
        "show-file-path-input-modal": CustomEvent<EventProps>;
        "path-input-value-update": CustomEvent<{
            inputId: string | number
            value: string | null
        }>;
    }
}


export const useFilePathInputModal = (id: string | number, initialValue?: string) => {
    const [value, setValue] = useState(initialValue)

    return {
        value,
        setValue,
        show: (config: FilePathInputModalConfig | null) => window.dispatchEvent(new CustomEvent("show-file-path-input-modal", {
            detail: {
                config: config,
                inputId: id
            }
        }))
    }
}


export const useFilePathInputModalState = (id: string | number) => {
    const [config, setConfig] = useState<null | FilePathInputModalConfig>(null)

    useEventListener("show-file-path-input-modal", (e) => {
        if (e.detail.inputId === id) {
            setConfig(e.detail.config || null)
        }
    })

    return {
        config,
        setConfig,
        close: () => setConfig(null),
        updateValue: (newValue: string | null) => window.dispatchEvent(new CustomEvent("path-input-value-update", {
            detail: {
                inputId: id,
                value: newValue
            }
        }))
    }

}
