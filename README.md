Documentation for NewsCorp Coding Test
A single application is being designed combining Task 1 and Task 2.The application is responsive with static data in the "Breaking News" section and dynamic data in "Most Popular Sport News" section.
The index.html page is the starting page of application.
However, we need to create a JSON server at local by running the below commands
       npm install -g json-server
     ("Run this command at the folder where the json file is located NewsCorpTest\data")
       json-server --watch SportsNews.json
Task 1
1. The webpage is built using framework Bootstrap v3.3.7
2. The css is style.less which is compiled to style.css.
            npm install -g less
            > lessc styles.less styles.css 
3. Custom fonts for headings like "Breaking News" and "Most Popular Sport News" used is "Open Sans Bold"   and for numbering in the "Most Popular Sport News" section, the font assumed is "Lato-Bold".
4. Bootstrap glyphicon is used for arrow next to breaking news.
 Task 2   
   1. The file " SportsNews.json " contains the json data.
   2. A local json server is created (to resolve the cross domain issue of fetching the data with ajax) 
       by running the below commands
       npm install -g json-server
       json-server --watch SportsNews.json("Run this command at the folder where the json file is located")
    3. The function getJson fetches the JSON 
	4. The function populateUI(data)populates the data into the UI structure.
    5. The sort function arranges the links based on the values of order in the JSON file.
    6. The setTimeout function is called to check any changes in the data and refreshes the contents after that.

Test Devices
The application is responsive and works on 
  1. Chrome
  2. Firefox
  3. IE
  4. IPhone(Chrome developer tool)
  5. IPad(Chrome developer tool)
  
  The screenshots are attached for reference.
