import { orderedSections } from "#/types/landingSection"
import { useLandingSection } from "../useSection"

export const useSectionIndex = () => { 
      const section = useLandingSection()
      return {idx: section ? orderedSections.indexOf(section) : -1, section}
}
