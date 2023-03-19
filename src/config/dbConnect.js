import mongoose from "mongoose";

mongoose.connect("mongodb+srv://bookstore:123@bookstore.hozsasc.mongodb.net/bookstore-app");

const db = mongoose.connection;

export default db;
