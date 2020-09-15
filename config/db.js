const mongoose = require("mongoose");

module.exports = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("error: " + err);
  }

  mongoose.connection.on("connected", () => {
    console.log("Mongoose connected to db...");
  });

  mongoose.connection.on("error", (err) => {
    console.error.bind(console, "connection error:");
  });

  mongoose.connection.on("disconnected", () => {
    console.log("Mongoose connection is disconnected...");
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        "Mongoose connection is disconnected due to app termination..."
      );
      process.exit(0);
    });
  });
};
