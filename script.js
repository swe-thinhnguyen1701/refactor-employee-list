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
  let addNewEmployeeStatus = {
    process: true,
    interrupt: false,
  };
  while (addNewEmployeeStatus.process) {
    const employeeData = {
      firstName: "",
      lastName: "",
      salary: 0,
    };

    const key = {
      firstName: true,
      lastName: false,
      salary: false,
    };

    while (key.firstName) {
      let firstName = window.prompt("Enter employee first name");

      // handle "cancel" option, ask user once again before quit
      if (firstName === null) {
        const stop = window.confirm("Are you sure to quit?");
        if (stop) {
          addNewEmployeeStatus.interrupt = true;
          addNewEmployeeStatus.process = false;
          break;
        }
      } else {
        // clean first name
        if (firstName.length === 0 || firstName.length > 32) {
          window.alert(
            "First name must have at least 1 character and at most 32 characters"
          );
        } else {
          firstName = cleanName(firstName);
          console.log(firstName);
          if (firstName === null) {
            window.alert("First name is INVALID");
          } else {
            employeeData.firstName = firstName;
            key.lastName = true;
            key.firstName = false;
          }
        }
      }
    }

    // Prompt last name
    while (key.lastName) {
      let lastName = window.prompt("Enter employee last name");

      // handle "cancel" option, ask user once again before quit
      if (lastName === null) {
        const stop = window.confirm("Are you sure to quit?");
        if (stop) {
          addNewEmployeeStatus.interrupt = true;
          addNewEmployeeStatus.process = false;
          break;
        }
      } else {
        // clean first name
        if (lastName.length === 0 || lastName.length > 32) {
          window.alert(
            "Last name must have at least 1 character and at most 32 characters"
          );
        } else {
          lastName = cleanName(lastName);
          console.log(lastName);
          if (lastName === null) {
            window.alert("Last name is INVALID");
          } else {
            employeeData.lastName = lastName;
            key.salary = true;
            key.lastName = false;
          }
        }
      }
    }

    while (key.salary) {
      let salary = window.prompt(
        `Enter ${employeeData.firstName} ${employeeData.lastName}'s salary`
      );

      // handle "cancel" option, ask user once again before quit
      if (salary === null) {
        const stop = window.confirm("Are you sure to quit?");
        if (stop) {
          addNewEmployeeStatus.interrupt = true;
          addNewEmployeeStatus.process = false;
          break;
        }
      } else {
        if (!isSalaryValid(salary)) {
          window.alert("INVALID salary");
        } else {
          salary = parseFloat(salary);
          if (salary < 0.01 || salary > 1_000_000_000) {
            window.alert(
              "Salary must be at least $0.01 and cannot exceed $1,000,000,000"
            );
          }else{
            employeeData.salary = salary;
            key.salary = false;
          }
        }
      }
    }

    if (
      !key.firstName &&
      !key.lastName &&
      !key.salary &&
      !addNewEmployeeStatus.interrupt
    ) {
      employeeArr.push(employeeData);
      const repeat = window.confirm(
        "Would you like to continue to add more employee?"
      );
      if (!repeat) {
        addNewEmployeeStatus.process = false;
      }
    }
  }
  
  console.log(employeeArr);
};

/**
 * cleanName remove all non-alphabetic characters except space " "
 * @param {string} name of a new employee
 * @returns a cleaned name
 */
const cleanName = function (name) {
  let beginIdx = 0,
    endIdx = 0;

  // remove leading and trailing non-alphabetic characters
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);

    if ((char >= 97 && char <= 122) || (char >= 65 && char <= 90)) {
      beginIdx = i;
      break;
    }
  }
  for (let i = name.length - 1; i > -1; i--) {
    const char = name.charCodeAt(i);

    if ((char >= 97 && char <= 122) || (char >= 65 && char <= 90)) {
      endIdx = i;
      break;
    }
  }
  name = name.slice(beginIdx, endIdx + 1);

  // remove all non-alphabetic characters except space " "
  let cleanName = [];
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);

    if (
      (char >= 97 && char <= 122) ||
      (char >= 65 && char <= 90) ||
      char === 32
    ) {
      cleanName.push(name.charAt(i));
    }
  }

  return cleanName.length != 0 ? cleanName.join("") : null;
};

/**
 * isSalaryValid determines whether a salary contains non-numeric characters.
 * @param {string} salary
 * @returns true if salary contains all digits, otherwise, return false
 */
const isSalaryValid = function (salary) {
  let period = false;

  for (let i = 0; i < 10; i++) {
    const digit = salary.charCodeAt(i);
    if (digit == 46){
      if(period) return false;
      period = true;
      continue;
    }
    if (digit < 48 || digit > 57) return false;
  }

  return true;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0;
  for(let employee of employeesArray){
    sum += employee.salary;
  }

  console.log(`Average salary: $${sum/employeesArray.length}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  console.log(employeesArray[Math.floor(Math.random() * employeesArray.length)]);
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
