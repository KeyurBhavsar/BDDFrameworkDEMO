package stepDefinations;

import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealsPageStepDefinition {

	WebDriver driver;
	WebElement NewContact;
	WebElement Conatacts;
	WebElement deals;


@Given("^user login through driver$")
public void user_login_through_driver() {
 
	System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY,"true");
	System.setProperty("webdriver.chrome.driver", "D:\\SeleniumJars\\chromedriver.exe");	
	driver= new ChromeDriver();
	driver.get("https://classic.crmpro.com"); 

}

@When("^user login through credentials$")
public void user_login_through_credentials(DataTable credentials)

{
	for(Map<String, String> data : credentials.asMaps(String.class, String.class)) 
	{
	driver.findElement(By.name("username")).sendKeys(data.get("username"));
	driver.findElement(By.name("password")).sendKeys(data.get("password"));
	}
	WebElement loginBtn= driver.findElement(By.xpath("//input[@type='submit']"));
    loginBtn.click();
    }

@Then("^user on Home page and click on Deals$")
public void user_on_Home_page_and_click_on_Deals() {
	
	driver.switchTo().frame("mainpanel");
	deals=driver.findElement(By.xpath("//a[contains(text(),'Deals')]"));
	Actions obj=new Actions(driver);
	obj.moveToElement(deals).build().perform();
	driver.findElement(By.xpath("//*[@title='New Deal']")).click();

}

//@Then("^user click on New Deal Page$")
//public void user_click_on_New_Deal_Page() throws Throwable {
//}

@Then("^user enters details in New Deal$")
public void user_enters_details_in_New_Deal(DataTable dealData)  {
	for(Map<String, String> data : dealData.asMaps(String.class, String.class))
	{
	driver.findElement(By.id("title")).sendKeys(data.get("title"));
	driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
	driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
	driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
	}
}

@Then("^Close this browser$")
public void close_this_browser() {
	driver.quit();
    }
}
