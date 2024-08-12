const { EleventyHtmlBasePlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets')
  eleventyConfig.addPassthroughCopy('src/css')
  eleventyConfig.addPassthroughCopy('src/js')
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  eleventyConfig.addFilter('simpleDate', (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  })

  return {
    dir: {
      input: 'src',
      output: 'dist'
    }
  }
}
