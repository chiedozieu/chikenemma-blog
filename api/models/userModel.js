import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
username: {
    type: 'string',
    required: true,
    unique: true
},
email: {
    type: 'string',
    required: true,
    unique: true
},
  password: {
    type: 'string',
    required: true
  },
profilePicture: {
  type: 'string',
  default: 'https://cdn.pixabay.com/photo/2021/07/02/04/48/user-6380868_1280.png',
}
},{timestamps: true})

const User = mongoose.model('User', userSchema);

export default User;