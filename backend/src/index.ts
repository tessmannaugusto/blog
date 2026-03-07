import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import postsRoute from "./routes/posts.js"
import contactRoute from "./routes/contact.js"
import authRoute from "./routes/auth.js"

dotenv.config();

const PORT = parseInt(process.env.PORT || "3000")
const app = express();

app.use(cors());
app.use(express.json());
app.use('/posts', postsRoute);
app.use('/contacts', contactRoute);
app.use('/auth', authRoute);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`)
}).on('error', (err) => {
  console.error('❌ Server error:', err)
  process.exit(1)
})