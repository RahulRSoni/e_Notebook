const mongoose = require('mongoose');
const { Schema } = mongoose;
// mongoose.set('strictQuery', false);
// mongoose.set('strictQuery', true);

const UserSchema = new Schema({
   userName:{
    type: String,
    require:true
  },
     email: {
        type: String,
        required: true,
        unique: true
    },
      password: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now
    }
});
const User = mongoose.model('user', UserSchema)
module.exports = User;