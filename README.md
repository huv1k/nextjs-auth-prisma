# Next.js-auth-prisma boilerplate

Build bleeding-edge full-stack applications using **Next.js**, **GraphQL**, **TypeScript** and **Prisma**.

## Getting started

1. Clone this project `git clone https://github.com/huv1k/nextjs-auth-prisma`
2. Install dependencies `yarn install` or `npm install`
3. [Setup](#Setup) your local environment
4. Run application `yarn dev` or `npm run dev`
5. Profit 💰

## Features

- 🐣 **Simple:** You can focus on building your product.
- ⚡️ **Fast:** Compile only what is needed and when is needed.
- 💍 **Feature-rich:** Code generation, automatic migrations, type-safety.
- 🛠 **Customizable:** You can easily change tools you are not familiar with.

## Overview

I have created this boilerplate because there was a missing one with all features. Which would support fast development and easy deployment without sacrificing performance. This boilerplate is built on the best open-source tools out there:

- ⚡️ [Next.js](https://github.com/vercel/next.js) - The React framework for Production
- 🛠 [TypeScript](https://www.typescriptlang.org/) - Type-safety for your code
- 🤝 [Prisma](https://github.com/prisma/prisma) - ORM for accessing and managing your data
- 🛡 [NextAuth.js](https://github.com/nextauthjs/next-auth) - Authentication for Next.js
- 🦅 [urql](https://github.com/FormidableLabs/urql) - Highly customisable GraphQL client with sensitive defaults
- ⚙️ [GraphQL Code Generator](https://github.com/dotansimha/graphql-code-generator) - Generates code out of GraphQL schema
- 🧘‍♀️ [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga/) - Fully-featured GraphQL Server
- 💄 [Prettier](https://github.com/prettier/prettier) - Formatting your code
- 🤖 [Dependabot](https://github.com/marketplace/dependabot-preview) - Keeping your dependencies up to date

### Run Prisma migrations on save

This boilerplate works out of the box with automatic migrations for rapid prototyping. I described this in my article [Improve prototyping speed of Prisma](https://huvik.dev/blog/improve-prototyping-speed-of-prisma), you can check how it works under the hood.

![](https://i.imgur.com/kF73swy.gif)

### Automatic GraphQL types generated

GraphQL types are automatically generated for data masking. This pattern is one of [the best practise](https://the-guild.dev/blog/unleash-the-power-of-fragments-with-graphql-codegen) you should follow when building scalable applications. This pattern was first introduced by [Relay](https://relay.dev/docs/principles-and-architecture/thinking-in-relay/#data-masking).

### Authentication using NextAuth.js

This boilerplate is configured to use [GitHub](https://next-auth.js.org/providers/github) authentication provider. [NextAuth.js](https://github.com/nextauthjs/next-auth) comes with a lot of different [providers](https://next-auth.js.org/configuration/providers). You can choose, which providers suit your needs most.

### Defining custom authorization rules

You can define authorization rules for your resolvers. You can follow [Pothos's auth plugin](https://pothos-graphql.dev/docs/plugins/scope-auth) documentation or checkout [example](https://github.com/huv1k/nextjs-auth-prisma/blob/master/src/lib/pothos/builder.ts) in this repository.

### Deployment

For deployment, you can use [Vercel](https://vercel.com/), this boilerplate works with Vercel out of the box! Use this template and then import Git repository inside Vercel [dashboard](https://vercel.com/new).

## Setup

### Connect your database

This starter could be used with all databases supported by Prisma. I would suggest using [PlanetScale](https://planetscale.com/), which has a nice generous free plan. You can follow [Prisma getting started](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/connect-your-database-typescript-planetscale) to get your database up and running.

### NextAuth GitHub provider

You need to create [GitHub OAuth App](https://github.com/settings/developers). You're going to provide Authorization callback URL like:

- Local development: `http://localhost:3000/api/auth`
- Production deployment: `https://www.YOURDOMAIN.TLD/api/auth`

Then you are going to copy `Client ID` and `Client secret` and fill your environment variables.
