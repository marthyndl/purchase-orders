# purchase-orders App
## By running the application on the console you will be able to see the step-by-step functionality.

### The summary of the exercise was to work with 2 arrays 'salesOrders' and 'purchaseOrders', according to the purchase request from the customers to discount stock.
- **The exercise was to work within a function called _'allocate'_.**
- The first step was to work on sorting the stock and sales arrays by date from oldest to newest as the FIFO.
- After having the arrays sorted I tried to go through the array 'salesOrders' which I confused the array and mistakenly took the 'purchaseOrders' as sales array, and according to each element inside the array the first thing I do is to store the quantity ordered for client
- Then we make a filter of the other array that takes by error as stock due to the condition that the date of the first element of the array 'elementPurchaseOrders.receiving' is greater than or equal to 'elementSales.created'.
> This means the stock that the company has at the moment of the first purchase per customer in this new array. 
- I loop 'forEach' through this new array, and each element pass I take the current quantity and add it to a total stock variable called 'sumStockSales'. 
- I then move to a condition of whether the total stock 'sumStockSales' is greater than or equal to the quantity of the customer purchase 'stockPurchaseOrders'.
- if this condition is met we will do a subtraction of total stock 'sumStockSales' minus the customer purchase quantity 'stockPurchaseOrders'.
- and store in the final array 'arrayFinalSales' each purchase of the customer 'elementPurchaseOrders'.
- **At the end of the 'allocate' function the final array 'arrayFinalSales' is returned.**


### **I have added as a detail in the Frontend some functions that build a table with the sales with (ID, Date and Quantity) that were executed.**
- The functions are 'createTable', which receives as parameters the function with the 2 arrays 'allocate(salesOrders, purchaseOrders)' and returns the final sales array 'arrayFinalSales'.
- Then inside 'createTable' while creating the HTML of the table it executes 2 more functions that, are 'createBody' and 'getCells' to complete the table with the data dynamically from the array 'arrayFinalSales'.

✨arrayFinalSales ✨ has the final data.