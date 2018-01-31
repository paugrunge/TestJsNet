/* 1. Define a prototype for a class named "Employee".
An employee has a first name, last name and a salary.
Provide a method for increasing their salary by 1,000
Provide a method for displaying the employee details */


function Employee(first, last, salary) {
    this.firstName = first;
    this.lastName = last;
    this.salary = salary;
}

Employee.prototype.increaseSalary  = function() {
    this.salary += 1000;
};

Employee.prototype.info = function() {
    console.log("Firstname: " + this.firstName);
    console.log("Lastname: " + this.lastName);
    console.log("Salary: " + this.salary);
};

/* 2. Write a function called "MultiplyBy" which will produce the following outputs when invoked:
console.log(mul(2)(3)(4)); // output : 24 
console.log(mul(4)(3)(4)); // output : 48 */

var mul = function MultiplyBy(x) {
    return function (y) { 
        return function (z) {  
            return x * y * z; 
        };
    };
};

/* 3. Write a function that accept a list of country names as input and returns the longest country name as output.
Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output : "United States of America" */

function Longest_Country_Name(country_names) {
    var country = "";
    for (let i of country_names) {
        if (i.length > country.length) country = i;
    }
    return country;
}

