const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
    	return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) =>{
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    //find One and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({name:'MIAO'}).then((result) =>{
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('593c152fd7a757234c53ec76')}).then((results) =>{
        console.log(JSON.stringify(results, undefined, 2));
    });

});