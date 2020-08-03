FROM node:12-alpine AS builder

WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

COPY ./package*.json ./yarn.lock ./
RUN yarn install
COPY . .

RUN yarn build

FROM node:12-alpine

WORKDIR /app

COPY --from=builder /app .

CMD ["yarn", "start"]

