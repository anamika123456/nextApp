import mongoose from "mongoose";

const loginModel  = new mongoose.Schema({
    name: String,
    password: String
});

export const Login = mongoose.models.users || mongoose.model("users", loginModel);