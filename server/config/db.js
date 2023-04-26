const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb+srv://stdncms:Sraj.786!@cluster0.tykmzrf.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
