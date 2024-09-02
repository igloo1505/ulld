import { Command, Args, Config, Flags } from "@oclif/core";
import { BuildOptionsType } from "../utils/options.js";
import { runUlldBuild } from "../main.js";

export default class BuildUlldApp extends Command {
    static state: "beta";
    // static summary = "Builds a complete ULLD app from scratch.";
    static description = "Builds a complete ULLD app from scratch.";
    static help = `This command builds a complete ULLD application from scratch. If you're trying to rebuild an existing app, use the *rebuild* command.`;
    static strict = false;
    static flags = {
        useLocal: Flags.boolean({
            hidden: true,
            description: "Use local sources during internal development",
            default: false,
        }),
        here: Flags.boolean({
            description: "Skip location selection prompt and use cwd.",
            default: false,
        }),
        forceLocalSource: Flags.boolean({
            hidden: true,
            default: false,
        }),
        npm: Flags.boolean({
            description: "Skip package manager selection and use npm",
            default: false,
        }),
        pnpm: Flags.boolean({
            description: "Skip package manager selection and use pnpm",
            default: false,
        }),
        yarn: Flags.boolean({
            description: "Skip package manager selection and use yarn",
            default: false,
        }),
        clean: Flags.boolean({
            description: "Remove existing build and start from scratch.",
            aliases: ["fresh"],
            summary:
                "This command will remove an existing build if one exists, and set the output path to the path of the existing build.",
        }),
        genDatabase: Flags.boolean({
            description: "Generate initial database structure during build.",
            aliases: ["migrate"],
            summary:
                "This command should only be used when generating a ULLD app against an empty database unless otherwise indicated by a specific release's documentation.",
        }),
    } satisfies Record<keyof Omit<BuildOptionsType, "branch">, any>;
    static args = {
        branch: Args.string({
            description: "Base app branch to clone.",
            required: false,
            default: "main",
        }),
    };
    static examples: Command.Example[] = [
        {
            command: "ulld build --genDatabase",
            description: `If you're running this command against a new database, use the genDatabase flag to apply the proper database structure. Be careful though, running the build command with this flag against an existing database could cause the loss of some or all of your data.`,
        },
        {
            command: "ulld --here",
            description: `Skip the prompts for the target directory and use the current working directory.`,
        },
        {
            command: "ulld --<Package Manager>",
            description: `Skip the prompt for your package manager of choice, and use one of 'pnpm', 'npm' or 'yarn'.`,
        },
    ];

    constructor(argv: string[], config: Config) {
        super(argv, config);
    }

    async run(): Promise<void> {
        const { args, flags } = await this.parse(BuildUlldApp);
        await runUlldBuild(flags, args);
    }
}
