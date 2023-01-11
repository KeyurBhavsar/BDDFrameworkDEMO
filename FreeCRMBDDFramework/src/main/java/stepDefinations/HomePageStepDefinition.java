package stepDefinations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageStepDefinition {

	WebDriver driver;
	WebElement NewContact;
	WebElement Conatacts;

	@Given("^User is already on Home Page$")
	public void user_is_already_on_Home_Page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty(ChromeDriverService.CHROME_DRIVER_SILENT_OUTPUT_PROPERTY,"true");
		System.setProperty("webdriver.chrome.driver", "D:\\SeleniumJars\\chromedriver.exe");	
		driver= new ChromeDriver();
		driver.get("https://classic.crmpro.com"); 
		driver.findElement(By.name("username")).sendKeys("KeyurAutomation");
		driver.findElement(By.name("password")).sendKeys("Test@12345");
		WebElement loginBtn= driver.findElement(By.xpath("//input[@type='submit']"));
	    // Write code here that turns the phrase above into concrete actions
	    loginBtn.click();
	}
	
	@When("^User mouse over on Contact Page$")
	public void user_mouse_over_on_Contact_Page() {
	    // Write code here that turns the phrase above into concrete actions
		 String title = driver.getTitle();
		 System.out.println(title);
		 Assert.assertEquals("CRMPRO", title); 
		 }
	
	@Then("^User clicks on new Contact Link$")
	public void user_clicks_on_new_Contact_Link() throws InterruptedException  {
	    // Write code here that turns the phrase above into concrete actions
		driver.switchTo().frame("mainpanel");
		WebElement Contacts=driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"));
	    Actions obj=new Actions(driver);
	    obj.moveToElement(Contacts).build().perform();
	    Thread.sleep(1000);
	    driver.findElement(By.xpath("//*[@title='New Contact']")).click();
	}

	
	 @Then("^user Enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	 public void user_Enters_and_and(String firstname, String lastname, String company)  {
	     driver.findElement(By.id("first_name")).sendKeys(firstname);
	     driver.findElement(By.id("surname")).sendKeys(lastname);
	     driver.findElement(By.id("company_position")).sendKeys(company);
	 }
	 
/*	 @Then("^user Enters \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	 public void user_Enters_and_and(String first, String last, String position)  {
	     driver.findElement(By.id("first_name")).sendKeys(first);
	     driver.findElement(By.id("surname")).sendKeys(last);
	     driver.findElement(By.id("company_position")).sendKeys(position);
	 }
*/	
	@Then("^User clicks on save button$")
	public void user_clicks_on_save_button() throws Throwable 
	{
	    // Write code here that turns the phrase above into concrete actions
	driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
	}
	
	@Then("^User verify new conatact is created$")
	public void user_verify_new_conatact_is_created()
	{
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[contains(text(),'Contacts')]")).click();
		driver.findElement(By.xpath("//a[@_name='Aditya Patel']")).isDisplayed();
	}
	
	 @Then("^Close The Browser$")
	 public void close_The_Browser()  {
	    driver.quit();
	 }
}
