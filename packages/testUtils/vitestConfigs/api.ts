import { UserConfig } from "vitest/config";

export const vitestConfig: UserConfig = {
    // plugins: [react()],
    test: {
        environment: "node",
    },
};
