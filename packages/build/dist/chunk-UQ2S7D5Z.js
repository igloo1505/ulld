import {
  modifyNameRandomly
} from "./chunk-XLL2B65U.js";
import {
  slotMapIsFull
} from "./chunk-ZHNLHQ5Z.js";
import {
  getInternalTailwindSources
} from "./chunk-HKLU6OCR.js";
import {
  SlotConflict
} from "./chunk-KBDYZAWE.js";
import {
  PageConflict
} from "./chunk-RZQAGGNF.js";
import {
  TargetPaths
} from "./chunk-OHKIUAFP.js";
import {
  UlldPlugin
} from "./chunk-NNNZ3I2V.js";
import {
  DatabaseBuildManager
} from "./chunk-IKRHSGEA.js";
import {
  EnvManager
} from "./chunk-CSBUTTIG.js";
import {
  BuildHealthCheck
} from "./chunk-YLEMUZ6G.js";
import {
  generateSlotMapOfType
} from "./chunk-UKBHOD7Z.js";
import {
  AdditionalSources
} from "./chunk-AUQC7LSU.js";
import {
  UlldAppConfigManager
} from "./chunk-IQGNQK5Q.js";
import {
  TargetPackageJson
} from "./chunk-HWOJFZWI.js";
import {
  Prompter
} from "./chunk-NL3L2LIO.js";
import {
  GitManager
} from "./chunk-UICSY6NG.js";
import {
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/classes/build.ts
init_esm_shims();
import chalk from "chalk";
import path from "path";
import enq from "enquirer";
import { appData } from "@ulld/utilities/appData";
import terminalLink from "terminal-link";
import { log } from "console";
var { prompt } = enq;
var UlldBuildProcess = class extends Prompter {
  constructor(targetDir, branch = "main") {
    super(targetDir, branch);
    this.targetDir = targetDir;
    this.branch = branch;
    this.git = new GitManager(targetDir, this.branch);
    this.isLocalDev = process.env.LOCAL_DEVELOPMENT === "true";
    this.applicationDir = path.join(
      targetDir,
      appData.templateRepo.buildDirName
    );
    this.paths = new TargetPaths(this.applicationDir, this.isLocalDev);
    this.env = new EnvManager(this.paths);
    this.health = new BuildHealthCheck(this.paths, this.env);
    this.db = new DatabaseBuildManager(this.paths, this.env, this.health);
    this.packageJson = new TargetPackageJson(
      this.applicationDir,
      this.isLocalDev,
      this.branch
    );
    let additionalSources = new AdditionalSources(this.paths);
    let globalAppConfig = additionalSources.getAppConfig();
    this.appConfig = globalAppConfig || new UlldAppConfigManager(
      this.applicationDir,
      this.isLocalDev,
      this.paths
    );
    this.appConfig.gather();
    this.gatherSlotConflicts();
    this.gatherPageConflicts();
    this.noteTypes = this.appConfig.getNoteTypes();
  }
  plugins = [];
  noteTypes = [];
  env;
  health;
  appConfig;
  paths;
  applicationDir;
  packageJson;
  isLocalDev;
  db;
  packageManager = "pnpm";
  slotConflicts = [];
  pageConflicts = [];
  git;
  componentImportMap = {};
  alreadyProvidedPackageManager = false;
  /** Returns true if a project exists at the targetDir and if that project is a ULLD app. */
  projectExists() {
    if (this.paths.targetDirExists() && this.packageJson.exists()) {
      this.packageJson.gather();
      return this.packageJson.includesUlldDependencies();
    }
    return false;
  }
  validateImportName(plugin) {
    if (plugin.formattedImportName in this.componentImportMap) {
      plugin.formattedImportName = modifyNameRandomly(
        plugin.formattedImportName,
        plugin.haveModifiedImportName
      );
      return this.validateImportName(plugin);
    } else {
      this.componentImportMap[plugin.formattedImportName] = true;
    }
  }
  validateImportNames() {
    this.getFlattenedComponents().forEach((c) => this.validateImportName(c));
    this.getFlattenedPages().forEach((p) => this.validateImportName(p));
  }
  async gatherPlugins() {
    this.log(
      `Gathering ${chalk.hex("#0ba5e9")("U")}LLD plugins from your appConfig...`
    );
    if (!this.appConfig.config) {
      this.logError("No appConfig was found. Can not continue.");
      throw new Error(
        `No app configuration was found during the gatherPlugins phase.`
      );
    }
    let newPlugins = [];
    let fromConfigPlugins = this.appConfig.config?.plugins?.map(
      (c) => new UlldPlugin(this.paths, c.name, c.version, this.branch)
    ) || [];
    this.logVerbose(
      `Found ${fromConfigPlugins.length} plugin${fromConfigPlugins.length > 1 ? "s" : ""} in your config.`
    );
    for (const k in this.appConfig.config.slots) {
      let newSlot = this.appConfig.config.slots[k];
      if (Array.isArray(newSlot)) {
        for (const l of newSlot) {
          newPlugins.push(
            new UlldPlugin(this.paths, l.name, l.version, this.branch)
          );
        }
      } else {
        this.logDebug(`Found a slot that was not added to plugins:
${JSON.stringify(k, null, 4)}
`);
      }
    }
    this.plugins = [...newPlugins, ...fromConfigPlugins];
    this.log(`Found ${this.plugins.length} plugins:`);
    for (const k of this.plugins) {
      this.log(k.name);
    }
    this.applyPluginsToPackageJson();
    this.packageJson.write(this.packageManager);
  }
  applyPluginsToPackageJson() {
    this.log(
      `Generating a package.json file specific to your configuration...`
    );
    let pkg = this.packageJson.data;
    if (!pkg) {
      process.exit(`UNDEFINED_PKG_DATA

It's not you it's me. Something broked.
`);
    }
    let hasNew = false;
    for (const k of this.plugins) {
      let pkgRes = k.applyDependency(pkg);
      pkg = pkgRes.pkg;
      if (pkgRes.isNew && !hasNew) {
        hasNew = true;
      }
    }
    this.packageJson.data = pkg;
  }
  async gatherAppConfig() {
    if (!this.appConfig.exists) {
      const shouldContinue = await prompt({
        type: "confirm",
        name: "addedConfig",
        initial: true,
        message: `We couldn't find a configuration file in either your app's
directory or through the ULLD_APP_CONFIG environment variable. 
Drop a configuration file in the app directory now at
${this.applicationDir}
and continue when that file is in place.`
      });
      if ("addedConfig" in shouldContinue && shouldContinue.addedConfig) {
        let nowValid = this.appConfig.checkDirectoryConfig();
        if (!nowValid) {
          log(
            "We still can't find your config. Please look over the docs " + terminalLink("here", "https://uhlittlelessdum.com/docs/user")
          );
          process.exit(1);
        }
      }
    }
    this.appConfig.gather();
  }
  async checkPluginValidity() {
    this.log(`Checking to make sure plugins provided are valid...`);
    let invalidPlugins = [];
    for (const k of this.plugins) {
      if (!k.isValid()) {
        invalidPlugins.push(k);
      }
    }
    if (invalidPlugins.length) {
      let shouldContinue = await this.confirmContinueWithInvalidPlugins(invalidPlugins);
      if (!shouldContinue) {
        this.kBye();
      }
    }
  }
  getAllSlots() {
    if (!this.plugins)
      return [];
    return this.plugins.filter((f) => f.slot).map((f) => f.slot);
  }
  async gatherPageConflicts() {
    let pageMap = {};
    for (const p of this.plugins) {
      for (const k of p.pages) {
        if (k.data.targetUrl) {
          if (!pageMap[k.data.targetUrl]) {
            pageMap[k.data.targetUrl] = [];
          }
          pageMap[k.data.targetUrl].push(k);
        }
      }
    }
    for (const l in pageMap) {
      if (pageMap[l].length > 1) {
        this.pageConflicts.push(new PageConflict(l, pageMap[l]));
      }
    }
  }
  applyPackageManagerOptions(opts) {
    if (opts.npm) {
      this.packageManager = "npm";
      this.alreadyProvidedPackageManager = true;
    }
    if (opts.pnpm) {
      this.packageManager = "pnpm";
      this.alreadyProvidedPackageManager = true;
    }
    if (opts.yarn) {
      this.packageManager = "yarn";
      this.alreadyProvidedPackageManager = true;
    }
  }
  async resolvePageConflicts() {
    if (this.slotConflicts.length > 0) {
      await this.getPagePreferences(this.pageConflicts);
      this.removePageConflicts();
    } else {
      this.log(
        this.slotConflicts.length === 0 ? `More great news! No page conflicts were found either!` : `Good news! No page conflicts were found.`
      );
    }
  }
  getFlatComponentDocs() {
    let docs = [];
    for (const k of this.plugins) {
      for (const p of k.components) {
        if (p.hasDocsData) {
          docs.push({
            pluginName: p.pluginName,
            componentName: p.data.componentName,
            componentId: p.data.componentId,
            tags: p.data.tags,
            embeddableSyntax: p.data.embeddable?.map((e) => e.regexToInclude) || [],
            urls: {
              short: p.data.docsExport ? `/componentDocs/${encodeURI(p.pluginName)}/${encodeURI(p.data.componentName)}?full=false` : void 0,
              full: p.data.fullDocsExport ? `/componentDocs/${encodeURI(p.pluginName)}/${encodeURI(p.data.componentName)}?full=true` : void 0
            },
            filePaths: {
              short: p.getOutputFilePath("short"),
              full: p.getOutputFilePath("full")
            }
          });
        }
      }
    }
    return docs;
  }
  getFlatNavigationLinks() {
    let data = [];
    for (const k of this.plugins) {
      if (k.pluginConfig !== "Unusable" && k.pluginConfig.navigationLinks) {
        data = data.concat(k.pluginConfig.navigationLinks);
      }
    }
    return data;
  }
  getFlatPluginSettingPages() {
    let data = [];
    for (const k of this.plugins) {
      if (k.settingsPage) {
        data.push(k.settingsPage.settingsPageData);
      }
    }
    return data;
  }
  gatherSlotConflicts() {
    let slotMap = {};
    let p = this.plugins.filter((f) => f.slot);
    for (const plugin of p) {
      for (const component of plugin.components) {
        if (component.subSlot) {
          if (!slotMap[component.subSlot.parentSlot]) {
            slotMap[component.subSlot.parentSlot] = {};
          }
          if (!slotMap[component.subSlot.parentSlot][component.subSlot.subSlot]) {
            slotMap[component.subSlot.parentSlot][component.subSlot.subSlot] = [];
          }
          slotMap[component.subSlot.parentSlot][component.subSlot.subSlot].push(
            component.subSlot
          );
        }
      }
    }
    for (const w in slotMap) {
      for (const z in slotMap[w]) {
        if (slotMap[w][z].length > 1) {
          this.slotConflicts.push(
            new SlotConflict(
              w,
              z,
              slotMap[w][z]
            )
          );
        }
      }
    }
  }
  removeSlotConflicts() {
    this.plugins.forEach((p) => p.removeRejectedSlots());
  }
  removePageConflicts() {
    for (const k of this.plugins) {
      k.removeUnusedPages();
    }
  }
  async resolveSlotConflicts() {
    if (this.slotConflicts.length > 0) {
      await this.getSlotPreferences(this.slotConflicts);
      this.removeSlotConflicts();
    } else {
      this.log(`Great news! No slot conflicts were found.`);
    }
  }
  async createBaseProject() {
    let exists = this.projectExists();
    let success = false;
    if (!exists) {
      success = await this.clone();
    } else {
      success = await this.gitPull();
    }
    if (success) {
      this.log(`We have a baseline ${this.ulld()} app now!`);
    }
    return success;
  }
  removeUnusablePlugins() {
    let pluginData = {
      usable: [],
      unusable: []
    };
    for (const k of this.plugins) {
      pluginData[k.pluginConfig === "Unusable" ? "unusable" : "usable"].push(k);
    }
    if (pluginData.unusable.length === 0) {
      this.log(
        `Checked for issues with your plugins and found none! Continuing with the build process.`
      );
    } else {
      for (const l of pluginData.unusable) {
        this.log(`Removing unsable plugin ${l.name}`);
      }
    }
    this.plugins = pluginData.usable;
  }
  convertSlotsToPlugins() {
    let slots = this.appConfig.config?.slots;
    if (!slots)
      return;
    let currentPluginNames = this.plugins.map((p) => p.name);
    for (const slotKey in slots) {
      let itemData = slots[slotKey];
      if (Array.isArray(itemData)) {
        for (const slotItem of itemData) {
          if (!currentPluginNames.includes(slotItem.name)) {
            this.plugins.push(
              new UlldPlugin(
                this.paths,
                slotItem.name,
                slotItem.version,
                this.branch
              )
            );
            currentPluginNames.push(slotItem.name);
          }
        }
      }
    }
  }
  getComponentSlotMap() {
    let slotComponents = this.getSlotComponents();
    let slotPages = this.getSlotPages();
    let slotComponentMap = generateSlotMapOfType((slotKey, subSlotKey) => {
      let slotPage = slotPages.find(
        (f) => f.subSlotKey === subSlotKey && f.parentSlotKey === slotKey
      );
      if (slotPage) {
        return slotPage;
      }
      return slotComponents.find(
        (f) => f.slotKey === slotKey && f.subSlotKey === subSlotKey
      ) || false;
    });
    let fullSlotMap = slotMapIsFull(slotComponentMap);
    if (!fullSlotMap.passed) {
      this.logDebug(`Your slot map is incomplete! You're missing the following slots:

${fullSlotMap.missingItems.map((k, i) => `${i + 1}. ${k.slot} -> ${k.subSlot}`).join("\n")}`);
    }
    return slotComponentMap;
  }
  getSlotComponents() {
    let slotComponents = [];
    for (const k of this.plugins) {
      for (const l of k.components) {
        if (l.subSlot) {
          slotComponents.push(l);
        }
      }
    }
    return slotComponents;
  }
  getSlotPages() {
    let data = [];
    for (const k of this.plugins) {
      for (const l of k.pages) {
        if (l.data.slot) {
          data.push(l);
        }
      }
    }
    return data;
  }
  getFlattenedPages() {
    let d = [];
    for (const k of this.plugins) {
      d = d.concat(k.pages);
    }
    return d;
  }
  getFlattenedComponents() {
    let d = [];
    for (const k of this.plugins) {
      d = d.concat(k.components);
    }
    return d;
  }
  async applyPages() {
    for await (const k of this.plugins) {
      this.logError(
        `Attempting to apply extra pages. This method is not yet handled. If you are a user, send me a strongly worded email about this...`
      );
    }
  }
  getTailwindSources() {
    let items = getInternalTailwindSources();
    let additionalItems = this.plugins.filter((f) => f.includeInTailwindSources).map((p) => `./node_modules/${p.name}/src/**/*.{js,ts,jsx,tsx,mdx}`);
    for (const k of additionalItems) {
      if (!items.includes(k)) {
        items.push(k);
      }
    }
    return items;
  }
  revalidatePluginConfigs() {
    for (const plugin of this.plugins) {
      plugin.gatherConfig();
    }
  }
  getPackagesToTranspile() {
    return this.plugins.map((p) => p.name);
  }
};

export {
  UlldBuildProcess
};
//# sourceMappingURL=chunk-UQ2S7D5Z.js.map