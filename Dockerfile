FROM node:16.13-alpine

COPY . .

CMD ["npm", "run", "serve:prodev"]