const inquirer = require('inquirer');
const ContactController = require("./ContactController");

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
  this.book = new ContactController();
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
     inquirer.prompt(this.book.addContactQuestions).then((answers) => {
       this.book.addContact(answers.name, answers.phone, answers.email).then((contact) => {
         console.log("Contact added successfully!");
         this.main();
       }).catch((err) => {
         console.log(err);
         this.main();
       });
     });
   }

   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }

   getContactCount(){
     return this.contacts.length;
   }

   remindMe(){
 			return "Learning is a life-long pursuit";
 	 }
 }
