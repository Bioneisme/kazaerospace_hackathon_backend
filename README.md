# OnDuken Platform BackEnd

*Main Repository: https://github.com/Bioneisme/onduken_hackathon*

- [Navigation](#navigation)
    - [Features](#features)
    - [Endpoints](#endpoints)
    - [Installation](#prerequisites)

## Features:
* JWT Authentication
* Data parsing from online stores. Runs once an hour (cron) or using post request
* Logging requests and parsing with rotation (rotation once an hour, archiving)

## Endpoints:
* [POST] /api/users/login - {email, password} (token, user)
* [POST] /api/users/register - {email, name, password, repeat_password} (token, user)
* [GET] /api/users/logout
* [GET] /api/users/getMe (user)
* [GET] /api/users/validate - {jwt} (token, user)
* [POST] /api/products/parser - {category, store} (oldProductsTotal, newProductsTotal, parsedTotal, productsTotal)
* [GET] /api/products/getAllProducts (data)
* [GET] /api/products/getProductById/:id (data)
* [GET] /api/products/getProductByTitle/:title (data)


## Getting Started
### Prerequisites
* NodeJS, NPM (https://www.npmjs.com/get-npm)
* PostgreSQL (https://www.postgresql.org)

### Installing
```bash
# Get the latest snapshot
git clone https://github.com/Bioneisme/onduken_hackathon_backend.git
```
``` bash
# Change directory
cd onduken_hackathon_backend
```
``` bash
# Install dependencies
npm install
```
Create an .env file locally. You can duplicate .env.example and name the new copy .env. Adapt the variables to your needs.
``` bash
# After setting up .env start app
npm run start
```
