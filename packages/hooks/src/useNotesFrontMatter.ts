import { FrontMatterType } from "@ulld/types";
import { useLocalStorage } from "./useLocalStorage";

export const useFrontMatter = (DO_NOT_PROVIDE_INITIAL_FRONT_MATTER?: FrontMatterType) => {
    return useLocalStorage("front-matter", DO_NOT_PROVIDE_INITIAL_FRONT_MATTER)
}
