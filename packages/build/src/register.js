#!/usr/bin/env node

require("dotenv").config()
const commander = require("commander")

commander.program
    .option(optionMap.here)
    .option(optionMap.useLocal)
    .option(optionMap.forceLocalSource)
    .option(optionMap.pnpm)
    .option(optionMap.npm)
    .option(optionMap.yarn)
    .option(optionMap.genDatabase)
    .option(stringOptionMap.branch, "Branch to clone", "main")
// option("--noPlugins")
// .option("--from-install")

commander.program.parse();

const opts = commander.program.opts()

require("./main").runBuild(opts)
