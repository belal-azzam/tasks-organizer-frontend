FROM node:14

RUN apt-get update && \
    apt-get install nano

COPY app /user/src
WORKDIR /usr/src/app

EXPOSE 4200
RUN npm install

CMD ["npm", "run", "start"]