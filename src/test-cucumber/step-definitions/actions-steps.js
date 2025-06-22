import { Given, When } from '@wdio/cucumber-framework';
import AllureReporter from '@wdio/allure-reporter';
import LoginPage from '../../pom/pages/login.page';

const loginPage = new LoginPage();

//UC1

Given('I am on the Login page', async function() {
    AllureReporter.addStep('Open Login page');
    return await loginPage.open();
});

When(
    'I type any credentials in the {string} and {string} fields', 
    async function(userfield, passfield)
    {
        AllureReporter.addStep(`Type credentials in ${userfield} and ${passfield}`);
        if(userfield.toLowerCase() === 'username'){
            await loginPage.setField(userfield, 'test_user');
        }
        if (passfield.toLowerCase() === 'password'){
            await loginPage.setField(passfield, 'test_password');
        }
});

When(
    'I delete the credentials in the {string} and {string} fields', 
    async function(userfield, passfield)
    {
        AllureReporter.addStep(`Clear ${userfield} and ${passfield} fields`);
        if(userfield.toLowerCase() === 'username'){
            await loginPage.clearField(userfield);
        }

        if (passfield.toLowerCase() === 'password'){
            await loginPage.clearField(passfield);
        }
});

When('I click on the {string} button', async function(button){
    AllureReporter.addStep(`Click ${button} button`);
    if(button.toLowerCase() === 'login') {
        await loginPage.clickLogin();
    }
});

When (
    'I delete the credential written in the {string} field', 
    async function(passfield)
    {
        AllureReporter.addStep(`Clear ${passfield} field`);
        if(passfield.toLowerCase() === 'password'){
            await loginPage.clearField(passfield);
        }
});

When (
    'I type username {string} and password {string} in the {string} and {string} fields', 
    async function(username, password, userfield, passfield)
    {
        AllureReporter.addStep(`Type ${username} in ${userfield}, and ${password} in ${passfield}`);
        if(userfield.toLowerCase() === 'username'){
            await loginPage.setField(userfield, username);
        }
        if(passfield.toLowerCase() === 'password'){
            await loginPage.setField(passfield, password);
        }
});
