import { useEffect, useState } from "react";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

const useFormPersist = <T extends FieldValues>(form: UseFormReturn<T>, storageKey: string) => {
    const [populated, setPopulated] = useState(false)
    const populateFromStorage = () => {
        if (populated) return
        let d = window.localStorage.getItem(storageKey)
        let data: T | undefined = d ? JSON.parse(d) as T : undefined
        if (data) {
            for (const prop in data) {
                form.setValue(prop as unknown as Path<T>, data[prop])
            }
        }
        setPopulated(true)
    }
    const storeData = (data: T) => {
        window.localStorage.setItem(storageKey, JSON.stringify(data))
    }
    let formState = form.watch()
    useEffect(() => {
        populateFromStorage()
    }, [])

    useEffect(() => {
        storeData(formState)
    }, [formState])

    return {
        resetForm: () => {
            form.reset()
            window.localStorage.removeItem(storageKey)
        }
    }
}
