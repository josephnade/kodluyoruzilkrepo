# Node.js Async/Await with Axios Example

This Node.js project demonstrates the use of promises, async/await, and the Axios library for making HTTP requests. The code fetches and displays data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API, and also creates a new post.

## Installation

Before running the project, make sure to install the dependencies by running the following command in your terminal:

```bash
npm install
```

## Usage
Run the main script using the following command:

```bash
node promise_async.js
```

This will execute the code and display the retrieved data and the result of creating a new post in the console.

## Project Structure
* promise_async.js: The main script containing functions for fetching and creating data using promises, async/await, and Axios.

## Functions

### 'createDataPromise(data)'
* Returns a promise that creates a new post on the JSONPlaceholder API using the provided data and Axios.


### 'getData(index)'
* Asynchronously fetches data using getDataPromise().
* If index is provided, logs the data at the specified index.
* Otherwise, logs the entire dataset.

### 'createData(data)'
* Asynchronously creates a new post using createDataPromise(data).

## Technologies
* Node.js
* Axios

## Contribution
* Contributions and feedback are welcome. If you have questions or suggestions, feel free to [contact us](mailto:yusuf.akn2017@gmail.com).