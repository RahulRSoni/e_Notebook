const mongoose = require('mongoose');
const mongouri = 'mongodb://localhost:27017'
mongoose.set('strictQuery', false);

const connectToMongo = ()=>{
    mongoose.connect(mongouri,()=>{
        console.log("Connect successfully")
    })
}


module.exports = connectToMongo;