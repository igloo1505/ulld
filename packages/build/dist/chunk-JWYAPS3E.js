import {
  generate
} from "./chunk-TPUO7YGI.js";
import {
  __dirname,
  init_esm_shims
} from "./chunk-ZRREZ4KQ.js";

// src/main.ts
init_esm_shims();
import { log } from "console";
import notifier from "node-notifier";
import path from "path";
var avoidIfInOpts = ({ opts, other, options }) => {
  if (other && other.length && other.some((x) => x)) {
    return false;
  }
  if (!opts || !opts.length) {
    return true;
  }
  return !opts.some((x) => options[x]);
};
var runUlldBuild = async (options, buildParams) => {
  try {
    if (avoidIfInOpts({ opts: [], options })) {
      let baseApp = await generate(build, options);
      baseApp.cleanUp();
    }
    notifier.notify({
      title: "Woah",
      message: `I know that was a lot, but you're all set! You can now run your app with the 'ulld run' command. Checkout the docs for more information.`,
      sound: true,
      icon: path.join(__dirname, "ulldLogo.png"),
      wait: true
    });
  } catch (err) {
    if (!err) {
      log(`No worries. We can handle this later.`);
    }
  }
};

export {
  runUlldBuild
};
//# sourceMappingURL=chunk-JWYAPS3E.js.map