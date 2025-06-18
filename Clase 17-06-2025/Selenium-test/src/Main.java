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
            driver.get("http://localhost:5174");
            Thread.sleep(5000);

            driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div/div/div[2]/input")).sendKeys("José Ibarra");

            driver.findElement(By.cssSelector("#root > div > div > div > div:nth-child(2) > form > div > div > div:nth-child(3) > input")).sendKeys("12345678");

            driver.findElement(By.id("inputEdad")).sendKeys("24");

            driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div/div/div[5]/input")).sendKeys("1234567891234");

            driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div/div/div[6]/input")).sendKeys("1234567891234");

            WebElement selectGenero = driver.findElement(By.tagName("select"));
            selectGenero.sendKeys("Femenino");

            driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[2]/form/div/div/div[8]/input")).sendKeys("Direción falsa 123");
            WebElement fileInput = driver.findElement(By.id("inputCV"));
            fileInput.sendKeys("C:\\Users\\findl\\Downloads\\CVPrueba.pdf");

            WebElement botonEnviar = driver.findElement(By.id("btnRegistrar"));
            botonEnviar.click();

            Thread.sleep(5000);
        } catch (Exception e){
            throw new RuntimeException();
        } finally {
            driver.quit();
        }
    }
}