import allure from '@wdio/allure-reporter';


describe('Login page', () => {

    //parametrize test data 
    const testData = [
        {name:"" , password:"", test: "emptyFields"}
    ];

    // open the website before each test
    beforeEach( async() => {
        await browser.url("https://www.saucedemo.com");

    });

    //navigate with the parametrized data for emptyFields
    testData.filter(d => d.test === "emptyFields").forEach( data => {
        
        // @UC1: test login form with empty credentials
        it('Shows error with empty username and password', async () => {
            //locators definition
            const usernameTB = await $('//*[@placeholder="Username"]');
            const passwordTB = await $('//*[@placeholder="Password"]');

            //check that the correct page is open
            await allure.step('Check browser URL', async () => {
                await expect(browser).toHaveUrl("https://www.saucedemo.com/");
            });

            // fill in username and password
            await allure.step('Fill in Username and Password fields, check it is correct', async () => {
                //username
                await usernameTB.setValue('username_test');
                await expect(usernameTB).toHaveValue('username_test');
                //password
                await passwordTB.setValue('password_test');
                await expect(passwordTB).toHaveValue('password_test');
            });

            await allure.step('Clears Username and Password fields, check it is empty', async () => {
                //username
                await usernameTB.clearValue();
                await expect(usernameTB).toHaveValue('');
                //password
                await passwordTB.clearValue();
                await expect(passwordTB).toHaveValue('');
            });

            //click on Login button after fields heve been cleared, expect error to be shown
            await allure.step('', async () => {
                
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