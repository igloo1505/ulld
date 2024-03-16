import fs from 'fs';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];

var walkSync = function(_dir, rootPath, filelist = []) {
    let dir = _dir.endsWith("/") ? _dir : `${_dir}/`
    let files = fs.readdirSync(dir);
      files.forEach(function(file) {
    if (fs.statSync(dir + file).isDirectory()) {
      filelist = walkSync(dir + file + '/', rootPath, filelist);
    }
    else {
      filelist.push(dir + file);
    }
  });
  return filelist.map((f) => f.replace(rootPath, "./"))
};


const  walkFsRoot = (dir, recursive, ignoreFilePaths = [], collected = [] ) => {
    console.log("dir: ", dir)
    let f = fs.opendirSync(dir).readSync()
    console.log("f: ", f)
    // for (const d of fs.opendirSync(dir).readSync()) {
    //     console.log("d: ", d)
    //     const entry = path.join(dir, d.name);
    //     console.log("entry: ", entry)
    // }
    return collected
}


const getFiles = (entry, extensions = [], excludeExtensions = []) => {
  let fileNames = [];
  const dirs = fs.readdirSync(entry);

  dirs.forEach((dir) => {
    const path = `${entry}/${dir}`;

    if (fs.lstatSync(path).isDirectory()) {
      fileNames = [
        ...fileNames,
        ...getFiles(path, extensions, excludeExtensions),
      ];

      return;
    }

    if (!excludeExtensions.some((exclude) => dir.endsWith(exclude))
      && extensions.some((ext) => dir.endsWith(ext))
    ) {
      fileNames.push(path);
    }
  });

  return fileNames;
};


export default {
    walkFsRoot,
    getFiles,
    walkSync
}
