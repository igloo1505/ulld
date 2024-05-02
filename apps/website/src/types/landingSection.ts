import { allFeatures } from "#/staticData/features/allFeatures"

export type LandingSection = "hero" | "description"


export const landingSectionIndex: {[k in LandingSection]: number} = {
    hero: 0,
    description: 1,
}

export const orderedSections: string[] = [
    "hero",
    ...Array(allFeatures.length).fill(0).map((_, i) => i === 0 ? "description" : `description${i}`),
    "story"
]


export const getLandingSectionClass = (targetSection: LandingSection | "description-any", activeSection: LandingSection | string) => {
    if(targetSection === "description-any"){
    return `landingSection ${activeSection.startsWith("description") ? "landingSection-active" : activeSection === "hero" ? "landingSection-up" : "landingSection-down"}`
    }
    // const idx = landingSectionIndex[activeSection as LandingSection]
    // const targetIdx = landingSectionIndex[targetSection]
    const idx = orderedSections.indexOf(activeSection)
    const targetIdx = orderedSections.indexOf(targetSection)
    return `landingSection ${idx === targetIdx ? "landingSection-active" : idx < targetIdx ? "landingSection-up" : "landingSection-down"}`
}


export const getNewSection = (currentSection: LandingSection | string, dir: "up" | "down") => {
    const foundIdx = orderedSections.indexOf(currentSection)
    if(typeof foundIdx === "number"){
        if(dir === "down"){
            return foundIdx === 0 ? currentSection : orderedSections[foundIdx - 1]
        }

        if(dir === "up"){
            return foundIdx === orderedSections.length - 1 ? currentSection : orderedSections[foundIdx + 1]
        }
    }
    let _idx = currentSection === "hero" ? 0 : currentSection === "description" ? 1 : currentSection.startsWith("description") ? parseInt(currentSection.split("description")[1]) + 1 : -1
    let newIndex = _idx + (dir === "up" ? 1 : -1)
    return newIndex <= 0 ? "hero" : newIndex === 1 ? "description" : `description${Math.max(Math.min(newIndex - 1, allFeatures.length - 1), 1)}`
}
