import { Given, When } from '@wdio/cucumber-framework';
import LoginPage from '../../pom/pages/login.page';

const loginPage = new LoginPage();

//UC1

Given('I am on the Login page', function() {
    return loginPage.open();
});

When('I type any credentials in the {string} and {string} fields', async function(field1, field2) {
    if(field1.toLowerCase() === 'username'){
        const usernameField = await loginPage.item('usernametb');
        await usernameField.setValue('test_user');
    }
    if (field2.toLowerCase() === 'password'){
        const passwordField = await loginPage.item('passwordtb');
        await passwordField.setValue('test_user');
    }
});

When('I delete the credentials in the {string} and {string} fields', async function(field1, field2){
    if(field1.toLowerCase() === 'username'){
        const usernameField = await loginPage.item('usernametb');
        await usernameField.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }
    if (field2.toLowerCase() === 'password'){
        const passwordField = await loginPage.item('passwordtb');
        await passwordField.click();
        await browser.keys(['Control', 'a']);
        await browser.keys('Delete');
    }
});

When('I click on the {string} button', async function(button){
    if(button.toLowerCase() === 'login') {
        const loginButton = await loginPage.item('loginbtn');
        await loginButton.click();
    }
});

