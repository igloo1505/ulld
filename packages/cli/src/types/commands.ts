import { cliPrimaryCommands, commandCategories } from '../staticData/commandEnums.js';

export type FeatureStatus = 'production' | 'beta' | 'internal' | 'experimental' | "pre-release";

export interface CliCommandFlag {
	flag: string;
	desc: string;
	internal?: boolean;
	status: FeatureStatus;
}

export interface StaticCliCommand {
	flags: CliCommandFlag[];
	/** A short string to be displayed in the ink table. */
	desc: string;
	/** An optional longer markdown string to be displyed using a specific help command. */
	help?: string;
	/** examples should be an array of markdown strings. */
	examples?: string[];
	status: FeatureStatus;
	category: (typeof commandCategories)[number];
	internal?: boolean;
}


export interface StaticCommandData extends Record<typeof cliPrimaryCommands[number], StaticCliCommand> {
}
