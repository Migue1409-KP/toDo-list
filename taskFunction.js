//require modules:
let fs = require('fs');

//read the file JSON
let readToDo = () => {
  let file = fs.readFileSync("./tareas.json", "utf-8");
  file = JSON.parse(file);
  return file;
};

//print the list and esthetic:    
let listToDo = () => {
  fileList = readToDo();
  let status = "";
  console.log("\nNote:    |✓| => Finished,  |...| => In progress,   |X| => Pending");
  console.log("LIST TO-DO: \n");

  for (let i = 0; i < fileList.length; i++) {
    switch (fileList[i].status) {
      case "Finished":
        status = "| ✓ |";
        break;

      case "In progress":
        status = "|...|";
        break;

      case "Pending":
        status = "| X |";
        break;

      default:
        status = "| X |";
    }

    console.log(status + " " + fileList[i].title);
  }
};

//receives the option and execute 
let optionSelect = (option) => {
  switch (option) {
    case "to list":
    case "listar":
      listToDo();
      break;

    case undefined:
      console.log("Atención - Tienes que pasar una acción");
      break;

    default:
      console.log("No entiendo qué quieres hacer");
  }
};

//export the main module
module.exports = optionSelect;