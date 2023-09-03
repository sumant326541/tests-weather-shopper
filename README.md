<img width="100" alt="Screenshot 2021-06-29 at 8 12 27 AM" src="https://user-images.githubusercontent.com/39675511/123728969-d2a87b00-d8b1-11eb-9ece-558d4021f816.png">

# tests-weather-shopper with Cypress

## Test Execution

####  Local execution

Open project directory in terminal and run command to install all plugins and dependencies mentioned in package.json file.
```sh
npm install 
```
Run all spec 
```sh
npx cypress run
or
node_modules/.bin/cypress run
```
Run specific spec 
```sh
npx cypress run --spec "/path/.cy.js"
```
Run test on chrome browser
```sh
npx cypress run --browser chrome
```

Run test on firefox browser
```sh
npx cypress run --browser firefox
```
Run test on cypress runner
open cypress runner with below command.
```sh
npx cypress open
```
Tap on specific test.cy.js file to be executed.

## CI integration

- push.yml file has been added to execute test on every push

## Report 

- report will automatic generate once run through cypress runner 

- we can also configure external report. Kindly go through https://docs.cypress.io/guides/tooling/reporters

### Screen Recording
Screen recording will be generated in the videos folder once run test by command npx cypress run

### ScreenShot
Screenshot of failed steps will be generated in the screenshots folder.


## Framework overview:

### TestCase:
- Test case has been written inder e2e directory

### Custom command / reusability
- Created a commands.js file inside the support directory, and maintained all reusable functions.

### Override config propery value
- default value of Config parameter can be overriden  by updating value in cypress.config.js file.
### Test data
- test data can be  maintained inside fixture folder.
### Plugin
- external supported plugging can be added in index.js file present in plugins folder


### Note:
- some time expected products SPF-50, SPF-30, Aloe or Almond will not available and requrement is not clear how to handle this scenario and that may cause to fail the test case.(observed in 1% of test execution)
