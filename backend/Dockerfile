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
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]