# react-testing

Playing with testing libraries `react-testing` and `cypress` on a demo React app.

<a href="https://github.com/cypress-io/cypress-realworld-app">Original repo</a>

## Setup

* To run server:
`yarn install && yarn dev`

* To run react-testing:
`yarn test`

* To install cypress:
`yarn add -D cypress @testing-library/cypress`

* To run cypress:
`yarn run cypress open`

## Tests

* example unit tests for `TransactionCreateStepTwo` React component using Testing Library:
  * `src/components/TransactionCreateStepTwo.test.js`
* example E2E test for user payment using Cypress:
  * `cypress/integration/payment_spec.js`

## Useful Stuff

* Chrome Testing Playground extension (to select items on a page and generate a suggested query)
* <a href="https://testing-library.com/docs/queries/about/#priority">Testing Library Priorities</a>
* <a href="https://docs.cypress.io/guides/getting-started/writing-your-first-test">Cypress documentation</a>
* <a href="https://testing-library.com/docs/cypress-testing-library/intro">Cypress Testing Library (for useful cypress commands)</a>

## Learning Summary

* testing library
  * comes as default with `create-react-app`
  * `screen.getByRole("")` see roles, or check things are filled in correctly
* cypress
  * so nice to use, love it!
  * chrome testing playground extension & cypress testing library - easy to perform E2E tests, easy to understand
  * "open selector playground" grab elements as a last resort
  * `.click({ force: true })` 
* misc
  * `const { v4: uuidv4 } = require("uuid");` & `const note = uuidv4();` generate unique identifiers
* testing
  * safeguard against unwanted behaviour
  *  testing costs a company money, set priorities in testing strategy
      1. High value features
      2. Edge cases in high value features
      3. Things that are easy to break
      4. Basic React component testing (e.g. user interactions, conditional rendering, utils/hooks)
