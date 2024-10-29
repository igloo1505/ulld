import {
    initialSeedData,
    type InitialSeedData,
} from "@ulld/utilities/initialSeedData";
import { seedNavigationSettings } from "./seedFunctions/seedNavigationSettings";

export const seedInitialData = async (
    props: InitialSeedData = initialSeedData,
): Promise<void> => {
    await seedNavigationSettings(props);
};
