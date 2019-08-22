FROM node:11

LABEL maintainer="Kuang-Ming Chen <kuangmingchen0702@gmail.com>"

WORKDIR ~/app

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "start"]
