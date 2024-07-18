import { useMemo } from "react";
import AdditionalBuildSourceFileTree from "./additionalBuildSourceFileTree";
import staticData from "@ulld/utilities/buildStaticData"
import { FilePathItem } from "@ulld/utilities/additionalSources";

export const ReservedPublicFileTree = () => {
       const item = useMemo(() => {
        let d: FilePathItem = {
            subPath: "public",
            items: staticData.reservedPublicDirs.map((t) => ({
                subPath: t,
                forceDirDisplay: true
            }))
        }
        return d
    }, [])
        return (
        <AdditionalBuildSourceFileTree
            item={item}
        />
        )
    }
