Feature: User Registration

Scenario: Register new user and delete account
  Given user launches automation exercise site
  When user clicks Signup Login
  And user enters signup details
  And user fills account information
  Then account should be created successfully
  And user deletes account
  