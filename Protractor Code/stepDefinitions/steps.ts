import {browser,element,by} from "protractor"
import {async} from "q"
import {b92Homepage} from "../pageObjects/b92Homepage"
import {Given,When,Then} from "cucumber"

browser.waitForAngularEnabled(false);

Given

  Given('Navigate to b92 site', async()=> {
    await browser.get('https://www.b92.net/');

    await browser.sleep(5000);
  });


  When('Click on tab', async()=> {
    let b92HomePage = new b92Homepage();
    await browser.sleep(5000);
    await b92HomePage.sportTab.click();
  });


  Then('Sport is displayed', async()=> {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });