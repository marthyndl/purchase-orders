const salesOrders = [
  {
    id: "S1",

    created: "2020-01-02",

    quantity: 6
  },
  {
    id: "S2",

    created: "2020-11-05",

    quantity: 2
  },
  {
    id: "S3",

    created: "2019-12-04",

    quantity: 3
  },
  {
    id: "S4",

    created: "2020-01-20",

    quantity: 2
  },
  {
    id: "S5",

    created: "2019-12-15",

    quantity: 9
  }
];

const purchaseOrders = [
  {
    id: "P1",

    receiving: "2020-01-04",

    quantity: 4
  },
  {
    id: "P2",

    receiving: "2020-01-05",

    quantity: 3
  },
  {
    id: "P3",

    receiving: "2020-02-01",

    quantity: 5
  },
  {
    id: "P4",

    receiving: "2020-03-05",

    quantity: 1
  },
  {
    id: "P5",

    receiving: "2020-02-20",

    quantity: 7
  }
];

function allocate(salesOrders, purchaseOrders) {
  let salesOrdersByStock = salesOrders.sort(function (a, b) {
    // sort array salesOrders by date.
    return new Date(a.created) - new Date(b.created);
  });

  let purchaseOrdersByClients = purchaseOrders.sort(function (a, b) {
    // sort array purchaseOrders by date.
    return new Date(a.receiving) - new Date(b.receiving);
  });
  let actualStock = 0;
  let stockPurchaseOrders = 0;
  let sumStockSales = 0;
  let resultFilterStockByOrderRecieving = [];
  let orderArrayPurchaseOrders = purchaseOrdersByClients;
  let arrayFinalSales = [];
  let arrayStock = [];
  console.log("***** orderArrayPurchaseOrders", orderArrayPurchaseOrders);
  console.log("***** salesOrdersByStock", salesOrdersByStock);
  orderArrayPurchaseOrders.forEach((elementPurchaseOrders, index) => {
    console.log(elementPurchaseOrders, "purchaseOrdersByClients ID " + index);
    stockPurchaseOrders = elementPurchaseOrders.quantity;

    resultFilterStockByOrderRecieving = salesOrdersByStock.filter(
      (elementSales) =>
        new Date(elementPurchaseOrders.receiving) >=
        new Date(elementSales.created)
    );
    console.log(resultFilterStockByOrderRecieving, "stock array");
    resultFilterStockByOrderRecieving.forEach((elementSales) => {
      actualStock = elementSales.quantity;
      if (arrayStock.length === 0 || !arrayStock.includes(actualStock)) {
        arrayStock.push(actualStock);
        sumStockSales = sumStockSales + actualStock;
      }
    });
    if (sumStockSales >= stockPurchaseOrders) {
      sumStockSales = sumStockSales - stockPurchaseOrders;
      arrayFinalSales.push(elementPurchaseOrders);
    }
    console.log(
      "the quantity of products in stock that I need to release this purchase order ",
      stockPurchaseOrders
    );
    console.log(
      "quantity of stock on hand at the time of purchase order ",
      sumStockSales
    );
  });
  console.log(arrayFinalSales, "arrayFinalSales ");
  console.log(orderArrayPurchaseOrders, "orderArrayPurchaseOrders ");
  return arrayFinalSales;
}
 
console.log(allocate(salesOrders, purchaseOrders));

document.getElementById("app").innerHTML = `
<h1>Coding Exercise! Martín Lopez</h1>
<div>
This is a FIFO problem. We have products arriving based on supply, and then sent to customers based on demand.

Demand is items going out to the customers.
Supply is items coming in from the vendors
 
We need to match the two.That is essentially all we’re looking for.

The idea is to see if the candidate can understand the business problem, and can write a solution with readable concise code.
</div>
<p>
By running the application in the console you will be able to see the step-by-step operation of the code's responses.
</p>
<h3>
arrayFinalSales has the final data 
</h3>
`;

// Sales Orders are orders created by a customer for us to provide a product

// This is the demand.

// 'created': when the sales order was created

// 'quantity': how many items the customer wants

// Purchase Orders are orders created by us to receive a product

// This is the supply.

// 'receiving': when we expect to receive the product

// 'quantity': how many we will be receiving

// We want to supply the products to the customers in the order in which

// they were requested.

// Implement the function 'allocate'.

// The function should return an Array of elements. Each element should include

// -> the ID of the sales order

// -> the date the customer should expect to get the item

// Additional

// - we only send the product once we have enough for that sales order

// - (so if the sales order is for 2, we need to have 2 available before sending)

// - the function should support any number of sales orders or purchase orders

// - to make it simple we only have one product