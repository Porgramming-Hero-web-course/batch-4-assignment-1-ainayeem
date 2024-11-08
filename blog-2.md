# How to handle asynchronous operations using async/await over callback/promise TypeScript.

## Callback Approach

Before async/await and Promises, callbacks were the go-to method for handling asynchronous operations. A callback function is passed as an argument to another function and executed once the task completes. However, nested callbacks often lead to "callback hell," making the code difficult to read and maintain. For example, fetching data using a callback look like this:

```
function fetchData(callback: (data: string) => void): void {
    setTimeout(() => {
        callback("Data fetched!");
    }, 100);
}

fetchData((data) => {
    console.log(data); // Data fetched!
});
```

## Promise Approach

Promises were created to better asynchronous programming by more elegantly handling asynchronous operations results. Promises make chaining possible. `.catch()` for errors and `then()` for success. Despite making nested callbacks simpler, it can still lead to lengthy sequences of `.then()` calls, which can be inconvenient for complicated systems. Here's an example of how to use promises:

```
function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 100);
    });
}

fetchData()
    .then((data) => {
        console.log(data); // Data fetched!
    })
    .catch((error) => {
        console.error(error);
    });
```

## async/await Approach

Async/await is a new way for writing asynchronous code in a more synchronous manner. The async function returns a promise and the await keyword pauses function execution until the promise is fulfilled. This eliminates nested callbacks and chaining, making the code easier to read. For example, using async/await to retrieve data appears cleaner:

```
async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 1000);
    });
}

async function main() {
    const data = await fetchData();
    console.log(data); // Output: Data fetched!
}

main();
```

## The Way of Handling Multiple Asynchronous Operations

Async/await makes it simple to manage several asynchronous actions sequentially, making sure that one task is finished before going on to the next. This keeps code flat and minimizes complexity. For instance, async/await makes sequential data retrieval and processing easier to understand than promises or callbacks:

```
async function fetchData(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 100);
    });
}

async function processData(data: string): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Processed: ${data}`);
        }, 100);
    });
}

async function main() {
    const data = await fetchData();
    const processedData = await processData(data);
    console.log(processedData); // Data fetched!
}

main();
```

## The Advantages of Async/Await

Compared to callbacks and promises, async/await has a number of benefits, such as easier syntax, better error handling and enhanced readability. The code seems synchronous, which facilitates comprehension. Try/catch blocks prevent the deep nesting present in callbacks and streamline error handling.
