//index.js

const functions = require('firebase-functions');
const app = require('express')();
const auth = require('./util/auth');

const { 
    loginUser,
    signUpUser,
    // uploadProfilePhoto,
    getUserDetail,
    updateUserDetails
} = require('./APIs/users')

// Users
app.post('/login', loginUser);
app.post('/signup', signUpUser);
app.get('/user', auth, getUserDetail);
app.post('/user', auth, updateUserDetails);


// Todos
// app.get('/todos', auth, getAllTodos);
// app.get('/todo/:todoId', auth, getOneTodo);
// app.post('/todo',auth, postOneTodo);
// app.delete('/todo/:todoId',auth, deleteTodo);
// app.put('/todo/:todoId',auth, editTodo);

exports.api = functions.https.onRequest(app);
