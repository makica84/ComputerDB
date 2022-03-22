Feature: Delete Computer

  @browser
  Scenario: Verify that user is able to delete computer from the list

    Given I am on the computer database list
    When I click on the computer from the list
    And I click on the button Delete this computer
    Then I will successfully delete computer from the list
    And I will see validation message “Done! Computer has been deleted”