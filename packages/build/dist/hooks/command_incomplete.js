import { toConfiguredId, toStandardizedId } from '@oclif/core';
import { select } from '@inquirer/prompts';
const hook = async function ({ config, matches, argv, }) {
    const command = await select({
        message: 'Which of these commands would you like to run?',
        choices: matches.map((p) => toConfiguredId(p.id, config)),
    });
    if (argv.includes('--help') || argv.includes('-h')) {
        return config.runCommand('help', [toStandardizedId(command, config)]);
    }
    return config.runCommand(toStandardizedId(command, config), argv);
};
export default hook;
