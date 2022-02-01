# airbank-challenge

This code repository contains the backend and frontend source code for the fullstack system based on the code challenge given.

## Backend Service
#### Technology Used
- Typecript
- Nestjs
- GraphQL
- Prisma(ORM)
- PostgresSQL
- Docker (used for provisioning database infrastructure)

## Frontend Service
#### Technology Used
- Javascript
- Vue
- Vue Apollo

## Project setup

To setup up this project locally, please ensure you have the make utility installed on your laptop.

### Installing Project Dependencies

```
make
```
or
```
make setup
```

After you've successfully installed the project dependencies, please run the following make commands accordingly
in seperate terminal process inside in the airbank-challenge directory (the directory containing the Makefile)

```
make db
```

```
make migrate
```

```
make server
```

```
make spa
```

### Running Tests

To run the backend test suit

```
make test
```
