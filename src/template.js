import React from "react";

// HTML Escape helper utility
const util = (function() {
  // Thanks to Andrea Giammarchi
  var reEscape = /[&<>'"]/g,
    reUnescape = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g,
    oEscape = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    },
    oUnescape = {
      "&amp;": "&",
      "&#38;": "&",
      "&lt;": "<",
      "&#60;": "<",
      "&gt;": ">",
      "&#62;": ">",
      "&apos;": "'",
      "&#39;": "'",
      "&quot;": '"',
      "&#34;": '"'
    },
    fnEscape = function(m) {
      return oEscape[m];
    },
    fnUnescape = function(m) {
      return oUnescape[m];
    },
    replace = String.prototype.replace;
  return (Object.freeze || Object)({
    escape: function escape(s) {
      return replace.call(s, reEscape, fnEscape);
    },
    unescape: function unescape(s) {
      return replace.call(s, reUnescape, fnUnescape);
    }
  });
})();

// Tagged template function
function jsx(pieces) {
  var result = pieces[0];
  var substitutions = [].slice.call(arguments, 1);
  for (var i = 0; i < substitutions.length; ++i) {
    result += util.escape(substitutions[i]) + pieces[i + 1];
  }

  return (() => {
    return <div dangerouslySetInnerHTML={{ __html: result }} />;
  })();
}

function locale(strings, ...values) {
  return strings.reduce(
    (prev, next, i) => `${prev}${next}${values[i] || ""}`,
    ""
  );
}

export { locale, jsx };
