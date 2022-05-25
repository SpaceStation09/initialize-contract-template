# Contract Template

This repo contains the basic files and configuration of a **Hardhat-Foundry hybrid** development framework. You can simply start a project with [Hardhat](https://hardhat.org/getting-started/) and [Foundry](https://book.getfoundry.sh/).

## Structure

The initial directory structure looks like:

```shell
$ tree . -d -L 1
.
├── deploy
├── .vscode
├── hardhatTest
├── lib
└── src
```

### Formatter & Code Analyzer

In this template, I configured several formatter and code analyzer in advanced to enhance the coding style for collaborative work: _eslint_ for typescript files, _solhint_ for solidity files, and _prettier_ for all. Furthermore, I also configured _cspell_ to avoid typo in coding.

### Dir Explanation

**Foundry** is responsible for solidity-based test while **Hardhat** is used to complete the test case and deployment of contracts.

- Solidity-based test:
  - `./lib` contains a collection of helpful contracts for testing with `forge` and `foundry`.
  - Testing files are placed in `./src/test`.
  - **NOTICE**: Due to the design in `hardhat.config.ts`, all testing files should end with `.t.sol`.
- Hardhat test: Testing files using hardhat-related toolkit should be placed in `./hardhatTest`.
- Contract Source Code: `./src`
- Deployment: `./deploy` is the contract deployment script path.
