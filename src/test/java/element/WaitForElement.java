package element;

import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import utils.BrowserSetup;


public class WaitForElement extends BrowserSetup
{
    /** Wait for element (by locator) to appear
     * @param id .
     */

    public static void byIdToAppear(String id)
    {
        log.info("Wait for element (by Id) to appear:"+" "+ id);
        wdWait.until(ExpectedConditions.visibilityOfElementLocated(By.id(id)));
    }

    /** Wait for element (by locator) to appear
     * @param name .
     */
    public static void byNameToAppear(String name)
    {
        log.info("Wait for element (by Name) to appear:"+" "+ name);
        wdWait.until(ExpectedConditions.visibilityOfElementLocated(By.name(name)));
    }

    /** Wait for element (by locator) to appear
     * @param className .
     */
    public static void byClassNameToAppear(String className)
    {
        log.info("Wait for element (by ClassName) to appear:"+" "+ className);
        wdWait.until(ExpectedConditions.visibilityOfElementLocated(By.className(className)));
    }

    /** Wait for element (by locator) to appear
     * @param xpath .
     */
    public static void byXpathToAppear (String xpath)
    {
        log.info("Wait for element (by Xpath) to appear:"+" "+ xpath);
        wdWait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath)));
    }

    /** Wait for element (by locator) to appear
     * @param linkText .
     */
    public static void byLinkTextToAppear (String linkText)
    {
        log.info("Wait for element (by LinkText) to appear:"+" "+ linkText);
        wdWait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText(linkText)));
    }

    /** Wait for element (by locator) to appear
     * @param partialText .
     */
    public static void byPartialLinkTextToAppear (String partialText)
    {
        log.info("Wait for element (by Partial Link Text) to appear:"+" "+ partialText);
        wdWait.until(ExpectedConditions.visibilityOfElementLocated(By.partialLinkText(partialText)));
    }

    /** Wait for element (by locator) to appear
     * @param tag .
     */
    public static void byTagNameToAppear (String tag)
    {
        log.info("Wait for element (by Tag Name) to appear:"+" "+ tag);
        wdWait.until(ExpectedConditions.visibilityOfElementLocated(By.tagName(tag)));
    }

    /** Wait for element (by locator) to appear
     * @param css .
     */
    public static void byCssSelectorToAppear (String css)
    {
        log.info("Wait for element (by Css Selector) to appear:"+" "+ css);
        wdWait.until(ExpectedConditions.visibilityOfElementLocated(By.cssSelector(css)));
    }

    /** Wait for element (by locator) to disappear
     * @param id .
     */
    public static void byIdToDisappear(String id)
    {
        log.info("Wait for element (by Id) to disappear:"+" "+ id);
        wdWait.until(ExpectedConditions.invisibilityOfElementLocated(By.id(id)));
    }

    /** Wait for element (by locator) to disappear
     * @param name  .
     */
    public static void byNameToDisappear(String name)
    {
        log.info("Wait for element (by Name) to disappear:"+" "+ name);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.name(name)));
    }

    /** Wait for element (by locator) to disappear
     * @param className .
     */
    public static void byClassNameToDisappear (String className)
    {
        log.info("Wait for element (by ClassName) to disappear:"+" "+ className);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.className(className)));
    }

    /** Wait for element (by locator) to disappear
     * @param xpath .
     */
    public static void byXpathToDisappear (String xpath)
    {
        log.info("Wait for element (by Xpath) to disappear:"+" "+ xpath);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.xpath(xpath)));
    }

    /** Wait for element (by locator) to disappear
     * @param linkText .
     */
    public static void byLinkTextToDisappear (String linkText)
    {
        log.info("Wait for element (by Link Text) to disappear:"+" "+ linkText);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.linkText(linkText)));
    }

    /** Wait for element (by locator) to disappear
     * @param partialText .
     */
    public static void byPartialLinkTextToDisappear (String partialText)
    {
        log.info("Wait for element (by Partial Link Text) to disappear:"+" "+ partialText);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.partialLinkText(partialText)));
    }

    /** Wait for element (by locator) to disappear
     * @param tag .
     */
    public static void byTagNameToDisappear (String tag)
    {
        log.info("Wait for element (by Tag Name) to disappear:"+" "+ tag);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.tagName(tag)));
    }

    /** Wait for element (by locator) to disappear
     * @param css .
     */
    public static void byCssSelectorToDisappear(String css)
    {
        log.info("Wait for element (by Css Selector) to disappear:"+" "+ css);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(css)));
    }

    /**    Wait for element (by locator) to be clickable
     * @param id .
     */
    public static void byIdToBeClickable(String id)
    {
        log.info("Wait for element (by Id) to be clickable:"+" "+ id);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.id(id)));
    }

    /** Wait for element (by locator) to be clickable
     * @param name .
     */
    public static void byNameToBeClickable(String name)
    {
        log.info("Wait for element (by Name) to be clickable:"+" "+ name);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.name(name)));
    }

    /** Wait for element (by locator) to be clickable
     * @param className .
     */
    public static void byClassNameToBeClickable(String className)
    {
        log.info("Wait for element (by ClassName) to be clickable:"+" "+ className);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.className(className)));
    }

    /** Wait for element (by locator) to be clickable
     * @param xpath .
     */
    public static void byXpathToBeClickable (String xpath)
    {
        log.info("Wait for element (by Xpath) to be clickable:"+" "+ xpath);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.xpath(xpath)));
    }

    /** Wait for element (by locator) to be clickable
     * @param linkText .
     */
    public static void byLinkTextToBeClickable (String linkText)
    {
        log.info("Wait for element (by LinkText) to be clickable:"+" "+ linkText);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.linkText(linkText)));
    }

    /** Wait for element (by locator) to be clickable
     * @param partialText .
     */
    public static void byPartialLinkTextToBeClickable (String partialText)
    {
        log.info("Wait for element (by Partial Link Text) to be clickable:"+" "+ partialText);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.partialLinkText(partialText)));
    }

    /** Wait for element (by locator) to be clickable
     * @param tag .
     */
    public static void byTagNameToBeClickable (String tag)
    {
        log.info("Wait for element (by Tag Name) to be clickable:"+" "+ tag);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.tagName(tag)));
    }

    /** Wait for element (by locator) to be clickable
     * @param css .
     */
    public static void byCssSelectorToBeClickable (String css)
    {
        log.info("Wait for element (by Css Selector) to be clickable:"+" "+ css);
        wdWait.until(ExpectedConditions.elementToBeClickable(By.cssSelector(css)));
    }

    /**    Wait for text (by locator) to appear
     * @param id .
     * @param text .
     */
    public static void textByIdToAppear(String id, String text)
    {
        log.info("Wait for text (by Id) to appear:"+" "+ id);
        wdWait.until(ExpectedConditions.textToBe(By.id(id), text));
    }

    /** Wait for text (by locator) to appear
     * @param name .
     * @param text .
     */
    public static void textByNameToAppear(String name, String text)
    {
        log.info("Wait for text (by Name) to appear:"+" "+ name);
        wdWait.until(ExpectedConditions.textToBe(By.name(name), text));
    }

    /** Wait for text (by locator) to appear
     * @param className .
     * @param text .
     */
    public static void textByClassNameToAppear(String className, String text)
    {
        log.info("Wait for text (by ClassName) to appear:"+" "+ className);
        wdWait.until(ExpectedConditions.textToBe(By.className(className), text));
    }

    /** Wait for text (by locator) to appear
     * @param xpath .
     * @param text .
     */
    public static void textByXpathToAppear (String xpath, String text)
    {
        log.info("Wait for text (by Xpath) to appear:"+" "+ xpath);
        wdWait.until(ExpectedConditions.textToBe(By.xpath(xpath), text));
    }

    /** Wait for text (by locator) to appear
     * @param linkText .
     * @param text .
     */
    public static void textByLinkTextToAppear (String linkText, String text)
    {
        log.info("Wait for text (by LinkText) to appear:"+" "+ linkText);
        wdWait.until(ExpectedConditions.textToBe(By.linkText(linkText),text));
    }

    /** Wait for text (by locator) to appear
     * @param partialText .
     * @param text .
     */
    public static void textByPartialLinkTextToAppear (String partialText, String text)
    {
        log.info("Wait for text (by Partial Link Text) to appear:"+" "+ partialText);
        wdWait.until(ExpectedConditions.textToBe(By.partialLinkText(partialText),text));
    }

    /** Wait for text (by locator) to appear
     * @param tag .
     * @param text .
     */
    public static void textByTagNameToAppear(String tag, String text)
    {
        log.info("Wait for text (by Tag Name) to appear:"+" "+ tag);
        wdWait.until(ExpectedConditions.textToBe(By.tagName(tag),text));
    }

    /** Wait for text (by locator) to appear
     * @param css .
     * @param text .
     */
    public static void textByCssSelectorToAppear(String css, String text)
    {
        log.info("Wait for text (by Css Selector) to appear:"+" "+ css);
        wdWait.until(ExpectedConditions.textToBe(By.cssSelector(css),text));
    }

    /**   Wait for text (by locator) to disappear
     * @param id .
     * @param text .
     */
    public static void textByIdToDisappear(String id, String text)
    {
        log.info("Wait for text (by Id) to disappear:"+" "+ id);
        wdWait.until(ExpectedConditions.not(ExpectedConditions.textToBe(By.id(id), text)));
    }

    /** Wait for text (by locator) to disappear
     * @param name .
     * @param text .
     */
    public static void textByNameToDisappear(String name,  String text)
    {
        log.info("Wait for text (by Name) to disappear:"+" "+ name);
        wdWait.until(ExpectedConditions.textToBe(By.name(name), text));
    }

    /** Wait for text (by locator) to disappear
     * @param className .
     * @param text .
     */
    public static void textByClassNameToDisappear (String className,  String text)
    {
        log.info("Wait for text (by ClassName) to disappear:"+" "+ className);
        wdWait.until(ExpectedConditions.textToBe(By.className(className), text));
    }

    /** Wait for text (by locator) to disappear
     * @param xpath .
     * @param text .
     */
    public static void textByXpathToDisappear (String xpath, String text)
    {
        log.info("Wait for text (by Xpath) to disappear:"+" "+ xpath);
        wdWait.until(ExpectedConditions.textToBe(By.xpath(xpath), text));
    }

    /** Wait for text (by locator) to disappear
     * @param linkText .
     * @param text .
     */
    public static void textByLinkTextToDisappear (String linkText, String text)
    {
        log.info("Wait for text (by LinkText) to disappear:"+" "+ linkText);
        wdWait.until(ExpectedConditions.textToBe(By.linkText(linkText),text));
    }

    /** Wait for text (by locator) to disappear
     * @param partialText .
     * @param text .
     */
    public static void textByPartialLinkTextToDisappear (String partialText, String text)
    {
        log.info("Wait for text (by Partial Link Text) to disappear:"+" "+ partialText);
        wdWait.until(ExpectedConditions.textToBe(By.partialLinkText(partialText),text));
    }

    /** Wait for text (by locator) to disappear
     * @param tag .
     * @param text .
     */
    public static void textByTagNameToDisappear (String tag, String text)
    {
        log.info("Wait for text (by Tag Name) to disappear:"+" "+ tag);
        wdWait.until(ExpectedConditions.textToBe(By.tagName(tag),text));
    }

    /** Wait for text (by locator) to disappear
     * @param css .
     * @param text .
     */
    public static void textByCssSelectorToDisappear(String css, String text)
    {
        log.info("Wait for text (by Css Selector) to disappear:"+" "+ css);
        wdWait.until(ExpectedConditions.textToBe(By.cssSelector(css),text));
    }
    //   public static void waitForTextToAppear(By locator, String text) { wdWait.until(ExpectedConditions.textToBe(locator,text));}
}
