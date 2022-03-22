import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/***
     * Test Runner
     */


@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"json:target/cucumber.json",
                "html:target/site/cucumber-pretty",
                "pretty"},
        features = {"src/test/java/features"},
        glue = "steps",
        monochrome = false
)

    public class RunCucumberTest {}

/**
 *  For cmd command to run tests
    mvn test -Dtest=RunCucumberTest test
 */
