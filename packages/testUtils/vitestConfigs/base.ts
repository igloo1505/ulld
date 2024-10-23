import { defineConfig, UserConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export const baseVitestConfig: UserConfig = {
    test: {
        environment: "jsdom",
    },
};
