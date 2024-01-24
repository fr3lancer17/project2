import mongoose from 'mongoose';
import { uri } from '../server';
import User from '../Schemas/User';

mongoose.connect(uri);

const newUser = new User({
  name: 'Ben Smith',
  age: 25,
  email: 'johndoe@example.com'
});

newUser.save((err, savedUser) => {
  if (err) {
    console.error(err);
  } else {
    console.log(savedUser);
  }
});