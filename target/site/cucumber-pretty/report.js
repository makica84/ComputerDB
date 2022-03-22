$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateNewComputer.feature");
formatter.feature({
  "line": 1,
  "name": "CreateNewComputer",
  "description": "",
  "id": "createnewcomputer",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 3330908500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 309045000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify that user is unable to create new computer with all fields empty",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-all-fields-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I leave all fields empty",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I will see required field \"Computer name\" highlighted in red",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iLeaveAllFieldsEmpty()"
});
formatter.result({
  "duration": 393441100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 271738800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 74707200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeRequiredFieldComputerNameHighlightedInRed()"
});
formatter.result({
  "duration": 86953400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Verify that user is unable to create new computer with empty required field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-empty-required-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I leave empty Computer name field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter valid \u003cintroduced\u003e date, \u003cdiscontinued\u003e date and \u003ccompanyBrand\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I will see required field \"Computer name\" highlighted in red",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-empty-required-field;",
  "rows": [
    {
      "cells": [
        "introduced",
        "discontinued",
        "companyBrand"
      ],
      "line": 23,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-empty-required-field;;1"
    },
    {
      "cells": [
        "2020-01-01",
        "2021-02-02",
        "27"
      ],
      "line": 24,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-empty-required-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 173752000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 280644400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that user is unable to create new computer with empty required field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-empty-required-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I leave empty Computer name field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter valid 2020-01-01 date, 2021-02-02 date and 27",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I will see required field \"Computer name\" highlighted in red",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName()"
});
formatter.result({
  "duration": 77153400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-01-01",
      "offset": 14
    },
    {
      "val": "2021-02-02",
      "offset": 31
    },
    {
      "val": "27",
      "offset": 51
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidIntroducedDateDiscontinuedDateAndCompany(String,String,String)"
});
formatter.result({
  "duration": 539412400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 263744300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 61533000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeRequiredFieldComputerNameHighlightedInRed()"
});
formatter.result({
  "duration": 86699600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Verify that user is unable to create new computer with wrong date format for Introduced date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter \u003cname\u003e in Computer name field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong \u003cdate\u003e format for Introduced date field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid \u003cdiscontinued\u003e Discontinued date and \u003ccompanyBrand\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;",
  "rows": [
    {
      "cells": [
        "name",
        "date",
        "discontinued",
        "companyBrand"
      ],
      "line": 36,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;1"
    },
    {
      "cells": [
        "test",
        "01-01-2021",
        "2021-01-01",
        "1"
      ],
      "line": 37,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;2"
    },
    {
      "cells": [
        "test1",
        "Jun",
        "2020-05-05",
        "3"
      ],
      "line": 38,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;3"
    },
    {
      "cells": [
        "123456",
        "2021/01/01",
        "2019-02-01",
        "5"
      ],
      "line": 39,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;4"
    },
    {
      "cells": [
        "niña",
        "2021-Jan-01",
        "2018-03-01",
        "7"
      ],
      "line": 40,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;5"
    },
    {
      "cells": [
        "!@#)",
        "2021.01.01",
        "2017-04-04",
        "9"
      ],
      "line": 41,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;6"
    },
    {
      "cells": [
        "te st",
        "2000_2_2",
        "2016-05-05",
        "11"
      ],
      "line": 42,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;7"
    },
    {
      "cells": [
        "TEST",
        "!@#)(\u0026_^*?",
        "2018-03-01",
        "13"
      ],
      "line": 43,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;8"
    },
    {
      "cells": [
        "t",
        "2021",
        "2018-03-01",
        "15"
      ],
      "line": 44,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 151985000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 263078900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify that user is unable to create new computer with wrong date format for Introduced date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter test in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 01-01-2021 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2021-01-01 Discontinued date and 1",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 186377800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01-01-2021",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 170804500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-01-01",
      "offset": 14
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 289349300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 284799600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 64239600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 88703200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 185389100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 248497200,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify that user is unable to create new computer with wrong date format for Introduced date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter test1 in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong Jun format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2020-05-05 Discontinued date and 3",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 164766800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jun",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 187493900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-05-05",
      "offset": 14
    },
    {
      "val": "3",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 290263800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 279863900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 76921100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 88135300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 175498300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 245050000,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify that user is unable to create new computer with wrong date format for Introduced date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter 123456 in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 2021/01/01 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2019-02-01 Discontinued date and 5",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 165311500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021/01/01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 170674200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-02-01",
      "offset": 14
    },
    {
      "val": "5",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 311503900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 4042364800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 59407900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 86080500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 154448800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 271523000,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify that user is unable to create new computer with wrong date format for Introduced date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter niña in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 2021-Jan-01 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2018-03-01 Discontinued date and 7",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "niña",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 166041600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-Jan-01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 190178900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "7",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 288920000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 267528300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 95164600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 87271600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 168957300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 244160600,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify that user is unable to create new computer with wrong date format for Introduced date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter !@#) in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 2021.01.01 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2017-04-04 Discontinued date and 9",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "!@#)",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 196200500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021.01.01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 186775000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-04-04",
      "offset": 14
    },
    {
      "val": "9",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 295898000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 246346200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 69834600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 87532200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 163587500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 238683500,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify that user is unable to create new computer with wrong date format for Introduced date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter te st in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 2000_2_2 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2016-05-05 Discontinued date and 11",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "te st",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 176061500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000_2_2",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 188966300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2016-05-05",
      "offset": 14
    },
    {
      "val": "11",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 306264400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 266722700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 72174600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 88393100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 201605300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 288088200,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify that user is unable to create new computer with wrong date format for Introduced date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter TEST in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong !@#)(\u0026_^*? format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2018-03-01 Discontinued date and 13",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 204146600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!@#)(\u0026_^*?",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 168346000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "13",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 307739200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 257994500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 83066800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 104509500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 186431300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 309866500,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify that user is unable to create new computer with wrong date format for Introduced date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-introduced-date-field;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter t in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 2021 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2018-03-01 Discontinued date and 15",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "t",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 165947900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 192520000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "15",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 324375600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 247688000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 61424300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 102227000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 47,
  "name": "Verify that user is unable to create new computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter \u003cname\u003e in computer name field",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter wrong \u003cdate\u003e format for Discontinued date field",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter valid \u003cintroduced\u003e Introduced date and \u003ccompanyBrand\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.examples({
  "line": 55,
  "name": "",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;",
  "rows": [
    {
      "cells": [
        "name",
        "date",
        "introduced",
        "companyBrand"
      ],
      "line": 56,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;1"
    },
    {
      "cells": [
        "test",
        "01-01-2021",
        "2021-01-01",
        "1"
      ],
      "line": 57,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;2"
    },
    {
      "cells": [
        "test1",
        "Jun",
        "2020-05-05",
        "4"
      ],
      "line": 58,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;3"
    },
    {
      "cells": [
        "123456",
        "2021/01/01",
        "2019-02-01",
        "6"
      ],
      "line": 59,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;4"
    },
    {
      "cells": [
        "niña",
        "2021-Jan-01",
        "2018-03-01",
        "8"
      ],
      "line": 60,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;5"
    },
    {
      "cells": [
        "!@#)",
        "2021.01.01",
        "2017-04-04",
        "10"
      ],
      "line": 61,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;6"
    },
    {
      "cells": [
        "te st",
        "2000_2_2",
        "2016-05-05",
        "12"
      ],
      "line": 62,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;7"
    },
    {
      "cells": [
        "TEST",
        "!@#)(\u0026_^*?",
        "2018-03-01",
        "14"
      ],
      "line": 63,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;8"
    },
    {
      "cells": [
        "t",
        "2021",
        "2018-03-01",
        "16"
      ],
      "line": 64,
      "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 222907100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 386296200,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Verify that user is unable to create new computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter test in computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter wrong 01-01-2021 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter valid 2021-01-01 Introduced date and 1",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterTestInComputerField(String)"
});
formatter.result({
  "duration": 470814400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01-01-2021",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 252549800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-01-01",
      "offset": 14
    },
    {
      "val": "1",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 361461900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 243554900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 104618200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 81383500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 166323700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 335562300,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Verify that user is unable to create new computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter test1 in computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter wrong Jun format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter valid 2020-05-05 Introduced date and 4",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterTestInComputerField(String)"
});
formatter.result({
  "duration": 200343500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jun",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 89722700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-05-05",
      "offset": 14
    },
    {
      "val": "4",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 320812200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 262146000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 63995100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 87535100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 156067000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 247426900,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Verify that user is unable to create new computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter 123456 in computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter wrong 2021/01/01 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter valid 2019-02-01 Introduced date and 6",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterTestInComputerField(String)"
});
formatter.result({
  "duration": 198882300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021/01/01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 107803200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-02-01",
      "offset": 14
    },
    {
      "val": "6",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 292958600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 267168200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 64438700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 87930200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 159908800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 244200000,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Verify that user is unable to create new computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter niña in computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter wrong 2021-Jan-01 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter valid 2018-03-01 Introduced date and 8",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "niña",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterTestInComputerField(String)"
});
formatter.result({
  "duration": 169156300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-Jan-01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 102390600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "8",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 284199800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 259809500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 69967300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 106073700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 170765800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 246561000,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Verify that user is unable to create new computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter !@#) in computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter wrong 2021.01.01 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter valid 2017-04-04 Introduced date and 10",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "!@#)",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterTestInComputerField(String)"
});
formatter.result({
  "duration": 168030200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021.01.01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 104227300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-04-04",
      "offset": 14
    },
    {
      "val": "10",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 298126500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 258921700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 69377100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 89478800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 166231200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 243045000,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Verify that user is unable to create new computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter te st in computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter wrong 2000_2_2 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter valid 2016-05-05 Introduced date and 12",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "te st",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterTestInComputerField(String)"
});
formatter.result({
  "duration": 165698400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000_2_2",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 104546000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2016-05-05",
      "offset": 14
    },
    {
      "val": "12",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 310381700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 261139800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 67490800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 100445100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 180153200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 287214600,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Verify that user is unable to create new computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter TEST in computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter wrong !@#)(\u0026_^*? format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter valid 2018-03-01 Introduced date and 14",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterTestInComputerField(String)"
});
formatter.result({
  "duration": 172991300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!@#)(\u0026_^*?",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 106345600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "14",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 298635300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 282036900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 62604400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 86308800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 161489600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 267377000,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Verify that user is unable to create new computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-unable-to-create-new-computer-with-wrong-date-format-for-discontinued-date-field;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 46,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 48,
  "name": "I enter t in computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I enter wrong 2021 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter valid 2018-03-01 Introduced date and 16",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I will not be able to create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "t",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterTestInComputerField(String)"
});
formatter.result({
  "duration": 176383700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 110039200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "16",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 329974700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 271042300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 72681300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 84454300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 67,
  "name": "Verify that user is able to create new computer with all valid data",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-able-to-create-new-computer-with-all-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "I enter \u003cname\u003e in computer name field",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I enter valid \u003cintroduced\u003e date, \u003cdiscontinued\u003e date and \u003ccompanyBrand\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I will successfully create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "I will see message: \"Done! Computer test has been created!\"",
  "keyword": "And "
});
formatter.examples({
  "line": 74,
  "name": "",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-able-to-create-new-computer-with-all-valid-data;",
  "rows": [
    {
      "cells": [
        "name",
        "introduced",
        "discontinued",
        "companyBrand"
      ],
      "line": 75,
      "id": "createnewcomputer;verify-that-user-is-able-to-create-new-computer-with-all-valid-data;;1"
    },
    {
      "cells": [
        "test",
        "1999-01-01",
        "2021-02-02",
        "1"
      ],
      "line": 76,
      "id": "createnewcomputer;verify-that-user-is-able-to-create-new-computer-with-all-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the button Add a new computer",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 179259100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 247428700,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Verify that user is able to create new computer with all valid data",
  "description": "",
  "id": "createnewcomputer;verify-that-user-is-able-to-create-new-computer-with-all-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 66,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 68,
  "name": "I enter test in computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I enter valid 1999-01-01 date, 2021-02-02 date and 1",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click on the button Create this computer",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I will successfully create new computer",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "I will see message: \"Done! Computer test has been created!\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterTestInComputerField(String)"
});
formatter.result({
  "duration": 177262000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999-01-01",
      "offset": 14
    },
    {
      "val": "2021-02-02",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 51
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidIntroducedDateDiscontinuedDateAndCompany(String,String,String)"
});
formatter.result({
  "duration": 491670600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 449356900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSuccessfullyCreateNewComputer()"
});
formatter.result({
  "duration": 77132000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeSuccessfulMessage()"
});
formatter.result({
  "duration": 56417800,
  "status": "passed"
});
formatter.uri("DeleteComputer.feature");
formatter.feature({
  "line": 1,
  "name": "Delete Computer",
  "description": "",
  "id": "delete-computer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that user is able to delete computer from the list",
  "description": "",
  "id": "delete-computer;verify-that-user-is-able-to-delete-computer-from-the-list",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on the computer from the list",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on the button Delete this computer",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I will successfully delete computer from the list",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I will see validation message “Done! Computer has been deleted”",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 172665800,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 296485900,
  "status": "passed"
});
formatter.match({
  "location": "DeleteComputer_Steps.iClickOnTheButtonDeleteThisComputer()"
});
formatter.result({
  "duration": 399479100,
  "status": "passed"
});
formatter.match({
  "location": "DeleteComputer_Steps.iWillSuccessfullyDeleteComputerFromTheList()"
});
formatter.result({
  "duration": 76955700,
  "status": "passed"
});
formatter.match({
  "location": "DeleteComputer_Steps.iWillSeeValidationMessageDoneComputerHasBeenDeleted()"
});
formatter.result({
  "duration": 54724800,
  "status": "passed"
});
formatter.uri("EditComputer.feature");
formatter.feature({
  "line": 1,
  "name": "Edit computer",
  "description": "",
  "id": "edit-computer",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 159455300,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 324845200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify that user is unable to update computer with all fields empty",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-all-fields-empty",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I leave all fields empty",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I will see required field \"Computer name\" highlighted in red",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iLeaveAllFieldsEmpty()"
});
formatter.result({
  "duration": 367376300,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 291031000,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 61737700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeRequiredFieldComputerNameHighlightedInRed()"
});
formatter.result({
  "duration": 89136900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Verify that user is unable to update computer with empty required field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-empty-required-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I leave empty Computer name field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter valid \u003cintroduced\u003e date, \u003cdiscontinued\u003e date and \u003ccompanyBrand\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I will see required field \"Computer name\" highlighted in red",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-empty-required-field;",
  "rows": [
    {
      "cells": [
        "introduced",
        "discontinued",
        "companyBrand"
      ],
      "line": 23,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-empty-required-field;;1"
    },
    {
      "cells": [
        "2020-01-01",
        "2021-02-02",
        "27"
      ],
      "line": 24,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-empty-required-field;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 156390500,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 315859100,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that user is unable to update computer with empty required field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-empty-required-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I leave empty Computer name field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter valid 2020-01-01 date, 2021-02-02 date and 27",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I will see required field \"Computer name\" highlighted in red",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName()"
});
formatter.result({
  "duration": 81775500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-01-01",
      "offset": 14
    },
    {
      "val": "2021-02-02",
      "offset": 31
    },
    {
      "val": "27",
      "offset": 51
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidIntroducedDateDiscontinuedDateAndCompany(String,String,String)"
});
formatter.result({
  "duration": 486811400,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 285149800,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 64331200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeRequiredFieldComputerNameHighlightedInRed()"
});
formatter.result({
  "duration": 88379500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Verify that user is unable to update computer with wrong date format for Introduced\tdate field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter \u003cname\u003e in Computer name field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong \u003cdate\u003e format for Introduced date field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid \u003cdiscontinued\u003e Discontinued date and \u003ccompanyBrand\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;",
  "rows": [
    {
      "cells": [
        "name",
        "date",
        "discontinued",
        "companyBrand"
      ],
      "line": 36,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;1"
    },
    {
      "cells": [
        "test",
        "01-01-2021",
        "2021-01-01",
        "1"
      ],
      "line": 37,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;2"
    },
    {
      "cells": [
        "test1",
        "Jun",
        "2020-05-05",
        "3"
      ],
      "line": 38,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;3"
    },
    {
      "cells": [
        "123456",
        "2021/01/01",
        "2019-02-01",
        "5"
      ],
      "line": 39,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;4"
    },
    {
      "cells": [
        "niña",
        "2021-Jan-01",
        "2018-03-01",
        "7"
      ],
      "line": 40,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;5"
    },
    {
      "cells": [
        "!@#)",
        "2021.01.01",
        "2017-04-04",
        "9"
      ],
      "line": 41,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;6"
    },
    {
      "cells": [
        "te st",
        "2000_2_2",
        "2016-05-05",
        "11"
      ],
      "line": 42,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;7"
    },
    {
      "cells": [
        "TEST",
        "!@#)(\u0026_^*?",
        "2018-03-01",
        "13"
      ],
      "line": 43,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;8"
    },
    {
      "cells": [
        "t",
        "2021",
        "2018-03-01",
        "15"
      ],
      "line": 44,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 198972700,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 313513100,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify that user is unable to update computer with wrong date format for Introduced\tdate field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter test in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 01-01-2021 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2021-01-01 Discontinued date and 1",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 166672200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01-01-2021",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 188178300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-01-01",
      "offset": 14
    },
    {
      "val": "1",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 292005400,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 251485700,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 63731100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 88287200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 182851600,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 287026300,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify that user is unable to update computer with wrong date format for Introduced\tdate field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter test1 in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong Jun format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2020-05-05 Discontinued date and 3",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 180071700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jun",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 163360800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-05-05",
      "offset": 14
    },
    {
      "val": "3",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 317340500,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 363467900,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 74993600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 85387900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 176243000,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 298946600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Verify that user is unable to update computer with wrong date format for Introduced\tdate field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter 123456 in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 2021/01/01 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2019-02-01 Discontinued date and 5",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 222373300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021/01/01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 224066000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-02-01",
      "offset": 14
    },
    {
      "val": "5",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 303611300,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 288389300,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 59787500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 87764000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 167515600,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 448530900,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Verify that user is unable to update computer with wrong date format for Introduced\tdate field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter niña in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 2021-Jan-01 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2018-03-01 Discontinued date and 7",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "niña",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 190057900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-Jan-01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 199709100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "7",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 317187200,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 261226900,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 67692600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 87189300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 158750400,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 274661700,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Verify that user is unable to update computer with wrong date format for Introduced\tdate field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter !@#) in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 2021.01.01 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2017-04-04 Discontinued date and 9",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "!@#)",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 201609600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021.01.01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 172543500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-04-04",
      "offset": 14
    },
    {
      "val": "9",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 324214500,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 244365100,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 66313200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 85828300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 154994600,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 260838300,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify that user is unable to update computer with wrong date format for Introduced\tdate field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter te st in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 2000_2_2 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2016-05-05 Discontinued date and 11",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "te st",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 195785600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000_2_2",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 201246300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2016-05-05",
      "offset": 14
    },
    {
      "val": "11",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 293068600,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 251342600,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 59400000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 86561800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 186930800,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 274676000,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify that user is unable to update computer with wrong date format for Introduced\tdate field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter TEST in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong !@#)(\u0026_^*? format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2018-03-01 Discontinued date and 13",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 173533100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!@#)(\u0026_^*?",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 172014600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "13",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 287819400,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 271241000,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 102529000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 112181300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 166839800,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 286036500,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify that user is unable to update computer with wrong date format for Introduced\tdate field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-introduced-date-field;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I enter t in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter wrong 2021 format for Introduced date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter valid 2018-03-01 Discontinued date and 15",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I will see \"Introduced date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "t",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 199549500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForIntroducedDateField(String)"
});
formatter.result({
  "duration": 171851100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "15",
      "offset": 47
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalFields1(String,String)"
});
formatter.result({
  "duration": 341533100,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 254346700,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 59859400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 88295800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 48,
  "name": "Verify that user is unable to update computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I enter \u003cname\u003e in Computer name field",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter wrong \u003cdate\u003e format for Discontinued date field",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter valid \u003cintroduced\u003e Introduced date and \u003ccompanyBrand\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.examples({
  "line": 56,
  "name": "",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;",
  "rows": [
    {
      "cells": [
        "name",
        "date",
        "introduced",
        "companyBrand"
      ],
      "line": 57,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;1"
    },
    {
      "cells": [
        "test",
        "01-01-2021",
        "2021-01-01",
        "2"
      ],
      "line": 58,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;2"
    },
    {
      "cells": [
        "test1",
        "Jun",
        "2020-05-05",
        "4"
      ],
      "line": 59,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;3"
    },
    {
      "cells": [
        "123456",
        "2021/01/01",
        "2019-02-01",
        "6"
      ],
      "line": 60,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;4"
    },
    {
      "cells": [
        "niña",
        "2021-Jan-01",
        "2018-03-01",
        "8"
      ],
      "line": 61,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;5"
    },
    {
      "cells": [
        "!@#)",
        "2021.01.01",
        "2017-04-04",
        "10"
      ],
      "line": 62,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;6"
    },
    {
      "cells": [
        "te st",
        "2000_2_2",
        "2016-05-05",
        "12"
      ],
      "line": 63,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;7"
    },
    {
      "cells": [
        "TEST",
        "!@#)(\u0026_^*?",
        "2018-03-01",
        "14"
      ],
      "line": 64,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;8"
    },
    {
      "cells": [
        "t",
        "2021",
        "2018-03-01",
        "16"
      ],
      "line": 65,
      "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 172805400,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 268101000,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Verify that user is unable to update computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I enter test in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter wrong 01-01-2021 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter valid 2021-01-01 Introduced date and 2",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 174253900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "01-01-2021",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 106222700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-01-01",
      "offset": 14
    },
    {
      "val": "2",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 313289600,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 272776700,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 59856100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 86265200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 163522100,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 305957400,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Verify that user is unable to update computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I enter test1 in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter wrong Jun format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter valid 2020-05-05 Introduced date and 4",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test1",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 212440700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jun",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 105792600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2020-05-05",
      "offset": 14
    },
    {
      "val": "4",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 314591100,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 256909500,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 56679900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 87744900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 159672600,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 264702300,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Verify that user is unable to update computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I enter 123456 in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter wrong 2021/01/01 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter valid 2019-02-01 Introduced date and 6",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 178988800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021/01/01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 102314900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2019-02-01",
      "offset": 14
    },
    {
      "val": "6",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 286910700,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 266865300,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 63174200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 87260000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 159149100,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 267528300,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Verify that user is unable to update computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I enter niña in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter wrong 2021-Jan-01 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter valid 2018-03-01 Introduced date and 8",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "niña",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 191681300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021-Jan-01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 103606300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "8",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 298685800,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 249938400,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 61218800,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 102014400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 156993100,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 277682900,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Verify that user is unable to update computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I enter !@#) in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter wrong 2021.01.01 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter valid 2017-04-04 Introduced date and 10",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "!@#)",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 180242200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021.01.01",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 101541100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2017-04-04",
      "offset": 14
    },
    {
      "val": "10",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 334893200,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 252098800,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 64849000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 99503600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 156361300,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 257135200,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Verify that user is unable to update computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I enter te st in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter wrong 2000_2_2 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter valid 2016-05-05 Introduced date and 12",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "te st",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 175715700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000_2_2",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 103283200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2016-05-05",
      "offset": 14
    },
    {
      "val": "12",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 331174500,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 252018400,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 64243300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 103265600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 163409700,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 291043100,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Verify that user is unable to update computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I enter TEST in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter wrong !@#)(\u0026_^*? format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter valid 2018-03-01 Introduced date and 14",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "TEST",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 170240500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "!@#)(\u0026_^*?",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 98332000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "14",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 309489800,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 279915200,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 71168900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 87557500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 171642700,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 274584500,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Verify that user is unable to update computer with wrong date format for Discontinued date field",
  "description": "",
  "id": "edit-computer;verify-that-user-is-unable-to-update-computer-with-wrong-date-format-for-discontinued-date-field;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 47,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 49,
  "name": "I enter t in Computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I enter wrong 2021 format for Discontinued date field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I enter valid 2018-03-01 Introduced date and 16",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I will not be able to update computer",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I will see \"Discontinued date\" field highlighted in red",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "t",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterNameInComputerFieldName(String)"
});
formatter.result({
  "duration": 190724100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2021",
      "offset": 14
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterWrongDateFormatForDiscontinuedField(String)"
});
formatter.result({
  "duration": 102016700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2018-03-01",
      "offset": 14
    },
    {
      "val": "16",
      "offset": 45
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidDataForTheRestOfOptionalField2(String,String)"
});
formatter.result({
  "duration": 314233600,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 259966500,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "duration": 89193100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 83181400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 68,
  "name": "Verify that user is able to update computer with all valid data",
  "description": "",
  "id": "edit-computer;verify-that-user-is-able-to-update-computer-with-all-valid-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I enter \u003cname\u003e in computer name field",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I enter valid \u003cintroduced\u003e date, \u003cdiscontinued\u003e date and \u003ccompanyBrand\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I will successfully update computer with new data",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "I will see message: \"Done! Computer test has been updated!\"",
  "keyword": "And "
});
formatter.examples({
  "line": 75,
  "name": "",
  "description": "",
  "id": "edit-computer;verify-that-user-is-able-to-update-computer-with-all-valid-data;",
  "rows": [
    {
      "cells": [
        "name",
        "introduced",
        "discontinued",
        "companyBrand"
      ],
      "line": 76,
      "id": "edit-computer;verify-that-user-is-able-to-update-computer-with-all-valid-data;;1"
    },
    {
      "cells": [
        "test",
        "1999-01-01",
        "2021-02-02",
        "1"
      ],
      "line": 77,
      "id": "edit-computer;verify-that-user-is-able-to-update-computer-with-all-valid-data;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on the computer database list",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on the computer from the list",
  "keyword": "And "
});
formatter.match({
  "location": "CreateNewComputer_Steps.iAmOnTheComputerDatabaseList()"
});
formatter.result({
  "duration": 180447300,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 286485500,
  "status": "passed"
});
formatter.scenario({
  "line": 77,
  "name": "Verify that user is able to update computer with all valid data",
  "description": "",
  "id": "edit-computer;verify-that-user-is-able-to-update-computer-with-all-valid-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 67,
      "name": "@browser"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I enter test in computer name field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I enter valid 1999-01-01 date, 2021-02-02 date and 1",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I click on the button Save this computer",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I will successfully update computer with new data",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "I will see message: \"Done! Computer test has been updated!\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "test",
      "offset": 8
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterTestInComputerField(String)"
});
formatter.result({
  "duration": 164418800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999-01-01",
      "offset": 14
    },
    {
      "val": "2021-02-02",
      "offset": 31
    },
    {
      "val": "1",
      "offset": 51
    }
  ],
  "location": "CreateNewComputer_Steps.iEnterValidIntroducedDateDiscontinuedDateAndCompany(String,String,String)"
});
formatter.result({
  "duration": 462920800,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "duration": 386766300,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillSuccessfullyUpdateComputerWithNewData()"
});
formatter.result({
  "duration": 56164300,
  "status": "passed"
});
formatter.match({
  "location": "EditComputer_Steps.iWillSeeSuccessfulMessage()"
});
formatter.result({
  "duration": 56753200,
  "status": "passed"
});
});