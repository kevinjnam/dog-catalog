# Full Stack Application -- Kevin Nam

## To Run Application

- npm install
- npm run dev

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Coding Standards

- Clean code is the foundation to a maintainable and scalable codebase. I enjoy writing simple, human readable code that does not require comments.

- I like defaulting to functional components in React. Functional components are cleaner and React actually cannot fully perform its performance optimization for class components (Sophie Alpert @react-core-team). It is also cleaner!

## Misc.

- The action and reducer files are co-located with their test files.

- My general testing strategy is to focus on functional integration tests then to write e2e tests. By following the testing trophy method (by Kent C. Dodds), I like having a strong foundation of integration and e2e tests and reserve unit testing components with complex logic and redux state.
