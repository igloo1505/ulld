import { geoDataMap } from "#/components/three/blob/utils";
import { LandingSection, getLandingSectionClass } from "#/types/landingSection";
import { useThree } from "@react-three/fiber";
import { useViewport } from "@ulld/hooks/useViewport";
import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useLandingSection = () => {
    const sp = useSearchParams();
    const pn = usePathname();
    const section = useMemo(() => {
        let sec = sp.get("section") as LandingSection;
        if (sec) {
            return sec;
        }
        if (pn === "/") {
            return "hero";
        }
    }, [sp, pn]);
    return section;
};

export const useSection = (targetSection: LandingSection) => {
    const section = useLandingSection();
    const viewport = useViewport();
    const three = useThree();
    return {
        active: section,
        className: getLandingSectionClass(targetSection, section),
        geoData: section ? geoDataMap[section](viewport, three) : undefined,
        three: three,
        viewport: viewport,
    };
};

export const useSectionClasses = (targetSection: LandingSection) => {
    const sp = useSearchParams();
    return getLandingSectionClass(
        targetSection,
        (sp.get("section") as LandingSection) || ("hero" as "hero"),
    );
};
