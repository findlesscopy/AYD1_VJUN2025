import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        System.setProperty("web.chrome.driver", "C:\\Users\\findl\\Downloads\\chromedriver-win64\\chromedriver-win64\\chromedriver.exe");

        WebDriver driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));

        try{
            driver.get("http://localhost:3000");
            Thread.sleep(5000);

            driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div/div/div[2]/input")).sendKeys("José Ibarra");

            WebElement botonEnviar = driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div/div/div[9]/button"));
            botonEnviar.click();

            Thread.sleep(5000);
        } catch (Exception e){
            throw new RuntimeException();
        } finally {
            driver.quit();
        }
    }
}