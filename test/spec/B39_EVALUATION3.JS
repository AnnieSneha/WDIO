import { expect } from "chai";

describe('Khan Academy Test Suite', () => {

    it('Test Script 1: Navigation and Bookmarks', async() => {

        await driver.pause(5000);

        //Clicking on explore

        const explore= await $('android=new UiSelector().text("Explore")');

        await explore.click();

        //Clicking on Computing

        const computing= await $('android=new UiSelector().resourceId("Computing")');

        await computing.click();

        //Clicking on Computer Science

        const cs=await $('android=new UiSelector().text("Computer science theory")');

        await cs.click();

        //Clicking on Cryptography

        const crypto= await $('android=new UiSelector().text("Cryptography")');

        await crypto.click();

        //Clicking on the bookmarks Ancient

        const bm1= await $('android=new UiSelector().className("android.widget.ImageView").instance(0)');

        await bm1.click();

        const got=await $('android=new UiSelector().resourceId("android:id/button2")');

        await got.click();

        //  Scrolling to crytography challengers 101 and clicks the bookmark

        await driver.execute("mobile:scroll",{strategy:"-android uiautomator",selector:'new UiSelector().text("Cryptography challenge 101")'})

        const bm2=await $('android=new UiSelector().className("android.widget.ImageView").instance(3)')

        await bm2.click();

        //clicking on Bookmark of Modular Arithmatic

        const bm3=await $('android=new UiSelector().className("android.widget.ImageView").instance(9)')

        await bm3.click();

    it('Test Script 2: Book Mark Topic',async() => {

        //Navigating Back

        await driver.back();

        //Clicks on Information Theory

        const IT= await $('android=new UiSelector().text("Information theory")');

        IT.click();

        const modern= await $('android=new UiSelector().text("Modern information theory")');

        modern.click();

        });
    it('Test Script 3: Verify Bookmarks', async() => {

        //Clicks on Bookmarks and assert the text

        const  text1= await $('android=new UiSelector().text("Modular arithmetic")');

        await expect(text1).toHaveText('Modular arithmetic')
    
    });

    it('Test Script 4: Clear Bookmarks', () => {
        
        //Click Edit
        const edit=await $('android=new UiSelector().text("Edit")');

        await edit.click();

        //selecting the 4 bookmarks

        const opt1=await $('android=new UiSelector().className("android.widget.ImageView").instance(2)');

        await opt1.click();

        const opt2=await $('android=new UiSelector().className("android.widget.ImageView").instance(5)');

        await opt2.click();

        const opt3=await $('android=new UiSelector().className("android.widget.ImageView").instance(8)');

        await opt3.click();

        const opt4=await $('android=new UiSelector().className("android.widget.ImageView").instance(11)');

        await opt4.click();

        //Delete the bookmarks

        const del=await $('android= new UiSelector().text("Delete")');

        await del.click();

        //Asserting 

        const  text2= await $('android=new UiSelector().text("You have no bookmarks.")');

        await expect(text2).toHaveText('You have no bookmarks')
    
    });

    it('Test Script 5: Explore additional topics', () => {

        //Clicks on Explore

        const explore= await $('android=new UiSelector().text("Explore")');

        await explore.click();

        //Clicks on Life Skills

        const life= await $('android=new UiSelector().text("Life skills")');

        await life.click();

        //Clicks on Financial Literacy

        const finance= await $('android=new UiSelector().text("Financial Literacy")');

        await finance.click();

        //Clicks on Welcome to Financial Literacy

        const finance1= await $('android=new UiSelector().text("Welcome to Financial Literacy")');

        await finance1.click();
        
        //Clicks on Welcome to Financial Literacy with !

        const finance2= await $('android=new UiSelector().text("Welcome to Financial Literacy!")');

        await finance2.click();
    
        //Click on explore to see the recent lessons

        await explore.click();

        //Asserting

        const  text2= await $('android=new UiSelector().text("Welcome to Financial Literacy")")');

        await expect(text2).toHaveText('Welcome to Financial Literacy');
        
        console.log(text2);
        
    });


        

        
        
       
        


        


        
    




        
    
});