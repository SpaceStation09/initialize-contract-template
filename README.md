# Contract Template

This repo contains the basic files and configuration of a **Hardhat-Foundry hybrid** development framework. You can simply start a project with [Hardhat](https://hardhat.org/getting-started/) and [Foundry](https://book.getfoundry.sh/).

If this is your first time with Foundry, check out the
[installation](https://github.com/foundry-rs/foundry#installation) instructions.

## Structure

The initial directory structure looks like:

```shell
$ tree . -d -L 1
.
├── deploy
├── src
└── test

```

### Formatter & Code Analyzer

In this template, I configured several formatter and code analyzer in advanced to enhance the coding style for collaborative work: _eslint_ for typescript files, _solhint_ for solidity files, and _prettier_ for all. Furthermore, I also configured _cspell_ to avoid typo in coding.

### Dir Explanation

**Foundry** is responsible for solidity-based test while **Hardhat** is used to complete deployment of contracts.

- Solidity-based test:
  - Testing files are placed in `./test`.
  - **NOTICE**: Due to the design in `hardhat.config.ts`, all testing files should end with `.t.sol`.
- Contract Source Code: `./src`
- Deployment: `./deploy` is the contract deployment script path.

### Installing Dependencies

Foundry typically uses git submodules to manage dependencies, but this template uses Node.js packages because
[submodules don't scale](https://twitter.com/PaulRBerg/status/1736695487057531328).

This is how to install dependencies:

1. Install the dependency using your preferred package manager, e.g. `npm install dependency-name`
   - Use this syntax to install from GitHub: `npm install github:username/repo-name`
2. Add a remapping for the dependency in [remappings.txt](./remappings.txt), e.g.
   `dependency-name=node_modules/dependency-name`

Note that forge-std Contracts is pre-installed, so you can follow that as an example.
