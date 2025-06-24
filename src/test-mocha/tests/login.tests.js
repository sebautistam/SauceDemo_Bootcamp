import allure from '@wdio/allure-reporter';
import LoginPage from '../../pom/pages/login.page';
import { testData } from './test-data/login.test.data';

const loginPage = new LoginPage();

describe('Login page', () => {

    // open the website before each test
    beforeEach( async() => {
        await loginPage.open();
    });

    //tests that use some or all empty fields (empty username, password)
    testData.filter(d => d.test === "emptyFields").forEach( data => {
        
        // @UC1: test login form with empty credentials
        it('Shows appropriate error with empty username and password', async () => {

            //check that the correct page is open
            await allure.step('Check browser URL', async () => {
                await expect(browser).toHaveUrl("https://www.saucedemo.com/");
            });

            // fill in username and password
            await allure.step('Fill in Username and Password fields, check it is correct', async () => {
                
                await loginPage.setField('username', data.username);
                await expect(loginPage.usernameTB).toHaveValue(data.username);
                
                await loginPage.setField('password',data.password);
                await expect(loginPage.passwordTB).toHaveValue(data.password);

            });

            //clears fields
            await allure.step('Clear Username and Password fields, check it is empty', async () => {
                await loginPage.clearField('username');
                await loginPage.clearField('password');

                //verify the fields are empty
                await expect(loginPage.usernameTB).toHaveValue('');
                await expect(loginPage.passwordTB).toHaveValue('');
            });

            //checks correct mesage
            await allure.step('Check Error message is the one expected', async () => {
                //click login button and expect the error
                await loginPage.clickLogin();
                await expect(loginPage.errorField).toBeDisplayed();
                // assymetric matcher
                await expect(loginPage.errorField).toHaveText(expect.stringContaining("Username is required"));
            });
        });

        // @UC2: test login form with empty password
        it('Shows appropriate errorr with empty password', async () => {

            //check that the correct page is open
            await allure.step('Check browser URL', async () => {
                await expect(browser).toHaveUrl("https://www.saucedemo.com/");
            });

            // fill in username and password
            await allure.step('Fill in Username and Password fields, check it is correct', async () => {
                
                await loginPage.setField('username', data.username);
                await loginPage.setField('password',data.password);

                await expect(loginPage.usernameTB).toHaveValue(data.username);
                await expect(loginPage.passwordTB).toHaveValue(data.password);
            });

            //clear password field
            await allure.step('Clear Password fields, check it is empty', async () => {
                await loginPage.clearField('password');

                //verify the fields are empty
                await expect(loginPage.usernameTB).not.toHaveValue('');
                await expect(loginPage.passwordTB).toHaveValue('');

            });

            //click login button and expect the error
            await allure.step('Check Error message is the one expected', async () => {
                await loginPage.clickLogin();
                await expect(loginPage.errorField).toBeDisplayed();
                //check the text contained in the field
                await expect(loginPage.errorField).toHaveText(expect.stringContaining("Password is required"));
            });

        });

    });


    //tests that use correct logins
    testData.filter(d => d.test === "correctLogin").forEach( data => {
        
        // @UC3 test login form with correct credentials
        it('Logs in with correct credentials and shows correct Title', async () => {

            //check that the correct page is open
            await allure.step('Check browser URL', async () => {
                await expect(browser).toHaveUrl("https://www.saucedemo.com/");
            });

            // fill in username and password
            await allure.step('Fill in Username and Password fields, check it is correct', async () => {
                await loginPage.setField('username', data.username);
                await loginPage.setField('password',data.password);

                await expect(loginPage.usernameTB).toHaveValue(data.username);
                await expect(loginPage.passwordTB).toHaveValue(data.password);
                
            });

            //click on login button, verify the browser was redirected to correct page
            await allure.step('Check Title and URL are Correct', async () => {
                await loginPage.clickLogin();
                //check browser title
                await expect(browser).toHaveTitle("Swag Labs");
                //check browser URL
                await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
        
            });
        });
    });

})

/**
 * @UC1 test login form with empty credentials
 * @UC2 test login form with empty password
 * @UC3 test login form with correct credentials
 */

