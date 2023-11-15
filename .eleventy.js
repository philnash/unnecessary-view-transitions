const bundlerPlugin = require("@11ty/eleventy-plugin-bundle");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(bundlerPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPassthroughCopy("src/assets/base.css");

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    pathPrefix: "/unnecessary-view-transitions/",
  };
};
