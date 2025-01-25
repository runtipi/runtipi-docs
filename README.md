Welcome to the Runtipi Docs repo!

# Architecture

The docs are built with [Nextra](https://nextra.site). We use [Bun](https://bun.sh) as a package manager and Node.js as a runtime (Next.js and Bun don't play well together at the moment). Docs pages are written in [MDX](https://mdxjs.com) and any custom components are written in TypeScript with TSX.

# Set up a development environment

Prerequisites:

- A recent Node.js version (22 recommended)
- [Bun](https://bun.sh)

```bash
$ git clone https://github.com/runtipi/runtipi-docs
$ cd runtipi-docs
$ bun install
```

You're ready to go!

# Useful information

Scripts:

- `bun dev` starts the development server. Note that making changes to MDX pages will probably require a full reload.
- `bun run build` creates a static production build, ready to be deployed
- `bun lint` checks for errors in your code
- `bun fmt` formats your code with Prettier, so it becomes more... prettier
