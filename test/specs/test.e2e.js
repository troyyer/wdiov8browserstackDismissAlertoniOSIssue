
describe("Testing with Bstack", () => {

    it.only(`go to the Test Alert page`, async () => {
      await browser.url("https://demo.automationtesting.in/Alerts.html");
        await $(`//a[@href='#CancelTab'][contains(.,'Alert with OK & Cancel')]`).click()
        await expect($(`//button[contains(.,'click the button to display a confirm box')]`)).toBeDisplayed()
        await $(`//button[contains(.,'click the button to display a confirm box')]`).click()
        await browser.pause(5000)
      // await browser.debug()
      await browser.dismissAlert();
        await expect ($(`//p[@id='demo']`)).toHaveTextContaining("You Pressed Cancel")
    })

})  
