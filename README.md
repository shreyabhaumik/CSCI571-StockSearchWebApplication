# **USC CSCI 571: Web Technologies**  
#### \- taught by Prof. Marco Papa  

## **Assignment 8: Stock Search Web Application**  

### **OBJECTIVES:**  
- Get familiar with the AJAX and JSON technologies  
- Use a combination of HTML5, Bootstrap and Angular on client side  
- Use Node.js on server side  
- Get familiar with Bootstrap to enhance the user experience using responsive design  
- Get hands-on experience of Cloud services hosting NodeJS/Express  
- Learn to use popular APIs such as Tiingo API and NewsAPI  

### **TECHNOLOGIES:** 
- AJAX  
- JSON 
- Javascript  
- Typescript  
- HTML5  
- CSS
- Bootstrap 4  
- Angular 10  
- Node.js  
- Express.js  
- Amazon Web Services (AWS)  

### **DESCRIPTION:**  
In this exercise a webpage is designed that allows users to search for stocks using the Tiingo
API and display the results on the details page.  

In the home page, the user can type in the stock ticker symbol or company name in the search bar and select from an autosuggested dropdown list of matching stock symbols.  

After the user has selected and clicked the search button, the details of the company/ticker is shown. The user can switch between viewing the Summary, Top News and Charts for the company/ticker.  

The user can add or remove a company/ticker from the watchlist.  

When the user buys stocks for a company/ticker, the company/ticker gets added to the portfolio of the user. The user can also sell stocks. When the user has sold all stocks of a company/ticker, the company/ticker gets removed from the portfolio.  

In the Top News tab, a modal opens when the user clicks on an article's card. From the modal, the user can choose to share the article via twitter or facebook. The user can also choose to view the entire article.  

In the Charts tab, the user can zoom in or out within two years in the SMA and Volume by Price chart.  

The webpage is responsive and can be viewed comfortably on any screen from small phones to large monitors.  

```
NOTE: This webapp assumes that the user has unlimited money to buy stocks. So there's no limit to user's buying capacity.
```

### **EXTRA EFFORTS:**  
For the original HW, the webpage was deployed using AWS Elastic Beanstalk. This was proving to be very expensive, costing about a dollar per day.  
To keep the website live for longer with negligible cost, I later deployed the backend serverless using AWS Lambda. The frontend is hosted by github pages.  

### **EXHIBIT:**  
[Website](https://shreyabhaumikusc.github.io/HW8_frontend_angular/)  
