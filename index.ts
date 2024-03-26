import inquirer from 'inquirer'
const message= await inquirer.prompt([
    {
        name: "name",
        msg: "Enter your name:",
        type: "input"
    }
])
console.log("Your name is",message.name)