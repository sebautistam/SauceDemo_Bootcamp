class LoginPage {

    async open(){
        return browser.url('/');
    }

    item(param) {
        const selectors = {
            usernametb: '//*[@placeholder="Username"]',
            passwordtb: '//*[@placeholder="Password"]',
            loginbtn: '//*[@id="login-button"]',
            errorfield: '//*[contains(@class, "error-message-container error")]'
        }
        return $(selectors[param.toLowerCase()]);
    }

}

module.exports = LoginPage;




/**
 * @locators  
 * Username:  $('//*[@placeholder="Username"]')  
 * Password $('//*[@placeholder="Password"]') 
 * Login Buttton: $('//*[contains(@class, "submit-button btn_action")]') || $('//*[@id="login-button"]')
 * Error message: $('//*[contains(@class, "error-message-container error")]') 
 */