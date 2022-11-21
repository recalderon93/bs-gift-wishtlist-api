import mongoose from "mongoose";

export interface IUser{
	itemSelected: string;
	ip: string;
}

const UserSchema = new mongoose.Schema<IUser>({
	ip: String,
	itemSelected: String
})

const UserModel = mongoose.model('User', UserSchema);

export default UserModel;