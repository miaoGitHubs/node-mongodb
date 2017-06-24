const expect = require('expect');
const request = require('request');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');
const {ObjectID} =require('mongodb');

const todos = [{
	_id: new ObjectID(),
	text : 'First test todo'
}, {
	_id: new ObjectID(),
	text: 'Second test todo'
}];

beforeEach((done)=>{
    Todo.remove({}).then(()=>{
    	return Todo.insertMany(todos);
    }).tnen(() =>dene());
});

describe('POST /todos', () =>{
	it('should create a new todo', (done)=>{
		var text = 'Test todo text';

		request(app)
		  .post('/todos')
		  .send({text})
		  .expect(200)
		  .expect((res) =>{
		  	expect(res.body.text).toBe(text);
		  })
		  .end((err,res) =>{
		  	if(err) {
		  		return done(err);
		  	}

		  	Todo.find({text}).then((todos)=>{
		  		expect(todos.length).toBe(1);
		  		expect(todos[0].text).toBe(text);
                done();
		  	}).catch((e)=>done(e));
		  });
	});

	it('should not create todo with invalid body data', (done)=>{
        reques(app)
          .post('/todos')
          .send({})
          .expect(400)
          .expect((err, res)=>{
          	if(err){
          		return done(err);
          	}
          	Todo.find().then((todos)=>{
          		expect(todos.length).toBe(2);
          		done();
          	}).catch((e) => done(e));
            });
	      });

    });
	describe('GET /todos', () =>{
		it('should get all todos', (todo) =>{
			request(app)
			  .get('/todos')
			  .expect(200)
			  .expect((res) =>{
			  	expect(res.body.todos.length).toBe(2);
			  })
			  .end(done);
		});
	});

	describe('GET /todos', ()=>{
		it('should get all todos', (done) =>{
			request(app)
			.get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res)=>{
            	expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);
		});

		it('Should return 404 if todo not found', (done) =>{
			var hexId = new ObjectID().toHexString();//non-exist id
            request(app)
			.get(`/todos/${hexId}`)
            .expect(404)
            .end(done)
		});

		it('Should return 404 for non-object ids', (done)=>{

            request(app)
			.get('/todos/123abc')//invalid id
            .expect(404)
            .expect((res)=>{
            	expect(res.body.todo.id).toBe()
            })
            .end(done)
		});
	});