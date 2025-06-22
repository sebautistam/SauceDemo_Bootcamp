Feature: Login functionality for Saucedemo Website

Scenario: UC-1 Test the Login functionality with empty username and password

Given I am on the Login page
When I type any credentials in the "username" and "password" fields
And I delete the credentials in the "username" and "password" fields
And I click on the "login" button
Then The error message I see should "contain" "Username is required"


Scenario: UC-2 Test the Login functionality with any username and empty password

Given I am on the Login page
When I type any credentials in the "username" and "password" fields
And I delete the credential written in the "password" field
And I click on the "login" button
Then The error message I see should "contain" "Password is required"


Scenario: UC-3 Test the Login functionality with correct username and password

Given I am on the Login page
When I type username "<username>" and password "<password>" in the "username" and "password" fields
And I click on the "login" button
Then I should be redirected to the "Inventory" page
And The page title should "be equal to" "Swag Labs"

Examples:
    | username      | password      |
    | standard_user | secret_sauce  |
    | error_user    | secret_sauce  |
    | visual_user   | secret_sauce  |
