package element;

import utils.BrowserSetup;
import static element.Button.*;


public class ClearData extends BrowserSetup
{
    /** Find element (by locator) and clear data
     * @param id .
     */
    public static void findElementByIdAndClear(String id)
    {
        log.info("Clear field located by Id:"+" "+ id);
        findElementById(id).clear();
    }

    /** Find element (by locator) and clear data
     * @param name .
     */
    public static void findElementNameIdAndClear(String name)
    {
        log.info("Clear field located by Name:"+" "+ name);
        findElementByName(name).clear();
    }

    /** Find element (by locator) and clear data
     * @param className .
     */
    public static void findElementByClassNameAndClear(String className)
    {
        log.info("Clear field located by ClassName:"+" "+ className);
        findElementByClassName(className).clear();
    }

    /** Find element (by locator) and clear data
     * @param xpath .
     */
    public static void findElementByXpathAndClear(String xpath)
    {
        log.info("Clear field located by Xpath:"+" "+ xpath);
        findElementByXpath(xpath).clear();
    }

    /** Find element (by locator) and clear data
     * @param linkText .
     */
    public static void findElementByLinkTextAndClear(String linkText)
    {
        log.info("Clear field located by LinkText:"+" "+ linkText);
        findElementByLinkText(linkText).clear();
    }

    /** Find element (by locator) and clear data
     * @param tag .
     */
    public static void findElementByTagAndClear(String tag)
    {
        log.info("Clear field located by Tag Name:"+" "+ tag);
        findElementByTag(tag).clear();
    }

    /** Find element (by locator) and clear data
     * @param css .
     */
    public static void findElementByCssAndClear(String css)
    {
        log.info("Clear field located by Css Selector:"+" "+ css);
        findElementByCss(css).clear();
    }
}
