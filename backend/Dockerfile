FROM node:20.19-alpine

WORKDIR /app

# Instala dependências
COPY package*.json ./
COPY prisma ./prisma/
RUN npm ci

# Copia código
COPY . .

# Build
RUN npm run build
RUN npx prisma generate

# Expõe porta
EXPOSE 3000

# Start
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]