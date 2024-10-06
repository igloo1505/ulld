import { StaticCommandData } from "../types/commands.js";


// FIXME: Likely won't need to add the flags here, as they'll be handled by pastel.
export const staticCliCommands: StaticCommandData = {
   build: {
		flags: [],
		desc: "Generate a new ULLD application.",
		status: "beta",
		category: "build"
	},
	setJsonSchema: {
		flags: [],
		desc: "Apply a local json-schema to your global appConfig.ulld.json to enable intellisense in most editors.",
		category: "environment",
		status: "experimental"
	}
};
