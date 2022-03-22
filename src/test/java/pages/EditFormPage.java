package pages;

import element.Button;
import element.WaitForElement;
import org.openqa.selenium.WebElement;
import utils.BrowserSetup;
import java.util.List;
import java.util.Random;

public class EditFormPage extends BrowserSetup
{
    //    locator by css
    String dataBase = "tbody>tr>td>a";

    //    locator by class
    String saveButton = "primary";
    public String deleteButton = "danger";

    //    locator by Css
    String redErrorBox = "div.clearfix.error";
    public String successfulMessage = "div.alert-message.warning";


    private List<WebElement> computerList() { return Button.findListByCss(dataBase); }

    private int randomComputer()
    {
        Random computer = new Random();
        int randomComputer = computer.nextInt(computerList().size());
        String randomComp = computerList().get(randomComputer).getText();
        log.info("Random chosen computer is: "+randomComp);
        computerList().get(randomComputer).click();
        return randomComputer;
    }

    public void chooseRandomComputerFromDatabaseList()
    {
        computerList();
        randomComputer();
    }

    public void clickOnSaveThisComputerButton()
    {
        WaitForElement.byClassNameToBeClickable(saveButton);
        Button.findElementByClassNameAndClick(saveButton);
    }

    public void clickOnDeleteThisComputerButton()
    {
        WaitForElement.byClassNameToBeClickable(deleteButton);
        Button.findElementByClassNameAndClick(deleteButton);
    }

    public WebElement redHighlightedErrorBox()
    {
        WaitForElement.byCssSelectorToAppear(redErrorBox);
        return Button.findElementByCss(redErrorBox);
    }

    public WebElement getSuccessfulMessage() {
        WaitForElement.byCssSelectorToAppear(successfulMessage);
        return Button.findElementByCss(successfulMessage);
    }
}


