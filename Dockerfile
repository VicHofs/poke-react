# pull official base image
FROM node:12-alpine AS builder

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and build app dependencies 
COPY . .
RUN npm install
RUN yarn run build

FROM node:12-alpine
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .

CMD ["npm", "run", "ssr"]
