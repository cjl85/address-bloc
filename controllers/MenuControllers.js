const inquirer = require('inquirer');

 module.exports = class MenuController {
   constructor(){
     this.mainMenuQuestions = [
       {
         type: "list",
         name: "mainMenuChoice",
         message: "Please choose from an option below: ",
         choices: [
           "Add new contact",
           "Date and Time",
           "Exit"
        ]
    }
  ];
  this.contacts = [];
 }

   main(){
     console.log(`Welcome to AddressBloc!`);
     inquirer.prompt(this.mainMenuQuestions).then((response) => {
        switch(response.mainMenuChoice){
          case "Add new contact":
            this.addContact();
            break;
          case "Date and Time":
            this.getDate();
            break;
          case "Exit":
            this.exit();
            break;
          default:
            console.log("Invalid input");
            this.main();
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }

   getDate(){
 			let date = new Date();
 			console.log(date.format(date, 'MM/DD/YYYY HH:mm:ss'));
 			this.main();
 	 }

   clear(){
     console.log("\x1Bc");
   }

   addContact(){
     this.clear();
     console.log('addContact called');
     this.main();
   }

   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }
 }
