package element;

import org.openqa.selenium.support.ui.Select;
import utils.BrowserSetup;
import static element.Button.*;


public class Input extends BrowserSetup
{
    /**   Find element by locator and enter text
     * @param id .
     * @param text .
     */

    public static void findElementByIdAndSendKeys(String id, String text)
    {
        log.info("Enter text in field located by Id:"+" "+ id);
        findElementById(id).sendKeys(text);
    }

    /** Find element by locator and enter text
     * @param name .
     * @param text .
     */

    public static void findElementNameIdAndSendKeys(String name, String text)
    {
        log.info("Enter text in field located by Name:"+" "+ name);
        findElementByName(name).sendKeys(text);
    }

    /**   Find element by locator and enter text
     * @param className .
     * @param text .
     */
    public static void findElementByClassAndSendKeys(String className, String text)
    {
        log.info("Enter text in field located by ClassName:"+" "+ className);
        findElementByClassName(className).sendKeys(text);
    }

    /**Find element by locator and enter text
     * @param xpath .
     * @param text .
     */
    public static void findElementByXpathAndSendKeys(String xpath, String text)
    {
        log.info("Enter text in field located by Xpath:"+" "+ xpath);
        findElementByXpath(xpath).sendKeys(text);
    }

    /**   Find element by locator and enter text
     * @param linkText .
     * @param text .
     */
    public static void findElementByLinkTextAndSendKeys(String linkText, String text)
    {
        log.info("Enter text in field located by LinkText:"+" "+ linkText);
        findElementByLinkText(linkText).sendKeys(text);
    }

    /**   Find element by locator and enter text
     * @param tag .
     * @param text .
     */
    public static void findElementByTagAndSendKeys(String tag, String text)
    {
        log.info("Enter text in field located by Tag Name:"+" "+ tag);
        findElementByTag(tag).sendKeys(text);
    }

    /** Find element by locator and enter text
     * @param css .
     * @param text .
     */
    public static void findElementByCssAndSendKeys(String css, String text)
    {
        log.info("Enter text in field located by Css Selector:"+" "+ css);
        findElementByCss(css).sendKeys(text);
    }

    /**   Drop-down box open (by locator), select the option
     * @param id .
     * @param value .
     */
    public static void findDropdownByIdAndSelectOptionByValue(String id, String value)
    {
        log.info("Click on drop-down box (by Id) and select the option (by Value):"+" "+ id);
        Select dropDown = new Select(findElementById(id));
        dropDown.selectByValue(value);
    }

    /** Drop-down box open (by locator), select the option
     * @param name   .
     * @param value  .
     */
    public static void findDropdownByNameAndSelectOptionByValue(String name, String value) {
        Select dropDown = new Select(findElementByClassName(name));
        dropDown.selectByVisibleText(value);
    }

    /** Drop-down box open (by locator), select the option
     * @param className  .
     * @param value  .
     */
    public static void findDropdownByClassNameAndSelectOptionByValue(String className, String value) {
        Select dropDown = new Select(findElementByClassName(className));
        dropDown.selectByValue(value);
    }

    /** Drop-down box open (by locator), select the option
     * @param id  .
     * @param text  .
     */
    public static void findDropdownByIdAndSelectOptionByText(String id, String text) {
        Select dropDown = new Select(findElementById(id));
        dropDown.selectByVisibleText(text);
    }

    /** Drop-down box open (by locator), select the option
     * @param name  .
     * @param text  .
     */
    public static void findDropdownByNameAndSelectOptionByText(String name, String text) {
        Select dropDown = new Select(findElementByName(name));
        dropDown.selectByVisibleText(text);
    }

    /** Drop-down box open (by locator), select the option
     * @param className  .
     * @param text  .
     */
    public static void findDropdownByClassNameAndSelectOptionByText(String className, String text) {
        Select dropDown = new Select(findElementByName(className));
        dropDown.selectByVisibleText(text);
    }

}
