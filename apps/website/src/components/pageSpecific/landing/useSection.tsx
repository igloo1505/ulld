import { LandingSection, getLandingSectionClass } from "#/types/landingSection";
import { useSearchParams } from "next/navigation";

const animationDelay: {[k in LandingSection]: number} = {
    hero: 0,
    description: 500
}

export const useSection = (targetSection: LandingSection) => {
    const sp = useSearchParams()
    const section = sp.get("section") as LandingSection || "hero" as "hero"
    return {
        active: section,
        className: getLandingSectionClass(targetSection, section)
    }
}
