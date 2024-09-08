"use client"
'use strict';

var react = require('react');

var DisableBookmark = () => {
  react.useEffect(() => {
    document.body.classList.remove("canBookmark");
  }, []);
  return null;
};
DisableBookmark.displayName = "DisableBookmark";

exports.DisableBookmark = DisableBookmark;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=disableBookmark.cjs.map