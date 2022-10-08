import { User, Product } from "./models.js";

export const getAllUsers = async () => {
  let users = await User.find().exec();
  console.log(users);
};

export const getUserByEmailAndPassword = async (email, password) => {
  let user = await User.findOne({ email: email, password: password }).exec();
  if (user) {
    return user;
  } else {
    return null;
  }
};

export const getUserByEmail = async (email) => {
  let user = await User.findOne({ email: email }).exec();

  if (user) {
    return user;
  } else {
    return null;
  }
};

export const addUser = async (name, email, password) => {
  const user = new User({
    name: name,
    email: email,
    password: password,
  });
  return await user.save();
};

export const checkIfUserExists = async (email) => {
  const user = await getUserByEmail(email);
  return user ? true : false;
};

export const getProducts = async () => {
  return await Product.find().exec();
};
