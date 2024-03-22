import { useDebounceCallback } from "./useDebounceCallback";
import { useState } from "react";

export const useDebounceParse = (
    debounceTimeout: number = 300,
    parser: (s: string) => Promise<string>,
    initialValue: string = "",
) => {
    const [hasParsed, setHasParsed] = useState(false);
    const [value, setValue] = useState(initialValue);
    useDebounceCallback(async () => {
        let newValue = await parser(value);
        setValue(newValue);
        if (!hasParsed) {
            setHasParsed(true);
        }
    }, debounceTimeout);

    return {
        value,
        setValue,
        hasParsed,
    };
};
