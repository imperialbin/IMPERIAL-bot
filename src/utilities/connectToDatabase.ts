import { connect } from "mongoose";

// env
const DB_URI = process.env.DB_URI;

export const connectToDatabase = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    connect(
      DB_URI!,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          console.log(err);
          return reject("An error occurred whilst connecting to database!");
        }

        resolve("Successfully connected to database");
      }
    );
  });
};
