/*
tells the framework that files with .md or .mdx extensions should also be treated as pages/routes
at build time because the blog folder that contains the articles lives in the pages directory
*/

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/
});

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"]
});
