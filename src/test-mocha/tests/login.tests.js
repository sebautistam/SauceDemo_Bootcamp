import allure from '@wdio/allure-reporter';
import { testData } from './test-data/login.test.data';
import { pages } from '../../pom';


describe('Login page', () => {

    // open the website before each test
    beforeEach( async() => {
        await pages('login').open();
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
                
                await pages('login').setField('username', data.username);
                await expect(pages('login').usernameTB).toHaveValue(data.username);
                
                await pages('login').setField('password',data.password);
                await expect(pages('login').passwordTB).toHaveValue(data.password);

            });

            //clears fields
            await allure.step('Clear Username and Password fields, check it is empty', async () => {
                await pages('login').clearField('username');
                await pages('login').clearField('password');

                //verify the fields are empty
                await expect(pages('login').usernameTB).toHaveValue('');
                await expect(pages('login').passwordTB).toHaveValue('');
            });

            //checks correct mesage
            await allure.step('Check Error message is the one expected', async () => {
                //click login button and expect the error
                await pages('login').clickLogin();
                await expect(pages('login').errorField).toBeDisplayed();
                // assymetric matcher
                await expect(pages('login').errorField).toHaveText(expect.stringContaining("Username is required"));
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
                
                await pages('login').setField('username', data.username);
                await pages('login').setField('password',data.password);

                await expect(pages('login').usernameTB).toHaveValue(data.username);
                await expect(pages('login').passwordTB).toHaveValue(data.password);
            });

            //clear password field
            await allure.step('Clear Password fields, check it is empty', async () => {
                await pages('login').clearField('password');

                //verify the fields are empty
                await expect(pages('login').usernameTB).not.toHaveValue('');
                await expect(pages('login').passwordTB).toHaveValue('');

            });

            //click login button and expect the error
            await allure.step('Check Error message is the one expected', async () => {
                await pages('login').clickLogin();
                await expect(pages('login').errorField).toBeDisplayed();
                //check the text contained in the field
                await expect(pages('login').errorField).toHaveText(expect.stringContaining("Password is required"));
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
                await pages('login').setField('username', data.username);
                await pages('login').setField('password',data.password);

                await expect(pages('login').usernameTB).toHaveValue(data.username);
                await expect(pages('login').passwordTB).toHaveValue(data.password);
                
            });

            //click on login button, verify the browser was redirected to correct page
            await allure.step('Check Title and URL are Correct', async () => {
                await pages('login').clickLogin();
                
                //check browser URL
                await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html");
                //check Page Text in Dashboard
                await expect(pages('inventory').titleText).toHaveText('Swag Labs');
            });
        });
    });

})

/**
 * @UC1 test login form with empty credentials
 * @UC2 test login form with empty password
 * @UC3 test login form with correct credentials
 */

