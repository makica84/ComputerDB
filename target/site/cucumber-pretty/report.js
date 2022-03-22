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
  "duration": 3311961400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 276057500,
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
  "duration": 345723900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 265165600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 69102500,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeRequiredFieldComputerNameHighlightedInRed()"
});
formatter.result({
  "duration": 83723900,
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
  "duration": 196882900,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 254687900,
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
  "duration": 133306100,
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
  "duration": 491221000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 361351400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 60546200,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeRequiredFieldComputerNameHighlightedInRed()"
});
formatter.result({
  "duration": 89103700,
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
  "duration": 173989400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 255049200,
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
  "duration": 186100600,
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
  "duration": 202942600,
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
  "duration": 359400300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 279180100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 87267600,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 92074800,
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
  "duration": 181957100,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 302639500,
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
  "duration": 174194400,
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
  "duration": 167961000,
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
  "duration": 317199700,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "duration": 257646000,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "duration": 70627300,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "duration": 91019300,
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
  "duration": 191394400,
  "status": "passed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "duration": 78630400,
  "error_message": "java.lang.NullPointerException\r\n\tat element.Button.findElementByIdAndClick(Button.java:98)\r\n\tat pages.CreateFormPage.clickOnAddNewComputerButton(CreateFormPage.java:40)\r\n\tat steps.CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer(CreateNewComputer_Steps.java:26)\r\n\tat ✽.And I click on the button Add a new computer(CreateNewComputer.feature:5)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 59303900,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 21837600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 23846500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 26665700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 21971200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 22149800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 23549400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 24582900,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 19570000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 25045700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 26214900,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 11065100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 26041600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillNotBeAbleToCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 25781000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(CreateNewComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iClickOnTheButtonCreateThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSuccessfullyCreateNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeSuccessfulMessage()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 11413200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(DeleteComputer.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteComputer_Steps.iClickOnTheButtonDeleteThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteComputer_Steps.iWillSuccessfullyDeleteComputerFromTheList()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DeleteComputer_Steps.iWillSeeValidationMessageDoneComputerHasBeenDeleted()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 27344400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeRequiredFieldComputerNameHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 24956700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeRequiredFieldComputerNameHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 24242600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 11798700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 11337000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 10483400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 12594400,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 26243700,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 26453500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 11810600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeIntroducedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 24362600,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 26332500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 24084100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 10295100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 10371000,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 11322100,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 11868800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 26601200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillNotBeAbleToUpdateComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CreateNewComputer_Steps.iWillSeeDiscontinuedDateFieldHighlightedInRed()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 10054200,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d99.0.4844.74)\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027GS-ARI7C\u0027, ip: \u0027172.19.128.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_291\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.74, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\marijas\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:55584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 58b094ae2f81675239d9e3dc93bbd796\r\n\tat sun.reflect.GeneratedConstructorAccessor22.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:271)\r\n\tat element.Navigate.goToUrl(Navigate.java:11)\r\n\tat pages.CreateFormPage.navigateToEnv(CreateFormPage.java:35)\r\n\tat steps.CreateNewComputer_Steps.iAmOnTheComputerDatabaseList(CreateNewComputer_Steps.java:22)\r\n\tat ✽.Given I am on the computer database list(EditComputer.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonAddNewComputer()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iClickOnTheButtonSaveThisComputer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillSuccessfullyUpdateComputerWithNewData()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EditComputer_Steps.iWillSeeSuccessfulMessage()"
});
formatter.result({
  "status": "skipped"
});
});