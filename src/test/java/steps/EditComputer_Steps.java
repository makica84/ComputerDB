
package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.EditFormPage;
import utils.BrowserSetup;

public class EditComputer_Steps {

    EditFormPage editForm = new EditFormPage();
    public EditComputer_Steps(BrowserSetup browserSetup) { browserSetup.startBrowser();}

/**
     * Verify that user is unable to update computer with all fields empty
     */


    @And("^I click on the computer from the list$")
    public void iClickOnTheButtonAddNewComputer() {
        editForm.chooseRandomComputerFromDatabaseList();
    }

    @When("^I click on the button Save this computer$")
    public void iClickOnTheButtonSaveThisComputer() {
        editForm.clickOnSaveThisComputerButton();
    }

    @Then("^I will not be able to update computer$")
    public void iWillNotBeAbleToUpdateComputer() {
        Assert.assertTrue(editForm.redHighlightedErrorBox().isDisplayed());
    }


/**
     * Verify that user is able to update computer with all valid data
     */


    @Then("^I will successfully update computer with new data$")
    public void iWillSuccessfullyUpdateComputerWithNewData() {
        Assert.assertTrue(editForm.getSuccessfulMessage().isDisplayed());
    }

    @And("^I will see message: \"Done! Computer test has been updated!\"$")
    public void iWillSeeSuccessfulMessage() {
        Assert.assertTrue(editForm.getSuccessfulMessage().getText().contains("Done! Computer test has been updated"));
    }
}

