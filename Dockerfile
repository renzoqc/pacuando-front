FROM node:18-alpine3.15
RUN mkdir app
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3020
CMD ["npm","run","dev","--","--host"]