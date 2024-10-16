const { expect } = require("chai");

describe('API Demos', () => {

    it('App', async () => {
        //UiAutomator2- driver methods can be accessed by driver object
        await driver.pause(5000)

        const app = await $("~App");
        //locator in mobile testing starts with $ and ("`~AccessibiltyID(locator)
        app.click();

        const bar=await $("~Action Bar");
        //toBeExisting() will assert the element is present or exist
        await expect(bar).toBeExisting();

    });

    it('Api Title',async () => {

        const title=await $("android.widget.TextView");//class

        console.log(title.getText());
        await expect(title).toHaveText("API Demos")
    });

    it.only('ACM', async() => {

        await driver.pause(5000)

        const app = await $("~App");
        const bars=await $("~Action Bar");
        await bars.click();

        const mech=await $("~Action Bar Mechanics");
        await mech.click();
        
    });

    it('', () => {
        
    });

    it('', () => {
        
    });

    it('Notification', async() => {
        // to access the notification
        await driver.openNotifications();
        
    });
    
    it.only('Alerts', async() => {

        const app=await $("~App");
        await app.click();

        await $("~Alert Dialogs").click();

        await $("~OK Cancel dialog with a message").click();

        // this for click ok button
        //await driver.acceptAlert();

        // this for click cancel button
        await driver.dismissAlert();

        $("~OK Cancel dialog with a long message").click();

       // await driver.acceptAlert();

       await driver.dismissAlert();
    });
    it('Clear Notification',async()=>{
        await driver.openNotifications();

        await $("~Clear all notifications.").click();
    })

    it('Navigation', async() => {

        await driver.back();
    });

    it('Identify App Type',async () => {
      
        const type=await driver.getContext();

        console.log(type)

        
    });

});