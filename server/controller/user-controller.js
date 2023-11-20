import user from "../model/user.js";
import bcrypt from "bcrypt";

const LiveController = {};

LiveController.signupUser = async (request, response) => {
  try {
    const hashedPassword = await bcrypt.hash(request.body.password, 10);

    const userdata = {
      username: request.body.username,
      name: request.body.name,
      password: hashedPassword,
    };

    const newUser = new user(userdata);
    await newUser.save();

    return response
      .status(200)
      .json({ response: response, msg: "Signup successful" });
  } catch (error) {
    return response
      .status(500)
      .json({ msg: "Error while signing up the user" });
  }
};
export default LiveController;
