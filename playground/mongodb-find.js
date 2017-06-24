const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
    	return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({
    //     //complete: false
    //     _id: new ObjectID('593c12bc3d39661dc414502f')
    // }).toArray().then((docs) =>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) =>{
    //     console.log('unable to fetch todos',err);
    // });

    // db.collection('Todos').find().count().then((count) =>{
    //     console.log(`Todos count:${count }`)
    // }, (err) =>{
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Users').find({name:'MIAO'}).toArray().then((docs) =>{
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2))
    }, (err) =>{
        if(err){
            console.log('Unable to fetch user', err);
        }
    });

    //db.close();

});