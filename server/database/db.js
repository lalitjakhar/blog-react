import mongoose from "mongoose";

const Connection = async () => {
  const URL = `mongodb://lalit25jakhar:<password>@ac-iowsys4-shard-00-00.cwunymd.mongodb.net:27017,ac-iowsys4-shard-00-01.cwunymd.mongodb.net:27017,ac-iowsys4-shard-00-02.cwunymd.mongodb.net:27017/?ssl=true&replicaSet=atlas-z3j7m5-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewURLParser: true });
    console.log("Database connected succcessfully");
  } catch (error) {
    console.log("error while connecting with the database", error);
  }
};
export default Connection;
