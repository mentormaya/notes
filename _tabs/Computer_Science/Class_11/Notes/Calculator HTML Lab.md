# WEB Technology 1<sup>st </sup> LAB

## Write HTML file for *Calculator* according to the design below

![Mockup Design for Calculator]('./../../../images/calculator%20mockup.png)

## Steps to be followed

1. Create a Folder with whatever name you would like to give to your project to the location somewhere on computer.
2. Double click on the folder to go inside the folder.
3. Right click inside the folder and go to *New* and select *New Text Document*.
4. Give the file name as you want. Here in this example i am giving a name of *`calculator.html`*, so type that and hit *`Enter`*.
5. Now Double Click on the file Created to open it in the default Browser.
6. Again go to the Folder where file is created and open that file in notepad or any text editor of your choice.
7. Now you can type your *`HTML Code`* here and after saving it you can go in the browser and reload it to check if your code works.

   ```HTML
   <!DOCTYPE html>
   <html lang="en">
      <head>
          <title>Calculator</title>
      </head>
      <body>
          <h1>Calculator Design Using HTML Layout</h1>
             <div class="container">
               <div class="header">Calculator</div>
               <input type="text" class="result" placeholder="Enter your calculations">
               <div class="first-row">
                 <input type="button" name="" value="&radic;" class="global">
                 <input type="button" name="" value="(" class="global">
                 <input type="button" name="" value=")" class="global">
                 <input type="button" name="" value="%" class="global">
               </div>
               <div class="second-row">
                 <input type="button" name="" value="7" class="global">
                 <input type="button" name="" value="8" class="global">
                 <input type="button" name="" value="9" class="global">
                 <input type="button" name="" value="/" class="global">
               </div>
               <div class="third-row">
                 <input type="button" name="" value="4" class="global">
                 <input type="button" name="" value="5" class="global">
                 <input type="button" name="" value="6" class="global">
                 <input type="button" name="" value="X" class="global">
               </div>
               <div class="fourth-row">
                 <input type="button" name="" value="1" class="global">
                 <input type="button" name="" value="2" class="global">
                 <input type="button" name="" value="3" class="global">
                 <input type="button" name="" value="-" class="global">
               </div>
               <div class="conflict">
                 <div class="left">
                   <input type="button" name="" value="0" class=" big">
                   <input type="button" name="" value="." class=" small">
                   <input type="button" name="" value="Del" class=" red small white-text top-margin">
                   <input type="button" name="" value="=" class=" green white-text big top-margin">
                 </div>
                 <div class="right">
                   <input type="button" name="" value="+" class="global grey plus">
                 </div>
               </div>
             </div>
      </body>
   </html>
   ```

8. Now Hit *`Ctrl+S`* to save the file.
9. Goto the Browser you opened previously and refresh your browser with either shortcut *`F5`* or reload button in the browser.
10. You will get output something like this:

    <h1>Calculator Design Using HTML Layout</h1>
       <div class="container">
         <div class="header">Calculator</div>
         <input type="text" class="result" placeholder="Enter your calculations">
         <div class="first-row">
           <input type="button" name="" value="&radic;" class="global">
           <input type="button" name="" value="(" class="global">
           <input type="button" name="" value=")" class="global">
           <input type="button" name="" value="%" class="global">
         </div>
         <div class="second-row">
           <input type="button" name="" value="7" class="global">
           <input type="button" name="" value="8" class="global">
           <input type="button" name="" value="9" class="global">
           <input type="button" name="" value="/" class="global">
         </div>
         <div class="third-row">
           <input type="button" name="" value="4" class="global">
           <input type="button" name="" value="5" class="global">
           <input type="button" name="" value="6" class="global">
           <input type="button" name="" value="X" class="global">
         </div>
         <div class="fourth-row">
           <input type="button" name="" value="1" class="global">
           <input type="button" name="" value="2" class="global">
           <input type="button" name="" value="3" class="global">
           <input type="button" name="" value="-" class="global">
         </div>
         <div class="conflict">
           <div class="left">
             <input type="button" name="" value="0" class=" big">
             <input type="button" name="" value="." class=" small">
             <input type="button" name="" value="Del" class=" red small white-text top-margin">
             <input type="button" name="" value="=" class=" green white-text big top-margin">
           </div>
           <div class="right">
             <input type="button" name="" value="+" class="global grey plus">
           </div>
         </div>
       </div>

>Congratulations!!! You have coded HTML base for your Calculator Successfully!

<p> © 2022 Ajay Singh </p>
