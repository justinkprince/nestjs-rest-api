## Description

Testing filtering and pagination.

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

## Endpoints

- [Get all](http://localhost:3000/entity)
- [Get one by ID](http://localhost:3000/entity/123)
- [Search for one by ID](http://localhost:3000/entity/?id=123)
- [Get all w/ pagination](http://localhost:3000/entity/?numPerPage=100)
- [Get all w/ pagination (page 5)](http://localhost:3000/entity/?numPerPage=100&page=5)
- [Filter by status: ACTIVE](http://localhost:3000/entity/?status=active)
- [Filter by status: EXPIRED](http://localhost:3000/entity/?status=expired)
- [Filter by status: UPCOMING](http://localhost:3000/entity/?status=upcoming)
