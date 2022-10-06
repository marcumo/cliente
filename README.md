<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

 
# Cliente Api

## Description

[Nest](https://github.com/nestjs/nest) Simple Crud NestJS rest api.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test
```

## Lambda

```bash
$ npm install
$ npm run build
$ npm prune --production
$ zip -r deploy/app.zip dist/ node_modules
```

## Example

Example [here](https://jmcawi0bk9.execute-api.us-east-1.amazonaws.com/Dev/doc/swagger).

Postman [Cliente.postman_collection.json](Cliente.postman_collection.json)

## License

Nest is [MIT licensed](#).
