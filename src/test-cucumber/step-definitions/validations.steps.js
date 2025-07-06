import { Then } from '@wdio/cucumber-framework';
import AllureReporter from '@wdio/allure-reporter';

import { pages } from '../../pom';

import compareText from './utils/compareText';
import compareUrl from './utils/compareUrl';

Then('The error message I see should {string} {string}', async function(compareParam, errorMessage){
    AllureReporter.addStep(`Check error message ${compareParam} and ${errorMessage}`);
    const errorShown = await pages('login').getErrorMessage();
    return compareText(errorShown, errorMessage, compareParam);
});

Then('I should be redirected to the {string} page', async function (destPage) {
     AllureReporter.addStep(`Check redirection to ${destPage} page`);
    return await compareUrl(destPage);
});

Then(
    'The text in the dashboard title should {string} {string}', 
    async function (compareParan, expectedTitle) 
    {
         AllureReporter.addStep(`Check page title is equal to ${expectedTitle}`);
        //const pageTitle = await browser.getTitle();
        const dashboardTitle = await pages('inventory').titleText.getText();
        return compareText(dashboardTitle, expectedTitle, compareParan)
});

