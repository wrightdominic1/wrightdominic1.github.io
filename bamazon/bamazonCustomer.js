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
        //connection.end();
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
                //console.log(id, quantity)

                connection.query('SELECT stock_quantity FROM products WHERE item_id = "' + id + '";', function (err, res) {
                    if (err) throw err;
                    //console.log(res[0].stock_quantity);
                    var stock = res[0].stock_quantity;
                    //return res;
                    var query = connection.query(
                        //UPDATE products SET `stock_quantity` = '5' WHERE `item_id` = 1 
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: stock-newQuantity
                            },
                            {
                                item_id: id
                            }
                        ],

                        function (err, res) {
                            // console.log(res.affectedRows + " products updated!\n");
                            // // Call deleteProduct AFTER the UPDATE completes
                            // deleteProduct();
                        }

                    );
                    console.log(query.sql);

                    connection.end();
            });


        //console.log(stock)
        //console.log(stock)


        //console.log(query.values[0])
        //console.log(query)

        // logs the actual query being run
    });

});

};