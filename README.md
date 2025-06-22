# SauceDemo Project

## Project Description

This project contains automated tests for the SauceDemo website (https://www.saucedemo.com), developed as part of a bootcamp program. The tests are developed using WebDriverIO with both Mocha and Cucumber, and cover the Login functionality of the webiste.


## Technologies Used

- Javascript with Node.js (version 22.14.0).
- npm (version 11.4.2).
- WebDriverIO with Mocha and Cucumber (version 9.15.0).
- Allure reporter (version 9.15.0).
- Rimraf (version 6.0.1).
- Editor Visual Studio Code (version 1.101.1).

## Setup Instructions

### Prerequisites

- Node.js installed. It can be downloaded from [nodejs.org](https://nodejs.org).

### Project Setup

1. Clone this repository:
   ```
   git clone https://github.com/sebautistam/SauceDemo_Bootcamp.git
   ```
2. Open the project folder in your editor.
3. Verify that you have installed Node.js. From the terminal, run:
   ```
   node -v
   ```
4. Install npm packages and verify they have been installed:
   ```
   npm install
   npm -version
   ```
5. Install Rimraf as a dependency, and verify its installation:
   ```
   npm install rimraf --save-dev
   npm list rimraf
   ```
6. Verify that WebDriverIO is installed as a dependency:
   ```
   npx wdio --version
   ```
7. The project includes a script to clean up the folder if cached versions exist. From the terminal, run:
   ```
   npm run reinstall
   ```

### To execute traditional tests (using WebDriverIO with Mocha):

1. To execute the tests, run the script:
   ```
   npm run test:mocha
   ```
    Be aware that running this script will clean up the results of previous runs of the tests from the reporter.
  
2. To generate the Allure report, run the script:
   ```
   npm run allure-mocha:report
   ```

### To execute the behaviour-driven tests (using Cucumber):

1. To execute the tests, run the script:
   ```
   npm run test:cucumber
   ```
    Be aware that running this script will clean up the results of previous runs of the tests from the reporter.
  
2. To generate the Allure report, run the script:
   ```
   npm run allure-cucumber:report
   ```

### To execute all tests:

1. Run the script:
   ```
   npm run test:all
   ```
    Be aware that running this script will clean up the results of previous runs of the tests from the reporter.
