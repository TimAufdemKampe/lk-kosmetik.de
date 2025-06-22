FROM node:18-slim as builder

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn build

FROM node:18-slim as runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/src/markdownContent ./src/markdownContent
COPY --from=builder /app/package.json ./

# Port
EXPOSE 3000

CMD ["sh", "-c", "yarn start"]