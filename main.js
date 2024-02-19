import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "input",
        name: "UserName",
        message: "what is your name?",
        validate: (ans) => {
            if (!ans) {
                return "please give your answer";
            }
            return true;
        }
    },
    {
        type: "number",
        name: "userAge",
        message: "what is your age?"
    },
    {
        type: "list",
        name: "userHobby",
        message: "what is your Hobby?",
        choices: ["cricket", "study", "learning",]
    },
    {
        type: "checkbox",
        name: "userEmail",
        messsage: "what is your Email",
        choices: ["Etc@test.com", "Day@test.com", "Shy@test.com"],
        default: "Nothing"
    },
]);
console.log(user);
