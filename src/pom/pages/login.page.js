class LoginPage {

    async open(){
        return await browser.url('/');
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

    async setField(selectedField, value) {
        let field;
        switch (selectedField.toLowerCase()) {
            case "username":
                field = await this.item('usernametb');
                break;
            case "password":
                field = await this.item('passwordtb');
                break;
            default:
                throw new Error (`Invalid field: ${fieldType}`);
        }
        await field.setValue(value);
    }

    async clearField(selectedField) {
        let field;
        switch (selectedField.toLowerCase()){
            case "username":
                field = await this.item('usernametb');
                break;
            case "password":
                field = await this.item('passwordtb');
                break;
            default:
                throw new Error (`Invalid field: ${fieldType}`);
        }
        await field.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }

    async clickLogin() {
        const btn = await this.item('loginbtn');
        await btn.click();
    }

    async getErrorMessage() {
        const errorBox = await this.item('errorfield');
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