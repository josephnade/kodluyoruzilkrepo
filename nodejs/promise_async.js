const axios = require('axios');

function getDataPromise() {
    return new Promise((resolve, reject) => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(err);
        });
    });
}

function createDataPromise(data) {
    return new Promise((resolve, reject) => {
        axios.post("https://jsonplaceholder.typicode.com/posts", data).then((response) => {
            console.log(response.data);
            resolve("Post created...");
        }).catch((err) => {
            reject(err);
        })
    });
}

function sortDatasPromise(data) {
    return new Promise((resolve, reject) => {

    });
}

async function getData(index) {
    try {
        if (index === undefined) {
            const rawJson = await getDataPromise();
            const datas = rawJson.map(jsonData => JSON.parse(JSON.stringify(jsonData)));
            console.log(datas);
        } else {
            const rawJson = await getDataPromise();
            const datas = rawJson.map(jsonData => JSON.parse(JSON.stringify(jsonData)));
            console.log(datas[index]);
        }

    } catch (error) {
        console.log(`Error occured: ${error}`);
    }
}

async function createData(data) {
    try {
        const successString = await createDataPromise(data);
        console.log(successString);

    } catch (error) {
        console.log(`Error occured: ${error}`);
    }
}

getData(2);
createData({
    "userId": 100,
    "title": "New Post Title",
    "body": "New Post",
});
getData();