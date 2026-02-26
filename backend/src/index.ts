import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import postsRoute from "./routes/posts.js"
import contactRoute from "./routes/contact.js"
import authRoute from "./routes/auth.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/posts', postsRoute);
app.use('/contacts', contactRoute);
app.use('/auth', authRoute);

app.listen(process.env.PORT, () => {
  console.info(`server running on port: ${process.env.PORT}`)
})