FROM node:25-alpine

RUN mkdir app
WORKDIR app

ENV NODE_ENV="production"

ENV PORT=3000
EXPOSE 3000

COPY package.json package.json
RUN npm install --only=prod --no-audit

COPY src .

CMD ["node", "."]
