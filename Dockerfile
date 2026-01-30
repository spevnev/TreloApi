FROM node:22-alpine

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV="production"

ENV PORT=3001
EXPOSE 3001

COPY package.json package.json
RUN npm install --only=prod --no-audit

COPY src .

CMD ["node", "."]
