import express from "express";
import dotenv from "dotenv";
import postsRoute from "./routes/posts.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use('/posts', postsRoute);

app.listen(process.env.PORT, () => {
  console.info(`server running on port: ${process.env.PORT}`)
})