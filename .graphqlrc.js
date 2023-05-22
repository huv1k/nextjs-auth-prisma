/** @type {import('@graphql-codegen/cli').CodegenConfig} */
const config = {
  schema: 'src/lib/graphql/schema.graphql',
  documents: [
    'src/pages/**.tsx',
    'src/components/**.tsx',
    '!src/lib/graphql/**/*',
  ],
  generates: {
    './src/lib/graphql/': {
      preset: 'client',
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
}

module.exports = config
