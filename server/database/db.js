import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@ac-iowsys4-shard-00-00.cwunymd.mongodb.net:27017,ac-iowsys4-shard-00-01.cwunymd.mongodb.net:27017,ac-iowsys4-shard-00-02.cwunymd.mongodb.net:27017/?ssl=true&replicaSet=atlas-z3j7m5-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error);
  }
};

export default Connection;
