package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.EditFormPage;
import utils.BrowserSetup;

public class DeleteComputer_Steps
{
    EditFormPage deleteComputer = new EditFormPage();
    public DeleteComputer_Steps(BrowserSetup browserSetup) { browserSetup.startBrowser();}

    @And("^I click on the button Delete this computer$")
    public void iClickOnTheButtonDeleteThisComputer() {
        deleteComputer.clickOnDeleteThisComputerButton();
    }

    @Then("^I will successfully delete computer from the list$")
    public void iWillSuccessfullyDeleteComputerFromTheList() {
        Assert.assertTrue(deleteComputer.getSuccessfulMessage().isDisplayed());
    }

    @And("^I will see validation message “Done! Computer has been deleted”$")
    public void iWillSeeValidationMessageDoneComputerHasBeenDeleted() {
        Assert.assertTrue(deleteComputer.getSuccessfulMessage().getText().contains("Done! Computer has been deleted"));
    }


}

