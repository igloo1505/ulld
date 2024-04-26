import { allFeatures } from "#/staticData/features/allFeatures"

export type LandingSection = "hero" | "description"


export const landingSectionIndex: {[k in LandingSection]: number} = {
    hero: 0,
    description: 1,
}


export const getLandingSectionClass = (targetSection: LandingSection | "description-any", activeSection: LandingSection | string) => {
    if(targetSection === "description-any"){
    return `landingSection ${activeSection.startsWith("description") ? "landingSection-active" : activeSection === "hero" ? "landingSection-up" : "landingSection-down"}`
    }
    const idx = landingSectionIndex[activeSection as LandingSection]
    const targetIdx = landingSectionIndex[targetSection]
    return `landingSection ${idx === targetIdx ? "landingSection-active" : idx < targetIdx ? "landingSection-up" : "landingSection-down"}`
}


export const getNewSection = (currentSection: LandingSection | string, dir: "up" | "down") => {
    let _idx = currentSection === "hero" ? 0 : currentSection === "description" ? 1 : currentSection.startsWith("description") ? parseInt(currentSection.split("description")[1]) + 1 : -1
    let newIndex = _idx + (dir === "up" ? 1 : -1)
    return newIndex <= 0 ? "hero" : newIndex === 1 ? "description" : `description${Math.max(Math.min(newIndex - 1, allFeatures.length - 1), 1)}`
}
