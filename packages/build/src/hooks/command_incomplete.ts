import { Hook, toConfiguredId, toStandardizedId } from '@oclif/core';
import { select } from '@inquirer/prompts';

const hook: Hook.CommandIncomplete = async function ({
  config,
  matches,
  argv,
}) {
  const command: any = await select({
    message: 'Which of these commands would you like to run?',
    choices: matches.map((p) => toConfiguredId(p.id, config)) as any,
  });

  if (argv.includes('--help') || argv.includes('-h')) {
    return config.runCommand('help', [toStandardizedId(command, config)]);
  }

  return config.runCommand(toStandardizedId(command, config), argv);
};

export default hook;
