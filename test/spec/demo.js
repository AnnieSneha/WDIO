describe('Testsuite', () => {

    it('Testcase', async () => {
        //sync - it means test cases are dependent & async means they are not dependant
        await driver.pause(5000) //await - waiting for command to fulfill/executed like promise
        
        const app = await $("~App");
        //locator in mobile testing starts with $ and ("`~AccessibiltyID(locator)
        app.click();

        const bar=await $("~Action Bar");
        //toBeExisting() will assert the element is present or exist
        await expect(bar).toBeExisting();
    });
    it('Class Name', async() => {
        //find element by class Name 
        //API Demos //This is at the first screen
        const classname = await $('android.widget.TextView')
        console.log(await classname.getText());

        //Assertion
        await expect(classname).toHaveText("API Demos")
    
});
it('ActionBAr', async () => {

    await driver.pause(5000);
    const app=await $("~App");
    await app.click();

    const bar1=await $("~Action Bar");
    await bar1.click();

    const mac=await $("~Action Bar Mechanics");
    await mac.click();

  });
  it('ActionBarTabs', async () => {

    await driver.pause(5000);
    const app=await $("~App");
    await app.click();

    const bar1=await $("~Action Bar");
    await bar1.click();

    const tab=await $("~Action Bar Tabs");
    await tab.click();

    const title=await $("~Add new tab");
    console.log(await title.getText());
    await expect(title).toHaveText("ADD NEW TAB");

  });

  it('Scroll',async () => {
      
    await driver.pause(5000);
    const app=await $("~App");
    await app.click();

    //you need to give particular android = locator
    await $ ('android=new UiSelector().text("Activity")').click();

    // We use xpath here | Locator - no need to give any symbol
    const sec=await $('//android.widget.TextView[@content-desc="Secure Surfaces"]');
    
    // driver.execute ("activity",{properties}) only acc id and class name will work in properties
    await driver.execute("mobile:scroll",{strategy:"accessibility id",selector:'Secure Surfaces'})
    //await sec.click();

    const sec1=await $('//android.widget.TextView[@content-desc="Animation"]');

    await driver.execute("mobile:scroll",{strategy:"accessibility id",selector:'Animation'})

    await sec1.click();


  });

  it('Scroll1',async () => {
      
    await driver.pause(5000);
    const app=await $("~App");
    await app.click();

    //you need to give perticular android = locator
    await $ ('android=new UiSelector().text("Activity")').click();

    // We use xpath here | Locator - no need to give any symbol
    const sec=await $('//android.widget.TextView[@content-desc="Translucent"]');
    
    // driver.execute ("activity",{properties}) only acc id and class name will work in properties
    await driver.execute("mobile:scroll",{strategy:"accessibility id",selector:'Translucent'})
    await sec.click();


  });
  it('View',async () => {

    await driver.pause(5000);
    const app=await $("~Views");
    await app.click();

    await $ ("~Auto Complete").click();

    await $ ("~1. Screen Top").click();

    //Setvalue will be use to type inside native app input
    await $ ('android=new UiSelector().resourceId("io.appium.android.apis:id/edit")').setValue("India");

    await $("~Give me Focus").click();

  });
  it('VerifyText - Multiple Elements', async () => {

    const expectedList = [
      'API Demos', 'Accessibility', 'Animation', 'App', 'Content',
      'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views'
  ];
    
  const actualList = [ ]

  //TO find the elements in a samne class we will give $$
  const classList= await $$ ('android.widget.TextView')

  for (const element of classList) {

    const textElement = await element.getText();
    actualList.push(textElement);

  }
  console.log(actualList);

  await expect(actualList).toEqual(expectedList);

  });

  it('VerifyText - Multiple Elements in the apps', async () => {

    await driver.pause(5000);
    const app=await $("~App");
    await app.click();

    const expectedList = ['API Demos' , 'Action Bar', 'Activity', 'Alarm',];
    
  const actualList = [ ]

  //TO find the elements in a samne class we will give ( $$ )
  const classList= await $$('android.widget.TextView')
  
  for (let element=0 ; element<=3; element++) {

    const textElement = await classList[element].getText();
    actualList.push(textElement);

  }
  console.log(actualList);

  await expect(actualList).toEqual(expectedList);

  });

  it('Notification',async () => {

    await driver.openNotifications(); // to acces the notification.

  });
  it('Alerts', async () => {

    await driver.pause(5000);
    const app=await $("~App");
    await app.click();

    await $ ("~Alert Dialogs").click();

    await $ ("~OK Cancel dialog with a message").click();

    //await driver.acceptAlert(); // Ok
    await driver.dismissAlert(); // Cancel

    
  });
  it('Alert long msg', async () => {

    await driver.pause(5000);
    const app=await $("~App");
    await app.click();

    await $ ("~Alert Dialogs").click();

    await $ ("~OK Cancel dialog with a long message").click();
    
    await driver.acceptAlert();

  });

  it('Alert Ultra Long Msg', async () => {

    await driver.pause(5000);
    const app=await $("~App");
    await app.click();

    await $ ("~Alert Dialogs").click();

    await $ ("~List dialog").click();

    await $ ('//android.widget.TextView[@resource-id="android:id/text1" and @text="Command one"]').click();
    //await driver.dismissAlert();
    await driver.back();

    
  });
  it('Clear Notifications', async () => {

    await driver.openNotifications();

    await $ ("~Clear all notifications.").click();
    
  });

  it.only('Navigation', async () => {

    await driver.back(); // to go back.
    // Back Button: 4
    await driver.pressKeyCode(4);

    // Home Button: 3
    await driver.pressKeyCode(3);
    
      // Apps Button (Recent Apps): 187
      await driver.pressKeyCode(187);

      // Menu Button: 82
      await driver.pressKeyCode(82);

      // Search Button: 84
      await driver.pressKeyCode(84);

      // Enter Button: 66
      await driver.pressKeyCode(66);

      // Volume Up: 24
      await driver.pressKeyCode(24);

      // Volume Down: 25
      await driver.pressKeyCode(25);

      // Power Button: 26 
      await driver.pressKeyCode(26);  

  });


});













