export type LandingSection = "hero" | "description"


export const landingSectionIndex: {[k in LandingSection]: number} = {
    hero: 0,
    description: 1
}


export const getLandingSectionClass = (targetSection: LandingSection, activeSession: LandingSection) => {
    const idx = landingSectionIndex[activeSession]
    const targetIdx = landingSectionIndex[targetSection]
    return `landingSection ${idx === targetIdx ? "landingSection-active" : idx < targetIdx ? "landingSection-up" : "landingSection-down"}`
}


export const getNewSection = (currentSection: LandingSection, dir: "up" | "down") => {
    console.log("currentSection: ", currentSection)
    let newIndex = landingSectionIndex[currentSection] + (dir === "up" ? 1 : -1)
    console.log("newIndex: ", newIndex)
    if(newIndex < 0) return false
    const keys = Object.keys(landingSectionIndex)
    return newIndex <= keys.length - 1 ? keys[newIndex] as LandingSection : false
}
