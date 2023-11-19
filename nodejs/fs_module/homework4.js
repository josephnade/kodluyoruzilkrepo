const fs = require('fs');

// Writing a File
fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log("File has been write successfully");
});

// Reading a File
fs.readFile("employees.json", 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("File has been read!");
});

// Appending a data
fs.appendFile('employees.json', '{"name": "Employee 2 Name", "salary": 4500}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log("New data appended");
});

fs.unlink("employees.json", (err) => {
    if (err) console.log(err);
    console.log("File has been deleted");
});