<p align="center">
  <img src="img/bcc-logo.png" width="150" />
    <p align="center">
      <a href="https://github.com/chess-centre/welcome/blob/master/LICENSE">
        <img alt="GitHub" src="https://img.shields.io/github/license/chess-centre/welcome?style=flat">
      </a>
      <a href="https://github.com/chess-centre/welcome/blob/master/CONTRIBUTING.md">
        <img alt="GitHub" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat">
      </a>
      <a href="https://www.codacy.com/gh/chess-centre/platform/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=chess-centre/platform&amp;utm_campaign=Badge_Grade">
        <img src="https://app.codacy.com/project/badge/Grade/8a35f82c63c0490db71b626a2f5125e1"/>
      </a>
  </p>
  <h1 align="center"><strong></strong> The Chess Centre | Platform</h1>
  <h3 align="center" style="color:red;">Beta</h3
</p>

This project contains the source code of our front-end of The Chess Centre application, including steps for configuring the AWS serverless backend.

## Motivation

**The Chess Centre** was born through a love of Chess and the amazing community it has! This platform serves to provide chess players who enjoy playing over-the-board (in person), with modern, accessible features to easily find upcoming events, register and quickly track results of their real games!

To support this goal, a dedicated centre (physical premises) has been set up for players to come and play. Although there is a cost for members to join, **every single penny** will be recycled entirely back into the growth of chess to ensure the beautiful game continues to grow and embrace the new world we live in.

- website: [chesscentre.online](https:chesscentre.online)

### Prerequisites

- Node.js - [Download & Install Node.js](https://git-scm.com/downloads) and the npm package manager.
- Amplify CLI - [Download & Install the Amplify CLI](https://docs.amplify.aws/cli/start/install)

## Getting started

Using git, clone the project (_or fork it_)

```bash
$ git clone git@github.com:chess-centre/platform.git
```

IMPORTANT: Change directory to the root of the React app

```bash
$ cd chess-centre-app
```

Checkout our [develop](https://github.com/chess-centre/platform/tree/develop) branch - this is where PRs are merged pre-live

```bash
$ git fetch && git checkout develop
```

Install dependencies

```bash
$ yarn install
```

At this point you now have everything you need, minus the AWS configuration to run locally.

1. Our current practise is to manually set up AWS IAM users (contact [@matt-d-webb](https://github.com/matt-d-webb) for this), with specific Amplify settings which is used for authentication. Example:

```js
const awsmobile = {
  aws_project_region: "eu-west-1",
  aws_cognito_identity_pool_id: "eu-west-1:xxxxx-xxxx-xxxxx-xxxx-xxxx",
  aws_cognito_region: "eu-west-1",
  aws_user_pools_id: "eu-west-1_xxxxxxxx",
  aws_user_pools_web_client_id: "123xyz456ABC789dEFg",
};
```

2. The alternative is setting up your own AWS account. _This is advised if you're forking this project for your own use. Steps in the future will be added, feel free to reach out for help, happy to discussed._

Once you are setup with an IAM user, you'll be sent this config which you can add in the app root as `aws-exports.js`

THEN

```bash
amplify env pull dev
```

You will now have a custom development environment!

FINALLY

```bash
$ yarn start # app runs on port 3000
```

## Overview

The front-end app uses `create-react-app` and `tailwindcss`. The backend is entirely serverless using AWS (see Architecture).

The project is intended to be as open and transparent as possible. Making it easy to reproduce and contribute to.

## Architecture

<details>
<summary>Overview</summary>
<p align="center">
  <img src="img/bcc-architecture.png" />
</p>
</details>

## Contributing

See our [welcome](https://github.com/chess-centre/welcome) respository for guidelines on helping us develop this platform.

## Special Thanks

This project used many amazing open source libraries, but for chess specifically, we are grateful for the efforts of:

- [PgnViewerJS](https://github.com/mliebelt/PgnViewerJS#readme)
- [chess.js](https://github.com/jhlywa/chess.js)
- [Chessground](https://github.com/ornicar/chessground)
- [pegjs](https://github.com/pegjs/pegjs)

## License

[MIT](../LICENSE.md)
