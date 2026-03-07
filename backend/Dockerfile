FROM node:20.19-alpine

# Instala dependências
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

# Copia código
COPY . .
ENV DATABASE_URL="postgresql://dummy:dummy@dummy:5432/dummy?schema=public"
RUN npx prisma generate
RUN npm run build

# Expõe porta
EXPOSE 3000

# Start
CMD ["sh", "-c", "echo '🔵 Rodando migrations...' && npx prisma migrate deploy && echo '✅ Migrations OK' && echo '🔵 Iniciando servidor...' && npm start"]