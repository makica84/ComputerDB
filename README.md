# ComputerDatabase Test

This project is developed for automated testing of the sample application
"http://computer-database.herokuapp.com/computers".

Project 'ComputerDB' is based on Page Object Model (POM) design pattern, which is used to separate
the WebElements, Page Methods and the Test execution.
---

###Prerequisites:

**Software tools used in project:**

1. Java - version 1.8.0_291
2. Maven - version 3.8.1
3. Selenium - version 3.12.0 
4. Chromedriver - version 90.0.4430.24

---
**SetUp:**

1. Install Java and set JAVA_HOME

   Please ensure than Java is installed by execution of the next command in cmd: java -version
   
   Instructions: [java](https://docs.oracle.com/cd/E19182-01/820-7851/inst_cli_jdk_javahome_t/)

2. Download Maven and set MAVEN_HOME
   
   ⚠️ Maven is required to run tests from this project.
   
   Please ensure than Maven is installed by execution of the next command in cmd or terminal: mvn --version
   
   Instructions: [maven](https://maven.apache.org/install.html#)
   
3. Download chomedriver and set path
   
   Instructions: [chromedriver](https://chromedriver.chromium.org/downloads)
---   
###How to execute Tests:

**From IDE**

1. To run test suite: right click on class 'RunCucumberTest' from package 'utils'
2. Click on Run 'RunCucumberTest'

---
 
**From Cmd**

1. Open cmd
2. Go to local root project directory
   Execute next command:
   
   * mvn test -Dtest=RunCucumberTest test

