const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Todo.remove
// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

//Todo.findOneAndRemove

// Todo.findOneIdAndRemove({_id:'594ee196aa831c8da9e90227'}).then((todo)=>{
//     console.log(todo);
// });
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('594ee196aa831c8da9e90227').then((todo)=>{
    console.log(todo);
});