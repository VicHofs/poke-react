# pull official base image
FROM node:12-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and build app dependencies 
COPY . .
RUN yarn install
RUN yarn run build


CMD ["yarn", "run", "ssr"]
