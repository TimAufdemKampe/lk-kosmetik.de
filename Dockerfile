FROM node:18-slim as builder

WORKDIR /app

COPY yarn.lock package.json ./

RUN yarn install --frozen-lockfile

COPY . .

ARG NEXT_PUBLIC_BASE_URL
ENV NEXT_PUBLIC_BASE_URL=$NEXT_PUBLIC_BASE_URL

ARG NEXT_PUBLIC_INTERNAL_ACCESS_TOKEN
ENV NEXT_PUBLIC_INTERNAL_ACCESS_TOKEN=$NEXT_PUBLIC_INTERNAL_ACCESS_TOKEN

RUN yarn build

FROM node:18-slim as runner

WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/src/markdownContent ./src/markdownContent
COPY --from=builder /app/package.json ./
COPY --from=builder /app/src/app/favicon.ico ./src/app/favicon.ico

# Port
EXPOSE 3000

CMD ["sh", "-c", "yarn start"]