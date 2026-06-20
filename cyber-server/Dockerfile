# Build context: racine du monorepo (docker compose / docker build -f cyber-server/Dockerfile .)
FROM node:20-slim AS build

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package.json package-lock.json ./
COPY packages ./packages
COPY cyber-server ./cyber-server

RUN npm ci

# Prisma generate only needs valid URL format at build time
ENV DATABASE_URL="postgresql://build:build@localhost:5432/build"
ENV DIRECT_URL="postgresql://build:build@localhost:5432/build"

RUN npm run db:generate
RUN npm run build:packages
RUN npm run build -w cyber-server

FROM node:20-slim AS runner

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json ./
COPY cyber-server/package.json ./cyber-server/package.json
COPY --from=build /app/packages ./packages
COPY --from=build /app/cyber-server/dist ./cyber-server/dist
COPY --from=build /app/node_modules ./node_modules

WORKDIR /app/cyber-server

EXPOSE 5001

CMD ["node", "dist/main.js"]
