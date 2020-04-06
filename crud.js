const axios = require('axios');

// // Read Operatin or GET Request
// axios
//   .get('https://jsonplaceholder.typicode.com/todos?_limit=3')
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err.message));

//----------------------------------------------------------------

// // Create Operation or POST Request
// axios
//   .post('https://jsonplaceholder.typicode.com/todos', {
//     title: 'my title',
//     completed: false,
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err.message));

//----------------------------------------------------------------

// // Read Operatin or GET  SIngle Request
// axios
//   .get('https://jsonplaceholder.typicode.com/todos/201')
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err.message));

//----------------------------------------------------------------

//   // Update Operation or PUT Request
// axios
//   .put('https://jsonplaceholder.typicode.com/todos/1', {
//     title: 'my title-updated',
//     completed: false,
//   })
//   .then((res) => console.log(res.data))
//   .catch((err) => console.log(err.message));

// // Delete Operation or DELETE Request
axios
  .delete('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err.message));
