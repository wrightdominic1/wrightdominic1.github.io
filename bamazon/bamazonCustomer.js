var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    run();
});

function run() {
    connection.query('SELECT * FROM products;', function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        inquirer
            .prompt([
                {
                    type: "prompt",
                    message: "what's the ID of the item you'd like to purchase?",
                    name: "id"
                },
                {
                    type: "prompt",
                    message: "how many would you like to buy?",
                    name: "quantity"
                }
            ]).then(function (inquirerResponse) {
                var id = inquirerResponse.id;
                var newQuantity = parseInt(inquirerResponse.quantity);

                connection.query('SELECT stock_quantity, product_name FROM products WHERE item_id = "' + id + '";', function (err, res) {
                    if (err) throw err;
                    console.log(res[0].product_name)
                    var stock = res[0].stock_quantity;
                    var newStock = stock - newQuantity;
                    var item = res[0].product_name;
                    connection.query(
                        //UPDATE products SET `stock_quantity` = '5' WHERE `item_id` = 1 
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: newStock
                            },
                            {
                                item_id: id
                            }
                        ],
                    );
                    if (stock <= 0) {
                        console.log("Our appologies, " + item + " are out of stock. " + item + " are on back order for " + Math.abs(newStock) + " total customers.")
                    } else {
                        console.log("Purchase successful! " + newStock + " " + item + " left.")
                    }
                    connection.end();
                });
            });
    });
};