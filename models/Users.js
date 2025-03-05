// import mongoose from "mongoose";

// const { Schema, model, models } = mongoose;

// const UsersSchema = new Schema(
// 	{
// 		email: { type: String, required: true, index: true },
// 	},
// 	{
// 		timestamps: true, // automaticaly creates a "Created At" and "Updated At" fields
// 	}
// );

// const Users = models.Users || model("Users", UsersSchema);
// export default Users;

// models/Users.js
import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const UsersSchema = new Schema(
	{
		email: { type: String, required: true, index: true },
	},
	{
		timestamps: true,
	}
);

let Users;

try {
	Users = model("Users");
} catch {
	Users = model("Users", UsersSchema);
}

export default Users;
