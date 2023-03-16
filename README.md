- [Description](#description)
- [How to Run Locally](#how-to-run-locally)
- [Configuration](#configuration)
- [Customization](#customization)

## Description

This repository contains the content of your documentation website.

## How to Run Locally

1. Clone this repository.
2. Install the dependencies:
```bash
$ yarn
```
3. Start and open the website in your browser:
```bash
$ yarn start
```

## Continuous Integration

Two branches are built by [our Jenkins instance](https://ci.infra.status.im/):

* `master` branch is deployed to https://codex.storage by [CI](https://ci.infra.status.im/job/website/job/codex.storage/).
* `develop` branch is deployed to https://dev.codex.storage by [CI](https://ci.infra.status.im/job/website/job/dev.codex.storage/).

PRs should be made for `develop` branch and `master` should be [rebased](https://git-scm.com/book/en/v2/Git-Branching-Rebasing) on `develop` once changes are verified.

## Configuration
Edit the `docusaurus.config.js` file in the repository's root directory, and update the value of the `businessUnit` field in presets section; below is a list of valid values:
- Codex
- Waku

Example:
```js
presets: [
  [
    '@acid-info/logos-docusaurus-preset',
    {
      businessUnit: 'Codex',
    },
  ],
],
```

This is probably enough in most cases, as the Logos plugins will fill in other configurations related to the specified business unit. If you find any error in the information coming from Logos Plugins, please head over to [Logos Docusaurus Plugins](https://github.com/acid-info/logos-docusaurus-plugins) and create an issue.

## Customization

You can find the instructions on adding more documentation sections, localization, and versioning on the [Docusaurus](https://docusaurus.io/docs) website.

> Note that theme customization is limited; for further instructions on customizing your theme, head over to [Logos Docusaurus Theme](https://github.com/acid-info/logos-docusaurus-plugins/tree/main/packages/logos-docusaurus-theme/). 
