import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectionToDB = async () => {
  try {
    const { connection } = await mongoose.connect(
      process.env.MONGO_URL ||
        `mongodb+srv://vimalraj:stp%40261141@cluster0.wgcbctp.mongodb.net/LMS_EL`
    );
    if (connection) {
      console.log(`Connected to mongodb : ${connection.host}`);
    }
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export default connectionToDB;
