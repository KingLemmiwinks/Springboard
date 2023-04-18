### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
Callbacks: Provide functions to call after the async methods have finished
Promises: Allows methods to chain

- What is a Promise?
An object whose value is held until the completion on an async operation.

- What are the differences between an async function and a regular function?
Async functions can use the await keyword.

- What is the difference between Node.js and Express.js?
Node is a run-time environment for building server-side applications using Javascript.
Express is a framework based on Node for building web applications.

- What is the error-first callback pattern?
A function that returns an error or data.
The first argument is reserved for the error. If there is no error, the function returns data.

- What is middleware?
Code that receives request and response objects. The third argument is a callback function that is called when the middleware code completes.

- What does the `next` function do?
A function in an Express router that executes the next route after the first is complete.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
This function can be made less repetitive.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
Updated Code

```js
async function getUser(username) {
  const user = await $.getJSON(`https://api.github.com/users/${username}`);

  return user;
}
```

```js
const users = [];

users.push(getUser('elie'));
users.push(getUser('mmmaaatttttt'));
users.push(getUser('joelburton'));

```