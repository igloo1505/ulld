import { TargetPaths } from "./paths.js";
import {
  type FileItemWithRootGlob,
  getFlattenedFileItems,
} from "@ulld/utilities/additionalSources";
import { globSync } from "glob";
import buildData from "@ulld/utilities/buildStaticData.json" with {type: "json"};
import fs from "fs";
import path from "path";
import { FileManager } from "./baseClasses/fileManager.js";
import { UlldGlob } from "@ulld/utilities/glob";
import { UlldAppConfigManager } from "./appConfig.js";

interface FoundItem extends FileItemWithRootGlob {
  filePath: string;
  type: "file";
}

interface FoundDirContent extends FileItemWithRootGlob {
  dirPath: string;
  childPaths: string[];
  type: "dir";
}

type FoundVal = FoundItem | FoundDirContent;

type ItemData = {
  /** Absolute path */
  input: string;
  /** Absolute path */
  output: string;
};

export class AdditionalSources {
  sourcesDir?: string;
  allowedRootDirItems: FileItemWithRootGlob[];
  hasContent: boolean = false;
  appendedCssPaths: string[] = [];
  constructor(public paths: TargetPaths) {
    this.sourcesDir = process.env.ULLD_ADDITIONAL_SOURCES;
    this.hasContent = Boolean(this.sourcesDir);
    this.allowedRootDirItems = getFlattenedFileItems();
  }
  getAppConfig() {
    if (!this.hasContent || !this.sourcesDir) {
      return;
    }
    let file = FileManager.fromAbsolutePath(
      path.join(this.sourcesDir, "appConfig.ulld.json"),
      this.paths,
      false,
    );
    if (file.exists()) {
      return new UlldAppConfigManager(
        this.paths.projectRoot,
        false,
        this.paths,
      );
    }
  }
  private validateSearch(search: string): {
    search: string;
    ignore?: string[];
  } {
    if (search === "<NOT_EXISTING_PUBLIC_DIR>") {
      return {
        search: "*/**",
        ignore: buildData.reservedPublicDirs.map((p) => `/${p}**`),
      };
    }
    return {
      search,
    };
  }
  private glob(search: string, includeDirectories: boolean = true) {
    let s = this.validateSearch(search);
    let vals = globSync(s.search, {
      cwd: this.sourcesDir,
      ignore: s.ignore,
    });
    if (includeDirectories) {
      return vals;
    }
    return vals.filter((f) =>
      fs.statSync(path.join(this.sourcesDir!, f)).isFile(),
    );
  }
  private getItemData(
    item: FileItemWithRootGlob,
  ): FoundItem[] | FoundDirContent[] | undefined {
    let files = this.glob(item.rootGlob, false);
    if (item.validate) {
      if (!item.validate(files)) {
        return;
      }
    }
    if (item.includeDirContents && files.length) {
      if (!item.dirPath) {
        throw new Error(
          `Attempted to gather directory contents without a provided dirPath.`,
        );
      }
      return [
        {
          ...item,
          type: "dir",
          dirPath: item.dirPath,
          childPaths: files,
        },
      ];
    }
    if (item.allowMultiple) {
      return files.map((f) => ({
        ...item,
        type: "file",
        filePath: f,
      }));
    }
    if (files.length === 1) {
      return [
        {
          ...item,
          type: "file",
          filePath: files[0],
        },
      ];
    }
  }
  private getPaths(item: FoundVal): ItemData[] {
    let itemData: ItemData[] = [];
    let items: string[] =
      item.type === "dir" ? item.childPaths : [item.filePath];
    for (const d of items) {
      itemData.push({
        input: path.join(this.sourcesDir!, d),
        output: path.join(this.paths.projectRoot, (item as any).getOutputPath(d)),
      });
    }
    return itemData;
  }
  private getItems() {
    let items: FoundVal[] = [];
    for (const f of this.allowedRootDirItems) {
      let x = this.getItemData(f);
      if (x) {
        items = items.concat(x);
      }
    }
    return items;
  }
  private copyPath(item: ItemData) {
    const f = FileManager.fromAbsolutePath(item.input, this.paths, false);
    f.copyToFile(item.output);
  }
  private generateIndexScssFile() {
    let glob = new UlldGlob(this.paths.userDefinedStyles);
    let files = glob.glob("**/*.scss");
    let importString = files
      .map((f) => {
        let s = path.relative(this.paths.unifiedUserDefinedScss, f);
        return `@use "${s.slice(0, s.lastIndexOf("."))}";`;
      })
      .join("\n");
    let outputFile = FileManager.fromAbsolutePath(
      this.paths.unifiedUserDefinedScss,
      this.paths,
      false,
    );
    outputFile.writeContent(importString);
  }
  write() {
    if (!this.sourcesDir) {
      return;
    }
    const items = this.getItems();
    for (const foundVal of items) {
      let pathData = this.getPaths(foundVal);
      for (const itemData of pathData) {
        this.copyPath(itemData);
      }
    }
    this.generateIndexScssFile();
  }
}
