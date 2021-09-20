//require modules:
let fs = require('fs');

//read the file JSON
let readToDo = () => {
  let file = fs.readFileSync("./tasks.json", "utf-8");
  return JSON.parse(file);
};

//function to upload list of objects to JSON file
let saveToDo = (fileListArray) => {
  fileListArray = JSON.stringify(fileListArray, null, 4);
  fs.writeFileSync("./tasks.json", fileListArray, {encoding: "utf-8", flag: 'w'})
}

//convert array to string
let arrayToString = (array) => {
  let string = array.reduce(function(acum, num){
    return acum + " " + num; 
  })
  return string;
}

//receives the option and execute 
let optionSelect = (option, rest) => {
  let otherArgument = "";
  switch (option) {
    case "toList":
    case "listar":
      listToDo(readToDo());
      break;

    case "crear":
    case "create":
      otherArgument = arrayToString(rest);
      newToDo(otherArgument);
      break;
    
    case "filter":
    case "filtrar":
      otherArgument = arrayToString(rest);
      listToDo(filterForStatus(otherArgument));
      break;
    
    case undefined:
      console.log("Attention: you have to pass an action");
      break;

    default:
      console.log("I don't understand what you want to do");
  }
};

//function for create new task:
let newToDo = (titleTask) => {
  let fileList = readToDo();
  fileList.push({title: titleTask, status: "Pending"});
  saveToDo(fileList);
}

//function for print by status:
let filterForStatus = (parameter) => {
  let fileList = readToDo();
  let fileListFilter = fileList.filter(function(element){
    return element.status == parameter;
  })
  return fileListFilter;
}

//function for print
let listToDo = (arrayList) => {
  let status = "";
  console.log("\nNote:    |✓| => Finished,  |...| => In progress,   |X| => Pending");
  console.log("LIST TO-DO: \n");
  arrayList.forEach(function(line){
    switch (line.status) {
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

    console.log(status + " " + line.title);
  })
};


//export the main module
module.exports = optionSelect;