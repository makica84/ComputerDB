package pages;

import element.Button;
import element.Input;
import element.Navigate;
import element.WaitForElement;
import element.ClearData;
import org.openqa.selenium.WebElement;
import utils.BrowserSetup;


public class CreateFormPage extends BrowserSetup
{
    String url = "http://computer-database.herokuapp.com/computers";

    //    locator by Id
    String addButton = "add";

    //    locator by Class
    public String createButton = "primary";
    public String successfulMessage = "alert-message";
    String blankCompany = "blank";

    //    locator by Css
    String redErrorBox = "div.clearfix.error";

    //    locators for fields by id
    public String computerName = "name";
    public String introducedDate = "introduced";
    public String discontinuedDate = "discontinued";
    public String company = "company";


    public void navigateToEnv() {
        Navigate.goToUrl(url);
    }

    public void clickOnAddNewComputerButton() {
        WaitForElement.byIdToBeClickable(addButton);
        Button.findElementByIdAndClick(addButton);
    }

    public void clickOnCreateThisComputerButton() {
        WaitForElement.byClassNameToBeClickable(createButton);
        Button.findElementByClassNameAndClick(createButton);
    }

    public void enterComputerName(String computerName, String computer) {
        WaitForElement.byIdToAppear(computerName);
        Input.findElementByIdAndSendKeys(computerName, computer);
    }

    public void enterIntroducedDate(String introducedDate, String introDate) {
        WaitForElement.byIdToAppear(introducedDate);
        Input.findElementByIdAndSendKeys(introducedDate, introDate);
    }

    public void enterDiscontinuedDate(String discontinuedDate, String discDate) {
        WaitForElement.byIdToAppear(discontinuedDate);
        Input.findElementByIdAndSendKeys(discontinuedDate, discDate);
    }

    public void selectCompanyFromDropdown(String company, String value) {
        WaitForElement.byIdToAppear(company);
        Input.findDropdownByIdAndSelectOptionByValue(company, value);
    }

    public void cleanDataInComputerNameField ()
    {
        WaitForElement.byIdToAppear(computerName);
        ClearData.findElementByIdAndClear(computerName);
    }

    public void cleanDataInIntroducedDateField ()
    {
        WaitForElement.byIdToAppear(introducedDate);
        ClearData.findElementByIdAndClear(introducedDate);
    }

    public void cleanDataInDiscontinuedDateField ()
    {
        WaitForElement.byIdToAppear(discontinuedDate);
        ClearData.findElementByIdAndClear(discontinuedDate);
    }

    public void cleanDataInCompanyField ()
    {
        WaitForElement.byIdToAppear(computerName);
        Button.findElementByClassNameAndClick(blankCompany);
    }

    public WebElement redHighlightedErrorBox() {
        WaitForElement.byCssSelectorToAppear(redErrorBox);
        return Button.findElementByCss(redErrorBox);
    }

    public WebElement highlightedErrorAppear()
    {
        WaitForElement.byCssSelectorToAppear(redErrorBox);
        return Button.findElementByCss(redErrorBox);
    }
    public String actualResult()
    {
        WaitForElement.byCssSelectorToAppear(redErrorBox);
        String actualRes = redHighlightedErrorBox().getText().split("\\r?\\n")[0];
        log.info("Error is in the field - '"+actualRes+"'");
        return actualRes;
    }

    public WebElement getSuccessfulMessage() {
        WaitForElement.byClassNameToAppear(successfulMessage);
        return Button.findElementByClassName(successfulMessage);
    }
}

