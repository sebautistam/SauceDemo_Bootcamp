class LoginPage {

    selectors  = {
            usernametb: '//*[@placeholder="Username"]',
            passwordtb: '//*[@placeholder="Password"]',
            loginbtn: '//*[@id="login-button"]',
            errorfield: '//*[contains(@class, "error-message-container error")]'
    }


    get usernameTB() {
        return $(this.selectors.usernametb)
    }

    get passwordTB() {
        return $(this.selectors.passwordtb)
    }

    get loginBtn() {
        return $(this.selectors.loginbtn)
    }

    get errorField() {
        return $(this.selectors.errorfield)
    }

    async open(){
        return await browser.url('/');
    }

    async setField(selectedField, value) {
        let field;
        switch (selectedField.toLowerCase()) {
            case "username":
                field = await this.usernameTB;
                break;
            case "password":
                field = await this.passwordTB;
                break;
            default:
                throw new Error (`Invalid field: ${selectedField}`);
        }
        await field.setValue(value);
    }

    async clearField(selectedField) {
        let field;
        switch (selectedField.toLowerCase()){
            case "username":
                field = await this.usernameTB;
                break;
            case "password":
                field = await this.passwordTB;
                break;
            default:
                throw new Error (`Invalid field: ${selectedField}`);
        }
        await field.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }

    async clickLogin() {
        const btn = await this.loginBtn;
        await btn.click();
    }

    async getErrorMessage() {
        const errorBox = await this.errorField;
        return errorBox.getText();
    }
    
}

export default LoginPage;




/**
 * @locators  
 * Username:  $('//*[@placeholder="Username"]')  
 * Password $('//*[@placeholder="Password"]') 
 * Login Buttton: $('//*[contains(@class, "submit-button btn_action")]') || $('//*[@id="login-button"]')
 * Error message: $('//*[contains(@class, "error-message-container error")]') 
 */