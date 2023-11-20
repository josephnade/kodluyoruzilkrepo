# Simple Express.js Web Server

This repository contains a basic Express.js web server with three main routes: `/` (Index), `/about`, and `/contact`. Additionally, there is a wildcard route (`*`) to handle 404 errors when a requested page is not found.

## Installation

Before running the application, make sure to install the required packages. Use the following command in the terminal:

```bash
npm install
```
## Technologies
* <b>Express.js</b>: This web application is built using Express.js, a popular web framework for Node.js.

## Usage
After installing the packages, you can run the server using the following command:

```bash
node index.js
```

1. The server will be running on port 3000 by default. You can access the different routes as follows:
   * Index: http://localhost:3000/
   * About: http://localhost:3000/about
   * Contact: http://localhost:3000/contact 
2. To stop the server, press Ctrl + C in the terminal.