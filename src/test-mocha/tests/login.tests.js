import allure from '@wdio/allure-reporter';


describe('Login page', () => {

    //parametrize test data 
    const testData = [
        {username:"username_test" , password:"password_test", test: "emptyFields"},
        {username:"standard_user" , password:"secret_sauce", test: "correctLogin"},
        {username:"error_user" , password:"secret_sauce", test: "correctLogin"},
        {username:"visual_user" , password:"secret_sauce", test: "correctLogin"},
    ];

    // open the website before each test
    beforeEach( async() => {
        await browser.url("https://www.saucedemo.com");
    });

    //navigate with the parametrized data for emptyFields
    testData.filter(d => d.test === "emptyFields").forEach( data => {
        
        // @UC1: test login form with empty credentials
        it('Shows appropriate error with empty username and password', async () => {
            //locators definition
            const usernameTB = await $('//*[@placeholder="Username"]');
            const passwordTB = await $('//*[@placeholder="Password"]');
            const loginButton = await $('//*[@id="login-button"]');
            const errorField = await $('//*[contains(@class, "error-message-container error")]');

            //check that the correct page is open
            await allure.step('Check browser URL', async () => {
                await expect(browser).toHaveUrl("https://www.saucedemo.com/");
            });

            // fill in username and password
            await allure.step('Fill in Username and Password fields, check it is correct', async () => {
                
                //username
                await usernameTB.setValue(data.username);
                await expect(usernameTB).toHaveValue(data.username);
                
                //password
                await passwordTB.setValue(data.password);
                await expect(passwordTB).toHaveValue(data.password);
            });

            //clears fields
            await allure.step('Clear Username and Password fields, check it is empty', async () => {
                // Simulate double click and clear the fields
                await usernameTB.click();
                await browser.keys(['Control', 'a']);
                await browser.keys('Delete');
                await passwordTB.click();
                await browser.keys(['Control', 'a']);
                await browser.keys('Delete');

                //very the fields are empty
                await expect(usernameTB).toHaveValue('');
                await expect(passwordTB).toHaveValue('');
            });

            await allure.step('Check Error message is the one expected', async () => {
                await loginButton.click();
                await expect(errorField).toBeDisplayed();
                
                // with regex
                //await expect(errorField).toHaveText(/Username is required/);
                // assymetric matcher
                await expect(errorField).toHaveText(expect.stringContaining("Username is required"));
            });
        });

        // @UC2: test login form with empty password
        it('Shows appropriate errorr with empty password', async () => {
            //locators definition
            const usernameTB = await $('//*[@placeholder="Username"]');
            const passwordTB = await $('//*[@placeholder="Password"]');
            const loginButton = await $('//*[@id="login-button"]');
            const errorField = await $('//*[contains(@class, "error-message-container error")]');

            //check that the correct page is open
            await allure.step('Check browser URL', async () => {
                await expect(browser).toHaveUrl("https://www.saucedemo.com/");
            });

            // fill in username and password
            await allure.step('Fill in Username and Password fields, check it is correct', async () => {
                
                //username
                await usernameTB.setValue(data.username);
                await expect(usernameTB).toHaveValue(data.username);
                
                //password
                await passwordTB.setValue(data.password);
                await expect(passwordTB).toHaveValue(data.password);
            });

            //clear password field
            await allure.step('Clear Password fields, check it is empty', async () => {
                // Simulate double click and clear password
                await passwordTB.click();
                await browser.keys(['Control', 'a']);
                await browser.keys('Delete');

                //very username is not empty, password is empty
                await expect(usernameTB).not.toHaveValue('');
                await expect(passwordTB).toHaveValue('');
            });

            await allure.step('Check Error message is the one expected', async () => {
                await loginButton.click();
                //check the error field (red) is shown
                await expect(errorField).toBeDisplayed();
                //check the text contained in the field
                await expect(errorField).toHaveText(expect.stringContaining("Password is required"));
            });

        });

    });

    testData.filter(d => d.test === "correctLogin").forEach( data => {
        
        // @UC3 test login form with correct credentials
        it('Logs in with correct credentials and shows correct Title', async () => {
            //locators definition
            const usernameTB = await $('//*[@placeholder="Username"]');
            const passwordTB = await $('//*[@placeholder="Password"]');
            const loginButton = await $('//*[@id="login-button"]');

            //check that the correct page is open
            await allure.step('Check browser URL', async () => {
                await expect(browser).toHaveUrl("https://www.saucedemo.com/");
            });

            // fill in username and password
            await allure.step('Fill in Username and Password fields, check it is correct', async () => {
                
                //username
                await usernameTB.setValue(data.username);
                await expect(usernameTB).toHaveValue(data.username);
                
                //password
                await passwordTB.setValue(data.password);
                await expect(passwordTB).toHaveValue(data.password);
            });

            await allure.step('Check Title and URL are Correct', async () => {
                await loginButton.click();
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

/**
 * @locators  
 * Username:  $('//*[@placeholder="Username"]')  
 * Password $('//*[@placeholder="Password"]') 
 * Login Buttton: $('//*[contains(@class, "submit-button btn_action")]') || $('//*[@id="login-button"]')
 * Error message: $('//*[contains(@class, "error-message-container error")]') 
 */