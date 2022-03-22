package element;

import utils.BrowserSetup;


public class Navigate extends BrowserSetup {

    public static void goToUrl (String url)
        {
            log.info("Navigate to Url:" + " " + url);
            driver.get(url);
        }
}