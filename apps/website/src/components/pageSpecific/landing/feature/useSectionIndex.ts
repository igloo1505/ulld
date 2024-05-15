import store, { RootState } from "#/state/store";
import { orderedSections } from "#/types/landingSection";
import { useEffect, useMemo, useState } from "react";

export const useGlobalLandingSectionState = () => {
  const [landingSection, setLandingSection] = useState("hero");
  const watchState = () => {
    let state = store.getState() as RootState;
    if (state.core.landingSection !== landingSection) {
      setLandingSection(state.core.landingSection);
    }
  };
  useEffect(() => {
    let unsub = store.subscribe(watchState);
    return () => unsub();
  }, []);
  return landingSection;
};

export const useSectionIndex = () => {
  const section = useGlobalLandingSectionState();
    console.log(`Section in useSectionIndex ${section}`)
  const sectionData = useMemo(() => {
    return { idx: section ? orderedSections.indexOf(section) : -1, section };
  }, [section]);
    console.log("sectionData: ", sectionData)
  return sectionData;
};
