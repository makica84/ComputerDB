Feature: CreateNewComputer

  Background:
    Given I am on the computer database list
    And I click on the button Add a new computer

  @browser
  Scenario: Verify that user is unable to create new computer with all fields empty
    And I leave all fields empty
    When I click on the button Create this computer
    Then I will not be able to create new computer
    And I will see required field "Computer name" highlighted in red

  @browser
  Scenario Outline: Verify that user is unable to create new computer with empty required field
    And I leave empty Computer name field
    And I enter valid <introduced> date, <discontinued> date and <companyBrand>
    When I click on the button Create this computer
    Then I will not be able to create new computer
    And I will see required field "Computer name" highlighted in red

    Examples:
      | introduced | discontinued | companyBrand |
      | 2020-01-01 | 2021-02-02   | 27           |

  @browser
  Scenario Outline: Verify that user is unable to create new computer with wrong date format for Introduced date field
    And I enter <name> in Computer name field
    And I enter wrong <date> format for Introduced date field
    And I enter valid <discontinued> Discontinued date and <companyBrand>
    When I click on the button Create this computer
    Then I will not be able to create new computer
    And I will see "Introduced date" field highlighted in red

    Examples:
      | name   | date        | discontinued | companyBrand |
      | test   | 01-01-2021  | 2021-01-01   | 1            |
      | test1  | Jun         | 2020-05-05   | 3            |
      | 123456 | 2021/01/01  | 2019-02-01   | 5            |
      | niña   | 2021-Jan-01 | 2018-03-01   | 7            |
      | !@#)   | 2021.01.01  | 2017-04-04   | 9            |
      | te st  | 2000_2_2    | 2016-05-05   | 11           |
      | TEST   | !@#)(&_^*?  | 2018-03-01   | 13           |
      | t      | 2021        | 2018-03-01   | 15           |

  @browser
  Scenario Outline: Verify that user is unable to create new computer with wrong date format for Discontinued date field
    And I enter <name> in computer name field
    And I enter wrong <date> format for Discontinued date field
    And I enter valid <introduced> Introduced date and <companyBrand>
    When I click on the button Create this computer
    Then I will not be able to create new computer
    And I will see "Discontinued date" field highlighted in red

    Examples:
      | name   | date        | introduced | companyBrand |
      | test   | 01-01-2021  | 2021-01-01 | 1            |
      | test1  | Jun         | 2020-05-05 | 4            |
      | 123456 | 2021/01/01  | 2019-02-01 | 6            |
      | niña   | 2021-Jan-01 | 2018-03-01 | 8            |
      | !@#)   | 2021.01.01  | 2017-04-04 | 10           |
      | te st  | 2000_2_2    | 2016-05-05 | 12           |
      | TEST   | !@#)(&_^*?  | 2018-03-01 | 14           |
      | t      | 2021        | 2018-03-01 | 16           |

  @browser
  Scenario Outline: Verify that user is able to create new computer with all valid data
    And I enter <name> in computer name field
    And I enter valid <introduced> date, <discontinued> date and <companyBrand>
    When I click on the button Create this computer
    Then I will successfully create new computer
    And I will see message: "Done! Computer test has been created!"

    Examples:
      | name | introduced | discontinued | companyBrand |
      | test | 1999-01-01 | 2021-02-02   | 1            |



