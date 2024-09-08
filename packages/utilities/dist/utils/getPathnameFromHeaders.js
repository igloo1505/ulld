import '../chunk-F3FYYIAV.js';
import { headers } from 'next/headers';

var getPathnameFromHeaders = () => {
  const headerList = headers();
  let pathname = headerList.get("x-url");
  let pindex = pathname?.indexOf("?");
  if (pathname && pindex && pindex > -1) {
    pathname = pathname.slice(0, pindex);
  }
  return pathname;
};

export { getPathnameFromHeaders };
//# sourceMappingURL=out.js.map
//# sourceMappingURL=getPathnameFromHeaders.js.map