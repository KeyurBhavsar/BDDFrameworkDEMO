@tag
Feature: Free CRM Deals Feature

 @tag1
 Scenario:  Free CRM Deals Test Scenario

Given user login through driver
    
When user login through credentials
    | username | password |
    | ************  | ******* |
  
When user on Home page and click on Deals
Then user enters details in New Deal

| title | amount | probability | commission |
| test deal1 | 1000 | 50 | 10 |
| test deal2 | 2000 | 60 | 20 |
| test deal3 | 3000 | 70 | 30 |

Then Close this browser
