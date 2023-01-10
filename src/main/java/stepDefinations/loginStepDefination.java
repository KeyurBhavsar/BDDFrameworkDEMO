package stepDefinations;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginStepDefination {

	WebDriver driver;

@Given("^User is already on Login Page$")
public void user_is_already_on_Login_Page() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	
	System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY,"true");
	System.setProperty("webdriver.chrome.driver", "D:\\SeleniumJars\\chromedriver.exe");	
	driver= new ChromeDriver();
	driver.get("https://classic.crmpro.com"); 
}	

@When("^title of Login Page is Free CRM$")
public void title_of_Login_Page_is_Free_CRM() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
  
   String title = driver.getTitle();
   System.out.println(title);
   Assert.assertEquals("CRMPRO - CRM software for customer relationship management, sales, and support.", title);
		   }
/*
@Then("^User enters username and password$")
public void user_enters_username_and_password() {
    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.name("username")).sendKeys("KeyurAutomation");
	driver.findElement(By.name("password")).sendKeys("Test@12345");
}
*/


@Then("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enters_username_and_password(String username, String password) {
   // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.name("username")).sendKeys(username);
	driver.findElement(By.name("password")).sendKeys(password);
}
 


@Then("^User clicks on Login button$")
public void user_clicks_on_Login_button()  {
	WebElement loginBtn= driver.findElement(By.xpath("//input[@type='submit']"));
    // Write code here that turns the phrase above into concrete actions
    loginBtn.click();
}

@Then("^User is on Home Page$")
public void user_is_on_Home_Page() {
    // Write code here that turns the phrase above into concrete actions
    String title= driver.getTitle();
    System.out.println("Home Page title ::"+ title);
    Assert.assertEquals("CRMPRO", title);
}

@Then("^user quit$")
public void user_quit() {
    System.out.println("Close Browser");
    driver.quit();}

}
