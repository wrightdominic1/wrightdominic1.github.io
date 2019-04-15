# Node.js & MySQL

## Overview

Bamazon is an Amazon-like storefront with the MySQL skills learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. 

Bamazon requires the MySQL and Inquirer npm packages in the homework files--this app utilizes them for data input and storage.

## Screenshots

To view screenshots of the bamazon app in use, navigate to ./screenshots and view the .mov file.

   * `bamazon-demo.mov`


## Instructions

### Customer View 

1. Bamazon requiers a MySQL Database called `bamazon`.

2. The table in the that database is called `products`.

3. The products table has each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

4. This database is populated with  10 different products corresponding to the ./db/seeds.sql file.

5. Running the application `bamazonCustomer.js` will first display all of the items available for sale. Including the ids, names, and prices of products for sale.

6. The app then prompts users with two messages.

   * The first asks for the ID of the product they would like to buy.
   * The second message asks how many units of the product they would like to buy.

7. Once the customer has placed the order, bamazon checks if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if the store _does_ have enough of the product, it will fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.
