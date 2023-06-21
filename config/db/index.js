const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb+srv://wearn:hoang1995@cluster0.jttue.mongodb.net/wearn?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("connect sucess");
  } catch {
    console.log("Connect fail");
  }
}
module.exports={connect,mongoURI:"mongodb+srv://wearn:hoang1995@cluster0.jttue.mongodb.net/wearn?retryWrites=true&w=majority"}