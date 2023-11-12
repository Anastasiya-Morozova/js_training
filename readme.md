# Calculate Bonus and Test it!

A tiny project with the function calculateBonus and tests for it.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Pre-requests

The things you need to install the software and how to install them:

* node.js
* npm

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository 

```bash
git clone https://github.com/Anastasiya-Morozova/js_training.git
```
2. Navigate to the project directory

```bash
cd path-to-your-project
```
3. Install project dependencies

```bash
npm install
```
## The function file
Goal function is located in index.js file

## Running the tests

Tests located in index.test.js file.
To run the tests, use the command:

```bash
npm test
```
## What is Measured
In my project, I use Babel Istanbul for measuring test coverage. Test coverage is a metric used to measure the quality of testing by indicating what proportion of the code is executed during tests. I measure the following aspects of coverage:

1. Line Coverage: Determines how many lines of code were executed during testing. It doesn't necessarily mean every scenario on that line has been tested, but that the line was included in the execution.

2. Function Coverage: Measures whether each function in the codebase is called during the testing process. This helps ensure that all the functions are tested at least once, but it does not cover all possible paths or scenarios within those functions.

3. Branch Coverage (or Decision Coverage): This tracks which branches of conditional statements (like if-else) have been executed. Branch coverage is crucial as it ensures that every possible route through a piece of code is tested and that all conditions are evaluated.

## Setting Up and Running Coverage Measurement

To set up and run coverage measurement in the project, follow these steps:

1. Installation: Make sure babel-istanbul is installed in the project. You can add it using npm or yarn.

```bash
npm install --save-dev babel-istanbul
```
or

```bash
yarn add --dev babel-istanbul
```

## Understanding Coverage Types

Understanding the difference between line, function, and branch coverage helps in writing more effective tests:

* Line Coverage: While it ensures that each line of code is executed, it does not guarantee that every possible scenario is covered. High line coverage can give a false sense of security if other coverage types are low.

* Function Coverage: Ensures every function is called, but does not test all paths through the function. It's possible for a function to have side effects or multiple paths that are not covered by a simple invocation.

* Branch Coverage: The most comprehensive, as it requires testing all the possible paths in conditional statements. It's important for ensuring that all code behaves as expected under different conditions.

Regularly measuring and analyzing these coverage metrics can significantly improve the quality and reliability of your tests and codebase.
## Built With

* [Jest](https://jestjs.io/) - A JavaScript testing framework
* [Node.js](https://nodejs.org/) - JavaScript runtime environment
* [Babel Istanbul](https://www.npmjs.com/package/babel-plugin-istanbul) - Used for measuring test coverage 

## Authors
* [Anastasiya-Morozova](https://github.com/Anastasiya-Morozova)