const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id= '693f416ebbcb6ba80ebccdf31';

Todo.find({
	_id: id
}).then((todos) =>{
    console.log('Todos', todos);
});

Todo.findOne({
	_id: id
}).then((todo) =>{
    console.log('Todo', todo);
});

Todo.findById(id).then((todo) =>{
	if(!todo){
		return console.log('id not found');
	}
	console.log('Todo By Id', todo);
}).catch((e) => console.log(e));