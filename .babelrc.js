const { babelOptimizerPlugin } = require('@graphql-codegen/client-preset')

module.exports = {
  presets: ['next/babel'],
  plugins: [[babelOptimizerPlugin, { artifactDirectory: './src/lib/graphql' }]],
}
