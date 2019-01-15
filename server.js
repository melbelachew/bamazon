var mysql = require ("mysql");

var inquirer = require ("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
itemSearch()
  });
  
  function itemSearch (){
      var choicesArr = []
      var query = "SELECT * FROM products";
      connection.query(query, function(err,res){
console.log(res[0])
        for (var i = 0; i < res.length; i++) {

            var itemsArr = "item_id: " + res[i].item_id + " || product_name: " + res[i].product_name + " || price: " + res[i].price;

            choicesArr.push(itemsArr);

            // console.log(choicesArr);
            // console.log("item_id: " + res[i].item_id + " || product_name: " + res[i].product_name + " || price: " + res[i].price);
        }
        chooseItem(choicesArr)
       
      })

      
  }
  function chooseItem(choice){
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to buy?",
        choices: choice,
      

      })
      .then(function(answer){
        console.log(answer.action)
        chooseItemID()
      })
 
  }

  function chooseItemID(quanitity){
    inquirer.prompt({
        name: "id",
        type: "input",
        message: "Enter the Item ID of the product",
        
    
      

      })


      .then(function(answer){
        console.log(answer.id)
        var chosenItem = answer.id 
chooseQuantity()
      })
 
  }

  function chooseQuantity(quanitity){
    inquirer.prompt({
        name: "quantity",
        type: "input",
        message: "Enter quantity",
        
    
      

      })


      .then(function(answer){

        
        var purchaseQuantity = answer.quantity
        console.log(purchaseQuantity);
    //     if(purchaseQuantity <= res[chosenItem].stock_quantity){
    //        connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: res[chosenItem].stock_quantity-purchaseQuantity}])
    //     }
    })
    
  }
//   chooseItemID()