package utils;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.logging.Logger;


public class BrowserSetup
{
    public static WebDriver driver;
    public static WebDriverWait wdWait;
    public static final Logger log = Logger.getLogger(BrowserSetup.class.getName());

    @Before ("@browser")
    public WebDriver startBrowser() {
        WebDriverManager.chromedriver().setup();
        if (driver == null)
        driver = new ChromeDriver();
        wdWait = new WebDriverWait(driver, 15);
//      driver.manage().window().maximize();
    return driver;
    }
    @After("@browser")
    public void closeBrowser()
    {
//        driver.close();
        driver.quit();
//        driver = null;
    }
}
