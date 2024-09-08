import '../chunk-F3FYYIAV.js';

// src/utils/fetchWrapper.ts
var fetchWrapper = async (path, opts) => {
  return await fetch(
    path,
    {
      ...opts,
      body: typeof opts.body === "string" ? opts.body : JSON.stringify(opts.body)
    }
  );
};

export { fetchWrapper };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=fetchWrapper.js.map