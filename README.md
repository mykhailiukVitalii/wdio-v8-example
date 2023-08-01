This repo contains tests for Webdriverio v8 + mocha application with Testomat.io plugins

# Installation

This is a playground for your first steps in testing, so instead of installing it from NPM it is recommended to clone it from repo instead.

1) Clone this repository

```
git clone git@github.com:mykhailiukVitalii/wdio-v8-example.git && cd wdio-v8-example
```

2) Install dependencies via npm:

```
npm i
```

3) Run tests without reporting:

```
npm run wdio
```

This will install wdio cli & Testomat.io reporter

## Loading Tests to Testomat.io

1. Create empty project in Testomat.io
2. Obtain API key from Testomat.io
2. Run `npx check-tests` to upload tests data into testomat.io. Pass api key as `TESTOMATIO` environment variable:

```
TESTOMATIO={apiKey} npx check-tests webdriver-mocha "**/*{.,_}e2e.ts"  -d test
```

> **Environment variables** It is recommended to store Testomatio API Key as environment variable and never save it in the source code. Set them directly when running tests or use [dotenv](https://www.npmjs.com/package/dotenv) package to save environment variable in a file and load them for tests. 

## Publishing Test Results to Testomat.io

Get API key from a project in Testomat.io and set it as environment variable `TESTOMATIO`:

```
TESTOMATIO={apiKey} npx @testomatio/reporter -c "npm run wdio"
```

### Configuration

Testomatio reporter is a plugin and should be enabled in `wdio.conf.ts`:

Do not hard code apiKey and always use it as environment variable.

```ts
import * as testomatio from '@testomatio/reporter/lib/adapter/webdriver.js';

reporters: [
  ...,
  [testomatio, {
    apiKey: process.env.TESTOMATIO
  }]
],
```

### Attaching Test Artifacts

Test artifacts will be uploaded automatically.
For uploading screenshots on failed tests to your report add the following hook to `wdio.conf.ts`:

```ts
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            browser.takeScreenshot()
        }
    },
```
