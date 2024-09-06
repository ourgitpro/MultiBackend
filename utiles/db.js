const mongoose = require("mongoose");

module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URAL);
    console.log("Data base connection");
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};
