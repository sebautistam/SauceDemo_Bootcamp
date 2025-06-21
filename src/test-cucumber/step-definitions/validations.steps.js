import { Then } from '@wdio/cucumber-framework';
import LoginPage from '../../pom/pages/login.page';
import compareText from './utils/compareText';

const loginPage = new LoginPage();


Then('The error message I see should {string} {string}', async function(compareParam, errorMessage){
    const errorBox = await loginPage.item('errorField');
    const errorShown = await errorBox.getText();
    return compareText(errorShown, errorMessage, compareParam);
});


/*
Given I am on the "Login" page
When I type any credentials into the "username" and "password" fields
And I delete the credentials in the "username" and "password" fields
And I click on the "login" button
Then The error message I see should be equal to "Username is required"
*/