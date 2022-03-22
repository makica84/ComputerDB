package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.CreateFormPage;
import utils.BrowserSetup;


public class CreateNewComputer_Steps
{
    CreateFormPage createForm = new CreateFormPage();
    public CreateNewComputer_Steps(BrowserSetup browserSetup) { browserSetup.startBrowser();}

    /**
     * Verify that user is unable to create new computer with all fields empty
     */

    @Given("^I am on the computer database list$")
    public void iAmOnTheComputerDatabaseList() { createForm.navigateToEnv(); }

    @And("^I click on the button Add a new computer$")
    public void iClickOnTheButtonAddNewComputer() {
        createForm.clickOnAddNewComputerButton();
    }

    @And("^I leave all fields empty$")
    public void iLeaveAllFieldsEmpty() {
        createForm.cleanDataInComputerNameField();
        createForm.cleanDataInIntroducedDateField();
        createForm.cleanDataInDiscontinuedDateField();
        createForm.cleanDataInCompanyField();
    }

    @When("^I click on the button Create this computer$")
    public void iClickOnTheButtonCreateThisComputer() {
        createForm.clickOnCreateThisComputerButton();
    }

    @Then("^I will not be able to create new computer$")
    public void iWillNotBeAbleToCreateNewComputer() {
        Assert.assertTrue(createForm.redHighlightedErrorBox().isDisplayed());
    }

    @And("^I will see required field \"Computer name\" highlighted in red$")
    public void iWillSeeRequiredFieldComputerNameHighlightedInRed() {
        Assert.assertEquals(createForm.actualResult(), "Computer name");
    }

    /**
     * Verify that user is unable to create new computer with empty required field
     */

    @And("I leave empty Computer name field")
    public void iEnterNameInComputerFieldName() {
        createForm.cleanDataInComputerNameField();
    }

    /**
     * Verify that user is unable to create new computer with wrong date format for Introduced date field
     */

    @And("^I enter ([^\"]*) in Computer name field$")
    public void iEnterNameInComputerFieldName(String name) {
        createForm.cleanDataInComputerNameField();
        createForm.enterComputerName(createForm.computerName, name);
    }

    @And("^I enter wrong ([^\"]*) format for Introduced date field$")
    public void iEnterWrongDateFormatForIntroducedDateField(String date) {
        createForm.cleanDataInIntroducedDateField();
        createForm.enterIntroducedDate(createForm.introducedDate, date);
    }

    @And("^I enter valid ([^\"]*) Discontinued date and ([^\"]*)$")
    public void iEnterValidDataForTheRestOfOptionalFields1(String discontinued, String companyBrand) {
        createForm.cleanDataInDiscontinuedDateField();
        createForm.enterDiscontinuedDate(createForm.discontinuedDate, discontinued);
        createForm.selectCompanyFromDropdown(createForm.company, companyBrand);
    }

    @And("^I will see \"Introduced date\" field highlighted in red$")
    public void iWillSeeIntroducedDateFieldHighlightedInRed() {
        Assert.assertEquals(createForm.actualResult(), "Introduced date");
    }

     /**
     * Verify that user is unable to create new computer with wrong date format for Discontinued date field
     */

    @And("^I enter ([^\"]*) in computer name field$")
    public void iEnterTestInComputerField(String name) {
        createForm.cleanDataInComputerNameField();
        createForm.enterComputerName(createForm.computerName, name);
    }

    @And("^I enter wrong ([^\"]*) format for Discontinued date field$")
    public void iEnterWrongDateFormatForDiscontinuedField(String date) {
        createForm.enterDiscontinuedDate(createForm.discontinuedDate, date);
    }

    @And("^I enter valid ([^\"]*) Introduced date and ([^\"]*)$")
    public void iEnterValidDataForTheRestOfOptionalField2(String introduced, String companyBrand) {
        createForm.cleanDataInIntroducedDateField();
        createForm.enterIntroducedDate(createForm.introducedDate, introduced);
        createForm.selectCompanyFromDropdown(createForm.company, companyBrand);
    }

    @And("^I will see \"Discontinued date\" field highlighted in red$")
    public void iWillSeeDiscontinuedDateFieldHighlightedInRed() {
        Assert.assertEquals(createForm.actualResult(), "Discontinued date");
    }

    /**
     * Verify that user is able to create new computer with all valid data
     */

    @And("^I enter valid ([^\"]*) date, ([^\"]*) date and ([^\"]*)$")
    public void iEnterValidIntroducedDateDiscontinuedDateAndCompany(String introduced, String discontinued, String companyBrand) {
        createForm.cleanDataInIntroducedDateField();
        createForm.enterIntroducedDate(createForm.introducedDate, introduced);
        createForm.cleanDataInDiscontinuedDateField();
        createForm.enterDiscontinuedDate(createForm.discontinuedDate, discontinued);
        createForm.selectCompanyFromDropdown(createForm.company, companyBrand);
    }

    @Then("^I will successfully create new computer$")
    public void iWillSuccessfullyCreateNewComputer() {
        Assert.assertTrue(createForm.getSuccessfulMessage().isDisplayed());
    }

    @And("^I will see message: \"Done! Computer test has been created!\"$")
    public void iWillSeeSuccessfulMessage() {
        Assert.assertTrue(createForm.getSuccessfulMessage().getText().contains("Done! Computer test has been created"));
    }
}
