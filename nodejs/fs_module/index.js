const { error } = require('console');
const fs = require('fs');

// Reading a File
fs.readFile("password.txt", 'utf-8', (err, data) => {
    if (err) console.log(err);
    console.log(data);
    console.log("File has been read!");
});

// Writing a File
fs.writeFile("example.json", '{"name":"Yusuf", "age":24', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log("File has been write successfully");
});

// Appending a data
fs.appendFile('example.json', ',"name":"Ahmet", "age":32}', 'utf-8', (err) => {
    if (err) console.log(err);
    console.log("New data appended");
});

fs.unlink("example.json", (err) => {
    if (err) console.log(err);
    console.log("File has been deleted");
});

// Creating directories
//! Note: If recursive is false (default) first directory have not been created. If recursive is true then first directory created.
fs.mkdir('uploads/img', { recursive: true }, (err) => {
    if (err) console.log(err);
    console.log("Directory has been created");
});

// Deleting directories
//! Note: If recursive is false (default) first directory have not been deleted. If recursive is true then first directory deleted.
fs.rmdir('uploads', { recursive: true }, (err) => {
    if (err) console.log(err);
    console.log("Directory has been deleted");
});