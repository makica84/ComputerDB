package element;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import utils.BrowserSetup;
import java.util.List;


public class Button extends BrowserSetup
{
   /**    Find element by locator
     * @param id .
     * @return .
     */
    public static WebElement findElementById(String id)
    {
        log.info("Find element located by Id:"+" "+ id);
        return driver.findElement(By.id(id));
    }

    /** Find element by locator
     * @param name .
     * @return .
     */
    public static WebElement findElementByName(String name)
    {
        log.info("Find element located by Name:"+" "+ name);
        return driver.findElement(By.name(name));
    }

    /** Find element by locator
     * @param className .
     * @return .
     */
    public static WebElement findElementByClassName(String className)
    {
        log.info("Find element located by ClassName:"+" "+ className);
        return driver.findElement(By.className(className));
    }

    /** Find element by locator
     * @param xpath .
     * @return .
     */
    public static WebElement findElementByXpath(String xpath)
    {
        log.info("Find element located by Xpath:"+" "+ xpath);
        return driver.findElement(By.xpath(xpath));
    }

    /** Find element by locator
     * @param linkText .
     * @return .
     */
    public static WebElement findElementByLinkText(String linkText)
    {
        log.info("Find element located by Link Text:"+" "+ linkText);
        return driver.findElement(By.linkText(linkText));
    }

    /** Find element by locator
     * @param partialText .
     * @return .
     */
    public static WebElement findElementByPartialLinkText(String partialText)
    {
        log.info("Find element located by Partial Link Text:"+" "+ partialText);
        return driver.findElement(By.partialLinkText(partialText));
    }

    /** Find element by locator
     * @param tag .
     * @return .
     */
    public static WebElement findElementByTag(String tag)
    {
        log.info("Find element located by Tag name:"+" "+ tag);
        return driver.findElement(By.tagName(tag));
    }

    /** Find element by locator
     * @param css .
     * @return .
     */
    public static WebElement findElementByCss(String css)
    {
        log.info("Find element located by Css selector:"+" "+ css);
        return driver.findElement(By.cssSelector(css));
    }

    /**   Find element by locator and click
     * @param id .
     */

    public static void findElementByIdAndClick(String id)
    {
        log.info("CLick on element located by Id:"+" "+ id);
        findElementById(id).click();
    }

    /** Find element by locator and click
     * @param name .
     */
    public static void findElementByNameAndClick(String name)
    {
        log.info("CLick on element located by Name:"+" "+ name);
        findElementByName(name).click();
    }

    /** Find element by locator and click
     * @param className .
     */
    public static void findElementByClassNameAndClick(String className)
    {
        log.info("CLick on element located by ClassName:"+" "+ className);
        findElementByClassName(className).click();
    }

    /** Find element by locator and click
     * @param xpath .
     */
    public static void findElementByXpathAndClick(String xpath)
    {
        log.info("CLick on element located by Xpath:"+" "+ xpath);
        findElementByXpath(xpath).click();
    }

    /** Find element by locator and click
     * @param linkText .
     */
    public static void findElementByTextAndClick(String linkText)
    {
        log.info("CLick on element located by Link Text:"+" "+ linkText);
        findElementByLinkText(linkText).click();
    }

    /** Find element by locator and click
     * @param partialText .
     */
    public static void findElementByPartialLinkTextAndClick(String partialText)
    {
        log.info("CLick on element located by Partial Link Text:"+" "+ partialText);
        findElementByLinkText(partialText).click();
    }

    /** Find element by locator and click
     * @param tag .
     */
    public static void findElementByTagAndClick(String tag)
    {
        log.info("CLick on element located by Tag Name:"+" "+ tag);
        findElementByTag(tag).click();
    }

    /** Find element by locator and click
     * @param css .
     */
    public static void findElementByCssAndClick(String css)
    {
        log.info("CLick on element located by Css Selector:"+" "+ css);
        findElementByCss(css).click();
    }
    /**   Find list by locator
     * @param css  .
     * @return  .
     */
    public static List<WebElement> findListByCss (String css)
    {
        log.info("Find list of elements by Css Selector: "+" "+css);
        return (List<WebElement>) driver.findElements(By.cssSelector(css));
    }


}