<img width="100" alt="Screenshot 2021-06-29 at 8 12 27 AM" src="https://user-images.githubusercontent.com/39675511/123728969-d2a87b00-d8b1-11eb-9ece-558d4021f816.png">

# tests-weather-shopper with Cypress

## Test Execution

####  Docker container execution
#### Steps:
- start docker engine.
```sh
open -a Docker
```
- clone source code from git https://github.com/sumant326541/tests-weather-shopper.git
- run the below command from root directory.
```sh
docker run -it -v $PWD:/e2e -w /e2e cypress/included:12.8.1 --browser chrome
```
or use below command: script has been added in package.json
```sh
npm run docker-tests
```
The above command will run the test case in headless chrome.
#### Explanation of the "docker run" command line arguments:
```sh
-it                  = interactive terminal
 -v $PWD:/e2e         = map current folder to /e2e inside the container
 -w /e2e              = set working directory to /e2e
 cypress/includes = run "cypress" command
    with arguments AFTER Docker image name
    In our case they are "--project ." to point globally installed Cypress.
    at the current working directory /e2e inside the container.
```


####  Local execution

Open project directory in terminal and run command to install all plugins and dependencies mentioned in package.json file.
```sh
npm install 
```
To run all spec 
```sh
npx cypress run
or
node_modules/.bin/cypress run
```
To run specific spec 
```sh
npx cypress run --spec "/path/.cy.js"
```
To run test on chrome browser
```sh
npx cypress run --browser chrome
```

To run test on firefox browser
```sh
npx cypress run --browser firefox
```
To run test on cypress runner 
open cypress runner with below command.
```sh
npx cypress open
```
Then open specific test.cy.js file to be executed.

## CI integration

Note: CI code has been implemented in push.yml file to execute the test whenever new push will be on master branch.

## Report 
Note:
- The report automatically generates when test runs through cypress runner.

- You can also configure external report. To learn how to configure the test report, kindly go through the link https://docs.cypress.io/guides/tooling/reporters

### Screen Recording
Screen recording is generated in the videos folder, when test is run using below command.
```sh
npx cypress run
```
### ScreenShot
Screenshot of failed steps will be generated in the screenshots folder.


## Framework overview:

### TestCase:
- Test case has been written under e2e directory

### Custom command / reusability
- Created a commands.js file inside the support directory, and maintained all reusable functions.

### Override config propery value
- default value of Config parameter can be overriden  by updating value in cypress.config.js file.
### Test data
- test data can be maintained inside fixture folder.
### Plugin
- external supported plugging can be added in index.js file present in plugins folder


### Note:
- some time expected products SPF-50, SPF-30, Aloe or Almond will not available and requrement is not clear how to handle this scenario and that may cause to fail the test case.(observed in 1% of test execution)
