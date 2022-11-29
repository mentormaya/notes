# WEB Technology 1<sup>st </sup> LAB

## Write CSS file for *Calculator* according to the design below

![Mockup Design for Calculator]('./../../../images/calculator%20mockup.png)

## Steps to be followed

1. Locate the Folder with HTML file you have created for your project to the location somewhere on computer.
2. Double click on the folder to go inside the folder.
3. Right click inside the folder and go to *New* and select *New Text Document*.
4. Give the file name as you want. Here in this example i am giving a name of *`style.css`*, so type that and hit *`Enter`*.
5. Now Double Click on the HTML file Created to open it in the default Browser.
6. Again go to the Folder where file is created and open that file in notepad or any text editor of your choice.
7. Add this code below in the HTML file inside the head section
   ```HTML
    <link rel="stylesheet" href="style.css">
   ```
8. Similarly also open the recently created *`Style.css`* with notepad or any text editor of your choice.
9.  Now you can type your *`CSS Code`* here and after saving it you can go in the browser and reload it to check if your code works.

   ```CSS
   h1{
     text-align: center;
     margin-top: 0.67em;
     margin-bottom: 0.67em;
   }
   *{
     margin: 0;
     padding: 0;
   }
   .container{
     margin: auto;
     width: 25%;
     padding: 10px;
     border: 1px solid #f2f2f2;
     -webkit-box-shadow: 1px 1px 4px 0px rgba(176,176,176,1);
        -moz-box-shadow: 1px 1px 4px 0px rgba(176,176,176,1);
             box-shadow: 1px 1px 4px 0px rgba(176,176,176,1);
     background-color: #fff;
     height: 450px;
     background-color: #F8F8F8;
   }
   .header{
     background-color: #81C784;
     padding: 10px;
     color: #fff;
     text-align: center;
   }
   .result{
     font-size: 24px;
     padding: 24px 5px;
     font-weight: 700;
     text-align: right;
     width: 96%;
     border: none;
     background-color: #F8F8F8;
   }
   .first-row,
   .second-row,
   .third-row,
   .fourth-row,
   .conflict
   {
     display: inline-block;
     width: 100%;
   }
   .global{
    padding: 15px;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 3px;
    background-color: #F2F2F2;
    float: left;
    width: 23.5%;
    margin: 0 2px;
    /*border: 1px solid #000;*/
   }
   .conflict .left,
   .conflict .right{
     float: left;
     position: relative;
   }
   .left{
     width: 74%;
   }
   .right{
     width: 24%;
   }
   .big{
     padding: 15px;
     font-weight: bold;
     font-size: 16px;
     border: none;
     border-radius: 3px;
     background-color: #F2F2F2;
     float: left;
     width: 64.5%;
     margin: 0 2px;
   }
   .small{
     padding: 15px;
     font-weight: bold;
     font-size: 16px;
     border: none;
     border-radius: 3px;
     background-color: #F2F2F2;
     float: left;
     width: 31.5%;
     margin: 0 2px;
   }
   .plus{
     height: 105px;
     width: 100%;
   }
   .green{
     background-color: #81C784;
   }
   .red{
     background-color: #F50258
   }
   .grey{
     background-color: #F2F2F2;
   }
   .white-text{
     color: #fff;
   }
   .top-margin{
     margin-top: 4px;
   }

   ```

11. Now Hit *`Ctrl+S`* to save the file.
12. Goto the Browser you opened previously and refresh your browser with either shortcut *`F5`* or reload button in the browser.
13. You will get output something like this:

>Congratulations!!! You have Successfully stylized the HTML code for Beautiful Calculator!

<p>© 2022 Ajay Singh </p>
