# Trelo API

REST API for [Trelo](https://github.com/spevnev/Trelo) built with Express, PostgreSQL, Redis, and WebSockets.

## Prerequisites

- Node.js v22+
- PostgreSQL
- Redis

## Running

Install dependencies:
```shell
npm install
```

Copy `.env.TEMPLATE` to `.env` and configure environment variables.

### Development
```shell
npm run dev
```

### Tests
```shell
npm run test
```

### Docker
```shell
docker image build -t trelo-api .
docker run --network host --env-file .env trelo-api
```

**Note:** `--network host` allows the container to connect to PostgreSQL and Redis running on the host machine.
