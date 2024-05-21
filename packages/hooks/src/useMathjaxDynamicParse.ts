import { useEffect } from "react";

declare global {
    interface Window {
        MathJax: any;
    }
}

const checkMath = async () => {
    if (typeof window !== "undefined" && window.MathJax) {
        try {
            await window.MathJax.typesetPromise();
        } catch (e) {
            console.log("MatJax error: " + e);
        }
    }
};

export const useMathjaxDynamicParse = (state: any) => {
    useEffect(() => {
        if (typeof MathJax === "undefined") return;
        checkMath()
        // MathJax?.Hub?.Queue(["Typeset", MathJax.Hub]);
    }, [state]);
};
