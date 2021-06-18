import { resolve } from 'path'
import { makeSchema, fieldAuthorizePlugin } from 'nexus'
import * as types from './types'

const resolvePath = (path: string) => resolve(process.cwd(), path)

export const schema = makeSchema({
  types,
  plugins: [fieldAuthorizePlugin()],
  outputs: {
    schema: resolvePath('src/lib/graphql/generated/schema.graphql'),
    typegen: resolvePath('node_modules/@types/.nexus/index.d.ts'),
  },
  features: {
    abstractTypeStrategies: {
      isTypeOf: true,
    },
  },
  contextType: {
    module: resolvePath('src/lib/nexus/context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: resolvePath('node_modules/.prisma/client/index.d.ts'),
        alias: 'prisma',
      },
    ],
  },
  shouldExitAfterGenerateArtifacts: process.argv.includes('--nexus-exit'),
})
