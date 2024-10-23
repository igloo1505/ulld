import { UserConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export const baseVitestConfig: UserConfig = {
    plugins: [react()],
    test: {
        environment: "jsdom",
    },
};
