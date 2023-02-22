import { writeFileSync } from 'fs'
import { printSchema, lexicographicSortSchema } from 'graphql'

import { schema } from '../pothos/schema'

const schemaAsString = printSchema(lexicographicSortSchema(schema))

writeFileSync('src/lib/graphql/schema.graphql', schemaAsString)
