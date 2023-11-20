# Node.js File System (FS) Module CRUD Operations

This simple Node.js script demonstrates basic CRUD (Create, Read, Update, Delete) operations using the File System (FS) module. The script performs operations on a file named `employees.json`.

## Prerequisites

Ensure you have Node.js installed on your machine. If not, you can download it [here](https://nodejs.org/).

## Usage

1. Clone the project to your computer or download it as a ZIP file.

    ```bash
    git clone https://github.com/josephnade/patika-projects/tree/main/nodejs/fs_module.git
    cd node-fs-crud
    ```

2. Open the terminal and run the script:

    ```bash
    node crud-script.js
    ```

### CRUD Operations:

#### 1. Writing a File (Create)

Writes an initial JSON object to the file `employees.json`.

#### 2. Reading a File (Read)

Reads the content of the `employees.json` file and logs it to the console.

#### 3. Appending Data (Update)

Appends a new JSON object to the `employees.json` file.

#### 4. Deleting a File (Delete)

Deletes the `employees.json` file.

## Script Overview

- The script uses the `fs` module to perform file operations.
- Each operation is asynchronous and includes error handling.
- Check the console logs for the status of each operation.

## Example Output

```bash
File has been write successfully
{
  "name": "Employee 1 Name",
  "salary": 2000
}
File has been read!
New data appended
File has been deleted
