@tag
Feature: Free CRM Login Feature

  @tag1
  Scenario Outline: Free CRM Login Test Scenario
  
    Given User is already on Login Page
    When title of Login Page is Free CRM 
    Then User enters "<username>" and "<password>"
    Then User clicks on Login button
    Then User is on Home Page
    
    Examples: 
    | username | password |
    | KeyurAutomation  | Test@12345 |
    | ShaliniAutomation | Test@1234 |