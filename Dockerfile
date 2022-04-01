FROM node:16
# 

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install 

COPY . /app

EXPOSE 5008
CMD [ "yarn", "run", "dev" ]