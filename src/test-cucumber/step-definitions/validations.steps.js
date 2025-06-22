import { Then } from '@wdio/cucumber-framework';
import AllureReporter from '@wdio/allure-reporter';

import LoginPage from '../../pom/pages/login.page';
import compareText from './utils/compareText';
import compareUrl from './utils/compareUrl';

const loginPage = new LoginPage();

Then('The error message I see should {string} {string}', async function(compareParam, errorMessage){
    AllureReporter.addStep(`Check error message ${compareParam} and ${errorMessage}`);
    const errorShown = await loginPage.getErrorMessage();
    return compareText(errorShown, errorMessage, compareParam);
});

Then('I should be redirected to the {string} page', async function (destPage) {
     AllureReporter.addStep(`Check redirection to ${destPage} page`);
    return await compareUrl(destPage);
});

Then(
    'The page title should {string} {string}', 
    async function (compareParan, expectedTitle) 
    {
         AllureReporter.addStep(`Check page title is equal to ${expectedTitle}`);
        const pageTitle = await browser.getTitle();
        return compareText(pageTitle, expectedTitle, compareParan)
});

