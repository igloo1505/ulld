import { useEffect, useState } from "react";
import { FeatureUIStage } from "./types";
import { useLandingSection } from "../useSection";

export const useFeatureUIStage = (sectionName: string | null, idx: number) => {
    const section = useLandingSection() as string;
    const [stage, setStage] = useState<FeatureUIStage>("hidden");
    useEffect(() => {
        if (section === "hero" || !section) {
            return setStage("hidden");
        }
        if (section === "description") {
            return setStage(idx === 0 ? "current" : "hidden");
        }
        if(section === "story"){
            return setStage(sectionName === "story" ? "current" : "hidden")
        }
        if (!section.startsWith("description")) return;
        let descIdx = parseInt(section.split("description")[1]);
        setStage(idx === descIdx ? "current" : descIdx > idx ? "hidden" : "past");
    }, [section]);
    return { stage, section };
};
