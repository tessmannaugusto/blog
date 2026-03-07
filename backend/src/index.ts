console.log('================================')
console.log('🚀 ARQUIVO INDEX.TS CARREGADO')
console.log('================================')
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import postsRoute from "./routes/posts.js"
// import contactRoute from "./routes/contact.js"
// import authRoute from "./routes/auth.js"

console.log('✅ Imports carregados')

dotenv.config();

console.log('✅ Envs carregadas')

const PORT = parseInt(process.env.PORT || "3000")
console.log(`📍 Porta configurada: ${PORT}`)
const app = express();
console.log('✅ Express inicializado')
app.use(cors());
app.use(express.json());
console.log('✅ Middlewares configurados')
// app.use('/posts', postsRoute);
// app.use('/contacts', contactRoute);
// app.use('/auth', authRoute);
console.log('✅ Rotas registradas')

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`)
}).on('error', (err) => {
  console.error('❌ Server error:', err)
  process.exit(1)
})