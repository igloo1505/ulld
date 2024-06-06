import { useEffect } from "react";

declare global {
    interface Window {
        MathJax: any;
    }
  interface WindowEventMap {
    'mathjax-loaded': CustomEvent
  }
}



const checkMath = async () => {
    if (typeof window !== "undefined" && window.MathJax) {
        try {
        // MathJax?.Hub?.Queue(["Typeset", MathJax.Hub]);
            return await window.MathJax.typesetPromise();
        } catch (e) {
            console.log("MatJax error: " + e);
        }
    }
};

export const useMathjaxDynamicParse = (state: any) => {
    const handleMath = async () => {
           let res = await checkMath() 
           if(res){
            window.dispatchEvent(new CustomEvent("mathjax-loaded"))
        }
        }
    useEffect(() => {
        // if (typeof MathJax === "undefined") return;
        handleMath()
    }, [state]);
};
