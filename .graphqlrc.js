/** @type {import('@graphql-codegen/cli').CodegenConfig} */
const config = {
  schema: 'src/lib/graphql/schema.graphql',
  documents: ['src/pages/**.tsx', 'src/components/**.tsx', '!src/gql/**/*'],
  generates: {
    './src/lib/graphql/': {
      preset: 'client',
      presetConfig: {
        fragmentMasking: true,
        useTypeImports: true,
      },
    },
  },
}

module.exports = config
