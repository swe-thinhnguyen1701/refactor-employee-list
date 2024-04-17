// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Create employee array const
const employeeArr = [];

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  addNewEmployee();
};

/**
 * addNewEmployee prompts user to enter data for new employee and runs infinitely
 * until user stops entering
 */
const addNewEmployee = function () {
  let addNewEmployeeStatus = true;
  while (addNewEmployeeStatus) {
    const key = {
      firstName: true,
      lastName: false,
      salary: false
    }

    while(key.firstName){
      let firstName = window.prompt("Enter employee first name");

      // handle "cancel" option, ask user once again before quit
      if(firstName === null){
        const stop = window.confirm("Are you sure to quit?");
        if(stop) break;
      }

      firstName = cleanName(firstName);

      if(firstName.length == 0 || firstName.length > 32){
        window.alert("First name must have at least 1 character and at most 32 characters");
      }else{        
        key.lastName = true;
        key.firstName = false;
      }      
    }

    
    const employeeData = {
      firstName: "",
      lastName: "",
      salary: 0,
    };
  }
};

/**
 * cleanName remove all non-alphabetic characters except space " "
 * @param {string} name of a new employee
 * @returns a cleaned name
 */
const cleanName = function(name){
  let beginIdx = 0, endIdx = 0;

  // remove leading and trailing non-alphabetic characters
  for(let i = 0; i < name.length; i ++){
    const char = name.charCodeAt(i);

    if((char >= 97 && char <= 122) || (char >= 65 && char <= 90)){
      beginIdx = i;
      break;
    }
  }
  for(let i = name.length - 1; i > -1; i--){
    const char = name.charCodeAt(i);

    if((char >= 97 && char <= 122) || (char >= 65 && char <= 90)){
      endIdx = i;
      break;
    }
  }
  name = name.slice(beginIdx, endIdx + 1);
  
  // remove all non-alphabetic characters except space " "
  let cleanName = [];
  for(let i = 0; i < name.length; i++){
    const char = name.charCodeAt(i);

    if((char >= 97 && char <= 122) || (char >= 65 && char <= 90) || char === 32){
      cleanName.push(name.charAt(i))
    }
  }

  return cleanName.length != 0 ? null : cleanName.join("");
}

/**
 * isNameValid determine whether a name qualify condition
 * @param {string} name of a new employee
 * @returns false if name === null or the length of name is equal to 0 and greater than 32
 */
// const isNameValid = function (name) {
//   if (name === null || name.length === 0 || name.length > 32) return false;
//   return true;
// };

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
