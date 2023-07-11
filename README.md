# Pet-Shop Website Testing

This test project comprises both manual and automation testing for [Pet-Shop Website](https://pet-shop.buckhill.com.hr/) website.

## Manual Testing
The sample Pet-Shop test plan can be found [Pet-Shop Website Test Plan](https://drive.google.com/file/d/1BiM6XjGRPLuk_hcNIByf2gugPaTz8w8T/view?usp=sharing).

The sample Pet-Shop test case can be found [Pet-Shop Website Test Cases](https://docs.google.com/spreadsheets/d/1q84jqNwKCtiTEPNQhuQOjPYsv26h3iGCMf7QdRif0io/edit?usp=sharing).

The sample Pet-Shop test case can be found [Pet-Shop Website Bug Report](https://docs.google.com/spreadsheets/d/1dTO_zR2DkjMtYpgVT0tpCCfXF84JhM8BjBu1n6xy65w/edit?usp=sharing).


## Automation Testing
### Setup
To run the automated tests locally, you have to:
1. have Node.js installed locally on your device
2. have an editor or an IDE also installed locally on your device
3. have Java installed to use allure-commandline.

Then do as follows:
1. Clone this repository to your local device
2. Open the cloned folder in the Editor
3. Open the terminal at the root of that cloned folder
4. Run the command `npm install` to install all dependancies 


### Commands to run tests
|ID|Description| Command |
| :---: | :--- | :--- |
|1|Run all tests in headless mode|`npm test` or `npx cypress run`|
|2|Run all tests in headed mode|`npx cypress open`|
|3|Generate allure report|After running the command `npm test`, run: `npm run allure:report` or `allure generate ./allure-results --clean`|
|4|Open report|`npm run openReport` or `allure open ./allure-report`|


### Automated test conditions

#### Pet-Shop user app - UI tests
|ID|Test Case| Steps and Verification |
| :---: | :--- | :--- |
|1|Signup on [Pet-Shop user app](https://pet-shop.buckhill.com.hr/)|1. Navigate to the URL: https://pet-shop.buckhill.com.hr/,<br>2. Click the **LOGIN** button,<br>3. Click the **Don't have an account? Sign up** link that's on  the **Log In** popup modal,<br>4. Enter on the **First Name**, **Last name**, **Email Address**, **Phone Number**, **Address**, **Password**, and **Confirm password** on the **Sign up** popup modal,<br>5. Check the checkbox on **I want to receive inspiration, marketing promotions and updates via email.**,<br>6. Click the **SIGN UP** button,<br>7. Verify if that user has been created.
|2|

#### Pet-Shop user app - API tests
|ID|Test Case| Steps and Verification |
| :---: | :--- | :--- |
|1|Signup on [Pet-Shop user app](https://pet-shop.buckhill.com.hr/api/v1/user/create)|1. Send a POST request to the URL: https://pet-shop.buckhill.com.hr/api/v1/user/create, with a valid request body, <br>7.  Verify if response body is an object that has property called Success with value of **1**. And Verify if the response status has a code of **200** and a message of **OK**.
|2|

#### Pet-Shop admin app - UI tests
|ID|Test Case| Steps and Verification |
| :---: | :--- | :--- |
|1|Login on [Pet-Shop user app](https://pet-shop.buckhill.com.hr/login) with valid credentials|1. Navigate to the URL: https://pet-shop.buckhill.com.hr/login,<br>2. Enter valid **Email** <br>3. Enter valid **Password**,<br>4. Click the **LOG IN** button<br>7. Verify if login was success and if user has been taken to Pet-Shop admin app UI
|2|Login on [Pet-Shop user app](https://pet-shop.buckhill.com.hr/login) with invalid credentials|1. Navigate to the URL: https://pet-shop.buckhill.com.hr/login,<br>2. Enter an invalid **Email** <br>3. Enter an invalid **Password**,<br>4. Click the **LOG IN** button<br>7. Verify if login was not success and if the message **Failed to authenticate user** has been displayed.
|3|Login on [Pet-Shop user app](https://pet-shop.buckhill.com.hr/login) with invalid email|1. Navigate to the URL: https://pet-shop.buckhill.com.hr/login,<br>2. Enter an invalid **Email** <br>3. Enter an valid **Password**,<br>4. Click the **LOG IN** button<br>7. Verify if login was not success and if the message **Failed to authenticate user** has been displayed.
|4|Login on [Pet-Shop user app](https://pet-shop.buckhill.com.hr/login) with invalid password|1. Navigate to the URL: https://pet-shop.buckhill.com.hr/login,<br>2. Enter a valid **Email** <br>3. Enter an invalid **Password**,<br>4. Click the **LOG IN** button<br>7. Verify if login was not success and if the message **Failed to authenticate user** has been displayed.


#### Pet-Shop admin app - API tests
|ID|Test Case| Steps and Verification |
| :---: | :--- | :--- |
|1|Login on [Pet-Shop user app](https://pet-shop.buckhill.com.hr//api/v1/admin/login) with valid credentials via API|1. Send a POST request with a valid request body to https://pet-shop.buckhill.com.hr//api/v1/admin/login<br>7. Verify if response body is an object that has property called Success with value of **1**. And Verify if the response status has a code of **200** and a message of **OK**.


## Test Summary Report
|Date|Test Case designed|TCs executed manually |Tcs automated | Bugs found | Bugs fixed
| :---: | :--- | :--- | :--- |:--- | :--- |
|11 July 2023 |5|4|3|2|0|