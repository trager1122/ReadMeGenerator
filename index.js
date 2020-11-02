var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown=require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [{type: "input",
                    message: "What is your GitHub username?",
                    name: "username"
                   },
                   {type: "input",
                    message: "What is your e-mail address?",
                    name: "email"
                   },
                   {type: "input",
                    message: "What is the title of your project?",
                    name: "title"
                   },
                   {type:  "input",
                    message: "Please write a short description of your project.",
                    name: "description"
                   },
                   {type: "list",
                    name: "license",
                    message: "What type of license does your project have?",
                    choices: ['None','MIT', 'GPL', 'LGPL', 'MPL', 'Apache', 'BSD']
                   },
                   {type: "input",
                    message: "What command should be run to install dependencies?",
                    name: "installation"
                   },
                   {type: "input",
                    message: "What command should we use to test your project?",
                    name: "test"
                   },
                   {type: "input",
                    message: "What does the user need to know to use your project?",
                    name: "uses"
                   },
                   {type: "input",
                    message: "What does the user need to know to contribute to this project?",
                    name: "contribution"
                   }
];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
    for (var i=0; i < questions.length; i++){
        inquirer
            .prompt(questions[i])
            .then(function(response){
                console.log(response.username);
            })
    }
}

// // function call to initialize program
init();
