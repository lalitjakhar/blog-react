import user from "../model/user.js";
const LiveController = {}

LiveController.signupUser = async (request, response) => {
  try {
    const userData = request.body;
    console.log(userData, "899999999998999");

    const newUser = new user(userData);
    await newUser.save();

    return response.status(200).json({ msg: "Signup successful" });
  } catch (error) {
    return response
      .status(500)
      .json({ msg: "Error while signing up the user" });
  }
};
export default LiveController;
