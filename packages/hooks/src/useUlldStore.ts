import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { useEffect, useState } from "react";

declare global {
    interface Window {
        ulldStore: ToolkitStore;
    }
}

export const useUlldStore = () => {
    const [store, setStore] = useState<ToolkitStore | null>(null);
    useEffect(() => {
        if (typeof window === "undefined") return;
        let s = window.ulldStore;
        if(s) {
            setStore(s)
        }
    }, []);
    return store
};
