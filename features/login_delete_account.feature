Feature: User Login

  Scenario: Login with valid credentials and delete account
    Given user launches automation exercise site
    Then user should see home page successfully

    When user clicks Signup Login
    Then user should see Login to your account section

    When user enters valid email address and password
    And user clicks Login button
    Then user should see Logged in as username

    When user clicks Delete Account button
    Then user should see Account Deleted message
