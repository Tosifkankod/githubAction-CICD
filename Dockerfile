# ---------- build stage ----------
FROM node:24-alpine3.22 AS builder

WORKDIR /build

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- runtime stage ----------
FROM alpine:3.22 AS runner

RUN apk add --no-cache nodejs

WORKDIR /app

COPY --from=builder /build/dist ./dist
COPY --from=builder /build/node_modules ./node_modules
COPY --from=builder /build/package.json ./

CMD ["node", "dist/index.js"]