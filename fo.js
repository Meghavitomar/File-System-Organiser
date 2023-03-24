//we'll be creating a file system organizer//
// features of the project
// if u have numerous files in a folder and they are not aranged properly
// so you can use this tool to arrange them in specific directory according to their extension
//

const helpModule =require('./commands/help')
const organizeModule = require('./commands/organize')
const treeModule = require ('./commands/tree')
const { getCipherInfo } = require('crypto');
//const fs = require('fs')
//const path = require('path')
let inputArr = process.argv.slice(2)





let command = inputArr[0]

switch (command) {
    case "tree":
        treeModule.treeKey(inputArr[1])
        break;
    case "organize":
        organizeModule.organizeKey(inputArr[1])
        break;
    case "help":
        helpModule.helpkey()
        break;

    default:
        console.log("plz enter valid command");
        break;

}




