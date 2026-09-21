/* eslint-disable */
// Server-renders the legal pages (Privacy, Terms, Policies) to plain HTML for
// scripts/prerender.js. Their copy lives in JSX — SMS/compliance wording we do
// not want duplicated in a data file — so the page component itself is compiled
// with Babel and rendered with stubbed layout/router imports. Returns the inner
// HTML (h1 + body) or null on any failure; the caller falls back to a summary.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");

module.exports = function renderLegal(file, data) {
  try {
    const babel = require("@babel/core");
    const React = require("react");
    const { renderToStaticMarkup } = require("react-dom/server");
    const e = React.createElement;

    const stubs = {
      react: React,
      "react/jsx-runtime": require("react/jsx-runtime"),
      "react-router-dom": {
        Link: ({ to, children }) => e("a", { href: to }, children),
        useLocation: () => ({ pathname: "", hash: "" }),
      },
      "@/components/site/Seo": { Seo: () => null },
      "@/components/site/LegalLayout": {
        LegalLayout: ({ title, effectiveDate, children }) =>
          e(React.Fragment, null, e("h1", null, title), effectiveDate ? e("p", null, `Effective Date: ${effectiveDate}`) : null, children),
        LH2: ({ children }) => e("h2", null, children),
        LH3: ({ children }) => e("h3", null, children),
        LP: ({ children }) => e("p", null, children),
        LUL: ({ items }) => e("ul", null, items.map((it, i) => e("li", { key: i }, it))),
      },
      "@/lib/data": data,
    };

    const { code } = babel.transformSync(fs.readFileSync(path.join(ROOT, file), "utf8"), {
      filename: file,
      babelrc: false,
      configFile: false,
      presets: [[require.resolve("@babel/preset-react"), { runtime: "automatic" }]],
      plugins: [require.resolve("@babel/plugin-transform-modules-commonjs")],
    });
    const mod = { exports: {} };
    const req = (id) => {
      if (!(id in stubs)) throw new Error(`renderLegal: unexpected import "${id}" in ${file}`);
      return stubs[id];
    };
    vm.runInNewContext(code, { module: mod, exports: mod.exports, require: req, console, window: undefined, document: undefined });
    // Strip attributes the stubs don't control (className on inline elements).
    return renderToStaticMarkup(e(mod.exports.default)).replace(/ class="[^"]*"/g, "");
  } catch (err) {
    console.warn(`[prerender] legal page ${file} not rendered:`, err && err.message);
    return null;
  }
};
