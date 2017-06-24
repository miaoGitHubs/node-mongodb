const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
    if(err){
    	return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');

    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('593c1c2ec2a2cf2e22535dc9'
    // )},{
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) =>{
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('593c169ca7cee21fc47f5c0a')
    },{
        $set: {
            name: 'MIAO'
        }
        $inc: {
            age:15
        }
    }, {
        returnOriginal:false
    }).then((result) =>{
        console.log(result);
    })
});